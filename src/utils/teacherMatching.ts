import { ClassGroup, AuthUser, Teacher } from '../types';

/**
 * Normalizes Vietnamese string: removes title prefixes, accents, special chars, multiple spaces
 */
export const normalizeTeacherName = (name: string): string => {
  if (!name) return '';
  return name
    .toLowerCase()
    .replace(/^(cô|thầy|gv|mr|ms|mrs)\s+/gi, '')
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/[^a-z0-9]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

const KNOWN_ALIASES: Record<string, string[]> = {
  'hoang minh tam': ['hoang minh tam', 'minh tam', 'hoang tam', 'tam'],
  'minh tam': ['hoang minh tam', 'minh tam', 'hoang tam', 'tam'],
  'dam trung hieu': ['dam trung hieu', 'dam hieu', 'trung hieu', 'hieu'],
  'dam hieu': ['dam trung hieu', 'dam hieu', 'trung hieu', 'hieu'],
  'trung hieu': ['dam trung hieu', 'dam hieu', 'trung hieu', 'hieu'],
  'vu thi ngan': ['vu thi ngan', 'vu ngan', 'ngan', 'vuthingan', 'vungan'],
  'vu ngan': ['vu thi ngan', 'vu ngan', 'ngan', 'vuthingan', 'vungan'],
  'ngan': ['vu thi ngan', 'vu ngan', 'ngan', 'vuthingan', 'vungan'],
  'vu thuy': ['vu thuy', 'vu thi thuy', 'thuy'],
  'thuy': ['vu thuy', 'vu thi thuy', 'thuy'],
  'duong vu': ['duong vu', 'vu duong', 'vu'],
  'diep dang': ['diep dang', 'dang diep', 'diep'],
  'tam vuong': ['tam vuong', 'vuong tam', 'tam'],
  'thom nguyen': ['thom nguyen', 'nguyen thom', 'thom'],
  'trang nguyen': ['trang nguyen', 'nguyen trang', 'trang'],
  'vu ngoc': ['vu ngoc', 'vu thi ngoc', 'ngoc'],
  'huyen chi': ['huyen chi', 'chi'],
  'nguyen hai long': ['nguyen hai long', 'hai long', 'long'],
  'hai long': ['nguyen hai long', 'hai long', 'long'],
};

/**
 * Strips common Vietnamese middle names (thị, văn, đức, hữu, đình, etc.) for flexible matching
 */
const stripMiddleNames = (name: string): string => {
  return name
    .replace(/\b(thi|van|duc|huu|dinh|xuan|trung|ngoc|hoang|nguyen)\b/gi, ' ')
    .replace(/\s+/g, ' ')
    .trim();
};

/**
 * Checks if a given class group is assigned to the current user (teacher).
 */
export const isClassAssignedToTeacher = (
  c: ClassGroup,
  currentUser: AuthUser | null,
  teachersList: Teacher[] = []
): boolean => {
  if (!c || !currentUser) return false;
  if (currentUser.role === 'admin' || currentUser.role === 'assistant') return true;

  const userEmail = (currentUser.email || '').toLowerCase().trim();
  const userTeacherId = currentUser.teacherId;

  // 1. Direct teacherId check
  if (userTeacherId) {
    if (c.teacherId === userTeacherId) return true;
    if (Array.isArray((c as any).teacherIds) && (c as any).teacherIds.includes(userTeacherId)) return true;
  }

  // 2. Find teacher profile by email or ID
  const matchedTeacher = teachersList.find(
    (t) => (t.email && t.email.toLowerCase().trim() === userEmail) || (userTeacherId && t.id === userTeacherId)
  );
  const teacherId = matchedTeacher?.id || userTeacherId;

  if (teacherId) {
    if (c.teacherId === teacherId) return true;
    if (Array.isArray((c as any).teacherIds) && (c as any).teacherIds.includes(teacherId)) return true;
  }

  // 3. Special check for Vu Thi Ngan / Ngan
  const isUserNgan = 
    userEmail.includes('vuthingan') ||
    userEmail.includes('ngan109441') ||
    (currentUser.name && (normalizeTeacherName(currentUser.name).includes('ngan') || currentUser.name.toLowerCase().includes('ngần')));

  if (isUserNgan) {
    if (c.teacherId === 'tch-vuthuy') return true;
    const rawClassT = (c.teacherName || '') + ' ' + (Array.isArray(c.teacherNames) ? c.teacherNames.join(' ') : '');
    if (rawClassT.toLowerCase().includes('ngần') || rawClassT.toLowerCase().includes('ngân') || rawClassT.toLowerCase().includes('vũ thị ngần')) {
      return true;
    }
  }

  // 4. Gather candidate normalized names for the current user
  const teacherNamesToMatch = new Set<string>();
  if (currentUser.name) {
    teacherNamesToMatch.add(normalizeTeacherName(currentUser.name));
  }
  if (matchedTeacher?.name) {
    teacherNamesToMatch.add(normalizeTeacherName(matchedTeacher.name));
  }

  // Expand with specific multi-word exact sub-names or aliases to prevent short letters (like "vu", "tam") from colliding
  const userEmailLower = userEmail.toLowerCase();
  if (userEmailLower.includes('tamvuong') || (matchedTeacher && matchedTeacher.name.includes('Tâm Vương'))) {
    teacherNamesToMatch.add('tam vuong');
    teacherNamesToMatch.add('vuong tam');
  } else if (
    userEmailLower.includes('hoangminhtam') ||
    userEmailLower.includes('minhtam') ||
    (matchedTeacher && (matchedTeacher.name.includes('Minh Tâm') || matchedTeacher.name.includes('Hoàng Minh Tâm'))) ||
    (currentUser.name && (currentUser.name.includes('Minh Tâm') || currentUser.name.includes('Hoàng Minh Tâm')))
  ) {
    teacherNamesToMatch.add('hoang minh tam');
    teacherNamesToMatch.add('minh tam');
    teacherNamesToMatch.add('hoang tam');
  } else if (userEmailLower.includes('vuthingan') || (matchedTeacher && matchedTeacher.name.includes('Ngần'))) {
    teacherNamesToMatch.add('vu thi ngan');
    teacherNamesToMatch.add('vu ngan');
  } else if (userEmailLower.includes('vuthuy') || userEmailLower.includes('ngan109441') || (matchedTeacher && matchedTeacher.name.includes('Thùy'))) {
    teacherNamesToMatch.add('vu thuy');
    teacherNamesToMatch.add('thuy');
  } else if (userEmailLower.includes('damtrunghieu') || (matchedTeacher && matchedTeacher.name.includes('Trung Hiếu'))) {
    teacherNamesToMatch.add('dam trung hieu');
    teacherNamesToMatch.add('trung hieu');
    teacherNamesToMatch.add('dam hieu');
  } else if (userEmailLower.includes('vungoc') || (matchedTeacher && matchedTeacher.name.includes('Vũ Ngọc'))) {
    teacherNamesToMatch.add('vu ngoc');
    teacherNamesToMatch.add('ngoc');
  } else if (userEmailLower.includes('dangdiep') || (matchedTeacher && matchedTeacher.name.includes('Diệp Đặng'))) {
    teacherNamesToMatch.add('diep dang');
    teacherNamesToMatch.add('diep');
  } else if (userEmailLower.includes('thomthom') || (matchedTeacher && matchedTeacher.name.includes('Thơm Nguyễn'))) {
    teacherNamesToMatch.add('thom nguyen');
    teacherNamesToMatch.add('thom');
  } else if (userEmailLower.includes('t.nguyen') || (matchedTeacher && matchedTeacher.name.includes('Trang Nguyễn'))) {
    teacherNamesToMatch.add('trang nguyen');
    teacherNamesToMatch.add('trang');
  } else if (userEmailLower.includes('huyenchi') || (matchedTeacher && matchedTeacher.name.includes('Huyền Chi'))) {
    teacherNamesToMatch.add('huyen chi');
    teacherNamesToMatch.add('chi');
  } else if (userEmailLower.includes('hailong') || (matchedTeacher && matchedTeacher.name.includes('Hải Long'))) {
    teacherNamesToMatch.add('nguyen hai long');
    teacherNamesToMatch.add('hai long');
  }

  // 5. Gather class teacher names
  const classTeacherParts: string[] = [];
  if (c.teacherName) {
    c.teacherName.split(/[,;&+]/).forEach(p => classTeacherParts.push(p.trim()));
  }
  if (c.assistantTeacherName) {
    c.assistantTeacherName.split(/[,;&+]/).forEach(p => classTeacherParts.push(p.trim()));
  }
  if (Array.isArray(c.teacherNames)) {
    c.teacherNames.forEach(t => {
      if (t) classTeacherParts.push(String(t).trim());
    });
  }

  const normalizedClassTeacherParts = classTeacherParts.map(p => normalizeTeacherName(p)).filter(Boolean);

  // 6. Compare candidate names with class tokens
  for (const userCand of teacherNamesToMatch) {
    if (userCand.length < 2) continue;
    for (const classPart of normalizedClassTeacherParts) {
      if (classPart === userCand) return true;
      // Handle sub-name exact word match, e.g. "hoang minh tam" contains "minh tam"
      if (classPart.includes(userCand) && userCand.length >= 7) return true;
      if (userCand.includes(classPart) && classPart.length >= 7) return true;
    }
  }

  return false;
};

/**
 * Resolves the Teacher object for a given session teacher string or alias.
 */
export const resolveTeacherFromSession = (
  rawTeacherName: string,
  classId?: string,
  teachersList: Teacher[] = [],
  classesList: ClassGroup[] = []
): Teacher | null => {
  if (!rawTeacherName) return null;
  const raw = rawTeacherName.trim();
  const lower = raw.toLowerCase();

  // 1. Direct match by ID
  const byId = teachersList.find((t) => t.id === raw);
  if (byId) return byId;

  // 2. Direct match by exact name or email
  const byExact = teachersList.find(
    (t) => t.name.toLowerCase().trim() === lower || (t.email && t.email.toLowerCase().trim() === lower)
  );
  if (byExact) return byExact;

  // 3. Known aliases & initials
  if (lower === 'dv' || lower.includes('dương vũ') || lower === 'vu' || lower.includes('thầy vũ')) {
    const t = teachersList.find((x) => x.name.toLowerCase().includes('dương vũ'));
    if (t) return t;
  }
  if (lower.includes('minh tâm') || lower.includes('m.tâm') || lower.includes('mtâm') || lower === 'tâm') {
    const t = teachersList.find((x) => x.name.toLowerCase().includes('minh tâm'));
    if (t) return t;
  }
  if (lower.includes('ngần') || lower.includes('ngân')) {
    const t = teachersList.find((x) => x.name.toLowerCase().includes('ngần') || x.name.toLowerCase().includes('ngân'));
    if (t) return t;
  }
  if (lower.includes('hiếu') || lower.includes('hieu')) {
    const t = teachersList.find((x) => x.name.toLowerCase().includes('hiếu') || x.name.toLowerCase().includes('hieu'));
    if (t) return t;
  }
  if (lower.includes('vũ thùy') || lower.includes('thùy') || lower.includes('thuy')) {
    const t = teachersList.find((x) => x.name.toLowerCase().includes('thùy') || x.name.toLowerCase().includes('thuy'));
    if (t) return t;
  }
  if (lower.includes('vũ ngọc') || lower.includes('ngọc') || lower.includes('ngoc')) {
    const t = teachersList.find((x) => x.name.toLowerCase().includes('vũ ngọc') || x.name.toLowerCase().includes('ngọc'));
    if (t) return t;
  }
  if (lower.includes('hải long') || lower.includes('long')) {
    const t = teachersList.find((x) => x.name.toLowerCase().includes('long'));
    if (t) return t;
  }
  if (lower.includes('diệp') || lower.includes('diep')) {
    const t = teachersList.find((x) => x.name.toLowerCase().includes('diệp') || x.name.toLowerCase().includes('diep'));
    if (t) return t;
  }
  if (lower.includes('huyền chi') || lower.includes('chi')) {
    const t = teachersList.find((x) => x.name.toLowerCase().includes('chi'));
    if (t) return t;
  }
  if (lower.includes('thơm') || lower.includes('thom')) {
    const t = teachersList.find((x) => x.name.toLowerCase().includes('thơm') || x.name.toLowerCase().includes('thom'));
    if (t) return t;
  }
  if (lower.includes('trang')) {
    const t = teachersList.find((x) => x.name.toLowerCase().includes('trang'));
    if (t) return t;
  }

  // 4. Normalized name comparison
  const normRaw = normalizeTeacherName(raw);
  for (const t of teachersList) {
    const normT = normalizeTeacherName(t.name);
    if (normT === normRaw) return t;
    if (normT.length >= 3 && normRaw.length >= 3) {
      if (normT.includes(normRaw) || normRaw.includes(normT)) return t;
    }
  }

  // 5. Fallback: match from class assigned teacher ONLY if rawTeacherName is empty or unspecified
  if (!rawTeacherName && classId) {
    const cls = classesList.find((c) => c.id === classId);
    if (cls && cls.teacherId) {
      const clsT = teachersList.find((t) => t.id === cls.teacherId);
      if (clsT) return clsT;
    }
    if (cls && cls.teacherName) {
      const clsT = teachersList.find(
        (t) =>
          normalizeTeacherName(t.name) === normalizeTeacherName(cls.teacherName!) ||
          cls.teacherName!.toLowerCase().includes(t.name.toLowerCase())
      );
      if (clsT) return clsT;
    }
  }

  return null;
};

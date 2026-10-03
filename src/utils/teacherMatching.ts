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
  'hoang minh tam': ['hoang minh tam', 'minh tam', 'tam'],
  'minh tam': ['hoang minh tam', 'minh tam', 'tam'],
  'dam trung hieu': ['dam trung hieu', 'dam hieu', 'trung hieu', 'hieu'],
  'dam hieu': ['dam trung hieu', 'dam hieu', 'trung hieu', 'hieu'],
  'trung hieu': ['dam trung hieu', 'dam hieu', 'trung hieu', 'hieu'],
  'vu thi ngan': ['vu thi ngan', 'vu thi ngan', 'ngan'],
  'vu thuy': ['vu thuy', 'thuy'],
  'duong vu': ['duong vu', 'vu'],
  'diep dang': ['diep dang', 'diep'],
  'tam vuong': ['tam vuong', 'tam'],
  'thom nguyen': ['thom nguyen', 'thom'],
  'trang nguyen': ['trang nguyen', 'trang'],
  'vu ngoc': ['vu ngoc', 'ngoc'],
  'huyen chi': ['huyen chi', 'chi'],
  'nguyen hai long': ['nguyen hai long', 'hai long', 'long'],
  'hai long': ['nguyen hai long', 'hai long', 'long'],
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
  if (currentUser.role === 'admin') return true;

  const userEmail = (currentUser.email || '').toLowerCase().trim();
  const userTeacherId = currentUser.teacherId;

  // 1. Check direct ID matching
  if (userTeacherId) {
    if (c.teacherId === userTeacherId) return true;
    if (Array.isArray((c as any).teacherIds) && (c as any).teacherIds.includes(userTeacherId)) return true;
  }

  // 2. Find teacher profile by email
  const matchedTeacher = teachersList.find(
    (t) => t.email && t.email.toLowerCase().trim() === userEmail
  );
  if (matchedTeacher?.id) {
    if (c.teacherId === matchedTeacher.id) return true;
    if (Array.isArray((c as any).teacherIds) && (c as any).teacherIds.includes(matchedTeacher.id)) return true;
  }

  // 3. Gather candidate normalized names for the current user
  const userCandidates = new Set<string>();
  
  if (currentUser.name) {
    const norm = normalizeTeacherName(currentUser.name);
    if (norm) userCandidates.add(norm);
  }
  if (matchedTeacher?.name) {
    const norm = normalizeTeacherName(matchedTeacher.name);
    if (norm) userCandidates.add(norm);
  }

  // Expand with aliases
  const expandedUserCandidates = new Set<string>(userCandidates);
  for (const cand of userCandidates) {
    for (const [key, variants] of Object.entries(KNOWN_ALIASES)) {
      if (cand.includes(key) || key.includes(cand)) {
        variants.forEach((v) => expandedUserCandidates.add(v));
      }
    }
  }

  // 4. Gather class teacher names
  const classTeacherStrings: string[] = [];
  if (c.teacherName) classTeacherStrings.push(c.teacherName);
  if (c.assistantTeacherName) classTeacherStrings.push(c.assistantTeacherName);
  if (Array.isArray(c.teacherNames)) {
    c.teacherNames.forEach((t) => {
      if (t) classTeacherStrings.push(String(t));
    });
  }

  // Split multi-teacher strings like "Vũ Thị Ngần, Đàm Trung Hiếu, Vũ Thùy"
  const classTokens = new Set<string>();
  for (const raw of classTeacherStrings) {
    const parts = raw.split(/[,;&+]/).map((p) => p.trim());
    for (const part of parts) {
      const norm = normalizeTeacherName(part);
      if (norm) classTokens.add(norm);
    }
    const fullNorm = normalizeTeacherName(raw);
    if (fullNorm) classTokens.add(fullNorm);
  }

  // 5. Compare candidate names with class tokens
  for (const uCand of expandedUserCandidates) {
    if (uCand.length < 2) continue;

    for (const cToken of classTokens) {
      if (cToken.length < 2) continue;

      // Exact match
      if (uCand === cToken) return true;

      // Bidirectional substring match
      if (cToken.includes(uCand) || uCand.includes(cToken)) {
        if (uCand.length >= 3 || cToken.length >= 3) {
          return true;
        }
      }

      // Alias matching on class token
      for (const [key, variants] of Object.entries(KNOWN_ALIASES)) {
        if (cToken.includes(key) || key.includes(cToken)) {
          if (variants.includes(uCand)) return true;
        }
      }
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

  // 5. Fallback: match from class assigned teacher
  if (classId) {
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

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

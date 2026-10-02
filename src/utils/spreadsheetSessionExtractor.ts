import { AttendanceRecord, ClassGroup, Teacher } from '../types';

export function parseDateParts(dateStr: string, defaultYear = 2026): { year: number; month: number; day: number; isoDate: string } | null {
  if (!dateStr) return null;
  const clean = String(dateStr).trim();

  // YYYY-MM-DD or YYYY/MM/DD
  if (/^\d{4}[-/]\d{1,2}[-/]\d{1,2}/.test(clean)) {
    const parts = clean.split(/[-/]/);
    const year = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    if (!isNaN(year) && !isNaN(month)) {
      return { year, month, day: isNaN(day) ? 1 : day, isoDate: `${year}-${String(month).padStart(2, '0')}-${String(isNaN(day) ? 1 : day).padStart(2, '0')}` };
    }
  }

  // DD/MM/YYYY or D/M/YYYY
  if (/^\d{1,2}[-/]\d{1,2}[-/]\d{4}/.test(clean)) {
    const parts = clean.split(/[-/]/);
    const day = parseInt(parts[0], 10);
    const month = parseInt(parts[1], 10);
    const year = parseInt(parts[2], 10);
    if (!isNaN(year) && !isNaN(month)) {
      return { year, month, day: isNaN(day) ? 1 : day, isoDate: `${year}-${String(month).padStart(2, '0')}-${String(isNaN(day) ? 1 : day).padStart(2, '0')}` };
    }
  }

  // MM-DD or MM/DD (e.g. "09-28" or "9/28") -> assume current year 2026
  if (/^\d{1,2}[-/]\d{1,2}$/.test(clean)) {
    const parts = clean.split(/[-/]/);
    const month = parseInt(parts[0], 10);
    const day = parseInt(parts[1], 10);
    if (!isNaN(month)) {
      const year = defaultYear;
      return { year, month, day: isNaN(day) ? 1 : day, isoDate: `${year}-${String(month).padStart(2, '0')}-${String(isNaN(day) ? 1 : day).padStart(2, '0')}` };
    }
  }

  // Try standard Date parse
  const d = new Date(clean);
  if (!isNaN(d.getTime())) {
    const year = d.getFullYear();
    const month = d.getMonth() + 1;
    const day = d.getDate();
    return { year, month, day, isoDate: `${year}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}` };
  }

  return null;
}

/**
 * Extracts AttendanceRecords from classSpreadsheets collection data.
 * This guarantees that sessions saved via Class Detail View or Class Spreadsheets
 * are instantly visible across Teacher Sessions Module and Payroll HR Module.
 */
export function extractSessionsFromSpreadsheets(
  classSpreadsheets: any[],
  classes: ClassGroup[],
  teachers: Teacher[]
): AttendanceRecord[] {
  const extractedRecords: AttendanceRecord[] = [];

  if (!Array.isArray(classSpreadsheets)) return [];

  classSpreadsheets.forEach((sheet) => {
    if (!sheet || !sheet.id || !Array.isArray(sheet.columns)) return;

    // Resolve class ID from sheet ID ("sheet-cls-123" -> "cls-123", or "sheet-class-ielts-73" -> "class-ielts-73")
    const rawClassId = String(sheet.id).replace(/^sheet-/, '');
    const cls = classes.find((c) => {
      if (!c) return false;
      const cIdClean = String(c.id).toLowerCase();
      const rawClean = rawClassId.toLowerCase();
      if (cIdClean === rawClean) return true;
      if (cIdClean.endsWith(rawClean) || rawClean.endsWith(cIdClean)) return true;
      // Match class name numbers e.g. "73" in "Ielts 73 Ins"
      const cNum = c.name.match(/\d+/)?.[0];
      const rawNum = rawClean.match(/\d+/)?.[0];
      return cNum && rawNum && cNum === rawNum;
    });

    const classId = cls ? cls.id : rawClassId;
    
    // Get possible teachers for this class
    const possibleTeachers: Teacher[] = [];
    if (cls) {
      const namesToMatch = [
        cls.teacherName,
        ...(Array.isArray(cls.teacherNames) ? cls.teacherNames : [])
      ].filter(Boolean);
      
      namesToMatch.forEach(name => {
        const found = teachers.find(t => 
          t.name.toLowerCase().normalize('NFC').includes(String(name).toLowerCase().normalize('NFC')) ||
          String(name).toLowerCase().normalize('NFC').includes(t.name.toLowerCase().normalize('NFC'))
        );
        if (found) possibleTeachers.push(found);
      });
    }

    const defaultTeacherName = cls
      ? (cls.teacherName || (Array.isArray(cls.teacherNames) && cls.teacherNames.length > 0 ? cls.teacherNames.join(', ') : 'Giáo viên IDV'))
      : 'Giáo viên IDV';

    sheet.columns.forEach((col: any) => {
      if (!col) return;

      // 1. Resolve date
      // ... (keep date logic) ...
      let sessionDate = col.date;
      if (!sessionDate && col.teacherAndDate) {
        const mMatch = col.teacherAndDate.match(/(\d{1,2})[-/](\d{1,2})/);
        if (mMatch) {
          const month = String(mMatch[1]).padStart(2, '0');
          const day = String(mMatch[2]).padStart(2, '0');
          sessionDate = `2026-${month}-${day}`;
        }
      }
      if (!sessionDate && col.id) {
        const tsMatch = col.id.match(/\d{12,13}/);
        if (tsMatch) {
          try {
            sessionDate = new Date(parseInt(tsMatch[0], 10)).toISOString().split('T')[0];
          } catch (e) {}
        }
      }
      if (!sessionDate) {
        sessionDate = new Date().toISOString().split('T')[0];
      }

      // 2. Resolve teacher name
      let teacherName = defaultTeacherName;
      if (col.teacherAndDate) {
        const rawT = col.teacherAndDate
          .replace(/^\d{1,2}[-/]\d{1,2}/, '') // Remove date
          .replace(/^[Ll]\d+\s+/, '')          // Remove "L1 ", "l2 "
          .trim(); 
        
        if (rawT && rawT.toUpperCase() !== 'GV') {
          // If we have possible teachers for this class, restrict match to them
          const searchSpace = possibleTeachers.length > 0 ? possibleTeachers : teachers;
          
          const matchedT = searchSpace.find((t) => {
            const normTName = t.name.toLowerCase().normalize('NFC');
            const normRaw = rawT.toLowerCase().normalize('NFC');
            return normTName === normRaw || normTName.includes(normRaw) || normRaw.includes(normTName);
          });
          if (matchedT) {
            teacherName = matchedT.name;
          } else {
            teacherName = rawT;
          }
        }
      }

      // 3. Resolve session number
      let sessionNumber = col.sessionNumber;
      if (!sessionNumber && col.lessonLabel) {
        const numMatch = col.lessonLabel.match(/\d+/);
        if (numMatch) sessionNumber = parseInt(numMatch[0], 10);
      }
      if (!sessionNumber) sessionNumber = 1;

      // 4. Count students present
      let studentPresentCount = 15;
      if (Array.isArray(sheet.rows) && sheet.rows.length > 0) {
        let count = 0;
        sheet.rows.forEach((row: any) => {
          if (row && row.scores && row.scores[col.id] !== undefined && row.scores[col.id] !== '') {
            count++;
          }
        });
        if (count > 0) studentPresentCount = count;
        else studentPresentCount = sheet.rows.length;
      }

      extractedRecords.push({
        id: `att-sheet-${sheet.id}-${col.id}`,
        classId: classId,
        date: sessionDate,
        sessionNumber: sessionNumber,
        studentId: 'sample-student',
        studentName: 'Sĩ số lớp',
        status: 'Có mặt',
        note: col.lessonLabel ? `Buổi ${col.lessonLabel}` : `Buổi ${sessionNumber}`,
        teacherName: teacherName,
        skillTaught: col.subSkill || 'Tổng hợp',
        skillsTaught: col.subSkill ? [col.subSkill] : [],
        studentTotalCount: sheet.rows.length,
        studentPresentCount: studentPresentCount
      });
    });
  });

  return extractedRecords;
}

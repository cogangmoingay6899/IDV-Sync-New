import { AttendanceRecord, ClassGroup, Teacher } from '../types';

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
    const defaultTeacherName = cls
      ? (cls.teacherName || (Array.isArray(cls.teacherNames) && cls.teacherNames.length > 0 ? cls.teacherNames.join(', ') : 'Giáo viên IDV'))
      : 'Giáo viên IDV';

    sheet.columns.forEach((col: any) => {
      if (!col) return;

      // 1. Resolve date
      let sessionDate = col.date;
      if (!sessionDate && col.teacherAndDate) {
        // e.g. "09-28 Chi" or "09-26" -> derive current year date "2026-09-28"
        const mMatch = col.teacherAndDate.match(/(\d{1,2})[-/](\d{1,2})/);
        if (mMatch) {
          const month = String(mMatch[1]).padStart(2, '0');
          const day = String(mMatch[2]).padStart(2, '0');
          sessionDate = `2026-${month}-${day}`;
        }
      }
      if (!sessionDate && col.id) {
        // e.g. col_sess_23_1790569769546 -> extract timestamp 1790569769546
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
        const rawT = col.teacherAndDate.replace(/^[\d\s/-]+/, '').trim(); // e.g. "Chi", "Ngọc", "Đặng", "GV"
        if (rawT && rawT.toUpperCase() !== 'GV') {
          // Find matching teacher in teachers list
          const matchedT = teachers.find((t) => {
            const normTName = t.name.toLowerCase().normalize('NFC');
            const normRaw = rawT.toLowerCase().normalize('NFC');
            return normTName.includes(normRaw) || normRaw.includes(normTName);
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
      });
    });
  });

  return extractedRecords;
}

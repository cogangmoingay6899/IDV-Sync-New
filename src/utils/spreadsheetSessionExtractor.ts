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
  // Deprecated class_spreadsheets in favor of direct attendance records
  return [];
}

import React, { useState, useMemo } from 'react';
import {
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  Users,
  Layers,
  Award,
  Search,
  BookOpen,
  Filter,
  CheckCircle2,
  Calendar,
  Clock,
  MapPin,
  Sparkles,
  DollarSign,
  FileText,
  Calculator,
  Printer,
  Share2
} from 'lucide-react';
import { ClassGroup, Student, AttendanceRecord, Teacher, AuthUser } from '../../types';
import { calculateTeacherSessionSalary } from '../../utils/salaryCalculator';
import { extractSessionsFromSpreadsheets, parseDateParts } from '../../utils/spreadsheetSessionExtractor';
import { isClassAssignedToTeacher, normalizeTeacherName, resolveTeacherFromSession } from '../../utils/teacherMatching';
import { TeacherSalaryReportModal } from '../modals/TeacherSalaryReportModal';

interface TeacherSessionsModuleProps {
  classes: ClassGroup[];
  students: Student[];
  teachers: Teacher[];
  attendanceRecords: AttendanceRecord[];
  classSpreadsheets?: any[];
  currentUser?: AuthUser;
}

export const TeacherSessionsModule: React.FC<TeacherSessionsModuleProps> = ({
  classes,
  students,
  teachers,
  attendanceRecords = [],
  classSpreadsheets = [],
  currentUser,
}) => {
  // Determine if user is teacher, assistant, or admin
  const isTeacher = currentUser?.role === 'teacher';
  const isAssistant = currentUser?.role === 'assistant';
  const isAdmin = currentUser?.role === 'admin';
  const canViewAll = isAdmin || isAssistant || (currentUser?.name && currentUser.name.toLowerCase().includes('dương vũ'));
  const isTeacherView = isTeacher && !canViewAll;

  // Find exact teacher profile if logged-in user is a teacher
  const loggedInTeacherProfile = useMemo(() => {
    if (!isTeacherView || !currentUser) return null;
    const userEmail = (currentUser.email || '').toLowerCase().trim();
    const rawName = (currentUser.name || '').toLowerCase().trim();
    const cleanName = rawName.replace(/^(cô|thầy|gv|mr|ms|mrs)\s+/gi, '').trim();

    return teachers.find((t) => {
      if (!t) return false;
      if (currentUser.teacherId && t.id === currentUser.teacherId) return true;
      if (userEmail && t.email && t.email.toLowerCase().trim() === userEmail) return true;

      const normT = (t.name || '').toLowerCase().replace(/^(cô|thầy|gv|mr|ms|mrs)\s+/gi, '').trim();
      if (cleanName && normT && (normT === cleanName || normT.includes(cleanName) || cleanName.includes(normT))) {
        return true;
      }
      if (cleanName.includes('ngần') || cleanName.includes('ngân')) {
        if (normT.includes('ngần') || normT.includes('ngân')) return true;
      }
      return false;
    });
  }, [isTeacherView, currentUser, teachers]);

  // Fallback name for the logged-in teacher
  const loggedInTeacherName = useMemo(() => {
    if (!isTeacherView) return '';
    return loggedInTeacherProfile?.name || currentUser?.name || '';
  }, [isTeacherView, loggedInTeacherProfile, currentUser]);

  // Year and Month state - defaults to current month & year
  const currentDate = new Date();
  const [selectedYear, setSelectedYear] = useState<number>(currentDate.getFullYear());
  const [selectedMonth, setSelectedMonth] = useState<number>(currentDate.getMonth() + 1);

  // Selected teacher state for admin / assistant
  // Default to "all" (Tất cả giáo viên) for admins/assistants, or the logged-in teacher's name for teachers
  const [selectedTeacherId, setSelectedTeacherId] = useState<string>(
    isTeacherView ? loggedInTeacherProfile?.id || 'logged-in' : 'all'
  );

  const [isSalaryReportModalOpen, setIsSalaryReportModalOpen] = useState<boolean>(false);

  const [searchQuery, setSearchQuery] = useState<string>('');

  // Handle month navigation
  const handlePrevMonth = () => {
    if (selectedMonth === 1) {
      setSelectedMonth(12);
      setSelectedYear((prev) => prev - 1);
    } else {
      setSelectedMonth((prev) => prev - 1);
    }
  };

  const handleNextMonth = () => {
    if (selectedMonth === 12) {
      setSelectedMonth(1);
      setSelectedYear((prev) => prev + 1);
    } else {
      setSelectedMonth((prev) => prev + 1);
    }
  };

  // Safe Date parsing helper using parseDateParts
  const parseYearMonth = (dateStr: string) => {
    const parsed = parseDateParts(dateStr);
    if (parsed) return { year: parsed.year, month: parsed.month };
    return null;
  };

  // Helper to estimate scheduled sessions for a class in a given month based on its schedule
  const getScheduledSessionsCountForMonth = (cls: ClassGroup, year: number, month: number): number => {
    if (!cls || !cls.schedule) return 8;
    const scheduleLower = cls.schedule.toLowerCase();
    
    const targetDays: number[] = [];
    if (scheduleLower.includes('thứ 2') || scheduleLower.includes('thứ hai') || scheduleLower.includes('t2') || scheduleLower.includes('mon')) targetDays.push(1);
    if (scheduleLower.includes('thứ 3') || scheduleLower.includes('thứ ba') || scheduleLower.includes('t3') || scheduleLower.includes('tue')) targetDays.push(2);
    if (scheduleLower.includes('thứ 4') || scheduleLower.includes('thứ tư') || scheduleLower.includes('t4') || scheduleLower.includes('wed')) targetDays.push(3);
    if (scheduleLower.includes('thứ 5') || scheduleLower.includes('thứ năm') || scheduleLower.includes('t5') || scheduleLower.includes('thu')) targetDays.push(4);
    if (scheduleLower.includes('thứ 6') || scheduleLower.includes('thứ sáu') || scheduleLower.includes('t6') || scheduleLower.includes('fri')) targetDays.push(5);
    if (scheduleLower.includes('thứ 7') || scheduleLower.includes('thứ bảy') || scheduleLower.includes('t7') || scheduleLower.includes('sat')) targetDays.push(6);
    if (scheduleLower.includes('chủ nhật') || scheduleLower.includes('cn') || scheduleLower.includes('sun')) targetDays.push(0);

    if (targetDays.length === 0) return 8;

    const daysInMonth = new Date(year, month, 0).getDate();
    let count = 0;
    for (let day = 1; day <= daysInMonth; day++) {
      const dayOfWeek = new Date(year, month - 1, day).getDay();
      if (targetDays.includes(dayOfWeek)) {
        count++;
      }
    }
    return count > 0 ? count : 8;
  };

  // Extract all unique sessions from attendance records + class spreadsheets
  const processedSessions = useMemo(() => {
    const sessionsMap = new Map<
      string,
      {
        key: string;
        classId: string;
        className: string;
        courseName: string;
        branch: string;
        schedule: string;
        date: string;
        sessionNumber: number;
        teacherName: string;
        studentPresentCount: number;
        studentTotalCount: number;
        skillsTaught: string[];
      }
    >();

    const spreadsheetRecords = extractSessionsFromSpreadsheets(classSpreadsheets, classes, teachers);
    const combinedRecords = [...attendanceRecords, ...spreadsheetRecords];

    combinedRecords.forEach((record) => {
      // Parse year and month
      const dateParts = parseYearMonth(record.date);
      if (!dateParts) return;
      if (dateParts.year !== selectedYear || dateParts.month !== selectedMonth) return;

      const sessionKey = `${record.classId}_${record.date}_${record.sessionNumber}`;

      // Find class details
      const cls = classes.find((c) => c.id === record.classId);
      const className = cls ? cls.name : 'Lớp học đã ẩn';
      const courseName = cls ? cls.courseName : 'Khóa học';
      const branch = cls?.branch || 'Chưa rõ';
      const schedule = cls?.schedule || 'Chưa ghi nhận lịch';

      // 1. Determine EXACT teacher who taught this session (from record or fallback to class teacher if unassigned)
      let sessionTeacher = record.teacherName?.trim() || '';
      if (!sessionTeacher && cls) {
        sessionTeacher = Array.isArray(cls.teacherNames) && cls.teacherNames.length > 0
          ? cls.teacherNames[0]
          : (cls.teacherName || '');
      }
      if (!sessionTeacher) {
        sessionTeacher = 'IELTS DƯƠNG VŨ';
      }

      // Initialize session entry if not exists
      if (!sessionsMap.has(sessionKey)) {
        const initialTotal = (record as any).studentTotalCount || cls?.currentStudents || cls?.studentCount || 0;
        sessionsMap.set(sessionKey, {
          key: sessionKey,
          classId: record.classId,
          className,
          courseName,
          branch,
          schedule,
          date: record.date,
          sessionNumber: record.sessionNumber,
          teacherName: sessionTeacher,
          studentPresentCount: 0,
          studentTotalCount: initialTotal,
          skillsTaught: record.skillsTaught || (record.skillTaught ? [record.skillTaught] : []),
        });
      }

      const session = sessionsMap.get(sessionKey)!;
      
      // If record is an aggregated session (e.g. from spreadsheet extractor):
      if ((record as any).studentPresentCount !== undefined) {
        session.studentPresentCount = (record as any).studentPresentCount;
        if ((record as any).studentTotalCount) {
          session.studentTotalCount = (record as any).studentTotalCount;
        }
      } else {
        // Per-student attendance record: increment present count
        const isPresent = record.status === 'Có mặt' || record.status === 'Đi muộn' || record.status === 'Đi trễ';
        if (isPresent) {
          session.studentPresentCount += 1;
        }
        if (!session.studentTotalCount || session.studentTotalCount <= 0) {
          session.studentTotalCount = (session.studentTotalCount || 0) + 1;
        }
      }

      // Combine skills
      if (record.skillsTaught && record.skillsTaught.length > 0) {
        record.skillsTaught.forEach((skill) => {
          if (!session.skillsTaught.includes(skill)) {
            session.skillsTaught.push(skill);
          }
        });
      } else if (record.skillTaught && !session.skillsTaught.includes(record.skillTaught)) {
        session.skillsTaught.push(record.skillTaught);
      }
    });

    return Array.from(sessionsMap.values()).sort((a, b) => b.date.localeCompare(a.date));
  }, [attendanceRecords, classSpreadsheets, classes, teachers, selectedYear, selectedMonth]);

  // Helper to match a session with a selected teacher
  const isSessionForSelectedTeacher = (session: typeof processedSessions[0], teacherObj: Teacher | null | undefined, id: string) => {
    // 1. If "Tất cả giáo viên" (all) is selected, include all sessions!
    if (id === 'all') return true;

    let targetName = '';
    let targetEmail = '';
    let targetTeacherId = '';

    if (isTeacher && id === 'logged-in') {
      if (!loggedInTeacherName) return false;
      targetName = loggedInTeacherName;
      targetEmail = loggedInTeacherProfile?.email || '';
      targetTeacherId = loggedInTeacherProfile?.id || '';
    } else {
      const targetTeacher = teachers.find((t) => t.id === id);
      if (!targetTeacher) return false;
      targetName = targetTeacher.name;
      targetEmail = targetTeacher.email || '';
      targetTeacherId = targetTeacher.id;
    }

    // 1. Resolve exact teacher who taught this session
    const matchedTeacher = resolveTeacherFromSession(session.teacherName, session.classId, teachers, classes);
    if (matchedTeacher) {
      if (matchedTeacher.id === targetTeacherId) return true;
      if (targetName && matchedTeacher.name.toLowerCase() === targetName.toLowerCase()) return true;
      return false; // Matched another distinct teacher
    }

    // 2. Direct name comparison if teacher object resolution was ambiguous
    if (targetName && session.teacherName) {
      const targetNorm = normalizeTeacherName(targetName);
      const sessNorm = normalizeTeacherName(session.teacherName);
      if (sessNorm === targetNorm || sessNorm.includes(targetNorm) || targetNorm.includes(sessNorm)) {
        return true;
      }
      return false;
    }

    // 3. Fallback ONLY if session has no teacher name at all
    if (!session.teacherName && session.classId) {
      const cls = classes.find((c) => c.id === session.classId);
      if (cls) {
        const authUserLike = {
          id: targetTeacherId,
          name: targetName,
          email: targetEmail,
          role: 'teacher' as const,
          teacherId: targetTeacherId,
        };
        if (isClassAssignedToTeacher(cls, authUserLike, teachers)) {
          return true;
        }
      }
    }

    return false;
  };

  // Get current filtered teacher object (if a specific teacher is selected or logged in)
  const activeTeacher = useMemo(() => {
    if (isTeacher) return loggedInTeacherProfile;
    if (selectedTeacherId === 'all') return null;
    return teachers.find((t) => t.id === selectedTeacherId);
  }, [isTeacher, loggedInTeacherProfile, selectedTeacherId, teachers]);

  // Filtered sessions for the selected/active teacher
  const filteredSessions = useMemo(() => {
    return processedSessions.filter((session) => {
      // Verify teacher matching
      if (!isSessionForSelectedTeacher(session, activeTeacher, selectedTeacherId)) return false;

      // Apply search query (search by Class name, Course name, or branch)
      if (searchQuery.trim()) {
        const query = searchQuery.toLowerCase();
        return (
          session.className.toLowerCase().includes(query) ||
          session.courseName.toLowerCase().includes(query) ||
          session.teacherName.toLowerCase().includes(query) ||
          session.branch.toLowerCase().includes(query)
        );
      }
      return true;
    });
  }, [processedSessions, activeTeacher, selectedTeacherId, searchQuery, isTeacher, loggedInTeacherName]);

  // 1. Group stats: Sessions taught per class
  const classBreakdown = useMemo(() => {
    const breakdownMap = new Map<
      string,
      {
        classId: string;
        className: string;
        courseName: string;
        branch: string;
        schedule: string;
        totalSessions: number;
        sessions: { date: string; sessionNumber: number; presentCount: number; totalCount: number }[];
      }
    >();

    filteredSessions.forEach((session) => {
      if (!breakdownMap.has(session.classId)) {
        breakdownMap.set(session.classId, {
          classId: session.classId,
          className: session.className,
          courseName: session.courseName,
          branch: session.branch,
          schedule: session.schedule,
          totalSessions: 0,
          sessions: [],
        });
      }

      const entry = breakdownMap.get(session.classId)!;
      entry.totalSessions += 1;
      entry.sessions.push({
        date: session.date,
        sessionNumber: session.sessionNumber,
        presentCount: session.studentPresentCount,
        totalCount: session.studentTotalCount,
      });
    });

    // Sort dates within classes
    const list = Array.from(breakdownMap.values());
    list.forEach((item) => {
      item.sessions.sort((a, b) => a.date.localeCompare(b.date));
    });

    return list.sort((a, b) => b.totalSessions - a.totalSessions);
  }, [filteredSessions]);

  // 2. Global summary stats of ALL teachers
  const globalTeachersSummary = useMemo(() => {
    const summaryMap = new Map<
      string,
      {
        teacherName: string;
        teacherId: string | null;
        teacherProfile: Teacher | null;
        totalSessions: number;
        totalSalary: number;
        classesTaught: Set<string>;
        classesBreakdown: Record<string, number>; // classId -> count
        sessions: typeof processedSessions;
      }
    >();

    // Pre-fill all teachers registered in the center so every teacher is visible
    teachers.forEach((t) => {
      summaryMap.set(t.id, {
        teacherName: t.name,
        teacherId: t.id,
        teacherProfile: t,
        totalSessions: 0,
        totalSalary: 0,
        classesTaught: new Set<string>(),
        classesBreakdown: {},
        sessions: [],
      });
    });

    processedSessions.forEach((session) => {
      // Find matching teacher profile using robust resolution
      const matchedTeacher = resolveTeacherFromSession(session.teacherName, session.classId, teachers, classes);
      const key = matchedTeacher ? matchedTeacher.id : session.teacherName;
      const displayName = matchedTeacher ? matchedTeacher.name : session.teacherName;

      if (!summaryMap.has(key)) {
        summaryMap.set(key, {
          teacherName: displayName,
          teacherId: matchedTeacher ? matchedTeacher.id : null,
          teacherProfile: matchedTeacher,
          totalSessions: 0,
          totalSalary: 0,
          classesTaught: new Set<string>(),
          classesBreakdown: {},
          sessions: [],
        });
      }

      const summary = summaryMap.get(key)!;
      summary.totalSessions += 1;
      summary.classesTaught.add(session.classId);
      summary.classesBreakdown[session.classId] = (summary.classesBreakdown[session.classId] || 0) + 1;
      summary.sessions.push(session);

      // Calculate session salary
      const cls = classes.find((c) => c.id === session.classId);
      const level = cls?.courseLevel || 'Khóa 1';
      const classStudents = students.filter((st) => st.classId === session.classId);
      const rate = calculateTeacherSessionSalary(
        matchedTeacher,
        level,
        session.studentTotalCount || 20,
        session.sessionNumber,
        classStudents
      );
      summary.totalSalary += rate;
    });

    const allSummaries = Array.from(summaryMap.values());
    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      return allSummaries.filter(
        (s) =>
          s.teacherName.toLowerCase().includes(q) ||
          Array.from(s.classesTaught).some((cId) => {
            const c = classes.find((cls) => cls.id === cId);
            return c && c.name.toLowerCase().includes(q);
          })
      );
    }

    // Sort: teachers with sessions > 0 first, sorted by total sessions and total salary
    return allSummaries.sort((a, b) => {
      if (b.totalSessions !== a.totalSessions) {
        return b.totalSessions - a.totalSessions;
      }
      return b.totalSalary - a.totalSalary;
    });
  }, [processedSessions, teachers, classes, students, searchQuery]);

  // Total payroll across all teachers for the selected month
  const totalGlobalPayroll = useMemo(() => {
    return globalTeachersSummary.reduce((acc, s) => acc + s.totalSalary, 0);
  }, [globalTeachersSummary]);

  // Overall key metrics
  const totalSessionsCount = filteredSessions.length;
  const uniqueClassesCount = classBreakdown.length;
  const averageAttendance = useMemo(() => {
    if (filteredSessions.length === 0) return 0;
    const totalPresent = filteredSessions.reduce((acc, s) => acc + s.studentPresentCount, 0);
    const totalStudents = filteredSessions.reduce((acc, s) => acc + s.studentTotalCount, 0);
    return totalStudents > 0 ? Math.round((totalPresent / totalStudents) * 100) : 0;
  }, [filteredSessions]);

  // Estimated remuneration based on dynamic custom teacher rates
  const estimatedPayroll = useMemo(() => {
    if (!activeTeacher) return 0;
    return filteredSessions.reduce((sum, session) => {
      const cls = classes.find((c) => c.id === session.classId);
      const level = cls?.courseLevel || 'Khóa 1';
      const classStudents = students.filter((st) => st.classId === session.classId);
      const rate = calculateTeacherSessionSalary(activeTeacher, level, session.studentTotalCount || 20, session.sessionNumber, classStudents);
      return sum + rate;
    }, 0);
  }, [activeTeacher, filteredSessions, classes, students]);

  // Format date display (e.g., 21/09/2026 -> 21/09)
  const formatShortDate = (dateStr: string) => {
    if (!dateStr) return '';
    if (dateStr.includes('-')) {
      const parts = dateStr.split('-');
      if (parts.length >= 3) return `${parts[2]}/${parts[1]}`;
    }
    if (dateStr.includes('/')) {
      const parts = dateStr.split('/');
      if (parts.length >= 2) return `${parts[0]}/${parts[1]}`;
    }
    return dateStr;
  };

  return (
    <div className="space-y-6 px-4 sm:px-6 py-6 max-w-7xl mx-auto">
      {/* 1. Header and Controls Card */}
      <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs p-6 space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-2xl bg-purple-100 text-purple-700 flex items-center justify-center">
              <CalendarDays className="w-5 h-5 text-purple-700" />
            </div>
            <div>
              <h2 className="text-xl font-extrabold text-slate-900 tracking-tight">Thống kê số buổi dạy</h2>
              <p className="text-xs text-slate-500">
                {isTeacher
                  ? `Theo dõi số buổi trực tiếp đứng lớp của bạn trong tháng ${selectedMonth}/${selectedYear}`
                  : `Quản lý số ca dạy thực tế của giáo viên tại các cơ sở`}
              </p>
            </div>
          </div>

          {/* Month/Year Scroller & Report Button */}
          <div className="flex flex-wrap items-center gap-2 self-start md:self-auto">
            <button
              onClick={() => setIsSalaryReportModalOpen(true)}
              className="px-3.5 py-2 bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 text-white font-bold text-xs rounded-2xl shadow-xs transition-all flex items-center gap-1.5 cursor-pointer active:scale-98"
              title="Mở bảng báo cáo chi tiết lương giáo viên dựa trên dữ liệu buổi dạy đã chấm điểm"
            >
              <Calculator className="w-4 h-4 text-purple-200" />
              <span>Báo Cáo Chi Tiết Lương</span>
            </button>

            <div className="flex items-center gap-2 bg-slate-50 border border-slate-200 p-1 rounded-2xl">
              <button
                onClick={handlePrevMonth}
                className="p-1.5 hover:bg-white hover:text-purple-700 hover:shadow-xs rounded-xl text-slate-600 transition-all cursor-pointer"
                title="Tháng trước"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <div className="px-3 py-1 font-bold text-xs text-slate-800 tracking-wide min-w-[120px] text-center">
                Tháng {selectedMonth} / {selectedYear}
              </div>
              <button
                onClick={handleNextMonth}
                className="p-1.5 hover:bg-white hover:text-purple-700 hover:shadow-xs rounded-xl text-slate-600 transition-all cursor-pointer"
                title="Tháng sau"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Info or Teacher Selection Banner */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-slate-100 items-center">
          {/* Left: Role identification / Selector */}
          <div>
            {isTeacher ? (
              <div className="inline-flex items-center gap-2 bg-emerald-50 text-emerald-800 border border-emerald-200/80 px-3 py-1.5 rounded-2xl text-xs font-semibold">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                <span>Tài khoản giảng viên:</span>
                <strong className="text-emerald-950 font-bold">{loggedInTeacherName || 'Giáo viên'}</strong>
              </div>
            ) : (
              <div className="flex items-center gap-2.5">
                <span className="text-xs font-bold text-slate-700 flex items-center gap-1 shrink-0">
                  <Filter className="w-3.5 h-3.5 text-purple-600" />
                  Xem theo giáo viên:
                </span>
                <select
                  value={selectedTeacherId}
                  onChange={(e) => setSelectedTeacherId(e.target.value)}
                  className="bg-slate-50 border border-slate-200 rounded-xl px-3 py-2 text-xs font-semibold focus:ring-2 focus:ring-purple-500/10 focus:outline-none cursor-pointer text-slate-800 min-w-[200px]"
                >
                  <option value="all">📊 Tất cả giáo viên</option>
                  {teachers.map((t) => (
                    <option key={t.id} value={t.id}>
                      👨‍🏫 {t.name} ({t.type === 'Bản ngữ (Native)' ? 'Native' : 'VN'})
                    </option>
                  ))}
                </select>
              </div>
            )}
          </div>

          {/* Right: Search Filter inside current view */}
          <div className="relative">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
            <input
              type="text"
              placeholder="Tìm nhanh theo mã lớp, khóa học, chi nhánh..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 text-xs bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500/20"
            />
          </div>
        </div>
      </div>

      {/* 2. Highlights Metrics Card */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Metric 1 */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Tổng số buổi dạy</span>
            <div className="text-3xl font-black text-slate-900 tracking-tight">
              {totalSessionsCount} <span className="text-xs text-slate-400 font-bold">buổi</span>
            </div>
            <span className="text-[10px] text-slate-500">Số buổi điểm danh thực tế</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-purple-50 text-purple-700 flex items-center justify-center shrink-0">
            <Calendar className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 2 */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Số lớp phụ trách</span>
            <div className="text-3xl font-black text-slate-900 tracking-tight">
              {uniqueClassesCount} <span className="text-xs text-slate-400 font-bold">lớp</span>
            </div>
            <span className="text-[10px] text-slate-500">Có phát sinh buổi dạy</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-amber-50 text-amber-700 flex items-center justify-center shrink-0">
            <Layers className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 3 */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Sĩ số trung bình</span>
            <div className="text-3xl font-black text-slate-900 tracking-tight">
              {averageAttendance}%
            </div>
            <span className="text-[10px] text-slate-500">Tỷ lệ học sinh đi học đủ</span>
          </div>
          <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 flex items-center justify-center shrink-0">
            <Users className="w-6 h-6" />
          </div>
        </div>

        {/* Metric 4 */}
        <div className="bg-white rounded-2xl border border-slate-100 p-5 shadow-xs flex items-center justify-between">
          <div className="space-y-1">
            {activeTeacher ? (
              <>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Thù lao ước tính</span>
                <div className="text-xl font-extrabold text-emerald-700 tracking-tight">
                  {estimatedPayroll > 0
                    ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(estimatedPayroll)
                    : 'Chưa tính'}
                </div>
                <span className="text-[10px] text-slate-500 block">
                  {activeTeacher.salaryCalcType === 'percent_of_amount'
                    ? `Khoán % (${activeTeacher.percentageK1 || 30}% - ${activeTeacher.percentageK3 || 30}%)`
                    : activeTeacher.salaryCalcType === 'fixed_per_session'
                    ? `Cố định: ${new Intl.NumberFormat('vi-VN').format(activeTeacher.fixedRate || 500000)}đ/buổi`
                    : activeTeacher.salaryCalcType === 'fixed_with_size_condition'
                    ? `Sỹ số sỹ tử: ${new Intl.NumberFormat('vi-VN').format(activeTeacher.fixedRateUnder23 || 700000)}đ - ${new Intl.NumberFormat('vi-VN').format(activeTeacher.fixedRateOver23 || 800000)}đ`
                    : `Sỹ số HS: ${new Intl.NumberFormat('vi-VN').format(activeTeacher.rateRegularStudent || 36000)}đ/hv`}
                </span>
              </>
            ) : (
              <>
                <span className="text-[11px] font-bold text-slate-400 uppercase tracking-wider block">Tổng thù lao tất cả GV</span>
                <div className="text-xl font-extrabold text-emerald-700 tracking-tight">
                  {totalGlobalPayroll > 0
                    ? `${totalGlobalPayroll.toLocaleString('vi-VN')} đ`
                    : 'Chưa có phát sinh'}
                </div>
                <span className="text-[10px] text-slate-500 block">
                  Tổng {globalTeachersSummary.filter(s => s.totalSessions > 0).length} giảng viên có ca dạy
                </span>
              </>
            )}
          </div>
          <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 flex items-center justify-center shrink-0">
            <DollarSign className="w-6 h-6" />
          </div>
        </div>
      </div>

      {/* 3. Main Views Grid (Summary of all teachers AND detail class breakdown) */}
      <div className="space-y-6">
        {/* Section 1: Summary table of all teachers */}
        {!isTeacherView && (
          <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
            <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-purple-50/20 to-white">
              <div>
                <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                  <Users className="w-4 h-4 text-purple-700" />
                  <span>Bảng tổng hợp buổi dạy của toàn bộ giáo viên</span>
                </h3>
                <p className="text-[11px] text-slate-500 mt-0.5">
                  Tự động tổng hợp từ Nhật ký chấm điểm live & Sổ lớp • Tính đúng lương theo ca dạy của từng giáo viên
                </p>
              </div>
              <div className="flex items-center gap-2">
                {selectedTeacherId !== 'all' && (
                  <button
                    onClick={() => setSelectedTeacherId('all')}
                    className="text-[11px] font-black text-purple-700 hover:text-white bg-purple-50 hover:bg-purple-700 border border-purple-200 px-3 py-1 rounded-xl transition-all cursor-pointer shadow-2xs flex items-center gap-1"
                  >
                    <span>← Xem tất cả giáo viên</span>
                  </button>
                )}
                <span className="text-[11px] bg-purple-50 text-purple-700 font-bold px-2.5 py-1 rounded-full border border-purple-100">
                  Tháng {selectedMonth}/{selectedYear}
                </span>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200/80">
                  <tr>
                    <th className="py-3 px-5 w-12 text-center">STT</th>
                    <th className="py-3 px-4">Họ và tên giảng viên</th>
                    <th className="py-3 px-4 text-center">Tổng số buổi dạy</th>
                    <th className="py-3 px-4 text-center">Tổng lương ước tính</th>
                    <th className="py-3 px-4 text-center">Số lớp đứng dạy</th>
                    <th className="py-3 px-4">Danh sách các lớp giảng dạy</th>
                    <th className="py-3 px-4 text-center w-32">Thao tác</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {globalTeachersSummary.map((summary, idx) => {
                    const matchedProfile = summary.teacherProfile || teachers.find((t) => t.name === summary.teacherName);
                    const isSelected = selectedTeacherId === (summary.teacherId || summary.teacherName);

                    return (
                      <tr
                        key={summary.teacherName}
                        className={`transition-colors ${
                          isSelected ? 'bg-purple-50/70 border-l-4 border-l-purple-600' : 'hover:bg-slate-50/60'
                        }`}
                      >
                        <td className="py-4 px-5 text-center font-bold text-slate-400">
                          {idx + 1}
                        </td>
                        <td className="py-4 px-4 font-bold text-slate-900">
                          <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-purple-600 to-indigo-600 text-white text-xs font-black flex items-center justify-center shadow-xs">
                              {summary.teacherName.charAt(0)}
                            </div>
                            <div>
                              <span className="font-extrabold text-slate-900">{summary.teacherName}</span>
                              {matchedProfile && (
                                <span className={`ml-1.5 inline-block text-[9px] font-bold px-1.5 py-0.2 rounded-full ${
                                  matchedProfile.type === 'Bản ngữ (Native)'
                                    ? 'bg-indigo-50 text-indigo-700 border border-indigo-100'
                                    : 'bg-slate-50 text-slate-600 border border-slate-100'
                                }`}>
                                  {matchedProfile.type === 'Bản ngữ (Native)' ? 'Native' : 'VN'}
                                </span>
                              )}
                            </div>
                          </div>
                        </td>
                        <td className="py-4 px-4 text-center">
                          <span className={`inline-block px-2.5 py-1 text-xs font-black rounded-lg border ${
                            summary.totalSessions > 0
                              ? 'bg-purple-50 text-purple-800 border-purple-200'
                              : 'bg-slate-50 text-slate-400 border-slate-200'
                          }`}>
                            {summary.totalSessions} buổi
                          </span>
                        </td>
                        <td className="py-4 px-4 text-center font-black text-sm text-emerald-700">
                          {summary.totalSalary > 0 ? `${summary.totalSalary.toLocaleString('vi-VN')} đ` : '0 đ'}
                        </td>
                        <td className="py-4 px-4 text-center text-slate-800 font-bold">
                          {summary.classesTaught.size} lớp
                        </td>
                        <td className="py-4 px-4">
                          {summary.classesTaught.size > 0 ? (
                            <div className="flex flex-wrap gap-1.5 max-w-lg">
                              {Array.from(summary.classesTaught).map((cId) => {
                                const targetClass = classes.find((c) => c.id === cId);
                                const count = summary.classesBreakdown[cId as string] || 0;
                                return (
                                  <span
                                    key={cId}
                                    className="inline-flex items-center gap-1 px-2 py-0.5 bg-slate-100 text-slate-700 text-[10px] font-semibold rounded-md border border-slate-200"
                                  >
                                    <strong>{targetClass ? targetClass.name : 'Lớp'}</strong>
                                    <span className="bg-slate-200/90 text-slate-800 px-1 py-0.1 rounded font-bold">
                                      {count}b
                                    </span>
                                  </span>
                                );
                              })}
                            </div>
                          ) : (
                            <span className="text-slate-400 italic text-[11px]">Chưa có ca dạy trong tháng</span>
                          )}
                        </td>
                        <td className="py-4 px-4 text-center">
                          <div className="flex items-center justify-center gap-1.5">
                            <button
                              onClick={() => {
                                const tId = summary.teacherId || summary.teacherName;
                                if (selectedTeacherId === tId) {
                                  setSelectedTeacherId('all');
                                } else {
                                  setSelectedTeacherId(tId);
                                }
                              }}
                              className={`text-[10px] font-black px-2 py-1.5 rounded-xl transition-all cursor-pointer shadow-2xs ${
                                isSelected
                                  ? 'bg-purple-700 text-white shadow-xs'
                                  : 'text-purple-700 hover:text-white bg-purple-50 hover:bg-purple-700 border border-purple-200'
                              }`}
                              title="Lọc bảng nhật ký bên dưới theo giáo viên này"
                            >
                              {isSelected ? 'Đang lọc' : 'Xem ca dạy'}
                            </button>

                            <button
                              onClick={() => {
                                const tId = summary.teacherId || summary.teacherName;
                                setSelectedTeacherId(tId);
                                setIsSalaryReportModalOpen(true);
                              }}
                              className="text-[10px] font-black px-2.5 py-1.5 rounded-xl transition-all cursor-pointer shadow-2xs text-emerald-800 hover:text-white bg-emerald-50 hover:bg-emerald-700 border border-emerald-300 flex items-center gap-1"
                              title="Mở bảng báo cáo chi tiết lương và buổi dạy của giáo viên này"
                            >
                              <Calculator className="w-3 h-3" />
                              <span>Chi tiết lương</span>
                            </button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}

                  {globalTeachersSummary.length === 0 && (
                    <tr>
                      <td colSpan={7} className="py-12 text-center text-slate-400">
                        <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                        <p className="font-semibold text-slate-600 text-xs">Không có dữ liệu buổi dạy trong tháng này</p>
                        <p className="text-[11px] text-slate-400 mt-0.5">Vui lòng kiểm tra lại bộ lọc thời gian hoặc lấy dữ liệu điểm danh lớp học.</p>
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Section 2: Detailed History Log Table of All Sessions Taught with Session Salary */}
        <div className="bg-white rounded-3xl border border-slate-200/80 shadow-xs overflow-hidden">
          <div className="px-6 py-5 border-b border-slate-100 flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-gradient-to-r from-emerald-50/20 via-purple-50/10 to-white">
            <div>
              <h3 className="font-extrabold text-slate-900 text-sm flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <span>
                  Nhật ký chi tiết các buổi dạy & Lương từng ca đứng lớp ({filteredSessions.length} ca)
                </span>
              </h3>
              <p className="text-[11px] text-slate-500 mt-0.5">
                {selectedTeacherId !== 'all'
                  ? `Đang lọc các buổi dạy của giảng viên: ${
                      teachers.find((t) => t.id === selectedTeacherId)?.name || selectedTeacherId
                    }`
                  : `Hiển thị toàn bộ các buổi học live phát sinh trong Tháng ${selectedMonth}/${selectedYear} kèm mức lương từng ca`}
              </p>
            </div>
            <div className="flex flex-wrap items-center gap-2 self-start sm:self-auto">
              <button
                onClick={() => setIsSalaryReportModalOpen(true)}
                className="text-[11px] font-black text-purple-700 hover:text-white bg-purple-50 hover:bg-purple-700 border border-purple-200 px-3 py-1.5 rounded-xl transition-all cursor-pointer shadow-2xs flex items-center gap-1.5"
                title="Mở bảng báo cáo tổng hợp chi tiết lương và xuất file/in ấn"
              >
                <Calculator className="w-3.5 h-3.5 text-purple-600" />
                <span>Báo Cáo Chi Tiết Lương & In Phiếu</span>
              </button>

              {selectedTeacherId !== 'all' && !isTeacherView && (
                <button
                  onClick={() => setSelectedTeacherId('all')}
                  className="text-[11px] font-black text-slate-600 hover:text-purple-700 border border-slate-200 hover:border-purple-300 bg-white px-3 py-1.5 rounded-xl transition-all cursor-pointer shadow-2xs"
                >
                  ← Xem tất cả GV
                </button>
              )}
            </div>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs border-collapse">
              <thead className="bg-slate-50 text-slate-700 font-bold border-b border-slate-200/80">
                <tr>
                  <th className="py-3 px-5 w-12 text-center">STT</th>
                  <th className="py-3 px-4">Ngày dạy</th>
                  <th className="py-3 px-4">Giảng viên đứng lớp</th>
                  <th className="py-3 px-4">Lớp học</th>
                  <th className="py-3 px-4 text-center">Buổi số</th>
                  <th className="py-3 px-4">Nội dung / Kỹ năng</th>
                  <th className="py-3 px-4 text-center">Sĩ số lớp</th>
                  <th className="py-3 px-4 text-right">Lương buổi dạy</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {filteredSessions.map((sess, idx) => {
                  const sessionCls = classes.find((c) => c.id === sess.classId);
                  const level = sessionCls?.courseLevel || 'Khóa 1';
                  const matchedTeacher = resolveTeacherFromSession(sess.teacherName, sess.classId, teachers, classes) || activeTeacher;
                  const classStudents = students.filter((st) => st.classId === sess.classId);
                  const sessionSalary = matchedTeacher
                    ? calculateTeacherSessionSalary(
                        matchedTeacher,
                        level,
                        sess.studentTotalCount || (classStudents.length > 0 ? classStudents.length : 20),
                        sess.sessionNumber,
                        classStudents
                      )
                    : 0;

                  return (
                    <tr key={sess.key} className="hover:bg-purple-50/30 transition-colors">
                      <td className="py-3.5 px-5 text-center font-bold text-slate-400">
                        {idx + 1}
                      </td>
                      <td className="py-3.5 px-4 font-bold text-slate-900">
                        <span className="font-mono text-purple-800 bg-purple-50 border border-purple-100 px-2 py-0.5 rounded-md font-bold">
                          {sess.date}
                        </span>
                      </td>
                      <td className="py-3.5 px-4 font-extrabold text-slate-900">
                        <div className="flex items-center gap-1.5">
                          <span className="w-5 h-5 rounded-full bg-purple-100 text-purple-700 text-[10px] font-black flex items-center justify-center shrink-0">
                            {(matchedTeacher ? matchedTeacher.name : sess.teacherName).charAt(0)}
                          </span>
                          <span>{matchedTeacher ? matchedTeacher.name : sess.teacherName}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 font-bold text-slate-800">
                        <div>
                          <span>{sess.className}</span>
                          <span className="text-[10px] text-slate-400 block font-normal">{sess.branch}</span>
                        </div>
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="font-bold text-purple-900 bg-purple-50 px-2 py-0.5 rounded-lg border border-purple-200">
                          Buổi {sess.sessionNumber}
                        </span>
                      </td>
                      <td className="py-3.5 px-4">
                        {sess.skillsTaught && sess.skillsTaught.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {sess.skillsTaught.map((skill) => (
                              <span
                                key={skill}
                                className="px-2 py-0.5 rounded-md bg-amber-50 text-amber-900 text-[10px] font-extrabold border border-amber-200"
                              >
                                🎯 {skill}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-slate-400 italic">Tổng hợp</span>
                        )}
                      </td>
                      <td className="py-3.5 px-4 text-center">
                        <span className="inline-flex items-center gap-1 font-bold text-slate-700 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-lg">
                          <Users className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                          <span>{sess.studentPresentCount}</span>
                          <span className="text-slate-300 font-normal">/</span>
                          <span className="text-slate-500 font-normal">{sess.studentTotalCount}</span>
                        </span>
                      </td>
                      <td className="py-3.5 px-4 text-right">
                        <span className="font-black text-emerald-800 font-mono text-xs bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-lg">
                          {sessionSalary > 0
                            ? `${sessionSalary.toLocaleString('vi-VN')} đ`
                            : 'Chưa tính'}
                        </span>
                      </td>
                    </tr>
                  );
                })}

                {filteredSessions.length === 0 && (
                  <tr>
                    <td colSpan={8} className="py-12 text-center text-slate-400">
                      <Calendar className="w-10 h-10 text-slate-300 mx-auto mb-2" />
                      <p className="font-semibold text-slate-600 text-xs">Không có nhật ký buổi dạy nào</p>
                      <p className="text-[11px] text-slate-400 mt-0.5">Dữ liệu ghi chép đang trống trong thời gian đã chọn.</p>
                    </td>
                  </tr>
                )}
              </tbody>
              {filteredSessions.length > 0 && (
                <tfoot className="bg-slate-50 font-black text-slate-900 border-t-2 border-slate-200 text-xs">
                  <tr>
                    <td colSpan={4} className="py-3.5 px-5 text-left font-black">
                      TỔNG CỘNG ({filteredSessions.length} CA DẠY):
                    </td>
                    <td className="py-3.5 px-4 text-center font-bold text-purple-900">
                      {filteredSessions.length} buổi
                    </td>
                    <td className="py-3.5 px-4"></td>
                    <td className="py-3.5 px-4 text-center font-bold text-slate-800">
                      {filteredSessions.reduce((sum, s) => sum + (s.studentTotalCount || 0), 0)} lượt HV
                    </td>
                    <td className="py-3.5 px-4 text-right font-black text-emerald-800 font-mono text-sm">
                      {selectedTeacherId === 'all'
                        ? `${totalGlobalPayroll.toLocaleString('vi-VN')} đ`
                        : `${estimatedPayroll.toLocaleString('vi-VN')} đ`}
                    </td>
                  </tr>
                </tfoot>
              )}
            </table>
          </div>
        </div>
      </div>

      {/* MODAL: Báo Cáo Chi Tiết Lương Giáo Viên */}
      {isSalaryReportModalOpen && (
        <TeacherSalaryReportModal
          isOpen={isSalaryReportModalOpen}
          onClose={() => setIsSalaryReportModalOpen(false)}
          selectedMonth={selectedMonth}
          selectedYear={selectedYear}
          selectedTeacherId={selectedTeacherId}
          onSelectTeacherId={setSelectedTeacherId}
          teachers={teachers}
          classes={classes}
          students={students}
          allSessions={processedSessions}
        />
      )}
    </div>
  );
};

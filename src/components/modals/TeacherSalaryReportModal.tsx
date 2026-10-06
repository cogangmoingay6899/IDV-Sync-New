import React, { useRef, useState, useMemo } from 'react';
import {
  X,
  Printer,
  Copy,
  Check,
  Download,
  Calendar,
  Users,
  DollarSign,
  Layers,
  BookOpen,
  Award,
  Sparkles,
  FileSpreadsheet,
  CheckCircle2,
  TrendingUp,
  Filter,
  Calculator
} from 'lucide-react';
import { Teacher, ClassGroup, Student } from '../../types';
import { calculateTeacherSessionSalary, getTeacherDefaultSalaryConfig } from '../../utils/salaryCalculator';
import { resolveTeacherFromSession } from '../../utils/teacherMatching';

interface ProcessedSessionItem {
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

interface TeacherSalaryReportModalProps {
  isOpen: boolean;
  onClose: () => void;
  selectedMonth: number;
  selectedYear: number;
  selectedTeacherId: string;
  onSelectTeacherId: (id: string) => void;
  teachers: Teacher[];
  classes: ClassGroup[];
  students: Student[];
  allSessions: ProcessedSessionItem[];
}

export const TeacherSalaryReportModal: React.FC<TeacherSalaryReportModalProps> = ({
  isOpen,
  onClose,
  selectedMonth,
  selectedYear,
  selectedTeacherId,
  onSelectTeacherId,
  teachers,
  classes,
  students,
  allSessions,
}) => {
  const printRef = useRef<HTMLDivElement>(null);
  const [copiedType, setCopiedType] = useState<'zalo' | 'excel' | null>(null);

  // Active teacher object if a specific teacher is selected
  const activeTeacher = useMemo(() => {
    if (selectedTeacherId === 'all') return null;
    return teachers.find((t) => t.id === selectedTeacherId) || null;
  }, [selectedTeacherId, teachers]);

  // Filter sessions based on selected teacher or all
  const filteredSessions = useMemo(() => {
    return allSessions.filter((session) => {
      if (selectedTeacherId === 'all') return true;
      const matchedTeacher = resolveTeacherFromSession(session.teacherName, session.classId, teachers, classes);
      if (matchedTeacher) {
        return matchedTeacher.id === selectedTeacherId;
      }
      if (activeTeacher) {
        return session.teacherName.toLowerCase().includes(activeTeacher.name.toLowerCase());
      }
      return false;
    });
  }, [allSessions, selectedTeacherId, teachers, classes, activeTeacher]);

  // Calculate detailed items with session salaries
  const detailedSessionItems = useMemo(() => {
    return filteredSessions.map((sess) => {
      const cls = classes.find((c) => c.id === sess.classId);
      const level = cls?.courseLevel || 'Khóa 1';
      const matchedTeacher = resolveTeacherFromSession(sess.teacherName, sess.classId, teachers, classes) || activeTeacher || sess.teacherName;
      const classStudents = students.filter((st) => st.classId === sess.classId);
      
      const salary = calculateTeacherSessionSalary(
        matchedTeacher,
        level,
        sess.studentTotalCount || (classStudents.length > 0 ? classStudents.length : 20),
        sess.sessionNumber,
        classStudents
      );

      // Determine formula text for explanation
      let formulaText = '';
      let tchObj: Teacher | null = null;
      let tchName = '';
      if (typeof matchedTeacher === 'string') {
        tchName = matchedTeacher;
      } else if (matchedTeacher && typeof matchedTeacher === 'object') {
        tchObj = matchedTeacher;
        tchName = matchedTeacher.name || '';
      }
      if (!tchObj && tchName) {
        const def = getTeacherDefaultSalaryConfig(tchName);
        tchObj = { id: 'temp', name: tchName, type: 'Việt Nam', ...def } as Teacher;
      }

      if (tchObj) {
        const calcType = tchObj.salaryCalcType || getTeacherDefaultSalaryConfig(tchObj.name).salaryCalcType || 'rate_per_student';
        if (calcType === 'percent_of_amount') {
          const defaults = getTeacherDefaultSalaryConfig(tchObj.name);
          const lvl = (level || '').toLowerCase();
          let pct = 30;
          if (lvl.includes('4') || lvl.includes('k4') || lvl.includes('drill')) {
            pct = tchObj.percentageK4 ?? defaults.percentageK4 ?? 30;
          } else if (lvl.includes('3') || lvl.includes('k3') || lvl.includes('desire')) {
            pct = tchObj.percentageK3 ?? defaults.percentageK3 ?? 28;
          } else if (lvl.includes('2') || lvl.includes('k2') || lvl.includes('inspire')) {
            pct = tchObj.percentageK2 ?? defaults.percentageK2 ?? 26;
          } else {
            pct = tchObj.percentageK1 ?? defaults.percentageK1 ?? 24;
          }
          const retakeCount = classStudents.filter((st) => st.studentCategory === 'Học lại').length;
          if (retakeCount > 0) {
            formulaText = `${pct}% × (${classStudents.length - retakeCount} HV thường + ${retakeCount} HV học lại 75k)`;
          } else {
            formulaText = `${pct}% × 150k × ${sess.studentTotalCount || classStudents.length} HV`;
          }
        } else if (calcType === 'fixed_per_session') {
          formulaText = `Cố định: ${salary.toLocaleString('vi-VN')} đ/buổi`;
        } else if (calcType === 'fixed_with_size_condition') {
          formulaText = `Cố định theo sĩ số (${sess.studentTotalCount} HV): ${salary.toLocaleString('vi-VN')} đ`;
        } else {
          formulaText = `${sess.studentTotalCount} HV × ${((matchedTeacher.rateRegularStudent || 36000)).toLocaleString('vi-VN')} đ`;
        }
      }

      return {
        ...sess,
        cls,
        matchedTeacher,
        salary,
        formulaText,
      };
    }).sort((a, b) => a.date.localeCompare(b.date));
  }, [filteredSessions, classes, teachers, activeTeacher, students]);

  // Aggregate by class
  const classBreakdown = useMemo(() => {
    const map = new Map<
      string,
      {
        classId: string;
        className: string;
        courseName: string;
        branch: string;
        sessionCount: number;
        totalSalary: number;
        avgStudents: number;
      }
    >();

    detailedSessionItems.forEach((item) => {
      if (!map.has(item.classId)) {
        map.set(item.classId, {
          classId: item.classId,
          className: item.className,
          courseName: item.courseName,
          branch: item.branch,
          sessionCount: 0,
          totalSalary: 0,
          avgStudents: 0,
        });
      }
      const entry = map.get(item.classId)!;
      entry.sessionCount += 1;
      entry.totalSalary += item.salary;
      entry.avgStudents += item.studentTotalCount;
    });

    const result = Array.from(map.values());
    result.forEach((r) => {
      if (r.sessionCount > 0) {
        r.avgStudents = Math.round(r.avgStudents / r.sessionCount);
      }
    });

    return result.sort((a, b) => b.totalSalary - a.totalSalary);
  }, [detailedSessionItems]);

  // Summary of all teachers if 'all' is selected
  const allTeachersSummary = useMemo(() => {
    const map = new Map<
      string,
      {
        teacherId: string;
        teacherName: string;
        teacherType: string;
        sessionCount: number;
        classCount: number;
        classesTaught: Set<string>;
        totalSalary: number;
      }
    >();

    detailedSessionItems.forEach((item) => {
      const tKey = item.matchedTeacher ? item.matchedTeacher.id : item.teacherName;
      const tName = item.matchedTeacher ? item.matchedTeacher.name : item.teacherName;
      const tType = item.matchedTeacher?.type || 'Việt Nam';

      if (!map.has(tKey)) {
        map.set(tKey, {
          teacherId: tKey,
          teacherName: tName,
          teacherType: tType,
          sessionCount: 0,
          classCount: 0,
          classesTaught: new Set<string>(),
          totalSalary: 0,
        });
      }

      const tEntry = map.get(tKey)!;
      tEntry.sessionCount += 1;
      tEntry.classesTaught.add(item.classId);
      tEntry.totalSalary += item.salary;
    });

    const list = Array.from(map.values());
    list.forEach((t) => {
      t.classCount = t.classesTaught.size;
    });

    return list.sort((a, b) => b.totalSalary - a.totalSalary);
  }, [detailedSessionItems]);

  const totalSessionsCount = detailedSessionItems.length;
  const totalPayroll = detailedSessionItems.reduce((sum, item) => sum + item.salary, 0);
  const totalStudentsTaught = detailedSessionItems.reduce((sum, item) => sum + item.studentTotalCount, 0);
  const avgStudentsPerSession = totalSessionsCount > 0 ? Math.round(totalStudentsTaught / totalSessionsCount) : 0;

  // Number to Vietnamese words helper
  const numberToVietnameseWords = (num: number): string => {
    if (!num || num === 0) return 'Không đồng';
    const units = ['', 'nghìn', 'triệu', 'tỷ'];
    // For general summary, format nicely
    return `${new Intl.NumberFormat('vi-VN').format(num)} đồng`;
  };

  // Copy Zalo message
  const handleCopyZalo = () => {
    const teacherNameText = activeTeacher ? activeTeacher.name : 'TỔNG HỢP TOÀN BỘ GIÁO VIÊN';
    let text = `📢 TRUNG TÂM ANH NGỮ IELTS DƯƠNG VŨ\n`;
    text += `💰 BÁO CÁO CHI TIẾT LƯƠNG & BUỔI DẠY - THÁNG ${selectedMonth}/${selectedYear}\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `👨‍🏫 Giảng viên: ${teacherNameText}\n`;
    text += `📅 Kỳ tính lương: Tháng ${selectedMonth}/${selectedYear}\n`;
    text += `📊 Tổng số buổi đứng lớp: ${totalSessionsCount} buổi\n`;
    text += `🏫 Tổng số lớp phụ trách: ${classBreakdown.length} lớp\n`;
    text += `💵 TỔNG THÙ LAO / LƯƠNG THÁNG: ${totalPayroll.toLocaleString('vi-VN')} VNĐ\n`;
    text += `━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n\n`;

    text += `📋 DANH SÁCH CHI TIẾT TỪNG BUỔI DẠY:\n`;
    detailedSessionItems.forEach((sess, idx) => {
      text += `${idx + 1}. Ngày ${sess.date} | ${sess.className} (Buổi ${sess.sessionNumber}) | Sĩ số: ${sess.studentPresentCount}/${sess.studentTotalCount} HV | Kỹ năng: ${sess.skillsTaught.join(', ') || 'Tổng hợp'} ➔ Lương: ${sess.salary.toLocaleString('vi-VN')} đ\n`;
    });

    if (classBreakdown.length > 1) {
      text += `\n📊 TỔNG HỢP THEO TỪNG LỚP:\n`;
      classBreakdown.forEach((cls, idx) => {
        text += `• ${cls.className}: ${cls.sessionCount} buổi ➔ ${cls.totalSalary.toLocaleString('vi-VN')} đ\n`;
      });
    }

    text += `\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n`;
    text += `❤️ Trân trọng cảm ơn Thầy/Cô đã luôn tâm huyết đồng hành cùng IELTS DƯƠNG VŨ!`;

    navigator.clipboard.writeText(text);
    setCopiedType('zalo');
    setTimeout(() => setCopiedType(null), 3000);
  };

  // Copy Excel format
  const handleCopyExcel = () => {
    let tsv = `STT\tNgày dạy\tGiáo viên\tLớp học\tKhóa học\tBuổi số\tKỹ năng giảng dạy\tSĩ số (Có mặt/Tổng)\tCông thức / Đơn giá\tThành tiền lương (VNĐ)\n`;
    detailedSessionItems.forEach((sess, idx) => {
      tsv += `${idx + 1}\t${sess.date}\t${sess.matchedTeacher?.name || sess.teacherName}\t${sess.className}\t${sess.courseName}\tBuổi ${sess.sessionNumber}\t${sess.skillsTaught.join(', ') || 'Tổng hợp'}\t${sess.studentPresentCount}/${sess.studentTotalCount}\t${sess.formulaText}\t${sess.salary}\n`;
    });
    tsv += `\nTỔNG CỘNG\t\t\t\t\t${totalSessionsCount} buổi\t\t${totalStudentsTaught} lượt HV\t\t${totalPayroll}\n`;

    navigator.clipboard.writeText(tsv);
    setCopiedType('excel');
    setTimeout(() => setCopiedType(null), 3000);
  };

  // Print Payslip
  const handlePrint = () => {
    window.print();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs p-2 sm:p-4 md:p-6 flex justify-center items-start">
      <div className="bg-white rounded-3xl border border-purple-100 shadow-2xl w-full max-w-5xl my-2 sm:my-4 md:my-6 flex flex-col min-h-0 max-h-[calc(100vh-1.5rem)] sm:max-h-[calc(100vh-2.5rem)] overflow-hidden animate-in fade-in zoom-in-95">
        {/* Modal Header */}
        <div className="shrink-0 bg-gradient-to-r from-purple-800 via-indigo-800 to-purple-900 px-6 py-5 text-white flex flex-col sm:flex-row sm:items-center justify-between gap-3 shadow-xs z-10">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-2xl bg-white/10 backdrop-blur-md flex items-center justify-center shrink-0 border border-white/20">
              <Calculator className="w-6 h-6 text-purple-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="font-extrabold text-lg">Báo Cáo Chi Tiết Lương & Buổi Dạy</h3>
                <span className="text-[10px] bg-white/20 text-purple-100 font-black px-2.5 py-0.5 rounded-full border border-white/10">
                  Tháng {selectedMonth}/{selectedYear}
                </span>
              </div>
              <p className="text-xs text-purple-200">
                Tự động đối chiếu từ Nhật ký chấm điểm, sĩ số học sinh & công thức thù lao giáo viên
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 self-end sm:self-auto">
            <button
              onClick={onClose}
              className="p-2 rounded-full hover:bg-white/10 transition-colors text-white/80 hover:text-white cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Action Toolbar & Teacher Selector */}
        <div className="shrink-0 bg-purple-50/70 border-b border-purple-100 px-6 py-3 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-bold text-slate-700 flex items-center gap-1.5">
              <Filter className="w-3.5 h-3.5 text-purple-700" />
              <span>Xem báo cáo của:</span>
            </span>
            <select
              value={selectedTeacherId}
              onChange={(e) => onSelectTeacherId(e.target.value)}
              className="bg-white border border-purple-200 rounded-xl px-3 py-1.5 text-xs font-bold text-slate-900 focus:outline-none focus:ring-2 focus:ring-purple-500/20 cursor-pointer shadow-2xs"
            >
              <option value="all">📊 Toàn bộ giáo viên trung tâm</option>
              {teachers.map((t) => (
                <option key={t.id} value={t.id}>
                  👨‍🏫 {t.name} ({t.type === 'Bản ngữ (Native)' ? 'Native' : 'VN'})
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <button
              onClick={handleCopyZalo}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs ${
                copiedType === 'zalo'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-emerald-50 text-emerald-800 hover:bg-emerald-100 border border-emerald-300'
              }`}
            >
              {copiedType === 'zalo' ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5 text-emerald-700" />}
              <span>{copiedType === 'zalo' ? 'Đã sao chép Zalo!' : 'Sao chép Zalo'}</span>
            </button>

            <button
              onClick={handleCopyExcel}
              className={`px-3.5 py-1.5 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-2xs ${
                copiedType === 'excel'
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-indigo-50 text-indigo-800 hover:bg-indigo-100 border border-indigo-300'
              }`}
            >
              {copiedType === 'excel' ? <Check className="w-3.5 h-3.5" /> : <FileSpreadsheet className="w-3.5 h-3.5 text-indigo-700" />}
              <span>{copiedType === 'excel' ? 'Đã sao chép Excel!' : 'Xuất Excel / Sheets'}</span>
            </button>

            <button
              onClick={handlePrint}
              className="px-3.5 py-1.5 text-xs font-bold bg-purple-700 hover:bg-purple-800 text-white rounded-xl transition-all flex items-center gap-1.5 cursor-pointer shadow-xs"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>In Phiếu Lương / PDF</span>
            </button>
          </div>
        </div>

        {/* Scrollable Printable Content */}
        <div className="flex-1 overflow-y-auto p-6 space-y-6" ref={printRef}>
          {/* 1. Header Payslip Box */}
          <div className="bg-gradient-to-br from-slate-900 via-purple-950 to-slate-900 rounded-3xl p-6 text-white shadow-md relative overflow-hidden">
            <div className="absolute right-0 top-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none"></div>
            
            <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/10 pb-4">
              <div>
                <span className="text-[10px] font-black text-purple-300 uppercase tracking-widest block">
                  IELTS DƯƠNG VŨ LANGUAGE ACADEMY
                </span>
                <h4 className="text-xl font-black tracking-tight text-white mt-0.5">
                  {activeTeacher ? `BẢNG LƯƠNG GIẢNG VIÊN: ${activeTeacher.name.toUpperCase()}` : `BẢNG TỔNG HỢP LƯƠNG TOÀN TRUNG TÂM`}
                </h4>
                <p className="text-xs text-purple-200 mt-1">
                  Kỳ thanh toán: <strong className="text-amber-300">Tháng {selectedMonth} năm {selectedYear}</strong>
                </p>
              </div>

              <div className="text-right">
                <span className="text-[11px] font-semibold text-purple-300 block">Tổng thu nhập tháng</span>
                <div className="text-2xl sm:text-3xl font-black text-amber-300 tracking-tight">
                  {totalPayroll.toLocaleString('vi-VN')} <span className="text-sm text-purple-200 font-bold">VNĐ</span>
                </div>
                <span className="text-[10px] text-purple-300 italic block mt-0.5">
                  ({numberToVietnameseWords(totalPayroll)})
                </span>
              </div>
            </div>

            {/* Metrics Row */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-4 text-center">
              <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                <span className="text-[10px] text-purple-200 font-bold block uppercase tracking-wider">Tổng số ca dạy</span>
                <div className="text-xl font-black text-white mt-1">
                  {totalSessionsCount} <span className="text-xs font-normal text-purple-300">buổi</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                <span className="text-[10px] text-purple-200 font-bold block uppercase tracking-wider">Số lớp giảng dạy</span>
                <div className="text-xl font-black text-white mt-1">
                  {classBreakdown.length} <span className="text-xs font-normal text-purple-300">lớp</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                <span className="text-[10px] text-purple-200 font-bold block uppercase tracking-wider">Sĩ số bình quân</span>
                <div className="text-xl font-black text-white mt-1">
                  {avgStudentsPerSession} <span className="text-xs font-normal text-purple-300">HV/buổi</span>
                </div>
              </div>

              <div className="bg-white/5 border border-white/10 rounded-2xl p-3">
                <span className="text-[10px] text-purple-200 font-bold block uppercase tracking-wider">Tổng lượt học viên</span>
                <div className="text-xl font-black text-emerald-300 mt-1">
                  {totalStudentsTaught} <span className="text-xs font-normal text-purple-300">lượt</span>
                </div>
              </div>
            </div>
          </div>

          {/* 2. Breakdown per Class */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
            <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <Layers className="w-4 h-4 text-purple-700" />
                <h5 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider">
                  Phân tích thu nhập theo từng lớp học ({classBreakdown.length} lớp)
                </h5>
              </div>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-4 w-12 text-center">STT</th>
                    <th className="py-2.5 px-4">Tên lớp học</th>
                    <th className="py-2.5 px-4">Khóa học / Trình độ</th>
                    <th className="py-2.5 px-4">Cơ sở</th>
                    <th className="py-2.5 px-4 text-center">Số buổi dạy</th>
                    <th className="py-2.5 px-4 text-center">Sĩ số TB</th>
                    <th className="py-2.5 px-4 text-right">Tổng thù lao lớp</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {classBreakdown.map((cls, idx) => (
                    <tr key={cls.classId} className="hover:bg-purple-50/30 transition-colors">
                      <td className="py-3 px-4 text-center font-bold text-slate-400">{idx + 1}</td>
                      <td className="py-3 px-4 font-black text-slate-900">{cls.className}</td>
                      <td className="py-3 px-4 text-purple-900 font-bold">{cls.courseName}</td>
                      <td className="py-3 px-4 text-slate-600">{cls.branch}</td>
                      <td className="py-3 px-4 text-center">
                        <span className="font-black text-purple-800 bg-purple-50 border border-purple-200 px-2 py-0.5 rounded-md">
                          {cls.sessionCount} buổi
                        </span>
                      </td>
                      <td className="py-3 px-4 text-center text-slate-700 font-bold">{cls.avgStudents} HV</td>
                      <td className="py-3 px-4 text-right font-black text-emerald-700 font-mono text-xs">
                        {cls.totalSalary.toLocaleString('vi-VN')} đ
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* 3. Detailed Session-by-Session Itemized Table */}
          <div className="bg-white rounded-2xl border border-slate-200 shadow-2xs overflow-hidden">
            <div className="px-5 py-3.5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600" />
                <h5 className="font-extrabold text-xs text-slate-900 uppercase tracking-wider">
                  Bảng kê chi tiết từng buổi dạy đã chấm điểm ({detailedSessionItems.length} ca)
                </h5>
              </div>
              <span className="text-[11px] font-bold text-slate-500">
                Lớp dạy • Ngày dạy • Sĩ số • Thù lao
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs border-collapse">
                <thead className="bg-slate-100/80 text-slate-700 font-bold border-b border-slate-200">
                  <tr>
                    <th className="py-2.5 px-3 w-10 text-center">STT</th>
                    <th className="py-2.5 px-3">Ngày dạy</th>
                    <th className="py-2.5 px-3">Lớp học</th>
                    <th className="py-2.5 px-3 text-center">Buổi số</th>
                    <th className="py-2.5 px-3">Nội dung / Kỹ năng</th>
                    <th className="py-2.5 px-3 text-center">Sĩ số (Có mặt/Tổng)</th>
                    <th className="py-2.5 px-3">Cách tính / Đơn giá</th>
                    <th className="py-2.5 px-3 text-right">Thành tiền (VNĐ)</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 font-medium">
                  {detailedSessionItems.map((sess, idx) => (
                    <tr key={`${sess.key}-${idx}`} className="hover:bg-purple-50/20 transition-colors">
                      <td className="py-3 px-3 text-center font-bold text-slate-400">{idx + 1}</td>
                      <td className="py-3 px-3 font-mono font-bold text-purple-900 bg-purple-50/40">{sess.date}</td>
                      <td className="py-3 px-3 font-extrabold text-slate-900">
                        <div>
                          <span>{sess.className}</span>
                          <span className="text-[10px] text-slate-400 block font-normal">{sess.courseName}</span>
                        </div>
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className="font-extrabold text-purple-900 bg-purple-50 px-2 py-0.5 rounded-md border border-purple-200">
                          Buổi {sess.sessionNumber}
                        </span>
                      </td>
                      <td className="py-3 px-3">
                        {sess.skillsTaught && sess.skillsTaught.length > 0 ? (
                          <div className="flex flex-wrap gap-1">
                            {sess.skillsTaught.map((sk) => (
                              <span
                                key={sk}
                                className="px-1.5 py-0.5 rounded bg-amber-50 text-amber-900 text-[10px] font-bold border border-amber-200"
                              >
                                {sk}
                              </span>
                            ))}
                          </div>
                        ) : (
                          <span className="text-slate-400 italic">Tổng hợp</span>
                        )}
                      </td>
                      <td className="py-3 px-3 text-center">
                        <span className="inline-flex items-center gap-1 font-bold text-slate-800 bg-slate-50 border border-slate-200 px-2 py-0.5 rounded-md">
                          <Users className="w-3 h-3 text-slate-400" />
                          <span>{sess.studentPresentCount}</span>
                          <span className="text-slate-300 font-normal">/</span>
                          <span className="text-slate-600">{sess.studentTotalCount}</span>
                        </span>
                      </td>
                      <td className="py-3 px-3 text-[11px] text-slate-600">
                        <span className="font-mono bg-slate-50 px-1.5 py-0.5 rounded border border-slate-200 text-[10.5px]">
                          {sess.formulaText}
                        </span>
                      </td>
                      <td className="py-3 px-3 text-right font-black text-emerald-800 font-mono text-xs">
                        {sess.salary.toLocaleString('vi-VN')} đ
                      </td>
                    </tr>
                  ))}

                  {detailedSessionItems.length === 0 && (
                    <tr>
                      <td colSpan={8} className="py-10 text-center text-slate-400">
                        Chưa có dữ liệu buổi dạy nào được ghi nhận trong tháng này.
                      </td>
                    </tr>
                  )}
                </tbody>
                {detailedSessionItems.length > 0 && (
                  <tfoot className="bg-slate-100 font-black text-slate-900 border-t-2 border-slate-300">
                    <tr>
                      <td colSpan={3} className="py-3 px-3 text-left">
                        TỔNG CỘNG ({totalSessionsCount} BUỔI DẠY):
                      </td>
                      <td className="py-3 px-3 text-center font-bold text-purple-900">{totalSessionsCount} buổi</td>
                      <td className="py-3 px-3"></td>
                      <td className="py-3 px-3 text-center font-bold">{totalStudentsTaught} lượt HV</td>
                      <td className="py-3 px-3 text-slate-600 font-normal text-[11px]">Bình quân ~{avgStudentsPerSession} HV/buổi</td>
                      <td className="py-3 px-3 text-right text-sm font-black text-emerald-800 font-mono">
                        {totalPayroll.toLocaleString('vi-VN')} đ
                      </td>
                    </tr>
                  </tfoot>
                )}
              </table>
            </div>
          </div>

          {/* 4. Signature Block for Formal Printing */}
          <div className="pt-6 border-t border-slate-200 grid grid-cols-3 gap-4 text-center text-xs text-slate-700">
            <div>
              <span className="font-bold block">Người lập biểu</span>
              <span className="text-[10px] text-slate-400 italic block mt-0.5">(Ký & ghi rõ họ tên)</span>
              <div className="h-16"></div>
              <span className="font-bold text-slate-800">Bộ phận Giáo vụ</span>
            </div>

            <div>
              <span className="font-bold block">Quản lý / Kế toán</span>
              <span className="text-[10px] text-slate-400 italic block mt-0.5">(Ký & duyệt chi)</span>
              <div className="h-16"></div>
              <span className="font-bold text-slate-800">IELTS Dương Vũ</span>
            </div>

            <div>
              <span className="font-bold block">Giảng viên xác nhận</span>
              <span className="text-[10px] text-slate-400 italic block mt-0.5">(Ký & xác nhận số buổi)</span>
              <div className="h-16"></div>
              <span className="font-bold text-slate-800">{activeTeacher?.name || 'Giáo viên'}</span>
            </div>
          </div>
        </div>

        {/* Modal Footer */}
        <div className="shrink-0 bg-slate-50 border-t border-slate-200 px-6 py-3.5 flex flex-wrap items-center justify-between gap-3">
          <div className="text-xs text-slate-600">
            <span>Tổng cộng: </span>
            <strong className="text-purple-800">{totalSessionsCount} buổi dạy</strong>
            <span className="mx-2">•</span>
            <span>Tổng thù lao: </span>
            <strong className="text-emerald-700 font-mono text-sm">{totalPayroll.toLocaleString('vi-VN')} đ</strong>
          </div>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={onClose}
              className="px-5 py-2 text-xs font-bold text-slate-700 bg-white hover:bg-slate-100 border border-slate-300 rounded-xl transition-all cursor-pointer shadow-2xs"
            >
              Đóng
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

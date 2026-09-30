import React, { useState, useMemo } from 'react';
import {
  X,
  User,
  GraduationCap,
  Calendar,
  Clock,
  BookOpen,
  Award,
  CheckCircle2,
  AlertCircle,
  ArrowRight,
  History,
  FileSpreadsheet,
  MessageCircle,
  CreditCard,
  Building2,
  Phone,
  Mail,
  MapPin,
  ChevronRight,
  Layers,
  Sparkles,
  Search,
  Filter,
  ArrowLeftRight,
  ShieldCheck,
  TrendingUp,
  AlertTriangle,
  Info,
  CalendarDays,
  Send,
  HelpCircle,
} from 'lucide-react';
import {
  Student,
  ClassGroup,
  AttendanceRecord,
  ExamScore,
  ContactBookNote,
  MilestoneEvaluationReport,
  TuitionTransaction,
  AuthUser,
  ClassTransferRecord,
  PlacementTest,
} from '../../types';
import { formatDateVN } from '../../utils/courseSchedule';

interface StudentLearningHistoryModalProps {
  isOpen: boolean;
  onClose: () => void;
  student: Student | null;
  classes: ClassGroup[];
  placementTests?: PlacementTest[];
  attendanceRecords?: AttendanceRecord[];
  examScores?: ExamScore[];
  contactBookNotes?: ContactBookNote[];
  milestoneReports?: MilestoneEvaluationReport[];
  transactions?: TuitionTransaction[];
  onTransferClass?: (
    studentId: string,
    fromClassId: string,
    toClassId: string,
    options: {
      reason: string;
      transferDate: string;
      tuitionCarriedOver?: number;
      notes?: string;
    }
  ) => void;
  currentUser?: AuthUser;
  onUpdateStudent?: (student: Student) => void;
  onOpenQuickTuition?: (student: Student) => void;
}

export const StudentLearningHistoryModal: React.FC<StudentLearningHistoryModalProps> = ({
  isOpen,
  onClose,
  student,
  classes,
  placementTests = [],
  attendanceRecords = [],
  examScores = [],
  contactBookNotes = [],
  milestoneReports = [],
  transactions = [],
  onTransferClass,
  currentUser,
  onUpdateStudent,
  onOpenQuickTuition,
}) => {
  const [activeTab, setActiveTab] = useState<
    'journey' | 'attendance' | 'scores' | 'notes' | 'tuition' | 'transfer'
  >('journey');
  const [filterClassId, setFilterClassId] = useState<string>('all');
  const [searchAttendanceText, setSearchAttendanceText] = useState<string>('');

  // Transfer form state
  const [targetClassId, setTargetClassId] = useState<string>('');
  const [transferDate, setTransferDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [transferReason, setTransferReason] = useState<string>('Chuyển lên khóa tiếp theo');
  const [customReason, setCustomReason] = useState<string>('');
  const [transferNotes, setTransferNotes] = useState<string>('');
  const [carryOverTuition, setCarryOverTuition] = useState<boolean>(true);
  const [isSubmittingTransfer, setIsSubmittingTransfer] = useState<boolean>(false);
  const [transferSuccessMsg, setTransferSuccessMsg] = useState<string | null>(null);

  if (!isOpen || !student) return null;

  // 1. Gather all attendance records for this student across ALL classes
  const studentAttendance = attendanceRecords
    .filter((r) => r.studentId === student.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // 2. Gather all exam scores
  const studentExams = examScores
    .filter(
      (e) =>
        e.studentId === student.id ||
        (e.studentCode && e.studentCode === student.code) ||
        (e.studentName && e.studentName.trim().toLowerCase() === student.name.trim().toLowerCase())
    )
    .sort((a, b) => new Date(b.examDate).getTime() - new Date(a.examDate).getTime());

  // 3. Gather contact book notes
  const studentNotes = contactBookNotes
    .filter((n) => n.studentId === student.id)
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // 4. Gather milestone reports
  const studentReports = milestoneReports
    .filter((r) => r.studentId === student.id || (r.studentCode && r.studentCode === student.code))
    .sort((a, b) => new Date(b.createdDate).getTime() - new Date(a.createdDate).getTime());

  // 5. Gather transactions
  const studentTransactions = transactions
    .filter((t) => t.studentId === student.id || (t.studentCode && t.studentCode === student.code))
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

  // 5b. Find entrance placement test for this student
  const studentPlacementTest = useMemo(() => {
    if (!student || !placementTests || placementTests.length === 0) return null;
    const cleanPhone = (student.phone || '').replace(/\D/g, '');
    const cleanName = (student.name || '').trim().toLowerCase();
    const cleanEmail = (student.email || '').trim().toLowerCase();

    return (
      placementTests.find((pt) => {
        if (pt.id === student.id) return true;
        const ptPhone = (pt.phone || '').replace(/\D/g, '');
        if (cleanPhone && ptPhone && cleanPhone === ptPhone) return true;
        if (cleanEmail && pt.email && cleanEmail === pt.email.trim().toLowerCase()) return true;
        if (cleanName && pt.candidateName && cleanName === pt.candidateName.trim().toLowerCase()) return true;
        return false;
      }) || null
    );
  }, [student, placementTests]);

  // 6. Calculate all classes student has ever touched
  const distinctClassIds = Array.from(
    new Set([
      student.classId,
      student.droppedClassId,
      ...(student.classTransferHistory || []).flatMap((t) => [t.fromClassId, t.toClassId]),
      ...(student.previousClasses || []).map((p) => p.classId),
      ...studentAttendance.map((a) => a.classId),
    ])
  ).filter(Boolean) as string[];

  // Build a summary for each class the student attended
  const classJourneyList = distinctClassIds.map((cid) => {
    const cls = classes.find((c) => c.id === cid);
    const clsAttendance = studentAttendance.filter((a) => a.classId === cid);
    const attendedCount = clsAttendance.filter(
      (a) => a.status === 'Có mặt' || a.status === 'Đi muộn' || a.status === 'Đi trễ'
    ).length;
    const absentCount = clsAttendance.filter(
      (a) => a.status === 'Nghỉ có phép' || a.status === 'Nghỉ không phép'
    ).length;
    const isCurrent = student.classId === cid;
    const isDropped = student.droppedClassId === cid && student.status === 'Đã nghỉ học';

    // Transfer info related to this class
    const transferFrom = (student.classTransferHistory || []).find((t) => t.fromClassId === cid);
    const transferTo = (student.classTransferHistory || []).find((t) => t.toClassId === cid);

    return {
      classId: cid,
      className: cls?.name || transferFrom?.fromClassName || transferTo?.toClassName || 'Lớp học',
      courseName: cls?.courseName || transferFrom?.fromCourseName || transferTo?.toCourseName || 'IELTS',
      branch: cls?.branch || 'Hải Phòng',
      teacherName: cls?.teacherName || 'Chưa gán',
      schedule: cls?.schedule || '',
      isCurrent,
      isDropped,
      totalSessions: cls?.totalSessions || 32,
      recordsCount: clsAttendance.length,
      attendedCount,
      absentCount,
      transferFrom,
      transferTo,
    };
  });

  // Filtered attendance records based on selected filter
  const filteredAttendance = studentAttendance.filter((rec) => {
    if (filterClassId !== 'all' && rec.classId !== filterClassId) return false;
    if (searchAttendanceText.trim()) {
      const q = searchAttendanceText.toLowerCase();
      const matchSkill = rec.skillTaught?.toLowerCase().includes(q) || (rec.skillsTaught || []).some(s => s.toLowerCase().includes(q));
      const matchNote = rec.note?.toLowerCase().includes(q) || rec.teacherNote?.toLowerCase().includes(q);
      const matchStatus = rec.status.toLowerCase().includes(q);
      return matchSkill || matchNote || matchStatus;
    }
    return true;
  });

  // Current class details
  const currentClass = classes.find((c) => c.id === student.classId);
  const currentClassAttendance = studentAttendance.filter((a) => a.classId === student.classId);
  const currentAttendedCount = currentClassAttendance.filter(
    (a) => a.status === 'Có mặt' || a.status === 'Đi muộn' || a.status === 'Đi trễ'
  ).length;

  const handleExecuteTransfer = async () => {
    if (!targetClassId) {
      alert('Vui lòng chọn lớp học đích để chuyển sang!');
      return;
    }
    if (targetClassId === student.classId) {
      alert('Lớp học mới trùng với lớp học hiện tại của học viên!');
      return;
    }

    const finalReason =
      transferReason === 'Khác'
        ? customReason.trim() || 'Chuyển lớp theo yêu cầu'
        : transferReason;

    setIsSubmittingTransfer(true);
    try {
      if (onTransferClass) {
        await onTransferClass(student.id, student.classId, targetClassId, {
          reason: finalReason,
          transferDate: transferDate || new Date().toISOString().split('T')[0],
          tuitionCarriedOver: carryOverTuition ? student.courseTuitionFee || currentClass?.tuitionFee : 0,
          notes: transferNotes.trim(),
        });
      }

      setTransferSuccessMsg('Chuyển lớp thành công! Toàn bộ lịch sử học tập cũ đã được lưu trữ an toàn.');
      setTimeout(() => {
        setTransferSuccessMsg(null);
        setActiveTab('journey');
      }, 2500);
    } catch (err: any) {
      alert('Lỗi khi chuyển lớp: ' + (err?.message || 'Vui lòng thử lại'));
    } finally {
      setIsSubmittingTransfer(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-slate-900/70 backdrop-blur-xs animate-in fade-in overflow-y-auto">
      <div className="bg-white rounded-3xl max-w-4xl w-full max-h-[92vh] flex flex-col shadow-2xl border border-slate-200 animate-in zoom-in-95 overflow-hidden my-auto">
        {/* Modal Header */}
        <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 text-white p-5 sm:p-6 shrink-0 relative overflow-hidden">
          <div className="absolute right-0 top-0 w-80 h-80 bg-purple-500/10 rounded-full blur-3xl pointer-events-none" />
          
          <div className="flex items-start justify-between gap-4 relative z-10">
            <div className="flex items-center gap-3.5">
              <div className="w-13 h-13 rounded-2xl bg-white/10 border border-white/20 flex items-center justify-center text-white text-xl font-black shadow-inner">
                {student.name.charAt(0)}
              </div>
              <div>
                <div className="flex items-center gap-2 flex-wrap">
                  <h2 className="text-lg sm:text-xl font-black text-white">{student.name}</h2>
                  <span className="px-2 py-0.5 rounded-full text-xs font-mono font-bold bg-purple-500/30 text-purple-200 border border-purple-400/30">
                    {student.code}
                  </span>
                  <span
                    className={`px-2 py-0.5 rounded-full text-[11px] font-bold ${
                      student.status === 'Đang học'
                        ? 'bg-emerald-500/30 text-emerald-200 border border-emerald-400/30'
                        : student.status === 'Đã nghỉ học'
                        ? 'bg-rose-500/30 text-rose-200 border border-rose-400/30'
                        : 'bg-amber-500/30 text-amber-200 border border-amber-400/30'
                    }`}
                  >
                    {student.status}
                  </span>
                </div>

                <div className="flex items-center gap-3 mt-1.5 text-xs text-purple-200/80 flex-wrap">
                  <span className="flex items-center gap-1">
                    <GraduationCap className="w-3.5 h-3.5 text-purple-300" />
                    <strong>Lớp hiện tại:</strong> {student.className || 'Chưa xếp lớp'}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-purple-300" />
                    {student.phone || 'Chưa có SĐT'}
                  </span>
                  {student.parentName && (
                    <>
                      <span>•</span>
                      <span>
                        PH: <strong>{student.parentName}</strong> ({student.parentPhone || student.phone})
                      </span>
                    </>
                  )}
                </div>
              </div>
            </div>

            <button
              onClick={onClose}
              className="p-2 text-white/70 hover:text-white hover:bg-white/10 rounded-xl transition-colors cursor-pointer"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Quick Stat Pill Highlights */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-5 relative z-10">
            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
              <div className="text-[10px] text-purple-200 uppercase font-semibold">Tổng buổi đã học</div>
              <div className="text-base font-black text-white mt-0.5">
                {studentAttendance.filter(a => a.status === 'Có mặt' || a.status === 'Đi muộn' || a.status === 'Đi trễ').length} buổi
              </div>
              <div className="text-[10px] text-purple-300 truncate">Qua {distinctClassIds.length} lớp học</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
              <div className="text-[10px] text-purple-200 uppercase font-semibold">Lớp hiện tại</div>
              <div className="text-base font-black text-amber-300 mt-0.5">
                {currentAttendedCount} / {currentClass?.totalSessions || 32} b
              </div>
              <div className="text-[10px] text-purple-300 truncate">{student.className || 'Chưa xếp'}</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
              <div className="text-[10px] text-purple-200 uppercase font-semibold">Bài thi & Điểm</div>
              <div className="text-base font-black text-white mt-0.5">
                {studentExams.length} bài test
              </div>
              <div className="text-[10px] text-purple-300">Đã lưu trong hồ sơ</div>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-xl p-2.5 border border-white/10">
              <div className="text-[10px] text-purple-200 uppercase font-semibold">Trạng thái học phí</div>
              <div
                className={`text-base font-black mt-0.5 ${
                  student.tuitionStatus === 'Đã đóng đủ' ? 'text-emerald-300' : 'text-rose-300'
                }`}
              >
                {student.tuitionStatus}
              </div>
              <div className="text-[10px] text-purple-300">
                {student.balanceOwed > 0 ? `Nợ ${student.balanceOwed.toLocaleString('vi-VN')}đ` : 'Không có nợ'}
              </div>
            </div>
          </div>
        </div>

        {/* Modal Navigation Tabs */}
        <div className="flex items-center gap-1.5 px-6 border-b border-slate-200 bg-slate-50/80 overflow-x-auto shrink-0 py-2">
          <button
            onClick={() => setActiveTab('journey')}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'journey'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <History className="w-3.5 h-3.5" />
            <span>Lịch sử các lớp & Chuyển lớp</span>
            {(student.classTransferHistory || []).length > 0 && (
              <span className="px-1.5 py-0.2 text-[9px] font-black bg-purple-300 text-purple-900 rounded-full">
                {(student.classTransferHistory || []).length}
              </span>
            )}
          </button>

          <button
            onClick={() => setActiveTab('attendance')}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'attendance'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <FileSpreadsheet className="w-3.5 h-3.5" />
            <span>Nhật ký điểm danh xuyên suốt ({studentAttendance.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('scores')}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'scores'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <Award className="w-3.5 h-3.5" />
            <span>Điểm thi & Đánh giá ({studentExams.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('notes')}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'notes'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <MessageCircle className="w-3.5 h-3.5" />
            <span>Sổ liên lạc & Nhận xét GV ({studentNotes.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('tuition')}
            className={`px-3.5 py-2 text-xs font-bold rounded-xl transition-all flex items-center gap-1.5 shrink-0 ${
              activeTab === 'tuition'
                ? 'bg-purple-700 text-white shadow-xs'
                : 'text-slate-600 hover:bg-slate-200/60'
            }`}
          >
            <CreditCard className="w-3.5 h-3.5" />
            <span>Học phí & Giao dịch</span>
          </button>

          <button
            onClick={() => setActiveTab('transfer')}
            className={`ml-auto px-3.5 py-2 text-xs font-black rounded-xl transition-all flex items-center gap-1.5 shrink-0 bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 shadow-xs`}
          >
            <ArrowLeftRight className="w-3.5 h-3.5 text-white" />
            <span>Chuyển Lớp Cho Học Viên</span>
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-5 sm:p-6 overflow-y-auto flex-1 space-y-6">
          {/* TAB 1: JOURNEY & TRANSFER TIMELINE */}
          {activeTab === 'journey' && (
            <div className="space-y-6">
              {/* Notice Banner */}
              <div className="bg-emerald-50 border border-emerald-200 rounded-2xl p-4 flex items-start gap-3">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                <div className="text-xs text-emerald-900 leading-relaxed">
                  <strong>Cơ chế bảo toàn dữ liệu học viên IELTS DƯƠNG VŨ:</strong> Khi học viên chuyển lớp (ví dụ từ Khóa 1 lên Khóa 2, hoặc đổi ca học sang lớp khác), toàn bộ lịch sử điểm danh, số buổi đã học, bài kiểm tra, điểm thi và nhận xét của giáo viên ở lớp cũ đều được giữ nguyên 100% và liên kết theo mã học viên <strong>{student.code}</strong>.
                </div>
              </div>

              {/* Entrance Placement Test Card if available */}
              {studentPlacementTest ? (
                <div className="bg-gradient-to-r from-purple-900 to-indigo-900 text-white rounded-2xl p-5 border border-purple-800 shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 border-b border-white/15 pb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 bg-purple-500/30 rounded-xl border border-purple-400/30">
                        <Sparkles className="w-5 h-5 text-amber-300" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-bold text-purple-200 uppercase tracking-wider">
                            Kết Quả Bài Kiểm Tra Đầu Vào
                          </span>
                          <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-emerald-500/20 text-emerald-300 border border-emerald-400/30">
                            {studentPlacementTest.status || 'Đã có kết quả'}
                          </span>
                        </div>
                        <h4 className="text-base font-black text-white mt-0.5">
                          {studentPlacementTest.code} • Ngày test: {formatDateVN(studentPlacementTest.testDate)}
                        </h4>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 bg-white/10 px-3.5 py-1.5 rounded-xl border border-white/10">
                      <span className="text-xs text-purple-200 font-semibold">Band xếp lớp:</span>
                      <span className="text-xl font-black text-amber-300">
                        {studentPlacementTest.overallScore}
                      </span>
                    </div>
                  </div>

                  {/* 4 Skill subscores */}
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mt-3.5">
                    <div className="bg-white/10 rounded-xl p-2.5 text-center border border-white/10">
                      <div className="text-[10px] text-purple-200 font-bold uppercase">Listening</div>
                      <div className="text-base font-black text-white mt-0.5">{studentPlacementTest.listeningScore}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-2.5 text-center border border-white/10">
                      <div className="text-[10px] text-purple-200 font-bold uppercase">Reading</div>
                      <div className="text-base font-black text-white mt-0.5">{studentPlacementTest.readingScore}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-2.5 text-center border border-white/10">
                      <div className="text-[10px] text-purple-200 font-bold uppercase">Writing</div>
                      <div className="text-base font-black text-white mt-0.5">{studentPlacementTest.writingScore}</div>
                    </div>
                    <div className="bg-white/10 rounded-xl p-2.5 text-center border border-white/10">
                      <div className="text-[10px] text-purple-200 font-bold uppercase">Speaking</div>
                      <div className="text-base font-black text-white mt-0.5">{studentPlacementTest.speakingScore}</div>
                    </div>
                  </div>

                  <div className="mt-3.5 pt-3 border-t border-white/10 text-xs text-purple-100 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <span className="text-purple-300 font-semibold">Đề xuất khóa học:</span>{' '}
                      <strong className="text-amber-300">{studentPlacementTest.recommendedCourse}</strong>
                      {studentPlacementTest.evaluatorName && (
                        <span className="text-purple-300 ml-2">
                          (Người chấm: {studentPlacementTest.evaluatorName})
                        </span>
                      )}
                    </div>
                    {studentPlacementTest.comment && (
                      <div className="text-[11px] text-purple-200 italic max-w-md">
                        "{studentPlacementTest.comment}"
                      </div>
                    )}
                  </div>
                </div>
              ) : null}

              {/* Class History Timeline */}
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <Layers className="w-4 h-4 text-purple-700" />
                    Lộ trình các lớp học viên đã tham gia ({classJourneyList.length} lớp)
                  </h3>
                  <button
                    onClick={() => setActiveTab('transfer')}
                    className="text-xs font-bold text-purple-700 hover:text-purple-900 flex items-center gap-1"
                  >
                    <span>Chuyển sang lớp mới</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="space-y-3">
                  {classJourneyList.map((item, idx) => (
                    <div
                      key={item.classId + '-' + idx}
                      className={`rounded-2xl p-4 border transition-all ${
                        item.isCurrent
                          ? 'bg-purple-50/50 border-purple-300 ring-2 ring-purple-500/20 shadow-xs'
                          : 'bg-white border-slate-200 hover:border-slate-300 shadow-2xs'
                      }`}
                    >
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                        <div>
                          <div className="flex items-center gap-2 flex-wrap">
                            <span className="font-bold text-slate-900 text-sm">{item.className}</span>
                            <span className="text-xs font-semibold text-purple-700 bg-purple-100 px-2 py-0.5 rounded-md">
                              {item.courseName}
                            </span>
                            {item.isCurrent && (
                              <span className="text-[10px] font-black text-emerald-700 bg-emerald-100 border border-emerald-300 px-2 py-0.5 rounded-full flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" />
                                ĐANG HỌC LỚP NÀY
                              </span>
                            )}
                            {item.isDropped && (
                              <span className="text-[10px] font-bold text-rose-700 bg-rose-100 px-2 py-0.5 rounded-full">
                                Đã thôi học
                              </span>
                            )}
                            {!item.isCurrent && !item.isDropped && (
                              <span className="text-[10px] font-bold text-slate-600 bg-slate-100 px-2 py-0.5 rounded-full">
                                Lớp đã học trước đây
                              </span>
                            )}
                          </div>

                          <div className="flex items-center gap-3 text-xs text-slate-500 mt-1.5 flex-wrap">
                            <span>GV: <strong>{item.teacherName}</strong></span>
                            <span>•</span>
                            <span>Cơ sở: <strong>{item.branch}</strong></span>
                            {item.schedule && (
                              <>
                                <span>•</span>
                                <span>Lịch: {item.schedule}</span>
                              </>
                            )}
                          </div>
                        </div>

                        {/* Learning Stats in this class */}
                        <div className="flex items-center gap-3 shrink-0">
                          <div className="text-right">
                            <div className="text-xs text-slate-500">Đã học tại lớp này</div>
                            <div className="text-sm font-black text-purple-800">
                              {item.attendedCount} buổi <span className="text-xs font-normal text-slate-400">/ {item.recordsCount} buổi ghi nhận</span>
                            </div>
                          </div>
                          <button
                            onClick={() => {
                              setFilterClassId(item.classId);
                              setActiveTab('attendance');
                            }}
                            className="px-2.5 py-1.5 text-xs font-bold text-purple-700 bg-purple-100 hover:bg-purple-200 rounded-xl transition-colors"
                          >
                            Xem điểm danh
                          </button>
                        </div>
                      </div>

                      {/* Transfer Record Notes if available */}
                      {item.transferFrom && (
                        <div className="mt-3 pt-3 border-t border-slate-100 flex items-start gap-2 text-xs text-slate-600 bg-amber-50/50 p-2.5 rounded-xl border border-amber-100">
                          <ArrowRight className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                          <div>
                            <span className="font-semibold text-amber-900">
                              Đã chuyển từ lớp này sang {item.transferFrom.toClassName}
                            </span>{' '}
                            (Ngày: {formatDateVN(item.transferFrom.transferDate)})
                            {item.transferFrom.reason && (
                              <span className="block text-slate-500 text-[11px] mt-0.5">
                                Lý do: {item.transferFrom.reason}
                              </span>
                            )}
                          </div>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* Transfer Logs Table */}
              {(student.classTransferHistory || []).length > 0 && (
                <div className="space-y-3">
                  <h3 className="text-sm font-bold text-slate-900 flex items-center gap-2">
                    <ArrowLeftRight className="w-4 h-4 text-amber-600" />
                    Lịch sử các lần chuyển lớp chi tiết ({student.classTransferHistory?.length} lần)
                  </h3>

                  <div className="border border-slate-200 rounded-2xl overflow-hidden">
                    <table className="w-full text-left text-xs">
                      <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                        <tr>
                          <th className="py-2.5 px-3">Ngày chuyển</th>
                          <th className="py-2.5 px-3">Lớp chuyển đi (Cũ)</th>
                          <th className="py-2.5 px-3">Lớp chuyển đến (Mới)</th>
                          <th className="py-2.5 px-3">Số buổi đã học lớp cũ</th>
                          <th className="py-2.5 px-3">Lý do & Ghi chú</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-slate-100">
                        {student.classTransferHistory?.map((th) => (
                          <tr key={th.id} className="hover:bg-slate-50">
                            <td className="py-2.5 px-3 font-semibold text-slate-900">
                              {formatDateVN(th.transferDate)}
                            </td>
                            <td className="py-2.5 px-3 text-rose-700 font-bold">
                              {th.fromClassName}
                            </td>
                            <td className="py-2.5 px-3 text-emerald-700 font-bold">
                              {th.toClassName}
                            </td>
                            <td className="py-2.5 px-3 font-semibold text-purple-900">
                              {th.completedSessionsInOldClass || 0} buổi
                            </td>
                            <td className="py-2.5 px-3 text-slate-600">
                              <div>{th.reason || 'Chuyển lớp'}</div>
                              {th.notes && (
                                <div className="text-[11px] text-slate-400 mt-0.5">{th.notes}</div>
                              )}
                            </td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </div>
          )}

          {/* TAB 2: ATTENDANCE ACROSS ALL CLASSES */}
          {activeTab === 'attendance' && (
            <div className="space-y-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 bg-slate-50 p-3.5 rounded-2xl border border-slate-200">
                <div className="flex items-center gap-2 flex-wrap">
                  <Filter className="w-4 h-4 text-purple-700" />
                  <span className="text-xs font-bold text-slate-700">Lọc theo lớp học:</span>
                  <select
                    value={filterClassId}
                    onChange={(e) => setFilterClassId(e.target.value)}
                    className="text-xs bg-white border border-slate-300 rounded-lg px-2.5 py-1.5 font-semibold text-slate-800"
                  >
                    <option value="all">Tất cả các lớp ({studentAttendance.length} buổi)</option>
                    {classJourneyList.map((c) => (
                      <option key={c.classId} value={c.classId}>
                        {c.className} {c.isCurrent ? '(Lớp hiện tại)' : '(Lớp cũ)'} - {c.recordsCount} buổi
                      </option>
                    ))}
                  </select>
                </div>

                <div className="relative">
                  <Search className="w-3.5 h-3.5 absolute left-2.5 top-2.5 text-slate-400" />
                  <input
                    type="text"
                    placeholder="Tìm theo kỹ năng, ghi chú..."
                    value={searchAttendanceText}
                    onChange={(e) => setSearchAttendanceText(e.target.value)}
                    className="text-xs pl-8 pr-3 py-1.5 bg-white border border-slate-300 rounded-lg w-56 focus:outline-none focus:ring-1 focus:ring-purple-500"
                  />
                </div>
              </div>

              {filteredAttendance.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-xs">
                  Không có bản ghi điểm danh nào phù hợp.
                </div>
              ) : (
                <div className="border border-slate-200 rounded-2xl overflow-hidden">
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-100 text-slate-700 font-bold border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3">Ngày & Buổi</th>
                        <th className="py-2.5 px-3">Lớp học</th>
                        <th className="py-2.5 px-3">Chuyên cần</th>
                        <th className="py-2.5 px-3">Kỹ năng / Bài học</th>
                        <th className="py-2.5 px-3">Điểm số</th>
                        <th className="py-2.5 px-3">BTVN / Quizlet</th>
                        <th className="py-2.5 px-3">Nhận xét của GV</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {filteredAttendance.map((rec) => {
                        const recCls = classes.find((c) => c.id === rec.classId);
                        const isCurrentCls = rec.classId === student.classId;

                        return (
                          <tr key={rec.id} className="hover:bg-slate-50 transition-colors">
                            <td className="py-2.5 px-3">
                              <div className="font-bold text-slate-900">{formatDateVN(rec.date)}</div>
                              <div className="text-[11px] text-purple-700 font-semibold">
                                Buổi {rec.sessionNumber}
                              </div>
                            </td>
                            <td className="py-2.5 px-3">
                              <span
                                className={`inline-block font-semibold px-2 py-0.5 rounded text-[11px] ${
                                  isCurrentCls
                                    ? 'bg-purple-100 text-purple-800'
                                    : 'bg-slate-100 text-slate-700'
                                }`}
                              >
                                {recCls?.name || 'Lớp cũ'}
                              </span>
                            </td>
                            <td className="py-2.5 px-3">
                              <span
                                className={`inline-block px-2 py-0.5 rounded-full text-[10px] font-bold ${
                                  rec.status === 'Có mặt'
                                    ? 'bg-emerald-100 text-emerald-800'
                                    : rec.status === 'Đi muộn' || rec.status === 'Đi trễ'
                                    ? 'bg-amber-100 text-amber-800'
                                    : 'bg-rose-100 text-rose-800'
                                }`}
                              >
                                {rec.status}
                              </span>
                            </td>
                            <td className="py-2.5 px-3">
                              <div className="font-medium text-slate-800">
                                {rec.skillsTaught?.join(', ') || rec.skillTaught || 'Bài học'}
                              </div>
                            </td>
                            <td className="py-2.5 px-3">
                              {rec.score !== undefined && rec.score !== '' ? (
                                <span className="font-bold text-purple-700">{rec.score}đ</span>
                              ) : (
                                <span className="text-slate-400">-</span>
                              )}
                            </td>
                            <td className="py-2.5 px-3">
                              <div className="space-y-0.5">
                                {rec.homeworkStatus && (
                                  <span
                                    className={`inline-block text-[10px] px-1.5 py-0.2 rounded font-semibold ${
                                      rec.homeworkStatus === 'Đã làm'
                                        ? 'bg-emerald-50 text-emerald-700'
                                        : 'bg-rose-50 text-rose-700'
                                    }`}
                                  >
                                    BTVN: {rec.homeworkStatus}
                                  </span>
                                )}
                                {rec.quizletStatus && (
                                  <span
                                    className={`inline-block text-[10px] px-1.5 py-0.2 rounded font-semibold ml-1 ${
                                      rec.quizletStatus === 'Đã học'
                                        ? 'bg-blue-50 text-blue-700'
                                        : 'bg-amber-50 text-amber-700'
                                    }`}
                                  >
                                    Quizlet: {rec.quizletStatus}
                                  </span>
                                )}
                              </div>
                            </td>
                            <td className="py-2.5 px-3 text-slate-600 max-w-xs truncate">
                              {rec.teacherNote || rec.note || '-'}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 3: EXAM SCORES & EVALUATIONS */}
          {activeTab === 'scores' && (
            <div className="space-y-4">
              {/* Entrance Placement Test highlight in scores tab */}
              {studentPlacementTest && (
                <div className="bg-purple-50 border border-purple-200 rounded-2xl p-4">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2">
                      <Sparkles className="w-4 h-4 text-purple-700" />
                      <span className="font-bold text-xs text-purple-900 uppercase">
                        1. Bài kiểm tra đầu vào (Placement Test)
                      </span>
                    </div>
                    <span className="px-2 py-0.5 rounded-full text-[10px] font-black bg-purple-200 text-purple-900">
                      Overall: {studentPlacementTest.overallScore}
                    </span>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-center text-xs">
                    <div className="bg-white p-2 rounded-xl border border-purple-100">
                      <div className="text-[10px] text-slate-500 font-semibold">Listening</div>
                      <div className="font-black text-purple-900">{studentPlacementTest.listeningScore}</div>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-purple-100">
                      <div className="text-[10px] text-slate-500 font-semibold">Reading</div>
                      <div className="font-black text-purple-900">{studentPlacementTest.readingScore}</div>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-purple-100">
                      <div className="text-[10px] text-slate-500 font-semibold">Writing</div>
                      <div className="font-black text-purple-900">{studentPlacementTest.writingScore}</div>
                    </div>
                    <div className="bg-white p-2 rounded-xl border border-purple-100">
                      <div className="text-[10px] text-slate-500 font-semibold">Speaking</div>
                      <div className="font-black text-purple-900">{studentPlacementTest.speakingScore}</div>
                    </div>
                  </div>

                  <div className="text-[11px] text-purple-800 mt-2 flex items-center justify-between">
                    <span>Khóa đề xuất: <strong>{studentPlacementTest.recommendedCourse}</strong></span>
                    <span>Ngày test: {formatDateVN(studentPlacementTest.testDate)}</span>
                  </div>
                </div>
              )}

              {studentExams.length === 0 && studentReports.length === 0 && !studentPlacementTest ? (
                <div className="py-12 text-center text-slate-400 text-xs">
                  Chưa có kết quả bài thi hoặc báo cáo định kỳ nào được lưu.
                </div>
              ) : (
                <div className="space-y-4">
                  {/* Exam scores */}
                  {studentExams.length > 0 && (
                    <div className="border border-slate-200 rounded-2xl overflow-hidden">
                      <div className="bg-purple-50/70 p-3 border-b border-purple-100 font-bold text-xs text-purple-900 flex items-center gap-2">
                        <Award className="w-4 h-4 text-purple-700" />
                        2. Danh sách điểm thi các đợt định kỳ ({studentExams.length} bài)
                      </div>
                      <table className="w-full text-left text-xs">
                        <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                          <tr>
                            <th className="py-2.5 px-3">Tên bài thi</th>
                            <th className="py-2.5 px-3">Lớp học</th>
                            <th className="py-2.5 px-3">Ngày thi</th>
                            <th className="py-2.5 px-3">Nghe (L)</th>
                            <th className="py-2.5 px-3">Nói (S)</th>
                            <th className="py-2.5 px-3">Đọc (R)</th>
                            <th className="py-2.5 px-3">Viết (W)</th>
                            <th className="py-2.5 px-3">Tổng điểm</th>
                            <th className="py-2.5 px-3">Xếp loại</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100">
                          {studentExams.map((ex) => (
                            <tr key={ex.id} className="hover:bg-slate-50">
                              <td className="py-2.5 px-3 font-bold text-slate-900">{ex.examName}</td>
                              <td className="py-2.5 px-3 text-slate-600">{ex.className}</td>
                              <td className="py-2.5 px-3 text-slate-600">{formatDateVN(ex.examDate)}</td>
                              <td className="py-2.5 px-3 font-semibold">{ex.listening ?? '-'}</td>
                              <td className="py-2.5 px-3 font-semibold">{ex.speaking ?? '-'}</td>
                              <td className="py-2.5 px-3 font-semibold">{ex.reading ?? '-'}</td>
                              <td className="py-2.5 px-3 font-semibold">{ex.writing ?? '-'}</td>
                              <td className="py-2.5 px-3 font-black text-purple-700 text-sm">
                                {ex.totalScore}
                              </td>
                              <td className="py-2.5 px-3">
                                {ex.rank && (
                                  <span className="px-2 py-0.5 rounded-full text-[10px] font-bold bg-amber-100 text-amber-900">
                                    {ex.rank}
                                  </span>
                                )}
                              </td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  )}

                  {/* Milestone Reports */}
                  {studentReports.length > 0 && (
                    <div className="border border-slate-200 rounded-2xl overflow-hidden">
                      <div className="bg-indigo-50/70 p-3 border-b border-indigo-100 font-bold text-xs text-indigo-900 flex items-center gap-2">
                        <TrendingUp className="w-4 h-4 text-indigo-700" />
                        Báo cáo đánh giá định kỳ ({studentReports.length} báo cáo)
                      </div>
                      <div className="p-3 space-y-3">
                        {studentReports.map((rep) => (
                          <div key={rep.id} className="bg-slate-50 p-3 rounded-xl border border-slate-200">
                            <div className="flex justify-between items-center text-xs">
                              <span className="font-bold text-slate-900">
                                {rep.milestonePeriod} - {rep.className}
                              </span>
                              <span className="font-semibold text-purple-700">
                                {formatDateVN(rep.createdDate)}
                              </span>
                            </div>
                            <div className="text-xs text-slate-600 mt-2">
                              <div><strong>Nhận xét GV:</strong> {rep.teacherComments}</div>
                              {rep.parentAdvice && (
                                <div className="mt-1 text-purple-900">
                                  <strong>Đề xuất:</strong> {rep.parentAdvice}
                                </div>
                              )}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* TAB 4: TEACHER NOTES & CONTACT BOOK */}
          {activeTab === 'notes' && (
            <div className="space-y-3">
              {studentNotes.length === 0 ? (
                <div className="py-12 text-center text-slate-400 text-xs">
                  Chưa có nhận xét nào trong sổ liên lạc.
                </div>
              ) : (
                studentNotes.map((note) => (
                  <div key={note.id} className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                    <div className="flex flex-wrap items-center justify-between gap-2 text-xs">
                      <div className="flex items-center gap-2">
                        <span className="font-bold text-slate-900">{formatDateVN(note.date)}</span>
                        <span className="font-semibold text-purple-700 bg-purple-100 px-2 py-0.5 rounded">
                          {note.className}
                        </span>
                        <span className="text-slate-500">Chủ đề: {note.lessonTopic}</span>
                      </div>
                      <span className="text-[10px] font-bold text-slate-600 bg-slate-200 px-2 py-0.5 rounded-full">
                        {note.attitude}
                      </span>
                    </div>
                    <div className="text-xs text-slate-700 leading-relaxed bg-white p-3 rounded-xl border border-slate-200/70">
                      {note.teacherFeedback}
                    </div>
                  </div>
                ))
              )}
            </div>
          )}

          {/* TAB 5: TUITION & TRANSACTIONS */}
          {activeTab === 'tuition' && (
            <div className="space-y-4">
              <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 grid grid-cols-1 sm:grid-cols-3 gap-3">
                <div>
                  <div className="text-xs text-slate-500">Trạng thái học phí</div>
                  <div className="text-sm font-bold text-slate-900 mt-0.5">{student.tuitionStatus}</div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Số tiền còn nợ</div>
                  <div className="text-sm font-bold text-rose-600 mt-0.5">
                    {student.balanceOwed?.toLocaleString('vi-VN')} đ
                  </div>
                </div>
                <div>
                  <div className="text-xs text-slate-500">Ngày nộp gần nhất</div>
                  <div className="text-sm font-bold text-emerald-700 mt-0.5">
                    {student.tuitionPaidDate ? formatDateVN(student.tuitionPaidDate) : 'Chưa ghi nhận'}
                  </div>
                </div>
              </div>

              {studentTransactions.length > 0 && (
                <div className="border border-slate-200 rounded-2xl overflow-hidden">
                  <div className="bg-emerald-50 p-3 border-b border-emerald-100 font-bold text-xs text-emerald-900">
                    Lịch sử thu phí ({studentTransactions.length} phiếu thu)
                  </div>
                  <table className="w-full text-left text-xs">
                    <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                      <tr>
                        <th className="py-2.5 px-3">Mã phiếu</th>
                        <th className="py-2.5 px-3">Ngày thu</th>
                        <th className="py-2.5 px-3">Lớp học</th>
                        <th className="py-2.5 px-3">Số tiền</th>
                        <th className="py-2.5 px-3">Hình thức</th>
                        <th className="py-2.5 px-3">Người thu</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-100">
                      {studentTransactions.map((tx) => (
                        <tr key={tx.id} className="hover:bg-slate-50">
                          <td className="py-2.5 px-3 font-mono font-semibold text-purple-700">
                            {tx.receiptCode}
                          </td>
                          <td className="py-2.5 px-3 text-slate-700">{formatDateVN(tx.date)}</td>
                          <td className="py-2.5 px-3 text-slate-700">{tx.className}</td>
                          <td className="py-2.5 px-3 font-bold text-emerald-700">
                            {tx.amount?.toLocaleString('vi-VN')} đ
                          </td>
                          <td className="py-2.5 px-3 text-slate-600">{tx.paymentMethod}</td>
                          <td className="py-2.5 px-3 text-slate-600">{tx.collectorName}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </div>
          )}

          {/* TAB 6: TRANSFER CLASS DIALOG */}
          {activeTab === 'transfer' && (
            <div className="space-y-6 animate-in fade-in">
              <div className="bg-amber-50 border border-amber-200 rounded-2xl p-4 flex items-start gap-3">
                <ArrowLeftRight className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
                <div className="text-xs text-amber-900 leading-relaxed">
                  <strong>Thực hiện chuyển lớp cho học viên:</strong> Dữ liệu các buổi đã học ở lớp cũ ({currentAttendedCount} buổi tại {student.className}) sẽ được lưu trữ vĩnh viễn trong lịch sử học tập. Sĩ số lớp cũ sẽ tự động giảm đi 1 và sĩ số lớp mới sẽ tăng lên 1.
                </div>
              </div>

              {transferSuccessMsg && (
                <div className="p-4 bg-emerald-100 border border-emerald-300 text-emerald-900 rounded-2xl text-xs font-bold flex items-center gap-2 animate-in zoom-in-95">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>{transferSuccessMsg}</span>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* Current Class Info */}
                <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2">
                  <div className="text-[11px] font-bold text-slate-500 uppercase">1. Lớp hiện tại (Chuyển đi)</div>
                  <div className="text-base font-black text-slate-900">{student.className || 'Chưa xếp lớp'}</div>
                  <div className="text-xs text-purple-700 font-semibold">{student.courseName}</div>
                  <div className="pt-2 border-t border-slate-200 text-xs text-slate-600">
                    Đã hoàn thành: <strong>{currentAttendedCount} buổi</strong>
                  </div>
                </div>

                {/* Target Class Selection */}
                <div className="bg-purple-50/50 p-4 rounded-2xl border border-purple-200 space-y-3">
                  <div className="text-[11px] font-bold text-purple-700 uppercase">2. Lớp chuyển đến (Mới) *</div>
                  <select
                    value={targetClassId}
                    onChange={(e) => setTargetClassId(e.target.value)}
                    className="w-full text-xs font-semibold p-2.5 bg-white border border-purple-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-500"
                  >
                    <option value="">-- Chọn lớp học mới --</option>
                    {classes
                      .filter((c) => c.id !== student.classId)
                      .map((c) => (
                        <option key={c.id} value={c.id}>
                          {c.name} ({c.courseName}) - GV: {c.teacherName} - Sĩ số: {c.currentStudents}/{c.maxStudents}
                        </option>
                      ))}
                  </select>
                </div>
              </div>

              {/* Transfer Details Form */}
              <div className="space-y-3 bg-white p-4 rounded-2xl border border-slate-200">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Ngày chuyển lớp</label>
                    <input
                      type="date"
                      value={transferDate}
                      onChange={(e) => setTransferDate(e.target.value)}
                      className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-800"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Lý do chuyển lớp</label>
                    <select
                      value={transferReason}
                      onChange={(e) => setTransferReason(e.target.value)}
                      className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-800"
                    >
                      <option value="Chuyển lên khóa tiếp theo">Chuyển lên khóa tiếp theo (K1 → K2 / K3 / K4)</option>
                      <option value="Đổi ca học / Đổi lịch học">Đổi ca học / Đổi lịch học trong tuần</option>
                      <option value="Chuyển cơ sở học">Chuyển cơ sở học (Tô Hiệu ↔ Kiến An)</option>
                      <option value="Học lại khóa trước">Học lại khóa trước để củng cố kiến thức</option>
                      <option value="Học bù lớp khác">Học bù ghép lớp khác</option>
                      <option value="Khác">Lý do khác...</option>
                    </select>
                  </div>
                </div>

                {transferReason === 'Khác' && (
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Nhập lý do chi tiết</label>
                    <input
                      type="text"
                      placeholder="Ghi rõ lý do chuyển lớp..."
                      value={customReason}
                      onChange={(e) => setCustomReason(e.target.value)}
                      className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-xl font-semibold text-slate-800"
                    />
                  </div>
                )}

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Ghi chú thêm (Tùy chọn)</label>
                  <textarea
                    rows={2}
                    placeholder="Ghi chú thêm về học viên khi sang lớp mới..."
                    value={transferNotes}
                    onChange={(e) => setTransferNotes(e.target.value)}
                    className="w-full text-xs p-2 bg-slate-50 border border-slate-300 rounded-xl font-medium text-slate-800"
                  />
                </div>

                <div className="pt-2 flex items-center gap-2">
                  <input
                    type="checkbox"
                    id="carryOverTuition"
                    checked={carryOverTuition}
                    onChange={(e) => setCarryOverTuition(e.target.checked)}
                    className="w-4 h-4 text-purple-600 rounded border-slate-300 focus:ring-purple-500"
                  />
                  <label htmlFor="carryOverTuition" className="text-xs font-semibold text-slate-700 cursor-pointer">
                    Bảo lưu và chuyển tiếp học phí / công nợ hiện tại sang lớp mới
                  </label>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-end gap-3 pt-2">
                <button
                  type="button"
                  onClick={() => setActiveTab('journey')}
                  className="px-4 py-2 text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-xl transition-colors cursor-pointer"
                >
                  Quay lại lịch sử
                </button>

                <button
                  type="button"
                  disabled={isSubmittingTransfer || !targetClassId}
                  onClick={handleExecuteTransfer}
                  className="px-5 py-2.5 text-xs font-bold text-white bg-gradient-to-r from-purple-700 to-indigo-700 hover:from-purple-800 hover:to-indigo-800 disabled:opacity-50 rounded-xl shadow-md transition-all flex items-center gap-2 cursor-pointer"
                >
                  <ArrowLeftRight className="w-4 h-4" />
                  <span>{isSubmittingTransfer ? 'Đang thực hiện chuyển lớp...' : 'Xác nhận Chuyển lớp & Lưu dữ liệu'}</span>
                </button>
              </div>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="p-4 px-6 bg-slate-50 border-t border-slate-200 flex items-center justify-between shrink-0">
          <div className="text-xs text-slate-500 flex items-center gap-1.5">
            <Info className="w-4 h-4 text-purple-600 shrink-0" />
            <span>Dữ liệu học tập được bảo toàn tự động và đồng bộ thời gian thực.</span>
          </div>

          <button
            onClick={onClose}
            className="px-5 py-2 text-xs font-bold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 rounded-xl transition-colors cursor-pointer shadow-2xs"
          >
            Đóng
          </button>
        </div>
      </div>
    </div>
  );
};

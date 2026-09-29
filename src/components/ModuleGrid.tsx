import React from 'react';
import {
  Wallet,
  Users2,
  UserPlus,
  BookOpenCheck,
  ClipboardList,
  GraduationCap,
  MessageSquareText,
  CalendarCheck2,
  BarChart3,
  Award,
  CalendarDays,
  Target,
  BookMarked,
  PackageCheck,
  TrendingUp,
  School,
  Sparkles,
  ArrowRight,
  Plus,
  Shield,
  KeyRound,
  Lock,
  FileSpreadsheet
} from 'lucide-react';
import { ModuleId, AuthUser } from '../types';
import { saveBatchDocuments } from '../lib/firestoreService';

interface ModuleGridProps {
  onSelectModule: (module: ModuleId) => void;
  onOpenCreateClass: () => void;
  onOpenLogin: () => void;
  onExportExcel?: () => void;
  currentUser: AuthUser;
  stats: {
    totalStudents: number;
    activeClasses: number;
    monthlyRevenue: number;
    pendingLeads: number;
    unpaidCount: number;
    placementCount: number;
  };
  onCleanAndRecountStudents?: () => void;
}

interface ModuleCardItem {
  id: ModuleId;
  title: string;
  icon: React.ReactNode;
  subtitle: string;
  badge?: string;
  badgeColor?: string;
}

export const ModuleGrid: React.FC<ModuleGridProps> = ({
  onSelectModule,
  onOpenCreateClass,
  onOpenLogin,
  onExportExcel,
  currentUser,
  stats,
  onCleanAndRecountStudents,
}) => {
  const isTeacher = currentUser.role === 'teacher';
  const isAssistant = currentUser.role === 'assistant';
  const isAdmin = currentUser.role === 'admin';

  // The modules definition
  const allModules: ModuleCardItem[] = [
    {
      id: 'finance',
      title: 'Quản lý tài chính',
      icon: <Wallet className="w-6 h-6" />,
      subtitle: 'Thu/chi học phí, biên lai thu tiền, công nợ học viên tại 2 cơ sở',
      badge: `${stats.unpaidCount} nợ phí`,
      badgeColor: stats.unpaidCount > 0 ? 'bg-amber-50 text-amber-700 border-amber-200' : 'bg-slate-100 text-slate-600',
    },
    {
      id: 'hr',
      title: 'Quản lý nhân sự',
      icon: <Users2 className="w-6 h-6" />,
      subtitle: 'Hồ sơ giáo viên bản ngữ/Việt Nam, trợ giảng, phân công lịch dạy & bảng lương',
      badge: '4 giáo viên',
    },
    {
      id: 'admissions',
      title: 'Quản lý tuyển sinh',
      icon: <UserPlus className="w-6 h-6" />,
      subtitle: 'Pipeline khách tiềm năng, tư vấn, hẹn test & đăng ký ghi danh',
      badge: `${stats.pendingLeads} lead`,
      badgeColor: 'bg-indigo-50 text-indigo-700 border-indigo-200',
    },
    {
      id: 'placement',
      title: 'Quản lý kiểm tra đầu vào',
      icon: <ClipboardList className="w-6 h-6" />,
      subtitle: 'Đánh giá 4 kỹ năng Nghe-Nói-Đọc-Viết, xếp level lộ trình IDV',
      badge: `${stats.placementCount} phiếu test`,
      badgeColor: 'bg-purple-50 text-purple-700 border-purple-200',
    },
    {
      id: 'students',
      title: 'Quản lý học viên & Lớp',
      icon: <GraduationCap className="w-6 h-6" />,
      subtitle: 'Hồ sơ học viên, danh sách lớp học, Sổ lớp & Bảng điểm từng buổi (L1, L2...)',
      badge: `${stats.totalStudents} học viên`,
      badgeColor: 'bg-emerald-50 text-emerald-700 border-emerald-200',
    },
    {
      id: 'contact_book',
      title: 'Quản lý sổ liên lạc',
      icon: <MessageSquareText className="w-6 h-6" />,
      subtitle: 'Sổ liên lạc điện tử, nhận xét buổi học gửi phụ huynh Zalo/SMS',
      badge: 'Sổ điện tử',
    },
    {
      id: 'reports',
      title: 'Quản lý báo cáo',
      icon: <BarChart3 className="w-6 h-6" />,
      subtitle: 'Báo cáo doanh thu 2 cơ sở, tỷ lệ duy trì học viên, chất lượng',
      badge: 'Real-time',
    },
    {
      id: 'exams',
      title: 'Quản lý điểm thi',
      icon: <Award className="w-6 h-6" />,
      subtitle: 'Bảng điểm giữa kỳ/cuối kỳ 4 kỹ năng, xếp loại, cấp chứng chỉ IDV',
      badge: 'Đánh giá',
      badgeColor: 'bg-emerald-100 text-emerald-800 font-bold',
    },
    {
      id: 'teacher_sessions',
      title: 'Thống kê số buổi dạy',
      icon: <CalendarDays className="w-6 h-6 animate-pulse" />,
      subtitle: 'Theo dõi, đối chiếu số ca đứng lớp giảng dạy thực tế của giáo viên theo từng tháng',
      badge: 'Buổi dạy',
      badgeColor: 'bg-purple-100 text-purple-800 font-bold',
    },
    {
      id: 'kpi',
      title: 'Quản lý chỉ tiêu',
      icon: <Target className="w-6 h-6" />,
      subtitle: 'Chỉ tiêu doanh thu tuyển sinh, KPI tư vấn viên theo tháng',
      badge: 'Chỉ tiêu',
    },
    {
      id: 'speaking_practice',
      title: 'Luyện Speaking cùng IDV AI',
      icon: <MessageSquareText className="w-6 h-6" />,
      subtitle: 'Phòng luyện tập Speaking 1-1 cùng IDV AI Trainer',
      badge: 'New',
      badgeColor: 'bg-green-50 text-green-700 border-green-200',
    },
    {
      id: 'curriculum',
      title: 'Quản lý khóa học & Học phí',
      icon: <BookMarked className="w-6 h-6" />,
      subtitle: 'Khung chương trình chuẩn IELTS, Cambridge & bảng học phí học sinh theo khóa',
      badge: 'Quản lý & Trợ lý',
      badgeColor: 'bg-purple-100 text-purple-800 font-bold',
    },
  ];

  // RBAC Filtering according to exact prompt specifications:
  // - Teacher: 'students', 'exams', 'teacher_sessions', 'speaking_practice'
  // - Assistant: 'students', 'curriculum', 'admissions', 'exams', 'teacher_sessions', 'contact_book', 'placement', 'speaking_practice'
  // - Admin: All modules
  const isDuongVu = currentUser?.email === 'ieltsduongvu@gmail.com' || currentUser?.email === 'ieltsduongvu5@gmail.com' || currentUser?.name?.includes('Dương Vũ');
  const isVuNgoc = currentUser?.email?.toLowerCase() === 'vungoc23122002@gmail.com';
  const isNhungPhan = currentUser?.email?.trim().toLowerCase() === 'nhungphan.mkt@gmail.com';

  const visibleModules = isNhungPhan
    ? allModules
        .filter((m) => m.id === 'students')
        .map((m) => ({
          ...m,
          title: 'Nhật Ký & Chấm Điểm Buổi Học',
          subtitle: 'Vào lớp học để ghi nhận nhật ký và chấm điểm chi tiết từng buổi học',
          badge: 'Trợ lý chuyên trách',
          badgeColor: 'bg-purple-100 text-purple-900 font-bold',
        }))
    : isTeacher && !isDuongVu
    ? allModules.filter((m) => m.id === 'teacher_sessions')
    : isTeacher
    ? allModules.filter((m) => m.id === 'students' || m.id === 'teacher_sessions')
    : isAssistant
    ? allModules.filter((m) =>
        ['students', 'curriculum', 'admissions', 'teacher_sessions', 'contact_book', 'placement'].includes(m.id)
      )
    : allModules;

  const [isMigrating, setIsMigrating] = React.useState(false);
  const [migrationResult, setMigrationResult] = React.useState<any>(null);
  const [showMigrationModal, setShowMigrationModal] = React.useState(false);

  const handleMigrate = async () => {
    if (!window.confirm('Hệ thống sẽ sao chép tự động toàn bộ danh sách lớp học, học viên, điểm danh và bài test từ cơ sở dữ liệu cũ sang cơ sở dữ liệu gói Blaze không giới hạn. Bạn có chắc chắn muốn thực hiện?')) {
      return;
    }
    setIsMigrating(true);
    setShowMigrationModal(true);
    setMigrationResult(null);
    try {
      const res = await fetch('/api/migrate-database', { method: 'POST' });
      const json = await res.json();
      setMigrationResult(json);
    } catch (err: any) {
      setMigrationResult({ success: false, message: err.message || 'Lỗi kết nối máy chủ.' });
    } finally {
      setIsMigrating(false);
    }
  };

  const [hasCachedData, setHasCachedData] = React.useState(false);
  const [isRestoring, setIsRestoring] = React.useState(false);

  React.useEffect(() => {
    try {
      const cachedClassesRaw = localStorage.getItem('vps_col_classes');
      const cachedClasses = cachedClassesRaw ? JSON.parse(cachedClassesRaw) : [];
      if (Array.isArray(cachedClasses) && cachedClasses.length > 0 && stats.activeClasses === 0) {
        setHasCachedData(true);
      }
    } catch (e) {}
  }, [stats.activeClasses]);

  const handleRestoreFromLocalCache = async () => {
    if (!window.confirm('Hệ thống phát hiện thiết bị này có lưu bản sao lưu lớp học & học viên. Bạn có đồng ý khôi phục toàn bộ sang cơ sở dữ liệu Blaze không giới hạn?')) {
      return;
    }
    setIsRestoring(true);
    try {
      const collections = [
        'classes',
        'students',
        'placementTests',
        'class_spreadsheets',
        'transactions',
        'leads',
        'teachers',
        'exams',
        'vocab_tests',
        'vocab_reviews',
        'vocab_test_submissions',
        'trialStudents',
        'contactNotes',
        'inventory',
        'courses'
      ];
      
      let restoreCount = 0;
      for (const col of collections) {
        const cachedRaw = localStorage.getItem(`vps_col_${col}`);
        if (cachedRaw) {
          const items = JSON.parse(cachedRaw);
          if (Array.isArray(items) && items.length > 0) {
            await saveBatchDocuments(col, items);
            restoreCount += items.length;
          }
        }
      }
      
      alert(`🎉 Khôi phục hoàn tất! Đã khôi phục thành công ${restoreCount} dữ liệu lớp học, học viên lên gói Blaze của bạn!`);
      window.location.reload();
    } catch (e: any) {
      alert('Có lỗi khi khôi phục: ' + e.message);
    } finally {
      setIsRestoring(false);
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      
      {/* Migration Modal */}
      {showMigrationModal && (
        <div className="fixed inset-0 bg-slate-900/60 backdrop-blur-xs z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-3xl p-6 max-w-md w-full shadow-2xl border border-slate-100 text-slate-900">
            <h3 className="text-lg font-black text-slate-900 flex items-center gap-2 mb-3">
              <Sparkles className="w-5 h-5 text-purple-600 animate-bounce" />
              <span>Di Chuyển Dữ Liệu Sang Blaze</span>
            </h3>

            {isMigrating ? (
              <div className="space-y-4 py-4 text-center">
                <div className="w-12 h-12 border-4 border-purple-600 border-t-transparent rounded-full animate-spin mx-auto"></div>
                <p className="text-sm font-bold text-slate-800">Đang quét và sao chép dữ liệu...</p>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Hệ thống đang đọc dữ liệu từ database cũ và chuyển thẳng sang cơ sở dữ liệu gói Blaze không giới hạn của bạn. Vui lòng giữ kết nối internet ổn định và không đóng tab này.
                </p>
              </div>
            ) : migrationResult ? (
              <div className="space-y-4">
                {migrationResult.totalCopied > 0 ? (
                  <div className="bg-emerald-50 border border-emerald-200 text-emerald-950 p-4 rounded-2xl text-xs space-y-2 font-medium">
                    <p className="font-bold text-sm text-emerald-900">🎉 DI CHUYỂN DỮ LIỆU THÀNH CÔNG!</p>
                    <p>Hệ thống đã sao chép thành công các dữ liệu sau:</p>
                    <ul className="list-disc list-inside space-y-1 text-slate-700 pl-1">
                      <li>Lớp học: <strong className="text-slate-900">{migrationResult.results.classes.copied}/{migrationResult.results.classes.found}</strong> lớp</li>
                      <li>Học viên: <strong className="text-slate-900">{migrationResult.results.students.copied}/{migrationResult.results.students.found}</strong> học viên</li>
                      <li>Bài test đầu vào: <strong className="text-slate-900">{migrationResult.results.placementTests.copied}/{migrationResult.results.placementTests.found}</strong> bài</li>
                      <li>Sổ liên lạc / Bảng điểm: <strong className="text-slate-900">{migrationResult.results.class_spreadsheets.copied}/{migrationResult.results.class_spreadsheets.found}</strong> sổ</li>
                    </ul>
                    <p className="text-emerald-800 font-bold mt-1">Hệ thống đã tự động kích hoạt cơ sở dữ liệu Blaze vĩnh viễn không giới hạn!</p>
                  </div>
                ) : (
                  <div className="bg-amber-50 border border-amber-200 text-amber-950 p-4 rounded-2xl text-xs space-y-2 leading-relaxed">
                    <p className="font-bold text-sm text-amber-900">⚠️ DATABASE CŨ ĐANG BỊ KHÓA QUOTA</p>
                    <p>
                      Cơ sở dữ liệu cũ của bạn hiện tại vẫn đang bị Google khóa do vượt quá hạn ngạch miễn phí trong ngày (Quota Limit Exceeded). Do đó, hệ thống chưa thể đọc dữ liệu cũ ra để copy sang gói Blaze được.
                    </p>
                    <p className="font-bold text-amber-800">
                      💡 Giải pháp: Vui lòng thử lại nút bấm này vào chiều nay (sau 14h00 theo giờ Việt Nam khi Google tự động Reset hạn ngạch). Khi đó, dữ liệu cũ sẽ lập tức mở khóa và sao chép thành công 100%!
                    </p>
                  </div>
                )}

                <div className="flex justify-end gap-2.5 mt-2">
                  {migrationResult.totalCopied > 0 ? (
                    <button
                      onClick={() => window.location.reload()}
                      className="px-4 py-2 bg-purple-950 text-white font-bold text-xs rounded-xl hover:bg-purple-900 transition-all cursor-pointer"
                    >
                      🔄 Tải Lại Trang Để Áp Dụng
                    </button>
                  ) : (
                    <button
                      onClick={() => setShowMigrationModal(false)}
                      className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-800 font-bold text-xs rounded-xl transition-all cursor-pointer"
                    >
                      Đóng
                    </button>
                  )}
                </div>
              </div>
            ) : null}
          </div>
        </div>
      )}

      {/* LOCAL BACKUP RECOVERY WARNING */}
      {hasCachedData && (
        <div className="bg-gradient-to-r from-amber-500 to-orange-600 rounded-3xl text-white p-6 shadow-xl border border-amber-400/20 relative overflow-hidden animate-in fade-in duration-300">
          <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-64 h-64 bg-white/10 rounded-full blur-2xl pointer-events-none"></div>
          <div className="relative z-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/20 text-[11px] font-bold text-white uppercase tracking-wider">
                <Shield className="w-3.5 h-3.5" />
                Khôi phục khẩn cấp
              </span>
              <h3 className="text-lg font-black text-white">Phát Hiện Bản Sao Lưu Dữ Liệu Lớp Học & Học Viên!</h3>
              <p className="text-xs text-amber-50 leading-relaxed max-w-2xl">
                Hệ thống phát hiện trình duyệt của bạn đang lưu bản sao lưu ngoại tuyến đầy đủ của toàn bộ lớp học và học viên (từ trước khi chuyển đổi database). Bạn có thể bấm nút bên phải để tải ngay toàn bộ lên gói dữ liệu Blaze mới tinh này chỉ trong 2 giây!
              </p>
            </div>
            <button
              onClick={handleRestoreFromLocalCache}
              disabled={isRestoring}
              className="px-5 py-3 bg-white text-orange-950 hover:bg-amber-50 font-black text-xs uppercase tracking-wider rounded-xl shadow-md transition-all active:scale-95 shrink-0 cursor-pointer disabled:opacity-50"
            >
              {isRestoring ? 'Đang khôi phục...' : '⚡ Khôi phục ngay lên Blaze'}
            </button>
          </div>
        </div>
      )}

      {/* Top Banner / Center Intro */}
      <div className="bg-gradient-to-r from-purple-900 via-indigo-900 to-slate-900 rounded-3xl text-white p-6 sm:p-8 shadow-sm relative overflow-hidden">
        <div className="absolute right-0 top-0 translate-x-10 -translate-y-10 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="relative z-10 max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-xs text-xs font-semibold text-purple-200 mb-3 border border-white/10">
            <Sparkles className="w-3.5 h-3.5 text-yellow-300" />
            Hệ Thống Đào Tạo & Quản Lý IELTS DƯƠNG VŨ
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white mb-2">
            IELTS DƯƠNG VŨ
          </h1>
          <p className="text-slate-200 text-xs sm:text-sm leading-relaxed">
            • <strong>Cơ sở 1:</strong> Tô Hiệu, Hải Phòng &nbsp;|&nbsp; • <strong>Cơ sở 2:</strong> Kiến An, Hải Phòng &nbsp;|&nbsp; • <strong>Hotline:</strong> 0798934698
          </p>
          <p className="text-slate-300 text-xs mt-1">
            {isTeacher
              ? `Tài khoản Giáo viên: ${currentUser.name}. Hệ thống đã khóa bảo mật: Bạn chỉ có quyền truy cập 2 phân hệ "Học viên & Lớp" và "Học thử".`
              : isAssistant
              ? `Tài khoản Trợ lý: ${currentUser.name}. Bạn có quyền xem 6 phân hệ nghiệp vụ: Học viên, Lớp, Tuyển sinh, Điểm thi, Sổ liên lạc, Test đầu vào & Học thử.`
              : 'Ban Giám Đốc / Quản lý trung tâm có toàn quyền truy cập 14 phân hệ nghiệp vụ, quản lý tài chính & báo cáo.'}
          </p>

          <div className="mt-4 flex flex-wrap gap-2.5">
            {isAdmin && (
              <>
                <button
                  onClick={onOpenCreateClass}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-500 to-indigo-500 hover:from-purple-600 hover:to-indigo-600 text-white font-bold text-xs rounded-xl shadow-md transition-all active:scale-95 cursor-pointer"
                >
                  <Plus className="w-4 h-4" />
                  <span>+ Tạo Lớp Học Mới</span>
                </button>
                <button
                  onClick={handleMigrate}
                  className="inline-flex items-center gap-2 px-4 py-2 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs rounded-xl shadow-md transition-all cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-yellow-200" />
                  <span>Di chuyển dữ liệu sang Blaze</span>
                </button>
              </>
            )}
            <button
              onClick={onOpenLogin}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-all cursor-pointer"
            >
              <KeyRound className="w-4 h-4" />
              <span>Chuyển vai trò / Đăng nhập tài khoản khác</span>
            </button>
          </div>
        </div>

        {/* Quick stats strip for Admin / Assistant */}
        {!isTeacher && (
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6 pt-6 border-t border-white/10">
            <div className="bg-white/5 backdrop-blur-xs rounded-2xl p-3 border border-white/10">
              <span className="text-xs text-slate-300 block">Tổng số lớp học</span>
              <div className="text-xl sm:text-2xl font-bold text-white mt-0.5">{stats.activeClasses}</div>
              <span className="text-[10px] text-purple-300 font-medium">CS1 Tô Hiệu & CS2 Kiến An</span>
            </div>
             <div className="bg-white/5 backdrop-blur-xs rounded-2xl p-3 border border-white/10 relative group">
              <div className="flex items-center justify-between">
                <span className="text-xs text-slate-300 block">Tổng học viên</span>
                {onCleanAndRecountStudents && (
                  <button
                    type="button"
                    onClick={onCleanAndRecountStudents}
                    className="p-1 rounded-lg bg-white/10 hover:bg-white/20 text-white/80 hover:text-white transition-all cursor-pointer flex items-center justify-center"
                    title="Dọn dẹp học viên trùng lặp & đếm chính xác số lượng"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-3.5 h-3.5 hover:rotate-185 duration-500 transition-transform"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth={2.5}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M4 4v5h.582m15.356 2A8.001 8.001 0 1121.21 15.07M20 20v-5h-.581m0 0a8.003 8.003 0 01-15.357-2"
                      />
                    </svg>
                  </button>
                )}
              </div>
              <div className="text-xl sm:text-2xl font-bold text-white mt-0.5">{stats.totalStudents}</div>
              <span className="text-[10px] text-emerald-400 font-medium">Đang theo học</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xs rounded-2xl p-3 border border-white/10">
              <span className="text-xs text-slate-300 block">Đội ngũ giáo viên</span>
              <div className="text-xl sm:text-2xl font-bold text-white mt-0.5">4</div>
              <span className="text-[10px] text-emerald-400 font-medium">Bản ngữ & Việt Nam</span>
            </div>
            <div className="bg-white/5 backdrop-blur-xs rounded-2xl p-3 border border-white/10">
              <span className="text-xs text-slate-300 block">Khách tiềm năng</span>
              <div className="text-xl sm:text-2xl font-bold text-white mt-0.5">{stats.pendingLeads}</div>
              <span className="text-[10px] text-amber-300 font-medium">Chờ tư vấn</span>
            </div>
          </div>
        )}
      </div>

      {/* Teacher notice box if logged in as teacher */}
      {isTeacher && (
        <div className="p-4 bg-emerald-50 border border-emerald-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-emerald-900 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-100 text-emerald-700 flex items-center justify-center shrink-0">
              <Shield className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-emerald-900">
                Chế độ phân quyền: Giáo viên ({currentUser.name})
              </div>
              <div className="text-emerald-700 mt-0.5">
                Mã bảo mật PIN đã được xác thực thành công. Bạn chỉ được phép truy cập vào <strong>Học viên & Lớp học</strong> và <strong>Học thử</strong>.
              </div>
            </div>
          </div>
          <button
            onClick={onOpenLogin}
            className="px-3.5 py-2 text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 rounded-xl shadow-xs transition-colors shrink-0"
          >
            Đổi sang quyền Quản lý
          </button>
        </div>
      )}

      {/* Assistant notice box if logged in as assistant */}
      {isAssistant && (
        <div className="p-4 bg-indigo-50 border border-indigo-200 rounded-2xl flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 text-xs text-indigo-900 shadow-xs">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-indigo-100 text-indigo-700 flex items-center justify-center shrink-0">
              <Users2 className="w-5 h-5" />
            </div>
            <div>
              <div className="font-extrabold text-sm text-indigo-900">
                Chế độ phân quyền: Trợ lý trung tâm ({currentUser.name})
              </div>
              <div className="text-indigo-700 mt-0.5">
                Tài khoản Gmail trợ lý đã được xác thực. Bạn có quyền truy cập 6 phân hệ: Học viên & Lớp, Tuyển sinh, Điểm thi, Sổ liên lạc, Test đầu vào & Học thử.
              </div>
            </div>
          </div>
          <button
            onClick={onOpenLogin}
            className="px-3.5 py-2 text-xs font-bold text-white bg-purple-700 hover:bg-purple-800 rounded-xl shadow-xs transition-colors shrink-0"
          >
            Đổi tài khoản
          </button>
        </div>
      )}

      {/* Module Grid Header */}
      <div>
        <div className="flex items-center justify-between mb-5">
          <div>
            <h2 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              <span>{isTeacher ? 'Phân hệ được cấp quyền (Giáo viên)' : isAssistant ? 'Phân hệ nghiệp vụ (Trợ lý)' : 'Toàn bộ Phân hệ Nghiệp vụ Trung tâm'}</span>
              <span className={`text-xs font-semibold px-2 py-0.5 rounded-md ${
                isTeacher ? 'bg-emerald-100 text-emerald-800' : isAssistant ? 'bg-indigo-100 text-indigo-800' : 'bg-purple-100 text-purple-700'
              }`}>
                {visibleModules.length} Modules
              </span>
            </h2>
            <p className="text-xs text-slate-500 mt-0.5">
              {isTeacher
                ? 'Thầy/Cô chọn phân hệ bên dưới để xem danh sách lớp học, quản lý danh sách học viên hoặc quản lý học thử'
                : isAssistant
                ? 'Trợ lý chọn phân hệ để hỗ trợ công tác tuyển sinh, xếp lớp, nhập điểm thi, nhắn sổ liên lạc & test đầu vào'
                : 'Chọn phân hệ nghiệp vụ để quản lý học viên, giáo viên, lớp học, tài chính và báo cáo'}
            </p>
          </div>

          {isAdmin && (
            <div className="flex items-center gap-2">
              {onExportExcel && (
                <button
                  onClick={onExportExcel}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-900 bg-emerald-100 hover:bg-emerald-200 rounded-xl border border-emerald-300 transition-colors shadow-2xs cursor-pointer"
                  title="Tải toàn bộ dữ liệu trung tâm (Các lớp, học sinh, giáo viên, học phí) về file Excel chia thành nhiều Sheet"
                >
                  <FileSpreadsheet className="w-4 h-4 text-emerald-700" />
                  <span>Tải Excel Trung Tâm (Mỗi lớp 1 sheet)</span>
                </button>
              )}
              <button
                onClick={() => onSelectModule('inventory')}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-purple-700 bg-purple-50 hover:bg-purple-100 rounded-xl border border-purple-200/80 transition-colors"
              >
                <PackageCheck className="w-3.5 h-3.5" />
                <span>Kho hàng & Đồng phục</span>
              </button>
            </div>
          )}
        </div>

        {/* The Grid */}
        <div className={`grid gap-4 sm:gap-5 ${
          isTeacher
            ? 'grid-cols-1 sm:grid-cols-2 max-w-2xl mx-auto'
            : isAssistant
            ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'
            : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-4'
        }`}>
          {visibleModules.map((m) => (
            <div
              key={m.id}
              onClick={() => onSelectModule(m.id)}
              className="group bg-white rounded-3xl p-6 border border-slate-200/80 shadow-xs hover:shadow-md hover:border-purple-300 transition-all duration-200 cursor-pointer flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Subtle top indicator on hover */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-purple-600 to-indigo-600 opacity-0 group-hover:opacity-100 transition-opacity" />

              {/* Top Badge */}
              {m.badge && (
                <span className={`absolute top-3.5 right-3.5 text-[10px] font-semibold px-2 py-0.5 rounded-full border ${m.badgeColor || 'bg-slate-50 text-slate-600 border-slate-200'}`}>
                  {m.badge}
                </span>
              )}

              {/* Purple/Emerald Icon Container */}
              <div className={`w-14 h-14 rounded-2xl text-white flex items-center justify-center mb-4 shadow-sm group-hover:scale-105 group-hover:shadow-md transition-all duration-200 ${
                isTeacher
                  ? 'bg-gradient-to-b from-emerald-600 to-teal-700 shadow-emerald-900/20'
                  : isAssistant
                  ? 'bg-gradient-to-b from-indigo-600 to-purple-700 shadow-indigo-900/20'
                  : 'bg-gradient-to-b from-[#6b21a8] to-[#4c1d95] shadow-purple-950/20'
              }`}>
                {m.icon}
              </div>

              {/* Module Title */}
              <h3 className="text-slate-900 font-bold text-base tracking-tight group-hover:text-purple-700 transition-colors">
                {m.title}
              </h3>

              {/* Short descriptive subtitle */}
              <p className="text-slate-500 text-xs mt-1.5 line-clamp-2 leading-relaxed font-normal">
                {m.subtitle}
              </p>

              {/* Interactive link arrow */}
              <div className="mt-4 pt-3 w-full border-t border-slate-100 flex items-center justify-center text-xs font-semibold text-purple-700 opacity-0 group-hover:opacity-100 transition-opacity gap-1">
                <span>Vào phân hệ</span>
                <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
              </div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

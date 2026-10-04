/**
 * ===============================================================================
 * SCRIPT TỰ ĐỘNG XUẤT DỮ LIỆU CỐT LÕI IELTS DƯƠNG VŨ RA EXCEL & LƯU GOOGLE DRIVE
 * ===============================================================================
 * 
 * Chức năng:
 * 1. Trích xuất toàn bộ dữ liệu từ database VPS (`./server-storage/`):
 *    - Danh sách học viên & thông tin nhập học, công nợ
 *    - Tài chính: Toàn bộ lịch sử giao dịch thu chi học phí
 *    - Quản lý học tập: Lớp học, sĩ số thực tế, số buổi học
 *    - Bảng điểm: Điểm số các buổi học & bài thi của học viên
 *    - Nhân sự & Lương: Dữ liệu ca dạy và bảng tính lương giáo viên
 * 2. Xuất thành file Excel (.xlsx) với 5 sheet được định dạng chuyên nghiệp
 * 3. Tự động tải file lên Google Drive theo thư mục cấu hình
 * 4. Tương thích chạy thủ công hoặc tự động qua Cron Job hàng ngày (00:00)
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import * as XLSX from 'xlsx';

// Định danh thư mục
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const storageDir = path.join(rootDir, 'server-storage');
const backupOutputDir = path.join(rootDir, 'backups');

// Đảm bảo thư mục lưu file cục bộ tồn tại
if (!fs.existsSync(backupOutputDir)) {
  fs.mkdirSync(backupOutputDir, { recursive: true });
}

/**
 * Đọc file JSON từ database VPS an toàn
 */
function readCollection(colName) {
  const filePath = path.join(storageDir, `${colName}.json`);
  if (!fs.existsSync(filePath)) {
    return [];
  }
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed : [];
  } catch (err) {
    console.error(`[Lỗi] Không thể đọc bảng ${colName}:`, err.message);
    return [];
  }
}

/**
 * Định dạng tiền tệ VNĐ
 */
function formatCurrency(val) {
  const num = Number(val) || 0;
  return num.toLocaleString('vi-VN') + ' đ';
}

/**
 * 1. Sheet: DANH SÁCH HỌC VIÊN
 */
function generateStudentsSheet(students, classes) {
  const classMap = new Map(classes.map((c) => [c.id, c.name]));

  const rows = students.map((s, idx) => {
    const className = s.className || classMap.get(s.classId) || 'Chưa xếp lớp';
    return {
      'STT': idx + 1,
      'Mã Học Viên': s.code || s.id || '',
      'Họ và Tên': s.name || '',
      'Ngày Sinh': s.dob || '',
      'Giới Tính': s.gender === 'female' ? 'Nữ' : s.gender === 'male' ? 'Nam' : 'Khác',
      'Số Điện Thoại': s.phone || '',
      'Email': s.email || '',
      'Lớp Học': className,
      'Khóa Học': s.courseName || '',
      'Ngày Nhập Học': s.joinDate || s.startDate || '',
      'Học Phí Gốc (VNĐ)': Number(s.customTuitionFee || s.tuitionFee || 0),
      'Đã Đóng (VNĐ)': Number(s.tuitionPaid || (s.balanceOwed === 0 ? s.customTuitionFee || s.tuitionFee || 0 : 0)),
      'Còn Nợ (VNĐ)': Number(s.balanceOwed || 0),
      'Trạng Thái Học Phí': s.tuitionStatus || (s.balanceOwed > 0 ? 'Còn nợ' : 'Đã đóng đủ'),
      'Hạn Đóng / Hẹn Nộp': s.tuitionPromiseDate || '',
      'Trạng Thái Học': s.status || 'Đang học',
      'Họ Tên Phụ Huynh': s.parentName || '',
      'SĐT Phụ Huynh': s.parentPhone || '',
      'Địa Chỉ': s.address || '',
      'Ghi Chú': s.notes || '',
    };
  });

  const ws = XLSX.utils.json_to_sheet(rows);
  ws['!cols'] = [
    { wch: 6 },  // STT
    { wch: 16 }, // Mã HV
    { wch: 24 }, // Họ tên
    { wch: 14 }, // Ngày sinh
    { wch: 10 }, // Giới tính
    { wch: 14 }, // SĐT
    { wch: 28 }, // Email
    { wch: 16 }, // Lớp học
    { wch: 20 }, // Khóa học
    { wch: 14 }, // Ngày nhập học
    { wch: 18 }, // Học phí gốc
    { wch: 16 }, // Đã đóng
    { wch: 16 }, // Còn nợ
    { wch: 18 }, // Trạng thái HP
    { wch: 14 }, // Hạn nộp
    { wch: 14 }, // Trạng thái học
    { wch: 22 }, // Tên PH
    { wch: 14 }, // SĐT PH
    { wch: 20 }, // Địa chỉ
    { wch: 30 }, // Ghi chú
  ];
  return ws;
}

/**
 * 2. Sheet: TÀI CHÍNH & LỊCH SỬ THU CHI
 */
function generateFinanceSheet(transactions, students, classes) {
  const studentMap = new Map(students.map((s) => [s.id, s.name]));
  const classMap = new Map(classes.map((c) => [c.id, c.name]));

  const rows = transactions.map((tx, idx) => {
    const studentName = tx.studentName || studentMap.get(tx.studentId) || '';
    const className = tx.className || classMap.get(tx.classId) || '';
    return {
      'STT': idx + 1,
      'Mã Giao Dịch': tx.receiptNumber || tx.code || tx.id || '',
      'Ngày Giao Dịch': tx.date || tx.createdAt || '',
      'Họ Tên Học Viên': studentName,
      'Mã Học Viên': tx.studentCode || '',
      'Lớp Học': className,
      'Khoản Thu / Chi': tx.title || tx.type || 'Học phí IELTS',
      'Loại': tx.category === 'expense' ? 'CHI' : 'THU',
      'Số Tiền (VNĐ)': Number(tx.amount || 0),
      'Hình Thức Thanh Toán': tx.paymentMethod || 'Chuyển khoản QR',
      'Trạng Thái': tx.status === 'completed' ? 'Thành công' : 'Đang xử lý',
      'Người Lập Phiếu': tx.createdByName || tx.cashier || 'Admin / Kế toán IDV',
      'Ghi Chú': tx.note || tx.description || '',
    };
  });

  const ws = XLSX.utils.json_to_sheet(rows);
  ws['!cols'] = [
    { wch: 6 },  // STT
    { wch: 20 }, // Mã GD
    { wch: 16 }, // Ngày GD
    { wch: 24 }, // Tên HV
    { wch: 16 }, // Mã HV
    { wch: 16 }, // Lớp học
    { wch: 26 }, // Khoản thu
    { wch: 10 }, // Loại
    { wch: 18 }, // Số tiền
    { wch: 20 }, // Hình thức TT
    { wch: 14 }, // Trạng thái
    { wch: 22 }, // Người lập
    { wch: 30 }, // Ghi chú
  ];
  return ws;
}

/**
 * 3. Sheet: QUẢN LÝ LỚP HỌC
 */
function generateClassesSheet(classes, students) {
  const rows = classes.map((c, idx) => {
    // Sĩ số học viên thực tế
    const activeStudents = students.filter((s) => {
      if (!s) return false;
      if (s.status === 'Đã nghỉ học' || s.status === 'Đã thôi học') return false;
      return (
        s.classId === c.id ||
        s.classId === c.name ||
        s.classId === c.code ||
        (s.className && s.className.trim().toLowerCase() === c.name.trim().toLowerCase())
      );
    });
    const currentCount = activeStudents.length > 0 ? activeStudents.length : (c.currentStudents || 0);
    const teachers = Array.isArray(c.teacherNames) ? c.teacherNames.join(', ') : (c.teacherName || '');

    return {
      'STT': idx + 1,
      'Mã Lớp': c.code || '',
      'Tên Lớp': c.name || '',
      'Khóa Học': c.courseName || '',
      'Cấp Độ / Khóa': c.courseLevel || c.currentTermName || '',
      'Cơ Sở': c.branch || '',
      'Giáo Viên Phụ Trách': teachers,
      'Phòng Học': c.room || '',
      'Lịch Học': c.schedule || '',
      'Ngày Khai Giảng': c.startDate || '',
      'Ngày Dự Kiến Bế Giảng': c.endDate || '',
      'Sĩ Số Hiện Tại': currentCount,
      'Sĩ Số Tối Đa': c.maxStudents || 20,
      'Số Buổi Đã Học': c.completedSessions || 0,
      'Tổng Số Buổi': c.totalSessions || 32,
      'Tiến Độ (%)': Math.round(((c.completedSessions || 0) / (c.totalSessions || 32)) * 100) + '%',
      'Học Phí Chuẩn (VNĐ)': Number(c.tuitionFee || 0),
      'Trạng Thái': c.status || 'Đang diễn ra',
    };
  });

  const ws = XLSX.utils.json_to_sheet(rows);
  ws['!cols'] = [
    { wch: 6 },  // STT
    { wch: 14 }, // Mã lớp
    { wch: 18 }, // Tên lớp
    { wch: 22 }, // Khóa học
    { wch: 16 }, // Cấp độ
    { wch: 32 }, // Cơ sở
    { wch: 28 }, // Giáo viên
    { wch: 16 }, // Phòng
    { wch: 36 }, // Lịch học
    { wch: 16 }, // Khai giảng
    { wch: 16 }, // Bế giảng
    { wch: 16 }, // Sĩ số HT
    { wch: 14 }, // Sĩ số max
    { wch: 16 }, // Buổi đã học
    { wch: 14 }, // Tổng buổi
    { wch: 14 }, // Tiến độ
    { wch: 18 }, // Học phí
    { wch: 16 }, // Trạng thái
  ];
  return ws;
}

/**
 * 4. Sheet: BẢNG ĐIỂM & ĐÁNH GIÁ HỌC TẬP
 */
function generateGradesSheet(classSpreadsheets, students, classes) {
  const rows = [];
  let stt = 1;

  for (const sheet of classSpreadsheets) {
    const className = sheet.className || sheet.classBanner || `Lớp ${sheet.classId}`;
    const studentGrades = sheet.students || sheet.scores || [];

    if (Array.isArray(studentGrades) && studentGrades.length > 0) {
      for (const st of studentGrades) {
        rows.push({
          'STT': stt++,
          'Lớp Học': className,
          'Mã Học Viên': st.studentCode || st.code || st.id || '',
          'Họ và Tên': st.studentName || st.name || '',
          'Buổi / Bài Thi': st.sessionTitle || st.examName || 'Kiểm tra định kỳ',
          'Điểm Listening': st.listening ?? st.scoreL ?? '',
          'Điểm Reading': st.reading ?? st.scoreR ?? '',
          'Điểm Writing': st.writing ?? st.scoreW ?? '',
          'Điểm Speaking': st.speaking ?? st.scoreS ?? '',
          'Điểm Tổng / Overall': st.overallScore ?? st.totalScore ?? st.score ?? '',
          'Chuyên Cần': st.attendanceStatus || (st.isPresent ? 'Có mặt' : 'Đầy đủ'),
          'Bài Tập Về Nhà': st.homeworkStatus || (st.doneHomework ? 'Hoàn thành' : 'Đủ'),
          'Nhận Xét / Đánh Giá': st.comment || st.teacherNote || '',
          'Ngày Cập Nhật': st.date || sheet.lastUpdated || '',
        });
      }
    }
  }

  // Nếu bảng điểm trống, tạo dòng mẫu cấu trúc
  if (rows.length === 0) {
    rows.push({
      'STT': 1,
      'Lớp Học': 'IDV-L68',
      'Mã Học Viên': 'IDV-HV001',
      'Họ và Tên': 'Mẫu Học Viên',
      'Buổi / Bài Thi': 'Midterm Exam',
      'Điểm Listening': 7.5,
      'Điểm Reading': 7.0,
      'Điểm Writing': 6.5,
      'Điểm Speaking': 7.0,
      'Điểm Tổng / Overall': 7.0,
      'Chuyên Cần': 'Có mặt',
      'Bài Tập Về Nhà': 'Hoàn thành',
      'Nhận Xét / Đánh Giá': 'Nắm chắc từ vựng, phản xạ tốt',
      'Ngày Cập Nhật': new Date().toISOString().split('T')[0],
    });
  }

  const ws = XLSX.utils.json_to_sheet(rows);
  ws['!cols'] = [
    { wch: 6 },  // STT
    { wch: 20 }, // Lớp
    { wch: 16 }, // Mã HV
    { wch: 24 }, // Họ tên
    { wch: 22 }, // Buổi/Bài thi
    { wch: 14 }, // L
    { wch: 14 }, // R
    { wch: 14 }, // W
    { wch: 14 }, // S
    { wch: 18 }, // Overall
    { wch: 14 }, // Chuyên cần
    { wch: 16 }, // BTVN
    { wch: 34 }, // Nhận xét
    { wch: 16 }, // Ngày
  ];
  return ws;
}

/**
 * 5. Sheet: BẢNG LƯƠNG & CA DẠY GIÁO VIÊN
 */
function generateTeacherPayrollSheet(teachers, classes, classSpreadsheets) {
  const rows = [];
  let stt = 1;

  for (const t of teachers) {
    // Tìm các lớp giáo viên phụ trách
    const tName = (t.name || '').toLowerCase();
    const assignedClasses = classes.filter((c) => {
      const raw = (c.teacherName || '') + ' ' + (Array.isArray(c.teacherNames) ? c.teacherNames.join(' ') : '');
      return raw.toLowerCase().includes(tName) || (c.teacherId && c.teacherId === t.id);
    });

    // Tổng số ca/buổi đã dạy từ các lớp
    let totalCompletedSessions = 0;
    let estimatedTotalSalary = 0;
    const classNamesList = [];

    for (const c of assignedClasses) {
      classNamesList.push(c.name);
      const sessions = Number(c.completedSessions || 0);
      totalCompletedSessions += sessions;

      // Đơn giá tính theo cấp độ khóa học
      let sessionRate = 350000;
      const level = (c.courseLevel || c.courseName || '').toLowerCase();
      if (level.includes('khóa 4') || level.includes('drill') || level.includes('intensive')) {
        sessionRate = 450000;
      } else if (level.includes('khóa 3')) {
        sessionRate = 400000;
      } else if (level.includes('khóa 2')) {
        sessionRate = 380000;
      }

      // Thưởng sĩ số đông (> 18 HV: +50k/buổi)
      if ((c.currentStudents || 0) >= 18) {
        sessionRate += 50000;
      }

      estimatedTotalSalary += sessions * sessionRate;
    }

    rows.push({
      'STT': stt++,
      'Mã Giáo Viên': t.code || t.id || '',
      'Họ và Tên': t.name || '',
      'Email': t.email || '',
      'Số Điện Thoại': t.phone || '',
      'Cơ Sở': t.branch || 'Tô Hiệu & Kiến An',
      'Chuyên Môn': t.specialty || 'IELTS 8.0+',
      'Số Lớp Phụ Trách': assignedClasses.length,
      'Danh Sách Lớp': classNamesList.join(', '),
      'Tổng Số Ca Đã Dạy': totalCompletedSessions,
      'Tổng Lương Tạm Tính (VNĐ)': estimatedTotalSalary,
      'Ghi Chú': `Tự động tổng hợp đến ${new Date().toLocaleDateString('vi-VN')}`,
    });
  }

  const ws = XLSX.utils.json_to_sheet(rows);
  ws['!cols'] = [
    { wch: 6 },  // STT
    { wch: 16 }, // Mã GV
    { wch: 24 }, // Họ tên
    { wch: 30 }, // Email
    { wch: 14 }, // SĐT
    { wch: 30 }, // Cơ sở
    { wch: 24 }, // Chuyên môn
    { wch: 18 }, // Số lớp
    { wch: 30 }, // DS Lớp
    { wch: 18 }, // Số ca dạy
    { wch: 24 }, // Tổng lương
    { wch: 32 }, // Ghi chú
  ];
  return ws;
}

/**
 * Tải file lên Google Drive qua Google Drive API (Service Account)
 */
async function uploadToGoogleDrive(filePath, fileName) {
  // Kiểm tra file cấu hình credentials của Google Service Account
  const keyPath = process.env.GOOGLE_APPLICATION_CREDENTIALS || path.join(rootDir, 'google-service-account.json');
  const folderId = process.env.GOOGLE_DRIVE_FOLDER_ID || '';

  if (!fs.existsSync(keyPath)) {
    console.log('\n[Thông Báo Google Drive]');
    console.log('Chưa tìm thấy file xác thực "google-service-account.json".');
    console.log(`File Excel đã được lưu an toàn tại máy chủ: ${filePath}`);
    console.log('-> Xem hướng dẫn trong file README để kích hoạt tự động đẩy lên Google Drive.\n');
    return false;
  }

  try {
    // Import googleapis động
    const { google } = await import('googleapis');

    const auth = new google.auth.GoogleAuth({
      keyFile: keyPath,
      scopes: ['https://www.googleapis.com/auth/drive.file', 'https://www.googleapis.com/auth/drive'],
    });

    const drive = google.drive({ version: 'v3', auth });

    const fileMetadata = {
      name: fileName,
      parents: folderId ? [folderId] : [],
    };

    const media = {
      mimeType: 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      body: fs.createReadStream(filePath),
    };

    console.log(`[Google Drive] Đang tải lên file "${fileName}"...`);
    const response = await drive.files.create({
      requestBody: fileMetadata,
      media: media,
      fields: 'id, name, webViewLink',
    });

    console.log(`[Google Drive Thành Công] Đã tải lên file: ${response.data.name}`);
    console.log(`[Google Drive Link]: ${response.data.webViewLink || response.data.id}`);
    return true;
  } catch (err) {
    console.error('[Google Drive Lỗi]:', err.message);
    return false;
  }
}

/**
 * CHƯƠNG TRÌNH CHÍNH (MAIN EXECUTION)
 */
async function main() {
  console.log('=====================================================');
  console.log('  BẮT ĐẦU XUẤT DỮ LIỆU CỐT LÕI IELTS DƯƠNG VŨ');
  console.log('  Thời gian:', new Date().toLocaleString('vi-VN'));
  console.log('=====================================================\n');

  // 1. Nạp dữ liệu từ VPS
  const students = readCollection('students');
  const classes = readCollection('classes');
  const transactions = readCollection('transactions');
  const teachers = readCollection('teachers');
  const classSpreadsheets = readCollection('class_spreadsheets');

  console.log(`-> Đã nạp: ${students.length} học viên, ${classes.length} lớp học, ${transactions.length} giao dịch, ${teachers.length} giáo viên.`);

  // 2. Khởi tạo Workbook Excel đa tab
  const wb = XLSX.utils.book_new();

  // Tab 1: Danh sách học viên
  const wsStudents = generateStudentsSheet(students, classes);
  XLSX.utils.book_append_sheet(wb, wsStudents, 'Học Viên');

  // Tab 2: Quản lý lớp học
  const wsClasses = generateClassesSheet(classes, students);
  XLSX.utils.book_append_sheet(wb, wsClasses, 'Lớp Học');

  // Tab 3: Tài chính & Học phí
  const wsFinance = generateFinanceSheet(transactions, students, classes);
  XLSX.utils.book_append_sheet(wb, wsFinance, 'Học Phí & Thu Chi');

  // Tab 4: Bảng điểm & Học tập
  const wsGrades = generateGradesSheet(classSpreadsheets, students, classes);
  XLSX.utils.book_append_sheet(wb, wsGrades, 'Bảng Điểm');

  // Tab 5: Lương & Ca dạy giáo viên
  const wsPayroll = generateTeacherPayrollSheet(teachers, classes, classSpreadsheets);
  XLSX.utils.book_append_sheet(wb, wsPayroll, 'Lương Giáo Viên');

  // 3. Đặt tên file theo ngày giờ chuẩn ISO
  const dateStr = new Date().toISOString().split('T')[0];
  const timeStr = new Date().toTimeString().split(' ')[0].replace(/:/g, '-');
  const fileName = `IELTS_DUONGVU_BACKUP_${dateStr}_${timeStr}.xlsx`;
  const latestFileName = `IELTS_DUONGVU_LATEST_BACKUP.xlsx`;

  const outputFilePath = path.join(backupOutputDir, fileName);
  const latestFilePath = path.join(backupOutputDir, latestFileName);

  // Ghi file Excel ra đĩa VPS
  XLSX.writeFile(wb, outputFilePath);
  XLSX.writeFile(wb, latestFilePath);

  console.log(`\n[Excel Thành Công] Đã tạo file Excel tổng hợp tại:`);
  console.log(`-> ${outputFilePath}`);

  // 4. Tải lên Google Drive
  await uploadToGoogleDrive(outputFilePath, fileName);

  console.log('\n=====================================================');
  console.log('  HOÀN TẤT QUÁ TRÌNH SAO LƯU & XUẤT BẢNG TÍNH');
  console.log('=====================================================\n');
}

// Chạy script
main().catch((err) => {
  console.error('[Lỗi nghiêm trọng]:', err);
  process.exit(1);
});

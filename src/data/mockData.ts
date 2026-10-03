import {
  Student,
  ClassGroup,
  Teacher,
  LeadAdmission,
  PlacementTest,
  TrialStudent,
  AttendanceRecord,
  TuitionTransaction,
  ContactBookNote,
  MilestoneEvaluationReport,
  ExamScore,
  CurriculumCourse,
  KPITarget,
  InventoryItem,
} from '../types';

// =========================================================================
// DANH SÁCH LỚP HỌC IDV (100% CÁC LỚP ĐỀU LÀ CHƯƠNG TRÌNH IELTS CHUYÊN SÂU)
// =========================================================================
export const INITIAL_CLASSES: ClassGroup[] = [
  {
    "id": "cls-1791016557730",
    "code": "IDV-L68",
    "name": "Lớp 68",
    "courseId": "crs-pre",
    "courseName": "LUYỆN ĐỀ DRILL",
    "courseLevel": "Khóa 4",
    "currentTermName": "Khóa 4",
    "branch": "Cơ sở 2 - Kiến An (Hải Phòng)",
    "teacherId": "tch-vuthuy",
    "teacherName": "Cô Vũ Thùy, Đàm Trung Hiếu",
    "teacherNames": [
      "Cô Vũ Thùy",
      "Đàm Trung Hiếu"
    ],
    "room": "Phòng 3 - Tầng 3",
    "schedule": "Thứ 2 + Thứ 5 (Ca 1: 18:00 - 19:45)",
    "startDate": "2026-09-17",
    "endDate": "2027-01-07",
    "totalSessions": 32,
    "completedSessions": 3,
    "maxStudents": 16,
    "currentStudents": 16,
    "tuitionFee": 1600000,
    "status": "Đang diễn ra",
    "offDates": [
      "2026-09-24",
      "2026-09-17"
    ]
  },
  {
    "id": "cls-1789995110040",
    "totalSessions": 32,
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "startDate": "2026-09-23",
    "teacherNames": [
      "Vũ Ngọc"
    ],
    "courseId": "crs-pre",
    "room": "3",
    "currentTermName": "Khóa 4",
    "teacherName": "Vũ Ngọc",
    "status": "Đang diễn ra",
    "tuitionFee": 3200000,
    "code": "DRILL47S2",
    "teacherId": "tch-vungoc",
    "schedule": "Thứ 4 + Thứ 7 (Ca 2: 19:45 - 21:30)",
    "endDate": "2027-01-09",
    "offDates": [],
    "maxStudents": 30,
    "completedSessions": 0,
    "name": "DRILL 47 S2",
    "courseName": "LUYỆN ĐỀ DRILL",
    "courseLevel": "Khóa 4",
    "currentStudents": 16
  },
  {
    "id": "cls-1789996334766",
    "room": "Phòng 201 - Tầng 2",
    "teacherName": "Vũ Ngọc",
    "offDates": [],
    "teacherNames": [
      "Vũ Ngọc"
    ],
    "courseName": "LUYỆN ĐỀ DRILL",
    "totalSessions": 32,
    "teacherId": "tch-vungoc",
    "maxStudents": 28,
    "completedSessions": 1,
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "tuitionFee": 3200000,
    "schedule": "Thứ 4 + Thứ 7 (Ca 1: 18:00 - 19:45)",
    "courseLevel": "Khóa 4",
    "currentStudents": 26,
    "endDate": "2027-01-09",
    "name": "DRILL T4 T7 S1",
    "courseId": "crs-pre",
    "currentTermName": "Khóa 4",
    "status": "Đang diễn ra",
    "startDate": "2026-09-21",
    "code": "DRILL47S1"
  },
  {
    "id": "cls-1789998154836",
    "teacherName": "Vũ Ngọc",
    "room": "3",
    "startDate": "2026-09-21",
    "courseId": "crs-pre",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "maxStudents": 28,
    "currentTermName": "Khóa 4",
    "completedSessions": 1,
    "courseLevel": "Khóa 4",
    "teacherId": "tch-vungoc",
    "totalSessions": 32,
    "tuitionFee": 3200000,
    "offDates": [],
    "name": "DRILL T2 T5 S1",
    "currentStudents": 23,
    "status": "Đang diễn ra",
    "teacherNames": [
      "Vũ Ngọc"
    ],
    "schedule": "Thứ 2 + Thứ 5 (Ca 1: 18:00 - 19:45)",
    "endDate": "2027-01-07",
    "courseName": "LUYỆN ĐỀ DRILL",
    "code": "DRILL25S1"
  },
  {
    "id": "cls-1789998217889",
    "room": "3",
    "startDate": "2026-09-21",
    "status": "Đang diễn ra",
    "courseId": "crs-pre",
    "totalSessions": 32,
    "teacherNames": [
      "Vũ Ngọc"
    ],
    "endDate": "2027-01-07",
    "currentStudents": 18,
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "courseName": "LUYỆN ĐỀ DRILL",
    "name": "DRILL T2 T5 S2",
    "schedule": "Thứ 2 + Thứ 5 (Ca 2: 19:45 - 21:30)",
    "teacherId": "tch-vungoc",
    "teacherName": "Vũ Ngọc",
    "tuitionFee": 3200000,
    "completedSessions": 2,
    "courseLevel": "Khóa 4",
    "offDates": [],
    "currentTermName": "Khóa 4",
    "code": "DRILL25S2",
    "maxStudents": 28
  },
  {
    "id": "cls-1789998273315",
    "totalSessions": 32,
    "teacherNames": [
      "Vũ Ngọc"
    ],
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "schedule": "Thứ 3 + Thứ 6 (Ca 1: 18:00 - 19:45)",
    "courseName": "LUYỆN ĐỀ DRILL",
    "startDate": "2026-09-21",
    "offDates": [],
    "room": "3",
    "currentTermName": "Khóa 4",
    "tuitionFee": 3200000,
    "teacherName": "Vũ Ngọc",
    "endDate": "2027-01-08",
    "code": "DRILL36S1",
    "completedSessions": 0,
    "status": "Đang diễn ra",
    "courseId": "crs-pre",
    "currentStudents": 26,
    "maxStudents": 28,
    "name": "DRILL T3 T6 S1",
    "teacherId": "tch-vungoc",
    "courseLevel": "Khóa 4"
  },
  {
    "id": "cls-1789998325390",
    "teacherName": "Vũ Ngọc",
    "code": "DRILL36S2",
    "currentStudents": 23,
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "offDates": [],
    "maxStudents": 28,
    "schedule": "Thứ 3 + Thứ 6 (Ca 2: 19:45 - 21:30)",
    "courseLevel": "Khóa 4",
    "teacherId": "tch-vungoc",
    "name": "DRILL T3 T6 S2",
    "endDate": "2027-01-08",
    "currentTermName": "Khóa 4",
    "completedSessions": 0,
    "status": "Đang diễn ra",
    "totalSessions": 32,
    "courseName": "LUYỆN ĐỀ DRILL",
    "startDate": "2026-09-21",
    "courseId": "crs-pre",
    "teacherNames": [
      "Vũ Ngọc"
    ],
    "tuitionFee": 3200000,
    "room": "3"
  },
  {
    "id": "cls-1790001829880",
    "endDate": "2026-11-20",
    "courseName": "DESIRE",
    "completedSessions": 15,
    "currentTermName": "Khóa 3",
    "teacherNames": [
      "Dương Vũ"
    ],
    "totalSessions": 33,
    "courseId": "crs-pre",
    "room": "5",
    "tuitionFee": 5600000,
    "startDate": "2026-07-28",
    "status": "Đang diễn ra",
    "code": "IDV-L74",
    "offDates": [
      "2026-07-28"
    ],
    "teacherName": "Dương Vũ",
    "courseLevel": "Khóa 3",
    "currentStudents": 19,
    "teacherId": "tch-duongvu",
    "schedule": "Thứ 3 + Thứ 6 (Ca 2: 19:45 - 21:30)",
    "maxStudents": 22,
    "name": "Lớp 74",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)"
  },
  {
    "id": "cls-1790001890225",
    "startDate": "2026-07-28",
    "schedule": "Thứ 2 + Thứ 5 (Ca 1: 18:00 - 19:45)",
    "teacherName": "Diệp Đặng, Dương Vũ",
    "code": "IDV-L73",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "currentStudents": 22,
    "teacherNames": [
      "Diệp Đặng",
      "Dương Vũ"
    ],
    "maxStudents": 22,
    "offDates": [],
    "courseLevel": "Khóa 3",
    "name": "Lớp 73",
    "tuitionFee": 5600000,
    "courseId": "crs-pre",
    "totalSessions": 33,
    "teacherId": "tch-diepdang",
    "status": "Đang diễn ra",
    "courseName": "DESIRE",
    "currentTermName": "Khóa 3",
    "room": "5",
    "endDate": "2026-11-19",
    "completedSessions": 17
  },
  {
    "id": "cls-1790252097118",
    "teacherId": "tch-duongvu",
    "completedSessions": 0,
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "schedule": "Thứ 2 + Thứ 5 (Ca 2: 19:45 - 21:30)",
    "tuitionFee": 5200000,
    "currentTermName": "Khóa 2",
    "teacherNames": [
      "Dương Vũ",
      "Hoàng Minh Tâm"
    ],
    "offDates": [],
    "room": "4",
    "courseName": "INSPIRE",
    "courseLevel": "Khóa 2",
    "code": "IDV-L88",
    "courseId": "crs-pre",
    "status": "Đang diễn ra",
    "maxStudents": 22,
    "startDate": "2026-09-24",
    "currentStudents": 22,
    "name": "Lớp 88",
    "teacherName": "Dương Vũ, Hoàng Minh Tâm",
    "totalSessions": 33,
    "endDate": "2027-01-14"
  },
  {
    "id": "cls-1790306357183",
    "branch": "Cơ sở 2 - Kiến An (Hải Phòng)",
    "tuitionFee": 1600000,
    "name": "Lớp 60",
    "endDate": "2026-10-27",
    "teacherName": "Nguyễn Hải Long",
    "teacherId": "tch-hailong",
    "courseId": "crs-pre",
    "courseName": "LUYỆN ĐỀ DRILL",
    "currentStudents": 19,
    "courseLevel": "Khóa 4",
    "completedSessions": 23,
    "code": "IDV-L60",
    "maxStudents": 20,
    "status": "Đang diễn ra",
    "totalSessions": 32,
    "room": "3 - Tầng 3",
    "startDate": "2026-07-10",
    "teacherNames": [
      "Nguyễn Hải Long"
    ],
    "schedule": "Thứ 3 + Thứ 6 (Ca 1: 18:00 - 19:45)",
    "offDates": [],
    "currentTermName": "Khóa 4"
  },
  {
    "id": "cls-1790306452201",
    "completedSessions": 12,
    "tuitionFee": 1600000,
    "name": "Lớp 62",
    "startDate": "2026-08-18",
    "status": "Đang diễn ra",
    "code": "IDV-L62",
    "currentStudents": 14,
    "courseName": "LUYỆN ĐỀ DRILL",
    "courseId": "crs-pre",
    "teacherNames": [
      "Nguyễn Hải Long"
    ],
    "endDate": "2026-12-04",
    "totalSessions": 32,
    "offDates": [],
    "teacherId": "tch-hailong",
    "teacherName": "Nguyễn Hải Long",
    "room": "3 - Tầng 3",
    "branch": "Cơ sở 2 - Kiến An (Hải Phòng)",
    "currentTermName": "Khóa 4",
    "maxStudents": 20,
    "schedule": "Thứ 3 + Thứ 6 (Ca 2: 19:45 - 21:30)",
    "courseLevel": "Khóa 4"
  },
  {
    "id": "cls-1790328298831",
    "name": "Lớp 80",
    "currentTermName": "Khóa 1",
    "branch": "Cơ sở 2 - Kiến An (Hải Phòng)",
    "endDate": "2026-10-21",
    "courseId": "crs-pre",
    "teacherId": "tch-huyenchi",
    "completedSessions": 23,
    "code": "IDV-L80",
    "totalSessions": 32,
    "room": "1",
    "courseLevel": "Khóa 1",
    "startDate": "2026-06-27",
    "status": "Đang diễn ra",
    "tuitionFee": 5000000,
    "maxStudents": 20,
    "schedule": "Thứ 4 + Thứ 7 (Ca 1: 18:00 - 19:45)",
    "currentStudents": 20,
    "offDates": [
      "2026-06-27",
      "2026-07-01",
      "2026-09-01"
    ],
    "teacherNames": [
      "Huyền Chi"
    ],
    "courseName": "PRE",
    "teacherName": "Huyền Chi"
  },
  {
    "id": "cls-1790328434476",
    "completedSessions": 17,
    "currentTermName": "Khóa 1",
    "room": "1",
    "status": "Đang diễn ra",
    "teacherNames": [
      "Huyền Chi"
    ],
    "courseName": "PRE",
    "courseId": "crs-pre",
    "tuitionFee": 5000000,
    "teacherId": "tch-huyenchi",
    "name": "Lớp 86",
    "currentStudents": 19,
    "maxStudents": 20,
    "branch": "Cơ sở 2 - Kiến An (Hải Phòng)",
    "courseLevel": "Khóa 1",
    "offDates": [
      "2026-07-21"
    ],
    "startDate": "2026-07-21",
    "teacherName": "Huyền Chi",
    "schedule": "Thứ 3 + Thứ 6 (Ca 1: 18:00 - 19:45)",
    "endDate": "2026-11-10",
    "code": "IDV-L86",
    "totalSessions": 32
  },
  {
    "id": "cls-1790328477276",
    "startDate": "2026-08-14",
    "room": "1",
    "schedule": "Thứ 3 + Thứ 6 (Ca 2: 19:45 - 21:30)",
    "currentStudents": 18,
    "status": "Đang diễn ra",
    "endDate": "2026-12-01",
    "offDates": [],
    "totalSessions": 32,
    "currentTermName": "Khóa 1",
    "courseId": "crs-pre",
    "tuitionFee": 5000000,
    "name": "Lớp 89",
    "teacherName": "Huyền Chi",
    "branch": "Cơ sở 2 - Kiến An (Hải Phòng)",
    "teacherId": "tch-huyenchi",
    "teacherNames": [
      "Huyền Chi"
    ],
    "completedSessions": 11,
    "courseName": "PRE",
    "maxStudents": 20,
    "courseLevel": "Khóa 1",
    "code": "IDV-L89"
  },
  {
    "id": "cls-1790390511388",
    "courseId": "crs-pre",
    "completedSessions": 2,
    "totalSessions": 32,
    "room": "3 - Tầng 3",
    "currentStudents": 15,
    "courseName": "LUYỆN ĐỀ DRILL",
    "endDate": "2027-01-07",
    "startDate": "2026-09-17",
    "branch": "Cơ sở 2 - Kiến An (Hải Phòng)",
    "tuitionFee": 1600000,
    "maxStudents": 20,
    "schedule": "Thứ 2 + Thứ 5 (Ca 1: 18:00 - 19:45)",
    "courseLevel": "Khóa 4",
    "currentTermName": "Khóa 4",
    "name": "Lớp 68",
    "teacherName": "Đàm Trung Hiếu, Cô Vũ Thùy",
    "teacherId": "tch-vuthuy",
    "code": "IDV-L68",
    "teacherNames": [
      "Đàm Trung Hiếu",
      "Cô Vũ Thùy"
    ],
    "status": "Đang diễn ra",
    "offDates": [
      "2026-09-17"
    ]
  },
  {
    "id": "cls-1790390633143",
    "teacherNames": [
      "Đàm Trung Hiếu"
    ],
    "endDate": "2027-02-01",
    "teacherName": "Đàm Trung Hiếu",
    "startDate": "2026-10-15",
    "courseLevel": "Khóa 4",
    "status": "Sắp khai giảng",
    "room": "3 - Tầng 3",
    "maxStudents": 20,
    "courseId": "crs-pre",
    "currentTermName": "Khóa 4",
    "completedSessions": 0,
    "offDates": [],
    "totalSessions": 32,
    "code": "IDV-L69",
    "teacherId": "tch-trunghieu",
    "tuitionFee": 1600000,
    "branch": "Cơ sở 2 - Kiến An (Hải Phòng)",
    "schedule": "Thứ 2 + Thứ 5 (Ca 2: 19:45 - 21:30)",
    "courseName": "LUYỆN ĐỀ DRILL",
    "currentStudents": 14,
    "name": "Lớp 69"
  },
  {
    "id": "cls-1790392962345",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "courseName": "DESIRE",
    "room": "5",
    "currentStudents": 20,
    "tuitionFee": 5600000,
    "startDate": "2026-07-01",
    "totalSessions": 33,
    "courseId": "crs-pre",
    "teacherNames": [
      "Diệp Đặng",
      "Thơm Nguyễn"
    ],
    "status": "Đang diễn ra",
    "maxStudents": 20,
    "offDates": [
      "2026-07-01",
      "2026-07-04"
    ],
    "currentTermName": "Khóa 3",
    "courseLevel": "Khóa 3",
    "name": "Lớp 71",
    "completedSessions": 23,
    "teacherName": "Diệp Đặng, Thơm Nguyễn",
    "schedule": "Thứ 4 + Thứ 7 (Ca 1: 18:00 - 19:45)",
    "code": "IDV-L71",
    "teacherId": "tch-diepdang",
    "endDate": "2026-10-28"
  },
  {
    "id": "cls-1790393046289",
    "startDate": "2026-07-02",
    "status": "Đang diễn ra",
    "schedule": "Thứ 2 + Thứ 5 (Ca 1: 18:00 - 19:45)",
    "code": "IDV-L75",
    "totalSessions": 33,
    "currentStudents": 19,
    "name": "Lớp 75",
    "offDates": [
      "2026-07-02"
    ],
    "completedSessions": 24,
    "teacherName": "Tâm Vương, Trang Nguyễn",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "courseId": "crs-pre",
    "currentTermName": "Khóa 2",
    "teacherId": "tch-tamvuong",
    "tuitionFee": 5200000,
    "teacherNames": [
      "Tâm Vương",
      "Trang Nguyễn"
    ],
    "maxStudents": 20,
    "room": "2",
    "courseLevel": "Khóa 2",
    "endDate": "2026-10-22",
    "courseName": "INSPIRE"
  },
  {
    "id": "cls-1790393118737",
    "schedule": "Thứ 2 + Thứ 5 (Ca 2: 19:45 - 21:30)",
    "currentStudents": 21,
    "room": "1",
    "teacherId": "tch-thomnguyen",
    "endDate": "2026-11-16",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "offDates": [],
    "teacherName": "Thơm Nguyễn, Diệp Đặng",
    "teacherNames": [
      "Thơm Nguyễn",
      "Diệp Đặng"
    ],
    "courseId": "crs-pre",
    "startDate": "2026-07-27",
    "tuitionFee": 5200000,
    "name": "Lớp 76",
    "currentTermName": "Khóa 2",
    "maxStudents": 21,
    "code": "IDV-L76",
    "totalSessions": 33,
    "courseLevel": "Khóa 2",
    "courseName": "INSPIRE",
    "completedSessions": 16,
    "status": "Đang diễn ra"
  },
  {
    "id": "cls-1790393249249",
    "currentStudents": 22,
    "completedSessions": 7,
    "courseLevel": "Khóa 2",
    "schedule": "Thứ 3 + Thứ 6 (Ca 1: 18:00 - 19:45)",
    "status": "Đang diễn ra",
    "maxStudents": 22,
    "startDate": "2026-09-04",
    "offDates": [],
    "teacherName": "Thơm Nguyễn, Dương Vũ",
    "teacherNames": [
      "Thơm Nguyễn",
      "Dương Vũ"
    ],
    "room": "1",
    "code": "IDV-L77",
    "courseName": "INSPIRE",
    "currentTermName": "Khóa 2",
    "endDate": "2026-12-25",
    "courseId": "crs-pre",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "tuitionFee": 5200000,
    "name": "Lớp 77",
    "teacherId": "tch-thomnguyen",
    "totalSessions": 33
  },
  {
    "id": "cls-1790393336374",
    "offDates": [
      "2026-08-31"
    ],
    "teacherName": "Diệp Đặng, Hoàng Minh Tâm",
    "teacherNames": [
      "Diệp Đặng",
      "Hoàng Minh Tâm"
    ],
    "status": "Đang diễn ra",
    "totalSessions": 32,
    "name": "Lớp 78",
    "completedSessions": 29,
    "tuitionFee": 5000000,
    "code": "IDV-L78",
    "maxStudents": 22,
    "startDate": "2026-06-15",
    "currentStudents": 23,
    "courseLevel": "Khóa 1",
    "courseName": "PRE",
    "schedule": "Thứ 2 + Thứ 5 (Ca 2: 19:45 - 21:30)",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "endDate": "2026-10-05",
    "room": "5",
    "currentTermName": "Khóa 1",
    "teacherId": "tch-diepdang",
    "courseId": "crs-pre"
  },
  {
    "id": "cls-1790393403078",
    "endDate": "2026-10-16",
    "maxStudents": 22,
    "offDates": [
      "2026-08-31",
      "2026-06-30",
      "2026-07-03"
    ],
    "currentTermName": "Khóa 1",
    "teacherId": "tch-tamvuong",
    "courseLevel": "Khóa 1",
    "teacherName": "Tâm Vương, Trang Nguyễn",
    "schedule": "Thứ 3 + Thứ 6 (Ca 1: 18:00 - 19:45)",
    "status": "Đang diễn ra",
    "room": "4",
    "code": "IDV-L79",
    "currentStudents": 22,
    "teacherNames": [
      "Tâm Vương",
      "Trang Nguyễn"
    ],
    "courseName": "PRE",
    "startDate": "2026-06-30",
    "totalSessions": 32,
    "tuitionFee": 5000000,
    "completedSessions": 24,
    "name": "Lớp 79",
    "courseId": "crs-pre",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)"
  },
  {
    "id": "cls-1790393482697",
    "offDates": [
      "2026-08-31",
      "2026-06-29"
    ],
    "completedSessions": 24,
    "name": "Lớp 81",
    "tuitionFee": 5000000,
    "teacherNames": [
      "Diệp Đặng",
      "Thơm Nguyễn"
    ],
    "status": "Đang diễn ra",
    "code": "IDV-L81",
    "currentTermName": "Khóa 1",
    "schedule": "Thứ 2 + Thứ 5 (Ca 1: 18:00 - 19:45)",
    "courseName": "PRE",
    "startDate": "2026-06-29",
    "endDate": "2026-10-19",
    "room": "1",
    "totalSessions": 32,
    "teacherName": "Diệp Đặng, Thơm Nguyễn",
    "courseLevel": "Khóa 1",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "teacherId": "tch-diepdang",
    "maxStudents": 22,
    "courseId": "crs-pre",
    "currentStudents": 22
  },
  {
    "id": "cls-1790393568684",
    "currentTermName": "Khóa 1",
    "room": "1",
    "totalSessions": 32,
    "startDate": "2026-07-04",
    "teacherName": "Trang Nguyễn",
    "tuitionFee": 5000000,
    "offDates": [
      "2026-08-31",
      "2026-07-04",
      "2026-07-08",
      "2026-07-11"
    ],
    "teacherNames": [
      "Trang Nguyễn"
    ],
    "schedule": "Thứ 4 + Thứ 7 (Ca 1: 18:00 - 19:45)",
    "courseLevel": "Khóa 1",
    "status": "Đang diễn ra",
    "maxStudents": 22,
    "courseName": "PRE",
    "teacherId": "tch-trangnguyen",
    "name": "Lớp 82",
    "currentStudents": 22,
    "endDate": "2026-10-31",
    "courseId": "crs-pre",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "completedSessions": 22,
    "code": "IDV-L82"
  },
  {
    "id": "cls-1790393637911",
    "status": "Đang diễn ra",
    "courseName": "PRE",
    "completedSessions": 17,
    "teacherNames": [
      "Tâm Vương"
    ],
    "endDate": "2026-11-18",
    "name": "Lớp 83",
    "schedule": "Thứ 4 + Thứ 7 (Ca 2: 19:45 - 21:30)",
    "offDates": [
      "2026-08-31",
      "2026-07-18",
      "2026-07-22",
      "2026-07-25",
      "2026-07-29"
    ],
    "tuitionFee": 5000000,
    "currentTermName": "Khóa 1",
    "code": "IDV-L83",
    "startDate": "2026-07-18",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "maxStudents": 23,
    "room": "2",
    "courseId": "crs-pre",
    "courseLevel": "Khóa 1",
    "teacherId": "tch-tamvuong",
    "currentStudents": 23,
    "teacherName": "Tâm Vương",
    "totalSessions": 32
  },
  {
    "id": "cls-1790393696720",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "room": "5",
    "completedSessions": 20,
    "teacherName": "Hoàng Minh Tâm, Trang Nguyễn",
    "totalSessions": 32,
    "endDate": "2026-11-07",
    "teacherId": "tch-minhtam",
    "courseId": "crs-pre",
    "courseLevel": "Khóa 1",
    "maxStudents": 22,
    "currentStudents": 22,
    "status": "Đang diễn ra",
    "startDate": "2026-07-14",
    "name": "Lớp 84",
    "tuitionFee": 5000000,
    "schedule": "Thứ 4 + Thứ 7 (Ca 1: 18:00 - 19:45)",
    "offDates": [
      "2026-08-31",
      "2026-07-15",
      "2026-07-18"
    ],
    "courseName": "PRE",
    "currentTermName": "Khóa 1",
    "teacherNames": [
      "Hoàng Minh Tâm",
      "Trang Nguyễn"
    ],
    "code": "IDV-L84"
  },
  {
    "id": "cls-1790393769306",
    "startDate": "2026-07-15",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "completedSessions": 18,
    "courseName": "PRE",
    "code": "IDV-L85",
    "endDate": "2026-10-31",
    "name": "Lớp 85",
    "totalSessions": 32,
    "tuitionFee": 5000000,
    "currentStudents": 22,
    "courseId": "crs-pre",
    "offDates": [
      "2026-08-31",
      "2026-07-15",
      "2026-07-18",
      "2026-07-22",
      "2026-07-25"
    ],
    "maxStudents": 22,
    "status": "Đang diễn ra",
    "courseLevel": "Khóa 1",
    "teacherId": "tch-diepdang",
    "teacherName": "Diệp Đặng, Tâm Vương",
    "room": "4",
    "teacherNames": [
      "Diệp Đặng",
      "Tâm Vương"
    ],
    "currentTermName": "Khóa 1",
    "schedule": "Thứ 4 + Thứ 7 (Ca 1: 18:00 - 19:45)"
  },
  {
    "id": "cls-1790393899110",
    "teacherNames": [
      "Hoàng Minh Tâm",
      "Trang Nguyễn"
    ],
    "room": "4",
    "currentTermName": "Khóa 1",
    "completedSessions": 18,
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "endDate": "2026-11-12",
    "courseName": "PRE",
    "courseId": "crs-pre",
    "startDate": "2026-07-23",
    "tuitionFee": 5000000,
    "teacherName": "Hoàng Minh Tâm, Trang Nguyễn",
    "currentStudents": 22,
    "name": "Lớp 87",
    "totalSessions": 32,
    "status": "Đang diễn ra",
    "schedule": "Thứ 2 + Thứ 5 (Ca 1: 18:00 - 19:45)",
    "offDates": [
      "2026-08-31"
    ],
    "maxStudents": 22,
    "courseLevel": "Khóa 1",
    "teacherId": "tch-minhtam",
    "code": "IDV-L87"
  },
  {
    "id": "cls-1790393988083",
    "offDates": [
      "2026-08-31",
      "2026-08-07"
    ],
    "room": "4",
    "courseLevel": "Khóa 1",
    "teacherNames": [
      "Hoàng Minh Tâm"
    ],
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "completedSessions": 14,
    "currentStudents": 21,
    "teacherId": "tch-minhtam",
    "schedule": "Thứ 3 + Thứ 6 (Ca 2: 19:45 - 21:30)",
    "teacherName": "Hoàng Minh Tâm",
    "name": "Lớp 90",
    "endDate": "2026-11-27",
    "courseName": "PRE",
    "status": "Đang diễn ra",
    "currentTermName": "Khóa 1",
    "totalSessions": 32,
    "code": "IDV-L90",
    "courseId": "crs-pre",
    "startDate": "2026-08-07",
    "tuitionFee": 5000000
  },
  {
    "id": "cls-1790394047967",
    "name": "Lớp 91",
    "currentStudents": 21,
    "status": "Đang diễn ra",
    "offDates": [
      "2026-08-31",
      "2026-08-15",
      "2026-08-19",
      "2026-08-22"
    ],
    "schedule": "Thứ 4 + Thứ 7 (Ca 2: 19:45 - 21:30)",
    "teacherNames": [
      "Hoàng Minh Tâm",
      "Thơm Nguyễn"
    ],
    "code": "IDV-L91",
    "totalSessions": 32,
    "startDate": "2026-08-15",
    "currentTermName": "Khóa 1",
    "room": "5",
    "courseName": "PRE",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "teacherName": "Hoàng Minh Tâm, Thơm Nguyễn",
    "completedSessions": 10,
    "tuitionFee": 5000000,
    "teacherId": "tch-minhtam",
    "courseId": "crs-pre",
    "courseLevel": "Khóa 1",
    "endDate": "2026-12-12",
    "maxStudents": 22
  },
  {
    "id": "cls-1790394128571",
    "offDates": [
      "2026-08-31"
    ],
    "courseLevel": "Khóa 1",
    "startDate": "2026-09-10",
    "status": "Đang diễn ra",
    "name": "Lớp 92",
    "currentStudents": 19,
    "maxStudents": 22,
    "code": "IDV-L92",
    "completedSessions": 6,
    "teacherName": "Huyền Chi",
    "schedule": "Thứ 2 + Thứ 5 (Ca 1: 18:00 - 19:45)",
    "teacherNames": [
      "Huyền Chi"
    ],
    "tuitionFee": 5000000,
    "endDate": "2026-12-28",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "teacherId": "tch-huyenchi",
    "room": "1",
    "currentTermName": "Khóa 1",
    "courseName": "PRE",
    "totalSessions": 32,
    "courseId": "crs-pre"
  },
  {
    "id": "cls-1790394219370",
    "teacherName": "Tâm Vương, Hoàng Minh Tâm",
    "totalSessions": 32,
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "teacherId": "tch-tamvuong",
    "tuitionFee": 5000000,
    "courseId": "crs-pre",
    "room": "2",
    "maxStudents": 22,
    "courseLevel": "Khóa 1",
    "currentTermName": "Khóa 1",
    "courseName": "PRE",
    "teacherNames": [
      "Tâm Vương",
      "Hoàng Minh Tâm"
    ],
    "status": "Đang diễn ra",
    "startDate": "2026-08-25",
    "completedSessions": 9,
    "endDate": "2026-12-15",
    "schedule": "Thứ 3 + Thứ 6 (Ca 1: 18:00 - 19:45)",
    "code": "IDV-L93",
    "offDates": [
      "2026-08-31",
      "2026-08-25"
    ],
    "name": "Lớp 93",
    "currentStudents": 19
  },
  {
    "id": "cls-1790394280379",
    "room": "4",
    "teacherName": "Diệp Đặng",
    "courseId": "crs-pre",
    "teacherId": "tch-diepdang",
    "courseLevel": "Khóa 1",
    "status": "Đang diễn ra",
    "maxStudents": 22,
    "completedSessions": 7,
    "currentTermName": "Khóa 1",
    "totalSessions": 32,
    "name": "Lớp 94",
    "courseName": "PRE",
    "offDates": [
      "2026-08-31"
    ],
    "schedule": "Thứ 4 + Thứ 7 (Ca 2: 19:45 - 21:30)",
    "endDate": "2026-12-23",
    "teacherNames": [
      "Diệp Đặng"
    ],
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "currentStudents": 24,
    "startDate": "2026-09-05",
    "code": "IDV-L94",
    "tuitionFee": 5000000
  },
  {
    "id": "cls-1790394353731",
    "code": "IDV-L95",
    "courseName": "PRE",
    "schedule": "Thứ 4 + Thứ 7 (Ca 1: 18:00 - 19:45)",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "currentTermName": "Khóa 1",
    "tuitionFee": 5000000,
    "startDate": "2026-09-16",
    "name": "Lớp 95",
    "offDates": [],
    "currentStudents": 20,
    "completedSessions": 4,
    "teacherName": "Tâm Vương, Thơm Nguyễn",
    "status": "Đang diễn ra",
    "courseId": "crs-pre",
    "totalSessions": 32,
    "teacherNames": [
      "Tâm Vương",
      "Thơm Nguyễn"
    ],
    "maxStudents": 22,
    "teacherId": "tch-tamvuong",
    "courseLevel": "Khóa 1",
    "room": "2",
    "endDate": "2027-01-02"
  },
  {
    "id": "cls-1790394398249",
    "tuitionFee": 5000000,
    "schedule": "Thứ 3 + Thứ 6 (Ca 2: 19:45 - 21:30)",
    "totalSessions": 32,
    "status": "Đang diễn ra",
    "code": "IDV-L96",
    "startDate": "2026-09-18",
    "courseName": "PRE",
    "name": "Lớp 96",
    "currentStudents": 22,
    "teacherNames": [
      "Diệp Đặng"
    ],
    "offDates": [
      "2026-08-31"
    ],
    "maxStudents": 23,
    "courseId": "crs-pre",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "courseLevel": "Khóa 1",
    "room": "1",
    "completedSessions": 3,
    "teacherName": "Diệp Đặng",
    "endDate": "2027-01-05",
    "teacherId": "tch-diepdang",
    "currentTermName": "Khóa 1"
  },
  {
    "id": "cls-1790503743354",
    "courseName": "PRE",
    "maxStudents": 15,
    "room": "Phòng 1 - Tầng 2",
    "courseLevel": "Khóa 1",
    "tuitionFee": 5000000,
    "teacherId": "tch-huyenchi",
    "teacherName": "Huyền Chi",
    "totalSessions": 32,
    "courseId": "crs-pre",
    "status": "Đang diễn ra",
    "currentStudents": 9,
    "teacherNames": [
      "Huyền Chi"
    ],
    "endDate": "2027-02-01",
    "offDates": [],
    "completedSessions": 0,
    "name": "Lớp 97",
    "code": "IDV-L97",
    "schedule": "Thứ 2 + Thứ 5 (Ca 2: 19:45 - 21:30)",
    "branch": "Cơ sở 2 - Kiến An (Hải Phòng)",
    "currentTermName": "Khóa 1",
    "startDate": "2026-10-13"
  },
  {
    "id": "cls-1790503955662",
    "schedule": "Thứ 4 + Thứ 7 (Ca 2: 19:45 - 21:30)",
    "tuitionFee": 5000000,
    "room": "1",
    "startDate": "2026-09-30",
    "teacherNames": [
      "Trang Nguyễn"
    ],
    "endDate": "2027-01-16",
    "courseName": "PRE",
    "status": "Sắp khai giảng",
    "currentTermName": "Khóa 1",
    "totalSessions": 32,
    "offDates": [],
    "courseId": "crs-pre",
    "name": "Lớp 98",
    "courseLevel": "Khóa 1",
    "teacherId": "tch-trangnguyen",
    "maxStudents": 23,
    "completedSessions": 0,
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "teacherName": "Trang Nguyễn",
    "code": "IDV-L98",
    "currentStudents": 23
  },
  {
    "id": "cls-1790505864495",
    "courseId": "crs-pre",
    "room": "Phòng 201 - Tầng 2",
    "currentStudents": 19,
    "endDate": "2026-11-04",
    "status": "Đang diễn ra",
    "teacherId": "tch-duongvu",
    "teacherName": "Dương Vũ",
    "name": "Lớp 72",
    "schedule": "Thứ 4 + Thứ 7 (Ca 1: 18:00 - 19:45)",
    "teacherNames": [
      "Dương Vũ"
    ],
    "courseName": "DESIRE",
    "currentTermName": "Khóa 3",
    "startDate": "2026-07-01",
    "maxStudents": 19,
    "totalSessions": 33,
    "courseLevel": "Khóa 3",
    "code": "IDV-L72",
    "branch": "Cơ sở 2 - Kiến An (Hải Phòng)",
    "tuitionFee": 5600000,
    "completedSessions": 22,
    "offDates": [
      "2026-07-01",
      "2026-07-04",
      "2026-07-08",
      "2026-07-11"
    ]
  }
];

// =========================================================================
// DANH SÁCH HỌC VIÊN IELTS TỪ SHEET (121 HỌC VIÊN ĐÃ ĐƯỢC XẾP VÀO LỚP IELTS)
// =========================================================================
export const INITIAL_STUDENTS: Student[] = [
  {
    "id": "std-001",
    "code": "IDV-HV001",
    "name": "Đào Anh Minh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0944316107",
    "email": "aoanhminh@gmail.com",
    "parentName": "PH Đào Anh Minh",
    "parentPhone": "0937117707",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-73",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao",
    "courseName": "IELTS Master 7.0 - 8.0+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-002",
    "code": "IDV-HV002",
    "name": "Vũ Phương Thảo",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0995847133",
    "email": "vuphuongthao@gmail.com",
    "parentName": "PH Vũ Phương Thảo",
    "parentPhone": "0979341694",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-59",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0",
    "courseName": "IELTS Pre-Intermediate (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-003",
    "code": "IDV-HV003",
    "name": "Bùi Nhật Lâm",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0972461818",
    "email": "buinhatlam@gmail.com",
    "parentName": "PH Bùi Nhật Lâm",
    "parentPhone": "0963979133",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-76",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+",
    "courseName": "IELTS Comprehensive 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-004",
    "code": "IDV-HV004",
    "name": "Thanh Phong",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0982972863",
    "email": "thanhphong@gmail.com",
    "parentName": "PH Thanh Phong",
    "parentPhone": "0947977817",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-drill",
    "className": "Lớp Drill Kỹ Năng IELTS (Drill36 & Drill47)",
    "courseName": "IELTS Skill Drills (Nghe - Nói - Đọc - Viết)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-005",
    "code": "IDV-HV005",
    "name": "Ánh Dương",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0953407495",
    "email": "anhduong@gmail.com",
    "parentName": "PH Ánh Dương",
    "parentPhone": "0918208664",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-73",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao",
    "courseName": "IELTS Master 7.0 - 8.0+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-006",
    "code": "IDV-HV006",
    "name": "Khánh Ngọc",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0919409140",
    "email": "khanhngoc@gmail.com",
    "parentName": "PH Khánh Ngọc",
    "parentPhone": "0925599589",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-76",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+",
    "courseName": "IELTS Comprehensive 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-007",
    "code": "IDV-HV007",
    "name": "Diệu Huyền",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0940876563",
    "email": "dieuhuyen@gmail.com",
    "parentName": "PH Diệu Huyền",
    "parentPhone": "0924515131",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-41",
    "className": "Lớp 41 - IELTS Foundation Cơ Bản",
    "courseName": "IELTS Foundation (3.5 - 4.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-008",
    "code": "IDV-HV008",
    "name": "Nguyễn Bảo Nam",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0911063983",
    "email": "nguyenbaonam@gmail.com",
    "parentName": "PH Nguyễn Bảo Nam",
    "parentPhone": "0996455962",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-29",
    "className": "Lớp 29 - IELTS Junior Khởi Động",
    "courseName": "IELTS Junior Foundation (3.0 - 4.0)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-009",
    "code": "IDV-HV009",
    "name": "Vũ Bá Nguyễn Bình",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0953058332",
    "email": "vubanguyenbinh@gmail.com",
    "parentName": "PH Vũ Bá Nguyễn Bình",
    "parentPhone": "0921346652",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-67",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá",
    "courseName": "IELTS Intensive 6.5+ Bứt Phá",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-010",
    "code": "IDV-HV010",
    "name": "Nguyễn Khánh Linh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0948048499",
    "email": "nguyenkhanhlinh@gmail.com",
    "parentName": "PH Nguyễn Khánh Linh",
    "parentPhone": "0974873440",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-74",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+",
    "courseName": "IELTS Writing & Speaking Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-011",
    "code": "IDV-HV011",
    "name": "Cao Ngân Hà",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0931031253",
    "email": "caonganha@gmail.com",
    "parentName": "PH Cao Ngân Hà",
    "parentPhone": "0961816512",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-59",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0",
    "courseName": "IELTS Pre-Intermediate (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-012",
    "code": "IDV-HV012",
    "name": "Nam Khánh",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0983971659",
    "email": "namkhanh@gmail.com",
    "parentName": "PH Nam Khánh",
    "parentPhone": "0979934474",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-67",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá",
    "courseName": "IELTS Intensive 6.5+ Bứt Phá",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-013",
    "code": "IDV-HV013",
    "name": "Lê Quốc An",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0939901622",
    "email": "lequocan@gmail.com",
    "parentName": "PH Lê Quốc An",
    "parentPhone": "0963538211",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-73",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao",
    "courseName": "IELTS Master 7.0 - 8.0+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-014",
    "code": "IDV-HV014",
    "name": "Nguyễn Phương Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0919984156",
    "email": "nguyenphuonganh@gmail.com",
    "parentName": "PH Nguyễn Phương Anh",
    "parentPhone": "0986590749",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-59",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0",
    "courseName": "IELTS Pre-Intermediate (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-015",
    "code": "IDV-HV015",
    "name": "Lê Hà My",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0967936404",
    "email": "lehamy@gmail.com",
    "parentName": "PH Lê Hà My",
    "parentPhone": "0950837640",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-76",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+",
    "courseName": "IELTS Comprehensive 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-016",
    "code": "IDV-HV016",
    "name": "Anh Kỳ",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0962887177",
    "email": "anhky@gmail.com",
    "parentName": "PH Anh Kỳ",
    "parentPhone": "0923957912",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-67",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá",
    "courseName": "IELTS Intensive 6.5+ Bứt Phá",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-017",
    "code": "IDV-HV017",
    "name": "Hoàng Phương Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0912485009",
    "email": "hoangphuonganh@gmail.com",
    "parentName": "PH Hoàng Phương Anh",
    "parentPhone": "0960946882",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-67",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá",
    "courseName": "IELTS Intensive 6.5+ Bứt Phá",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-018",
    "code": "IDV-HV018",
    "name": "Tường Vi",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0952891278",
    "email": "tuongvi@gmail.com",
    "parentName": "PH Tường Vi",
    "parentPhone": "0947161431",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-58",
    "className": "Lớp 58 - IELTS Giao Tiếp Học Thuật",
    "courseName": "IELTS Speaking & Academic Communication",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-019",
    "code": "IDV-HV019",
    "name": "Tú Uyên",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0932566318",
    "email": "tuuyen@gmail.com",
    "parentName": "PH Tú Uyên",
    "parentPhone": "0998904797",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-76",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+",
    "courseName": "IELTS Comprehensive 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-020",
    "code": "IDV-HV020",
    "name": "Minh Thúy",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0922343704",
    "email": "minhthuy@gmail.com",
    "parentName": "PH Minh Thúy",
    "parentPhone": "0996716022",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-76",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+",
    "courseName": "IELTS Comprehensive 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-021",
    "code": "IDV-HV021",
    "name": "Hùng Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0912276657",
    "email": "hunganh@gmail.com",
    "parentName": "PH Hùng Anh",
    "parentPhone": "0982653201",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-76",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+",
    "courseName": "IELTS Comprehensive 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-022",
    "code": "IDV-HV022",
    "name": "Châu Giang",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0981741054",
    "email": "chaugiang@gmail.com",
    "parentName": "PH Châu Giang",
    "parentPhone": "0916250878",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-73",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao",
    "courseName": "IELTS Master 7.0 - 8.0+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-023",
    "code": "IDV-HV023",
    "name": "Đỗ Phương Thảo",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0999278604",
    "email": "ophuongthao@gmail.com",
    "parentName": "PH Đỗ Phương Thảo",
    "parentPhone": "0943398337",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-drill",
    "className": "Lớp Drill Kỹ Năng IELTS (Drill36 & Drill47)",
    "courseName": "IELTS Skill Drills (Nghe - Nói - Đọc - Viết)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-024",
    "code": "IDV-HV024",
    "name": "Ngọc Diệp",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0944070778",
    "email": "ngocdiep@gmail.com",
    "parentName": "PH Ngọc Diệp",
    "parentPhone": "0977004729",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-59",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0",
    "courseName": "IELTS Pre-Intermediate (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-025",
    "code": "IDV-HV025",
    "name": "Võ Đức Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0956064690",
    "email": "voucanh@gmail.com",
    "parentName": "PH Võ Đức Anh",
    "parentPhone": "0963156175",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-74",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+",
    "courseName": "IELTS Writing & Speaking Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-026",
    "code": "IDV-HV026",
    "name": "Minh An",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0928742280",
    "email": "minhan@gmail.com",
    "parentName": "PH Minh An",
    "parentPhone": "0959951080",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-70",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng",
    "courseName": "IELTS Foundation (3.5 - 4.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-027",
    "code": "IDV-HV027",
    "name": "Bạch Thùy Linh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0942734739",
    "email": "bachthuylinh@gmail.com",
    "parentName": "PH Bạch Thùy Linh",
    "parentPhone": "0945415219",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-63",
    "className": "Lớp 63 - IELTS Intermediate 5.5+",
    "courseName": "IELTS Intermediate (5.0 - 6.0)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-028",
    "code": "IDV-HV028",
    "name": "Đức Lộc",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0997485350",
    "email": "ucloc@gmail.com",
    "parentName": "PH Đức Lộc",
    "parentPhone": "0967131697",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-63",
    "className": "Lớp 63 - IELTS Intermediate 5.5+",
    "courseName": "IELTS Intermediate (5.0 - 6.0)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-029",
    "code": "IDV-HV029",
    "name": "Đăng Khánh",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0934280590",
    "email": "angkhanh@gmail.com",
    "parentName": "PH Đăng Khánh",
    "parentPhone": "0912988623",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-74",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+",
    "courseName": "IELTS Writing & Speaking Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-030",
    "code": "IDV-HV030",
    "name": "Trần Ngọc Đức",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0932270321",
    "email": "tranngocuc@gmail.com",
    "parentName": "PH Trần Ngọc Đức",
    "parentPhone": "0961549692",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-73",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao",
    "courseName": "IELTS Master 7.0 - 8.0+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-031",
    "code": "IDV-HV031",
    "name": "Nguyễn Bảo Châu",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0969572730",
    "email": "nguyenbaochau@gmail.com",
    "parentName": "PH Nguyễn Bảo Châu",
    "parentPhone": "0974042959",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-67",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá",
    "courseName": "IELTS Intensive 6.5+ Bứt Phá",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-032",
    "code": "IDV-HV032",
    "name": "Vũ Quang Minh",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0981197926",
    "email": "vuquangminh@gmail.com",
    "parentName": "PH Vũ Quang Minh",
    "parentPhone": "0910891185",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-64",
    "className": "Lớp 64 - IELTS Pre-Intermediate (4.5+)",
    "courseName": "IELTS Pre-Intermediate (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-033",
    "code": "IDV-HV033",
    "name": "Đào Dũng",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0949715604",
    "email": "aodung@gmail.com",
    "parentName": "PH Đào Dũng",
    "parentPhone": "0939173379",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-76",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+",
    "courseName": "IELTS Comprehensive 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-034",
    "code": "IDV-HV034",
    "name": "Đặng Ngọc",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0929812599",
    "email": "angngoc@gmail.com",
    "parentName": "PH Đặng Ngọc",
    "parentPhone": "0961716261",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-drill",
    "className": "Lớp Drill Kỹ Năng IELTS (Drill36 & Drill47)",
    "courseName": "IELTS Skill Drills (Nghe - Nói - Đọc - Viết)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-035",
    "code": "IDV-HV035",
    "name": "Vũ Thu Hà",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0961769511",
    "email": "vuthuha@gmail.com",
    "parentName": "PH Vũ Thu Hà",
    "parentPhone": "0939514634",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-67",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá",
    "courseName": "IELTS Intensive 6.5+ Bứt Phá",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-036",
    "code": "IDV-HV036",
    "name": "Linh Chi",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0928111819",
    "email": "linhchi@gmail.com",
    "parentName": "PH Linh Chi",
    "parentPhone": "0978502637",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-67",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá",
    "courseName": "IELTS Intensive 6.5+ Bứt Phá",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-037",
    "code": "IDV-HV037",
    "name": "Nguyễn Đình Bảo Lâm",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0933649548",
    "email": "nguyeninhbaolam@gmail.com",
    "parentName": "PH Nguyễn Đình Bảo Lâm",
    "parentPhone": "0976815298",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-67",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá",
    "courseName": "IELTS Intensive 6.5+ Bứt Phá",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-038",
    "code": "IDV-HV038",
    "name": "Thanh Nhàn",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0948111931",
    "email": "thanhnhan@gmail.com",
    "parentName": "PH Thanh Nhàn",
    "parentPhone": "0940944629",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-drill",
    "className": "Lớp Drill Kỹ Năng IELTS (Drill36 & Drill47)",
    "courseName": "IELTS Skill Drills (Nghe - Nói - Đọc - Viết)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-039",
    "code": "IDV-HV039",
    "name": "Lê Quang Đức Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0910693160",
    "email": "lequangucanh@gmail.com",
    "parentName": "PH Lê Quang Đức Anh",
    "parentPhone": "0986631284",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-74",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+",
    "courseName": "IELTS Writing & Speaking Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-040",
    "code": "IDV-HV040",
    "name": "Đình Tiền",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0959728362",
    "email": "inhtien@gmail.com",
    "parentName": "PH Đình Tiền",
    "parentPhone": "0996308899",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-70",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng",
    "courseName": "IELTS Foundation (3.5 - 4.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-041",
    "code": "IDV-HV041",
    "name": "Lê Minh Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0911802095",
    "email": "leminhanh@gmail.com",
    "parentName": "PH Lê Minh Anh",
    "parentPhone": "0921007752",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-76",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+",
    "courseName": "IELTS Comprehensive 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-042",
    "code": "IDV-HV042",
    "name": "Nguyễn Minh Phương",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0972600908",
    "email": "nguyenminhphuong@gmail.com",
    "parentName": "PH Nguyễn Minh Phương",
    "parentPhone": "0991094649",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-70",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng",
    "courseName": "IELTS Foundation (3.5 - 4.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-043",
    "code": "IDV-HV043",
    "name": "Phạm Đức Sơn Hải",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0925026351",
    "email": "phamucsonhai@gmail.com",
    "parentName": "PH Phạm Đức Sơn Hải",
    "parentPhone": "0995469428",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-64",
    "className": "Lớp 64 - IELTS Pre-Intermediate (4.5+)",
    "courseName": "IELTS Pre-Intermediate (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-044",
    "code": "IDV-HV044",
    "name": "Triệu Hoàng Mai",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0956145542",
    "email": "trieuhoangmai@gmail.com",
    "parentName": "PH Triệu Hoàng Mai",
    "parentPhone": "0949622041",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-74",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+",
    "courseName": "IELTS Writing & Speaking Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-045",
    "code": "IDV-HV045",
    "name": "Gia Khải",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0913428721",
    "email": "giakhai@gmail.com",
    "parentName": "PH Gia Khải",
    "parentPhone": "0943192681",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-71",
    "className": "Lớp 71 - IELTS Junior Master (5.0+)",
    "courseName": "IELTS Junior (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-046",
    "code": "IDV-HV046",
    "name": "Tô Kim Ngân",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0949074133",
    "email": "tokimngan@gmail.com",
    "parentName": "PH Tô Kim Ngân",
    "parentPhone": "0922112395",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-59",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0",
    "courseName": "IELTS Pre-Intermediate (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-047",
    "code": "IDV-HV047",
    "name": "Ngân Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0937797180",
    "email": "ngananh@gmail.com",
    "parentName": "PH Ngân Anh",
    "parentPhone": "0969646274",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-73",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao",
    "courseName": "IELTS Master 7.0 - 8.0+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-048",
    "code": "IDV-HV048",
    "name": "Phương Linh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0950709662",
    "email": "phuonglinh@gmail.com",
    "parentName": "PH Phương Linh",
    "parentPhone": "0941477702",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-71",
    "className": "Lớp 71 - IELTS Junior Master (5.0+)",
    "courseName": "IELTS Junior (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-049",
    "code": "IDV-HV049",
    "name": "Uyên Nhi",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0963538025",
    "email": "uyennhi@gmail.com",
    "parentName": "PH Uyên Nhi",
    "parentPhone": "0945282062",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-65",
    "className": "Lớp 65 - IELTS Giao Tiếp & Speaking (5.0+)",
    "courseName": "IELTS Speaking & Pronunciation",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-050",
    "code": "IDV-HV050",
    "name": "Thanh Dương",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0917264858",
    "email": "thanhduong@gmail.com",
    "parentName": "PH Thanh Dương",
    "parentPhone": "0935380286",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-71",
    "className": "Lớp 71 - IELTS Junior Master (5.0+)",
    "courseName": "IELTS Junior (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-051",
    "code": "IDV-HV051",
    "name": "Thu Quyên",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0927301518",
    "email": "thuquyen@gmail.com",
    "parentName": "PH Thu Quyên",
    "parentPhone": "0939055320",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-73",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao",
    "courseName": "IELTS Master 7.0 - 8.0+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-052",
    "code": "IDV-HV052",
    "name": "Ngọc Hà",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0937757077",
    "email": "ngocha@gmail.com",
    "parentName": "PH Ngọc Hà",
    "parentPhone": "0914948483",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-66",
    "className": "Lớp 66 - IELTS Intermediate 5.5+",
    "courseName": "IELTS Intermediate (5.0 - 6.0)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-053",
    "code": "IDV-HV053",
    "name": "Bảo Trân",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0912063640",
    "email": "baotran@gmail.com",
    "parentName": "PH Bảo Trân",
    "parentPhone": "0989339483",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-84",
    "className": "Lớp 84 - IELTS Pre-Master 6.5+",
    "courseName": "IELTS Pre-Master (6.0 - 7.0)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-054",
    "code": "IDV-HV054",
    "name": "Gia Bảo",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0943284815",
    "email": "giabao@gmail.com",
    "parentName": "PH Gia Bảo",
    "parentPhone": "0960773756",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-76",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+",
    "courseName": "IELTS Comprehensive 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-055",
    "code": "IDV-HV055",
    "name": "Phạm Trang",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0956839751",
    "email": "phamtrang@gmail.com",
    "parentName": "PH Phạm Trang",
    "parentPhone": "0923580101",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-67",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá",
    "courseName": "IELTS Intensive 6.5+ Bứt Phá",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-056",
    "code": "IDV-HV056",
    "name": "Mai Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0950690352",
    "email": "maianh@gmail.com",
    "parentName": "PH Mai Anh",
    "parentPhone": "0989310245",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-66",
    "className": "Lớp 66 - IELTS Intermediate 5.5+",
    "courseName": "IELTS Intermediate (5.0 - 6.0)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-057",
    "code": "IDV-HV057",
    "name": "Ngân Hà",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0989592603",
    "email": "nganha@gmail.com",
    "parentName": "PH Ngân Hà",
    "parentPhone": "0972544893",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-59",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0",
    "courseName": "IELTS Pre-Intermediate (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-058",
    "code": "IDV-HV058",
    "name": "Hải Nam",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0964703145",
    "email": "hainam@gmail.com",
    "parentName": "PH Hải Nam",
    "parentPhone": "0984693372",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-50",
    "className": "Lớp 50 - IELTS Nền Tảng 4.0",
    "courseName": "IELTS Foundation (3.5 - 4.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-059",
    "code": "IDV-HV059",
    "name": "Nhật",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0949189585",
    "email": "nhat@gmail.com",
    "parentName": "PH Nhật",
    "parentPhone": "0968362079",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-76",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+",
    "courseName": "IELTS Comprehensive 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-060",
    "code": "IDV-HV060",
    "name": "Thanh Huyền",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0912787757",
    "email": "thanhhuyen@gmail.com",
    "parentName": "PH Thanh Huyền",
    "parentPhone": "0918665077",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-41",
    "className": "Lớp 41 - IELTS Foundation Cơ Bản",
    "courseName": "IELTS Foundation (3.5 - 4.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-061",
    "code": "IDV-HV061",
    "name": "Nguyễn Nhung",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0983236373",
    "email": "nguyennhung@gmail.com",
    "parentName": "PH Nguyễn Nhung",
    "parentPhone": "0922142294",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-77",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+",
    "courseName": "IELTS Intensive 6.5 - 7.5",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-062",
    "code": "IDV-HV062",
    "name": "Hà Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0958851120",
    "email": "haanh@gmail.com",
    "parentName": "PH Hà Anh",
    "parentPhone": "0974179071",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-74",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+",
    "courseName": "IELTS Writing & Speaking Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-063",
    "code": "IDV-HV063",
    "name": "Hải Yến",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0979752421",
    "email": "haiyen@gmail.com",
    "parentName": "PH Hải Yến",
    "parentPhone": "0947396324",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-74",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+",
    "courseName": "IELTS Writing & Speaking Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-064",
    "code": "IDV-HV064",
    "name": "Bảo Châu",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0980964130",
    "email": "baochau@gmail.com",
    "parentName": "PH Bảo Châu",
    "parentPhone": "0974291681",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-67",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá",
    "courseName": "IELTS Intensive 6.5+ Bứt Phá",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-065",
    "code": "IDV-HV065",
    "name": "Trần Thùy Dương",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0996427643",
    "email": "tranthuyduong@gmail.com",
    "parentName": "PH Trần Thùy Dương",
    "parentPhone": "0946170173",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-71",
    "className": "Lớp 71 - IELTS Junior Master (5.0+)",
    "courseName": "IELTS Junior (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-066",
    "code": "IDV-HV066",
    "name": "Trần Trung Hiếu",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0931914480",
    "email": "trantrunghieu@gmail.com",
    "parentName": "PH Trần Trung Hiếu",
    "parentPhone": "0990800351",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-77",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+",
    "courseName": "IELTS Intensive 6.5 - 7.5",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-067",
    "code": "IDV-HV067",
    "name": "Mỹ Hường",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0943448632",
    "email": "myhuong@gmail.com",
    "parentName": "PH Mỹ Hường",
    "parentPhone": "0975841568",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-59",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0",
    "courseName": "IELTS Pre-Intermediate (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-068",
    "code": "IDV-HV068",
    "name": "Đào khánh Ngọc",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0931762047",
    "email": "aokhanhngoc@gmail.com",
    "parentName": "PH Đào khánh Ngọc",
    "parentPhone": "0920808621",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-77",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+",
    "courseName": "IELTS Intensive 6.5 - 7.5",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-069",
    "code": "IDV-HV069",
    "name": "Phạm Quỳnh Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0958235941",
    "email": "phamquynhanh@gmail.com",
    "parentName": "PH Phạm Quỳnh Anh",
    "parentPhone": "0960552838",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-61",
    "className": "Lớp 61 - IELTS Thiếu Niên 5.0+",
    "courseName": "IELTS Junior Pre-Inter (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-070",
    "code": "IDV-HV070",
    "name": "Tuấn Dũng",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0975129084",
    "email": "tuandung@gmail.com",
    "parentName": "PH Tuấn Dũng",
    "parentPhone": "0916662898",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-76",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+",
    "courseName": "IELTS Comprehensive 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-071",
    "code": "IDV-HV071",
    "name": "Thảo Quyên",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0946569481",
    "email": "thaoquyen@gmail.com",
    "parentName": "PH Thảo Quyên",
    "parentPhone": "0924066666",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-70",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng",
    "courseName": "IELTS Foundation (3.5 - 4.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-072",
    "code": "IDV-HV072",
    "name": "Lê Thị Tâm",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0966180625",
    "email": "lethitam@gmail.com",
    "parentName": "PH Lê Thị Tâm",
    "parentPhone": "0954190195",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-luyende",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu",
    "courseName": "Luyện Đề IELTS Thực Chiến (6.5 - 7.5+)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-073",
    "code": "IDV-HV073",
    "name": "Trung Đinh",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0990943724",
    "email": "trunginh@gmail.com",
    "parentName": "PH Trung Đinh",
    "parentPhone": "0912099478",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-luyende",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu",
    "courseName": "Luyện Đề IELTS Thực Chiến (6.5 - 7.5+)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-074",
    "code": "IDV-HV074",
    "name": "Minh Ngọc",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0992611640",
    "email": "minhngoc@gmail.com",
    "parentName": "PH Minh Ngọc",
    "parentPhone": "0974824199",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-74",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+",
    "courseName": "IELTS Writing & Speaking Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-075",
    "code": "IDV-HV075",
    "name": "Kim Ngân",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0975280352",
    "email": "kimngan@gmail.com",
    "parentName": "PH Kim Ngân",
    "parentPhone": "0990944205",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-59",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0",
    "courseName": "IELTS Pre-Intermediate (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-076",
    "code": "IDV-HV076",
    "name": "Nhật Lâm",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0992222716",
    "email": "nhatlam@gmail.com",
    "parentName": "PH Nhật Lâm",
    "parentPhone": "0921421158",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-76",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+",
    "courseName": "IELTS Comprehensive 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-077",
    "code": "IDV-HV077",
    "name": "Đỗ Phương Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0951959659",
    "email": "ophuonganh@gmail.com",
    "parentName": "PH Đỗ Phương Anh",
    "parentPhone": "0925565260",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-77",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+",
    "courseName": "IELTS Intensive 6.5 - 7.5",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-078",
    "code": "IDV-HV078",
    "name": "Trần Anh Thư",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0962846295",
    "email": "trananhthu@gmail.com",
    "parentName": "PH Trần Anh Thư",
    "parentPhone": "0981035541",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-77",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+",
    "courseName": "IELTS Intensive 6.5 - 7.5",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-079",
    "code": "IDV-HV079",
    "name": "Dương Thùy Linh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0955963018",
    "email": "duongthuylinh@gmail.com",
    "parentName": "PH Dương Thùy Linh",
    "parentPhone": "0960482518",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-74",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+",
    "courseName": "IELTS Writing & Speaking Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-080",
    "code": "IDV-HV080",
    "name": "Khánh Linh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0983875737",
    "email": "khanhlinh@gmail.com",
    "parentName": "PH Khánh Linh",
    "parentPhone": "0949456798",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-74",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+",
    "courseName": "IELTS Writing & Speaking Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-081",
    "code": "IDV-HV081",
    "name": "Ngô Hoàng Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0973494979",
    "email": "ngohoanganh@gmail.com",
    "parentName": "PH Ngô Hoàng Anh",
    "parentPhone": "0971808763",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-66",
    "className": "Lớp 66 - IELTS Intermediate 5.5+",
    "courseName": "IELTS Intermediate (5.0 - 6.0)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-082",
    "code": "IDV-HV082",
    "name": "Thắng Vũ",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0969803826",
    "email": "thangvu@gmail.com",
    "parentName": "PH Thắng Vũ",
    "parentPhone": "0939031193",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-74",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+",
    "courseName": "IELTS Writing & Speaking Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-083",
    "code": "IDV-HV083",
    "name": "Ngọc Đức",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0970816345",
    "email": "ngocuc@gmail.com",
    "parentName": "PH Ngọc Đức",
    "parentPhone": "0960054390",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-74",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+",
    "courseName": "IELTS Writing & Speaking Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-084",
    "code": "IDV-HV084",
    "name": "Nguyễn Việt Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0956255666",
    "email": "nguyenvietanh@gmail.com",
    "parentName": "PH Nguyễn Việt Anh",
    "parentPhone": "0962118953",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-70",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng",
    "courseName": "IELTS Foundation (3.5 - 4.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-085",
    "code": "IDV-HV085",
    "name": "Vũ Bạch Thùy Linh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0942282995",
    "email": "vubachthuylinh@gmail.com",
    "parentName": "PH Vũ Bạch Thùy Linh",
    "parentPhone": "0920959053",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-63",
    "className": "Lớp 63 - IELTS Intermediate 5.5+",
    "courseName": "IELTS Intermediate (5.0 - 6.0)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-086",
    "code": "IDV-HV086",
    "name": "Bảo Lâm",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0959508522",
    "email": "baolam@gmail.com",
    "parentName": "PH Bảo Lâm",
    "parentPhone": "0936288103",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-67",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá",
    "courseName": "IELTS Intensive 6.5+ Bứt Phá",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-087",
    "code": "IDV-HV087",
    "name": "Nguyễn Khánh Huyền",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0979213222",
    "email": "nguyenkhanhhuyen@gmail.com",
    "parentName": "PH Nguyễn Khánh Huyền",
    "parentPhone": "0975882200",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-74",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+",
    "courseName": "IELTS Writing & Speaking Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-088",
    "code": "IDV-HV088",
    "name": "Hải Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0958611132",
    "email": "haianh@gmail.com",
    "parentName": "PH Hải Anh",
    "parentPhone": "0924496804",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-76",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+",
    "courseName": "IELTS Comprehensive 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-089",
    "code": "IDV-HV089",
    "name": "Minh Khuê Bùi",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0956445250",
    "email": "minhkhuebui@gmail.com",
    "parentName": "PH Minh Khuê Bùi",
    "parentPhone": "0980216823",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-77",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+",
    "courseName": "IELTS Intensive 6.5 - 7.5",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-090",
    "code": "IDV-HV090",
    "name": "Khánh Ly",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0959857842",
    "email": "khanhly@gmail.com",
    "parentName": "PH Khánh Ly",
    "parentPhone": "0911597795",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-70",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng",
    "courseName": "IELTS Foundation (3.5 - 4.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-091",
    "code": "IDV-HV091",
    "name": "Nhật Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0933237444",
    "email": "nhatanh@gmail.com",
    "parentName": "PH Nhật Anh",
    "parentPhone": "0957949697",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-70",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng",
    "courseName": "IELTS Foundation (3.5 - 4.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-092",
    "code": "IDV-HV092",
    "name": "Sơn Hải",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0942247067",
    "email": "sonhai@gmail.com",
    "parentName": "PH Sơn Hải",
    "parentPhone": "0971667380",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-64",
    "className": "Lớp 64 - IELTS Pre-Intermediate (4.5+)",
    "courseName": "IELTS Pre-Intermediate (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-093",
    "code": "IDV-HV093",
    "name": "Diễm Trang",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0979676571",
    "email": "diemtrang@gmail.com",
    "parentName": "PH Diễm Trang",
    "parentPhone": "0958582646",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-luyende",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu",
    "courseName": "Luyện Đề IELTS Thực Chiến (6.5 - 7.5+)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-094",
    "code": "IDV-HV094",
    "name": "Hoàng Trung Hải",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0954633193",
    "email": "hoangtrunghai@gmail.com",
    "parentName": "PH Hoàng Trung Hải",
    "parentPhone": "0975294658",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-luyende",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu",
    "courseName": "Luyện Đề IELTS Thực Chiến (6.5 - 7.5+)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-095",
    "code": "IDV-HV095",
    "name": "Quang Hưng",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0911105378",
    "email": "quanghung@gmail.com",
    "parentName": "PH Quang Hưng",
    "parentPhone": "0946251951",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-78",
    "className": "Lớp 78 - Luyện Đề IELTS 6.5+ Thực Chiến",
    "courseName": "Luyện Đề IELTS Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-096",
    "code": "IDV-HV096",
    "name": "Thảo Chi",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0997943781",
    "email": "thaochi@gmail.com",
    "parentName": "PH Thảo Chi",
    "parentPhone": "0926351075",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-63",
    "className": "Lớp 63 - IELTS Intermediate 5.5+",
    "courseName": "IELTS Intermediate (5.0 - 6.0)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-097",
    "code": "IDV-HV097",
    "name": "Quang Hiếu",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0923764238",
    "email": "quanghieu@gmail.com",
    "parentName": "PH Quang Hiếu",
    "parentPhone": "0920927502",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-70",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng",
    "courseName": "IELTS Foundation (3.5 - 4.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-098",
    "code": "IDV-HV098",
    "name": "Hương Linh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0970968740",
    "email": "huonglinh@gmail.com",
    "parentName": "PH Hương Linh",
    "parentPhone": "0939380808",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-luyende",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu",
    "courseName": "Luyện Đề IELTS Thực Chiến (6.5 - 7.5+)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-099",
    "code": "IDV-HV099",
    "name": "Thùy Dương",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0981185302",
    "email": "thuyduong@gmail.com",
    "parentName": "PH Thùy Dương",
    "parentPhone": "0934557327",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-71",
    "className": "Lớp 71 - IELTS Junior Master (5.0+)",
    "courseName": "IELTS Junior (4.5 - 5.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-100",
    "code": "IDV-HV100",
    "name": "Đoàn Minh Khoa",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0965453019",
    "email": "oanminhkhoa@gmail.com",
    "parentName": "PH Đoàn Minh Khoa",
    "parentPhone": "0962612980",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-78",
    "className": "Lớp 78 - Luyện Đề IELTS 6.5+ Thực Chiến",
    "courseName": "Luyện Đề IELTS Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-101",
    "code": "IDV-HV101",
    "name": "Nhi Phạm",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0989045770",
    "email": "nhipham@gmail.com",
    "parentName": "PH Nhi Phạm",
    "parentPhone": "0914852915",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-luyende",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu",
    "courseName": "Luyện Đề IELTS Thực Chiến (6.5 - 7.5+)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-102",
    "code": "IDV-HV102",
    "name": "Phương Nhi",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0940809684",
    "email": "phuongnhi@gmail.com",
    "parentName": "PH Phương Nhi",
    "parentPhone": "0989631691",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-luyende",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu",
    "courseName": "Luyện Đề IELTS Thực Chiến (6.5 - 7.5+)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-103",
    "code": "IDV-HV103",
    "name": "Thiện Nhân",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0963568779",
    "email": "thiennhan@gmail.com",
    "parentName": "PH Thiện Nhân",
    "parentPhone": "0922074224",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-79",
    "className": "Lớp 79 - IELTS Fast-Track 6.5+",
    "courseName": "IELTS Fast-Track 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-104",
    "code": "IDV-HV104",
    "name": "Bích Phương",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0966833574",
    "email": "bichphuong@gmail.com",
    "parentName": "PH Bích Phương",
    "parentPhone": "0934997348",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-79",
    "className": "Lớp 79 - IELTS Fast-Track 6.5+",
    "courseName": "IELTS Fast-Track 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-105",
    "code": "IDV-HV105",
    "name": "Phạm Hoàng Hà Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0991746048",
    "email": "phamhoanghaanh@gmail.com",
    "parentName": "PH Phạm Hoàng Hà Anh",
    "parentPhone": "0910019769",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-85",
    "className": "Lớp 85 - Luyện Thi IELTS Cấp Tốc 7.0+",
    "courseName": "IELTS Cấp Tốc Bứt Phá Band Điểm",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-106",
    "code": "IDV-HV106",
    "name": "Khánh An",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0912435230",
    "email": "khanhan@gmail.com",
    "parentName": "PH Khánh An",
    "parentPhone": "0913139097",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-84",
    "className": "Lớp 84 - IELTS Pre-Master 6.5+",
    "courseName": "IELTS Pre-Master (6.0 - 7.0)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-107",
    "code": "IDV-HV107",
    "name": "Nguyễn Hoàng Sơn",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0955025518",
    "email": "nguyenhoangson@gmail.com",
    "parentName": "PH Nguyễn Hoàng Sơn",
    "parentPhone": "0964075662",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-82",
    "className": "Lớp 82 - IELTS Target 7.0+ Cam Kết",
    "courseName": "IELTS Target 7.0+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-108",
    "code": "IDV-HV108",
    "name": "Vũ Thị Mai Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0973830508",
    "email": "vuthimaianh@gmail.com",
    "parentName": "PH Vũ Thị Mai Anh",
    "parentPhone": "0924792565",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-82",
    "className": "Lớp 82 - IELTS Target 7.0+ Cam Kết",
    "courseName": "IELTS Target 7.0+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-109",
    "code": "IDV-HV109",
    "name": "Diệp Anh",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0982781518",
    "email": "diepanh@gmail.com",
    "parentName": "PH Diệp Anh",
    "parentPhone": "0981245985",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-79",
    "className": "Lớp 79 - IELTS Fast-Track 6.5+",
    "courseName": "IELTS Fast-Track 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-110",
    "code": "IDV-HV110",
    "name": "Đinh Phúc Châu Giang",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0947148684",
    "email": "inhphucchaugiang@gmail.com",
    "parentName": "PH Đinh Phúc Châu Giang",
    "parentPhone": "0962299537",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-73",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao",
    "courseName": "IELTS Master 7.0 - 8.0+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-111",
    "code": "IDV-HV111",
    "name": "Bùi Trần Thảo Nguyên",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0929818936",
    "email": "buitranthaonguyen@gmail.com",
    "parentName": "PH Bùi Trần Thảo Nguyên",
    "parentPhone": "0999276299",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-75",
    "className": "Lớp 75 - IELTS Advanced Skills 7.0+",
    "courseName": "IELTS Advanced (6.5 - 7.5)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-112",
    "code": "IDV-HV112",
    "name": "Lê Thành Trung",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0926255258",
    "email": "lethanhtrung@gmail.com",
    "parentName": "PH Lê Thành Trung",
    "parentPhone": "0952616595",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-83",
    "className": "Lớp 83 - IELTS Academic Master",
    "courseName": "IELTS Master 7.0 - 8.0+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-113",
    "code": "IDV-HV113",
    "name": "Hoàng Mai",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0977138028",
    "email": "hoangmai@gmail.com",
    "parentName": "PH Hoàng Mai",
    "parentPhone": "0948088651",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-85",
    "className": "Lớp 85 - Luyện Thi IELTS Cấp Tốc 7.0+",
    "courseName": "IELTS Cấp Tốc Bứt Phá Band Điểm",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-114",
    "code": "IDV-HV114",
    "name": "Ngọc Quang",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0968619135",
    "email": "ngocquang@gmail.com",
    "parentName": "PH Ngọc Quang",
    "parentPhone": "0932047896",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-85",
    "className": "Lớp 85 - Luyện Thi IELTS Cấp Tốc 7.0+",
    "courseName": "IELTS Cấp Tốc Bứt Phá Band Điểm",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-115",
    "code": "IDV-HV115",
    "name": "Lê Mai Hương",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0981170240",
    "email": "lemaihuong@gmail.com",
    "parentName": "PH Lê Mai Hương",
    "parentPhone": "0998162536",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-81",
    "className": "Lớp 81 - IELTS Reading & Listening 7.5+",
    "courseName": "IELTS Reading & Listening Bứt Phá",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-116",
    "code": "IDV-HV116",
    "name": "Trịnh Thu Huyền",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0969068213",
    "email": "trinhthuhuyen@gmail.com",
    "parentName": "PH Trịnh Thu Huyền",
    "parentPhone": "0935559167",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-83",
    "className": "Lớp 83 - IELTS Academic Master",
    "courseName": "IELTS Master 7.0 - 8.0+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-117",
    "code": "IDV-HV117",
    "name": "Minh Khoa",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0995619705",
    "email": "minhkhoa@gmail.com",
    "parentName": "PH Minh Khoa",
    "parentPhone": "0936310527",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-78",
    "className": "Lớp 78 - Luyện Đề IELTS 6.5+ Thực Chiến",
    "courseName": "Luyện Đề IELTS Chuyên Sâu",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-118",
    "code": "IDV-HV118",
    "name": "Hoàng Đăng Khôi",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0949208572",
    "email": "hoangangkhoi@gmail.com",
    "parentName": "PH Hoàng Đăng Khôi",
    "parentPhone": "0939866112",
    "address": "Quận Kiến An, Hải Phòng",
    "classId": "cls-81",
    "className": "Lớp 81 - IELTS Reading & Listening 7.5+",
    "courseName": "IELTS Reading & Listening Bứt Phá",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-119",
    "code": "IDV-HV119",
    "name": "Mai Hương",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0947008822",
    "email": "maihuong@gmail.com",
    "parentName": "PH Mai Hương",
    "parentPhone": "0964620907",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-luyende",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu",
    "courseName": "Luyện Đề IELTS Thực Chiến (6.5 - 7.5+)",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-120",
    "code": "IDV-HV120",
    "name": "Ngọc Mai",
    "dob": "2008-04-12",
    "gender": "Nữ",
    "phone": "0955062070",
    "email": "ngocmai@gmail.com",
    "parentName": "PH Ngọc Mai",
    "parentPhone": "0990532090",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-82",
    "className": "Lớp 82 - IELTS Target 7.0+ Cam Kết",
    "courseName": "IELTS Target 7.0+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  },
  {
    "id": "std-121",
    "code": "IDV-HV121",
    "name": "Hoàng Minh Thu",
    "dob": "2007-09-18",
    "gender": "Nam",
    "phone": "0946347483",
    "email": "hoangminhthu@gmail.com",
    "parentName": "PH Hoàng Minh Thu",
    "parentPhone": "0924719551",
    "address": "Đường Tô Hiệu, Lê Chân, Hải Phòng",
    "classId": "cls-76",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+",
    "courseName": "IELTS Comprehensive 6.5+",
    "status": "Đang học",
    "joinDate": "2026-05-17",
    "tuitionStatus": "Đã đóng đủ",
    "balanceOwed": 0
  }
];

// =========================================================================
// LỊCH SỬ THU HỌC PHÍ IELTS ĐỢT 17/05 (171 GIAO DỊCH TỔNG 3.320 ĐƠN VỊ)
// =========================================================================
export const INITIAL_TRANSACTIONS: TuitionTransaction[] = [
  {
    "id": "tx-sheet-001",
    "receiptCode": "PT-IDV-1705-1001",
    "studentName": "Đào Anh Minh",
    "classId": "cls-73",
    "amount": 3000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (30 đơn vị/buổi)",
    "studentId": "std-001",
    "studentCode": "IDV-HV001",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-002",
    "receiptCode": "PT-IDV-1705-1002",
    "studentName": "Vũ Phương Thảo",
    "classId": "cls-59",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 59 (10 đơn vị/buổi)",
    "studentId": "std-002",
    "studentCode": "IDV-HV002",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0"
  },
  {
    "id": "tx-sheet-003",
    "receiptCode": "PT-IDV-1705-1003",
    "studentName": "Bùi Nhật Lâm",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-003",
    "studentCode": "IDV-HV003",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-004",
    "receiptCode": "PT-IDV-1705-1004",
    "studentName": "Thanh Phong",
    "classId": "cls-drill",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS Drill36 (20 đơn vị/buổi)",
    "studentId": "std-004",
    "studentCode": "IDV-HV004",
    "className": "Lớp Drill Kỹ Năng IELTS (Drill36 & Drill47)"
  },
  {
    "id": "tx-sheet-005",
    "receiptCode": "PT-IDV-1705-1005",
    "studentName": "Ánh Dương",
    "classId": "cls-73",
    "amount": 3000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (30 đơn vị/buổi)",
    "studentId": "std-005",
    "studentCode": "IDV-HV005",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-006",
    "receiptCode": "PT-IDV-1705-1006",
    "studentName": "Khánh Ngọc",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-006",
    "studentCode": "IDV-HV006",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-007",
    "receiptCode": "PT-IDV-1705-1007",
    "studentName": "Diệu Huyền",
    "classId": "cls-41",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 41 (10 đơn vị/buổi)",
    "studentId": "std-007",
    "studentCode": "IDV-HV007",
    "className": "Lớp 41 - IELTS Foundation Cơ Bản"
  },
  {
    "id": "tx-sheet-008",
    "receiptCode": "PT-IDV-1705-1008",
    "studentName": "Nguyễn Bảo Nam",
    "classId": "cls-29",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 29 (20 đơn vị/buổi)",
    "studentId": "std-008",
    "studentCode": "IDV-HV008",
    "className": "Lớp 29 - IELTS Junior Khởi Động"
  },
  {
    "id": "tx-sheet-009",
    "receiptCode": "PT-IDV-1705-1009",
    "studentName": "Vũ Bá Nguyễn Bình",
    "classId": "cls-67",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (10 đơn vị/buổi)",
    "studentId": "std-009",
    "studentCode": "IDV-HV009",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-010",
    "receiptCode": "PT-IDV-1705-1010",
    "studentName": "Nguyễn Khánh Linh",
    "classId": "cls-59",
    "amount": 3000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 59 (30 đơn vị/buổi)",
    "studentId": "std-010",
    "studentCode": "IDV-HV010",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0"
  },
  {
    "id": "tx-sheet-011",
    "receiptCode": "PT-IDV-1705-1011",
    "studentName": "Cao Ngân Hà",
    "classId": "cls-59",
    "amount": 5000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 59 (50 đơn vị/buổi)",
    "studentId": "std-011",
    "studentCode": "IDV-HV011",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0"
  },
  {
    "id": "tx-sheet-012",
    "receiptCode": "PT-IDV-1705-1012",
    "studentName": "Nam Khánh",
    "classId": "cls-67",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (20 đơn vị/buổi)",
    "studentId": "std-012",
    "studentCode": "IDV-HV012",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-013",
    "receiptCode": "PT-IDV-1705-1013",
    "studentName": "Lê Quốc An",
    "classId": "cls-73",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (10 đơn vị/buổi)",
    "studentId": "std-013",
    "studentCode": "IDV-HV013",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-014",
    "receiptCode": "PT-IDV-1705-1014",
    "studentName": "Nguyễn Phương Anh",
    "classId": "cls-59",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 59 (10 đơn vị/buổi)",
    "studentId": "std-014",
    "studentCode": "IDV-HV014",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0"
  },
  {
    "id": "tx-sheet-015",
    "receiptCode": "PT-IDV-1705-1015",
    "studentName": "Lê Hà My",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-015",
    "studentCode": "IDV-HV015",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-016",
    "receiptCode": "PT-IDV-1705-1016",
    "studentName": "Anh Kỳ",
    "classId": "cls-67",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (10 đơn vị/buổi)",
    "studentId": "std-016",
    "studentCode": "IDV-HV016",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-017",
    "receiptCode": "PT-IDV-1705-1017",
    "studentName": "Hoàng Phương Anh",
    "classId": "cls-67",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (10 đơn vị/buổi)",
    "studentId": "std-017",
    "studentCode": "IDV-HV017",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-018",
    "receiptCode": "PT-IDV-1705-1018",
    "studentName": "Tường Vi",
    "classId": "cls-58",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 58 (20 đơn vị/buổi)",
    "studentId": "std-018",
    "studentCode": "IDV-HV018",
    "className": "Lớp 58 - IELTS Giao Tiếp Học Thuật"
  },
  {
    "id": "tx-sheet-019",
    "receiptCode": "PT-IDV-1705-1019",
    "studentName": "Tú Uyên",
    "classId": "cls-76",
    "amount": 3000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (30 đơn vị/buổi)",
    "studentId": "std-019",
    "studentCode": "IDV-HV019",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-020",
    "receiptCode": "PT-IDV-1705-1020",
    "studentName": "Minh Thúy",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-020",
    "studentCode": "IDV-HV020",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-021",
    "receiptCode": "PT-IDV-1705-1021",
    "studentName": "Hùng Anh",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-021",
    "studentCode": "IDV-HV021",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-022",
    "receiptCode": "PT-IDV-1705-1022",
    "studentName": "Hoàng Phương Anh",
    "classId": "cls-58",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 58 (10 đơn vị/buổi)",
    "studentId": "std-017",
    "studentCode": "IDV-HV017",
    "className": "Lớp 58 - IELTS Giao Tiếp Học Thuật"
  },
  {
    "id": "tx-sheet-023",
    "receiptCode": "PT-IDV-1705-1023",
    "studentName": "Châu Giang",
    "classId": "cls-73",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (20 đơn vị/buổi)",
    "studentId": "std-022",
    "studentCode": "IDV-HV022",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-024",
    "receiptCode": "PT-IDV-1705-1024",
    "studentName": "Đỗ Phương Thảo",
    "classId": "cls-drill",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS Drill47 (20 đơn vị/buổi)",
    "studentId": "std-023",
    "studentCode": "IDV-HV023",
    "className": "Lớp Drill Kỹ Năng IELTS (Drill36 & Drill47)"
  },
  {
    "id": "tx-sheet-025",
    "receiptCode": "PT-IDV-1705-1025",
    "studentName": "Ngọc Diệp",
    "classId": "cls-59",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 59 (20 đơn vị/buổi)",
    "studentId": "std-024",
    "studentCode": "IDV-HV024",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0"
  },
  {
    "id": "tx-sheet-026",
    "receiptCode": "PT-IDV-1705-1026",
    "studentName": "Võ Đức Anh",
    "classId": "cls-74",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (20 đơn vị/buổi)",
    "studentId": "std-025",
    "studentCode": "IDV-HV025",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-027",
    "receiptCode": "PT-IDV-1705-1027",
    "studentName": "Minh An",
    "classId": "cls-70",
    "amount": 3000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 70 (30 đơn vị/buổi)",
    "studentId": "std-026",
    "studentCode": "IDV-HV026",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng"
  },
  {
    "id": "tx-sheet-028",
    "receiptCode": "PT-IDV-1705-1028",
    "studentName": "Bạch Thùy Linh",
    "classId": "cls-63",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 63 (10 đơn vị/buổi)",
    "studentId": "std-027",
    "studentCode": "IDV-HV027",
    "className": "Lớp 63 - IELTS Intermediate 5.5+"
  },
  {
    "id": "tx-sheet-029",
    "receiptCode": "PT-IDV-1705-1029",
    "studentName": "Đức Lộc",
    "classId": "cls-63",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 63 (20 đơn vị/buổi)",
    "studentId": "std-028",
    "studentCode": "IDV-HV028",
    "className": "Lớp 63 - IELTS Intermediate 5.5+"
  },
  {
    "id": "tx-sheet-030",
    "receiptCode": "PT-IDV-1705-1030",
    "studentName": "Đăng Khánh",
    "classId": "cls-74",
    "amount": 3000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (30 đơn vị/buổi)",
    "studentId": "std-029",
    "studentCode": "IDV-HV029",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-031",
    "receiptCode": "PT-IDV-1705-1031",
    "studentName": "Trần Ngọc Đức",
    "classId": "cls-73",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (10 đơn vị/buổi)",
    "studentId": "std-030",
    "studentCode": "IDV-HV030",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-032",
    "receiptCode": "PT-IDV-1705-1032",
    "studentName": "Nguyễn Bảo Châu",
    "classId": "cls-67",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (20 đơn vị/buổi)",
    "studentId": "std-031",
    "studentCode": "IDV-HV031",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-033",
    "receiptCode": "PT-IDV-1705-1033",
    "studentName": "Vũ Quang Minh",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-032",
    "studentCode": "IDV-HV032",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-034",
    "receiptCode": "PT-IDV-1705-1034",
    "studentName": "Đào Dũng",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-033",
    "studentCode": "IDV-HV033",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-035",
    "receiptCode": "PT-IDV-1705-1035",
    "studentName": "Đặng Ngọc",
    "classId": "cls-drill",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS drill (20 đơn vị/buổi)",
    "studentId": "std-034",
    "studentCode": "IDV-HV034",
    "className": "Lớp Drill Kỹ Năng IELTS (Drill36 & Drill47)"
  },
  {
    "id": "tx-sheet-036",
    "receiptCode": "PT-IDV-1705-1036",
    "studentName": "Vũ Thu Hà",
    "classId": "cls-67",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (20 đơn vị/buổi)",
    "studentId": "std-035",
    "studentCode": "IDV-HV035",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-037",
    "receiptCode": "PT-IDV-1705-1037",
    "studentName": "Linh Chi",
    "classId": "cls-67",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (10 đơn vị/buổi)",
    "studentId": "std-036",
    "studentCode": "IDV-HV036",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-038",
    "receiptCode": "PT-IDV-1705-1038",
    "studentName": "Nguyễn Đình Bảo Lâm",
    "classId": "cls-67",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (10 đơn vị/buổi)",
    "studentId": "std-037",
    "studentCode": "IDV-HV037",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-039",
    "receiptCode": "PT-IDV-1705-1039",
    "studentName": "Thanh Nhàn",
    "classId": "cls-drill",
    "amount": 5000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS drill (50 đơn vị/buổi)",
    "studentId": "std-038",
    "studentCode": "IDV-HV038",
    "className": "Lớp Drill Kỹ Năng IELTS (Drill36 & Drill47)"
  },
  {
    "id": "tx-sheet-040",
    "receiptCode": "PT-IDV-1705-1040",
    "studentName": "Lê Quang Đức Anh",
    "classId": "cls-74",
    "amount": 6000000,
    "paymentMethod": "Tiền mặt tại quầy",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 63,74 (60 đơn vị/buổi)",
    "studentId": "std-039",
    "studentCode": "IDV-HV039",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-041",
    "receiptCode": "PT-IDV-1705-1041",
    "studentName": "Đình Tiền",
    "classId": "cls-70",
    "amount": 3000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 70 (30 đơn vị/buổi)",
    "studentId": "std-040",
    "studentCode": "IDV-HV040",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng"
  },
  {
    "id": "tx-sheet-042",
    "receiptCode": "PT-IDV-1705-1042",
    "studentName": "Lê Minh Anh",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS IDV (10 đơn vị/buổi)",
    "studentId": "std-041",
    "studentCode": "IDV-HV041",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-043",
    "receiptCode": "PT-IDV-1705-1043",
    "studentName": "Nguyễn Minh Phương",
    "classId": "cls-70",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 70 (10 đơn vị/buổi)",
    "studentId": "std-042",
    "studentCode": "IDV-HV042",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng"
  },
  {
    "id": "tx-sheet-044",
    "receiptCode": "PT-IDV-1705-1044",
    "studentName": "Phạm Đức Sơn Hải",
    "classId": "cls-64",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 64 (10 đơn vị/buổi)",
    "studentId": "std-043",
    "studentCode": "IDV-HV043",
    "className": "Lớp 64 - IELTS Pre-Intermediate (4.5+)"
  },
  {
    "id": "tx-sheet-045",
    "receiptCode": "PT-IDV-1705-1045",
    "studentName": "Triệu Hoàng Mai",
    "classId": "cls-74",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (10 đơn vị/buổi)",
    "studentId": "std-044",
    "studentCode": "IDV-HV044",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-046",
    "receiptCode": "PT-IDV-1705-1046",
    "studentName": "Gia Khải",
    "classId": "cls-71",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 71 (10 đơn vị/buổi)",
    "studentId": "std-045",
    "studentCode": "IDV-HV045",
    "className": "Lớp 71 - IELTS Junior Master (5.0+)"
  },
  {
    "id": "tx-sheet-047",
    "receiptCode": "PT-IDV-1705-1047",
    "studentName": "Tô Kim Ngân",
    "classId": "cls-59",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 59 (10 đơn vị/buổi)",
    "studentId": "std-046",
    "studentCode": "IDV-HV046",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0"
  },
  {
    "id": "tx-sheet-048",
    "receiptCode": "PT-IDV-1705-1048",
    "studentName": "Anh Kỳ",
    "classId": "cls-67",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (20 đơn vị/buổi)",
    "studentId": "std-016",
    "studentCode": "IDV-HV016",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-049",
    "receiptCode": "PT-IDV-1705-1049",
    "studentName": "Ánh Dương",
    "classId": "cls-73",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (10 đơn vị/buổi)",
    "studentId": "std-005",
    "studentCode": "IDV-HV005",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-050",
    "receiptCode": "PT-IDV-1705-1050",
    "studentName": "Ngân Anh",
    "classId": "cls-73",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (10 đơn vị/buổi)",
    "studentId": "std-047",
    "studentCode": "IDV-HV047",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-051",
    "receiptCode": "PT-IDV-1705-1051",
    "studentName": "Phương Linh",
    "classId": "cls-71",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 71 (10 đơn vị/buổi)",
    "studentId": "std-048",
    "studentCode": "IDV-HV048",
    "className": "Lớp 71 - IELTS Junior Master (5.0+)"
  },
  {
    "id": "tx-sheet-052",
    "receiptCode": "PT-IDV-1705-1052",
    "studentName": "Đình Tiền",
    "classId": "cls-70",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 70 (10 đơn vị/buổi)",
    "studentId": "std-040",
    "studentCode": "IDV-HV040",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng"
  },
  {
    "id": "tx-sheet-053",
    "receiptCode": "PT-IDV-1705-1053",
    "studentName": "Uyên Nhi",
    "classId": "cls-65",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 65 (20 đơn vị/buổi)",
    "studentId": "std-049",
    "studentCode": "IDV-HV049",
    "className": "Lớp 65 - IELTS Giao Tiếp & Speaking (5.0+)"
  },
  {
    "id": "tx-sheet-054",
    "receiptCode": "PT-IDV-1705-1054",
    "studentName": "Thanh Dương",
    "classId": "cls-71",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 71 (10 đơn vị/buổi)",
    "studentId": "std-050",
    "studentCode": "IDV-HV050",
    "className": "Lớp 71 - IELTS Junior Master (5.0+)"
  },
  {
    "id": "tx-sheet-055",
    "receiptCode": "PT-IDV-1705-1055",
    "studentName": "Đào Anh Minh",
    "classId": "cls-73",
    "amount": 3000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (30 đơn vị/buổi)",
    "studentId": "std-001",
    "studentCode": "IDV-HV001",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-056",
    "receiptCode": "PT-IDV-1705-1056",
    "studentName": "Gia Khải",
    "classId": "cls-71",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 71 (20 đơn vị/buổi)",
    "studentId": "std-045",
    "studentCode": "IDV-HV045",
    "className": "Lớp 71 - IELTS Junior Master (5.0+)"
  },
  {
    "id": "tx-sheet-057",
    "receiptCode": "PT-IDV-1705-1057",
    "studentName": "Thu Quyên",
    "classId": "cls-73",
    "amount": 5000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (50 đơn vị/buổi)",
    "studentId": "std-051",
    "studentCode": "IDV-HV051",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-058",
    "receiptCode": "PT-IDV-1705-1058",
    "studentName": "Võ Đức Anh",
    "classId": "cls-74",
    "amount": 3000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (30 đơn vị/buổi)",
    "studentId": "std-025",
    "studentCode": "IDV-HV025",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-059",
    "receiptCode": "PT-IDV-1705-1059",
    "studentName": "Ngọc Hà",
    "classId": "cls-66",
    "amount": 4000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 66 (40 đơn vị/buổi)",
    "studentId": "std-052",
    "studentCode": "IDV-HV052",
    "className": "Lớp 66 - IELTS Intermediate 5.5+"
  },
  {
    "id": "tx-sheet-060",
    "receiptCode": "PT-IDV-1705-1060",
    "studentName": "Bảo Trân",
    "classId": "cls-74",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (10 đơn vị/buổi)",
    "studentId": "std-053",
    "studentCode": "IDV-HV053",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-061",
    "receiptCode": "PT-IDV-1705-1061",
    "studentName": "Gia Bảo",
    "classId": "cls-76",
    "amount": 7000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (70 đơn vị/buổi)",
    "studentId": "std-054",
    "studentCode": "IDV-HV054",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-062",
    "receiptCode": "PT-IDV-1705-1062",
    "studentName": "Phạm Trang",
    "classId": "cls-67",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (10 đơn vị/buổi)",
    "studentId": "std-055",
    "studentCode": "IDV-HV055",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-063",
    "receiptCode": "PT-IDV-1705-1063",
    "studentName": "Mai Anh",
    "classId": "cls-66",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 66 (10 đơn vị/buổi)",
    "studentId": "std-056",
    "studentCode": "IDV-HV056",
    "className": "Lớp 66 - IELTS Intermediate 5.5+"
  },
  {
    "id": "tx-sheet-064",
    "receiptCode": "PT-IDV-1705-1064",
    "studentName": "Linh Chi",
    "classId": "cls-67",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (20 đơn vị/buổi)",
    "studentId": "std-036",
    "studentCode": "IDV-HV036",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-065",
    "receiptCode": "PT-IDV-1705-1065",
    "studentName": "Ngân Hà",
    "classId": "cls-59",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 59 (20 đơn vị/buổi)",
    "studentId": "std-057",
    "studentCode": "IDV-HV057",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0"
  },
  {
    "id": "tx-sheet-066",
    "receiptCode": "PT-IDV-1705-1066",
    "studentName": "Hải Nam",
    "classId": "cls-50",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 50 (10 đơn vị/buổi)",
    "studentId": "std-058",
    "studentCode": "IDV-HV058",
    "className": "Lớp 50 - IELTS Nền Tảng 4.0"
  },
  {
    "id": "tx-sheet-067",
    "receiptCode": "PT-IDV-1705-1067",
    "studentName": "Nhật",
    "classId": "cls-76",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (20 đơn vị/buổi)",
    "studentId": "std-059",
    "studentCode": "IDV-HV059",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-068",
    "receiptCode": "PT-IDV-1705-1068",
    "studentName": "Triệu Hoàng Mai",
    "classId": "cls-74",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (10 đơn vị/buổi)",
    "studentId": "std-044",
    "studentCode": "IDV-HV044",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-069",
    "receiptCode": "PT-IDV-1705-1069",
    "studentName": "Thanh Huyền",
    "classId": "cls-41",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 41 (20 đơn vị/buổi)",
    "studentId": "std-060",
    "studentCode": "IDV-HV060",
    "className": "Lớp 41 - IELTS Foundation Cơ Bản"
  },
  {
    "id": "tx-sheet-070",
    "receiptCode": "PT-IDV-1705-1070",
    "studentName": "Châu Giang",
    "classId": "cls-73",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (20 đơn vị/buổi)",
    "studentId": "std-022",
    "studentCode": "IDV-HV022",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-071",
    "receiptCode": "PT-IDV-1705-1071",
    "studentName": "Nguyễn Nhung",
    "classId": "cls-77",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 77 (10 đơn vị/buổi)",
    "studentId": "std-061",
    "studentCode": "IDV-HV061",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+"
  },
  {
    "id": "tx-sheet-072",
    "receiptCode": "PT-IDV-1705-1072",
    "studentName": "Đăng Khánh",
    "classId": "cls-74",
    "amount": 5000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (50 đơn vị/buổi)",
    "studentId": "std-029",
    "studentCode": "IDV-HV029",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-073",
    "receiptCode": "PT-IDV-1705-1073",
    "studentName": "Hà Anh",
    "classId": "cls-74",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (10 đơn vị/buổi)",
    "studentId": "std-062",
    "studentCode": "IDV-HV062",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-074",
    "receiptCode": "PT-IDV-1705-1074",
    "studentName": "Nguyễn Khánh Linh",
    "classId": "cls-74",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (10 đơn vị/buổi)",
    "studentId": "std-010",
    "studentCode": "IDV-HV010",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-075",
    "receiptCode": "PT-IDV-1705-1075",
    "studentName": "Hải Yến",
    "classId": "cls-74",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (20 đơn vị/buổi)",
    "studentId": "std-063",
    "studentCode": "IDV-HV063",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-076",
    "receiptCode": "PT-IDV-1705-1076",
    "studentName": "Bảo Châu",
    "classId": "cls-67",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (10 đơn vị/buổi)",
    "studentId": "std-064",
    "studentCode": "IDV-HV064",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-077",
    "receiptCode": "PT-IDV-1705-1077",
    "studentName": "Linh Chi",
    "classId": "cls-67",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (10 đơn vị/buổi)",
    "studentId": "std-036",
    "studentCode": "IDV-HV036",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-078",
    "receiptCode": "PT-IDV-1705-1078",
    "studentName": "Minh Thúy",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-020",
    "studentCode": "IDV-HV020",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-079",
    "receiptCode": "PT-IDV-1705-1079",
    "studentName": "Trần Thùy Dương",
    "classId": "cls-71",
    "amount": 15000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 71 (150 đơn vị/buổi)",
    "studentId": "std-065",
    "studentCode": "IDV-HV065",
    "className": "Lớp 71 - IELTS Junior Master (5.0+)"
  },
  {
    "id": "tx-sheet-080",
    "receiptCode": "PT-IDV-1705-1080",
    "studentName": "Trần Trung Hiếu",
    "classId": "cls-77",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 77 (10 đơn vị/buổi)",
    "studentId": "std-066",
    "studentCode": "IDV-HV066",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+"
  },
  {
    "id": "tx-sheet-081",
    "receiptCode": "PT-IDV-1705-1081",
    "studentName": "Mỹ Hường",
    "classId": "cls-59",
    "amount": 4000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 59 (40 đơn vị/buổi)",
    "studentId": "std-067",
    "studentCode": "IDV-HV067",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0"
  },
  {
    "id": "tx-sheet-082",
    "receiptCode": "PT-IDV-1705-1082",
    "studentName": "Đào khánh Ngọc",
    "classId": "cls-77",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 77 (10 đơn vị/buổi)",
    "studentId": "std-068",
    "studentCode": "IDV-HV068",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+"
  },
  {
    "id": "tx-sheet-083",
    "receiptCode": "PT-IDV-1705-1083",
    "studentName": "Phạm Quỳnh Anh",
    "classId": "cls-61",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 61 (10 đơn vị/buổi)",
    "studentId": "std-069",
    "studentCode": "IDV-HV069",
    "className": "Lớp 61 - IELTS Thiếu Niên 5.0+"
  },
  {
    "id": "tx-sheet-084",
    "receiptCode": "PT-IDV-1705-1084",
    "studentName": "Tuấn Dũng",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-070",
    "studentCode": "IDV-HV070",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-085",
    "receiptCode": "PT-IDV-1705-1085",
    "studentName": "Thảo Quyên",
    "classId": "cls-70",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 70 (10 đơn vị/buổi)",
    "studentId": "std-071",
    "studentCode": "IDV-HV071",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng"
  },
  {
    "id": "tx-sheet-086",
    "receiptCode": "PT-IDV-1705-1086",
    "studentName": "Uyên Nhi",
    "classId": "cls-29",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 29 (10 đơn vị/buổi)",
    "studentId": "std-049",
    "studentCode": "IDV-HV049",
    "className": "Lớp 29 - IELTS Junior Khởi Động"
  },
  {
    "id": "tx-sheet-087",
    "receiptCode": "PT-IDV-1705-1087",
    "studentName": "Lê Thị Tâm",
    "classId": "cls-luyende",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS luyện đề (10 đơn vị/buổi)",
    "studentId": "std-072",
    "studentCode": "IDV-HV072",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu"
  },
  {
    "id": "tx-sheet-088",
    "receiptCode": "PT-IDV-1705-1088",
    "studentName": "Vũ Phương Thảo",
    "classId": "cls-63",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 63 (10 đơn vị/buổi)",
    "studentId": "std-002",
    "studentCode": "IDV-HV002",
    "className": "Lớp 63 - IELTS Intermediate 5.5+"
  },
  {
    "id": "tx-sheet-089",
    "receiptCode": "PT-IDV-1705-1089",
    "studentName": "Trung Đinh",
    "classId": "cls-luyende",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS luyện đề (10 đơn vị/buổi)",
    "studentId": "std-073",
    "studentCode": "IDV-HV073",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu"
  },
  {
    "id": "tx-sheet-090",
    "receiptCode": "PT-IDV-1705-1090",
    "studentName": "Minh Ngọc",
    "classId": "cls-74",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (20 đơn vị/buổi)",
    "studentId": "std-074",
    "studentCode": "IDV-HV074",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-091",
    "receiptCode": "PT-IDV-1705-1091",
    "studentName": "Kim Ngân",
    "classId": "cls-59",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 59 (10 đơn vị/buổi)",
    "studentId": "std-075",
    "studentCode": "IDV-HV075",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0"
  },
  {
    "id": "tx-sheet-092",
    "receiptCode": "PT-IDV-1705-1092",
    "studentName": "Nhật Lâm",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-076",
    "studentCode": "IDV-HV076",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-093",
    "receiptCode": "PT-IDV-1705-1093",
    "studentName": "Đỗ Phương Anh",
    "classId": "cls-77",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 77 (10 đơn vị/buổi)",
    "studentId": "std-077",
    "studentCode": "IDV-HV077",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+"
  },
  {
    "id": "tx-sheet-094",
    "receiptCode": "PT-IDV-1705-1094",
    "studentName": "Trần Anh Thư",
    "classId": "cls-77",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 77 (10 đơn vị/buổi)",
    "studentId": "std-078",
    "studentCode": "IDV-HV078",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+"
  },
  {
    "id": "tx-sheet-095",
    "receiptCode": "PT-IDV-1705-1095",
    "studentName": "Khánh Ngọc",
    "classId": "cls-77",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 77 (20 đơn vị/buổi)",
    "studentId": "std-006",
    "studentCode": "IDV-HV006",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+"
  },
  {
    "id": "tx-sheet-096",
    "receiptCode": "PT-IDV-1705-1096",
    "studentName": "Dương Thùy Linh",
    "classId": "cls-74",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (10 đơn vị/buổi)",
    "studentId": "std-079",
    "studentCode": "IDV-HV079",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-097",
    "receiptCode": "PT-IDV-1705-1097",
    "studentName": "Khánh Linh",
    "classId": "cls-74",
    "amount": 3000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (30 đơn vị/buổi)",
    "studentId": "std-080",
    "studentCode": "IDV-HV080",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-098",
    "receiptCode": "PT-IDV-1705-1098",
    "studentName": "Ngô Hoàng Anh",
    "classId": "cls-66",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 66 (10 đơn vị/buổi)",
    "studentId": "std-081",
    "studentCode": "IDV-HV081",
    "className": "Lớp 66 - IELTS Intermediate 5.5+"
  },
  {
    "id": "tx-sheet-099",
    "receiptCode": "PT-IDV-1705-1099",
    "studentName": "Thắng Vũ",
    "classId": "cls-74",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (20 đơn vị/buổi)",
    "studentId": "std-082",
    "studentCode": "IDV-HV082",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-100",
    "receiptCode": "PT-IDV-1705-1100",
    "studentName": "Ngọc Đức",
    "classId": "cls-74",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (20 đơn vị/buổi)",
    "studentId": "std-083",
    "studentCode": "IDV-HV083",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-101",
    "receiptCode": "PT-IDV-1705-1101",
    "studentName": "Ánh Dương",
    "classId": "cls-73",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (20 đơn vị/buổi)",
    "studentId": "std-005",
    "studentCode": "IDV-HV005",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-102",
    "receiptCode": "PT-IDV-1705-1102",
    "studentName": "Minh Thúy",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-020",
    "studentCode": "IDV-HV020",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-103",
    "receiptCode": "PT-IDV-1705-1103",
    "studentName": "Nguyễn Việt Anh",
    "classId": "cls-70",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 70 (10 đơn vị/buổi)",
    "studentId": "std-084",
    "studentCode": "IDV-HV084",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng"
  },
  {
    "id": "tx-sheet-104",
    "receiptCode": "PT-IDV-1705-1104",
    "studentName": "Vũ Bạch Thùy Linh",
    "classId": "cls-63",
    "amount": 8000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 63 (80 đơn vị/buổi)",
    "studentId": "std-085",
    "studentCode": "IDV-HV085",
    "className": "Lớp 63 - IELTS Intermediate 5.5+"
  },
  {
    "id": "tx-sheet-105",
    "receiptCode": "PT-IDV-1705-1105",
    "studentName": "Khánh Ngọc",
    "classId": "cls-76",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (20 đơn vị/buổi)",
    "studentId": "std-006",
    "studentCode": "IDV-HV006",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-106",
    "receiptCode": "PT-IDV-1705-1106",
    "studentName": "Bảo Lâm",
    "classId": "cls-67",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (10 đơn vị/buổi)",
    "studentId": "std-086",
    "studentCode": "IDV-HV086",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-107",
    "receiptCode": "PT-IDV-1705-1107",
    "studentName": "Hoàng Phương Anh",
    "classId": "cls-67",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (10 đơn vị/buổi)",
    "studentId": "std-017",
    "studentCode": "IDV-HV017",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-108",
    "receiptCode": "PT-IDV-1705-1108",
    "studentName": "Mỹ Hường",
    "classId": "cls-59",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 59 (20 đơn vị/buổi)",
    "studentId": "std-067",
    "studentCode": "IDV-HV067",
    "className": "Lớp 59 - IELTS Pre-Intermediate 5.0"
  },
  {
    "id": "tx-sheet-109",
    "receiptCode": "PT-IDV-1705-1109",
    "studentName": "Lê Hà My",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-015",
    "studentCode": "IDV-HV015",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-110",
    "receiptCode": "PT-IDV-1705-1110",
    "studentName": "Nguyễn Khánh Huyền",
    "classId": "cls-74",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (10 đơn vị/buổi)",
    "studentId": "std-087",
    "studentCode": "IDV-HV087",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-111",
    "receiptCode": "PT-IDV-1705-1111",
    "studentName": "Lê Quang Đức Anh",
    "classId": "cls-74",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 74 (10 đơn vị/buổi)",
    "studentId": "std-039",
    "studentCode": "IDV-HV039",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-112",
    "receiptCode": "PT-IDV-1705-1112",
    "studentName": "Vũ Quang Minh",
    "classId": "cls-64",
    "amount": 5000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 64 (50 đơn vị/buổi)",
    "studentId": "std-032",
    "studentCode": "IDV-HV032",
    "className": "Lớp 64 - IELTS Pre-Intermediate (4.5+)"
  },
  {
    "id": "tx-sheet-113",
    "receiptCode": "PT-IDV-1705-1113",
    "studentName": "Hải Anh",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-088",
    "studentCode": "IDV-HV088",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-114",
    "receiptCode": "PT-IDV-1705-1114",
    "studentName": "Ánh Dương",
    "classId": "cls-73",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (10 đơn vị/buổi)",
    "studentId": "std-005",
    "studentCode": "IDV-HV005",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-115",
    "receiptCode": "PT-IDV-1705-1115",
    "studentName": "Minh Khuê Bùi",
    "classId": "cls-77",
    "amount": 4000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 77 (40 đơn vị/buổi)",
    "studentId": "std-089",
    "studentCode": "IDV-HV089",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+"
  },
  {
    "id": "tx-sheet-116",
    "receiptCode": "PT-IDV-1705-1116",
    "studentName": "Trần Anh Thư",
    "classId": "cls-73",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (20 đơn vị/buổi)",
    "studentId": "std-078",
    "studentCode": "IDV-HV078",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-117",
    "receiptCode": "PT-IDV-1705-1117",
    "studentName": "Khánh Ly",
    "classId": "cls-70",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 70 (20 đơn vị/buổi)",
    "studentId": "std-090",
    "studentCode": "IDV-HV090",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng"
  },
  {
    "id": "tx-sheet-118",
    "receiptCode": "PT-IDV-1705-1118",
    "studentName": "Nhật Anh",
    "classId": "cls-70",
    "amount": 6000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 70 (60 đơn vị/buổi)",
    "studentId": "std-091",
    "studentCode": "IDV-HV091",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng"
  },
  {
    "id": "tx-sheet-119",
    "receiptCode": "PT-IDV-1705-1119",
    "studentName": "Sơn Hải",
    "classId": "cls-64",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 64 (10 đơn vị/buổi)",
    "studentId": "std-092",
    "studentCode": "IDV-HV092",
    "className": "Lớp 64 - IELTS Pre-Intermediate (4.5+)"
  },
  {
    "id": "tx-sheet-120",
    "receiptCode": "PT-IDV-1705-1120",
    "studentName": "Diễm Trang",
    "classId": "cls-luyende",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS luyện đề (10 đơn vị/buổi)",
    "studentId": "std-093",
    "studentCode": "IDV-HV093",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu"
  },
  {
    "id": "tx-sheet-121",
    "receiptCode": "PT-IDV-1705-1121",
    "studentName": "Hoàng Trung Hải",
    "classId": "cls-luyende",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS luyện đề (20 đơn vị/buổi)",
    "studentId": "std-094",
    "studentCode": "IDV-HV094",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu"
  },
  {
    "id": "tx-sheet-122",
    "receiptCode": "PT-IDV-1705-1122",
    "studentName": "Trần Anh Thư",
    "classId": "cls-73",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (10 đơn vị/buổi)",
    "studentId": "std-078",
    "studentCode": "IDV-HV078",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-123",
    "receiptCode": "PT-IDV-1705-1123",
    "studentName": "Lê Quang Đức Anh",
    "classId": "cls-74",
    "amount": 8000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 63,74 (80 đơn vị/buổi)",
    "studentId": "std-039",
    "studentCode": "IDV-HV039",
    "className": "Lớp 74 - IELTS Writing & Speaking Pro 7.0+"
  },
  {
    "id": "tx-sheet-124",
    "receiptCode": "PT-IDV-1705-1124",
    "studentName": "Quang Hưng",
    "classId": "cls-78",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 78 (10 đơn vị/buổi)",
    "studentId": "std-095",
    "studentCode": "IDV-HV095",
    "className": "Lớp 78 - Luyện Đề IELTS 6.5+ Thực Chiến"
  },
  {
    "id": "tx-sheet-125",
    "receiptCode": "PT-IDV-1705-1125",
    "studentName": "Thảo Chi",
    "classId": "cls-63",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 63 (20 đơn vị/buổi)",
    "studentId": "std-096",
    "studentCode": "IDV-HV096",
    "className": "Lớp 63 - IELTS Intermediate 5.5+"
  },
  {
    "id": "tx-sheet-126",
    "receiptCode": "PT-IDV-1705-1126",
    "studentName": "Quang Hiếu",
    "classId": "cls-70",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 70 (10 đơn vị/buổi)",
    "studentId": "std-097",
    "studentCode": "IDV-HV097",
    "className": "Lớp 70 - IELTS Foundation Nền Tảng"
  },
  {
    "id": "tx-sheet-127",
    "receiptCode": "PT-IDV-1705-1127",
    "studentName": "Hương Linh",
    "classId": "cls-luyende",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS luyện đề (20 đơn vị/buổi)",
    "studentId": "std-098",
    "studentCode": "IDV-HV098",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu"
  },
  {
    "id": "tx-sheet-128",
    "receiptCode": "PT-IDV-1705-1128",
    "studentName": "Thùy Dương",
    "classId": "cls-71",
    "amount": 5000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 71 (50 đơn vị/buổi)",
    "studentId": "std-099",
    "studentCode": "IDV-HV099",
    "className": "Lớp 71 - IELTS Junior Master (5.0+)"
  },
  {
    "id": "tx-sheet-129",
    "receiptCode": "PT-IDV-1705-1129",
    "studentName": "Linh Chi",
    "classId": "cls-67",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (10 đơn vị/buổi)",
    "studentId": "std-036",
    "studentCode": "IDV-HV036",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-130",
    "receiptCode": "PT-IDV-1705-1130",
    "studentName": "Đoàn Minh Khoa",
    "classId": "cls-78",
    "amount": 4000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 78 (40 đơn vị/buổi)",
    "studentId": "std-100",
    "studentCode": "IDV-HV100",
    "className": "Lớp 78 - Luyện Đề IELTS 6.5+ Thực Chiến"
  },
  {
    "id": "tx-sheet-131",
    "receiptCode": "PT-IDV-1705-1131",
    "studentName": "Đào Khánh Ngọc",
    "classId": "cls-77",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 77 (10 đơn vị/buổi)",
    "studentId": "std-unknown",
    "studentCode": "IDV-HV999",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+"
  },
  {
    "id": "tx-sheet-132",
    "receiptCode": "PT-IDV-1705-1132",
    "studentName": "Nhi Phạm",
    "classId": "cls-luyende",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS luyện đề (10 đơn vị/buổi)",
    "studentId": "std-101",
    "studentCode": "IDV-HV101",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu"
  },
  {
    "id": "tx-sheet-133",
    "receiptCode": "PT-IDV-1705-1133",
    "studentName": "Phương Linh",
    "classId": "cls-71",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 71 (10 đơn vị/buổi)",
    "studentId": "std-048",
    "studentCode": "IDV-HV048",
    "className": "Lớp 71 - IELTS Junior Master (5.0+)"
  },
  {
    "id": "tx-sheet-134",
    "receiptCode": "PT-IDV-1705-1134",
    "studentName": "Phương Nhi",
    "classId": "cls-luyende",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS luyện đề (20 đơn vị/buổi)",
    "studentId": "std-102",
    "studentCode": "IDV-HV102",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu"
  },
  {
    "id": "tx-sheet-135",
    "receiptCode": "PT-IDV-1705-1135",
    "studentName": "Sơn Hải",
    "classId": "cls-64",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 64 (10 đơn vị/buổi)",
    "studentId": "std-092",
    "studentCode": "IDV-HV092",
    "className": "Lớp 64 - IELTS Pre-Intermediate (4.5+)"
  },
  {
    "id": "tx-sheet-136",
    "receiptCode": "PT-IDV-1705-1136",
    "studentName": "Thiện Nhân",
    "classId": "cls-79",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 79 (10 đơn vị/buổi)",
    "studentId": "std-103",
    "studentCode": "IDV-HV103",
    "className": "Lớp 79 - IELTS Fast-Track 6.5+"
  },
  {
    "id": "tx-sheet-137",
    "receiptCode": "PT-IDV-1705-1137",
    "studentName": "Bảo Trân",
    "classId": "cls-84",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 84 (10 đơn vị/buổi)",
    "studentId": "std-053",
    "studentCode": "IDV-HV053",
    "className": "Lớp 84 - IELTS Pre-Master 6.5+"
  },
  {
    "id": "tx-sheet-138",
    "receiptCode": "PT-IDV-1705-1138",
    "studentName": "Bích Phương",
    "classId": "cls-79",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 79 (20 đơn vị/buổi)",
    "studentId": "std-104",
    "studentCode": "IDV-HV104",
    "className": "Lớp 79 - IELTS Fast-Track 6.5+"
  },
  {
    "id": "tx-sheet-139",
    "receiptCode": "PT-IDV-1705-1139",
    "studentName": "Phạm Hoàng Hà Anh",
    "classId": "cls-85",
    "amount": 3000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 85 (30 đơn vị/buổi)",
    "studentId": "std-105",
    "studentCode": "IDV-HV105",
    "className": "Lớp 85 - Luyện Thi IELTS Cấp Tốc 7.0+"
  },
  {
    "id": "tx-sheet-140",
    "receiptCode": "PT-IDV-1705-1140",
    "studentName": "Khánh An",
    "classId": "cls-84",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 84 (10 đơn vị/buổi)",
    "studentId": "std-106",
    "studentCode": "IDV-HV106",
    "className": "Lớp 84 - IELTS Pre-Master 6.5+"
  },
  {
    "id": "tx-sheet-141",
    "receiptCode": "PT-IDV-1705-1141",
    "studentName": "Nguyễn Hoàng Sơn",
    "classId": "cls-82",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 82 (20 đơn vị/buổi)",
    "studentId": "std-107",
    "studentCode": "IDV-HV107",
    "className": "Lớp 82 - IELTS Target 7.0+ Cam Kết"
  },
  {
    "id": "tx-sheet-142",
    "receiptCode": "PT-IDV-1705-1142",
    "studentName": "Vũ Thu Hà",
    "classId": "cls-67",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (10 đơn vị/buổi)",
    "studentId": "std-035",
    "studentCode": "IDV-HV035",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-143",
    "receiptCode": "PT-IDV-1705-1143",
    "studentName": "Đỗ Phương Anh",
    "classId": "cls-77",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 77 (10 đơn vị/buổi)",
    "studentId": "std-077",
    "studentCode": "IDV-HV077",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+"
  },
  {
    "id": "tx-sheet-144",
    "receiptCode": "PT-IDV-1705-1144",
    "studentName": "Vũ Thị Mai Anh",
    "classId": "cls-82",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 82 (10 đơn vị/buổi)",
    "studentId": "std-108",
    "studentCode": "IDV-HV108",
    "className": "Lớp 82 - IELTS Target 7.0+ Cam Kết"
  },
  {
    "id": "tx-sheet-145",
    "receiptCode": "PT-IDV-1705-1145",
    "studentName": "Diệp Anh",
    "classId": "cls-79",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 79 (10 đơn vị/buổi)",
    "studentId": "std-109",
    "studentCode": "IDV-HV109",
    "className": "Lớp 79 - IELTS Fast-Track 6.5+"
  },
  {
    "id": "tx-sheet-146",
    "receiptCode": "PT-IDV-1705-1146",
    "studentName": "Đinh Phúc Châu Giang",
    "classId": "cls-73",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (10 đơn vị/buổi)",
    "studentId": "std-110",
    "studentCode": "IDV-HV110",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-147",
    "receiptCode": "PT-IDV-1705-1147",
    "studentName": "Bùi Trần Thảo Nguyên",
    "classId": "cls-75",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 75 (10 đơn vị/buổi)",
    "studentId": "std-111",
    "studentCode": "IDV-HV111",
    "className": "Lớp 75 - IELTS Advanced Skills 7.0+"
  },
  {
    "id": "tx-sheet-148",
    "receiptCode": "PT-IDV-1705-1148",
    "studentName": "Lê Thành Trung",
    "classId": "cls-83",
    "amount": 3000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 83 (30 đơn vị/buổi)",
    "studentId": "std-112",
    "studentCode": "IDV-HV112",
    "className": "Lớp 83 - IELTS Academic Master"
  },
  {
    "id": "tx-sheet-149",
    "receiptCode": "PT-IDV-1705-1149",
    "studentName": "Đào Khánh Ngọc",
    "classId": "cls-77",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 77 (10 đơn vị/buổi)",
    "studentId": "std-unknown",
    "studentCode": "IDV-HV999",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+"
  },
  {
    "id": "tx-sheet-150",
    "receiptCode": "PT-IDV-1705-1150",
    "studentName": "Hoàng Mai",
    "classId": "cls-85",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 85 (20 đơn vị/buổi)",
    "studentId": "std-113",
    "studentCode": "IDV-HV113",
    "className": "Lớp 85 - Luyện Thi IELTS Cấp Tốc 7.0+"
  },
  {
    "id": "tx-sheet-151",
    "receiptCode": "PT-IDV-1705-1151",
    "studentName": "Ngọc Quang",
    "classId": "cls-85",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 85 (20 đơn vị/buổi)",
    "studentId": "std-114",
    "studentCode": "IDV-HV114",
    "className": "Lớp 85 - Luyện Thi IELTS Cấp Tốc 7.0+"
  },
  {
    "id": "tx-sheet-152",
    "receiptCode": "PT-IDV-1705-1152",
    "studentName": "Đỗ Phương Anh",
    "classId": "cls-77",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 77 (10 đơn vị/buổi)",
    "studentId": "std-077",
    "studentCode": "IDV-HV077",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+"
  },
  {
    "id": "tx-sheet-153",
    "receiptCode": "PT-IDV-1705-1153",
    "studentName": "Trần Anh Thư",
    "classId": "cls-77",
    "amount": 3000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 77 (30 đơn vị/buổi)",
    "studentId": "std-078",
    "studentCode": "IDV-HV078",
    "className": "Lớp 77 - IELTS Intensive Skills 7.0+"
  },
  {
    "id": "tx-sheet-154",
    "receiptCode": "PT-IDV-1705-1154",
    "studentName": "Bích Phương",
    "classId": "cls-79",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 79 (20 đơn vị/buổi)",
    "studentId": "std-104",
    "studentCode": "IDV-HV104",
    "className": "Lớp 79 - IELTS Fast-Track 6.5+"
  },
  {
    "id": "tx-sheet-155",
    "receiptCode": "PT-IDV-1705-1155",
    "studentName": "Lê Mai Hương",
    "classId": "cls-81",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 81 (10 đơn vị/buổi)",
    "studentId": "std-115",
    "studentCode": "IDV-HV115",
    "className": "Lớp 81 - IELTS Reading & Listening 7.5+"
  },
  {
    "id": "tx-sheet-156",
    "receiptCode": "PT-IDV-1705-1156",
    "studentName": "Phương Nhi",
    "classId": "cls-luyende",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS luyện đề (20 đơn vị/buổi)",
    "studentId": "std-102",
    "studentCode": "IDV-HV102",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu"
  },
  {
    "id": "tx-sheet-157",
    "receiptCode": "PT-IDV-1705-1157",
    "studentName": "Nguyễn Bảo Châu",
    "classId": "cls-67",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (20 đơn vị/buổi)",
    "studentId": "std-031",
    "studentCode": "IDV-HV031",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-158",
    "receiptCode": "PT-IDV-1705-1158",
    "studentName": "Trịnh Thu Huyền",
    "classId": "cls-83",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 83 (20 đơn vị/buổi)",
    "studentId": "std-116",
    "studentCode": "IDV-HV116",
    "className": "Lớp 83 - IELTS Academic Master"
  },
  {
    "id": "tx-sheet-159",
    "receiptCode": "PT-IDV-1705-1159",
    "studentName": "Minh Thúy",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-020",
    "studentCode": "IDV-HV020",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-160",
    "receiptCode": "PT-IDV-1705-1160",
    "studentName": "Minh Khoa",
    "classId": "cls-78",
    "amount": 3000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 78 (30 đơn vị/buổi)",
    "studentId": "std-117",
    "studentCode": "IDV-HV117",
    "className": "Lớp 78 - Luyện Đề IELTS 6.5+ Thực Chiến"
  },
  {
    "id": "tx-sheet-161",
    "receiptCode": "PT-IDV-1705-1161",
    "studentName": "Lê Hà My",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-015",
    "studentCode": "IDV-HV015",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-162",
    "receiptCode": "PT-IDV-1705-1162",
    "studentName": "Châu Giang",
    "classId": "cls-73",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (20 đơn vị/buổi)",
    "studentId": "std-022",
    "studentCode": "IDV-HV022",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-163",
    "receiptCode": "PT-IDV-1705-1163",
    "studentName": "Bảo Lâm",
    "classId": "cls-67",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (10 đơn vị/buổi)",
    "studentId": "std-086",
    "studentCode": "IDV-HV086",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-164",
    "receiptCode": "PT-IDV-1705-1164",
    "studentName": "Hoàng Đăng Khôi",
    "classId": "cls-81",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 81 (10 đơn vị/buổi)",
    "studentId": "std-118",
    "studentCode": "IDV-HV118",
    "className": "Lớp 81 - IELTS Reading & Listening 7.5+"
  },
  {
    "id": "tx-sheet-165",
    "receiptCode": "PT-IDV-1705-1165",
    "studentName": "Mai Hương",
    "classId": "cls-luyende",
    "amount": 2000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS luyện đề (20 đơn vị/buổi)",
    "studentId": "std-119",
    "studentCode": "IDV-HV119",
    "className": "Lớp Luyện Đề IELTS Chuyên Sâu"
  },
  {
    "id": "tx-sheet-166",
    "receiptCode": "PT-IDV-1705-1166",
    "studentName": "Ngân Anh",
    "classId": "cls-73",
    "amount": 5000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 73 (50 đơn vị/buổi)",
    "studentId": "std-047",
    "studentCode": "IDV-HV047",
    "className": "Lớp 73 - IELTS Master 7.5+ Đỉnh Cao"
  },
  {
    "id": "tx-sheet-167",
    "receiptCode": "PT-IDV-1705-1167",
    "studentName": "Ngọc Mai",
    "classId": "cls-82",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 82 (10 đơn vị/buổi)",
    "studentId": "std-120",
    "studentCode": "IDV-HV120",
    "className": "Lớp 82 - IELTS Target 7.0+ Cam Kết"
  },
  {
    "id": "tx-sheet-168",
    "receiptCode": "PT-IDV-1705-1168",
    "studentName": "Hoàng Minh Thu",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-121",
    "studentCode": "IDV-HV121",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-169",
    "receiptCode": "PT-IDV-1705-1169",
    "studentName": "Vũ Thu Hà",
    "classId": "cls-67",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 67 (10 đơn vị/buổi)",
    "studentId": "std-035",
    "studentCode": "IDV-HV035",
    "className": "Lớp 67 - IELTS Intensive 6.5+ Bứt Phá"
  },
  {
    "id": "tx-sheet-170",
    "receiptCode": "PT-IDV-1705-1170",
    "studentName": "Minh Thúy",
    "classId": "cls-76",
    "amount": 1000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS 76 (10 đơn vị/buổi)",
    "studentId": "std-020",
    "studentCode": "IDV-HV020",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  },
  {
    "id": "tx-sheet-171",
    "receiptCode": "PT-IDV-1705-1171",
    "studentName": "Gia Bảo",
    "classId": "cls-76",
    "amount": 12000000,
    "paymentMethod": "Chuyển khoản QR",
    "transactionType": "Thu học phí",
    "date": "2026-05-17",
    "collectorName": "Mai Tuyết Trinh (Thủ quỹ IDV)",
    "status": "Thành công",
    "notes": "Học phí đợt 17/05 - Lớp IELTS IDV (120 đơn vị/buổi)",
    "studentId": "std-054",
    "studentCode": "IDV-HV054",
    "className": "Lớp 76 - IELTS Comprehensive 6.5+"
  }
];

// =========================================================================
// ĐỘI NGŨ 8 GIÁNG VIÊN CHUẨN IDV
// =========================================================================
export const INITIAL_TEACHERS: Teacher[] = [
  {
    "id": "tch-tamvuong",
    "code": "GV-IDV01",
    "name": "Tâm Vương",
    "type": "Việt Nam",
    "nationality": "Việt Nam 🇻🇳",
    "email": "tamvuong710@gmail.com",
    "phone": "0901 234 567",
    "specialty": "IELTS 8.0+ (Speaking & Writing Masterclass)",
    "degrees": "Thạc sĩ TESOL, B.A Ngôn ngữ Anh ĐH Ngoại Ngữ",
    "activeClassesCount": 4,
    "hourlyRate": 450000,
    "rating": 4.95,
    "status": "Đang giảng dạy"
  },
  {
    "id": "tch-minhtam",
    "code": "GV-IDV02",
    "name": "Hoàng Minh Tâm",
    "type": "Việt Nam",
    "nationality": "Việt Nam 🇻🇳",
    "email": "hoangminhtam51203@gmail.com",
    "phone": "0902 345 678",
    "specialty": "IELTS 8.0 (Listening 9.0 & Reading 9.0), Luyện đề thực chiến",
    "degrees": "Cử nhân Sư phạm Tiếng Anh, Chứng chỉ CELTA",
    "activeClassesCount": 4,
    "hourlyRate": 450000,
    "rating": 4.93,
    "status": "Đang giảng dạy"
  },
  {
    "id": "tch-trangnguyen",
    "code": "GV-IDV03",
    "name": "Trang Nguyễn",
    "type": "Việt Nam",
    "nationality": "Việt Nam 🇻🇳",
    "email": "t.nguyen8790@gmail.com",
    "phone": "0903 456 789",
    "specialty": "IELTS Foundation & Pre-Intermediate, Phát âm & Phản xạ B2",
    "degrees": "Cử nhân Ngoại ngữ ĐH Hà Nội, TESOL Quốc tế",
    "activeClassesCount": 3,
    "hourlyRate": 420000,
    "rating": 4.92,
    "status": "Đang giảng dạy"
  },
  {
    "id": "tch-thomnguyen",
    "code": "GV-IDV04",
    "name": "Thơm Nguyễn",
    "type": "Việt Nam",
    "nationality": "Việt Nam 🇻🇳",
    "email": "thomthom1294@gmail.com",
    "phone": "0904 567 890",
    "specialty": "IELTS 8.0, Ngữ pháp học thuật & Kỹ năng Đọc hiểu Skimming/Scanning",
    "degrees": "Thạc sĩ Giảng dạy Tiếng Anh, Cử nhân ĐHSP",
    "activeClassesCount": 4,
    "hourlyRate": 450000,
    "rating": 4.96,
    "status": "Đang giảng dạy"
  },
  {
    "id": "tch-diepdang",
    "code": "GV-IDV05",
    "name": "Diệp Đặng",
    "type": "Việt Nam",
    "nationality": "Việt Nam 🇻🇳",
    "email": "dangdiep725@gmail.com",
    "phone": "0905 678 901",
    "specialty": "IELTS 8.0+, Intensive Writing Task 1 & Task 2, Sửa bài 1-1",
    "degrees": "Cử nhân Xuất sắc Sư phạm Tiếng Anh, IELTS 8.0",
    "activeClassesCount": 3,
    "hourlyRate": 450000,
    "rating": 4.94,
    "status": "Đang giảng dạy"
  },
  {
    "id": "tch-vungoc",
    "code": "GV-IDV06",
    "name": "Vũ Ngọc",
    "type": "Việt Nam",
    "nationality": "Việt Nam 🇻🇳",
    "email": "vungoc23122002@gmail.com",
    "phone": "0906 789 012",
    "specialty": "IELTS Foundation & Khởi động Junior, Phương pháp ghi nhớ từ vựng",
    "degrees": "Cử nhân Ngôn ngữ Anh, Chứng chỉ Giảng dạy Quốc tế TKT",
    "activeClassesCount": 3,
    "hourlyRate": 420000,
    "rating": 4.91,
    "status": "Đang giảng dạy"
  },
  {
    "id": "tch-duongvu",
    "code": "GV-IDV07",
    "name": "Dương Vũ",
    "type": "Việt Nam",
    "nationality": "Việt Nam 🇻🇳",
    "email": "ieltsduongvu5@gmail.com",
    "phone": "0798 934 698",
    "specialty": "Founder & Academic Director, IELTS 8.5 (Writing 8.5 & Speaking 8.5)",
    "degrees": "Thạc sĩ TESOL (Anh Quốc), Giám đốc Đào tạo IDV",
    "activeClassesCount": 5,
    "hourlyRate": 600000,
    "rating": 5.0,
    "status": "Đang giảng dạy"
  },
  {
    "id": "tch-huyenchi",
    "code": "GV-IDV08",
    "name": "Huyền Chi",
    "type": "Việt Nam",
    "nationality": "Việt Nam 🇻🇳",
    "email": "work.huyenchi@gmail.com",
    "phone": "0908 901 234",
    "specialty": "IELTS Speaking Fluency & Academic Pronunciation, Giao tiếp nâng cao",
    "degrees": "Cử nhân ĐH Sư Phạm Ngoại Ngữ, Chứng chỉ TESOL",
    "activeClassesCount": 3,
    "salaryCalcType": "fixed_per_session",
    "fixedRate": 600000,
    "hourlyRate": 600000,
    "rating": 4.93,
    "status": "Đang giảng dạy"
  },
  {
    "id": "tch-hailong",
    "code": "GV-IDV09",
    "name": "Nguyễn Hải Long",
    "type": "Việt Nam",
    "nationality": "Việt Nam 🇻🇳",
    "email": "Nguyenhailong0507@gmail.com",
    "phone": "0909 123 456",
    "specialty": "IELTS Writing Task 1 & 2, Listening & Mock Test",
    "degrees": "Cử nhân Ngôn ngữ Anh, IELTS 8.0",
    "activeClassesCount": 2,
    "salaryCalcType": "fixed_per_session",
    "fixedRate": 500000,
    "hourlyRate": 500000,
    "rating": 4.92,
    "status": "Đang giảng dạy"
  },
  {
    "id": "tch-vuthuy",
    "code": "GV-IDV12",
    "name": "Cô Vũ Thùy",
    "type": "Việt Nam",
    "nationality": "Việt Nam 🇻🇳",
    "email": "vuthingan19990365161299@gmail.com",
    "phone": "0906 789 012",
    "specialty": "IELTS Foundation",
    "degrees": "Cử nhân Ngoại ngữ",
    "activeClassesCount": 1,
    "hourlyRate": 400000,
    "rating": 5.0,
    "status": "Đang giảng dạy"
  },
  {
    "id": "tch-trunghieu",
    "code": "GV-IDV11",
    "name": "Đàm Trung Hiếu",
    "type": "Việt Nam",
    "nationality": "Việt Nam 🇻🇳",
    "email": "damtrunghieu1803@gmail.com",
    "phone": "0911 345 678",
    "specialty": "IELTS Listening & Speaking Chuyên Sâu, Phản Xạ Kép",
    "degrees": "Cử nhân Ngôn ngữ Anh, Chứng chỉ Giảng dạy Quốc tế",
    "activeClassesCount": 2,
    "salaryCalcType": "fixed_per_session",
    "fixedRate": 500000,
    "hourlyRate": 500000,
    "rating": 4.91,
    "status": "Đang giảng dạy"
  }
];

export const INITIAL_LEADS: LeadAdmission[] = [];
export const INITIAL_PLACEMENT_TESTS: PlacementTest[] = [
  {
    id: 'pt-001',
    code: 'PT-2026-001',
    candidateName: 'Đào Anh Minh',
    dob: '2008-04-12',
    gender: 'Nữ',
    phone: '0944316107',
    email: 'aoanhminh@gmail.com',
    parentName: 'PH Đào Anh Minh',
    parentPhone: '0937117707',
    address: 'Quận Kiến An, Hải Phòng',
    testDate: '2026-05-10',
    evaluatorName: 'Thầy Dương Vũ',
    listeningScore: 7.5,
    readingScore: 7.5,
    writingScore: 7.0,
    speakingScore: 7.5,
    overallScore: 7.5,
    targetLevel: 'IELTS 8.0+',
    recommendedCourse: 'IELTS Master 7.0 - 8.0+',
    recommendedClassId: 'cls-73',
    assignedClassId: 'cls-73',
    assignedClassName: 'Lớp 73 - IELTS Master 7.5+ Đỉnh Cao',
    status: 'Đã nhập học',
    comment: 'Tư duy phản xạ rất tốt, ngữ pháp vững, từ vựng học thuật phong phú. Đủ điều kiện vào lớp Master 7.5+.',
    sourceType: 'form_online',
    submittedAt: '2026-05-10T14:30:00.000Z',
    preferredCampus: 'Cơ sở 1 - Tô Hiệu (Hải Phòng)',
    preferredSchedule: 'Thứ 2 - Thứ 5 (Ca 2: 19:45 - 21:30)',
    testAnswers: {
      vocab: { q1: 'B', q2: 'C', q3: 'A', q4: 'D', q5: 'B' },
      listening: { q1: 'A', q2: 'D', q3: 'C', q4: 'B' },
      reading: { q1: 'True', q2: 'False', q3: 'Not Given', q4: 'True' },
      writingSentences: { q1: 'Accurate complex sentence', q2: 'High band vocabulary' },
      writingParagraph: 'Technology has revolutionized contemporary education by facilitating accessible remote learning and interactive multimedia engagement.',
    },
  },
  {
    id: 'pt-002',
    code: 'PT-2026-002',
    candidateName: 'Vũ Phương Thảo',
    dob: '2008-04-12',
    gender: 'Nữ',
    phone: '0995847133',
    email: 'vuphuongthao@gmail.com',
    parentName: 'PH Vũ Phương Thảo',
    parentPhone: '0979341694',
    address: 'Quận Kiến An, Hải Phòng',
    testDate: '2026-05-11',
    evaluatorName: 'Cô Tâm Vương',
    listeningScore: 5.0,
    readingScore: 5.5,
    writingScore: 5.0,
    speakingScore: 4.5,
    overallScore: 5.0,
    targetLevel: 'IELTS 6.5+',
    recommendedCourse: 'IELTS Pre-Intermediate (4.5 - 5.5)',
    recommendedClassId: 'cls-59',
    assignedClassId: 'cls-59',
    assignedClassName: 'Lớp 59 - IELTS Pre-Intermediate 5.0',
    status: 'Đã nhập học',
    comment: 'Cần củng cố phản xạ nghe nối âm và phát âm đuôi -s/ed. Ngữ pháp câu đơn và câu ghép tốt.',
    sourceType: 'form_online',
    submittedAt: '2026-05-11T09:15:00.000Z',
    preferredCampus: 'Cơ sở 1 - Tô Hiệu (Hải Phòng)',
    preferredSchedule: 'Thứ 3 - Thứ 6 (Ca 1: 18:00 - 19:45)',
  },
  {
    id: 'pt-003',
    code: 'PT-2026-003',
    candidateName: 'Bùi Nhật Lâm',
    dob: '2007-09-18',
    gender: 'Nam',
    phone: '0972461818',
    email: 'buinhatlam@gmail.com',
    parentName: 'PH Bùi Nhật Lâm',
    parentPhone: '0963979133',
    address: 'Đường Tô Hiệu, Lê Chân, Hải Phòng',
    testDate: '2026-05-12',
    evaluatorName: 'Thầy Dương Vũ',
    listeningScore: 6.5,
    readingScore: 7.0,
    writingScore: 6.0,
    speakingScore: 6.5,
    overallScore: 6.5,
    targetLevel: 'IELTS 7.5+',
    recommendedCourse: 'IELTS Comprehensive 6.5+',
    recommendedClassId: 'cls-76',
    assignedClassId: 'cls-76',
    assignedClassName: 'Lớp 76 - IELTS Comprehensive 6.5+',
    status: 'Đã nhập học',
    comment: 'Kỹ năng Đọc và Nghe rất tốt, kỹ năng Viết cần trau chuốt thêm các dạng Task 2 Cohesion & Coherence.',
    sourceType: 'manual',
    submittedAt: '2026-05-12T16:00:00.000Z',
  },
  {
    id: 'pt-004',
    code: 'PT-2026-004',
    candidateName: 'Thanh Phong',
    dob: '2007-09-18',
    gender: 'Nam',
    phone: '0982972863',
    email: 'thanhphong@gmail.com',
    parentName: 'PH Thanh Phong',
    parentPhone: '0947977817',
    address: 'Quận Kiến An, Hải Phòng',
    testDate: '2026-05-13',
    evaluatorName: 'Cô Minh Tâm',
    listeningScore: 6.0,
    readingScore: 6.5,
    writingScore: 6.0,
    speakingScore: 6.0,
    overallScore: 6.0,
    targetLevel: 'IELTS 7.0+',
    recommendedCourse: 'IELTS Skill Drills (Nghe - Nói - Đọc - Viết)',
    recommendedClassId: 'cls-drill',
    assignedClassId: 'cls-drill',
    assignedClassName: 'Lớp Drill Kỹ Năng IELTS (Drill36 & Drill47)',
    status: 'Đã nhập học',
    comment: 'Học viên có nền tảng vững, phù hợp tham gia lớp Drill luyện đề tăng tốc 4 kỹ năng.',
    sourceType: 'form_online',
    submittedAt: '2026-05-13T10:20:00.000Z',
  },
  {
    id: 'pt-005',
    code: 'PT-2026-005',
    candidateName: 'Ánh Dương',
    dob: '2007-09-18',
    gender: 'Nam',
    phone: '0953407495',
    email: 'anhduong@gmail.com',
    parentName: 'PH Ánh Dương',
    parentPhone: '0918208664',
    address: 'Quận Kiến An, Hải Phòng',
    testDate: '2026-05-14',
    evaluatorName: 'Thầy Dương Vũ',
    listeningScore: 7.5,
    readingScore: 8.0,
    writingScore: 7.0,
    speakingScore: 7.0,
    overallScore: 7.5,
    targetLevel: 'IELTS 8.0+',
    recommendedCourse: 'IELTS Master 7.0 - 8.0+',
    recommendedClassId: 'cls-73',
    assignedClassId: 'cls-73',
    assignedClassName: 'Lớp 73 - IELTS Master 7.5+ Đỉnh Cao',
    status: 'Đã nhập học',
    comment: 'Thí sinh có năng lực ngôn ngữ xuất sắc, khả năng lập luận sắc bén trong phần Viết và Nói.',
    sourceType: 'form_online',
    submittedAt: '2026-05-14T11:00:00.000Z',
  },
  {
    id: 'pt-006',
    code: 'PT-2026-006',
    candidateName: 'Khánh Ngọc',
    dob: '2008-04-12',
    gender: 'Nữ',
    phone: '0919409140',
    email: 'khanhngoc@gmail.com',
    parentName: 'PH Khánh Ngọc',
    parentPhone: '0925599589',
    address: 'Đường Tô Hiệu, Lê Chân, Hải Phòng',
    testDate: '2026-05-14',
    evaluatorName: 'Cô Tâm Vương',
    listeningScore: 6.5,
    readingScore: 6.5,
    writingScore: 6.5,
    speakingScore: 6.5,
    overallScore: 6.5,
    targetLevel: 'IELTS 7.5+',
    recommendedCourse: 'IELTS Comprehensive 6.5+',
    recommendedClassId: 'cls-76',
    assignedClassId: 'cls-76',
    assignedClassName: 'Lớp 76 - IELTS Comprehensive 6.5+',
    status: 'Đã nhập học',
    comment: 'Các kỹ năng đồng đều ở mức 6.5. Cần bổ sung các collocations nâng cao để bứt phá lên 7.5+.',
    sourceType: 'form_online',
    submittedAt: '2026-05-14T15:30:00.000Z',
  },
  {
    id: 'pt-007',
    code: 'PT-2026-007',
    candidateName: 'Diệu Huyền',
    dob: '2008-04-12',
    gender: 'Nữ',
    phone: '0940876563',
    email: 'dieuhuyen@gmail.com',
    parentName: 'PH Diệu Huyền',
    parentPhone: '0924515131',
    address: 'Đường Tô Hiệu, Lê Chân, Hải Phòng',
    testDate: '2026-05-15',
    evaluatorName: 'Cô Minh Tâm',
    listeningScore: 4.0,
    readingScore: 4.5,
    writingScore: 4.0,
    speakingScore: 4.0,
    overallScore: 4.0,
    targetLevel: 'IELTS 5.5+',
    recommendedCourse: 'IELTS Foundation (3.5 - 4.5)',
    recommendedClassId: 'cls-41',
    assignedClassId: 'cls-41',
    assignedClassName: 'Lớp 41 - IELTS Foundation Cơ Bản',
    status: 'Đã nhập học',
    comment: 'Cần xây dựng lại nền tảng ngữ pháp cơ bản, thì và câu ghép trước khi luyện đề.',
    sourceType: 'form_online',
    submittedAt: '2026-05-15T08:45:00.000Z',
  },
  {
    id: 'pt-008',
    code: 'PT-2026-008',
    candidateName: 'Nguyễn Bảo Nam',
    dob: '2007-09-18',
    gender: 'Nam',
    phone: '0911063983',
    email: 'nguyenbaonam@gmail.com',
    parentName: 'PH Nguyễn Bảo Nam',
    parentPhone: '0996455962',
    address: 'Quận Kiến An, Hải Phòng',
    testDate: '2026-05-15',
    evaluatorName: 'Thầy Dương Vũ',
    listeningScore: 3.5,
    readingScore: 4.0,
    writingScore: 3.5,
    speakingScore: 3.5,
    overallScore: 3.5,
    targetLevel: 'IELTS 5.0+',
    recommendedCourse: 'IELTS Junior Foundation (3.0 - 4.0)',
    recommendedClassId: 'cls-29',
    assignedClassId: 'cls-29',
    assignedClassName: 'Lớp 29 - IELTS Junior Khởi Động',
    status: 'Đã nhập học',
    comment: 'Thí sinh mới bắt đầu tiếp xúc IELTS, cần lộ trình Junior bám sát ngữ pháp & phát âm.',
    sourceType: 'manual',
    submittedAt: '2026-05-15T14:10:00.000Z',
  },
  {
    id: 'pt-009',
    code: 'PT-2026-009',
    candidateName: 'Vũ Bá Nguyễn Bình',
    dob: '2007-09-18',
    gender: 'Nam',
    phone: '0953058332',
    email: 'vubanguyenbinh@gmail.com',
    parentName: 'PH Vũ Bá Nguyễn Bình',
    parentPhone: '0921346652',
    address: 'Quận Kiến An, Hải Phòng',
    testDate: '2026-05-16',
    evaluatorName: 'Thầy Dương Vũ',
    listeningScore: 6.5,
    readingScore: 6.5,
    writingScore: 6.0,
    speakingScore: 6.5,
    overallScore: 6.5,
    targetLevel: 'IELTS 7.5+',
    recommendedCourse: 'IELTS Intensive 6.5+ Bứt Phá',
    recommendedClassId: 'cls-67',
    assignedClassId: 'cls-67',
    assignedClassName: 'Lớp 67 - IELTS Intensive 6.5+ Bứt Phá',
    status: 'Đã nhập học',
    comment: 'Khả năng bắt từ khóa nghe tốt, ngữ điệu nói tự nhiên. Phù hợp lớp Intensive 6.5+.',
    sourceType: 'form_online',
    submittedAt: '2026-05-16T16:20:00.000Z',
  },
  {
    id: 'pt-010',
    code: 'PT-2026-010',
    candidateName: 'Nguyễn Thị Ngọc Mai',
    dob: '2008-08-20',
    gender: 'Nữ',
    phone: '0983456789',
    email: 'ngocmai.nguyen@gmail.com',
    parentName: 'Bác Nguyễn Văn Thành',
    parentPhone: '0983112233',
    address: 'Lê Chân, Hải Phòng',
    testDate: '2026-05-18',
    evaluatorName: 'Thầy Dương Vũ',
    listeningScore: 6.0,
    readingScore: 6.5,
    writingScore: 5.5,
    speakingScore: 6.0,
    overallScore: 6.0,
    targetLevel: 'IELTS 6.5+',
    recommendedCourse: 'IELTS Comprehensive 6.5+',
    status: 'Đã có kết quả',
    comment: 'Đã hoàn thành bài test online. Kết quả đạt 6.0 overall, khuyên học lớp IELTS Comprehensive 6.5+.',
    sourceType: 'form_online',
    submittedAt: '2026-05-18T10:45:00.000Z',
    preferredCampus: 'Cơ sở 1 - Tô Hiệu (Hải Phòng)',
    preferredSchedule: 'Thứ 2 - Thứ 5 (Ca 1: 18:00 - 19:45)',
    testAnswers: {
      vocab: { q1: 'A', q2: 'B', q3: 'C', q4: 'A', q5: 'D' },
      listening: { q1: 'B', q2: 'C', q3: 'A', q4: 'D' },
      reading: { q1: 'True', q2: 'False', q3: 'True', q4: 'Not Given' },
      writingSentences: { q1: 'Although technology provides advantages, it brings challenges.', q2: 'Educational reforms play a pivotal role.' },
      writingParagraph: 'In my perspective, digital education has completely transformed traditional learning methods across developing countries.',
    },
  },
  {
    id: 'pt-011',
    code: 'PT-2026-011',
    candidateName: 'Trần Quốc Huy',
    dob: '2007-11-05',
    gender: 'Nam',
    phone: '0976543210',
    email: 'quochuy.tran@gmail.com',
    parentName: 'Cô Lê Thị Loan',
    parentPhone: '0976998877',
    address: 'Ngô Quyền, Hải Phòng',
    testDate: '2026-05-18',
    evaluatorName: 'Cô Tâm Vương',
    listeningScore: 5.5,
    readingScore: 5.5,
    writingScore: 5.0,
    speakingScore: 5.5,
    overallScore: 5.5,
    targetLevel: 'IELTS 6.5+',
    recommendedCourse: 'IELTS Pre-Intermediate (4.5 - 5.5)',
    status: 'Đã có kết quả',
    comment: 'Từ vựng ổn định, cần cải thiện phát âm ending sounds và liên từ nối.',
    sourceType: 'form_online',
    submittedAt: '2026-05-18T14:12:00.000Z',
    preferredCampus: 'Cơ sở 1 - Tô Hiệu (Hải Phòng)',
    preferredSchedule: 'Thứ 3 - Thứ 6 (Ca 2: 19:45 - 21:30)',
  },
  {
    id: 'pt-012',
    code: 'PT-2026-012',
    candidateName: 'Đặng Thảo Nhi',
    dob: '2009-02-14',
    gender: 'Nữ',
    phone: '0965432198',
    email: 'thaonhi.dang@gmail.com',
    parentName: 'Chú Đặng Quốc Hưng',
    parentPhone: '0965113355',
    address: 'Hồng Bàng, Hải Phòng',
    testDate: '2026-05-19',
    evaluatorName: 'Thầy Dương Vũ',
    listeningScore: 7.0,
    readingScore: 7.5,
    writingScore: 6.5,
    speakingScore: 7.0,
    overallScore: 7.0,
    targetLevel: 'IELTS 7.5+',
    recommendedCourse: 'IELTS Master 7.0 - 8.0+',
    status: 'Đã có kết quả',
    comment: 'Điểm test rất cao, nền tảng xuất sắc, đề xuất vào thẳng lớp IELTS Master 7.0 - 8.0+.',
    sourceType: 'form_online',
    submittedAt: '2026-05-19T09:30:00.000Z',
  }
];
export const INITIAL_TRIAL_STUDENTS: TrialStudent[] = [];
export const INITIAL_ATTENDANCE: AttendanceRecord[] = [];
export const INITIAL_CONTACT_NOTES: ContactBookNote[] = [
  {
    id: 'cbn-1',
    studentId: 'st-59-1',
    studentName: 'Vũ Thị Minh Hạnh',
    classId: 'cls-59',
    className: 'Lớp 59 - IELTS Pre-Intermediate 5.0',
    date: '2026-05-18',
    lessonTopic: 'Unit 5: Environmental Issues - Reading & Vocabulary',
    attitude: 'Hăng hái, tập trung',
    homeworkStatus: 'Hoàn thành 100%',
    quizletStatus: 'Đã học',
    teacherFeedback: 'Em phát âm rõ ràng, hoàn thành 100% list từ vựng Quizlet và làm bài đọc đạt 34/40 câu (Band 7.5). Cần duy trì phong độ!',
    sentVia: 'Zalo & App Phụ Huynh',
    parentAcknowledged: true,
  },
  {
    id: 'cbn-2',
    studentId: 'st-59-2',
    studentName: 'Trần Đức Minh',
    classId: 'cls-59',
    className: 'Lớp 59 - IELTS Pre-Intermediate 5.0',
    date: '2026-05-18',
    lessonTopic: 'Unit 5: Environmental Issues - Reading & Vocabulary',
    attitude: 'Khá tốt',
    homeworkStatus: 'Hoàn thành một phần',
    quizletStatus: 'Chưa học',
    teacherFeedback: 'Em chưa học từ vựng Quizlet bài 5 và còn thiếu 1 bài tập đọc về nhà. Đề nghị phụ huynh nhắc nhở con ôn từ vựng trước buổi học tới.',
    sentVia: 'Zalo & App Phụ Huynh',
    parentAcknowledged: false,
  }
];
export const INITIAL_EXAMS: ExamScore[] = [];
export const INITIAL_KPIS: KPITarget[] = [];
export const INITIAL_INVENTORY: InventoryItem[] = [];

// =========================================================================
// LỘ TRÌNH ĐÀO TẠO 4 KHÓA CHUẨN IDV (PRE -> INSPIRE -> DESIRE -> LUYỆN ĐỀ DRILL)
// =========================================================================
export const INITIAL_COURSES: CurriculumCourse[] = [
  {
    "id": "crs-pre",
    "code": "IDV-PRE",
    "name": "PRE",
    "level": "Khóa 1 (Foundation 3.5 - 4.5)",
    "durationMonths": 4,
    "totalSessions": 32,
    "tuitionFee": 5000000,
    "targetAudience": "Học sinh xây dựng nền tảng từ vựng, ngữ pháp, phát âm và làm quen bài thi IELTS",
    "description": "32 buổi • Buổi 32 kiểm tra cuối khóa • Nghỉ 1 buổi trước khi lên Khóa 2 (INSPIRE) • Học phí: 5.000.000 đ."
  },
  {
    "id": "crs-inspire",
    "code": "IDV-INSPIRE",
    "name": "INSPIRE",
    "level": "Khóa 2 (Pre-Intermediate 4.5 - 5.5)",
    "durationMonths": 4,
    "totalSessions": 33,
    "tuitionFee": 5200000,
    "targetAudience": "Học sinh rèn luyện phương pháp 4 kỹ năng Nghe - Nói - Đọc - Viết",
    "description": "33 buổi • Buổi 32 & 33 kiểm tra cuối khóa • Nghỉ 1 buổi trước khi lên Khóa 3 (DESIRE) • Học phí: 5.200.000 đ."
  },
  {
    "id": "crs-desire",
    "code": "IDV-DESIRE",
    "name": "DESIRE",
    "level": "Khóa 3 (Intermediate 5.5 - 6.5)",
    "durationMonths": 4,
    "totalSessions": 33,
    "tuitionFee": 5600000,
    "targetAudience": "Học sinh nâng band chuyên sâu Writing Task 1 & 2, phản xạ Speaking lưu loát",
    "description": "33 buổi • Buổi 32 & 33 kiểm tra cuối khóa • Nghỉ 1 buổi trước khi lên Khóa 4 (LUYỆN ĐỀ DRILL) • Học phí: 5.600.000 đ."
  },
  {
    "id": "crs-drill",
    "code": "IDV-DRILL",
    "name": "Lớp Drill",
    "level": "Khóa 4 (Intensive Drill 6.5 - 7.5+)",
    "durationMonths": 4,
    "totalSessions": 32,
    "tuitionFee": 3200000,
    "targetAudience": "Luyện đề thi thật Forecast mới nhất, bứt phá band điểm thi quốc tế",
    "description": "32 buổi • Buổi 31 & 32 kiểm tra cuối khóa • Sẵn sàng đi thi IELTS quốc tế • Học phí: 3.200.000 đ."
  }
];

export const INITIAL_MILESTONE_EVALUATIONS: MilestoneEvaluationReport[] = [
  {
    id: 'ms-001',
    studentId: 'std-035',
    studentName: 'Vũ Thu Hà',
    studentCode: 'IDV-HV035',
    classId: 'cls-67',
    className: 'Lớp 67 - IELTS Intensive 6.5+ Bứt Phá',
    milestonePeriod: 'Buổi 1 - 10',
    createdDate: '2026-05-25',
    teacherName: 'Tâm Vương',
    parentName: 'Vũ Quốc Hùng',
    parentPhone: '0912345678',

    attendanceScore: 30,
    attendanceDetails: '10/10 buổi (100% đúng giờ)',

    homeworkScore: 28,
    homeworkDetails: '10/10 bài tập đạt yêu cầu, Quizlet hoàn thành 95%',

    examScore: 36,
    examDetails: 'Điểm TB các bài kiểm tra: 9.0/10 (Band 7.0 IELTS)',

    totalScore: 94,
    gradeRank: 'Xuất sắc',

    teacherComments: 'Em Thu Hà có tinh thần học tập rất nghiêm túc, kỹ năng Speaking phản xạ tự nhiên. Bài kiểm tra giữa đợt đạt kết quả ấn tượng.',
    parentAdvice: 'Phụ huynh tiếp tục khuyến khích em đọc báo Tiếng Anh (VNExpress International, BBC) 15 phút mỗi ngày.',
    sentToParent: true,
    sentDate: '2026-05-26',
  },
  {
    id: 'ms-002',
    studentId: 'st-59-1',
    studentName: 'Vũ Thị Minh Hạnh',
    studentCode: 'IDV-HV059-1',
    classId: 'cls-59',
    className: 'Lớp 59 - IELTS Pre-Intermediate 5.0',
    milestonePeriod: 'Buổi 1 - 10',
    createdDate: '2026-05-24',
    teacherName: 'Trang Nguyễn',
    parentName: 'Phạm Thị Lan',
    parentPhone: '0988112233',

    attendanceScore: 30,
    attendanceDetails: '10/10 buổi (100% chuyên cần)',

    homeworkScore: 30,
    homeworkDetails: '10/10 bài làm đầy đủ, 100% Quizlet từ vựng',

    examScore: 35,
    examDetails: 'Điểm TB bài thi 10 buổi: 8.8/10',

    totalScore: 95,
    gradeRank: 'Xuất sắc',

    teacherComments: 'Minh Hạnh tiếp thu bài nhanh, từ vựng chuẩn. Đã hoàn thiện kĩ năng Skimming & Scanning bài đọc rất ấn tượng.',
    parentAdvice: 'Gia đình duy trì giờ tự học ở nhà cho con từ 20:00 - 21:00.',
    sentToParent: true,
    sentDate: '2026-05-25',
  },
  {
    id: 'ms-003',
    studentId: 'st-59-2',
    studentName: 'Trần Đức Minh',
    studentCode: 'IDV-HV059-2',
    classId: 'cls-59',
    className: 'Lớp 59 - IELTS Pre-Intermediate 5.0',
    milestonePeriod: 'Buổi 1 - 10',
    createdDate: '2026-05-24',
    teacherName: 'Trang Nguyễn',
    parentName: 'Trần Văn Mạnh',
    parentPhone: '0977445566',

    attendanceScore: 24,
    attendanceDetails: '8/10 buổi (Nghỉ 2 buổi có phép)',

    homeworkScore: 21,
    homeworkDetails: '7/10 bài tập hoàn thành (Chưa học Quizlet 3 bài)',

    examScore: 28,
    examDetails: 'Điểm TB các bài quiz: 7.0/10',

    totalScore: 73,
    gradeRank: 'Khá',

    teacherComments: 'Đức Minh có tố chất thông minh nhưng còn hay quên làm bài tập về nhà và chưa ôn từ vựng Quizlet thường xuyên.',
    parentAdvice: 'Nhờ phụ huynh đôn đốc con hoàn thành bài tập ngay sau khi đi học về.',
    sentToParent: false,
  }
];



export const INITIAL_CLASS_SPREADSHEETS: any[] = [
  {
    "id": "sheet-class-ielts-73",
    "updatedAt": "2026-09-28T11:32:04.331Z",
    "rows": [
      {
        "hpHighlightColor": "default",
        "id": "row-student-vocab-1790595123705",
        "email": "",
        "hpStatus": "Đã học",
        "no": 1,
        "studentId": "student-vocab-1790595123705",
        "fullName": "Nptham",
        "scores": {
          "col_sess_1_1790595124329": "6.7"
        },
        "scoresHighlight": {
          "col_sess_1_1790595124329": "default"
        }
      }
    ],
    "columns": [
      {
        "subSkill": "Từ vựng",
        "maxScore": 10,
        "date": "2026-09-28",
        "teacherAndDate": "09-28 GV",
        "id": "col_sess_1_1790595124329",
        "lessonLabel": "L1",
        "sessionNumber": 1
      }
    ],
    "classId": "class-ielts-73",
    "courseTuitionTag": "5tr2",
    "classBanner": "Bảng điểm Lớp class-ielts-73",
    "tagText": "INSPI",
    "branch": "Cơ sở 1 - Tô Hiệu"
  },
  {
    "id": "sheet-class-ielts-78",
    "rows": [
      {
        "hpStatus": "Đã học",
        "email": "",
        "no": 1,
        "fullName": "Đỗ Ngọc Hiếu",
        "id": "row-student-vocab-1790604498048",
        "studentId": "student-vocab-1790604498048",
        "hpHighlightColor": "default",
        "scoresHighlight": {
          "col_sess_1_1790604498597": "default"
        },
        "scores": {
          "col_sess_1_1790604498597": "0"
        }
      }
    ],
    "tagText": "INSPI",
    "branch": "Cơ sở 1 - Tô Hiệu",
    "courseTuitionTag": "5tr2",
    "columns": [
      {
        "maxScore": 10,
        "teacherAndDate": "09-28 GV",
        "subSkill": "Từ vựng",
        "date": "2026-09-28",
        "id": "col_sess_1_1790604498597",
        "lessonLabel": "L1",
        "sessionNumber": 1
      }
    ],
    "classId": "class-ielts-78",
    "classBanner": "Bảng điểm Lớp class-ielts-78",
    "updatedAt": "2026-09-28T14:08:18.600Z"
  },
  {
    "id": "sheet-class-ielts-89",
    "rows": [
      {
        "hpStatus": "Đã học",
        "no": 1,
        "email": "",
        "hpHighlightColor": "default",
        "id": "row-student-vocab-1790602452462",
        "fullName": "Tạ Quỳnh Anh",
        "scores": {
          "col_sess_1_1790602453361": "0"
        },
        "studentId": "student-vocab-1790602452462",
        "scoresHighlight": {
          "col_sess_1_1790602453361": "default"
        }
      }
    ],
    "tagText": "INSPI",
    "branch": "Cơ sở 1 - Tô Hiệu",
    "courseTuitionTag": "5tr2",
    "classId": "class-ielts-89",
    "columns": [
      {
        "subSkill": "Từ vựng",
        "maxScore": 10,
        "teacherAndDate": "09-28 GV",
        "sessionNumber": 1,
        "date": "2026-09-28",
        "lessonLabel": "L1",
        "id": "col_sess_1_1790602453361"
      }
    ],
    "classBanner": "Bảng điểm Lớp class-ielts-89",
    "updatedAt": "2026-09-28T13:34:13.363Z"
  },
  {
    "id": "sheet-class-ielts-92",
    "updatedAt": "2026-09-28T12:05:35.323Z",
    "tagText": "INSPI",
    "columns": [
      {
        "subSkill": "Từ vựng",
        "lessonLabel": "L1",
        "maxScore": 10,
        "teacherAndDate": "09-28 GV",
        "sessionNumber": 1,
        "id": "col_sess_1_1790597135322",
        "date": "2026-09-28"
      }
    ],
    "classId": "class-ielts-92",
    "branch": "Cơ sở 1 - Tô Hiệu",
    "classBanner": "Bảng điểm Lớp class-ielts-92",
    "rows": [
      {
        "scores": {
          "col_sess_1_1790597135322": "0"
        },
        "no": 1,
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "scoresHighlight": {
          "col_sess_1_1790597135322": "default"
        },
        "studentId": "student-vocab-1790597134953",
        "fullName": "Trần Thanh Thúy",
        "id": "row-student-vocab-1790597134953",
        "email": ""
      }
    ],
    "courseTuitionTag": "5tr2"
  },
  {
    "id": "sheet-cls-1789995110040",
    "rows": [
      {
        "no": 1,
        "hpHighlightColor": "yellow",
        "fullName": "Phạm Bảo Phương 47",
        "email": "phmbophng47122",
        "id": "row-st-1789995110041-0-bi5p",
        "scoresHighlight": {},
        "scores": {},
        "studentId": "st-1789995110041-0-bi5p",
        "hpStatus": "Nợ 3.2tr"
      },
      {
        "scores": {},
        "studentId": "st-1789995110041-1-zji5",
        "id": "row-st-1789995110041-1-zji5",
        "hpHighlightColor": "yellow",
        "fullName": "Mỹ Liên 56 10/1",
        "email": "mlin56101123",
        "hpStatus": "Nợ 3.2tr",
        "no": 2,
        "scoresHighlight": {}
      },
      {
        "id": "row-st-1789995110041-10-c0ay",
        "studentId": "st-1789995110041-10-c0ay",
        "scoresHighlight": {},
        "hpStatus": "Nợ 3.2tr",
        "hpHighlightColor": "yellow",
        "email": "ngch61132",
        "fullName": "Ngọc Hà 61",
        "scores": {},
        "no": 3
      },
      {
        "scores": {},
        "no": 4,
        "hpStatus": "Nợ 3.2tr",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "studentId": "st-1789995110041-11-se98",
        "fullName": "Nguyễn Vũ Hà Thu 74",
        "id": "row-st-1789995110041-11-se98",
        "email": "nguynvhthu74133"
      },
      {
        "hpStatus": "Nợ 3.2tr",
        "email": "nguynththuthy55100k134",
        "no": 5,
        "hpHighlightColor": "yellow",
        "id": "row-st-1789995110041-12-rkeg",
        "fullName": "Nguyễn Thị Thu Thủy 55 (100k)",
        "scores": {},
        "studentId": "st-1789995110041-12-rkeg",
        "scoresHighlight": {}
      },
      {
        "hpStatus": "Nợ 3.2tr",
        "email": "nguynhuyn56quaylit198135",
        "no": 6,
        "fullName": "Nguyễn Huyền 56 quay lại từ 19.8",
        "id": "row-st-1789995110041-13-c537",
        "studentId": "st-1789995110041-13-c537",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "scores": {}
      },
      {
        "hpHighlightColor": "yellow",
        "email": "nguynthnhdnghsngoichhct7136",
        "id": "row-st-1789995110041-14-fp3q",
        "hpStatus": "Nợ 3.2tr",
        "no": 7,
        "studentId": "st-1789995110041-14-fp3q",
        "fullName": "Nguyễn Thành Dũng hsngoài chỉ hc t7",
        "scores": {},
        "scoresHighlight": {}
      },
      {
        "scoresHighlight": {},
        "hpStatus": "Nợ 3.2tr",
        "scores": {},
        "no": 8,
        "email": "phmhnggiangchhct7137",
        "id": "row-st-1789995110041-15-o6hi",
        "studentId": "st-1789995110041-15-o6hi",
        "fullName": "Phạm Hương Giang chỉ hc t7",
        "hpHighlightColor": "yellow"
      },
      {
        "hpHighlightColor": "yellow",
        "studentId": "st-1789995110041-2-sef1",
        "fullName": "Minh Tuấn 56",
        "no": 9,
        "hpStatus": "Nợ 3.2tr",
        "scoresHighlight": {},
        "scores": {},
        "email": "minhtun56124",
        "id": "row-st-1789995110041-2-sef1"
      },
      {
        "scores": {},
        "no": 10,
        "fullName": "Thanh Nhàn 56",
        "hpStatus": "Nợ 3.2tr",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "studentId": "st-1789995110041-3-awyk",
        "email": "thanhnhn56125",
        "id": "row-st-1789995110041-3-awyk"
      },
      {
        "email": "bihnggiang58t254126",
        "studentId": "st-1789995110041-4-b12n",
        "hpStatus": "Nợ 3.2tr",
        "hpHighlightColor": "yellow",
        "id": "row-st-1789995110041-4-b12n",
        "scores": {},
        "scoresHighlight": {},
        "fullName": "Bùi Hương Giang 58 từ 25/4",
        "no": 11
      },
      {
        "email": "ngngclinh59127",
        "hpStatus": "Nợ 3.2tr",
        "hpHighlightColor": "yellow",
        "id": "row-st-1789995110041-5-97bq",
        "scores": {},
        "no": 12,
        "scoresHighlight": {},
        "studentId": "st-1789995110041-5-97bq",
        "fullName": "Đặng Ngọc Linh 59"
      },
      {
        "email": "tthkimngn59128",
        "hpHighlightColor": "yellow",
        "no": 13,
        "fullName": "Tô Thị Kim Ngân 59",
        "scores": {},
        "id": "row-st-1789995110041-6-zbxz",
        "scoresHighlight": {},
        "hpStatus": "Nợ 3.2tr",
        "studentId": "st-1789995110041-6-zbxz"
      },
      {
        "scoresHighlight": {},
        "scores": {},
        "fullName": "Minh Anh 70",
        "hpHighlightColor": "yellow",
        "id": "row-st-1789995110041-7-27we",
        "hpStatus": "Nợ 3.2tr",
        "email": "minhanh70129",
        "no": 14,
        "studentId": "st-1789995110041-7-27we"
      },
      {
        "studentId": "st-1789995110041-8-2sxz",
        "id": "row-st-1789995110041-8-2sxz",
        "fullName": "Hà My 61",
        "email": "hmy61130",
        "scores": {},
        "hpStatus": "Nợ 3.2tr",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "no": 15
      },
      {
        "no": 16,
        "studentId": "st-1789995110041-9-plw2",
        "hpStatus": "Nợ 3.2tr",
        "scoresHighlight": {},
        "email": "ngkhnh61131",
        "hpHighlightColor": "yellow",
        "fullName": "Đăng Khánh 61",
        "id": "row-st-1789995110041-9-plw2",
        "scores": {}
      }
    ],
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "updatedAt": "2026-09-23T07:43:06.830Z",
    "courseTuitionTag": "3.2tr",
    "classBanner": "DRILL 47 S2 (Thứ 4 + Thứ 7 (Ca 2: 19:45 - 21:30)) 3",
    "tagText": "INSPI",
    "columns": [
      {
        "lessonLabel": "L1",
        "teacherAndDate": "L1 Ngọc",
        "maxScore": 10,
        "id": "c1",
        "subSkill": "Từ vựng & Viết"
      },
      {
        "id": "c2",
        "teacherAndDate": "L2 Ngọc",
        "subSkill": "Viết & Nghe",
        "lessonLabel": "L2",
        "maxScore": 10
      },
      {
        "subSkill": "Nghe 10",
        "maxScore": 10,
        "lessonLabel": "L3",
        "id": "c3",
        "teacherAndDate": "L3 Ngọc"
      },
      {
        "id": "c4",
        "lessonLabel": "L4",
        "teacherAndDate": "L4 Ngọc",
        "subSkill": "Đọc 13",
        "maxScore": 13
      }
    ],
    "classId": "cls-1789995110040"
  },
  {
    "id": "sheet-cls-1789996334766",
    "branch": "Cơ sở 1 - Tô Hiệu",
    "classBanner": "Bảng điểm Lớp cls-1789996334766",
    "tagText": "INSPI",
    "courseTuitionTag": "5tr2",
    "updatedAt": "2026-09-27T16:21:28.932Z",
    "columns": [
      {
        "teacherAndDate": "09-27 GV",
        "id": "col_sess_1_1790526088932",
        "maxScore": 10,
        "lessonLabel": "L1",
        "sessionNumber": 1,
        "subSkill": "Từ vựng",
        "date": "2026-09-27"
      }
    ],
    "classId": "cls-1789996334766",
    "rows": [
      {
        "fullName": "Diep",
        "scoresHighlight": {
          "col_sess_1_1790526088932": "default"
        },
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_1_1790526088932": "10"
        },
        "id": "row-student-vocab-1790526088382",
        "email": "",
        "hpStatus": "Đã học",
        "no": 1,
        "studentId": "student-vocab-1790526088382"
      }
    ]
  },
  {
    "id": "sheet-cls-1789998154836",
    "classId": "cls-1789998154836",
    "columns": [
      {
        "subSkill": "Từ vựng, Nghe, Đọc",
        "date": "2026-09-28",
        "lessonLabel": "L1",
        "maxScore": 10,
        "teacherAndDate": "09-28 Ngọc",
        "id": "col_sess_1_1790603296548",
        "sessionNumber": 1
      }
    ],
    "rows": [
      {
        "email": "",
        "studentId": "st-1789998154861-0-odz6",
        "fullName": "Hoàng Trung Hải 53",
        "id": "row-st-1789998154861-0-odz6",
        "hpHighlightColor": "default",
        "no": 1,
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_1_1790603296548": "10"
        }
      },
      {
        "studentId": "st-1789998154862-1-1bum",
        "fullName": "Quang Phúc 53",
        "no": 2,
        "email": "",
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_1_1790603296548": "9"
        },
        "id": "row-st-1789998154862-1-1bum",
        "hpHighlightColor": "default"
      },
      {
        "hpStatus": "Đã học",
        "id": "row-st-1789998154862-2-bbk7",
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_1_1790603296548": "11"
        },
        "fullName": "Gia Khoa 53",
        "no": 3,
        "studentId": "st-1789998154862-2-bbk7",
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "email": ""
      },
      {
        "fullName": "Tuấn Anh 53",
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_1_1790603296548": "9"
        },
        "id": "row-st-1789998154862-3-myes",
        "email": "",
        "hpStatus": "Đã học",
        "studentId": "st-1789998154862-3-myes",
        "no": 4
      },
      {
        "hpStatus": "Đã học",
        "email": "",
        "id": "row-st-1789998154862-4-hk48",
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "fullName": "Thanh Tú 52 t11 thi",
        "studentId": "st-1789998154862-4-hk48",
        "no": 5,
        "scores": {
          "col_sess_1_1790603296548": "9"
        },
        "hpHighlightColor": "default"
      },
      {
        "scores": {
          "col_sess_1_1790603296548": "vắng"
        },
        "no": 6,
        "fullName": "Vũ Phương Anh 65",
        "hpHighlightColor": "default",
        "hpStatus": "Đã học",
        "email": "",
        "studentId": "st-1789998154862-5-upyd",
        "scoresHighlight": {
          "col_sess_1_1790603296548": "red"
        },
        "id": "row-st-1789998154862-5-upyd"
      },
      {
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "hpStatus": "Đã học",
        "id": "row-st-1789998154862-6-exc6",
        "email": "",
        "fullName": "Nguyễn Vân Khánh 65 (55 cũ)",
        "no": 7,
        "studentId": "st-1789998154862-6-exc6",
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_1_1790603296548": "19"
        }
      },
      {
        "email": "",
        "studentId": "st-1789998154862-7-af22",
        "hpHighlightColor": "default",
        "fullName": "Hương Giang 65",
        "id": "row-st-1789998154862-7-af22",
        "no": 8,
        "scores": {
          "col_sess_1_1790603296548": "7"
        },
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "hpStatus": "Đã học"
      },
      {
        "no": 9,
        "fullName": "Mai Chi 65",
        "hpHighlightColor": "default",
        "studentId": "st-1789998154862-8-j393",
        "scores": {
          "col_sess_1_1790603296548": "9"
        },
        "email": "",
        "hpStatus": "Đã học",
        "id": "row-st-1789998154862-8-j393",
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        }
      },
      {
        "email": "",
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "fullName": "Trần Thủy 65",
        "studentId": "st-1789998154862-9-j9i8",
        "scores": {
          "col_sess_1_1790603296548": "10"
        },
        "id": "row-st-1789998154862-9-j9i8",
        "no": 10,
        "hpStatus": "Đã học",
        "hpHighlightColor": "default"
      },
      {
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "scores": {
          "col_sess_1_1790603296548": "6"
        },
        "no": 11,
        "studentId": "st-1789998154863-10-wg21",
        "fullName": "Phạm Uyên Nhi 65",
        "email": "",
        "id": "row-st-1789998154863-10-wg21",
        "hpHighlightColor": "default",
        "hpStatus": "Đã học"
      },
      {
        "fullName": "Trần Duy Bách 65",
        "id": "row-st-1789998154863-11-4x01",
        "hpHighlightColor": "default",
        "email": "",
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "studentId": "st-1789998154863-11-4x01",
        "no": 12,
        "scores": {
          "col_sess_1_1790603296548": "13"
        },
        "hpStatus": "Đã học"
      },
      {
        "no": 13,
        "studentId": "st-1789998154863-12-ywt2",
        "scores": {
          "col_sess_1_1790603296548": "vắng"
        },
        "email": "",
        "hpStatus": "Đã học",
        "scoresHighlight": {
          "col_sess_1_1790603296548": "red"
        },
        "hpHighlightColor": "default",
        "fullName": "Khánh Linh 59",
        "id": "row-st-1789998154863-12-ywt2"
      },
      {
        "email": "",
        "no": 14,
        "fullName": "Thanh Lam 63",
        "hpHighlightColor": "default",
        "id": "row-st-1789998154863-13-imxi",
        "scoresHighlight": {
          "col_sess_1_1790603296548": "red"
        },
        "scores": {
          "col_sess_1_1790603296548": "vắng"
        },
        "hpStatus": "Đã học",
        "studentId": "st-1789998154863-13-imxi"
      },
      {
        "scores": {
          "col_sess_1_1790603296548": "11"
        },
        "hpHighlightColor": "default",
        "fullName": "Hà Phương 63",
        "no": 15,
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "hpStatus": "Đã học",
        "studentId": "st-1789998154863-14-bi1h",
        "email": "",
        "id": "row-st-1789998154863-14-bi1h"
      },
      {
        "fullName": "Sơn Tùng 55",
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "no": 16,
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_1_1790603296548": "7"
        },
        "hpStatus": "Đã học",
        "email": "",
        "studentId": "st-1789998154863-15-ud8i",
        "id": "row-st-1789998154863-15-ud8i"
      },
      {
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "fullName": "Gia Linh 63 từ 7/9",
        "scores": {
          "col_sess_1_1790603296548": "16"
        },
        "no": 17,
        "hpHighlightColor": "default",
        "id": "row-st-1789998154863-16-vr7y",
        "email": "",
        "hpStatus": "Đã học",
        "studentId": "st-1789998154863-16-vr7y"
      },
      {
        "scores": {
          "col_sess_1_1790603296548": "11"
        },
        "hpStatus": "Đã học",
        "id": "row-st-1789998154863-17-2oyu",
        "studentId": "st-1789998154863-17-2oyu",
        "no": 18,
        "fullName": "Trần Đức Nguyên 52 chỉ hc thứ 2",
        "hpHighlightColor": "default",
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "email": ""
      },
      {
        "email": "",
        "scoresHighlight": {
          "col_sess_1_1790603296548": "red"
        },
        "no": 19,
        "hpHighlightColor": "default",
        "hpStatus": "Đã học",
        "studentId": "st-1789998154863-18-ls1b",
        "id": "row-st-1789998154863-18-ls1b",
        "fullName": "Cao Đức Bình 29 chỉ hc t5 từ 6/10",
        "scores": {
          "col_sess_1_1790603296548": "vắng"
        }
      },
      {
        "studentId": "st-1789998154863-19-gl5w",
        "no": 20,
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "hpStatus": "Đã học",
        "email": "",
        "hpHighlightColor": "default",
        "fullName": "Gia Minh 53 chỉ onl vào thứ 2",
        "id": "row-st-1789998154863-19-gl5w",
        "scores": {
          "col_sess_1_1790603296548": "16"
        }
      },
      {
        "studentId": "st-1789998154863-20-5imj",
        "fullName": "Vũ Thanh Phương (sp A kiến An) onl",
        "id": "row-st-1789998154863-20-5imj",
        "email": "",
        "scores": {
          "col_sess_1_1790603296548": "15"
        },
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "no": 21
      },
      {
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "scores": {
          "col_sess_1_1790603296548": "12"
        },
        "fullName": "Nguyễn Phương Anh 59 hay onl",
        "hpHighlightColor": "default",
        "id": "row-st-1789998154863-21-kscp",
        "hpStatus": "Đã học",
        "email": "",
        "no": 22,
        "studentId": "st-1789998154863-21-kscp"
      },
      {
        "hpHighlightColor": "default",
        "email": "",
        "no": 23,
        "fullName": "Phạm Đức Sơn Hải 64",
        "scores": {
          "col_sess_1_1790603296548": "10"
        },
        "id": "row-st-1790132157026-0-f2hg",
        "scoresHighlight": {
          "col_sess_1_1790603296548": "default"
        },
        "hpStatus": "Đã học",
        "studentId": "st-1790132157026-0-f2hg"
      }
    ],
    "classBanner": "Bảng điểm Lớp cls-1789998154836",
    "tagText": "INSPI",
    "updatedAt": "2026-09-28T13:48:25.508Z",
    "branch": "Cơ sở 1 - Tô Hiệu",
    "courseTuitionTag": "5tr2"
  },
  {
    "id": "sheet-cls-1789998217889",
    "columns": [
      {
        "id": "col_sess_2_1790603836651",
        "teacherAndDate": "09-28 Ngọc",
        "lessonLabel": "L2",
        "maxScore": 10,
        "sessionNumber": 2,
        "date": "2026-09-28",
        "subSkill": "Từ vựng, Nghe, Đọc"
      }
    ],
    "classId": "cls-1789998217889",
    "updatedAt": "2026-09-28T13:57:26.618Z",
    "tagText": "INSPI",
    "rows": [
      {
        "scores": {
          "col_sess_2_1790603836651": "15"
        },
        "no": 1,
        "hpStatus": "Đã học",
        "studentId": "st-1789998217889-0-i099",
        "hpHighlightColor": "default",
        "fullName": "Ngọc Linh 50",
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "email": "",
        "id": "row-st-1789998217889-0-i099"
      },
      {
        "email": "",
        "fullName": "Phạm Đức Hiếu 54",
        "id": "row-st-1789998217889-1-qvbr",
        "studentId": "st-1789998217889-1-qvbr",
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "scores": {
          "col_sess_2_1790603836651": "11.5"
        },
        "no": 2
      },
      {
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "no": 3,
        "email": "",
        "hpHighlightColor": "default",
        "fullName": "Khánh Linh 59",
        "id": "row-st-1789998217889-10-cdly",
        "studentId": "st-1789998217889-10-cdly",
        "scores": {
          "col_sess_2_1790603836651": "13"
        },
        "hpStatus": "Đã học"
      },
      {
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "no": 4,
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_2_1790603836651": "12"
        },
        "hpHighlightColor": "default",
        "id": "row-st-1789998217889-11-sh84",
        "studentId": "st-1789998217889-11-sh84",
        "email": "",
        "fullName": "Bùi Thanh Trúc 59"
      },
      {
        "hpHighlightColor": "default",
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "scores": {
          "col_sess_2_1790603836651": "12.5"
        },
        "id": "row-st-1789998217889-12-uq82",
        "fullName": "Thu Phương 59",
        "email": "",
        "no": 5,
        "hpStatus": "Đã học",
        "studentId": "st-1789998217889-12-uq82"
      },
      {
        "id": "row-st-1789998217889-13-k1jc",
        "email": "",
        "fullName": "Đức Anh 61",
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "hpHighlightColor": "default",
        "hpStatus": "Đã học",
        "no": 6,
        "studentId": "st-1789998217889-13-k1jc",
        "scores": {
          "col_sess_2_1790603836651": "13.5"
        }
      },
      {
        "id": "row-st-1789998217889-14-fftr",
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_2_1790603836651": "13"
        },
        "email": "",
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "studentId": "st-1789998217889-14-fftr",
        "fullName": "Khánh Chi 54",
        "hpHighlightColor": "default",
        "no": 7
      },
      {
        "studentId": "st-1789998217889-15-6z69",
        "hpStatus": "Đã học",
        "no": 8,
        "email": "",
        "id": "row-st-1789998217889-15-6z69",
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_2_1790603836651": "14"
        },
        "fullName": "Thảo Chi 63",
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        }
      },
      {
        "fullName": "Vũ Anh Hải Nam new 100k t9 thi",
        "studentId": "st-1789998217889-16-ox0q",
        "email": "",
        "hpHighlightColor": "default",
        "no": 9,
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "id": "row-st-1789998217889-16-ox0q",
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_2_1790603836651": "12"
        }
      },
      {
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "email": "",
        "id": "row-st-1789998217889-17-es45",
        "hpStatus": "Đã học",
        "no": 10,
        "studentId": "st-1789998217889-17-es45",
        "fullName": "Phạm Hương Giang chỉ hc t2 hs ngoài từ 12/9",
        "scores": {
          "col_sess_2_1790603836651": "11.5"
        },
        "hpHighlightColor": "default"
      },
      {
        "studentId": "st-1789998217889-2-xpdt",
        "hpHighlightColor": "default",
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "fullName": "Hoài Thương 55",
        "id": "row-st-1789998217889-2-xpdt",
        "email": "",
        "scores": {
          "col_sess_2_1790603836651": "10.5"
        },
        "no": 11,
        "hpStatus": "Đã học"
      },
      {
        "studentId": "st-1789998217889-3-5mvc",
        "hpStatus": "Đã học",
        "id": "row-st-1789998217889-3-5mvc",
        "scores": {
          "col_sess_2_1790603836651": "12"
        },
        "hpHighlightColor": "default",
        "email": "",
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "fullName": "Nguyễn Bảo Ngọc 57",
        "no": 12
      },
      {
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "studentId": "st-1789998217889-4-sram",
        "no": 13,
        "hpHighlightColor": "default",
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_2_1790603836651": "13.5"
        },
        "email": "",
        "fullName": "Trần Đức Trung 100k",
        "id": "row-st-1789998217889-4-sram"
      },
      {
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "no": 14,
        "email": "",
        "hpStatus": "Đã học",
        "studentId": "st-1789998217889-5-q4kt",
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_2_1790603836651": "12"
        },
        "id": "row-st-1789998217889-5-q4kt",
        "fullName": "Hà Anh 59"
      },
      {
        "hpHighlightColor": "default",
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "email": "",
        "fullName": "Phương Nhi 59",
        "id": "row-st-1789998217889-6-niaz",
        "studentId": "st-1789998217889-6-niaz",
        "no": 15,
        "scores": {
          "col_sess_2_1790603836651": "15"
        },
        "hpStatus": "Đã học"
      },
      {
        "scores": {
          "col_sess_2_1790603836651": "10"
        },
        "no": 16,
        "fullName": "Thùy Dương 59 fb: Anh Phong",
        "hpHighlightColor": "default",
        "id": "row-st-1789998217889-7-tfu8",
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "hpStatus": "Đã học",
        "email": "",
        "studentId": "st-1789998217889-7-tfu8"
      },
      {
        "hpHighlightColor": "default",
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "hpStatus": "Đã học",
        "no": 17,
        "email": "",
        "id": "row-st-1789998217889-8-lhj9",
        "scores": {
          "col_sess_2_1790603836651": "14.5"
        },
        "studentId": "st-1789998217889-8-lhj9",
        "fullName": "Hoàng Minh Ngọc 59"
      },
      {
        "hpHighlightColor": "default",
        "id": "row-st-1789998217889-9-pd1t",
        "hpStatus": "Đã học",
        "studentId": "st-1789998217889-9-pd1t",
        "no": 18,
        "email": "",
        "scoresHighlight": {
          "col_sess_2_1790603836651": "default"
        },
        "scores": {
          "col_sess_2_1790603836651": "14"
        },
        "fullName": "Thanh Tùng 59"
      }
    ],
    "classBanner": "Bảng điểm Lớp cls-1789998217889",
    "courseTuitionTag": "5tr2",
    "branch": "Cơ sở 1 - Tô Hiệu"
  },
  {
    "id": "sheet-cls-1790001829880",
    "columns": [
      {
        "teacherAndDate": "L1 Vũ",
        "lessonLabel": "L1",
        "subSkill": "Từ vựng & Viết",
        "id": "c1",
        "maxScore": 10
      },
      {
        "subSkill": "Viết & Nghe",
        "maxScore": 10,
        "lessonLabel": "L2",
        "teacherAndDate": "L2 Vũ",
        "id": "c2"
      },
      {
        "id": "c3",
        "subSkill": "Nghe 10",
        "maxScore": 10,
        "teacherAndDate": "L3 Vũ",
        "lessonLabel": "L3"
      },
      {
        "subSkill": "Đọc 13",
        "lessonLabel": "L4",
        "teacherAndDate": "L4 Vũ",
        "maxScore": 13,
        "id": "c4"
      }
    ],
    "classId": "cls-1790001829880",
    "updatedAt": "2026-09-24T09:38:28.430Z",
    "tagText": "INSPI",
    "rows": [
      {
        "scoresHighlight": {},
        "studentId": "st-1790001829880-0-63bo",
        "email": "nguynkhnhhuyn134",
        "fullName": "Nguyễn Khánh Huyền",
        "id": "row-st-1790001829880-0-63bo",
        "hpStatus": "Nợ 5.6tr",
        "no": 1,
        "hpHighlightColor": "yellow",
        "scores": {}
      },
      {
        "scores": {},
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "no": 2,
        "id": "row-st-1790001829880-1-wgpj",
        "studentId": "st-1790001829880-1-wgpj",
        "fullName": "Hoàng Thiện Bách",
        "email": "hongthinbch135"
      },
      {
        "fullName": "Lê Bảo Lâm",
        "no": 3,
        "scoresHighlight": {},
        "email": "lbolm144",
        "id": "row-st-1790001829880-10-1fws",
        "studentId": "st-1790001829880-10-1fws",
        "hpStatus": "Nợ 5.6tr",
        "scores": {},
        "hpHighlightColor": "yellow"
      },
      {
        "scores": {},
        "fullName": "Nguyễn Khánh Linh",
        "studentId": "st-1790001829880-11-1v11",
        "id": "row-st-1790001829880-11-1v11",
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "no": 4,
        "scoresHighlight": {},
        "email": "nguynkhnhlinh145"
      },
      {
        "hpHighlightColor": "yellow",
        "no": 5,
        "hpStatus": "Nợ 5.6tr",
        "scores": {},
        "studentId": "st-1790001829880-12-04c6",
        "email": "nguynvhthu146",
        "id": "row-st-1790001829880-12-04c6",
        "scoresHighlight": {},
        "fullName": "Nguyễn Vũ Hà Thu"
      },
      {
        "fullName": "Lê Thanh Toàn",
        "email": "lthanhton147",
        "scoresHighlight": {},
        "id": "row-st-1790001829880-13-4ekj",
        "hpStatus": "Nợ 5.6tr",
        "hpHighlightColor": "yellow",
        "studentId": "st-1790001829880-13-4ekj",
        "no": 6,
        "scores": {}
      },
      {
        "scores": {},
        "id": "row-st-1790001829880-14-r10e",
        "fullName": "Nguyễn Hải Yến",
        "no": 7,
        "scoresHighlight": {},
        "email": "nguynhiyn148",
        "hpStatus": "Nợ 5.6tr",
        "hpHighlightColor": "yellow",
        "studentId": "st-1790001829880-14-r10e"
      },
      {
        "email": "thanhhuyn149",
        "id": "row-st-1790001829880-15-b4lu",
        "hpStatus": "Nợ 5.6tr",
        "hpHighlightColor": "yellow",
        "studentId": "st-1790001829880-15-b4lu",
        "scoresHighlight": {},
        "scores": {},
        "fullName": "Thanh Huyền",
        "no": 8
      },
      {
        "studentId": "st-1790001829880-16-3m3t",
        "hpStatus": "Nợ 5.6tr",
        "scores": {},
        "id": "row-st-1790001829880-16-3m3t",
        "scoresHighlight": {},
        "email": "vngcanh150",
        "fullName": "Vũ Ngọc Anh",
        "no": 9,
        "hpHighlightColor": "yellow"
      },
      {
        "id": "row-st-1790001829880-17-4fdu",
        "fullName": "Đặng Đại Hải",
        "studentId": "st-1790001829880-17-4fdu",
        "scores": {},
        "email": "ngihi151",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "hpStatus": "Nợ 5.6tr",
        "no": 10
      },
      {
        "hpStatus": "Nợ 5.6tr",
        "scores": {},
        "hpHighlightColor": "yellow",
        "id": "row-st-1790001829880-2-mu8r",
        "scoresHighlight": {},
        "studentId": "st-1790001829880-2-mu8r",
        "fullName": "Trần Ngọc Bảo Trân",
        "email": "trnngcbotrn136",
        "no": 11
      },
      {
        "id": "row-st-1790001829880-3-c54a",
        "fullName": "Nguyễn Thị Linh",
        "email": "nguynthlinh137",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "no": 12,
        "scores": {},
        "hpStatus": "Nợ 5.6tr",
        "studentId": "st-1790001829880-3-c54a"
      },
      {
        "scoresHighlight": {},
        "scores": {},
        "no": 13,
        "hpStatus": "Nợ 5.6tr",
        "hpHighlightColor": "yellow",
        "studentId": "st-1790001829880-4-kwkk",
        "fullName": "Bùi Ngọc Đức",
        "id": "row-st-1790001829880-4-kwkk",
        "email": "bingcc138"
      },
      {
        "studentId": "st-1790001829880-5-j4yv",
        "hpStatus": "Nợ 5.6tr",
        "hpHighlightColor": "yellow",
        "id": "row-st-1790001829880-5-j4yv",
        "scores": {},
        "email": "vcthng139",
        "fullName": "Vũ Đức Thắng",
        "no": 14,
        "scoresHighlight": {}
      },
      {
        "scoresHighlight": {},
        "no": 15,
        "fullName": "Nguyễn Đăng Khánh",
        "hpStatus": "Nợ 5.6tr",
        "email": "nguynngkhnh140",
        "hpHighlightColor": "yellow",
        "scores": {
          "c1": "10"
        },
        "studentId": "st-1790001829880-6-esx3",
        "id": "row-st-1790001829880-6-esx3"
      },
      {
        "id": "row-st-1790001829880-7-iqjw",
        "hpStatus": "Nợ 5.6tr",
        "studentId": "st-1790001829880-7-iqjw",
        "scoresHighlight": {},
        "fullName": "Nguyễn Ngọc Linh",
        "scores": {},
        "no": 16,
        "hpHighlightColor": "yellow",
        "email": "nguynngclinh141"
      },
      {
        "hpHighlightColor": "yellow",
        "studentId": "st-1790001829880-8-8h9s",
        "scoresHighlight": {},
        "no": 17,
        "fullName": "Trần Hà Anh",
        "scores": {},
        "id": "row-st-1790001829880-8-8h9s",
        "hpStatus": "Nợ 5.6tr",
        "email": "trnhanh142"
      },
      {
        "no": 18,
        "scores": {},
        "scoresHighlight": {},
        "email": "dngthylinh143",
        "hpHighlightColor": "yellow",
        "fullName": "Dương Thùy Linh",
        "studentId": "st-1790001829880-9-di4q",
        "hpStatus": "Nợ 5.6tr",
        "id": "row-st-1790001829880-9-di4q"
      },
      {
        "email": "trnthngcan152",
        "fullName": "Trần Thị Ngọc An",
        "id": "row-st-1790001829881-18-qr19",
        "studentId": "st-1790001829881-18-qr19",
        "hpStatus": "Nợ 5.6tr",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "no": 19,
        "scores": {}
      }
    ],
    "classBanner": "Lớp 74 (Thứ 3 + Thứ 6 (Ca 2: 19:45 - 21:30)) 5",
    "courseTuitionTag": "5.6tr",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)"
  },
  {
    "id": "sheet-cls-1790001890225",
    "courseTuitionTag": "5tr2",
    "classBanner": "Bảng điểm Lớp cls-1790001890225",
    "columns": [
      {
        "sessionNumber": 1,
        "date": "2026-09-28",
        "maxScore": 10,
        "teacherAndDate": "09-28 GV",
        "subSkill": "Từ vựng",
        "id": "col_sess_1_1790594910848",
        "lessonLabel": "L1"
      }
    ],
    "classId": "cls-1790001890225",
    "branch": "Cơ sở 1 - Tô Hiệu",
    "rows": [
      {
        "no": 1,
        "email": "",
        "hpHighlightColor": "default",
        "hpStatus": "Đã học",
        "studentId": "student-vocab-1790594910257",
        "scores": {
          "col_sess_1_1790594910848": "8.5"
        },
        "scoresHighlight": {
          "col_sess_1_1790594910848": "default"
        },
        "id": "row-student-vocab-1790594910257",
        "fullName": "bảo ngọc"
      },
      {
        "fullName": "ngô hà phượng",
        "scores": {
          "col_sess_1_1790594910848": "7.5"
        },
        "studentId": "st-1790001890226-11-6etm",
        "no": 2,
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "id": "row-st-1790001890226-11-6etm",
        "email": "",
        "scoresHighlight": {
          "col_sess_1_1790594910848": "default"
        }
      }
    ],
    "updatedAt": "2026-09-28T11:32:01.412Z",
    "tagText": "INSPI"
  },
  {
    "id": "sheet-cls-1790001971742",
    "classBanner": "Lớp 71 (Thứ 4 + Thứ 7 (Ca 1: 18:00 - 19:45)) 5",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "columns": [],
    "classId": "cls-1790001971742",
    "tagText": "INSPI",
    "rows": [
      {
        "id": "row-st-1790001971742-0-wnxf",
        "studentId": "st-1790001971742-0-wnxf",
        "scoresHighlight": {},
        "fullName": "Nguyễn Thị Khánh Ngọc",
        "scores": {},
        "email": "nguynthkhnhngc175",
        "hpStatus": "Nợ 5.6tr",
        "no": 1,
        "hpHighlightColor": "yellow"
      },
      {
        "no": 2,
        "studentId": "st-1790001971742-1-a16g",
        "hpStatus": "Nợ 5.6tr",
        "hpHighlightColor": "yellow",
        "scores": {},
        "scoresHighlight": {},
        "id": "row-st-1790001971742-1-a16g",
        "fullName": "Bùi Ngọc Diệu Linh",
        "email": "bingcdiulinh176"
      },
      {
        "studentId": "st-1790001971742-10-osa1",
        "fullName": "Lê Thanh Dương",
        "scores": {},
        "hpHighlightColor": "yellow",
        "email": "lthanhdng185",
        "id": "row-st-1790001971742-10-osa1",
        "scoresHighlight": {},
        "no": 3,
        "hpStatus": "Nợ 5.6tr"
      },
      {
        "scores": {},
        "scoresHighlight": {},
        "id": "row-st-1790001971742-11-5zrp",
        "fullName": "Phạm Gia Khải",
        "hpStatus": "Nợ 5.6tr",
        "studentId": "st-1790001971742-11-5zrp",
        "email": "phmgiakhi186",
        "hpHighlightColor": "yellow",
        "no": 4
      },
      {
        "fullName": "Nguyễn Ngọc Kim Ngân",
        "scores": {},
        "studentId": "st-1790001971742-12-saxm",
        "no": 5,
        "hpStatus": "Nợ 5.6tr",
        "hpHighlightColor": "yellow",
        "id": "row-st-1790001971742-12-saxm",
        "email": "nguynngckimngn187",
        "scoresHighlight": {}
      },
      {
        "email": "trnthudng188",
        "no": 6,
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "scores": {},
        "studentId": "st-1790001971742-13-ncrh",
        "scoresHighlight": {},
        "id": "row-st-1790001971742-13-ncrh",
        "fullName": "Trần Thuỳ Dương"
      },
      {
        "id": "row-st-1790001971742-14-i7vq",
        "scoresHighlight": {},
        "studentId": "st-1790001971742-14-i7vq",
        "email": "nguynhonghi189",
        "hpStatus": "Nợ 5.6tr",
        "fullName": "Nguyễn Hoàng Hải",
        "hpHighlightColor": "yellow",
        "scores": {},
        "no": 7
      },
      {
        "fullName": "Mãn Khánh Linh 61",
        "no": 8,
        "scores": {},
        "scoresHighlight": {},
        "studentId": "st-1790001971742-15-pw5l",
        "id": "row-st-1790001971742-15-pw5l",
        "hpStatus": "Nợ 5.6tr",
        "hpHighlightColor": "yellow",
        "email": "mnkhnhlinh61190"
      },
      {
        "no": 9,
        "fullName": "Thúy Ngân",
        "email": "thyngn191",
        "scoresHighlight": {},
        "hpStatus": "Nợ 5.6tr",
        "studentId": "st-1790001971742-16-iu4o",
        "id": "row-st-1790001971742-16-iu4o",
        "hpHighlightColor": "yellow",
        "scores": {}
      },
      {
        "email": "vhinam192",
        "no": 10,
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "scores": {},
        "studentId": "st-1790001971742-17-i28a",
        "id": "row-st-1790001971742-17-i28a",
        "fullName": "Võ Hải Nam"
      },
      {
        "studentId": "st-1790001971742-18-jp9y",
        "hpHighlightColor": "yellow",
        "id": "row-st-1790001971742-18-jp9y",
        "scores": {},
        "hpStatus": "Nợ 5.6tr",
        "email": "nguynthytuyn193",
        "scoresHighlight": {},
        "no": 11,
        "fullName": "Nguyễn Thúy Tuyên"
      },
      {
        "id": "row-st-1790001971742-19-yauq",
        "scores": {},
        "studentId": "st-1790001971742-19-yauq",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "fullName": "Vũ Đức Mạnh",
        "no": 12,
        "hpStatus": "Nợ 5.6tr",
        "email": "vcmnh194"
      },
      {
        "scores": {},
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "studentId": "st-1790001971742-2-yrqp",
        "id": "row-st-1790001971742-2-yrqp",
        "fullName": "Phạm Thùy Dương",
        "email": "phmthydng177",
        "no": 13,
        "hpStatus": "Nợ 5.6tr"
      },
      {
        "studentId": "st-1790001971742-3-j2pw",
        "hpStatus": "Nợ 5.6tr",
        "email": "nguyngiabo178",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "scores": {},
        "no": 14,
        "id": "row-st-1790001971742-3-j2pw",
        "fullName": "Nguyễn Gia Bảo"
      },
      {
        "no": 15,
        "email": "trnphnglinh179",
        "fullName": "Trần Phương Linh",
        "scores": {},
        "studentId": "st-1790001971742-4-lgjf",
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "id": "row-st-1790001971742-4-lgjf",
        "scoresHighlight": {}
      },
      {
        "scoresHighlight": {},
        "id": "row-st-1790001971742-5-r4wt",
        "scores": {},
        "email": "vuthianhth180",
        "studentId": "st-1790001971742-5-r4wt",
        "fullName": "Vũ Thị Anh Thư",
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "no": 16
      },
      {
        "hpStatus": "Nợ 5.6tr",
        "no": 17,
        "scores": {},
        "scoresHighlight": {},
        "email": "bikhnhbng181",
        "id": "row-st-1790001971742-6-3r2h",
        "fullName": "Bùi Khánh Băng",
        "studentId": "st-1790001971742-6-3r2h",
        "hpHighlightColor": "yellow"
      },
      {
        "hpHighlightColor": "yellow",
        "scores": {},
        "hpStatus": "Nợ 5.6tr",
        "id": "row-st-1790001971742-7-leg0",
        "scoresHighlight": {},
        "studentId": "st-1790001971742-7-leg0",
        "fullName": "Lê Phương Vy",
        "email": "lphngvy182",
        "no": 18
      },
      {
        "hpStatus": "CK 17/5",
        "id": "row-st-1790001971742-8-p0i4",
        "studentId": "st-1790001971742-8-p0i4",
        "hpHighlightColor": "default",
        "email": "nguynkhnhlinh183",
        "no": 19,
        "scores": {},
        "scoresHighlight": {},
        "fullName": "Nguyễn Khánh Linh"
      },
      {
        "scoresHighlight": {},
        "studentId": "st-1790001971742-9-btay",
        "hpStatus": "Nợ 5.6tr",
        "id": "row-st-1790001971742-9-btay",
        "hpHighlightColor": "yellow",
        "fullName": "Trần Ngọc Hoàng Nam",
        "scores": {},
        "no": 20,
        "email": "trnngchongnam184"
      },
      {
        "fullName": "Nguyễn Thị Khánh Ngọc",
        "no": 21,
        "email": "nguynthkhnhngc393",
        "hpHighlightColor": "yellow",
        "scores": {},
        "studentId": "st-1790392962345-0-4owu",
        "scoresHighlight": {},
        "hpStatus": "Nợ 5.6tr",
        "id": "row-st-1790392962345-0-4owu"
      },
      {
        "email": "bingcdiulinh394",
        "hpStatus": "Nợ 5.6tr",
        "no": 22,
        "studentId": "st-1790392962345-1-3l4x",
        "fullName": "Bùi Ngọc Diệu Linh",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "scores": {},
        "id": "row-st-1790392962345-1-3l4x"
      },
      {
        "fullName": "Lê Thanh Dương",
        "hpHighlightColor": "yellow",
        "email": "lthanhdng403",
        "scores": {},
        "studentId": "st-1790392962345-10-ytfg",
        "id": "row-st-1790392962345-10-ytfg",
        "hpStatus": "Nợ 5.6tr",
        "no": 23,
        "scoresHighlight": {}
      },
      {
        "email": "phmgiakhi404",
        "fullName": "Phạm Gia Khải",
        "id": "row-st-1790392962345-11-hzzy",
        "studentId": "st-1790392962345-11-hzzy",
        "hpStatus": "Nợ 5.6tr",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "no": 24,
        "scores": {}
      },
      {
        "no": 25,
        "scoresHighlight": {},
        "scores": {},
        "email": "nguynngckimngn405",
        "hpHighlightColor": "yellow",
        "fullName": "Nguyễn Ngọc Kim Ngân",
        "studentId": "st-1790392962345-12-cnht",
        "hpStatus": "Nợ 5.6tr",
        "id": "row-st-1790392962345-12-cnht"
      },
      {
        "studentId": "st-1790392962345-13-37gi",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "no": 26,
        "fullName": "Trần Thuỳ Dương",
        "scores": {},
        "id": "row-st-1790392962345-13-37gi",
        "hpStatus": "Nợ 5.6tr",
        "email": "trnthudng406"
      },
      {
        "id": "row-st-1790392962345-14-1ugy",
        "hpStatus": "Nợ 5.6tr",
        "studentId": "st-1790392962345-14-1ugy",
        "scoresHighlight": {},
        "scores": {},
        "fullName": "Nguyễn Hoàng Hải",
        "hpHighlightColor": "yellow",
        "no": 27,
        "email": "nguynhonghi407"
      },
      {
        "scoresHighlight": {},
        "no": 28,
        "fullName": "Mãn Khánh Linh 61",
        "hpStatus": "Nợ 5.6tr",
        "email": "mnkhnhlinh61408",
        "hpHighlightColor": "yellow",
        "scores": {},
        "studentId": "st-1790392962345-15-l3t7",
        "id": "row-st-1790392962345-15-l3t7"
      },
      {
        "studentId": "st-1790392962345-16-amn0",
        "hpStatus": "Nợ 5.6tr",
        "hpHighlightColor": "yellow",
        "id": "row-st-1790392962345-16-amn0",
        "scores": {},
        "email": "thyngn409",
        "fullName": "Thúy Ngân",
        "scoresHighlight": {},
        "no": 29
      },
      {
        "scores": {},
        "scoresHighlight": {},
        "no": 30,
        "hpStatus": "Nợ 5.6tr",
        "hpHighlightColor": "yellow",
        "studentId": "st-1790392962345-17-yk95",
        "fullName": "Võ Hải Nam",
        "id": "row-st-1790392962345-17-yk95",
        "email": "vhinam410"
      },
      {
        "id": "row-st-1790392962345-18-tdxm",
        "fullName": "Nguyễn Thúy Tuyên",
        "email": "nguynthytuyn411",
        "scoresHighlight": {},
        "scores": {},
        "hpHighlightColor": "yellow",
        "no": 31,
        "studentId": "st-1790392962345-18-tdxm",
        "hpStatus": "Nợ 5.6tr"
      },
      {
        "hpStatus": "Nợ 5.6tr",
        "scores": {},
        "hpHighlightColor": "yellow",
        "id": "row-st-1790392962345-19-rd0z",
        "scoresHighlight": {},
        "studentId": "st-1790392962345-19-rd0z",
        "fullName": "Vũ Đức Mạnh",
        "email": "vcmnh412",
        "no": 32
      },
      {
        "id": "row-st-1790392962345-2-eri2",
        "fullName": "Phạm Thùy Dương",
        "email": "phmthydng395",
        "studentId": "st-1790392962345-2-eri2",
        "scores": {},
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "hpStatus": "Nợ 5.6tr",
        "no": 33
      },
      {
        "hpStatus": "Nợ 5.6tr",
        "studentId": "st-1790392962345-3-8pkv",
        "scores": {},
        "id": "row-st-1790392962345-3-8pkv",
        "scoresHighlight": {},
        "email": "nguyngiabo396",
        "fullName": "Nguyễn Gia Bảo",
        "no": 34,
        "hpHighlightColor": "yellow"
      },
      {
        "email": "trnphnglinh397",
        "id": "row-st-1790392962345-4-1cch",
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "studentId": "st-1790392962345-4-1cch",
        "scoresHighlight": {},
        "scores": {},
        "fullName": "Trần Phương Linh",
        "no": 35
      },
      {
        "scores": {},
        "id": "row-st-1790392962345-5-ynaz",
        "fullName": "Vũ Thị Anh Thư",
        "no": 36,
        "scoresHighlight": {},
        "email": "vuthianhth398",
        "hpStatus": "Nợ 5.6tr",
        "hpHighlightColor": "yellow",
        "studentId": "st-1790392962345-5-ynaz"
      },
      {
        "fullName": "Bùi Khánh Băng",
        "email": "bikhnhbng399",
        "id": "row-st-1790392962345-6-n72e",
        "scoresHighlight": {},
        "hpStatus": "Nợ 5.6tr",
        "hpHighlightColor": "yellow",
        "studentId": "st-1790392962345-6-n72e",
        "no": 37,
        "scores": {}
      },
      {
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "no": 38,
        "scores": {},
        "studentId": "st-1790392962345-7-g9pa",
        "email": "lphngvy400",
        "id": "row-st-1790392962345-7-g9pa",
        "scoresHighlight": {},
        "fullName": "Lê Phương Vy"
      },
      {
        "scores": {},
        "fullName": "Nguyễn Khánh Linh",
        "studentId": "st-1790392962345-8-p738",
        "id": "row-st-1790392962345-8-p738",
        "hpHighlightColor": "default",
        "no": 39,
        "hpStatus": "CK 17/5",
        "scoresHighlight": {},
        "email": "nguynkhnhlinh401"
      },
      {
        "fullName": "Trần Ngọc Hoàng Nam",
        "no": 40,
        "scoresHighlight": {},
        "email": "trnngchongnam402",
        "studentId": "st-1790392962345-9-tnkf",
        "id": "row-st-1790392962345-9-tnkf",
        "hpStatus": "Nợ 5.6tr",
        "scores": {},
        "hpHighlightColor": "yellow"
      }
    ],
    "courseTuitionTag": "5.6tr",
    "updatedAt": "2026-09-26T18:26:01.800Z"
  },
  {
    "id": "sheet-cls-1790002180971",
    "classBanner": "Lớp 75 (Thứ 2 + Thứ 5 (Ca 1: 18:00 - 19:45)) 2",
    "columns": [
      {
        "lessonLabel": "L1",
        "id": "c1",
        "maxScore": 10,
        "teacherAndDate": "L1 Nguyễn",
        "subSkill": "Từ vựng & Viết"
      },
      {
        "lessonLabel": "L2",
        "maxScore": 10,
        "subSkill": "Viết & Nghe",
        "teacherAndDate": "L2 Nguyễn",
        "id": "c2"
      },
      {
        "lessonLabel": "L3",
        "teacherAndDate": "L3 Nguyễn",
        "id": "c3",
        "maxScore": 10,
        "subSkill": "Nghe 10"
      },
      {
        "teacherAndDate": "L4 Nguyễn",
        "id": "c4",
        "subSkill": "Đọc 13",
        "lessonLabel": "L4",
        "maxScore": 13
      }
    ],
    "classId": "cls-1790002180971",
    "tagText": "INSPI",
    "rows": [
      {
        "email": "inhlmphong195",
        "hpStatus": "Nợ 5.6tr",
        "id": "row-st-1790002180972-0-d8a1",
        "fullName": "Đinh Lâm Phong",
        "studentId": "st-1790002180972-0-d8a1",
        "no": 1,
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "scores": {}
      },
      {
        "fullName": "Đoàn Anh Việt",
        "no": 2,
        "studentId": "st-1790002180972-1-jz0b",
        "email": "onanhvit196",
        "id": "row-st-1790002180972-1-jz0b",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "hpStatus": "Nợ 5.6tr",
        "scores": {}
      },
      {
        "email": "nguynthhuyntrang205",
        "id": "row-st-1790002180972-10-5oab",
        "fullName": "Nguyễn Thị Huyền Trang",
        "scores": {},
        "studentId": "st-1790002180972-10-5oab",
        "scoresHighlight": {},
        "no": 3,
        "hpStatus": "Nợ 5.6tr",
        "hpHighlightColor": "yellow"
      },
      {
        "scores": {},
        "no": 4,
        "studentId": "st-1790002180972-11-32t1",
        "hpStatus": "Nợ 5.6tr",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "email": "lanhc206",
        "fullName": "Lê Anh Đức",
        "id": "row-st-1790002180972-11-32t1"
      },
      {
        "hpStatus": "Nợ 5.6tr",
        "no": 5,
        "hpHighlightColor": "yellow",
        "scores": {},
        "fullName": "Đào Thị Thơm",
        "scoresHighlight": {},
        "studentId": "st-1790002180972-12-byw8",
        "email": "oththm207",
        "id": "row-st-1790002180972-12-byw8"
      },
      {
        "studentId": "st-1790002180972-13-6q6f",
        "hpHighlightColor": "yellow",
        "email": "phngthanh208",
        "hpStatus": "Nợ 5.6tr",
        "id": "row-st-1790002180972-13-6q6f",
        "scoresHighlight": {},
        "no": 6,
        "scores": {},
        "fullName": "Phương Thanh"
      },
      {
        "scoresHighlight": {},
        "hpStatus": "Nợ 5.6tr",
        "studentId": "st-1790002180972-14-gt2f",
        "scores": {},
        "id": "row-st-1790002180972-14-gt2f",
        "email": "vlminhkhang209",
        "fullName": "Vũ Lê Minh Khang",
        "no": 7,
        "hpHighlightColor": "yellow"
      },
      {
        "fullName": "Bùi Trần Thảo Nguyên",
        "scores": {},
        "hpHighlightColor": "default",
        "id": "row-st-1790002180972-15-opru",
        "email": "bitrnthonguyn210",
        "studentId": "st-1790002180972-15-opru",
        "hpStatus": "CK 17/5",
        "no": 8,
        "scoresHighlight": {}
      },
      {
        "hpHighlightColor": "yellow",
        "no": 9,
        "hpStatus": "Nợ 5.6tr",
        "scoresHighlight": {},
        "email": "phmthylm211",
        "fullName": "Phạm Thùy Lâm",
        "studentId": "st-1790002180972-16-o1js",
        "scores": {},
        "id": "row-st-1790002180972-16-o1js"
      },
      {
        "hpHighlightColor": "yellow",
        "no": 10,
        "email": "phmththanhmai212",
        "fullName": "Phạm Thị Thanh Mai",
        "scores": {},
        "hpStatus": "Nợ 5.6tr",
        "studentId": "st-1790002180972-17-ax34",
        "id": "row-st-1790002180972-17-ax34",
        "scoresHighlight": {}
      },
      {
        "fullName": "Mai Hoàng Bách",
        "email": "maihongbch213",
        "id": "row-st-1790002180972-18-wchz",
        "scoresHighlight": {},
        "no": 11,
        "hpStatus": "Nợ 5.6tr",
        "hpHighlightColor": "yellow",
        "scores": {},
        "studentId": "st-1790002180972-18-wchz"
      },
      {
        "hpStatus": "Nợ 5.6tr",
        "scores": {},
        "email": "hnggiang61197",
        "id": "row-st-1790002180972-2-ejqf",
        "studentId": "st-1790002180972-2-ejqf",
        "fullName": "Hương Giang 61",
        "scoresHighlight": {},
        "no": 12,
        "hpHighlightColor": "yellow"
      },
      {
        "hpStatus": "Nợ 5.6tr",
        "no": 13,
        "hpHighlightColor": "yellow",
        "scores": {},
        "studentId": "st-1790002180972-3-44hf",
        "fullName": "Nguyễn Thụy Khang",
        "email": "nguynthykhang198",
        "scoresHighlight": {},
        "id": "row-st-1790002180972-3-44hf"
      },
      {
        "fullName": "Võ Minh Thu",
        "hpHighlightColor": "yellow",
        "email": "vminhthu199",
        "studentId": "st-1790002180972-4-j0qw",
        "no": 14,
        "scoresHighlight": {},
        "id": "row-st-1790002180972-4-j0qw",
        "hpStatus": "Nợ 5.6tr",
        "scores": {}
      },
      {
        "studentId": "st-1790002180972-5-1w54",
        "hpStatus": "Nợ 5.6tr",
        "email": "nguynthanhuyn200",
        "no": 15,
        "hpHighlightColor": "yellow",
        "fullName": "Nguyễn Thanh Uyên",
        "scoresHighlight": {},
        "id": "row-st-1790002180972-5-1w54",
        "scores": {}
      },
      {
        "fullName": "Hoàng Mạnh Dũng",
        "email": "hongmnhdng201",
        "no": 16,
        "id": "row-st-1790002180972-6-nmvn",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "scores": {},
        "hpStatus": "Nợ 5.6tr",
        "studentId": "st-1790002180972-6-nmvn"
      },
      {
        "no": 17,
        "fullName": "Thuỳ Dung",
        "email": "thudung202",
        "studentId": "st-1790002180972-7-26ml",
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "scores": {},
        "id": "row-st-1790002180972-7-26ml",
        "scoresHighlight": {}
      },
      {
        "scores": {},
        "scoresHighlight": {},
        "hpHighlightColor": "default",
        "id": "row-st-1790002180972-8-amhj",
        "fullName": "Ngọc Diệp",
        "no": 18,
        "hpStatus": "CK 17/5",
        "studentId": "st-1790002180972-8-amhj",
        "email": "ngcdip203"
      },
      {
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "no": 19,
        "scores": {},
        "fullName": "Nguyễn Đắc Việt Anh",
        "scoresHighlight": {},
        "studentId": "st-1790002180972-9-ysdi",
        "email": "nguyncvitanh204",
        "id": "row-st-1790002180972-9-ysdi"
      }
    ],
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "updatedAt": "2026-09-23T04:53:45.989Z",
    "courseTuitionTag": "5.6tr"
  },
  {
    "id": "sheet-cls-1790328298831",
    "classBanner": "Lớp 80 (Thứ 4 + Thứ 7 (Ca 1: 18:00 - 19:45)) 1",
    "columns": [
      {
        "maxScore": 10,
        "sessionNumber": 1,
        "lessonLabel": "L1",
        "teacherAndDate": "L1 Chi",
        "subSkill": "Từ vựng & Viết",
        "id": "c1"
      },
      {
        "maxScore": 10,
        "lessonLabel": "L2",
        "sessionNumber": 2,
        "subSkill": "Viết & Nghe",
        "id": "c2",
        "teacherAndDate": "L2 Chi"
      },
      {
        "sessionNumber": 3,
        "teacherAndDate": "L3 Chi",
        "maxScore": 10,
        "id": "c3",
        "subSkill": "Nghe 10",
        "lessonLabel": "L3"
      },
      {
        "teacherAndDate": "L4 Chi",
        "maxScore": 13,
        "lessonLabel": "L4",
        "id": "c4",
        "subSkill": "Đọc 13",
        "sessionNumber": 4
      },
      {
        "lessonLabel": "L23",
        "sessionNumber": 23,
        "maxScore": 10,
        "id": "col_sess_23_1790569769546",
        "teacherAndDate": "09-26 Chi",
        "subSkill": "Đọc",
        "date": "2026-09-26"
      }
    ],
    "classId": "cls-1790328298831",
    "tagText": "INSPI",
    "rows": [
      {
        "id": "row-st-1790328298834-0-vwk0",
        "fullName": "Trần Đức Phúc",
        "hpHighlightColor": "yellow",
        "studentId": "st-1790328298834-0-vwk0",
        "hpStatus": "Nợ 5.0tr",
        "email": "trncphc306",
        "scores": {
          "col_sess_23_1790569769546": "8"
        },
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "no": 1
      },
      {
        "studentId": "st-1790328298834-1-sepp",
        "hpStatus": "Nợ 5.0tr",
        "no": 2,
        "hpHighlightColor": "yellow",
        "fullName": "Dương Tuấn Anh",
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "id": "row-st-1790328298834-1-sepp",
        "scores": {
          "col_sess_23_1790569769546": "9"
        },
        "email": "dngtunanh307"
      },
      {
        "id": "row-st-1790328298835-2-axk9",
        "fullName": "Phương Thảo",
        "scoresHighlight": {
          "col_sess_23_1790569769546": "red"
        },
        "scores": {
          "col_sess_23_1790569769546": "vắng"
        },
        "email": "phngtho308",
        "studentId": "st-1790328298835-2-axk9",
        "hpStatus": "Nợ 5.0tr",
        "no": 3,
        "hpHighlightColor": "yellow"
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "studentId": "st-1790328298835-3-70z0",
        "id": "row-st-1790328298835-3-70z0",
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "fullName": "Trịnh Thị Phương Nhung",
        "scores": {
          "col_sess_23_1790569769546": "8"
        },
        "no": 4,
        "email": "trnhthphngnhung309",
        "hpHighlightColor": "yellow"
      },
      {
        "fullName": "Vũ Thị Mai Anh",
        "email": "vthmaianh310",
        "no": 5,
        "studentId": "st-1790328298835-4-6arv",
        "id": "row-st-1790328298835-4-6arv",
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "hpStatus": "CK 17/5",
        "scores": {
          "col_sess_23_1790569769546": "10"
        },
        "hpHighlightColor": "default"
      },
      {
        "studentId": "st-1790328298835-5-i0ku",
        "hpStatus": "Nợ 5.0tr",
        "email": "aonnghun311",
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "id": "row-st-1790328298835-5-i0ku",
        "scores": {
          "col_sess_23_1790569769546": "7"
        },
        "hpHighlightColor": "yellow",
        "fullName": "Đào Năng Huân",
        "no": 6
      },
      {
        "studentId": "st-1790328298835-6-1atb",
        "no": 7,
        "scores": {
          "col_sess_23_1790569769546": "12"
        },
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "fullName": "Bùi Huy Phong",
        "email": "bihuyphong312",
        "hpStatus": "Nợ 5.0tr",
        "hpHighlightColor": "yellow",
        "id": "row-st-1790328298835-6-1atb"
      },
      {
        "fullName": "Đào Hương Trà",
        "no": 8,
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "hpHighlightColor": "yellow",
        "scores": {
          "col_sess_23_1790569769546": "12"
        },
        "studentId": "st-1790328298836-10-yt9j",
        "hpStatus": "Nợ 5.0tr",
        "id": "row-st-1790328298836-10-yt9j",
        "email": "ohngtr316"
      },
      {
        "fullName": "Phạm Bảo Sơn",
        "studentId": "st-1790328298836-11-hwds",
        "no": 9,
        "email": "phmbosn317",
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.0tr",
        "id": "row-st-1790328298836-11-hwds",
        "scores": {
          "col_sess_23_1790569769546": "9"
        }
      },
      {
        "email": "phmthomy313",
        "hpStatus": "Nợ 5.0tr",
        "no": 10,
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "scores": {
          "col_sess_23_1790569769546": "11"
        },
        "studentId": "st-1790328298836-7-kc4v",
        "id": "row-st-1790328298836-7-kc4v",
        "fullName": "Phạm Thảo My",
        "hpHighlightColor": "yellow"
      },
      {
        "studentId": "st-1790328298836-8-3me7",
        "fullName": "Vũ Kiều Trang",
        "hpHighlightColor": "yellow",
        "email": "vkiutrang314",
        "no": 11,
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "id": "row-st-1790328298836-8-3me7",
        "hpStatus": "Nợ 5.0tr",
        "scores": {
          "col_sess_23_1790569769546": "10"
        }
      },
      {
        "hpHighlightColor": "yellow",
        "email": "lngynnhi315",
        "no": 12,
        "hpStatus": "Nợ 5.0tr",
        "fullName": "Lương Yến Nhi",
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "studentId": "st-1790328298836-9-oyw0",
        "scores": {
          "col_sess_23_1790569769546": "11"
        },
        "id": "row-st-1790328298836-9-oyw0"
      },
      {
        "studentId": "st-1790328298837-12-nznj",
        "no": 13,
        "hpStatus": "Nợ 5.0tr",
        "scores": {
          "col_sess_23_1790569769546": "10"
        },
        "email": "nguynhlinh318",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "fullName": "Nguyễn Hà Linh",
        "id": "row-st-1790328298837-12-nznj"
      },
      {
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "scores": {
          "col_sess_23_1790569769546": "9"
        },
        "id": "row-st-1790328298837-13-bakr",
        "hpHighlightColor": "yellow",
        "fullName": "Lê Thị Nhung",
        "email": "lthnhung319",
        "studentId": "st-1790328298837-13-bakr",
        "hpStatus": "Nợ 5.0tr",
        "no": 14
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "id": "row-st-1790328298837-14-68q6",
        "scores": {
          "col_sess_23_1790569769546": "5"
        },
        "scoresHighlight": {
          "col_sess_23_1790569769546": "yellow"
        },
        "hpHighlightColor": "yellow",
        "fullName": "Nguyễn Dương Hương Quỳnh",
        "no": 15,
        "studentId": "st-1790328298837-14-68q6",
        "email": "nguyndnghngqunh320"
      },
      {
        "email": "bixunsn321",
        "fullName": "Bùi Xuân Sơn",
        "no": 16,
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "id": "row-st-1790328298837-15-3o7i",
        "scores": {
          "col_sess_23_1790569769546": "6"
        },
        "hpHighlightColor": "yellow",
        "studentId": "st-1790328298837-15-3o7i",
        "hpStatus": "Nợ 5.0tr"
      },
      {
        "fullName": "Vũ Việt Hoàng",
        "id": "row-st-1790328298837-16-09k4",
        "email": "vvithong322",
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "studentId": "st-1790328298837-16-09k4",
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.0tr",
        "scores": {
          "col_sess_23_1790569769546": "8"
        },
        "no": 17
      },
      {
        "studentId": "st-1790328298837-17-4uh0",
        "email": "nguynquangtinminh323",
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "hpStatus": "Nợ 5.0tr",
        "scores": {
          "col_sess_23_1790569769546": "8"
        },
        "hpHighlightColor": "yellow",
        "id": "row-st-1790328298837-17-4uh0",
        "no": 18,
        "fullName": "Nguyễn Quang Tiến Minh"
      },
      {
        "studentId": "st-1790328298837-18-uiwn",
        "hpStatus": "Nợ 5.0tr",
        "scores": {
          "col_sess_23_1790569769546": "9"
        },
        "id": "row-st-1790328298837-18-uiwn",
        "hpHighlightColor": "yellow",
        "email": "mckhnhphng324",
        "fullName": "Mạc Khánh Phượng",
        "no": 19,
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        }
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "scoresHighlight": {
          "col_sess_23_1790569769546": "default"
        },
        "no": 20,
        "scores": {
          "col_sess_23_1790569769546": "10"
        },
        "hpHighlightColor": "yellow",
        "email": "caophngthy325",
        "fullName": "Cao Phương Thùy",
        "studentId": "st-1790328298837-19-navl",
        "id": "row-st-1790328298837-19-navl"
      }
    ],
    "branch": "Cơ sở 2 - Kiến An (Hải Phòng)",
    "updatedAt": "2026-09-28T04:29:31.687Z",
    "courseTuitionTag": "5.0tr"
  },
  {
    "id": "sheet-cls-1790328434476",
    "columns": [
      {
        "date": "2026-09-26",
        "sessionNumber": 17,
        "subSkill": "Từ vựng, Nghe, Đọc",
        "teacherAndDate": "09-26 Chi",
        "id": "col_sess_17_1790407970277",
        "lessonLabel": "L17",
        "maxScore": 10
      }
    ],
    "classId": "cls-1790328434476",
    "courseTuitionTag": "5tr2",
    "rows": [
      {
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        },
        "id": "row-st-1790328434476-0-wgee",
        "hpStatus": "Đã học",
        "studentId": "st-1790328434476-0-wgee",
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "fullName": "Vũ Minh Nhi",
        "email": "",
        "no": 1,
        "hpHighlightColor": "default"
      },
      {
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        },
        "fullName": "Cao Thị Phương Thảo",
        "no": 2,
        "email": "",
        "studentId": "st-1790328434476-1-7luo",
        "id": "row-st-1790328434476-1-7luo",
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "hpHighlightColor": "default",
        "hpStatus": "Đã học"
      },
      {
        "no": 3,
        "studentId": "st-1790328434476-10-7za3",
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "email": "",
        "fullName": "Lê Thị Ánh Hồng",
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        },
        "id": "row-st-1790328434476-10-7za3"
      },
      {
        "id": "row-st-1790328434476-11-8xap",
        "fullName": "Nguyễn Kiều Trinh",
        "studentId": "st-1790328434476-11-8xap",
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        },
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "email": "",
        "hpStatus": "Đã học",
        "no": 4
      },
      {
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "id": "row-st-1790328434476-12-3ljv",
        "fullName": "Nguyễn Minh Phúc",
        "studentId": "st-1790328434476-12-3ljv",
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "email": "",
        "no": 5,
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        }
      },
      {
        "hpHighlightColor": "default",
        "no": 6,
        "fullName": "Lương Minh Thắng",
        "id": "row-st-1790328434476-13-41vk",
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        },
        "email": "",
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "hpStatus": "Đã học",
        "studentId": "st-1790328434476-13-41vk"
      },
      {
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "hpStatus": "Đã học",
        "no": 7,
        "id": "row-st-1790328434476-14-m0qu",
        "hpHighlightColor": "default",
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        },
        "fullName": "Phạm Đức Duy",
        "studentId": "st-1790328434476-14-m0qu",
        "email": ""
      },
      {
        "fullName": "Nguyễn Duy Hải",
        "hpHighlightColor": "default",
        "email": "",
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "no": 8,
        "hpStatus": "Đã học",
        "id": "row-st-1790328434476-15-gg00",
        "studentId": "st-1790328434476-15-gg00",
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        }
      },
      {
        "scores": {
          "col_sess_17_1790407970277": "vắng"
        },
        "id": "row-st-1790328434476-16-j1yy",
        "hpHighlightColor": "default",
        "studentId": "st-1790328434476-16-j1yy",
        "fullName": "Đỗ Tiến Lộc",
        "hpStatus": "Đã học",
        "scoresHighlight": {
          "col_sess_17_1790407970277": "red"
        },
        "email": "",
        "no": 9
      },
      {
        "hpStatus": "Đã học",
        "scoresHighlight": {
          "col_sess_17_1790407970277": "red"
        },
        "id": "row-st-1790328434476-17-dvqx",
        "email": "",
        "scores": {
          "col_sess_17_1790407970277": "vắng"
        },
        "hpHighlightColor": "default",
        "fullName": "Phạm Nguyễn Lan Phương",
        "studentId": "st-1790328434476-17-dvqx",
        "no": 10
      },
      {
        "fullName": "Phạm Quang Minh",
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        },
        "id": "row-st-1790328434476-18-o3qb",
        "email": "",
        "no": 11,
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "hpHighlightColor": "default",
        "studentId": "st-1790328434476-18-o3qb"
      },
      {
        "hpHighlightColor": "default",
        "no": 12,
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "email": "",
        "hpStatus": "Đã học",
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        },
        "fullName": "Vũ Thị Thanh Dung",
        "studentId": "st-1790328434476-2-xkct",
        "id": "row-st-1790328434476-2-xkct"
      },
      {
        "hpHighlightColor": "default",
        "id": "row-st-1790328434476-3-1oui",
        "fullName": "Đặng Minh Anh",
        "studentId": "st-1790328434476-3-1oui",
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        },
        "email": "",
        "no": 13,
        "hpStatus": "Đã học"
      },
      {
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "no": 14,
        "hpHighlightColor": "default",
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        },
        "studentId": "st-1790328434476-4-5a9q",
        "email": "",
        "fullName": "Vũ Hải Anh",
        "id": "row-st-1790328434476-4-5a9q"
      },
      {
        "email": "",
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "studentId": "st-1790328434476-5-ii3m",
        "id": "row-st-1790328434476-5-ii3m",
        "no": 15,
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        },
        "fullName": "Bùi Thu Hương 86"
      },
      {
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        },
        "no": 16,
        "fullName": "Nguyễn Trường Phúc",
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "hpHighlightColor": "default",
        "hpStatus": "Đã học",
        "email": "",
        "studentId": "st-1790328434476-6-l95a",
        "id": "row-st-1790328434476-6-l95a"
      },
      {
        "id": "row-st-1790328434476-7-yjmn",
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "email": "",
        "fullName": "Nguyễn Minh Hạnh",
        "hpHighlightColor": "default",
        "studentId": "st-1790328434476-7-yjmn",
        "no": 17,
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        }
      },
      {
        "studentId": "st-1790328434476-8-59w7",
        "no": 18,
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        },
        "fullName": "Nguyễn Thị Vân Nhi",
        "id": "row-st-1790328434476-8-59w7",
        "email": "",
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "hpStatus": "Đã học",
        "hpHighlightColor": "default"
      },
      {
        "scoresHighlight": {
          "col_sess_17_1790407970277": "default"
        },
        "no": 19,
        "hpHighlightColor": "default",
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_17_1790407970277": "x"
        },
        "studentId": "st-1790328434476-9-todd",
        "fullName": "Vũ Hải Yến",
        "email": "",
        "id": "row-st-1790328434476-9-todd"
      }
    ],
    "tagText": "INSPI",
    "branch": "Cơ sở 1 - Tô Hiệu",
    "updatedAt": "2026-09-26T07:33:00.872Z",
    "classBanner": "Bảng điểm Lớp cls-1790328434476"
  },
  {
    "id": "sheet-cls-1790328477276",
    "rows": [
      {
        "no": 1,
        "studentId": "st-1790328477276-2-rxe6",
        "scoresHighlight": {
          "col_sess_1_1790600483538": "default"
        },
        "hpStatus": "Đã học",
        "email": "",
        "scores": {
          "col_sess_1_1790600483538": "0"
        },
        "hpHighlightColor": "default",
        "fullName": "Bùi Thế Hải Anh",
        "id": "row-st-1790328477276-2-rxe6"
      }
    ],
    "classBanner": "Bảng điểm Lớp cls-1790328477276",
    "branch": "Cơ sở 1 - Tô Hiệu",
    "classId": "cls-1790328477276",
    "columns": [
      {
        "sessionNumber": 1,
        "lessonLabel": "L1",
        "date": "2026-09-28",
        "maxScore": 10,
        "subSkill": "Từ vựng",
        "id": "col_sess_1_1790600483538",
        "teacherAndDate": "09-28 GV"
      }
    ],
    "courseTuitionTag": "5tr2",
    "tagText": "INSPI",
    "updatedAt": "2026-09-28T13:03:14.095Z"
  },
  {
    "id": "sheet-cls-1790390511388",
    "branch": "Cơ sở 1 - Tô Hiệu",
    "updatedAt": "2026-09-28T15:14:37.243Z",
    "tagText": "INSPI",
    "classBanner": "Bảng điểm Lớp cls-1790390511388",
    "rows": [
      {
        "no": 1,
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_1_1790603773599": "9.3"
        },
        "hpHighlightColor": "default",
        "scoresHighlight": {
          "col_sess_1_1790603773599": "default"
        },
        "email": "",
        "fullName": "Tester",
        "id": "row-student-vocab-1790603772414",
        "studentId": "student-vocab-1790603772414"
      },
      {
        "no": 2,
        "email": "",
        "hpStatus": "Đã học",
        "studentId": "st-1790390511388-0-fl1x",
        "fullName": "Vũ Anh Khoa",
        "hpHighlightColor": "default",
        "id": "row-st-1790390511388-0-fl1x",
        "scoresHighlight": {
          "col_sess_1_1790603773599": "default"
        },
        "scores": {
          "col_sess_1_1790603773599": "13"
        }
      },
      {
        "no": 3,
        "scores": {
          "col_sess_1_1790603773599": "14"
        },
        "fullName": "Phùng Tuấn Kiệt",
        "scoresHighlight": {
          "col_sess_1_1790603773599": "default"
        },
        "hpHighlightColor": "default",
        "email": "",
        "id": "row-st-1790390511388-1-4n2p",
        "studentId": "st-1790390511388-1-4n2p",
        "hpStatus": "Đã học"
      },
      {
        "no": 4,
        "studentId": "st-1790390511388-10-6g53",
        "scoresHighlight": {
          "col_sess_1_1790603773599": "default"
        },
        "hpStatus": "Đã học",
        "email": "",
        "scores": {
          "col_sess_1_1790603773599": "17"
        },
        "hpHighlightColor": "default",
        "fullName": "Nguyễn Ngọc Thùy Chi",
        "id": "row-st-1790390511388-10-6g53"
      },
      {
        "id": "row-st-1790390511388-11-zh7z",
        "email": "",
        "hpStatus": "Đã học",
        "fullName": "Đỗ Trâm Anh",
        "scoresHighlight": {
          "col_sess_1_1790603773599": "default"
        },
        "hpHighlightColor": "default",
        "studentId": "st-1790390511388-11-zh7z",
        "no": 5,
        "scores": {
          "col_sess_1_1790603773599": "21"
        }
      },
      {
        "studentId": "st-1790390511388-12-6ly4",
        "scoresHighlight": {
          "col_sess_1_1790603773599": "default"
        },
        "hpStatus": "Đã học",
        "id": "row-st-1790390511388-12-6ly4",
        "scores": {
          "col_sess_1_1790603773599": "11"
        },
        "hpHighlightColor": "default",
        "no": 6,
        "fullName": "Phạm Bảo Lâm Tùng",
        "email": ""
      },
      {
        "no": 7,
        "scores": {
          "col_sess_1_1790603773599": "24"
        },
        "fullName": "Trần Bảo Anh",
        "scoresHighlight": {
          "col_sess_1_1790603773599": "default"
        },
        "hpHighlightColor": "default",
        "email": "",
        "id": "row-st-1790390511388-13-ut2s",
        "hpStatus": "Đã học",
        "studentId": "st-1790390511388-13-ut2s"
      },
      {
        "id": "row-st-1790390511388-14-zm8t",
        "hpHighlightColor": "default",
        "fullName": "Phạm Trần Thảo Nguyên 72",
        "studentId": "st-1790390511388-14-zm8t",
        "scoresHighlight": {
          "col_sess_1_1790603773599": "red"
        },
        "scores": {
          "col_sess_1_1790603773599": "vắng"
        },
        "hpStatus": "Đã học",
        "no": 8,
        "email": ""
      },
      {
        "email": "",
        "id": "row-st-1790390511388-2-2nu9",
        "scoresHighlight": {
          "col_sess_1_1790603773599": "default"
        },
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_1_1790603773599": "9"
        },
        "no": 9,
        "fullName": "Trịnh Duy Khang",
        "studentId": "st-1790390511388-2-2nu9",
        "hpHighlightColor": "default"
      },
      {
        "no": 10,
        "fullName": "Trần Thị Thanh Hằng",
        "scoresHighlight": {
          "col_sess_1_1790603773599": "default"
        },
        "scores": {
          "col_sess_1_1790603773599": "11"
        },
        "email": "",
        "hpStatus": "Đã học",
        "studentId": "st-1790390511388-3-xwb0",
        "hpHighlightColor": "default",
        "id": "row-st-1790390511388-3-xwb0"
      },
      {
        "email": "",
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_1_1790603773599": "15"
        },
        "no": 11,
        "hpStatus": "Đã học",
        "studentId": "st-1790390511388-4-bbw7",
        "id": "row-st-1790390511388-4-bbw7",
        "fullName": "Trịnh Thiên Phú",
        "scoresHighlight": {
          "col_sess_1_1790603773599": "default"
        }
      },
      {
        "no": 12,
        "email": "",
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_1_1790603773599": "vắng"
        },
        "fullName": "Phạm Quỳnh Anh",
        "id": "row-st-1790390511388-5-0luu",
        "hpStatus": "Đã học",
        "scoresHighlight": {
          "col_sess_1_1790603773599": "red"
        },
        "studentId": "st-1790390511388-5-0luu"
      },
      {
        "no": 13,
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_1_1790603773599": "11"
        },
        "id": "row-st-1790390511388-6-9nzm",
        "scoresHighlight": {
          "col_sess_1_1790603773599": "default"
        },
        "fullName": "Đặng Thị Thu Trang",
        "studentId": "st-1790390511388-6-9nzm",
        "email": ""
      },
      {
        "fullName": "Phạm Thị Minh",
        "no": 14,
        "email": "",
        "scoresHighlight": {
          "col_sess_1_1790603773599": "default"
        },
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "id": "row-st-1790390511388-7-0um6",
        "scores": {
          "col_sess_1_1790603773599": "12"
        },
        "studentId": "st-1790390511388-7-0um6"
      },
      {
        "scoresHighlight": {
          "col_sess_1_1790603773599": "default"
        },
        "hpHighlightColor": "default",
        "id": "row-st-1790390511388-8-1z2x",
        "fullName": "Nguyễn Hà Anh Tú",
        "email": "",
        "no": 15,
        "scores": {
          "col_sess_1_1790603773599": "17"
        },
        "studentId": "st-1790390511388-8-1z2x",
        "hpStatus": "Đã học"
      },
      {
        "email": "",
        "hpStatus": "Đã học",
        "scoresHighlight": {
          "col_sess_1_1790603773599": "default"
        },
        "id": "row-st-1790390511388-9-vbjn",
        "scores": {
          "col_sess_1_1790603773599": "13"
        },
        "studentId": "st-1790390511388-9-vbjn",
        "fullName": "Đỗ Anh Thư",
        "no": 16,
        "hpHighlightColor": "default"
      }
    ],
    "columns": [
      {
        "lessonLabel": "L1",
        "subSkill": "Từ vựng",
        "id": "col_sess_1_1790603773599",
        "teacherAndDate": "09-28 GV",
        "date": "2026-09-28",
        "sessionNumber": 1,
        "maxScore": 10
      }
    ],
    "classId": "cls-1790390511388",
    "courseTuitionTag": "5tr2"
  },
  {
    "id": "sheet-cls-1790392962345",
    "classBanner": "Lớp 71 (Thứ 4 + Thứ 7 (Ca 1: 18:00 - 19:45)) 5",
    "rows": [
      {
        "hpStatus": "Nợ 5.6tr",
        "scores": {},
        "studentId": "st-1790001971742-0-wnxf",
        "no": 1,
        "scoresHighlight": {},
        "id": "row-st-1790001971742-0-wnxf",
        "hpHighlightColor": "yellow",
        "fullName": "Nguyễn Thị Khánh Ngọc",
        "email": "nguynthkhnhngc175"
      },
      {
        "no": 2,
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "email": "bingcdiulinh176",
        "scores": {},
        "fullName": "Bùi Ngọc Diệu Linh",
        "id": "row-st-1790001971742-1-a16g",
        "studentId": "st-1790001971742-1-a16g"
      },
      {
        "scoresHighlight": {},
        "no": 3,
        "hpHighlightColor": "yellow",
        "scores": {},
        "fullName": "Lê Thanh Dương",
        "email": "lthanhdng185",
        "id": "row-st-1790001971742-10-osa1",
        "hpStatus": "Nợ 5.6tr",
        "studentId": "st-1790001971742-10-osa1"
      },
      {
        "email": "phmgiakhi186",
        "id": "row-st-1790001971742-11-5zrp",
        "studentId": "st-1790001971742-11-5zrp",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "hpStatus": "Nợ 5.6tr",
        "fullName": "Phạm Gia Khải",
        "no": 4,
        "scores": {}
      },
      {
        "hpHighlightColor": "yellow",
        "no": 5,
        "hpStatus": "Nợ 5.6tr",
        "email": "nguynngckimngn187",
        "fullName": "Nguyễn Ngọc Kim Ngân",
        "studentId": "st-1790001971742-12-saxm",
        "scoresHighlight": {},
        "scores": {},
        "id": "row-st-1790001971742-12-saxm"
      },
      {
        "scoresHighlight": {},
        "no": 6,
        "fullName": "Trần Thuỳ Dương",
        "scores": {},
        "studentId": "st-1790001971742-13-ncrh",
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "email": "trnthudng188",
        "id": "row-st-1790001971742-13-ncrh"
      },
      {
        "no": 7,
        "fullName": "Nguyễn Hoàng Hải",
        "hpHighlightColor": "yellow",
        "scores": {},
        "email": "nguynhonghi189",
        "hpStatus": "Nợ 5.6tr",
        "scoresHighlight": {},
        "studentId": "st-1790001971742-14-i7vq",
        "id": "row-st-1790001971742-14-i7vq"
      },
      {
        "scores": {},
        "fullName": "Mãn Khánh Linh 61",
        "no": 8,
        "email": "mnkhnhlinh61190",
        "id": "row-st-1790001971742-15-pw5l",
        "hpStatus": "Nợ 5.6tr",
        "scoresHighlight": {},
        "studentId": "st-1790001971742-15-pw5l",
        "hpHighlightColor": "yellow"
      },
      {
        "studentId": "st-1790001971742-16-iu4o",
        "id": "row-st-1790001971742-16-iu4o",
        "hpStatus": "Nợ 5.6tr",
        "scores": {},
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "fullName": "Thúy Ngân",
        "no": 9,
        "email": "thyngn191"
      },
      {
        "scores": {},
        "studentId": "st-1790001971742-17-i28a",
        "hpHighlightColor": "yellow",
        "no": 10,
        "scoresHighlight": {},
        "fullName": "Võ Hải Nam",
        "id": "row-st-1790001971742-17-i28a",
        "email": "vhinam192",
        "hpStatus": "Nợ 5.6tr"
      },
      {
        "scoresHighlight": {},
        "id": "row-st-1790001971742-18-jp9y",
        "fullName": "Nguyễn Thúy Tuyên",
        "email": "nguynthytuyn193",
        "no": 11,
        "hpHighlightColor": "yellow",
        "scores": {},
        "hpStatus": "Nợ 5.6tr",
        "studentId": "st-1790001971742-18-jp9y"
      },
      {
        "studentId": "st-1790001971742-19-yauq",
        "hpStatus": "Nợ 5.6tr",
        "email": "vcmnh194",
        "scoresHighlight": {},
        "no": 12,
        "scores": {},
        "fullName": "Vũ Đức Mạnh",
        "id": "row-st-1790001971742-19-yauq",
        "hpHighlightColor": "yellow"
      },
      {
        "scores": {},
        "fullName": "Phạm Thùy Dương",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "no": 13,
        "studentId": "st-1790001971742-2-yrqp",
        "hpStatus": "Nợ 5.6tr",
        "email": "phmthydng177",
        "id": "row-st-1790001971742-2-yrqp"
      },
      {
        "id": "row-st-1790001971742-3-j2pw",
        "hpHighlightColor": "yellow",
        "fullName": "Nguyễn Gia Bảo",
        "scoresHighlight": {},
        "email": "nguyngiabo178",
        "hpStatus": "Nợ 5.6tr",
        "scores": {},
        "no": 14,
        "studentId": "st-1790001971742-3-j2pw"
      },
      {
        "scoresHighlight": {},
        "id": "row-st-1790001971742-4-lgjf",
        "scores": {},
        "fullName": "Trần Phương Linh",
        "hpHighlightColor": "yellow",
        "email": "trnphnglinh179",
        "studentId": "st-1790001971742-4-lgjf",
        "hpStatus": "Nợ 5.6tr",
        "no": 15
      },
      {
        "hpStatus": "Nợ 5.6tr",
        "id": "row-st-1790001971742-5-r4wt",
        "scoresHighlight": {},
        "scores": {},
        "email": "vuthianhth180",
        "hpHighlightColor": "yellow",
        "fullName": "Vũ Thị Anh Thư",
        "studentId": "st-1790001971742-5-r4wt",
        "no": 16
      },
      {
        "scores": {},
        "id": "row-st-1790001971742-6-3r2h",
        "hpHighlightColor": "yellow",
        "fullName": "Bùi Khánh Băng",
        "studentId": "st-1790001971742-6-3r2h",
        "hpStatus": "Nợ 5.6tr",
        "scoresHighlight": {},
        "email": "bikhnhbng181",
        "no": 17
      },
      {
        "fullName": "Lê Phương Vy",
        "email": "lphngvy182",
        "hpHighlightColor": "yellow",
        "no": 18,
        "scores": {},
        "hpStatus": "Nợ 5.6tr",
        "id": "row-st-1790001971742-7-leg0",
        "studentId": "st-1790001971742-7-leg0",
        "scoresHighlight": {}
      },
      {
        "scores": {},
        "hpStatus": "CK 17/5",
        "no": 19,
        "id": "row-st-1790001971742-8-p0i4",
        "scoresHighlight": {},
        "hpHighlightColor": "default",
        "fullName": "Nguyễn Khánh Linh",
        "email": "nguynkhnhlinh183",
        "studentId": "st-1790001971742-8-p0i4"
      },
      {
        "hpHighlightColor": "yellow",
        "no": 20,
        "fullName": "Trần Ngọc Hoàng Nam",
        "scoresHighlight": {},
        "id": "row-st-1790001971742-9-btay",
        "email": "trnngchongnam184",
        "scores": {},
        "hpStatus": "Nợ 5.6tr",
        "studentId": "st-1790001971742-9-btay"
      },
      {
        "scores": {},
        "id": "row-st-1790392962345-0-4owu",
        "fullName": "Nguyễn Thị Khánh Ngọc",
        "studentId": "st-1790392962345-0-4owu",
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "email": "nguynthkhnhngc393",
        "no": 21,
        "scoresHighlight": {}
      },
      {
        "id": "row-st-1790392962345-1-3l4x",
        "fullName": "Bùi Ngọc Diệu Linh",
        "studentId": "st-1790392962345-1-3l4x",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "scores": {},
        "email": "bingcdiulinh394",
        "no": 22,
        "hpStatus": "Nợ 5.6tr"
      },
      {
        "no": 23,
        "studentId": "st-1790392962345-10-ytfg",
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "email": "lthanhdng403",
        "fullName": "Lê Thanh Dương",
        "scoresHighlight": {},
        "scores": {},
        "id": "row-st-1790392962345-10-ytfg"
      },
      {
        "scoresHighlight": {},
        "no": 24,
        "fullName": "Phạm Gia Khải",
        "email": "phmgiakhi404",
        "studentId": "st-1790392962345-11-hzzy",
        "id": "row-st-1790392962345-11-hzzy",
        "scores": {},
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr"
      },
      {
        "scoresHighlight": {},
        "id": "row-st-1790392962345-12-cnht",
        "hpStatus": "Nợ 5.6tr",
        "studentId": "st-1790392962345-12-cnht",
        "scores": {},
        "fullName": "Nguyễn Ngọc Kim Ngân",
        "no": 25,
        "email": "nguynngckimngn405",
        "hpHighlightColor": "yellow"
      },
      {
        "hpHighlightColor": "yellow",
        "no": 26,
        "scores": {},
        "fullName": "Trần Thuỳ Dương",
        "scoresHighlight": {},
        "email": "trnthudng406",
        "id": "row-st-1790392962345-13-37gi",
        "hpStatus": "Nợ 5.6tr",
        "studentId": "st-1790392962345-13-37gi"
      },
      {
        "hpStatus": "Nợ 5.6tr",
        "scoresHighlight": {},
        "no": 27,
        "scores": {},
        "hpHighlightColor": "yellow",
        "email": "nguynhonghi407",
        "fullName": "Nguyễn Hoàng Hải",
        "studentId": "st-1790392962345-14-1ugy",
        "id": "row-st-1790392962345-14-1ugy"
      },
      {
        "studentId": "st-1790392962345-15-l3t7",
        "hpStatus": "Nợ 5.6tr",
        "scores": {},
        "hpHighlightColor": "yellow",
        "id": "row-st-1790392962345-15-l3t7",
        "email": "mnkhnhlinh61408",
        "fullName": "Mãn Khánh Linh 61",
        "no": 28,
        "scoresHighlight": {}
      },
      {
        "studentId": "st-1790392962345-16-amn0",
        "email": "thyngn409",
        "scoresHighlight": {},
        "hpStatus": "Nợ 5.6tr",
        "id": "row-st-1790392962345-16-amn0",
        "scores": {},
        "hpHighlightColor": "yellow",
        "no": 29,
        "fullName": "Thúy Ngân"
      },
      {
        "fullName": "Võ Hải Nam",
        "id": "row-st-1790392962345-17-yk95",
        "email": "vhinam410",
        "scoresHighlight": {},
        "studentId": "st-1790392962345-17-yk95",
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "no": 30,
        "scores": {}
      },
      {
        "email": "nguynthytuyn411",
        "fullName": "Nguyễn Thúy Tuyên",
        "scoresHighlight": {},
        "no": 31,
        "id": "row-st-1790392962345-18-tdxm",
        "hpHighlightColor": "yellow",
        "scores": {},
        "studentId": "st-1790392962345-18-tdxm",
        "hpStatus": "Nợ 5.6tr"
      },
      {
        "hpStatus": "Nợ 5.6tr",
        "id": "row-st-1790392962345-19-rd0z",
        "scoresHighlight": {},
        "scores": {},
        "hpHighlightColor": "yellow",
        "fullName": "Vũ Đức Mạnh",
        "no": 32,
        "studentId": "st-1790392962345-19-rd0z",
        "email": "vcmnh412"
      },
      {
        "scoresHighlight": {},
        "id": "row-st-1790392962345-2-eri2",
        "scores": {},
        "hpHighlightColor": "yellow",
        "fullName": "Phạm Thùy Dương",
        "email": "phmthydng395",
        "studentId": "st-1790392962345-2-eri2",
        "hpStatus": "Nợ 5.6tr",
        "no": 33
      },
      {
        "studentId": "st-1790392962345-3-8pkv",
        "no": 34,
        "hpStatus": "Nợ 5.6tr",
        "scores": {},
        "email": "nguyngiabo396",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "fullName": "Nguyễn Gia Bảo",
        "id": "row-st-1790392962345-3-8pkv"
      },
      {
        "hpHighlightColor": "yellow",
        "email": "trnphnglinh397",
        "no": 35,
        "hpStatus": "Nợ 5.6tr",
        "fullName": "Trần Phương Linh",
        "scoresHighlight": {},
        "studentId": "st-1790392962345-4-1cch",
        "scores": {},
        "id": "row-st-1790392962345-4-1cch"
      },
      {
        "studentId": "st-1790392962345-5-ynaz",
        "fullName": "Vũ Thị Anh Thư",
        "hpHighlightColor": "yellow",
        "email": "vuthianhth398",
        "no": 36,
        "scoresHighlight": {},
        "id": "row-st-1790392962345-5-ynaz",
        "hpStatus": "Nợ 5.6tr",
        "scores": {}
      },
      {
        "hpStatus": "Nợ 5.6tr",
        "email": "bikhnhbng399",
        "no": 37,
        "scoresHighlight": {},
        "scores": {},
        "studentId": "st-1790392962345-6-n72e",
        "id": "row-st-1790392962345-6-n72e",
        "fullName": "Bùi Khánh Băng",
        "hpHighlightColor": "yellow"
      },
      {
        "fullName": "Lê Phương Vy",
        "no": 38,
        "studentId": "st-1790392962345-7-g9pa",
        "email": "lphngvy400",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.6tr",
        "id": "row-st-1790392962345-7-g9pa",
        "scores": {}
      },
      {
        "fullName": "Nguyễn Khánh Linh",
        "no": 39,
        "scoresHighlight": {},
        "hpHighlightColor": "default",
        "studentId": "st-1790392962345-8-p738",
        "scores": {},
        "hpStatus": "CK 17/5",
        "email": "nguynkhnhlinh401",
        "id": "row-st-1790392962345-8-p738"
      },
      {
        "studentId": "st-1790392962345-9-tnkf",
        "no": 40,
        "scores": {},
        "scoresHighlight": {},
        "fullName": "Trần Ngọc Hoàng Nam",
        "email": "trnngchongnam402",
        "hpStatus": "Nợ 5.6tr",
        "id": "row-st-1790392962345-9-tnkf",
        "hpHighlightColor": "yellow"
      },
      {
        "studentId": "student-vocab-1790525080477",
        "hpStatus": "Đã học",
        "email": "",
        "scoresHighlight": {
          "c1": "default"
        },
        "id": "row-student-vocab-1790525080477",
        "scores": {
          "c1": "8.8"
        },
        "hpHighlightColor": "default",
        "fullName": "Diep",
        "no": 41
      }
    ],
    "courseTuitionTag": "5.6tr",
    "updatedAt": "2026-09-27T16:04:40.610Z",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "tagText": "INSPI",
    "classId": "cls-1790392962345",
    "columns": [
      {
        "maxScore": 10,
        "lessonLabel": "L1",
        "id": "c1",
        "subSkill": "Ôn tập",
        "sessionNumber": 1,
        "teacherAndDate": "L1 Nguyễn"
      },
      {
        "teacherAndDate": "L2 Nguyễn",
        "lessonLabel": "L2",
        "sessionNumber": 2,
        "subSkill": "Viết & Nghe",
        "id": "c2",
        "maxScore": 10
      },
      {
        "id": "c3",
        "sessionNumber": 3,
        "maxScore": 10,
        "teacherAndDate": "L3 Nguyễn",
        "subSkill": "Nghe 10",
        "lessonLabel": "L3"
      },
      {
        "subSkill": "Đọc 13",
        "sessionNumber": 4,
        "id": "c4",
        "maxScore": 13,
        "teacherAndDate": "L4 Nguyễn",
        "lessonLabel": "L4"
      }
    ]
  },
  {
    "id": "sheet-cls-1790393249249",
    "updatedAt": "2026-09-28T10:09:13.877Z",
    "classBanner": "Bảng điểm Lớp cls-1790393249249",
    "branch": "Cơ sở 1 - Tô Hiệu",
    "rows": [
      {
        "scoresHighlight": {
          "col_sess_1_1790590153876": "yellow"
        },
        "no": 1,
        "email": "",
        "studentId": "student-vocab-1790590153513",
        "fullName": "nguyễn văn a",
        "scores": {
          "col_sess_1_1790590153876": "2"
        },
        "hpHighlightColor": "default",
        "hpStatus": "Đã học",
        "id": "row-student-vocab-1790590153513"
      }
    ],
    "tagText": "INSPI",
    "classId": "cls-1790393249249",
    "columns": [
      {
        "sessionNumber": 1,
        "lessonLabel": "L1",
        "teacherAndDate": "09-28 GV",
        "subSkill": "Từ vựng",
        "maxScore": 10,
        "date": "2026-09-28",
        "id": "col_sess_1_1790590153876"
      }
    ],
    "courseTuitionTag": "5tr2"
  },
  {
    "id": "sheet-cls-1790393568684",
    "tagText": "INSPI",
    "updatedAt": "2026-09-26T12:08:30.930Z",
    "columns": [
      {
        "teacherAndDate": "09-26 Nguyễn",
        "sessionNumber": 22,
        "subSkill": "Từ vựng, Nghe, Đọc",
        "maxScore": 10,
        "id": "col_sess_22_1790424209302",
        "lessonLabel": "L22",
        "date": "2026-09-26"
      }
    ],
    "classId": "cls-1790393568684",
    "branch": "Cơ sở 1 - Tô Hiệu",
    "classBanner": "Bảng điểm Lớp cls-1790393568684",
    "rows": [
      {
        "no": 1,
        "scores": {
          "col_sess_22_1790424209302": "5"
        },
        "scoresHighlight": {
          "col_sess_22_1790424209302": "yellow"
        },
        "fullName": "Nguyễn Đào Linh Ngọc",
        "hpStatus": "Đã học",
        "email": "",
        "hpHighlightColor": "default",
        "studentId": "st-1790393568684-0-ljk6",
        "id": "row-st-1790393568684-0-ljk6"
      },
      {
        "hpStatus": "Đã học",
        "studentId": "st-1790393568684-1-44fr",
        "scores": {
          "col_sess_22_1790424209302": "8"
        },
        "id": "row-st-1790393568684-1-44fr",
        "hpHighlightColor": "default",
        "fullName": "Nguyễn Hoàng Sơn",
        "email": "",
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        },
        "no": 2
      },
      {
        "studentId": "st-1790393568684-10-9k2y",
        "hpHighlightColor": "default",
        "no": 3,
        "fullName": "Nguyễn Đức Phú",
        "email": "",
        "scores": {
          "col_sess_22_1790424209302": "7"
        },
        "id": "row-st-1790393568684-10-9k2y",
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        },
        "hpStatus": "Đã học"
      },
      {
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        },
        "email": "",
        "no": 4,
        "fullName": "Đào Minh Khánh",
        "studentId": "st-1790393568684-11-yh5u",
        "scores": {
          "col_sess_22_1790424209302": "9"
        },
        "hpHighlightColor": "default",
        "hpStatus": "Đã học",
        "id": "row-st-1790393568684-11-yh5u"
      },
      {
        "studentId": "st-1790393568684-12-l0eq",
        "email": "",
        "fullName": "Trần Yến Nhi",
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        },
        "id": "row-st-1790393568684-12-l0eq",
        "scores": {
          "col_sess_22_1790424209302": "10"
        },
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "no": 5
      },
      {
        "fullName": "Phạm Diệp Anh",
        "scores": {
          "col_sess_22_1790424209302": "7"
        },
        "hpHighlightColor": "default",
        "studentId": "st-1790393568684-13-agv0",
        "id": "row-st-1790393568684-13-agv0",
        "hpStatus": "Đã học",
        "email": "",
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        },
        "no": 6
      },
      {
        "studentId": "st-1790393568684-14-nscg",
        "scores": {
          "col_sess_22_1790424209302": "9"
        },
        "email": "",
        "fullName": "Thanh Hiền",
        "no": 7,
        "id": "row-st-1790393568684-14-nscg",
        "hpHighlightColor": "default",
        "hpStatus": "Đã học",
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        }
      },
      {
        "id": "row-st-1790393568684-15-mqw4",
        "fullName": "Hoàng Minh Ngọc",
        "studentId": "st-1790393568684-15-mqw4",
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_22_1790424209302": "8"
        },
        "no": 8,
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        },
        "email": "",
        "hpStatus": "Đã học"
      },
      {
        "id": "row-st-1790393568684-16-62w1",
        "scores": {
          "col_sess_22_1790424209302": "9"
        },
        "fullName": "Phạm Thị Phương Thảo",
        "email": "",
        "studentId": "st-1790393568684-16-62w1",
        "no": 9,
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        }
      },
      {
        "fullName": "Nguyễn Thị Nguyệt Hà",
        "id": "row-st-1790393568684-17-fjgo",
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        },
        "hpHighlightColor": "default",
        "studentId": "st-1790393568684-17-fjgo",
        "email": "",
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_22_1790424209302": "9"
        },
        "no": 10
      },
      {
        "email": "",
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        },
        "id": "row-st-1790393568684-18-vite",
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_22_1790424209302": "9"
        },
        "studentId": "st-1790393568684-18-vite",
        "no": 11,
        "fullName": "Phạm Khánh Linh"
      },
      {
        "studentId": "st-1790393568684-19-v9e4",
        "fullName": "Nguyễn Khánh Phương",
        "email": "",
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        },
        "id": "row-st-1790393568684-19-v9e4",
        "scores": {
          "col_sess_22_1790424209302": "8"
        },
        "hpStatus": "Đã học",
        "no": 12,
        "hpHighlightColor": "default"
      },
      {
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        },
        "hpStatus": "Đã học",
        "no": 13,
        "id": "row-st-1790393568684-2-mt6c",
        "fullName": "Đỗ Vũ Bá Tùng",
        "studentId": "st-1790393568684-2-mt6c",
        "scores": {
          "col_sess_22_1790424209302": "8"
        },
        "email": "",
        "hpHighlightColor": "default"
      },
      {
        "id": "row-st-1790393568684-20-1ozq",
        "studentId": "st-1790393568684-20-1ozq",
        "scores": {
          "col_sess_22_1790424209302": "6"
        },
        "hpStatus": "Đã học",
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        },
        "email": "",
        "hpHighlightColor": "default",
        "no": 14,
        "fullName": "Lê Văn Tùng"
      },
      {
        "hpHighlightColor": "default",
        "id": "row-st-1790393568684-21-qkta",
        "hpStatus": "Đã học",
        "email": "",
        "scores": {
          "col_sess_22_1790424209302": "8"
        },
        "studentId": "st-1790393568684-21-qkta",
        "fullName": "Nguyễn Mạnh Hưng",
        "no": 15,
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        }
      },
      {
        "fullName": "Phạm Hồng Hà",
        "email": "",
        "studentId": "st-1790393568684-3-iwoz",
        "no": 16,
        "scores": {
          "col_sess_22_1790424209302": "8"
        },
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        },
        "id": "row-st-1790393568684-3-iwoz",
        "hpStatus": "Đã học",
        "hpHighlightColor": "default"
      },
      {
        "studentId": "st-1790393568684-4-4oip",
        "hpHighlightColor": "default",
        "no": 17,
        "fullName": "Lưu Khánh Phong",
        "scores": {
          "col_sess_22_1790424209302": "9"
        },
        "id": "row-st-1790393568684-4-4oip",
        "hpStatus": "Đã học",
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        },
        "email": ""
      },
      {
        "no": 18,
        "email": "",
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        },
        "hpHighlightColor": "default",
        "hpStatus": "Đã học",
        "studentId": "st-1790393568684-5-1yqi",
        "fullName": "Đỗ Thị Minh Tâm",
        "scores": {
          "col_sess_22_1790424209302": "8"
        },
        "id": "row-st-1790393568684-5-1yqi"
      },
      {
        "email": "",
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        },
        "no": 19,
        "scores": {
          "col_sess_22_1790424209302": "9"
        },
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "id": "row-st-1790393568684-6-k2m9",
        "fullName": "An Vũ Ngọc Mai",
        "studentId": "st-1790393568684-6-k2m9"
      },
      {
        "id": "row-st-1790393568684-7-hqbh",
        "studentId": "st-1790393568684-7-hqbh",
        "fullName": "Nguyễn Minh Sáng",
        "hpHighlightColor": "default",
        "hpStatus": "Đã học",
        "email": "",
        "scoresHighlight": {
          "col_sess_22_1790424209302": "yellow"
        },
        "scores": {
          "col_sess_22_1790424209302": "5"
        },
        "no": 20
      },
      {
        "studentId": "st-1790393568684-8-ubkn",
        "hpStatus": "Đã học",
        "no": 21,
        "email": "",
        "fullName": "Hà Vân Ly",
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_22_1790424209302": "6"
        },
        "id": "row-st-1790393568684-8-ubkn",
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        }
      },
      {
        "studentId": "st-1790393568684-9-izip",
        "scores": {
          "col_sess_22_1790424209302": "8"
        },
        "fullName": "Hà An Ly",
        "id": "row-st-1790393568684-9-izip",
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "email": "",
        "no": 22,
        "scoresHighlight": {
          "col_sess_22_1790424209302": "default"
        }
      }
    ],
    "courseTuitionTag": "5tr2"
  },
  {
    "id": "sheet-cls-1790393769306",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)",
    "rows": [
      {
        "hpStatus": "Nợ 5.0tr",
        "email": "ngngcdip608",
        "id": "row-st-1790393769306-0-q7in",
        "hpHighlightColor": "yellow",
        "fullName": "Đồng Ngọc Diệp",
        "studentId": "st-1790393769306-0-q7in",
        "scoresHighlight": {},
        "scores": {
          "col_sess_18_session_18": "7"
        },
        "no": 1
      },
      {
        "fullName": "Phạm Ngọc Quang",
        "hpHighlightColor": "yellow",
        "no": 2,
        "scoresHighlight": {},
        "scores": {
          "col_sess_18_session_18": "7"
        },
        "studentId": "st-1790393769307-1-40zz",
        "hpStatus": "Nợ 5.0tr",
        "id": "row-st-1790393769307-1-40zz",
        "email": "phmngcquang609"
      },
      {
        "scores": {
          "col_sess_18_session_18": "9"
        },
        "id": "row-st-1790393769307-10-f28p",
        "fullName": "Phạm Thị Hải Yến",
        "no": 3,
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.0tr",
        "scoresHighlight": {},
        "studentId": "st-1790393769307-10-f28p",
        "email": "phmthhiyn618"
      },
      {
        "email": "nguynnhtqun619",
        "id": "row-st-1790393769307-11-fh04",
        "hpHighlightColor": "yellow",
        "fullName": "Nguyễn Nhật Quân",
        "scoresHighlight": {},
        "no": 4,
        "studentId": "st-1790393769307-11-fh04",
        "hpStatus": "Nợ 5.0tr",
        "scores": {
          "col_sess_18_session_18": "11"
        }
      },
      {
        "email": "nguynanhc620",
        "id": "row-st-1790393769307-12-2fx7",
        "hpStatus": "Nợ 5.0tr",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "fullName": "Nguyễn Anh Đức",
        "studentId": "st-1790393769307-12-2fx7",
        "scores": {
          "col_sess_18_session_18": "11"
        },
        "no": 5
      },
      {
        "fullName": "Phí Mạnh Hải",
        "scoresHighlight": {},
        "studentId": "st-1790393769307-13-11ku",
        "id": "row-st-1790393769307-13-11ku",
        "hpHighlightColor": "yellow",
        "no": 6,
        "email": "phmnhhi621",
        "hpStatus": "Nợ 5.0tr",
        "scores": {
          "col_sess_18_session_18": "6"
        }
      },
      {
        "id": "row-st-1790393769307-14-lpex",
        "hpStatus": "CK 17/5",
        "hpHighlightColor": "default",
        "email": "phmhonghanh622",
        "scoresHighlight": {},
        "fullName": "Phạm Hoàng Hà Anh",
        "studentId": "st-1790393769307-14-lpex",
        "no": 7,
        "scores": {
          "col_sess_18_session_18": "10"
        }
      },
      {
        "scoresHighlight": {},
        "studentId": "st-1790393769307-15-6cd5",
        "fullName": "Tống Phú Khánh",
        "scores": {
          "col_sess_18_session_18": "10"
        },
        "email": "tngphkhnh623",
        "id": "row-st-1790393769307-15-6cd5",
        "no": 8,
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.0tr"
      },
      {
        "email": "trnngclinh624",
        "scoresHighlight": {},
        "fullName": "Trần Ngọc Linh",
        "id": "row-st-1790393769307-16-ncab",
        "studentId": "st-1790393769307-16-ncab",
        "scores": {
          "col_sess_18_session_18": "7"
        },
        "hpStatus": "Nợ 5.0tr",
        "no": 9,
        "hpHighlightColor": "yellow"
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "scoresHighlight": {},
        "scores": {
          "col_sess_18_session_18": "8"
        },
        "no": 10,
        "email": "bitrmy625",
        "hpHighlightColor": "yellow",
        "id": "row-st-1790393769307-17-8gab",
        "fullName": "Bùi Trà My",
        "studentId": "st-1790393769307-17-8gab"
      },
      {
        "id": "row-st-1790393769307-18-3dt9",
        "email": "nguynmaivy626",
        "fullName": "Nguyễn Mai Vy",
        "studentId": "st-1790393769307-18-3dt9",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "no": 11,
        "scores": {
          "col_sess_18_session_18": "8"
        },
        "hpStatus": "Nợ 5.0tr"
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "scores": {
          "col_sess_18_session_18": "12"
        },
        "no": 12,
        "email": "lubnhminh627",
        "fullName": "Lưu Đỗ Bình Minh",
        "id": "row-st-1790393769307-19-fqfy",
        "studentId": "st-1790393769307-19-fqfy"
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "studentId": "st-1790393769307-2-p8vs",
        "scores": {
          "col_sess_18_session_18": "10"
        },
        "id": "row-st-1790393769307-2-p8vs",
        "scoresHighlight": {},
        "fullName": "Mai Tuấn Minh",
        "email": "maitunminh610",
        "hpHighlightColor": "yellow",
        "no": 13
      },
      {
        "id": "row-st-1790393769307-20-6a5z",
        "email": "chuthcuyn628",
        "fullName": "Chu Thục Uyên",
        "studentId": "st-1790393769307-20-6a5z",
        "scoresHighlight": {
          "col_sess_18_session_18": "yellow"
        },
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.0tr",
        "no": 14,
        "scores": {
          "col_sess_18_session_18": "4"
        }
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "no": 15,
        "email": "nguynbolm629",
        "id": "row-st-1790393769307-21-vbky",
        "fullName": "Nguyễn Bảo Lâm",
        "studentId": "st-1790393769307-21-vbky",
        "scores": {
          "col_sess_18_session_18": "7"
        },
        "hpHighlightColor": "yellow",
        "scoresHighlight": {}
      },
      {
        "fullName": "Trần Công Thành",
        "studentId": "st-1790393769307-3-cy3k",
        "email": "trncngthnh611",
        "scoresHighlight": {},
        "id": "row-st-1790393769307-3-cy3k",
        "no": 16,
        "hpStatus": "Nợ 5.0tr",
        "hpHighlightColor": "yellow",
        "scores": {
          "col_sess_18_session_18": "10"
        }
      },
      {
        "scores": {
          "col_sess_18_session_18": "vắng"
        },
        "studentId": "st-1790393769307-4-8kew",
        "no": 17,
        "hpStatus": "Nợ 5.0tr",
        "scoresHighlight": {},
        "email": "nguynthuh612",
        "hpHighlightColor": "yellow",
        "id": "row-st-1790393769307-4-8kew",
        "fullName": "Nguyễn Thu Hà"
      },
      {
        "scoresHighlight": {},
        "hpStatus": "Nợ 5.0tr",
        "id": "row-st-1790393769307-5-s7r4",
        "hpHighlightColor": "yellow",
        "email": "caoxunlong613",
        "scores": {
          "col_sess_18_session_18": "11"
        },
        "no": 18,
        "studentId": "st-1790393769307-5-s7r4",
        "fullName": "Cao Xuân Long"
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "studentId": "st-1790393769307-6-s54e",
        "scores": {
          "col_sess_18_session_18": "vắng"
        },
        "no": 19,
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "fullName": "Nguyễn Hoàng Mai",
        "email": "nguynhongmai614",
        "id": "row-st-1790393769307-6-s54e"
      },
      {
        "email": "trncanh615",
        "hpHighlightColor": "yellow",
        "id": "row-st-1790393769307-7-8gmn",
        "hpStatus": "Nợ 5.0tr",
        "scores": {
          "col_sess_18_session_18": "8"
        },
        "scoresHighlight": {},
        "no": 20,
        "studentId": "st-1790393769307-7-8gmn",
        "fullName": "Trần Đức Anh"
      },
      {
        "scoresHighlight": {},
        "scores": {
          "col_sess_18_session_18": "6"
        },
        "id": "row-st-1790393769307-8-wvam",
        "fullName": "Vũ Nhật Anh",
        "email": "vnhtanh616",
        "hpHighlightColor": "yellow",
        "studentId": "st-1790393769307-8-wvam",
        "hpStatus": "Nợ 5.0tr",
        "no": 21
      },
      {
        "no": 22,
        "email": "bingkhoa617",
        "hpStatus": "Nợ 5.0tr",
        "studentId": "st-1790393769307-9-8719",
        "fullName": "Bùi Đăng Khoa",
        "scores": {
          "col_sess_18_session_18": "vắng"
        },
        "scoresHighlight": {},
        "id": "row-st-1790393769307-9-8719",
        "hpHighlightColor": "yellow"
      }
    ],
    "updatedAt": "2026-09-26T19:11:30.303Z",
    "tagText": "INSPI",
    "courseTuitionTag": "5.0tr",
    "classBanner": "Lớp 85 (Thứ 4 + Thứ 7 (Ca 1: 18:00 - 19:45)) 4",
    "columns": [],
    "classId": "cls-1790393769306"
  },
  {
    "id": "sheet-cls-1790394128571",
    "updatedAt": "2026-09-28T16:21:25.318Z",
    "rows": [
      {
        "scores": {
          "col_sess_6_1790612484882": "7.5"
        },
        "no": 1,
        "fullName": "Đào Diệu Anh",
        "studentId": "st-1790514635929-0-qkyo",
        "hpStatus": "Đã học",
        "scoresHighlight": {
          "col_sess_6_1790612484882": "default"
        },
        "id": "row-st-1790514635929-0-qkyo",
        "hpHighlightColor": "default",
        "email": ""
      },
      {
        "no": 2,
        "fullName": "Nguyễn Thanh Thuận",
        "hpHighlightColor": "default",
        "studentId": "st-1790514635929-1-ob7g",
        "email": "",
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_6_1790612484882": "7"
        },
        "scoresHighlight": {
          "col_sess_6_1790612484882": "default"
        },
        "id": "row-st-1790514635929-1-ob7g"
      },
      {
        "fullName": "Tô Tuấn Thành",
        "hpHighlightColor": "default",
        "email": "",
        "id": "row-st-1790514635929-10-rwc4",
        "scoresHighlight": {
          "col_sess_6_1790612484882": "yellow"
        },
        "no": 3,
        "studentId": "st-1790514635929-10-rwc4",
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_6_1790612484882": "5"
        }
      },
      {
        "no": 4,
        "scoresHighlight": {
          "col_sess_6_1790612484882": "default"
        },
        "hpHighlightColor": "default",
        "hpStatus": "Đã học",
        "email": "",
        "studentId": "st-1790514635929-2-pdy0",
        "fullName": "Vương Hà Trang 92",
        "scores": {
          "col_sess_6_1790612484882": "8"
        },
        "id": "row-st-1790514635929-2-pdy0"
      },
      {
        "no": 5,
        "hpHighlightColor": "default",
        "fullName": "Vũ Ngọc Phú 92",
        "scoresHighlight": {
          "col_sess_6_1790612484882": "default"
        },
        "studentId": "st-1790514635929-3-2u2b",
        "email": "",
        "scores": {
          "col_sess_6_1790612484882": "8"
        },
        "id": "row-st-1790514635929-3-2u2b",
        "hpStatus": "Đã học"
      },
      {
        "id": "row-st-1790514635929-4-xqpk",
        "hpStatus": "Đã học",
        "studentId": "st-1790514635929-4-xqpk",
        "scoresHighlight": {
          "col_sess_6_1790612484882": "default"
        },
        "scores": {
          "col_sess_6_1790612484882": "10"
        },
        "fullName": "Từ Minh Đức",
        "no": 6,
        "hpHighlightColor": "default",
        "email": ""
      },
      {
        "studentId": "st-1790514635929-5-m71z",
        "hpHighlightColor": "default",
        "scoresHighlight": {
          "col_sess_6_1790612484882": "default"
        },
        "no": 7,
        "fullName": "Nguyễn Phương Hà",
        "scores": {
          "col_sess_6_1790612484882": "6.5"
        },
        "id": "row-st-1790514635929-5-m71z",
        "hpStatus": "Đã học",
        "email": ""
      },
      {
        "no": 8,
        "scoresHighlight": {
          "col_sess_6_1790612484882": "default"
        },
        "scores": {
          "col_sess_6_1790612484882": "6.5"
        },
        "email": "",
        "hpHighlightColor": "default",
        "fullName": "Phạm Thị Phương Vi",
        "studentId": "st-1790514635929-6-ohim",
        "hpStatus": "Đã học",
        "id": "row-st-1790514635929-6-ohim"
      },
      {
        "email": "",
        "fullName": "Nguyễn Hải Lâm",
        "id": "row-st-1790514635929-7-sozz",
        "studentId": "st-1790514635929-7-sozz",
        "hpStatus": "Đã học",
        "scoresHighlight": {
          "col_sess_6_1790612484882": "default"
        },
        "hpHighlightColor": "default",
        "no": 9,
        "scores": {
          "col_sess_6_1790612484882": "7.5"
        }
      },
      {
        "fullName": "Hoàng Thanh Bình",
        "hpHighlightColor": "default",
        "email": "",
        "scores": {
          "col_sess_6_1790612484882": "6"
        },
        "studentId": "st-1790514635929-8-esfi",
        "id": "row-st-1790514635929-8-esfi",
        "hpStatus": "Đã học",
        "no": 10,
        "scoresHighlight": {
          "col_sess_6_1790612484882": "default"
        }
      },
      {
        "email": "",
        "hpStatus": "Đã học",
        "no": 11,
        "studentId": "st-1790514635929-9-p0yv",
        "fullName": "Phạm Thị Phương Linh",
        "scoresHighlight": {
          "col_sess_6_1790612484882": "yellow"
        },
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_6_1790612484882": "4.5"
        },
        "id": "row-st-1790514635929-9-p0yv"
      },
      {
        "fullName": "Nguyễn Duy Hiệp",
        "no": 12,
        "email": "",
        "hpHighlightColor": "default",
        "studentId": "st-1790514635930-11-5wt0",
        "scores": {
          "col_sess_6_1790612484882": "8"
        },
        "scoresHighlight": {
          "col_sess_6_1790612484882": "default"
        },
        "hpStatus": "Đã học",
        "id": "row-st-1790514635930-11-5wt0"
      },
      {
        "scoresHighlight": {
          "col_sess_6_1790612484882": "default"
        },
        "studentId": "st-1790514635930-12-g7sw",
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "id": "row-st-1790514635930-12-g7sw",
        "scores": {
          "col_sess_6_1790612484882": "8.5"
        },
        "fullName": "Phạm Anh Tú 92",
        "no": 13,
        "email": ""
      },
      {
        "hpStatus": "Đã học",
        "id": "row-st-1790514635930-13-4twd",
        "studentId": "st-1790514635930-13-4twd",
        "hpHighlightColor": "default",
        "email": "",
        "no": 14,
        "scores": {
          "col_sess_6_1790612484882": "5.5"
        },
        "fullName": "Nguyễn Trung Hiếu",
        "scoresHighlight": {
          "col_sess_6_1790612484882": "yellow"
        }
      },
      {
        "hpHighlightColor": "default",
        "scores": {
          "col_sess_6_1790612484882": "3"
        },
        "hpStatus": "Đã học",
        "id": "row-st-1790514635930-14-cwhu",
        "scoresHighlight": {
          "col_sess_6_1790612484882": "yellow"
        },
        "studentId": "st-1790514635930-14-cwhu",
        "fullName": "Phạm Quang Huy",
        "email": "",
        "no": 15
      },
      {
        "hpStatus": "Đã học",
        "scores": {
          "col_sess_6_1790612484882": "7.5"
        },
        "no": 16,
        "scoresHighlight": {
          "col_sess_6_1790612484882": "default"
        },
        "email": "",
        "id": "row-st-1790514635930-16-dphi",
        "fullName": "Nguyễn Thu Trang",
        "studentId": "st-1790514635930-16-dphi",
        "hpHighlightColor": "default"
      },
      {
        "scoresHighlight": {
          "col_sess_6_1790612484882": "default"
        },
        "id": "row-st-1790514635930-17-d4v0",
        "scores": {
          "col_sess_6_1790612484882": "7"
        },
        "email": "",
        "studentId": "st-1790514635930-17-d4v0",
        "fullName": "Thanh Thúy",
        "hpHighlightColor": "default",
        "hpStatus": "Đã học",
        "no": 17
      },
      {
        "email": "",
        "no": 18,
        "fullName": "Phạm Đào Như Phương",
        "scores": {
          "col_sess_6_1790612484882": "6.5"
        },
        "studentId": "st-1790514635930-18-rlvg",
        "hpStatus": "Đã học",
        "hpHighlightColor": "default",
        "id": "row-st-1790514635930-18-rlvg",
        "scoresHighlight": {
          "col_sess_6_1790612484882": "default"
        }
      }
    ],
    "courseTuitionTag": "5tr2",
    "classId": "cls-1790394128571",
    "columns": [
      {
        "sessionNumber": 6,
        "id": "col_sess_6_1790612484882",
        "teacherAndDate": "09-28 Chi",
        "date": "2026-09-28",
        "subSkill": "Từ vựng, Nghe",
        "lessonLabel": "L6",
        "maxScore": 10
      }
    ],
    "classBanner": "Bảng điểm Lớp cls-1790394128571",
    "branch": "Cơ sở 1 - Tô Hiệu",
    "tagText": "INSPI"
  },
  {
    "id": "sheet-cls-1790394280379",
    "classId": "cls-1790394280379",
    "columns": [],
    "courseTuitionTag": "5.0tr",
    "tagText": "INSPI",
    "classBanner": "Lớp 94 (Thứ 4 + Thứ 7 (Ca 2: 19:45 - 21:30)) 4",
    "updatedAt": "2026-09-26T19:05:21.919Z",
    "rows": [
      {
        "studentId": "st-1790394280379-0-29sz",
        "id": "row-st-1790394280379-0-29sz",
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "hpStatus": "Nợ 5.0tr",
        "hpHighlightColor": "yellow",
        "email": "binhhongyn735",
        "scoresHighlight": {},
        "fullName": "Bùi Như Hoàng Yến",
        "no": 1
      },
      {
        "no": 2,
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "email": "lngtriuhuy736",
        "fullName": "Lương Triệu Huy",
        "studentId": "st-1790394280379-1-sz9f",
        "hpStatus": "Nợ 5.0tr",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "id": "row-st-1790394280379-1-sz9f"
      },
      {
        "hpHighlightColor": "yellow",
        "studentId": "st-1790394280379-10-m4xi",
        "id": "row-st-1790394280379-10-m4xi",
        "hpStatus": "Nợ 5.0tr",
        "email": "nguynbotrn745",
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "fullName": "Nguyễn Bảo Trân",
        "scoresHighlight": {},
        "no": 3
      },
      {
        "fullName": "Nguyễn Hương Giang",
        "email": "nguynhnggiang746",
        "hpHighlightColor": "yellow",
        "no": 4,
        "scoresHighlight": {},
        "studentId": "st-1790394280379-11-y59u",
        "id": "row-st-1790394280379-11-y59u",
        "hpStatus": "Nợ 5.0tr",
        "scores": {
          "col_sess_7_session_7": "x"
        }
      },
      {
        "no": 5,
        "fullName": "Phạm Đình Phúc",
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "scoresHighlight": {},
        "id": "row-st-1790394280379-12-923s",
        "hpStatus": "Nợ 5.0tr",
        "hpHighlightColor": "yellow",
        "email": "phmnhphc747",
        "studentId": "st-1790394280379-12-923s"
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "email": "trncthng748",
        "no": 6,
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "studentId": "st-1790394280379-13-vuq2",
        "id": "row-st-1790394280379-13-vuq2",
        "fullName": "Trần Đức Thắng",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow"
      },
      {
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "hpStatus": "Nợ 5.0tr",
        "email": "vquangqu749",
        "id": "row-st-1790394280379-14-d020",
        "no": 7,
        "scoresHighlight": {},
        "studentId": "st-1790394280379-14-d020",
        "fullName": "Vũ Quang Quý",
        "hpHighlightColor": "yellow"
      },
      {
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "id": "row-st-1790394280379-15-k2gh",
        "fullName": "Nguyễn Ngọc Vân Phương",
        "no": 8,
        "hpStatus": "Nợ 5.0tr",
        "email": "nguynngcvnphng750",
        "studentId": "st-1790394280379-15-k2gh"
      },
      {
        "hpHighlightColor": "yellow",
        "studentId": "st-1790394280379-16-ovmk",
        "email": "phmgiahng751",
        "hpStatus": "Nợ 5.0tr",
        "no": 9,
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "fullName": "Phạm Gia Hưng",
        "scoresHighlight": {},
        "id": "row-st-1790394280379-16-ovmk"
      },
      {
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "scoresHighlight": {},
        "no": 10,
        "studentId": "st-1790394280379-17-4ciu",
        "fullName": "Hà Văn Khánh Huy",
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.0tr",
        "id": "row-st-1790394280379-17-4ciu",
        "email": "hvnkhnhhuy752"
      },
      {
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "studentId": "st-1790394280379-18-wfpd",
        "hpStatus": "Nợ 5.0tr",
        "id": "row-st-1790394280379-18-wfpd",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "no": 11,
        "email": "octrng753",
        "fullName": "Đào Đức Trọng"
      },
      {
        "email": "nguynththouyn754",
        "hpHighlightColor": "yellow",
        "id": "row-st-1790394280379-19-a6l1",
        "hpStatus": "Nợ 5.0tr",
        "scoresHighlight": {},
        "fullName": "Nguyễn Thị Thảo Uyên",
        "studentId": "st-1790394280379-19-a6l1",
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "no": 12
      },
      {
        "fullName": "Lê Minh Thư",
        "email": "lminhth737",
        "no": 13,
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.0tr",
        "id": "row-st-1790394280379-2-5aki",
        "studentId": "st-1790394280379-2-5aki",
        "scores": {
          "col_sess_7_session_7": "x"
        }
      },
      {
        "email": "otrnthydng755",
        "hpHighlightColor": "yellow",
        "no": 14,
        "hpStatus": "Nợ 5.0tr",
        "fullName": "Đào Trần Thùy Dương",
        "studentId": "st-1790394280379-20-r5cc",
        "scoresHighlight": {},
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "id": "row-st-1790394280379-20-r5cc"
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "studentId": "st-1790394280379-21-zai8",
        "no": 15,
        "hpHighlightColor": "yellow",
        "fullName": "Nguyễn Thị Ngọc Anh",
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "scoresHighlight": {},
        "id": "row-st-1790394280379-21-zai8",
        "email": "nguynthngcanh756"
      },
      {
        "hpHighlightColor": "yellow",
        "id": "row-st-1790394280379-3-mpfl",
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "scoresHighlight": {},
        "fullName": "Phạm Thị Thanh Bình",
        "email": "phmththanhbnh738",
        "hpStatus": "Nợ 5.0tr",
        "studentId": "st-1790394280379-3-mpfl",
        "no": 16
      },
      {
        "studentId": "st-1790394280379-4-jzwi",
        "hpStatus": "Nợ 5.0tr",
        "id": "row-st-1790394280379-4-jzwi",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "fullName": "Trần Thùy Anh",
        "no": 17,
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "email": "trnthyanh739"
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "email": "vminhngc740",
        "no": 18,
        "fullName": "Vũ Minh Ngọc",
        "id": "row-st-1790394280379-5-x79s",
        "studentId": "st-1790394280379-5-x79s",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow"
      },
      {
        "fullName": "Hứa Phương Linh",
        "no": 19,
        "scoresHighlight": {},
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "hpHighlightColor": "yellow",
        "studentId": "st-1790394280379-6-nhoz",
        "hpStatus": "Nợ 5.0tr",
        "email": "haphnglinh741",
        "id": "row-st-1790394280379-6-nhoz"
      },
      {
        "studentId": "st-1790394280379-7-vqwb",
        "email": "mvitthnhhuy742",
        "scoresHighlight": {},
        "hpStatus": "Nợ 5.0tr",
        "hpHighlightColor": "yellow",
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "no": 20,
        "fullName": "Đàm Việt Thành Huy",
        "id": "row-st-1790394280379-7-vqwb"
      },
      {
        "no": 21,
        "email": "lminhthun743",
        "fullName": "Lê Minh Thuận",
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "studentId": "st-1790394280379-8-n0oa",
        "hpStatus": "Nợ 5.0tr",
        "hpHighlightColor": "yellow",
        "id": "row-st-1790394280379-8-n0oa",
        "scoresHighlight": {}
      },
      {
        "scoresHighlight": {},
        "id": "row-st-1790394280379-9-6coz",
        "scores": {
          "col_sess_7_session_7": "x"
        },
        "email": "trnhongminhngc744",
        "studentId": "st-1790394280379-9-6coz",
        "fullName": "Trần Hoàng Minh Ngọc",
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.0tr",
        "no": 22
      }
    ],
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)"
  },
  {
    "id": "sheet-cls-1790394398249",
    "columns": [
      {
        "id": "c1",
        "teacherAndDate": "L1 Đặng",
        "lessonLabel": "L1",
        "maxScore": 10,
        "subSkill": "Từ vựng & Viết",
        "sessionNumber": 1
      },
      {
        "lessonLabel": "L2",
        "id": "c2",
        "sessionNumber": 2,
        "subSkill": "Viết & Nghe",
        "teacherAndDate": "L2 Đặng",
        "maxScore": 10
      },
      {
        "lessonLabel": "L3",
        "maxScore": 10,
        "sessionNumber": 3,
        "subSkill": "Nghe 10",
        "teacherAndDate": "L3 Đặng",
        "id": "c3"
      },
      {
        "subSkill": "Đọc 13",
        "maxScore": 13,
        "lessonLabel": "L4",
        "sessionNumber": 4,
        "id": "c4",
        "teacherAndDate": "L4 Đặng"
      }
    ],
    "classId": "cls-1790394398249",
    "classBanner": "Lớp 96 (Thứ 3 + Thứ 6 (Ca 2: 19:45 - 21:30)) 1",
    "updatedAt": "2026-09-26T19:03:06.482Z",
    "tagText": "INSPI",
    "rows": [
      {
        "scoresHighlight": {},
        "studentId": "st-1790151030917-0-phfr",
        "email": "maithanhphc230",
        "fullName": "Mai Thanh Phúc",
        "id": "row-st-1790151030917-0-phfr",
        "hpStatus": "Nợ 5.0tr",
        "no": 1,
        "hpHighlightColor": "yellow",
        "scores": {}
      },
      {
        "email": "nguynhmy231",
        "hpStatus": "Nợ 5.0tr",
        "scoresHighlight": {},
        "id": "row-st-1790151030917-1-ngyq",
        "hpHighlightColor": "yellow",
        "fullName": "Nguyễn Hà My",
        "studentId": "st-1790151030917-1-ngyq",
        "no": 2,
        "scores": {}
      },
      {
        "email": "thinvy232",
        "hpStatus": "Nợ 5.0tr",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "id": "row-st-1790151030917-2-rv4i",
        "fullName": "Đỗ Thiên Vy",
        "studentId": "st-1790151030917-2-rv4i",
        "no": 3,
        "scores": {}
      },
      {
        "hpHighlightColor": "yellow",
        "scores": {},
        "scoresHighlight": {},
        "no": 4,
        "studentId": "st-1790151030917-3-bqf0",
        "fullName": "Phạm Hoàng Bảo Nam",
        "id": "row-st-1790151030917-3-bqf0",
        "hpStatus": "Nợ 5.0tr",
        "email": "phmhongbonam233"
      },
      {
        "studentId": "st-1790151030917-4-nt6v",
        "hpStatus": "Nợ 5.0tr",
        "scoresHighlight": {},
        "scores": {},
        "no": 5,
        "id": "row-st-1790151030917-4-nt6v",
        "email": "bikhnhchi234",
        "fullName": "Bùi Khánh Chi",
        "hpHighlightColor": "yellow"
      },
      {
        "id": "row-st-1790151030917-5-0cru",
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.0tr",
        "email": "vqucminh235",
        "fullName": "Vũ Quốc Minh",
        "studentId": "st-1790151030917-5-0cru",
        "scores": {},
        "no": 6,
        "scoresHighlight": {}
      },
      {
        "no": 7,
        "hpHighlightColor": "yellow",
        "studentId": "st-1790151030917-6-z9o1",
        "email": "chhlinh236",
        "hpStatus": "Nợ 5.0tr",
        "scores": {},
        "scoresHighlight": {},
        "id": "row-st-1790151030917-6-z9o1",
        "fullName": "Chử Hà Linh"
      },
      {
        "no": 8,
        "scoresHighlight": {},
        "fullName": "Lê Phương Anh",
        "studentId": "st-1790151030917-7-mcdx",
        "scores": {},
        "email": "lphnganh237",
        "hpStatus": "Nợ 5.0tr",
        "id": "row-st-1790151030917-7-mcdx",
        "hpHighlightColor": "yellow"
      },
      {
        "scoresHighlight": {},
        "scores": {},
        "no": 9,
        "hpStatus": "Nợ 5.0tr",
        "hpHighlightColor": "yellow",
        "id": "row-st-1790151030917-8-mve2",
        "email": "phmquanghinam238",
        "fullName": "Phạm Quang Hải Nam",
        "studentId": "st-1790151030917-8-mve2"
      },
      {
        "id": "row-st-1790151030918-10-iq0o",
        "scoresHighlight": {},
        "scores": {},
        "hpStatus": "Nợ 5.0tr",
        "email": "phmthphngtho240",
        "hpHighlightColor": "yellow",
        "studentId": "st-1790151030918-10-iq0o",
        "no": 10,
        "fullName": "Phạm Thị Phương Thảo"
      },
      {
        "id": "row-st-1790151030918-11-a6vh",
        "email": "lugiahuy241",
        "hpStatus": "Nợ 5.0tr",
        "studentId": "st-1790151030918-11-a6vh",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "fullName": "Lưu Gia Huy",
        "no": 11,
        "scores": {}
      },
      {
        "scores": {},
        "fullName": "Vũ Kim Ngân",
        "studentId": "st-1790151030918-12-3w9k",
        "id": "row-st-1790151030918-12-3w9k",
        "hpStatus": "Nợ 5.0tr",
        "no": 12,
        "scoresHighlight": {},
        "email": "vkimngn242",
        "hpHighlightColor": "yellow"
      },
      {
        "no": 13,
        "studentId": "st-1790151030918-13-4se2",
        "hpHighlightColor": "yellow",
        "fullName": "Vũ Lê Kim Ngân",
        "scores": {},
        "hpStatus": "Nợ 5.0tr",
        "id": "row-st-1790151030918-13-4se2",
        "scoresHighlight": {},
        "email": "vlkimngn243"
      },
      {
        "fullName": "Phạm Minh Châu",
        "email": "phmminhchu244",
        "scoresHighlight": {},
        "no": 14,
        "studentId": "st-1790151030918-14-dg0d",
        "hpHighlightColor": "yellow",
        "id": "row-st-1790151030918-14-dg0d",
        "scores": {},
        "hpStatus": "Nợ 5.0tr"
      },
      {
        "scoresHighlight": {},
        "hpStatus": "Nợ 5.0tr",
        "scores": {},
        "hpHighlightColor": "yellow",
        "no": 15,
        "id": "row-st-1790151030918-15-twpz",
        "studentId": "st-1790151030918-15-twpz",
        "email": "inhnguynkhnhlinh245",
        "fullName": "Đinh Nguyễn Khánh Linh"
      },
      {
        "fullName": "Lưu Quang Mạnh 41 học lại",
        "email": "luquangmnh41hcli246",
        "scoresHighlight": {},
        "id": "row-st-1790151030918-16-8l1t",
        "hpHighlightColor": "yellow",
        "no": 16,
        "hpStatus": "Nợ 5.0tr",
        "studentId": "st-1790151030918-16-8l1t",
        "scores": {}
      },
      {
        "email": "nguynmnhtrnggiang247",
        "hpHighlightColor": "yellow",
        "no": 17,
        "hpStatus": "Nợ 5.0tr",
        "scores": {},
        "studentId": "st-1790151030918-17-i4dz",
        "scoresHighlight": {},
        "id": "row-st-1790151030918-17-i4dz",
        "fullName": "Nguyễn Mạnh Trường Giang"
      },
      {
        "fullName": "Vũ Phương Thảo",
        "no": 18,
        "scores": {},
        "hpHighlightColor": "default",
        "hpStatus": "CK 17/5",
        "id": "row-st-1790151030918-18-n2wa",
        "email": "vphngtho248",
        "scoresHighlight": {},
        "studentId": "st-1790151030918-18-n2wa"
      },
      {
        "fullName": "Vũ Hà Anh",
        "no": 19,
        "scoresHighlight": {},
        "email": "vhanh249",
        "hpStatus": "Nợ 5.0tr",
        "scores": {},
        "studentId": "st-1790151030918-19-5st5",
        "id": "row-st-1790151030918-19-5st5",
        "hpHighlightColor": "yellow"
      },
      {
        "studentId": "st-1790151030918-20-w476",
        "email": "ngthuphng250",
        "hpStatus": "Nợ 5.0tr",
        "hpHighlightColor": "yellow",
        "id": "row-st-1790151030918-20-w476",
        "scores": {},
        "scoresHighlight": {},
        "fullName": "Đặng Thu Phương",
        "no": 20
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "hpHighlightColor": "yellow",
        "no": 21,
        "scoresHighlight": {},
        "scores": {},
        "studentId": "st-1790151030918-9-7jq2",
        "email": "trnthmduyn239",
        "fullName": "Trần Thị Mỹ Duyên",
        "id": "row-st-1790151030918-9-7jq2"
      },
      {
        "hpHighlightColor": "yellow",
        "id": "row-st-1790394398249-0-yf6u",
        "hpStatus": "Nợ 5.0tr",
        "studentId": "st-1790394398249-0-yf6u",
        "no": 22,
        "scoresHighlight": {},
        "email": "maithanhphc779",
        "scores": {},
        "fullName": "Mai Thanh Phúc"
      },
      {
        "studentId": "st-1790394398249-1-ys6q",
        "fullName": "Nguyễn Hà My",
        "scores": {},
        "no": 23,
        "hpStatus": "Nợ 5.0tr",
        "hpHighlightColor": "yellow",
        "email": "nguynhmy780",
        "scoresHighlight": {},
        "id": "row-st-1790394398249-1-ys6q"
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "scores": {},
        "no": 24,
        "scoresHighlight": {},
        "email": "phmthphngtho789",
        "id": "row-st-1790394398249-10-gqqq",
        "fullName": "Phạm Thị Phương Thảo",
        "studentId": "st-1790394398249-10-gqqq",
        "hpHighlightColor": "yellow"
      },
      {
        "scoresHighlight": {},
        "id": "row-st-1790394398249-11-dum3",
        "email": "lugiahuy790",
        "scores": {},
        "studentId": "st-1790394398249-11-dum3",
        "fullName": "Lưu Gia Huy",
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.0tr",
        "no": 25
      },
      {
        "no": 26,
        "email": "vkimngn791",
        "fullName": "Vũ Kim Ngân",
        "scores": {},
        "studentId": "st-1790394398249-12-t7fn",
        "hpStatus": "Nợ 5.0tr",
        "hpHighlightColor": "yellow",
        "id": "row-st-1790394398249-12-t7fn",
        "scoresHighlight": {}
      },
      {
        "studentId": "st-1790394398249-13-wyna",
        "email": "vlkimngn792",
        "hpStatus": "Nợ 5.0tr",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "scores": {},
        "no": 27,
        "fullName": "Vũ Lê Kim Ngân",
        "id": "row-st-1790394398249-13-wyna"
      },
      {
        "fullName": "Phạm Minh Châu",
        "no": 28,
        "scores": {},
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "studentId": "st-1790394398249-14-b2ua",
        "hpStatus": "Nợ 5.0tr",
        "email": "phmminhchu793",
        "id": "row-st-1790394398249-14-b2ua"
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "scores": {},
        "email": "inhnguynkhnhlinh794",
        "no": 29,
        "fullName": "Đinh Nguyễn Khánh Linh",
        "id": "row-st-1790394398249-15-15zn",
        "studentId": "st-1790394398249-15-15zn",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow"
      },
      {
        "studentId": "st-1790394398249-16-16ae",
        "hpStatus": "Nợ 5.0tr",
        "id": "row-st-1790394398249-16-16ae",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "no": 30,
        "scores": {},
        "fullName": "Lưu Quang Mạnh 41 học lại",
        "email": "luquangmnh41hcli795"
      },
      {
        "scores": {},
        "id": "row-st-1790394398249-17-8xyy",
        "hpHighlightColor": "yellow",
        "scoresHighlight": {},
        "fullName": "Nguyễn Mạnh Trường Giang",
        "email": "nguynmnhtrnggiang796",
        "hpStatus": "Nợ 5.0tr",
        "no": 31,
        "studentId": "st-1790394398249-17-8xyy"
      },
      {
        "hpStatus": "CK 17/5",
        "studentId": "st-1790394398249-18-4zn4",
        "no": 32,
        "hpHighlightColor": "default",
        "scores": {},
        "scoresHighlight": {},
        "fullName": "Vũ Phương Thảo",
        "id": "row-st-1790394398249-18-4zn4",
        "email": "vphngtho797"
      },
      {
        "email": "vhanh798",
        "no": 33,
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.0tr",
        "fullName": "Vũ Hà Anh",
        "studentId": "st-1790394398249-19-kmt6",
        "scoresHighlight": {},
        "scores": {},
        "id": "row-st-1790394398249-19-kmt6"
      },
      {
        "fullName": "Đỗ Thiên Vy",
        "email": "thinvy781",
        "no": 34,
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "hpStatus": "Nợ 5.0tr",
        "id": "row-st-1790394398249-2-nu10",
        "studentId": "st-1790394398249-2-nu10",
        "scores": {}
      },
      {
        "email": "ngthuphng799",
        "hpHighlightColor": "yellow",
        "id": "row-st-1790394398249-20-g4yb",
        "hpStatus": "Nợ 5.0tr",
        "scoresHighlight": {},
        "scores": {},
        "fullName": "Đặng Thu Phương",
        "studentId": "st-1790394398249-20-g4yb",
        "no": 35
      },
      {
        "scores": {},
        "studentId": "st-1790394398249-21-fxnt",
        "hpStatus": "Nợ 5.0tr",
        "id": "row-st-1790394398249-21-fxnt",
        "no": 36,
        "scoresHighlight": {},
        "hpHighlightColor": "yellow",
        "email": "trnbongn800",
        "fullName": "Trần Bảo Ngân"
      },
      {
        "scores": {},
        "scoresHighlight": {},
        "no": 37,
        "studentId": "st-1790394398249-3-srev",
        "hpHighlightColor": "yellow",
        "fullName": "Phạm Hoàng Bảo Nam",
        "hpStatus": "Nợ 5.0tr",
        "id": "row-st-1790394398249-3-srev",
        "email": "phmhongbonam782"
      },
      {
        "hpHighlightColor": "yellow",
        "studentId": "st-1790394398249-4-l93m",
        "email": "bikhnhchi783",
        "hpStatus": "Nợ 5.0tr",
        "no": 38,
        "scores": {},
        "fullName": "Bùi Khánh Chi",
        "id": "row-st-1790394398249-4-l93m",
        "scoresHighlight": {}
      },
      {
        "scores": {},
        "hpHighlightColor": "yellow",
        "id": "row-st-1790394398249-5-hfch",
        "scoresHighlight": {},
        "fullName": "Vũ Quốc Minh",
        "no": 39,
        "email": "vqucminh784",
        "hpStatus": "Nợ 5.0tr",
        "studentId": "st-1790394398249-5-hfch"
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "scores": {},
        "email": "chhlinh785",
        "id": "row-st-1790394398249-6-ie56",
        "no": 40,
        "scoresHighlight": {},
        "studentId": "st-1790394398249-6-ie56",
        "fullName": "Chử Hà Linh",
        "hpHighlightColor": "yellow"
      },
      {
        "hpStatus": "Nợ 5.0tr",
        "email": "lphnganh786",
        "no": 41,
        "scores": {},
        "studentId": "st-1790394398249-7-xwno",
        "id": "row-st-1790394398249-7-xwno",
        "fullName": "Lê Phương Anh",
        "scoresHighlight": {},
        "hpHighlightColor": "yellow"
      },
      {
        "no": 42,
        "fullName": "Phạm Quang Hải Nam",
        "scores": {},
        "scoresHighlight": {},
        "id": "row-st-1790394398249-8-uwxe",
        "hpStatus": "Nợ 5.0tr",
        "studentId": "st-1790394398249-8-uwxe",
        "hpHighlightColor": "yellow",
        "email": "phmquanghinam787"
      },
      {
        "fullName": "Trần Thị Mỹ Duyên",
        "email": "trnthmduyn788",
        "hpHighlightColor": "yellow",
        "no": 43,
        "scoresHighlight": {},
        "studentId": "st-1790394398249-9-5ek3",
        "id": "row-st-1790394398249-9-5ek3",
        "hpStatus": "Nợ 5.0tr",
        "scores": {}
      }
    ],
    "courseTuitionTag": "5.0tr",
    "branch": "Cơ sở 1 - Tô Hiệu (Hải Phòng)"
  },
  {
    "id": "sheet-cls-1790505864495",
    "classBanner": "Bảng điểm Lớp cls-1790505864495",
    "branch": "Cơ sở 1 - Tô Hiệu",
    "tagText": "INSPI",
    "updatedAt": "2026-09-28T11:35:03.117Z",
    "rows": [
      {
        "hpHighlightColor": "default",
        "fullName": "Dương",
        "scores": {
          "col_sess_1_1790595303117": "0"
        },
        "id": "row-student-vocab-1790595302107",
        "studentId": "student-vocab-1790595302107",
        "scoresHighlight": {
          "col_sess_1_1790595303117": "default"
        },
        "hpStatus": "Đã học",
        "email": "",
        "no": 1
      }
    ],
    "courseTuitionTag": "5tr2",
    "columns": [
      {
        "teacherAndDate": "09-28 GV",
        "lessonLabel": "L1",
        "date": "2026-09-28",
        "sessionNumber": 1,
        "maxScore": 10,
        "id": "col_sess_1_1790595303117",
        "subSkill": "Ôn tập"
      }
    ],
    "classId": "cls-1790505864495"
  }
];

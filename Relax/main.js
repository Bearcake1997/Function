// Lấy thẻ từ html sang javascript để xử lý
const txtMaSV = document.getElementById('txtMaSV');
// Lấy thẻ từ html sang javascript để xử lý
const txtTen = document.getElementById('txtTen');
// Lấy thẻ từ html sang javascript để xử lý
const txtTuoi = document.getElementById('txtTuoi');
// Lấy thẻ từ html sang javascript để xử lý
const txtDiaChi = document.getElementById('txtDiaChi');
// Lấy thẻ từ html sang javascript để xử lý
const txtDiemToan = document.getElementById('txtDiemToan');
// Lấy thẻ từ html sang javascript để xử lý
const txtDiemVan = document.getElementById('txtDiemVan');
// Lấy thẻ từ html sang javascript để xử lý
const hienThiSinhVien = document.getElementById('hienThiSinhVien');

// tạo biến giúp lưu giá trị của từng sinh viên
let MaSV;
// tạo biến giúp lưu giá trị của từng sinh viên
let Ten;
// tạo biến giúp lưu giá trị của từng sinh viên
let Tuoi;
// tạo biến giúp lưu giá trị của từng sinh viên
let DiaChi;
// tạo biến giúp lưu giá trị của từng sinh viên
let DiemToan;
// tạo biến giúp lưu giá trị của từng sinh viên
let DiemVan;
// tạo mảng lưu lại những sinh viên đã nhập
let danhSachSinhVien = [];

// thêm sự kiện keyup để lấy giá trị từ các thẻ html khi sự kiện xẩy ra
txtMaSV.addEventListener('keyup', function () {
  MaSV = txtMaSV.value;
})
// thêm sự kiện keyup để lấy giá trị từ các thẻ html khi sự kiện xẩy ra
txtTen.addEventListener('keyup', function () {
  Ten = txtTen.value;
})
// thêm sự kiện keyup để lấy giá trị từ các thẻ html khi sự kiện xẩy ra
txtTuoi.addEventListener('keyup', function () {
  Tuoi = txtTuoi.value;
})
// thêm sự kiện keyup để lấy giá trị từ các thẻ html khi sự kiện xẩy ra
txtDiaChi.addEventListener('keyup', function () {
  DiaChi = txtDiaChi.value;
})
// thêm sự kiện keyup để lấy giá trị từ các thẻ html khi sự kiện xẩy ra
txtDiemToan.addEventListener('keyup', function () {
  DiemToan = txtDiemToan.value;
})
// thêm sự kiện keyup để lấy giá trị từ các thẻ html khi sự kiện xẩy ra
txtDiemVan.addEventListener('keyup', function () {
  DiemVan = txtDiemVan.value;
})


// hàm giúp thêm sinh viên vào mảng danhSachSinhVien
function themSinhVien() {
  let sinhVien = new Student(MaSV, Ten, Tuoi, DiaChi, DiemToan, DiemVan);
  danhSachSinhVien.push(sinhVien);
  hienThiSinhVien.innerHTML = '';
  danhSachSinhVien.forEach(function (sinhVien) {
    hienThiSinhVien.innerHTML += sinhVien.hienThi();
  })
}


// đối tượng sinh viên khai báo bằng class
class Student {

  // thuộc sinh của sinh viên
  maSV;
  // thuộc sinh của sinh viên
  ten;
  // thuộc sinh của sinh viên
  tuoi;
  // thuộc sinh của sinh viên
  diaChi;
  // thuộc sinh của sinh viên
  diemToan;
  // thuộc sinh của sinh viên
  diemVan;


  // constructor giúp lấy giá trị từ bên ngoài vào để khởi tạo sinh viên
  constructor(maSV, ten, tuoi, diaChi, diemToan, diemVan) {
    this.maSV = maSV;
    this.ten = ten;
    this.tuoi = tuoi;
    this.diaChi = diaChi;
    this.diemToan = diemToan;
    this.diemVan = diemVan;
  }

  // hàm giúp hiện thị sinh viên theo dạng : 001 - Nguyen Van A - 20 - Hue - 10 - 10
  hienThi() {
    return `${this.maSV} - ${this.ten} - ${this.tuoi} - ${this.diaChi} - ${this.diemToan} - ${this.diemVan}` + `<br>`;
  }

}
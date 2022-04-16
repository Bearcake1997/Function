// Lấy thẻ từ html sang javascript để xử lý
const txtMaSV = document.getElementById('txtMaSV');
const txtTen = document.getElementById('txtTen');
const txtTuoi = document.getElementById('txtTuoi');
const txtDiaChi = document.getElementById('txtDiaChi');
const txtDiemT = document.getElementById('txtDiemT');
const txtDiemV = document.getElementById('txtDiemV');
const txtDiemA = document.getElementById('txtDiemA');
const txtHanhKiem = document.getElementById('txtHanhKiem');
const hienThiSinhVien = document.getElementById('hienThiSinhVien');

// console.log(txtDiemA);

// tạo biến giúp lưu giá trị của từng sinh viên
let MaSV;
let Ten;
let Tuoi;
let DiaChi;
let DiemT;
let DiemV;
let DiemA;
let HanhKiem;

// tạo mảng lưu lại những sinh viên đã nhập
let danhSachSinhVien = [];

// thêm sự kiện keyup để lấy giá trị từ các thẻ html khi sự kiện xẩy ra
txtMaSV.addEventListener('keyup', function () {
  MaSV = txtMaSV.value;
})
txtTen.addEventListener('keyup', function () {
  Ten = txtTen.value;
})
txtTuoi.addEventListener('keyup', function () {
  Tuoi = txtTuoi.value;
})
txtDiaChi.addEventListener('keyup', function () {
  DiaChi = txtDiaChi.value;
})
txtDiemT.addEventListener('keyup', function () {
  DiemT = txtDiemT.value;
})
txtDiemV.addEventListener('keyup', function () {
  DiemV = txtDiemV.value;
})
txtDiemA.addEventListener('keyup', function () {
  DiemA = txtDiemA.value;
})
txtHanhKiem.addEventListener('keyup', function () {
  HanhKiem = txtHanhKiem.value;
})


// hàm giúp thêm sinh viên vào mảng danhSachSinhVien
function themSinhVien() {
  let sinhVien = new Student(MaSV, Ten, Tuoi, DiaChi, DiemT, DiemV, DiemA, HanhKiem);
  danhSachSinhVien.push(sinhVien);
  hienThiSinhVien.innerHTML = '';
  danhSachSinhVien.forEach(function (sinhVien) {
    hienThiSinhVien.innerHTML += sinhVien.hienThi();
  })
}


// đối tượng sinh viên khai báo bằng class
class Student {
  maSV; // thuộc tính của mấy đứa sinh viên
  ten;
  tuoi;
  diaChi;
  diemT;
  diemV;
  diemA;
  hanhKiem;
  // constructor giúp lấy giá trị từ bên ngoài vào để khởi tạo sinh viên
  constructor(maSV, ten, tuoi, diaChi, diemT, diemV, diemA, hanhKiem) {
    this.maSV = maSV;
    this.ten = ten;
    this.tuoi = tuoi;
    this.diaChi = diaChi;
    this.diemT = diemT;
    this.diemV = diemV;
    this.diemA = diemA;
    this.hanhKiem = hanhKiem;
  }

  // hàm giúp hiện thị sinh viên theo dạng : 001 - Nguyen Van A - 20 - Hue - 10 - 10
  hienThi() {
    return `${this.maSV} - ${this.ten} - ${this.tuoi} - ${this.diaChi} - ${this.diemT} - ${this.diemV} - ${this.diemA} - ${this.hanhKiem}` + `<br>`;
  }

}
import axios from "../custom-axios"

// // GetLogin Admin
const fetchLoginAdmin = (TenDangNhap, MatKhau) => {
    return axios.post('tai-khoan/DangNhapAdmin', {
        TenDangNhap: TenDangNhap,
        MatKhau: MatKhau,
    })
}
export { fetchLoginAdmin };



// Ngành
//Get List Ngành
const fetchAllNganh = (headers) => {
    return axios.get('admin/nganh/DanhSachNganh', { headers });
}
export { fetchAllNganh };

//Get Chi Tiết Ngành
const fetchDetailNganh = (headers, MaNganh) => {
    return axios.get(`admin/nganh/ChiTietNganh/${MaNganh}`, { headers });
}
export { fetchDetailNganh };

//Sửa thông tin Ngành
const fetchEditNganh = (headers, MaNganh, TenNganh) => {
    return axios.put(`admin/nganh/ChinhSua/${MaNganh}`, {
        TenNganh: TenNganh,
    }, { headers });
}
export { fetchEditNganh };

//Thêm thông tin Ngành
const fetchAddNganh = (headers, MaNganh, TenNganh) => {
    return axios.post(`admin/nganh/Them`, {
        MaNganh: MaNganh,
        TenNganh: TenNganh,
    }, { headers });
}
export { fetchAddNganh };

//Xóa  Ngành
const fetchDeleteNganh = (headers, MaNganh) => {
    return axios.delete(`admin/nganh/Xoa/${MaNganh}`, { headers });
}
export { fetchDeleteNganh };
// Ngành


//Giảng viên
//Get List Giảng viên
const fetchAllGiangVien = (headers) => {
    return axios.get('admin/giang-vien/DanhSachGiangVien', { headers });
}
export { fetchAllGiangVien };

//Get Chi Tiết Giảng viên
const fetchDetailGiangVien = (headers, MaGV) => {
    return axios.get(`admin/giang-vien/ChiTietGiangVien/${MaGV}`, { headers });
}
export { fetchDetailGiangVien };

//Sửa thông tin Giảng viên
const fetchEditGiangVien = (headers, MaGV, data) => {
    for (const pair of data.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }
    // console.log(data.HoGV)
    return axios.post(`admin/giang-vien/ChinhSua/${MaGV}`, data, { headers });
}
export { fetchEditGiangVien };

//Thêm thông tin Giảng viên
const fetchAddGiangVien = (headers, data) => {
    return axios.post(`admin/giang-vien/Them`, data, { headers });
}
export { fetchAddGiangVien };

//Xóa  Giảng viên
const fetchDeleteGiangVien = (headers, MaGV) => {
    return axios.delete(`admin/giang-vien/Xoa/${MaGV}`, { headers });
}
export { fetchDeleteGiangVien };
//Giảng viên

//Chuyên ngành
//Get List Chuyên ngành
const fetchAllChuyenNganh = (headers) => {
    return axios.get('admin/chuyen-nganh/DanhSachChuyenNganh', { headers });
}
export { fetchAllChuyenNganh };

//Get Chi Tiết Chuyên ngành
const fetchDetailChuyenNganh = (headers, MaChuyenNganh) => {
    return axios.get(`admin/chuyen-nganh/ChiTietChuyenNganh/${MaChuyenNganh}`, { headers });
}
export { fetchDetailChuyenNganh };

//Sửa thông tin Chuyên ngành
const fetchEditChuyenNganh = (headers, MaChuyenNganh, MaNganh, TenChuyenNganh) => {
    return axios.put(`admin/chuyen-nganh/ChinhSua/${MaChuyenNganh}`, {
        MaChuyenNganh: MaChuyenNganh,
        MaNganh: MaNganh,
        TenChuyenNganh: TenChuyenNganh,
    }, { headers });
}
export { fetchEditChuyenNganh };

//thêm Chuyên ngành
const fetchAddChuyenNganh = (headers, MaChuyenNganh, MaNganh, TenChuyenNganh) => {
    return axios.post(`admin/chuyen-nganh/Them`, {
        MaChuyenNganh: MaChuyenNganh,
        MaNganh: MaNganh,
        TenChuyenNganh: TenChuyenNganh,
    }, { headers });
}
export { fetchAddChuyenNganh };

//Xóa  Chuyên ngành
const fetchDeleteChuyenNganh = (headers, MaChuyenNganh) => {
    return axios.delete(`admin/chuyen-nganh/Xoa/${MaChuyenNganh}`, { headers });
}
export { fetchDeleteChuyenNganh };
//Chuyên ngành

//Chức năng
//Get List Chức năng
const fetchAllChucNang = (headers) => {
    return axios.get('admin/chuc-nang/DanhSachChucNang', { headers });
}
export { fetchAllChucNang };

//Get Chi Tiết Chức năng
const fetchDetailChucNang = (headers, MaCN) => {
    return axios.get(`admin/chuc-nang/ChiTietChucNang/${MaCN}`, { headers });
}
export { fetchDetailChucNang };

//Sửa  Chức Năng
const fetchEditChucNang = (headers, MaCN, data) => {
    // for (const pair of data.entries()) {
    //     console.log(pair[0] + ": " + pair[1]);
    // }
    // console.log(data.TenChucNang)
    return axios.post(`admin/chuc-nang/ChinhSua/${MaCN}`, data, { headers });
}
export { fetchEditChucNang };

//Thêm Chức Năng
const fetchAddChucNang = (headers, data) => {
    // for (const pair of data.entries()) {
    //     console.log(pair[0] + ": " + pair[1]);
    // }
    return axios.post(`admin/chuc-nang/Them`, data, { headers });
}
export { fetchAddChucNang };

//Xóa  Chức năng
const fetchDeleteChucNang = (headers, MaCN) => {
    return axios.delete(`admin/chuc-nang/Xoa/${MaCN}`, { headers });
}
export { fetchDeleteChucNang };
//Chức năng

//Sinh Viên
//Get List Sinh Viên
const fetchAllSinhVien = (headers) => {
    return axios.get('admin/sinh-vien/DanhSachSinhVien', { headers });
}
export { fetchAllSinhVien };

//Get Chi Tiết Sinh Viên
const fetchDetailSinhVien = (headers, MaSV) => {
    return axios.get(`admin/sinh-vien/ChiTietSinhVien/${MaSV}`, { headers });
}
export { fetchDetailSinhVien };

//Sửa thông tin Sinh Viên
const fetchEditSinhVien = (headers, MaSV, HoSV, TenSV, Email, SoDienThoai, GioiTinh, NgaySinh, Khoa, ChuyenNganh, Nganh, Lop, TrangThaiTotNghiep) => {
    return axios.put(`admin/sinh-vien/ChinhSua/${MaSV}`, {
        MaSV: MaSV,
        HoSV: HoSV,
        TenSV: TenSV,
        Email: Email,
        SoDienThoai: SoDienThoai,
        GioiTinh: GioiTinh,
        NgaySinh: NgaySinh,
        Khoa: Khoa,
        ChuyenNganh: ChuyenNganh,
        Nganh: Nganh,
        Lop: Lop,
        TrangThaiTotNghiep: TrangThaiTotNghiep,
    }, { headers });
}
export { fetchEditSinhVien };

//Thêm thông tin Sinh Viên
const fetchAddSinhVien = (headers, MaSV, HoSV, TenSV, Email, SoDienThoai, GioiTinh, NgaySinh, Khoa, ChuyenNganh, Nganh, Lop, TrangThaiTotNghiep) => {
    return axios.post(`admin/sinh-vien/Them`, {
        MaSV: MaSV,
        HoSV: HoSV,
        TenSV: TenSV,
        Email: Email,
        SoDienThoai: SoDienThoai,
        GioiTinh: GioiTinh,
        NgaySinh: NgaySinh,
        Khoa: Khoa,
        ChuyenNganh: ChuyenNganh,
        Nganh: Nganh,
        Lop: Lop,
        TrangThaiTotNghiep: TrangThaiTotNghiep,
    }, { headers });
}
export { fetchAddSinhVien };

//Xóa  Sinh Viên
const fetchDeleteSinhVien = (headers, MaSV) => {
    return axios.delete(`admin/sinh-vien/Xoa/${MaSV}`, { headers });
}
export { fetchDeleteSinhVien };
//Sinh Viên

//Tài khoản
//Get List Tài khoản giảng viên
const fetchAllTaiKhoanGV = (headers) => {
    return axios.get('admin/tai-khoan/DanhSachTKGiangVien', { headers });
}
export { fetchAllTaiKhoanGV };

//Get List Tài khoản sinh viên
const fetchAllTaiKhoanSV = (headers) => {
    return axios.get('admin/tai-khoan/DanhSachTKSinhVien', { headers });
}
export { fetchAllTaiKhoanSV };

//Get Chi Tiết Tài khoản
const fetchDetailTaiKhoan = (headers, MaTK) => {
    return axios.get(`admin/tai-khoan/ChiTietTaiKhoan/${MaTK}`, { headers });
}
export { fetchDetailTaiKhoan };

//Sửa Tài khoản
const fetchEditTaiKhoan = (headers, MaTK, TenDangNhap, QuyenTK) => {
    console.log("MaTK ", MaTK)
    console.log("TenDangNhap ", TenDangNhap)
    console.log("QuyenTK ", QuyenTK)
    return axios.put(`admin/tai-khoan/ChinhSua/${MaTK}`, {
        TenDangNhap: TenDangNhap,
        QuyenTK: QuyenTK,
    }, { headers });
}
export { fetchEditTaiKhoan };

//Thêm Tài khoản
const fetchAddTaiKhoan = (headers, MaTK, TenDangNhap, MatKhau, MaQTK) => {
    return axios.post(`admin/tai-khoan/Them`, {
        MaTK: MaTK,
        TenDangNhap: TenDangNhap,
        MatKhau: MatKhau,
        MaQTK: MaQTK,
    }, { headers });
}
export { fetchAddTaiKhoan };

//Xóa  Tài khoản
const fetchDeleteTaiKhoan = (headers, MaTK) => {
    return axios.delete(`admin/tai-khoan/Xoa/${MaTK}`, { headers });
}
export { fetchDeleteTaiKhoan };
//Tài khoản


// Quyền tài khoản
//Get List Quyền tài khoản
const fetchAllQuyenTK = (headers) => {
    return axios.get('admin/quyen-tai-khoan/DanhSachQuyenTK', { headers });
}
export { fetchAllQuyenTK };

//Get Chi Tiết Quyền tài khoản
const fetchDetailQuyenTK = (headers, MaQTK) => {
    return axios.get(`admin/quyen-tai-khoan/ChiTietQuyenTK/${MaQTK}`, { headers });
}
export { fetchDetailQuyenTK };  
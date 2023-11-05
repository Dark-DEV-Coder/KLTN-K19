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
const fetchEditGiangVien = (headers, MaGV, HoGV, TenGV, Email, SoDienThoai, GioiTinh, NgaySinh, DonViCongTac, ChuyenNganh, TrinhDo) => {
    return axios.put(`admin/giang-vien/ChinhSua/${MaGV}`, {
        MaGV: MaGV,
        HoGV: HoGV,
        TenGV: TenGV,
        Email: Email,
        SoDienThoai: SoDienThoai,
        GioiTinh: GioiTinh,
        NgaySinh: NgaySinh,
        DonViCongTac: DonViCongTac,
        ChuyenNganh: ChuyenNganh,
        TrinhDo: TrinhDo
    }, { headers });
}
export { fetchEditGiangVien };

//Thêm thông tin Giảng viên
const fetchAddGiangVien = (headers, MaGV, HoGV, TenGV, Email, SoDienThoai, GioiTinh, NgaySinh, DonViCongTac, ChuyenNganh, TrinhDo) => {
    return axios.post(`admin/giang-vien/Them`, {
        MaGV: MaGV,
        HoGV: HoGV,
        TenGV: TenGV,
        Email: Email,
        SoDienThoai: SoDienThoai,
        GioiTinh: GioiTinh,
        NgaySinh: NgaySinh,
        DonViCongTac: DonViCongTac,
        ChuyenNganh: ChuyenNganh,
        TrinhDo: TrinhDo
    }, { headers });
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
const fetchEditChuyenNganh = (headers, MaChuyenNganh, HoGV, TenGV, Email, SoDienThoai, GioiTinh, NgaySinh, DonViCongTac, ChuyenNganh, TrinhDo) => {
    return axios.put(`admin/chuyen-nganh/ChinhSua/${MaChuyenNganh}`, {
        MaGV: MaChuyenNganh,
        HoGV: HoGV,
        TenGV: TenGV,
        Email: Email,
        SoDienThoai: SoDienThoai,
        GioiTinh: GioiTinh,
        NgaySinh: NgaySinh,
        DonViCongTac: DonViCongTac,
        ChuyenNganh: ChuyenNganh,
        TrinhDo: TrinhDo
    }, { headers });
}
export { fetchEditChuyenNganh };
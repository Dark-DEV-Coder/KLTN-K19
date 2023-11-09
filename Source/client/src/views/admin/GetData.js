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
    for (const pair of data.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }
    // console.log(data.TenChucNang)
    return axios.post(`admin/chuc-nang/ChinhSua/${MaCN}`, data, { headers });
}
export { fetchEditChucNang };

//Thêm Chức Năng
const fetchAddChucNang = (headers, data) => {
    for (const pair of data.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }
    return axios.post(`admin/chuc-nang/Them`, data, { headers });
}
export { fetchAddChucNang };

//Xóa  Chức năng
const fetchDeleteChucNang = (headers, MaCN) => {
    return axios.delete(`admin/chuc-nang/Xoa/${MaCN}`, { headers });
}
export { fetchDeleteChucNang };
//Chức năng
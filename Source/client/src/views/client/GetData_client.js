import axios from "../custom-axios"

//  GetLogin Client
const fetchLogin = (TenDangNhap, MatKhau) => {
    return axios.post('tai-khoan/DangNhap', {
        TenDangNhap: TenDangNhap,
        MatKhau: MatKhau,
    })
}
export { fetchLogin };

//Đổi mật khẩu  Tài khoản
const fetchEditMatKhau = (headers, MaTK, MatKhauCu, MatKhauMoi, NhapLaiMatKhauMoi) => {
    return axios.post(`tai-khoan/DoiMatKhau`, {
        MaSo: MaTK,
        MatKhauCu: MatKhauCu,
        MatKhauMoi: MatKhauMoi,
        NhapLaiMatKhauMoi: NhapLaiMatKhauMoi,
    }, { headers });
}
export { fetchEditMatKhau };

// Chi tiết SV Client
const fetchDetailSinhVien = (headers, MaSV) => {
    return axios.get(`sinh-vien/ChiTietSinhVien/${MaSV}`, { headers })
}
export { fetchDetailSinhVien };

// Sửa Thông tin SV
const fetchEditSinhVien = (headers, MaSV, HoSV, TenSV, Email, SoDienThoai, GioiTinh, NgaySinh) => {
    return axios.put(`sinh-vien/ChinhSuaThongTin/${MaSV}`, {
        MaSV: MaSV,
        HoSV: HoSV,
        TenSV: TenSV,
        Email: Email,
        SoDienThoai: SoDienThoai,
        GioiTinh: GioiTinh,
        NgaySinh: NgaySinh,
    }, { headers })
}
export { fetchEditSinhVien };

// Chi tiết GV Client
const fetchDetailGiangVien = (headers, MaGV) => {
    return axios.get(`giang-vien/ChiTietGiangVien/${MaGV}`, { headers })
}
export { fetchDetailGiangVien };

//Sửa thông tin Giảng viên - lỗi
const fetchEditGiangVien = (headers, MaGV, data) => {
    for (const pair of data.entries()) {
        console.log(pair[0] + ": " + pair[1]);
    }
    // console.log(data.HoGV)
    return axios.post(`giang-vien/ChinhSuaThongTin/${MaGV}`, data, { headers });
}
export { fetchEditGiangVien };

// Chi tiết Chuyên ngành
const fetchDetailChuyenNganh = (headers) => {
    return axios.get(`dk-chuyen-nganh/LayDotDKCNDangMo`, { headers })
}
export { fetchDetailChuyenNganh };

// DSSV đăng ký chuyên ngành
const fetchDetailDSSVChuyenNganh = (headers, MaDKCN, MaNganh, MaChuyenNganh) => {
    return axios.post(`dk-chuyen-nganh/DSSVDangKyChuyenNganh/${MaDKCN}`, {
        MaNganh: MaNganh,
        MaChuyenNganh: MaChuyenNganh
    }, { headers })
}
export { fetchDetailDSSVChuyenNganh };

// Chi tiết Khóa luận
const fetchDetailKhoaLuan = (headers) => {
    return axios.get(`khoa-luan-tot-nghiep/ThongTinKLTN`, { headers })
}
export { fetchDetailKhoaLuan };

//Đăng ký chuyên ngành
const fetchDkyChuyenNganh = (headers, MaDKCN, MaSV, MaNganh, MaChuyenNganh) => {
    // console.log("MaDKCN: ", MaDKCN)
    // console.log("MaSV: ", MaSV)
    // console.log("MaNganh: ", MaNganh)
    // console.log("MaChuyenNganh: ", MaChuyenNganh)
    return axios.post(`dk-chuyen-nganh/SVDangKyChuyenNganh/${MaDKCN}`, {
        MaDKCN: MaDKCN,
        MaSV: MaSV,
        MaNganh: MaNganh,
        MaChuyenNganh: MaChuyenNganh
    }, { headers })
}
export { fetchDkyChuyenNganh };

// DS đề tài theo GV
const fetchDSDeTaiCuaGV = (headers, MaKLTN, MaGV) => {
    return axios.post(`khoa-luan-tot-nghiep/DSDeTaiTheoGiangVien/${MaKLTN}`, {
        MaGV: MaGV
    }, { headers })
}
export { fetchDSDeTaiCuaGV };



// DS đề tài chưa được đăng ký
const fetchDSDeTaiChuaDangKy = (headers, MaKLTN) => {
    // console.log("Mã KLTN: ", MaKLTN)
    // console.log("headers: ", headers)
    return axios.post(`khoa-luan-tot-nghiep/DSDeTaiChuaDangKy/${MaKLTN}`, {
        MaKLTN: MaKLTN
    }, { headers })
}
export { fetchDSDeTaiChuaDangKy };

//SV đăng ký khóa luận
const fetchSinhVienDangKyKhoaLuan = (headers, MaKLTN, TenDeTai, MaGV, MaSV, HoSV, TenSV, Email, SoDienThoai, DTBTL, TinChiTL) => {
    return axios.post(`khoa-luan-tot-nghiep/SVDangKyDeTai/${MaKLTN}`, {
        MaKLTN: MaKLTN,
        TenDeTai: TenDeTai,
        MaGV: MaGV,
        MaSV: MaSV,
        HoSV: HoSV,
        TenSV: TenSV,
        Email: Email,
        SoDienThoai: SoDienThoai,
        DTBTL: DTBTL,
        TinChiTL: TinChiTL,
    }, { headers })
}
export { fetchSinhVienDangKyKhoaLuan };


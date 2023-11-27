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

// Sửa Thông tin SV - lỗi
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

// Chi tiết Khóa luận
const fetchDetailKhoaLuan = (headers) => {
    return axios.get(`khoa-luan-tot-nghiep/ThongTinKLTN`, { headers })
}
export { fetchDetailKhoaLuan };
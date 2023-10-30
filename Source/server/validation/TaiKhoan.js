import Error from "../helper/error.js"

export const KtraDuLieuTaiKhoanKhiThem = data => {
    const error = new Error()

    error.isRequired(data.MaTK, "MaTK")
        .isRequired(data.MaQTK, "MaQTK")
        .isRequired(data.TenDangNhap, "TenDangNhap")
        .isRequired(data.MatKhau, "MatKhau")

    return error.get()
}

export const KtraDuLieuTaiKhoanKhiChinhSua = data => {
    const error = new Error()

    error.isRequired(data.MaQTK, "MaQTK")
        .isRequired(data.TenDangNhap, "TenDangNhap")

    return error.get()
}

export const KtraDuLieuTaiKhoanKhiDangNhap = data => {
    const error = new Error()

    error.isRequired(data.TenDangNhap, "TenDangNhap")
        .isRequired(data.MatKhau, "MatKhau")

    return error.get()
}
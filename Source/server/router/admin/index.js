import express from "express"
import ChucNangAdminRoute from "./ChucNang.js"
import QuyenTaiKhoanAdminRoute from "./QuyenTaiKhoan.js"
import TaiKhoanAdminRoute from "./TaiKhoan.js";
import NganhAdminRoute from "./Nganh.js"
import ChuyenNganhAdminRoute from "./ChuyenNganh.js";
import SinhVienAdminRoute from "./SinhVien.js";
import GiangVienAdminRoute from "./GiangVien.js";
import CanhBaoHocTapAdminRoute from "./CanhBaoHocTap.js";

const adminRoute = express.Router();

adminRoute.use('/chuc-nang', ChucNangAdminRoute)
        .use('/quyen-tai-khoan', QuyenTaiKhoanAdminRoute)
        .use('/tai-khoan', TaiKhoanAdminRoute)
        .use('/nganh', NganhAdminRoute)
        .use('/chuyen-nganh', ChuyenNganhAdminRoute)
        .use('/sinh-vien', SinhVienAdminRoute)
        .use('/giang-vien', GiangVienAdminRoute)
        .use('/canh-bao-hoc-tap', CanhBaoHocTapAdminRoute)

export default adminRoute


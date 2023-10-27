import express from "express"
import ChucNangAdminRoute from "./ChucNang.js"
import QuyenTaiKhoanAdminRoute from "./QuyenTaiKhoan.js"
import TaiKhoanAdminRoute from "./TaiKhoan.js";
import NganhAdminRoute from "./Nganh.js"
import ChuyenNganhAdminRoute from "./ChuyenNganh.js";

const adminRoute = express.Router();

adminRoute.use('/chuc-nang', ChucNangAdminRoute)
        .use('/quyen-tai-khoan', QuyenTaiKhoanAdminRoute)
        .use('/tai-khoan', TaiKhoanAdminRoute)
        .use('/nganh', NganhAdminRoute)
        .use('/chuyen-nganh', ChuyenNganhAdminRoute)

export default adminRoute


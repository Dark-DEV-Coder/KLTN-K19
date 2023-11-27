import express from "express"
import fs from 'fs'
import { sendError, sendServerError, sendSuccess } from "../helper/client.js"
import Nganh from "../model/Nganh.js"
import ChuyenNganh from "../model/ChuyenNganh.js"
import SinhVien from "../model/SinhVien.js"
import DangKyThucTap from "../model/DangKyThucTap.js"
import { TrangThaiDangKyThucTap } from "../constant.js"
import { KtraSVDangKyThucTapCtyTrongDS } from "../validation/DangKyThucTap.js"
import { verifyToken, verifyUser } from "../middleware/verify.js"

const DangKyThucTapRoute = express.Router()

/**
 * @route GET /api/dk-thuc-tap/ChiTietDKTTDangMo
 * @description Lấy thông tin chi tiết đợt đăng ký thực tập đang mở
 * @access public
 */
DangKyThucTapRoute.get('/ChiTietDKTTDangMo', async (req, res) => {
    try {
        const { MaDKTT } = req.params
        const isExist = await DangKyThucTap.findOne({ TrangThai: TrangThaiDangKyThucTap.TrongThoiGianDangKy }).lean();
        if (!isExist)
            return sendError(res, "Đợt đăng ký thực tập không tồn tại"); 

        return sendSuccess(res, "Chi tiết thông tin đăng ký thực tập.", isExist)
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/dk-thuc-tap/DSCtyTrongDanhSach/{MaDKTT}
 * @description Lấy danh sách công ty đợt đăng ký thực tập
 * @access public
 */
DangKyThucTapRoute.post('/DSCtyTrongDanhSach/:MaDKTT', async (req, res) => {
    try {
        const { MaDKTT } = req.params;
        const dktt = await DangKyThucTap.findOne({ MaDKTT: MaDKTT });
        if (!dktt)
            return sendError(res, "Đợt đăng ký thực tập không tồn tại");

        let thongtin = [];
        dktt.CongTyTrongDS.forEach((element) => {
            thongtin.push(element);
        });
        
        return sendSuccess(res, "Lấy danh sách công ty trong danh sách thành công", thongtin);
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/dk-thuc-tap/SVDangKyCtyTrongDS/{MaDKTT}
 * @description Sinh viên đăng ký thực tập công ty trong danh sách
 * @access public
 */
DangKyThucTapRoute.post('/SVDangKyCtyTrongDS/:MaDKTT', verifyToken, verifyUser, async (req, res) => {
    try {
        const err = KtraSVDangKyThucTapCtyTrongDS(req.body);
        if (err)
            return sendError(res, err);
        const { MaDKTT } = req.params;
        const dktt = await DangKyThucTap.findOne({ MaDKTT: MaDKTT });
        if (!dktt)
            return sendError(res, "Đợt đăng ký thực tập không tồn tại");
        const { EmailCty, ViTri, MaSV } = req.body;
        const sinhvien = await SinhVien.findOne({ MaSV: MaSV });
        if (!sinhvien)
            return sendError(res, "Sinh viên này không tồn tại");
        let check = 0;
        dktt.SinhVienDuocDKTT.forEach((element) => {
            if (element.equals(sinhvien._id)){
                check = 1;
                return;
            }
        });
        if (check == 0)
            return sendError(res, "Bạn không được phép đăng ký thực tập");

        let thongtin = [];
        dktt.CongTyTrongDS.forEach((element) => {
            if (element.Email.includes(EmailCty)){
                element.DangKy.forEach((data) => {
                    if (data.ViTri.includes(ViTri)){

                    }
                });
            }
        });
        
        return sendSuccess(res, "Lấy danh sách công ty trong danh sách thành công", thongtin);
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

export default DangKyThucTapRoute
import express from "express"
import argon2 from "argon2"
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import { TrangThaiTonTai } from "../../constant.js"
import { KtraDuLieuTaiKhoanKhiChinhSua, KtraDuLieuTaiKhoanKhiThem } from "../../validation/TaiKhoan.js"
import TaiKhoan from "../../model/TaiKhoan.js"

const TaiKhoanAdminRoute = express.Router()

/**
 * @route GET /api/admin/tai-khoan/DanhSachTK
 * @description Lấy danh sách quyền tài khoản
 * @access public
 */
TaiKhoanAdminRoute.get('/DanhSachTK', async (req, res) => {
    try {
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
        const page = req.query.page ? parseInt(req.query.page) : 0
        const { keyword} = req.query
        var query = {trangthai: TrangThaiTonTai.ChuaXoa}
        var keywordCondition = keyword
            ? {
                $or: [
                    { MaTK: { $regex: keyword, $options: "i" } },
                    { MaQTK: { $regex: keyword, $options: "i" } },
                    { TenDangNhap: { $regex: keyword, $options: "i" } },
                ],
            } : {};
        const taikhoans = await TaiKhoan.find({ $and: [query, keywordCondition] }).limit(pageSize).skip(pageSize * page)
        const length = await TaiKhoan.find({ $and: [query, keywordCondition] }).count();

        if (taikhoans.length == 0) 
            return sendError(res, "Không tìm thấy danh sách tài khoản.")
        if (taikhoans) 
            return sendSuccess(res, "Lấy danh sách tài khoản thành công.", { 
                TrangThai: "Thành công",
                SoLuong: length,
                DanhSach: taikhoans
            })

        return sendError(res, "Không tìm thấy danh sách quyền tài khoản.")
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/admin/tai-khoan/Them
 * @description Thêm tài khoản
 * @access public
 */
TaiKhoanAdminRoute.post('/Them', async (req, res) => {
    try{
        const errors = KtraDuLieuTaiKhoanKhiThem(req.body)
        if (errors)
            return sendError(res, errors)
        const { MaTK, MaQTK, TenDangNhap, MatKhau } = req.body;

        const isExistMa = await TaiKhoan.findOne({ MaTK: MaTK }).lean();
        if (isExistMa)
            return sendError(res, "Mã tài khoản đã tồn tại");

        let password = await argon2.hash(MatKhau)
        const taikhoan = await TaiKhoan.create({ MaTK: MaTK, MaQTK: MaQTK, TenDangNhap: TenDangNhap, MatKhau: password });

        return sendSuccess(res, "Thêm tài khoản thành công", taikhoan);
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route PUT /api/admin/tai-khoan/ChinhSua/{MaTK}
 * @description Chỉnh sửa thông tin tài khoản
 * @access public
 */
TaiKhoanAdminRoute.put('/ChinhSua/:MaTK', async (req, res) => {
    try{
        const errors = KtraDuLieuTaiKhoanKhiChinhSua(req.body)
        if (errors)
            return sendError(res, errors)
        const { MaQTK, TenDangNhap } = req.body;
        const { MaTK } = req.params;

        await TaiKhoan.findOneAndUpdate({ MaTK: MaTK },{ MaQTK: MaQTK, TenDangNhap: TenDangNhap });

        return sendSuccess(res, "Chỉnh sửa tài khoản thành công");
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route DELETE /api/admin/tai-khoan/Xoa/{MaTK}
 * @description Xóa tài khoản
 * @access private
 */
TaiKhoanAdminRoute.delete('/Xoa/:MaTK', async (req, res) => {
    try {
        const { MaTK } = req.params
        const isExist = await TaiKhoan.findOne({ MaTK: MaTK })
        if (!isExist) 
            return sendError(res, "Tài khoản này không tồn tại");
        await TaiKhoan.findOneAndDelete({ MaTK: MaTK });
        return sendSuccess(res, "Xóa tài khoản thành công.")
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

export default TaiKhoanAdminRoute
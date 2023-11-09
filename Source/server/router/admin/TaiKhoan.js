import express from "express"
import argon2 from "argon2"
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import { TrangThaiGiangVien, TrangThaiSinhVien, TrangThaiTaiKhoan, TrangThaiTonTai } from "../../constant.js"
import { KtraDuLieuTaiKhoanKhiChinhSua, KtraDuLieuTaiKhoanKhiDangNhap, KtraDuLieuTaiKhoanKhiThem } from "../../validation/TaiKhoan.js"
import TaiKhoan from "../../model/TaiKhoan.js"
import QuyenTaiKhoan from "../../model/QuyenTaiKhoan.js"
import GiangVien from "../../model/GiangVien.js"
import SinhVien from "../../model/SinhVien.js"
import { createTokenPair } from "../../middleware/auth.js"

const TaiKhoanAdminRoute = express.Router()

/**
 * @route GET /api/admin/tai-khoan/DanhSachTK
 * @description Lấy danh sách tài khoản
 * @access public
 */
TaiKhoanAdminRoute.get('/DanhSachTK', async (req, res) => {
    try {
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
        const page = req.query.page ? parseInt(req.query.page) : 0
        const { keyword} = req.query
        var keywordCondition = keyword
            ? {
                $or: [
                    { MaTK: { $regex: keyword, $options: "i" } },
                    { MaQTK: { $regex: keyword, $options: "i" } },
                    { TenDangNhap: { $regex: keyword, $options: "i" } },
                ],
            } : {};
        const taikhoans = await TaiKhoan.find({ $and: [keywordCondition], TrangThai: { $in: [TrangThaiTaiKhoan.ChuaKichHoat, TrangThaiTaiKhoan.DaKichHoat]} })
                                        .limit(pageSize).skip(pageSize * page)
                                        .populate({
                                                    path: "MaQTK",
                                                    select: "MaQTK TenQuyenTK",
                                                })
        const length = await TaiKhoan.find({ $and: [keywordCondition], TrangThai: { $in: [TrangThaiTaiKhoan.ChuaKichHoat, TrangThaiTaiKhoan.DaKichHoat]} }).count();

        if (taikhoans.length == 0) 
            return sendError(res, "Không tìm thấy danh sách tài khoản.")
        if (taikhoans) 
            return sendSuccess(res, "Lấy danh sách tài khoản thành công.", { 
                TrangThai: "Thành công",
                SoLuong: length,
                DanhSach: taikhoans
            })

        return sendError(res, "Không tìm thấy danh sách tài khoản.")
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route GET /api/admin/tai-khoan/ChiTietTaiKhoan/{MaTK}
 * @description Lấy chi tiết tài khoản
 * @access public
 */
TaiKhoanAdminRoute.get('/ChiTietTaiKhoan/:MaTK', async (req, res) => {
    try {
        const { MaTK } = req.params;
        const isExist = await TaiKhoan.findOne({ MaTK: MaTK })
                                    .populate({
                                        path: "MaQTK",
                                        select: "MaQTK TenQuyenTK",
                                    }).lean();
        if (!isExist)
            return sendError(res, "Tài khoản không tồn tại");

        return sendSuccess(res, "Chi tiết tài khoản.", isExist);
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
        const isExistTen = await TaiKhoan.findOne({ TenDangNhap: TenDangNhap }).lean();
        if (isExistTen)
            return sendError(res, "Tên đăng nhập đã tồn tại");
        const isExistSV = await SinhVien.findOne({ MaSV: TenDangNhap });
        const isExistGV = await GiangVien.findOne({ MaGV: TenDangNhap });
        if (!isExistSV && !isExistGV)
            return sendError(res, "Tên đăng nhập phải là mã sinh viên hoặc là mã giảng viên")
        if (isExistSV && isExistSV.MaTK != null)
            return sendError(res, "Sinh viên này đã có tài khoản");
        if (isExistGV && isExistGV.MaTK != null)
            return sendError(res, "Giảng viên này đã có tài khoản");

        const isExistMaQuyenTK = await QuyenTaiKhoan.findOne({ MaQTK: MaQTK });
        if (!isExistMaQuyenTK)
            return sendError(res, "Quyền tài khoản không tồn tại");
        

        let password = await argon2.hash(MatKhau)
        const taikhoan = await TaiKhoan.create({ MaTK: MaTK, MaQTK: isExistMaQuyenTK._id, TenDangNhap: TenDangNhap, MatKhau: password });
        if (isExistSV){
            await SinhVien.findOneAndUpdate({ MaSV: isExistSV.MaSV },{ MaTK: taikhoan._id, TrangThai: TrangThaiSinhVien.DaCoTaiKhoan });
        }
        else{
            if (isExistGV)
                await GiangVien.findOneAndUpdate({ MaGV: isExistGV.MaGV },{ MaTK: taikhoan._id, TrangThai: TrangThaiGiangVien.DaCoTaiKhoan });
            
        }

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

        const isExistMa = await TaiKhoan.findOne({ MaTK: MaTK }).lean();
        if (!isExistMa)
            return sendError(res, "Tài khoản không tồn tại");
        const isExistTen = await TaiKhoan.findOne({ TenDangNhap: TenDangNhap }).lean();
        if (isExistTen){
            if (isExistTen.MaTK != isExistMa.MaTK)
                return sendError(res, "Tên đăng nhập đã tồn tại");
        }

        const isExistMaQuyenTK = await QuyenTaiKhoan.findOne({ MaQTK: MaQTK });
        if (!isExistMaQuyenTK)
            return sendError(res, "Quyền tài khoản không tồn tại");

        await TaiKhoan.findOneAndUpdate({ MaTK: MaTK },{ MaQTK: isExistMaQuyenTK._id, TenDangNhap: TenDangNhap });

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

/**
 * @route GET /api/admin/tai-khoan/DanhSachTKGiangVien
 * @description Lấy danh sách tài khoản giảng viên
 * @access public
 */
TaiKhoanAdminRoute.get('/DanhSachTKGiangVien', async (req, res) => {
    try {
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
        const page = req.query.page ? parseInt(req.query.page) : 0
        const taikhoangvs = await GiangVien.find({ TrangThai: TrangThaiGiangVien.DaCoTaiKhoan })
                                        .limit(pageSize).skip(pageSize * page)
                                        .populate({
                                                    path: "MaTK",
                                                    select: "MaTK TenDangNhap MaQTK TrangThai",
                                                    populate: {
                                                        path: "MaQTK",
                                                        select: "MaQTK TenQuyenTK"
                                                    }
                                                    
                                                })
        let taikhoans = []
        taikhoangvs.forEach((data) => {
            taikhoans.push(data.MaTK);
        });

        if (taikhoangvs.length == 0) 
            return sendError(res, "Không tìm thấy danh sách tài khoản giảng viên.")
        if (taikhoangvs) 
            return sendSuccess(res, "Lấy danh sách tài khoản giảng viên thành công.", { 
                TrangThai: "Thành công",
                SoLuong: taikhoans.length,
                DanhSach: taikhoans
            })

        return sendError(res, "Không tìm thấy danh sách tài khoản giảng viên.")
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route GET /api/admin/tai-khoan/DanhSachTKSinhVien
 * @description Lấy danh sách tài khoản sinh viên
 * @access public
 */
TaiKhoanAdminRoute.get('/DanhSachTKSinhVien', async (req, res) => {
    try {
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
        const page = req.query.page ? parseInt(req.query.page) : 0
        const taikhoangvs = await SinhVien.find({ TrangThai: TrangThaiSinhVien.DaCoTaiKhoan })
                                        .limit(pageSize).skip(pageSize * page)
                                        .populate({
                                                    path: "MaTK",
                                                    select: "MaTK TenDangNhap MaQTK TrangThai",
                                                    populate: {
                                                        path: "MaQTK",
                                                        select: "MaQTK TenQuyenTK"
                                                    }
                                                    
                                                })
        let taikhoans = []
        taikhoangvs.forEach((data) => {
            taikhoans.push(data.MaTK);
        });

        if (taikhoangvs.length == 0) 
            return sendError(res, "Không tìm thấy danh sách tài khoản sinh viên.")
        if (taikhoangvs) 
            return sendSuccess(res, "Lấy danh sách tài khoản sinh viên thành công.", { 
                TrangThai: "Thành công",
                SoLuong: taikhoans.length,
                DanhSach: taikhoans
            })

        return sendError(res, "Không tìm thấy danh sách tài khoản sinh viên.")
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

export default TaiKhoanAdminRoute
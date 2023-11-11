import express from "express"
import fs from 'fs'
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import { TrangThaiSinhVien } from "../../constant.js"
import SinhVien from "../../model/SinhVien.js"
import { createSinhVienDir } from "../../middleware/createDir.js"
import { uploadImg } from "../../middleware/storage.js"
import { KtraDuLieuSinhVienKhiChinhSua, KtraDuLieuSinhVienKhiThem } from "../../validation/SinhVien.js"
import { DeleteHinhTrenCloudinary, UploadHinhLenCloudinary } from "../../helper/connectCloudinary.js"

const SinhVienAdminRoute = express.Router()

/**
 * @route GET /api/admin/sinh-vien/DanhSachSinhVien
 * @description Lấy danh sách sinh viên
 * @access public
 */
SinhVienAdminRoute.get('/DanhSachSinhVien', async (req, res) => {
    try {
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
        const page = req.query.page ? parseInt(req.query.page) : 0
        const { keyword} = req.query
        let trangthai = [TrangThaiSinhVien.ChuaCoTaiKhoan,TrangThaiSinhVien.DaCoTaiKhoan];
        var keywordCondition = keyword
            ? {
                $or: [
                    { MaSV: { $regex: keyword, $options: "i" } },
                    { HoSV: { $regex: keyword, $options: "i" } },
                    { TenSV: { $regex: keyword, $options: "i" } },
                    { Email: { $regex: keyword, $options: "i" } },
                    { SoDienThoai: { $regex: keyword, $options: "i" } },
                ],
            } : {};
        const sinhviens = await SinhVien.find({ $and: [keywordCondition], TrangThai: trangthai }).limit(pageSize).skip(pageSize * page)
        const length = await SinhVien.find({ $and: [keywordCondition], TrangThai: trangthai }).count();

        if (sinhviens.length == 0) 
            return sendError(res, "Không tìm thấy danh sách sinh viên.")
        if (sinhviens) 
            return sendSuccess(res, "Lấy danh sách sinh viên thành công.", { 
                TrangThai: "Thành công",
                SoLuong: length,
                DanhSach: sinhviens
            })

        return sendError(res, "Không tìm thấy danh sách sinh viên.")
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route GET /api/admin/sinh-vien/ChiTietSinhVien/{MaSV}
 * @description Lấy thông tin chi tiết sinh viên
 * @access public
 */
SinhVienAdminRoute.get('/ChiTietSinhVien/:MaSV', async (req, res) => {
    try {
        const { MaSV } = req.params;
        const isExist = await SinhVien.findOne({ MaSV: MaSV }).lean();
        if (!isExist)
            return sendError(res, "Sinh viên không tồn tại");
        return sendSuccess(res, "Chi tiết sinh viên.", isExist);
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/admin/sinh-vien/Them
 * @description Thêm sinh viên
 * @access public
 */
SinhVienAdminRoute.post('/Them', async (req, res) => {
    try{
        const errors = KtraDuLieuSinhVienKhiThem(req.body)
        if (errors)
            return sendError(res, errors)
        const { MaSV, HoSV, TenSV, Email, SoDienThoai, GioiTinh, NgaySinh, Khoa, ChuyenNganh, Nganh, Lop } = req.body;
        const isExist = await SinhVien.findOne({ MaSV: MaSV }).lean();
        if (isExist)
            return sendError(res, "Mã sinh viên đã tồn tại");
        const sinhvien = await SinhVien.create({ MaSV, HoSV, TenSV, Email, SoDienThoai, GioiTinh, NgaySinh, Khoa, ChuyenNganh, Nganh, Lop });

        return sendSuccess(res, "Thêm sinh viên thành công", sinhvien);
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route PUT /api/admin/sinh-vien/ChinhSua/{MaSV}
 * @description Chỉnh sửa thông tin sinh viên
 * @access public
*/
SinhVienAdminRoute.put('/ChinhSua/:MaSV', async (req, res) => {
    try{
        const errors = KtraDuLieuSinhVienKhiChinhSua(req.body)
        if (errors)
            return sendError(res, errors)
        const { HoSV, TenSV, Email, SoDienThoai, GioiTinh, NgaySinh, Khoa, ChuyenNganh, Nganh, Lop } = req.body;
        const { MaSV } = req.params;
        const sinhvien = await SinhVien.findOne({ MaSV: MaSV }).lean();
        if (!sinhvien)
            return sendError(res, "Mã sinh viên không tồn tại");
        
        await SinhVien.findOneAndUpdate({ MaSV: MaSV },{ HoSV, TenSV, Email, SoDienThoai, GioiTinh, NgaySinh, Khoa, ChuyenNganh, Nganh, Lop });

        return sendSuccess(res, "Chỉnh sửa thông tin sinh viên thành công");
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route DELETE /api/admin/sinh-vien/Xoa/{MaSV}
 * @description Xóa thông tin sinh viên
 * @access private
 */
SinhVienAdminRoute.delete('/Xoa/:MaSV', async (req, res) => {
    try {
        const { MaSV } = req.params
        const isExist = await SinhVien.findOne({ MaSV: MaSV })
        if (!isExist) 
            return sendError(res, "Sinh viên này không tồn tại");
        await SinhVien.findOneAndDelete({ MaSV: MaSV });
        return sendSuccess(res, "Xóa sinh viên thành công.")
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

export default SinhVienAdminRoute
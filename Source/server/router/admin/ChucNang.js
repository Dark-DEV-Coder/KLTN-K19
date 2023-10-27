import express from "express"
import fs from 'fs'
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import ChucNang from "../../model/ChucNang.js"
import {TrangThaiTonTai} from "../../constant.js"
import { createChucNangDir } from "../../middleware/createDir.js"
import { uploadImg } from "../../middleware/storage.js"
import { DeleteHinhTrenCloudinary, UploadHinhLenCloudinary } from "../../helper/connectCloudinary.js"
import { KtraDuLieuChucNangKhiChinhSua, KtraDuLieuChucNangKhiThem } from "../../validation/ChucNang.js"

const ChucNangAdminRoute = express.Router()

/**
 * @route GET /api/admin/chuc-nang/DanhSachChucNang
 * @description Lấy danh sách chức năng
 * @access public
 */
ChucNangAdminRoute.get('/DanhSachChucNang', async (req, res) => {
    try {
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
        const page = req.query.page ? parseInt(req.query.page) : 0
        const { keyword} = req.query
        var query = {trangthai: TrangThaiTonTai.ChuaXoa}
        var keywordCondition = keyword
            ? {
                $or: [
                    { MaCN: { $regex: keyword, $options: "i" } },
                    { TenChucNang: { $regex: keyword, $options: "i" } },
                ],
            } : {};
        const chucnangs = await ChucNang.find({ $and: [query, keywordCondition] }).limit(pageSize).skip(pageSize * page)
        const length = await ChucNang.find({ $and: [query, keywordCondition] }).count();

        if (chucnangs.length == 0) 
            return sendError(res, "Không tìm thấy danh sách chức năng.")
        if (chucnangs) 
            return sendSuccess(res, "Lấy danh sách chức năng thành công.", { 
                TrangThai: "Thành công",
                SoLuong: length,
                DanhSach: chucnangs
            })

        return sendError(res, "Không tìm thấy danh sách chức năng.")
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/admin/chuc-nang/Them
 * @description Thêm chức năng
 * @access public
 */
ChucNangAdminRoute.post('/Them', createChucNangDir, uploadImg.single("Hinh"), async (req, res) => {
    try{
        const errors = KtraDuLieuChucNangKhiThem(req.body)
        if (errors)
            return sendError(res, errors)
        const { MaCN, TenChucNang } = req.body;
        const isExist = await ChucNang.findOne({ MaCN: MaCN }).lean();
        if (isExist)
            return sendError(res, "Mã chức năng đã tồn tại");
        let fileImage = await `${req.file.destination}${req.file.filename}`;
        let nameImage = await req.file.filename + TenChucNang.normalize('NFD')
                                                            .replace(/[\u0300-\u036f]/g, '')
                                                            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
                                                            .replace(/ /g, '');
        let resultImage = await UploadHinhLenCloudinary(fileImage, "ChucNang", nameImage);
        if (resultImage) {
            fs.unlinkSync(fileImage, (err) => {
                console.log(err);
            })
        }
        const chucnang = await ChucNang.create({ MaCN: MaCN, TenChucNang: TenChucNang, Hinh: resultImage });

        return sendSuccess(res, "Thêm chức năng thành công", chucnang);
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route PUT /api/admin/chuc-nang/ChinhSua/{MaCN}
 * @description Chỉnh sửa thông tin chức năng
 * @access public
 */
ChucNangAdminRoute.put('/ChinhSua/:MaCN', createChucNangDir, uploadImg.single("Hinh"), async (req, res) => {
    try{
        const errors = KtraDuLieuChucNangKhiChinhSua(req.body)
        if (errors)
            return sendError(res, errors)
        const { TenChucNang } = req.body;
        const { MaCN } = req.params;
        const isExist = await ChucNang.findOne({ MaCN: MaCN }).lean();
        if (isExist){
            let splitUrl = await isExist.Hinh.split('/');
            let file = await `${splitUrl[splitUrl.length - 2]}/${splitUrl[splitUrl.length - 1].split('.')[0]}`;
            await DeleteHinhTrenCloudinary(file);
        }
        let fileImage = await `${req.file.destination}${req.file.filename}`;
        let nameImage = await req.file.filename + TenChucNang.normalize('NFD')
                                                            .replace(/[\u0300-\u036f]/g, '')
                                                            .replace(/đ/g, 'd').replace(/Đ/g, 'D')
                                                            .replace(/ /g, '');
        let resultImage = await UploadHinhLenCloudinary(fileImage, "ChucNang", nameImage);
        if (resultImage) {
            fs.unlinkSync(fileImage, (err) => {
                console.log(err)
            })
        }
        await ChucNang.findOneAndUpdate({ MaCN: MaCN },{ TenChucNang: TenChucNang, Hinh: resultImage });

        return sendSuccess(res, "Chỉnh sửa thông tin chức năng thành công");
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route DELETE /api/admin/chuc-nang/Xoa
 * @description Xóa chức năng
 * @access private
 */
ChucNangAdminRoute.delete('/Xoa/:MaCN', async (req, res) => {
    try {
        const { MaCN } = req.params
        const isExist = await ChucNang.findOne({ MaCN: MaCN })
        if (!isExist) 
            return sendError(res, "Chức năng này không tồn tại");
        let splitUrl = await isExist.Hinh.split('/');
        let file = await `${splitUrl[splitUrl.length - 2]}/${splitUrl[splitUrl.length - 1].split('.')[0]}`;
        await DeleteHinhTrenCloudinary(file);
        await ChucNang.findOneAndDelete({ MaCN: MaCN });
        return sendSuccess(res, "Xóa chức năng thành công.")
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

export default ChucNangAdminRoute
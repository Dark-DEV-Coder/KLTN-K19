import express from "express"
import fs from 'fs'
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import { TrangThaiDangKyChuyenNganh, TrangThaiTonTai } from "../../constant.js"
import DangKyChuyenNganh from "../../model/DangKyChuyenNganh.js"
import { KtraDuLieuDKCNKhiChinhSua, KtraDuLieuDKCNKhiThem, KtraDuLieuDKCNKhiThemMonChuyenNganh, KtraDuLieuDKCNKhiXoaMonChuyenNganh } from "../../validation/DangKyChuyenNganh.js"
import { DoiDinhDangNgay, XuLyNgaySinh } from "../../helper/XuLyDuLieu.js"
import Nganh from "../../model/Nganh.js"
import ChuyenNganh from "../../model/ChuyenNganh.js"

const DangKyChuyenNganhAdminRoute = express.Router()

/**
 * @route GET /api/admin/dk-chuyen-nganh/DanhSachDKCN
 * @description Lấy danh sách đăng ký chuyên ngành
 * @access public
 */
DangKyChuyenNganhAdminRoute.get('/DanhSachDKCN', async (req, res) => {
    try {
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
        const page = req.query.page ? parseInt(req.query.page) : 0
        const { keyword} = req.query
        var keywordCondition = keyword
            ? {
                $or: [
                    { MaDKCN: { $regex: keyword, $options: "i" } },
                    { Ten: { $regex: keyword, $options: "i" } },
                ],
            } : {};
        const dkcn = await DangKyChuyenNganh.find({ $and: [keywordCondition] }).limit(pageSize).skip(pageSize * page)
        const length = await DangKyChuyenNganh.find({ $and: [keywordCondition] }).count();

        if (dkcn.length == 0) 
            return sendError(res, "Không tìm thấy danh sách đăng ký chuyên ngành.")
        if (dkcn) 
            return sendSuccess(res, "Lấy danh sách đăng ký chuyên ngành thành công.", { 
                TrangThai: "Thành công",
                SoLuong: length,
                DanhSach: dkcn
            })

        return sendError(res, "Không tìm thấy danh sách đăng ký chuyên ngành.")
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route GET /api/admin/dk-chuyen-nganh/ChiTietDKCN/{MaDKCN}
 * @description Lấy thông tin chi tiết đăng ký chuyên ngành
 * @access public
 */
DangKyChuyenNganhAdminRoute.get('/ChiTietDKCN/:MaDKCN', async (req, res) => {
    try {
        const { MaDKCN } = req.params
        const isExist = await DangKyChuyenNganh.findOne({ MaDKCN: MaDKCN }).populate([
            {
                path: "ThongTin",
                select: "Nganh ChuyenNganh",
                populate: [
                    {
                        path: "Nganh",
                        select: "MaNganh TenNganh"
                    },
                    {
                        path: "ChuyenNganh",
                        select: "MaChuyenNganh TenChuyenNganh"
                    }
                ]
            },
        ]).lean();
        if (!isExist)
            return sendError(res, "Đợt đăng ký chuyên ngành không tồn tại"); 

        return sendSuccess(res, "Chi tiết thông tin đăng ký chuyên ngành.", isExist)
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/admin/dk-chuyen-nganh/Them
 * @description Thêm đợt đăng ký chuyên ngành
 * @access public
 */
DangKyChuyenNganhAdminRoute.post('/Them', async (req, res) => {
    try{
        const errors = KtraDuLieuDKCNKhiThem(req.body)
        if (errors)
            return sendError(res, errors)
        const { MaDKCN, Ten, Khoa, ThoiGianBD, ThoiGianKT } = req.body;

        const isExistMa = await DangKyChuyenNganh.findOne({ MaDKCN: MaDKCN }).lean();
        if (isExistMa)
            return sendError(res, "Mã đăng ký chuyên ngành đã tồn tại");
        const date = new Date();
        const now = new Date(DoiDinhDangNgay(date));
        const bd = new Date(ThoiGianBD);
        const kt = new Date(ThoiGianKT);
        if (kt < bd)
            return sendError(res, "Ngày kết thúc phải lớn hơn ngày bắt đầu");
        let trangthai = "";
        if ( now < bd && now < kt)
            trangthai = TrangThaiDangKyChuyenNganh.ChuaToiThoiGianDangKy;
        if ( bd <= now && now <= kt)
            trangthai = TrangThaiDangKyChuyenNganh.TrongThoiGianDangKy;
        if ( now > bd && now > kt)
            trangthai = TrangThaiDangKyChuyenNganh.HetThoiGianDangKy

        const dkcn = await DangKyChuyenNganh.create({ MaDKCN: MaDKCN, Ten: Ten, Khoa: Khoa, ThoiGianBD: ThoiGianBD, ThoiGianKT: ThoiGianKT, TrangThai: trangthai });
        return sendSuccess(res, "Thêm đăng ký chuyên ngành thành công", dkcn);
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/admin/dk-chuyen-nganh/ChinhSua/{MaDKCN}
 * @description Chỉnh sửa đợt đăng ký chuyên ngành
 * @access public
 */
DangKyChuyenNganhAdminRoute.put('/ChinhSua/:MaDKCN', async (req, res) => {
    try{
        const errors = KtraDuLieuDKCNKhiChinhSua(req.body)
        if (errors)
            return sendError(res, errors)
        const { Ten, Khoa, ThoiGianBD, ThoiGianKT } = req.body;
        const { MaDKCN } = req.params;

        const isExistMa = await DangKyChuyenNganh.findOne({ MaDKCN: MaDKCN }).lean();
        if (!isExistMa)
            return sendError(res, "Đợt đăng ký chuyên ngành không tồn tại");
        const date = new Date();
        const now = new Date(DoiDinhDangNgay(date));
        const bd = new Date(ThoiGianBD);
        const kt = new Date(ThoiGianKT);
        if (kt < bd)
            return sendError(res, "Ngày kết thúc phải lớn hơn ngày bắt đầu");
        let trangthai = "";
        if ( now < bd && now < kt)
            trangthai = TrangThaiDangKyChuyenNganh.ChuaToiThoiGianDangKy;
        if ( bd <= now && now <= kt)
            trangthai = TrangThaiDangKyChuyenNganh.TrongThoiGianDangKy;
        if ( now > bd && now > kt)
            trangthai = TrangThaiDangKyChuyenNganh.HetThoiGianDangKy

        await DangKyChuyenNganh.findOneAndUpdate({ MaDKCN: MaDKCN }, { Ten: Ten, Khoa: Khoa, ThoiGianBD: ThoiGianBD, ThoiGianKT: ThoiGianKT, TrangThai: trangthai });
        return sendSuccess(res, "Chỉnh sửa đợt đăng ký chuyên ngành thành công");
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route DELETE /api/admin/dk-chuyen-nganh/Xoa/{MaDKCN}
 * @description Xóa đợt đăng ký chuyên ngành
 * @access private
 */
DangKyChuyenNganhAdminRoute.delete('/Xoa/:MaDKCN', async (req, res) => {
    try {
        const { MaDKCN } = req.params
        const isExist = await DangKyChuyenNganh.findOne({ MaDKCN: MaDKCN })
        if (!isExist) 
            return sendError(res, "Đợt đăng ký chuyên ngành này không tồn tại");
        await DangKyChuyenNganh.findOneAndDelete({ MaDKCN: MaDKCN });
        return sendSuccess(res, "Xóa đợt đăng ký chuyên ngành thành công.")
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/admin/dk-chuyen-nganh/ThemChuyenNganhDangKy/{MaDKCN}
 * @description Thêm chuyên ngành đăng ký cho sinh viên 
 * @access public
 */
DangKyChuyenNganhAdminRoute.post('/ThemChuyenNganhDangKy/:MaDKCN', async (req, res) => {
    try{
        const errors = KtraDuLieuDKCNKhiThemMonChuyenNganh(req.body)
        if (errors)
            return sendError(res, errors)
        const { MaNganh, MaChuyenNganh, ToiDa } = req.body;
        const { MaDKCN } = req.params;
        if ( !ToiDa.match(/^[0-9]/) )
            return sendError(res, "Tối đa phải là ký tự số");

        const isExist = await DangKyChuyenNganh.findOne({ MaDKCN: MaDKCN }).lean();
        if (!isExist)
            return sendError(res, "Đợt đăng ký chuyên ngành không tồn tại");

        const nganh = await Nganh.findOne({ MaNganh: MaNganh });
        const chuyennganh = await ChuyenNganh.findOne({ MaChuyenNganh: MaChuyenNganh });
        let thongtin = {
            Nganh: nganh._id,
            ChuyenNganh: chuyennganh._id,
            ToiDa: Number(ToiDa),
            ConLai: Number(ToiDa),
            DaDangKy: 0,
            SinhVien: [],
        }
        let check = 0;
        if (isExist.ThongTin.length > 0){
            isExist.ThongTin.forEach((element) => {
                if ( element.Nganh.equals(thongtin.Nganh) && element.ChuyenNganh.equals(thongtin.ChuyenNganh) )
                    check = 1;
                if ( check == 1 ){
                    element.ToiDa = element.ToiDa + thongtin.ToiDa;
                    element.ConLai = element.ToiDa - element.DaDangKy;
                    return;
                }
            });
            if ( check == 1 )
                await DangKyChuyenNganh.findOneAndUpdate({ MaDKCN: MaDKCN }, { ThongTin: isExist.ThongTin });
            else{
                isExist.ThongTin.push(thongtin);
                await DangKyChuyenNganh.findOneAndUpdate({ MaDKCN: MaDKCN }, { ThongTin: isExist.ThongTin });
            }
        }
        else{
            isExist.ThongTin.push(thongtin);
            await DangKyChuyenNganh.findOneAndUpdate({ MaDKCN: MaDKCN }, { ThongTin: isExist.ThongTin });
        }

        return sendSuccess(res, "Thêm chuyên ngành đăng ký thành công");
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/admin/dk-chuyen-nganh/XoaChuyenNganhDangKy/{MaDKCN}
 * @description Xóa thông tin chuyên ngành sinh viên đăng ký
 * @access public
 */
DangKyChuyenNganhAdminRoute.post('/XoaChuyenNganhDangKy/:MaDKCN', async (req, res) => {
    try{
        const errors = KtraDuLieuDKCNKhiXoaMonChuyenNganh(req.body)
        if (errors)
            return sendError(res, errors)
        const { MaNganh, MaChuyenNganh } = req.body;
        const { MaDKCN } = req.params;

        const isExist = await DangKyChuyenNganh.findOne({ MaDKCN: MaDKCN }).lean();
        if (!isExist)
            return sendError(res, "Đợt đăng ký chuyên ngành không tồn tại");

        const nganh = await Nganh.findOne({ MaNganh: MaNganh });
        const chuyennganh = await ChuyenNganh.findOne({ MaChuyenNganh: MaChuyenNganh });

        if (isExist.ThongTin.length > 0){
            let i = 0;
            isExist.ThongTin.forEach((element) => {
                if ( element.Nganh.equals(nganh._id) && element.ChuyenNganh.equals(chuyennganh._id) ){
                    isExist.ThongTin.splice(i,1);
                    return;
                }
                i++;
            });
            await DangKyChuyenNganh.findOneAndUpdate({ MaDKCN: MaDKCN }, { ThongTin: isExist.ThongTin });
        }
        else
            return sendError(res, "Thông tin này không tồn tại nên không thể xóa.");

        return sendSuccess(res, "Xóa chuyên ngành đăng ký thành công");
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

export default DangKyChuyenNganhAdminRoute
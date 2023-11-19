import express from "express"
import fs from 'fs'
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import { TrangThaiDangKyThucTap } from "../../constant.js"
import DangKyThucTap from "../../model/DangKyThucTap.js"
import { DoiDinhDangNgay, XuLyNgaySinh } from "../../helper/XuLyDuLieu.js"
import Nganh from "../../model/Nganh.js"
import ChuyenNganh from "../../model/ChuyenNganh.js"
import SinhVien from "../../model/SinhVien.js"
import { KtraDuLieuDKTTKhiChinhSua, KtraDuLieuDKTTKhiThem, KtraKhiThemCongTyTrongDS, KtraKhiThemViTriCongTyTrongDS, KtraKhiXoaCongTyTrongDS, KtraKhiXoaViTriCongTyTrongDS } from "../../validation/DangKyThucTap.js"

const DangKyThucTapAdminRoute = express.Router()

/**
 * @route GET /api/admin/dk-thuc-tap/DanhSachDKTT
 * @description Lấy danh sách đợt đăng ký thực tập
 * @access public
 */
DangKyThucTapAdminRoute.get('/DanhSachDKTT', async (req, res) => {
    try {
        const pageSize = req.query.pageSize ? parseInt(req.query.pageSize) : 0
        const page = req.query.page ? parseInt(req.query.page) : 0
        const { keyword} = req.query
        var keywordCondition = keyword
            ? {
                $or: [
                    { MaDKTT: { $regex: keyword, $options: "i" } },
                    { Ten: { $regex: keyword, $options: "i" } },
                ],
            } : {};
        const dktt = await DangKyThucTap.find({ $and: [keywordCondition] }).limit(pageSize).skip(pageSize * page)
        const length = await DangKyThucTap.find({ $and: [keywordCondition] }).count();

        if (dktt.length == 0) 
            return sendError(res, "Không tìm thấy danh sách đợt đăng ký thực tập.")
        if (dktt) 
            return sendSuccess(res, "Lấy danh sách đợt đăng ký thực tập thành công.", { 
                TrangThai: "Thành công",
                SoLuong: length,
                DanhSach: dktt
            })

        return sendError(res, "Không tìm thấy danh sách đợt đăng ký thực tập.")
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route GET /api/admin/dk-thuc-tap/ChiTietDKTT/{MaDKTT}
 * @description Lấy thông tin chi tiết đăng ký thực tập
 * @access public
 */
DangKyThucTapAdminRoute.get('/ChiTietDKTT/:MaDKTT', async (req, res) => {
    try {
        const { MaDKTT } = req.params
        const isExist = await DangKyThucTap.findOne({ MaDKTT: MaDKTT }).lean();
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
 * @route POST /api/admin/dk-thuc-tap/Them
 * @description Thêm đợt đăng ký thực tập
 * @access public
 */
DangKyThucTapAdminRoute.post('/Them', async (req, res) => {
    try{
        const errors = KtraDuLieuDKTTKhiThem(req.body)
        if (errors)
            return sendError(res, errors)
        const { MaDKTT, Ten, NienKhoa, ThoiGianBD, ThoiGianKT } = req.body;

        const isExistMa = await DangKyThucTap.findOne({ MaDKTT: MaDKTT }).lean();
        if (isExistMa)
            return sendError(res, "Mã đăng ký thực tập đã tồn tại");
        const date = new Date();
        const now = new Date(DoiDinhDangNgay(date));
        const bd = new Date(ThoiGianBD);
        const kt = new Date(ThoiGianKT);
        if (kt < bd)
            return sendError(res, "Ngày kết thúc phải lớn hơn ngày bắt đầu");
        let check = 0;
        const data = await DangKyThucTap.find({});
        if ( data.length > 0 ){
            data.forEach((element) => {
                if ( element.ThoiGianBD <= bd && bd <= element.ThoiGianKT ){
                    check = 1;
                    return;
                }
                else{
                    if (element.ThoiGianBD <= kt && kt <= element.ThoiGianKT){
                        check = 1;
                        return;
                    }
                }
            });
        }
        if ( check == 1 )
            return sendError(res, "Có đợt đăng ký thực tập khác trong khoảng thời gian này. Vui lòng chọn khoảng thời gian khác.");
        let trangthai = "";
        if ( now < bd && now < kt)
            trangthai = TrangThaiDangKyThucTap.ChuaToiThoiGianDangKy;
        if ( bd <= now && now <= kt)
            trangthai = TrangThaiDangKyThucTap.TrongThoiGianDangKy;
        if ( now > bd && now > kt)
            trangthai = TrangThaiDangKyThucTap.HetThoiGianDangKy

        const dktt = await DangKyThucTap.create({ MaDKTT: MaDKTT, Ten: Ten, NienKhoa: NienKhoa, ThoiGianBD: ThoiGianBD, ThoiGianKT: ThoiGianKT, TrangThai: trangthai });
        return sendSuccess(res, "Thêm đợt đăng ký thực tập thành công", dktt);
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route PUT /api/admin/dk-thuc-tap/ChinhSua/{MaDKTT}
 * @description Chỉnh sửa đợt đăng ký chuyên ngành
 * @access public
 */
DangKyThucTapAdminRoute.put('/ChinhSua/:MaDKTT', async (req, res) => {
    try{
        const errors = KtraDuLieuDKTTKhiChinhSua(req.body)
        if (errors)
            return sendError(res, errors)
        const { Ten, NienKhoa, ThoiGianBD, ThoiGianKT } = req.body;
        const { MaDKTT } = req.params;

        const isExistMa = await DangKyThucTap.findOne({ MaDKTT: MaDKTT }).lean();
        if (!isExistMa)
            return sendError(res, "Đợt đăng ký thực tập không tồn tại");
        const date = new Date();
        const now = new Date(DoiDinhDangNgay(date));
        const bd = new Date(ThoiGianBD);
        const kt = new Date(ThoiGianKT);
        if (kt < bd)
            return sendError(res, "Ngày kết thúc phải lớn hơn ngày bắt đầu");
        let check = 0;
        const data = await DangKyThucTap.find({});
        if (data.length > 0){
            data.forEach((element) => {
                if (element.MaDKTT != MaDKTT){
                    if ( element.ThoiGianBD <= bd && bd <= element.ThoiGianKT ){
                        check = 1;
                        return;
                    }
                    else{
                        if (element.ThoiGianBD <= kt && kt <= element.ThoiGianKT){
                            check = 1;
                            return;
                        }
                    }
                }
            });
        }
        
        if ( check == 1 )
            return sendError(res, "Có đợt đăng ký thực tập khác trong khoảng thời gian này. Vui lòng chọn khoảng thời gian khác.");
        let trangthai = "";
        if ( now < bd && now < kt)
            trangthai = TrangThaiDangKyThucTap.ChuaToiThoiGianDangKy;
        if ( bd <= now && now <= kt)
            trangthai = TrangThaiDangKyThucTap.TrongThoiGianDangKy;
        if ( now > bd && now > kt)
            trangthai = TrangThaiDangKyThucTap.HetThoiGianDangKy

        await DangKyThucTap.findOneAndUpdate({ MaDKTT: MaDKTT }, { Ten: Ten, NienKhoa: NienKhoa, ThoiGianBD: ThoiGianBD, ThoiGianKT: ThoiGianKT, TrangThai: trangthai });
        return sendSuccess(res, "Chỉnh sửa đợt đăng ký thực tập thành công");
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route DELETE /api/admin/dk-thuc-tap/Xoa/{MaDKTT}
 * @description Xóa đợt đăng ký thực tập
 * @access private
 */
DangKyThucTapAdminRoute.delete('/Xoa/:MaDKTT', async (req, res) => {
    try {
        const { MaDKTT } = req.params
        const isExist = await DangKyThucTap.findOne({ MaDKTT: MaDKTT })
        if (!isExist) 
            return sendError(res, "Đợt đăng ký thực tập này không tồn tại");
        await DangKyThucTap.findOneAndDelete({ MaDKTT: MaDKTT });
        return sendSuccess(res, "Xóa đợt đăng ký thực tập thành công.")
    } catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/admin/dk-thuc-tap/ThemCongTyTrongDanhSach/{MaDKTT}
 * @description Thêm công ty trong danh sách
 * @access public
 */
DangKyThucTapAdminRoute.post('/ThemCongTyTrongDanhSach/:MaDKTT', async (req, res) => {
    try{
        const errors = KtraKhiThemCongTyTrongDS(req.body)
        if (errors)
            return sendError(res, errors)
        const { TenCongTy, Website, SoDienThoai, Email, DiaChi } = req.body;
        const { MaDKTT } = req.params;

        const isExist = await DangKyThucTap.findOne({ MaDKTT: MaDKTT }).lean();
        if (!isExist)
            return sendError(res, "Đợt đăng ký thực tập không tồn tại");

        let thongtin = {
            TenCongTy: TenCongTy,
            Website: Website,
            SoDienThoai: SoDienThoai,
            Email: Email,
            DiaChi: DiaChi,
            DangKy: [],
        }
        let check = 0;
        if (isExist.CongTyTrongDS.length > 0){
            isExist.CongTyTrongDS.forEach((element) => {
                if ( element.SoDienThoai.includes(SoDienThoai) )
                    check = 1;
            });
            if ( check == 1 )
                return sendError(res, "Công ty này đã tồn tại trong danh sách");
            else{
                isExist.CongTyTrongDS.push(thongtin);
                await DangKyThucTap.findOneAndUpdate({ MaDKTT: MaDKTT }, { CongTyTrongDS: isExist.CongTyTrongDS });
            }
        }
        else{
            isExist.CongTyTrongDS.push(thongtin);
            await DangKyThucTap.findOneAndUpdate({ MaDKTT: MaDKTT }, { CongTyTrongDS: isExist.CongTyTrongDS });
        }

        return sendSuccess(res, "Thêm công ty trong danh sách thành công");
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/admin/dk-thuc-tap/XoaCongTyTrongDanhSach/{MaDKTT}
 * @description Xóa công ty trong danh sách đăng ký thực tập
 * @access public
 */
DangKyThucTapAdminRoute.post('/XoaCongTyTrongDanhSach/:MaDKTT', async (req, res) => {
    try{
        const errors = KtraKhiXoaCongTyTrongDS(req.body)
        if (errors)
            return sendError(res, errors)
        const { SoDienThoai } = req.body;
        const { MaDKTT } = req.params;

        const isExist = await DangKyThucTap.findOne({ MaDKTT: MaDKTT }).lean();
        if (!isExist)
            return sendError(res, "Đợt đăng ký thực tập không tồn tại");

        if (isExist.CongTyTrongDS.length > 0){
            let i = 0;
            isExist.CongTyTrongDS.forEach((element) => {
                if ( element.SoDienThoai.includes(SoDienThoai) ){
                    isExist.CongTyTrongDS.splice(i,1);
                    return;
                }
                i++;
            });
            await DangKyThucTap.findOneAndUpdate({ MaDKTT: MaDKTT }, { CongTyTrongDS: isExist.CongTyTrongDS });
        }
        else
            return sendError(res, "Thông tin này không tồn tại nên không thể xóa.");

        return sendSuccess(res, "Xóa công ty trong danh sách thành công");
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/admin/dk-thuc-tap/DanhSachCongTy/{MaDKTT}
 * @description Lấy danh sách công ty đợt đăng ký thực tập
 * @access public
 */
DangKyThucTapAdminRoute.post('/DanhSachCongTy/:MaDKTT', async (req, res) => {
    try {
        const { MaDKTT } = req.params;
        const { Loai } = req.body;
        const dktt = await DangKyThucTap.findOne({ MaDKTT: MaDKTT });
        if (!dktt)
            return sendError(res, "Đợt đăng ký thực tập không tồn tại");

        let thongtin = [];
        if (Loai == "Trong danh sách"){
            dktt.CongTyTrongDS.forEach((element) => {
                let cty = {
                    Ten: element.TenCongTy,
                    Web: element.Website,
                    DienThoai: element.SoDienThoai,
                    Email: element.Email,
                    DiaChi: element.DiaChi,
                }
                thongtin.push(cty);
            });
        }
        if (Loai == "Ngoài danh sách"){
            dktt.CongTyNgoaiDS.forEach((element) => {
                let cty = {
                    Ten: element.TenCongTy,
                    Web: element.Website,
                    DienThoai: element.SoDienThoai,
                    Email: element.Email,
                    DiaChi: element.DiaChi,
                }
                thongtin.push(cty);
            });
        }
        return sendSuccess(res, "Lấy danh sách công ty thành công", thongtin);
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/admin/dk-thuc-tap/DanhSachSinhVien/{MaDKTT}
 * @description Lấy danh sách sinh viên đợt đăng ký thực tập
 * @access public
 */
DangKyThucTapAdminRoute.post('/DanhSachSinhVien/:MaDKTT', async (req, res) => {
    try {
        const { MaDKTT } = req.params;
        const { Loai } = req.body;
        const dktt = await DangKyThucTap.findOne({ MaDKTT: MaDKTT }).populate([
            {
                path: "CongTyTrongDS",
                select: "DangKy",
                populate: [
                    {
                        path: "DangKy",
                        select: "SinhVien",
                        populate: [
                            {
                                path: "SinhVien",
                                select: "MaSV HoSV TenSV Lop"
                            }
                        ]
                    }
                ]
            },
            {
                path: "CongTyNgoaiDS",
                select: "SinhVien",
                populate: [
                    {
                        path: "SinhVien",
                        select: "MaSV HoSV TenSV Lop",
                    }
                ]
            }
        ]).lean();
        if (!dktt)
            return sendError(res, "Đợt đăng ký thực tập không tồn tại");

        let thongtin = [];
        if (Loai == "Trong danh sách"){
            dktt.CongTyTrongDS.forEach((element) => {
                element.DangKy.forEach((data) => {
                    data.SinhVien.forEach((sinhvien) => {
                        let sv = {
                            MaSV: sinhvien.SinhVien.MaSV,
                            Ho: sinhvien.SinhVien.HoSV,
                            Ten: sinhvien.SinhVien.TenSV,
                            Lop: sinhvien.SinhVien.Lop,
                            Cty: element.TenCongTy,
                            Web: element.Website,
                            DienThoai: element.SoDienThoai,
                            Email: element.Email,
                            DiaChi: element.DiaChi
                        }
                        thongtin.push(sv);
                    });
                });
            });
        }
        if (Loai == "Ngoài danh sách"){
            dktt.CongTyNgoaiDS.forEach((element) => {
                let sv = {
                    MaSV: element.SinhVien.MaSV,
                    Ho: element.SinhVien.HoSV,
                    Ten: element.SinhVien.TenSV,
                    Lop: element.SinhVien.Lop,
                    Cty: element.TenCongTy,
                    Web: element.Website,
                    DienThoai: element.SoDienThoai,
                    Email: element.Email,
                    DiaChi: element.DiaChi
                }
                thongtin.push(sv);
            });
        }
        return sendSuccess(res, "Lấy danh sách sinh viên thành công", thongtin);
    }
    catch (error) {
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/admin/dk-thuc-tap/TuDongCapNhatTrangThaiDKTT
 * @description Tự động cập nhập trạng thái của các đợt đăng ký thực tập
 * @access public
 */
DangKyThucTapAdminRoute.post('/TuDongCapNhatTrangThaiDKTT', async (req, res) => {
    try{

        const dktt = await DangKyThucTap.find({ TrangThai: { $in: [TrangThaiDangKyThucTap.ChuaToiThoiGianDangKy, TrangThaiDangKyThucTap.TrongThoiGianDangKy]} }).lean();
        const date = new Date();
        const now = new Date(DoiDinhDangNgay(date));
        if (dktt.length > 0){
            let trangthai = "";
            for(let i = 0; i< dktt.length; i++){
                trangthai = "";
                if ( now < dktt[i].ThoiGianBD && now < dktt[i].ThoiGianKT)
                    trangthai = TrangThaiDangKyChuyenNganh.ChuaToiThoiGianDangKy;
                if ( dktt[i].ThoiGianBD <= now && now <= dktt[i].ThoiGianKT)
                    trangthai = TrangThaiDangKyChuyenNganh.TrongThoiGianDangKy;
                if ( now > dktt[i].ThoiGianBD && now > dktt[i].ThoiGianKT)
                    trangthai = TrangThaiDangKyChuyenNganh.HetThoiGianDangKy
                await DangKyThucTap.findOneAndUpdate({ MaDKTT: dktt[i].MaDKTT }, { TrangThai: trangthai });
            }
        }
        return sendSuccess(res, "Tự động cập nhập trạng thái thành công");
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

// /**
//  * @route POST /api/admin/dk-chuyen-nganh/ThonKeSVDangKyChuyenNganh
//  * @description Thống kê số lượng sinh viên đã đăng ký chuyên ngành
//  * @access public
//  */
// DangKyChuyenNganhAdminRoute.post('/ThonKeSVDangKyChuyenNganh', async (req, res) => {
//     try {
//         const { MaNganh, MaChuyenNganh, MaDKCN } = req.body;
//         if ( MaNganh == '' || MaChuyenNganh == '' || MaDKCN == '')
//             return sendError(res, "Vui lòng điền đẩy đủ thông tin.");

//         const nganh = await Nganh.findOne({ MaNganh: MaNganh });
//         if (!nganh)
//             return sendError(res, "Ngành này không tồn tại.");
//         const dkcn = await DangKyChuyenNganh.findOne({ MaDKCN: MaDKCN });
//         if (!dkcn)
//             return sendError(res, "Đợt đăng ký chuyên ngành này không tồn tại.");

//         let array = [];
//         const khoa = dkcn.Khoa;
//         if (MaChuyenNganh == "Tất cả"){
//             const sinhvien = await SinhVien.find({ Khoa: khoa, Nganh: nganh.TenNganh });
//             sinhvien.forEach((element) => {
//                 let cn = '';
//                 if (element.ChuyenNganh == null)
//                     cn = "Chưa đăng ký";
//                 else
//                     cn = element.ChuyenNganh;
//                 let sv = {
//                     MaSV: element.MaSV,
//                     HoSV: element.HoSV,
//                     TenSV: element.TenSV,
//                     Diem: element.DTBTLHK,
//                     ChuyenNganh: cn
//                 }
//                 array.push(sv);
//             });
//         }
//         else{
//             const chuyennganh = await ChuyenNganh.findOne({ MaChuyenNganh: MaChuyenNganh });
//             if (!chuyennganh)
//                 return sendError(res, "Chuyên ngành này không tồn tại.");
//             const sinhvien = await SinhVien.find({ Khoa: khoa, Nganh: nganh.TenNganh, ChuyenNganh: chuyennganh.TenChuyenNganh });
//             sinhvien.forEach((element) => {
//                 let sv = {
//                     MaSV: element.MaSV,
//                     HoSV: element.HoSV,
//                     TenSV: element.TenSV,
//                     Diem: element.DTBTLHK,
//                     ChuyenNganh: element.ChuyenNganh
//                 }
//                 array.push(sv);
//             });
//         }
        
//         return sendSuccess(res, "Lấy danh sách sinh viên thành công.", array);
//     }
//     catch (error) {
//         console.log(error)
//         return sendServerError(res)
//     }
// })

/**
 * @route POST /api/admin/dk-thuc-tap/ThemViTriCongTyTrongDanhSach/{MaDKTT}
 * @description Thêm vị trí thực tập công ty trong danh sách
 * @access public
 */
DangKyThucTapAdminRoute.post('/ThemViTriCongTyTrongDanhSach/:MaDKTT', async (req, res) => {
    try{
        const errors = KtraKhiThemViTriCongTyTrongDS(req.body)
        if (errors)
            return sendError(res, errors)
        const { ViTri, ToiDa, SoDienThoaiCty } = req.body;
        const { MaDKTT } = req.params;
        if ( !ToiDa.match(/^[0-9]/) )
            return sendError(res, "Tối đa phải là ký tự số");

        const isExist = await DangKyThucTap.findOne({ MaDKTT: MaDKTT }).lean();
        if (!isExist)
            return sendError(res, "Đợt đăng ký thực tập không tồn tại");

        let thongtin = {
            ViTri: ViTri,
            ToiDa: Number(ToiDa),
            DaDangKy: 0,
            ConLai: 0,
            SinhVien: [],
        }
        let check = 0;
        if (isExist.CongTyTrongDS.length > 0){
            isExist.CongTyTrongDS.forEach((element) => {
                if ( element.SoDienThoai.includes(SoDienThoaiCty) ){
                    check = 1;
                    element.DangKy.push(thongtin);
                    return;
                }
                    
            });
            if ( check == 1 )
                await DangKyThucTap.findOneAndUpdate({ MaDKTT: MaDKTT }, { CongTyTrongDS: isExist.CongTyTrongDS });
            else
                return sendError(res, "Không có công ty để thêm vị trí thực tập");
            
        }
        else
            return sendError(res, "Không có công ty để thêm vị trí thực tập")

        return sendSuccess(res, "Thêm vị trí thực tập công ty trong danh sách thành công");
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

/**
 * @route POST /api/admin/dk-thuc-tap/XoaViTriCongTyTrongDanhSach/{MaDKTT}
 * @description Xóa vị trí thực tập công ty trong danh sách
 * @access public
 */
DangKyThucTapAdminRoute.post('/XoaViTriCongTyTrongDanhSach/:MaDKTT', async (req, res) => {
    try{
        const errors = KtraKhiXoaViTriCongTyTrongDS(req.body)
        if (errors)
            return sendError(res, errors)
            const { ViTri, SoDienThoaiCty } = req.body;
        const { MaDKTT } = req.params;

        const isExist = await DangKyThucTap.findOne({ MaDKTT: MaDKTT }).lean();
        if (!isExist)
            return sendError(res, "Đợt đăng ký thực tập không tồn tại");

        let check = 0;
        if (isExist.CongTyTrongDS.length > 0){
            let i = 0;
            isExist.CongTyTrongDS.forEach((element) => {
                if ( element.SoDienThoai.includes(SoDienThoaiCty) ){
                    let k = 0;
                    element.DangKy.forEach((data) => {
                        if ( data.ViTri.includes(ViTri) ){
                            check = 1;
                            element.DangKy.splice(k,1);
                            return;
                        }
                        k++;
                    });
                    if (check == 1)
                        return;
                }
                i++;
            });
            await DangKyThucTap.findOneAndUpdate({ MaDKTT: MaDKTT }, { CongTyTrongDS: isExist.CongTyTrongDS });
        }
        else
            return sendError(res, "Thông tin này không tồn tại nên không thể xóa.");

        return sendSuccess(res, "Xóa vị trí thực tập công ty trong danh sách thành công");
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

export default DangKyThucTapAdminRoute
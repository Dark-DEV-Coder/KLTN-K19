import mongoose from "mongoose";
import { TrangThaiSinhVien, TrangThaiSinhVienTotNghiep } from "../constant.js";
const { Schema } = mongoose;

const SinhVienSchema = new Schema(
    {
        MaSV: {
            type: String,
            required: true,
        },
        MaTK: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'taikhoans',
            default: null,
        },
        HoSV: {
            type: String,
            required: true,
        },
        TenSV: {
            type: String,
            required: true,
        },
        Email: {
            type: String,
            required: true,
        },
        SoDienThoai: {
            type: String,
            required: true,
        },
        GioiTinh: {
            type: String,
            required: true,
        },
        NgaySinh: {
            type: Date,
            required: true,
        },
        Khoa: { // khóa (ví dụ: khóa 19, khóa 20)
            type: String,
            required: true,
        },
        ChuyenNganh: {
            type: String,
        },
        Nganh: {
            type: String,
            required: true,
        },
        Lop: {
            type: String,
            required: true,
        },
        Hinh: {
            type: String,
        },
        TrangThaiTotNghiep: {
            type: String,
            enum: Object.values(TrangThaiSinhVienTotNghiep),
            default: TrangThaiSinhVienTotNghiep.ChuaTotNghiep,
        },
        TrangThai: {
            type: String,
            enum: Object.values(TrangThaiSinhVien),
            default: TrangThaiSinhVien.ChuaCoTaiKhoan,
        },
    },
    { timestamps: true }
)

export default mongoose.model("sinhviens", SinhVienSchema);

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
        },
        SoDienThoai: {
            type: String,
        },
        GioiTinh: {
            type: String,
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
        DTBTLHK: {
            type: Number,
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

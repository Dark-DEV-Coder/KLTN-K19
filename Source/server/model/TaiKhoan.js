import mongoose from "mongoose";
import { TrangThaiTaiKhoan } from "../constant.js";
const { Schema } = mongoose;

const TaiKhoanSchema = new Schema(
    {
        MaTK: {
            type: String,
            required: true,
        },
        MaQTK: {
            type: String,
            required: true,
        },
        TenDangNhap: {
            type: String,
            required: true,
        },
        MatKhau: {
            type: String,
            required: true,
        },
        TrangThai: {
            type: String,
            enum: Object.values(TrangThaiTaiKhoan),
            default: TrangThaiTaiKhoan.DaKichHoat,
        },
    },
    { timestamps: true }
)

export default mongoose.model("TaiKhoans", TaiKhoanSchema);

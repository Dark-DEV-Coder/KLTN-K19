import mongoose from "mongoose";
import { TrangThaiTonTai } from "../constant.js";
const { Schema } = mongoose;

const ChucNangSchema = new Schema(
    {
        MaCN: {
            type: String,
            required: true,
        },
        TenChucNang: {
            type: String,
            required: true,
        },
        Hinh: {
            type: String,
            required: true,
        },
        TrangThai: {
            type: String,
            enum: Object.values(TrangThaiTonTai),
            default: TrangThaiTonTai.ChuaXoa,
            required: true,
        },
    },
    { timestamps: true }
)

export default mongoose.model("ChucNang", ChucNangSchema);

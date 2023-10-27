import mongoose from "mongoose";
import { TrangThaiTonTai } from "../constant.js";
const { Schema } = mongoose;

const ChiTietQuyenSchema = new Schema(
    {
        MaQTK: {
            type: String,
            required: true,
        },
        TenQuyenTK: {
            type: String,
            required: true,
        },
        ChucNang: [
            {
                MaCN: {
                    type: String,
                    required: true,
                },
                ChucNangCon: [String],
            }
        ],
        TrangThai: {
            type: String,
            enum: Object.values(TrangThaiTonTai),
            default: TrangThaiTonTai.ChuaXoa,
            required: true,
        },
    },
    { timestamps: true }
)

export default mongoose.model("QuyenTaiKhoans", ChiTietQuyenSchema);

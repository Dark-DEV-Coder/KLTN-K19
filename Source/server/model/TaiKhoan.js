import mongoose from "mongoose";
const { Schema } = mongoose;

const TaiKhoanSchema = new Schema(
    {
        MaTK: {
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
            required: true,
        },
    },
    { timestamps: true }
)

export default mongoose.model("TaiKhoan", TaiKhoanSchema);

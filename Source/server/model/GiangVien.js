import mongoose from "mongoose";
const { Schema } = mongoose;

const GiangVienSchema = new Schema(
    {
        MaGV: {
            type: String,
            required: true,
        },
        MaTK: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'taikhoans',
        },
        HoGV: {
            type: String,
            required: true,
        },
        TenGV: {
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
        DonViCongTac: {
            type: String,
            required: true,
        },
        ChuyenNganh: {
            type: String,
        },
        TrinhDo: {
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

export default mongoose.model("giangviens", GiangVienSchema);

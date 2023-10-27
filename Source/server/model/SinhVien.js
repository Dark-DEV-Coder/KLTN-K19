import mongoose from "mongoose";
const { Schema } = mongoose;

const SinhVienSchema = new Schema(
    {
        MaSV: {
            type: String,
            required: true,
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
        TrangThaiTotNghiep: {
            type: String,
        },
        TrangThai: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

export default mongoose.model("sinhviens", SinhVienSchema);

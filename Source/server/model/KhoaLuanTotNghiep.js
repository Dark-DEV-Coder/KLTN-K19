import mongoose from "mongoose";
const { Schema } = mongoose;

const KhoaLuanTotNghiepSchema = new Schema(
    {
        MaKLTN: {
            type: String,
            required: true,
        },
        Ten: {
            type: String,
            required: true,
        },
        NienKhoa: {
            type: String,
            required: true,
        },
        Khoa: { // khóa (ví dụ: khóa 19, khóa 20)
            type: String,
            required: true,
        },
        ThoiGianBD: {
            type: Date,
            required: true,
        },
        ThoiGianKT: {
            type: Date,
            required: true,
        },
        DSDeTai: [
            {
                BoMon: {
                    type: String,
                    required: true,
                },
                TenDeTai: {
                    type: String,
                    required: true,
                },
                GVHD: {
                    type: String,
                    required: true,
                },
                SVChinhThuc: [String],
                SVDuKien: [String],
                TrangThaiDeTai: {
                    type: String,
                    required: true,
                },
            }
        ],
        TrangThai: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

export default mongoose.model("khoaluantotnghieps", KhoaLuanTotNghiepSchema);

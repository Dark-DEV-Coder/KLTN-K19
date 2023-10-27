import mongoose from "mongoose";
const { Schema } = mongoose;

const TotNghiepSchema = new Schema(
    {
        MaTN: {
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
        ThongTin: [
            {
                LoaiTotNghiep: {
                    type: String,
                    required: true,
                },
                SinhVien: [String],
            }
        ],
        TrangThai: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

export default mongoose.model("totnghieps", TotNghiepSchema);

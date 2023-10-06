import mongoose from "mongoose";
const { Schema } = mongoose;

const CanhBaoHocTapSchema = new Schema(
    {
        MaCBHT: {
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
                KieuCanhBao: {
                    type: String,
                    required: true,
                },
                HocKy: {
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

export default mongoose.model("CanhBaoHocTap", CanhBaoHocTapSchema);

import mongoose from "mongoose";
const { Schema } = mongoose;

const DangKyChuyenNganhSchema = new Schema(
    {
        MaDKCN: {
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
        ThongTin: [
            {
                Nganh: {
                    type: String,
                    required: true,
                },
                ChuyenNganh: {
                    type: String,
                    required: true,
                },
                ToiDa: {
                    type: Number,
                    required: true,
                },
                DaDangKy: {
                    type: Number,
                    required: true,
                },
                ConLai: {
                    type: Number,
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

export default mongoose.model("dangkychuyennganhs", DangKyChuyenNganhSchema);

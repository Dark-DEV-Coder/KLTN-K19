import mongoose from "mongoose";
const { Schema } = mongoose;

const DangKyThucTapSchema = new Schema(
    {
        MaDKTT: {
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
        CongTy: [
            {
                TenCongTy: {
                    type: String,
                    required: true,
                },
                Website: {
                    type: String,
                    required: true,
                },
                SoDienThoai: {
                    type: String,
                    required: true,
                },
                Email: {
                    type: String,
                    required: true,
                },
                DiaChi: {
                    type: String,
                    required: true,
                },
                DangKy: [
                    {
                        ViTri: {
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
            }
        ],
        TrangThai: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

export default mongoose.model("dangkythuctaps", DangKyThucTapSchema);

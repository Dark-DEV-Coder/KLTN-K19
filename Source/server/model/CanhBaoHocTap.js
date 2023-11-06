import mongoose from "mongoose";
import { TrangThaiTonTai } from "../constant.js";
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
        Dot: {
            type: String,
            required: true,
        },
        NienKhoa: {
            type: String,
            required: true,
        },
        ThongTin: [
            {
                Nganh: {
                    type: String,
                    required: true,
                },
                KhoaHoc: {
                    type: String,
                    required: true,
                },
                Lop: {
                    type: String,
                    required: true,
                },
                SinhVien: [
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
                        NgaySinh: {
                            type: String,
                            required: true,
                        },
                        NamThu: {
                            type: Number,
                            required: true,
                        },
                        HocKyThu: {
                            type: Number,
                            required: true,
                        },
                        SoLanCBLienTiep: {
                            type: Number,
                            required: true,
                        },
                        TongSoLanCB: {
                            type: Number,
                            required: true,
                        },
                        DTBCHK: {
                            type: Number,
                            required: true,
                        },
                        DTBCTL: {
                            type: Number,
                            required: true,
                        },
                        KQ: {
                            type: String,
                            required: true,
                        },
                        GhiChu: {
                            type: String,
                            required: true,
                        },
                    }
                ],
            }
        ],
        TrangThai: {
            type: String,
            enum: Object.values(TrangThaiTonTai),
            default: TrangThaiTonTai.ChuaXoa,
        },
    },
    { timestamps: true }
)

export default mongoose.model("canhbaohoctaps", CanhBaoHocTapSchema);

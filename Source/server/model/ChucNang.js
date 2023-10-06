import mongoose from "mongoose";
const { Schema } = mongoose;

const ChucNangSchema = new Schema(
    {
        MaCN: {
            type: String,
            required: true,
        },
        TenChucNang: {
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

export default mongoose.model("ChucNang", ChucNangSchema);

import mongoose from "mongoose";
const { Schema } = mongoose;

const ChiTietQuyenSchema = new Schema(
    {
        MaCN: {
            type: String,
            required: true,
        },
        MaTK: {
            type: String,
            required: true,
        },
        ChucNangCon: [String],
    },
    { timestamps: true }
)

export default mongoose.model("ChiTietQuyen", ChiTietQuyenSchema);

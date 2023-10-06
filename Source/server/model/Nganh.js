import mongoose from "mongoose";
const { Schema } = mongoose;

const NganhSchema = new Schema(
    {
        MaNganh: {
            type: String,
            required: true,
        },
        TenNganh: {
            type: String,
            required: true,
        },
        ChuyenNganh: [String],
        TrangThai: {
            type: String,
            required: true,
        },
    },
    { timestamps: true }
)

export default mongoose.model("Nganh", NganhSchema);

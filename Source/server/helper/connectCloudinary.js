import { v2 as cloudinary } from 'cloudinary'
import dotenv from "dotenv"
dotenv.config()

cloudinary.config({
    cloud_name: process.env.CLOUD_NAME,
    api_key: process.env.API_KEY,
    api_secret: process.env.API_SECRET,
})

export const UploadHinhLenCloudinary = async (filePath, folder, name) => {
    try {
        const result = await cloudinary.uploader.upload(filePath, {
            public_id: name,
            folder: folder
        })
        return result ? result.secure_url : null
    } catch (error) {
        console.error('Upload error:', error);
        throw error;
    }
};

export const DeleteHinhTrenCloudinary = async (file) => {
    const result = await cloudinary.uploader.destroy(file)
    console.log("result:", result)
    return result ? result : null
}
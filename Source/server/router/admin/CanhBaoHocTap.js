import express from "express"
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import { TrangThaiTonTai } from "../../constant.js"
import { createCanhBaoHocTapDir } from "../../middleware/createDir.js"
import { uploadFile } from "../../middleware/storage.js"
import { KtraDuLieuCBHTKhiThem } from "../../validation/CanhBaoHocTap.js"
import ExcelJS from 'exceljs'
import path from "path"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CanhBaoHocTapAdminRoute = express.Router()

/**
 * @route POST /api/admin/canh-bao-hoc-tap/Them
 * @description Thêm đợt cảnh báo học tập
 * @access public
 */
CanhBaoHocTapAdminRoute.post('/Them', createCanhBaoHocTapDir, uploadFile.single("FileExcel"), async (req, res) => {
    try{
        const errors = KtraDuLieuCBHTKhiThem(req.body)
        if (errors)
            return sendError(res, errors)
        let fileName = path.join(__dirname, `../../public/CanhBaoHocTap/${req.file.filename}`);
        const workbook = new ExcelJS.Workbook();
        workbook.xlsx.readFile(fileName)
        .then(() => {
            // Lấy trang tính đầu tiên
            const worksheet = workbook.getWorksheet(1);
            console.log(worksheet.getRow(1).getCell("A").value.richText[0].text)

            // // Lặp qua các dòng và cột để trích xuất dữ liệu
            // worksheet.eachRow((row, rowNumber) => {
                
            // });
        })
        .catch(err => {
            console.error(err);
        });

        // const { MaCN, TenChucNang } = req.body;
        // const isExist = await ChucNang.findOne({ MaCN: MaCN }).lean();
        // if (isExist)
        //     return sendError(res, "Mã chức năng đã tồn tại");
        // let fileImage = await `${req.file.destination}${req.file.filename}`;
        // let nameImage = await req.file.filename + TenChucNang.normalize('NFD')
        //                                                     .replace(/[\u0300-\u036f]/g, '')
        //                                                     .replace(/đ/g, 'd').replace(/Đ/g, 'D')
        //                                                     .replace(/ /g, '');
        // let resultImage = await UploadHinhLenCloudinary(fileImage, "ChucNang", nameImage);
        // if (resultImage) {
        //     fs.unlinkSync(fileImage, (err) => {
        //         console.log(err);
        //     })
        // }
        // const chucnang = await ChucNang.create({ MaCN: MaCN, TenChucNang: TenChucNang, Hinh: resultImage });

        return sendSuccess(res, "Thêm đợt cảnh báo học tập thành công");
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})

export default CanhBaoHocTapAdminRoute
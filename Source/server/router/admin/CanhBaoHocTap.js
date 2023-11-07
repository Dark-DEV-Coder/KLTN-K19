import express from "express"
import fs from "fs"
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import { TrangThaiTonTai } from "../../constant.js"
import { createCanhBaoHocTapDir } from "../../middleware/createDir.js"
import { uploadFile } from "../../middleware/storage.js"
import { KtraDuLieuCBHTKhiThem } from "../../validation/CanhBaoHocTap.js"
import ExcelJS from 'exceljs'
import path from "path"
import Pdfparser from "pdf2json"
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import CanhBaoHocTap from "../../model/CanhBaoHocTap.js"
import { XuLyNgaySinh } from "../../helper/XuLyDuLieu.js"

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const CanhBaoHocTapAdminRoute = express.Router()

/**
 * @route POST /api/admin/canh-bao-hoc-tap/importExcel
 * @description Thêm đợt cảnh báo học tập
 * @access public
 */
CanhBaoHocTapAdminRoute.post('/importExcel', createCanhBaoHocTapDir, uploadFile.single("FileExcel"), async (req, res) => {
    try{
        const errors = KtraDuLieuCBHTKhiThem(req.body)
        if (errors)
            return sendError(res, errors)
        const { MaCBHT, Ten, Dot, NienKhoa } = req.body;
        let thongtin = [];
        let fileName = path.join(__dirname, `../../public/CanhBaoHocTap/${req.file.filename}`);
        // const workbook = new ExcelJS.Workbook();
        // await workbook.xlsx.readFile(fileName)
        //         .then(() => {
        //             const sheetCount = workbook.worksheets.length;
        //             let NganhHoc = "";
        //             let KhoaHoc = "";
        //             let LopHoc = "";
        //             for (let i = 2; i <= sheetCount; i++){
        //                 const worksheet = workbook.getWorksheet(i);
        //                 worksheet.eachRow((row, rowNumber) => {
        //                     if ( row.getCell("A").value.richText ){
        //                         if ( row.getCell("A").value.richText[0].text.includes("Ngành:") ){
        //                             NganhHoc = row.getCell("A").value.richText[0].text.split('(')[1].split(')')[0];
        //                         }
        //                         if ( row.getCell("A").value.richText[0].text.includes("Khóa học:") ){
        //                             KhoaHoc = row.getCell("A").value.richText[0].text.split(': ')[1];
        //                         }
        //                         if ( row.getCell("A").value.richText[0].text.includes("Lớp:") ){
        //                             LopHoc = row.getCell("A").value.richText[0].text.split('(')[1].split(')')[0];
        //                         }
        //                     }
        //                     else{
        //                         let slcblt = '';
        //                         let ghichu = '';
        //                         if ( row.getCell("H").value != null )
        //                             slcblt = row.getCell("H").value;
        //                         if ( row.getCell("M").value != null )
        //                             ghichu = row.getCell("M").value.richText[0].text;
        //                         let ngaysinh = XuLyNgaySinh(row.getCell("E").value);
        //                         let sv = {
        //                             MaSV: row.getCell("B").value,
        //                             HoSV: row.getCell("C").value.richText[0].text,
        //                             TenSV: row.getCell("D").value.richText[0].text,
        //                             NgaySinh: ngaysinh,
        //                             NamThu: row.getCell("F").value,
        //                             HocKyThu: row.getCell("G").value,
        //                             SoLanCBLienTiep: slcblt,
        //                             TongSoLanCB: row.getCell("I").value,
        //                             DTBCHK: row.getCell("J").value,
        //                             DTBCTL: row.getCell("K").value,
        //                             KQ: row.getCell("L").value.richText[0].text,
        //                             GhiChu: ghichu,
        //                             Lop: LopHoc,
        //                             Nganh: NganhHoc,
        //                             Khoa: KhoaHoc,
        //                         }
        //                         thongtin.push(sv);
        //                     }
        //                 });
        //             }
        //         })
        //         .catch(err => {
        //             console.error(err);
        //         });
        // fs.unlinkSync(fileName, (err) => {
        //     console.log(err)
        // })

        const pdfParser = new Pdfparser();
        // Đọc tệp PDF
        pdfParser.loadPDF(fileName);
        let SinhVien = [];
        await pdfParser.on('pdfParser_dataError', errData => {
            console.error(errData.parserError);
        });

        await pdfParser.on('pdfParser_dataReady', pdfData => {
            // Dữ liệu PDF đã sẵn sàng
            let lengthPage = pdfData.Pages.length;
            let NganhHoc = '';
            for (let i = 0 ; i < lengthPage; i++){
                let lengthTexts = pdfData.Pages[i].Texts.length;
                for (let j = 0; j < lengthTexts; j++){
                    if (decodeURIComponent(pdfData.Pages[i].Texts[j].R[0].T).includes("Ngành học:")){
                        NganhHoc = decodeURIComponent(pdfData.Pages[i].Texts[j].R[0].T);
                    }
                    else{
                        if (decodeURIComponent(pdfData.Pages[i].Texts[j].R[0].T).match(/^[0-9]/) && decodeURIComponent(pdfData.Pages[i].Texts[j+1].R[0].T).match(/^[0-9]/)){
                            let sv = {
                                MaSV: decodeURIComponent(pdfData.Pages[i].Texts[j+1].R[0].T),
                                HoSV: decodeURIComponent(pdfData.Pages[i].Texts[j+2].R[0].T),
                                TenSV: decodeURIComponent(pdfData.Pages[i].Texts[j+3].R[0].T),
                                NgaySinh: decodeURIComponent(pdfData.Pages[i].Texts[j+4].R[0].T),
                                GioiTinh: decodeURIComponent(pdfData.Pages[i].Texts[j+5].R[0].T),
                                MaLop: decodeURIComponent(pdfData.Pages[i].Texts[j+6].R[0].T),
                                DTBTL: decodeURIComponent(pdfData.Pages[i].Texts[j+7].R[0].T),
                                TinChi: decodeURIComponent(pdfData.Pages[i].Texts[j+8].R[0].T),
                                XepLoai: decodeURIComponent(pdfData.Pages[i].Texts[j+9].R[0].T),
                                Nganh: NganhHoc,
                            }
                            SinhVien.push(sv);
                            j = j+9;
                        }
                    }
                }
            }
        });
        
        // await CanhBaoHocTap.create({ MaCBHT: MaCBHT, Ten: Ten, Dot: Dot, NienKhoa: NienKhoa, ThongTin: thongtin });

        return sendSuccess(res, "Thêm đợt cảnh báo học tập thành công");
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})


export default CanhBaoHocTapAdminRoute
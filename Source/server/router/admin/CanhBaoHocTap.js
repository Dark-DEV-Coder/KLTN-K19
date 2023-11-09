import express from "express"
import fs from "fs"
import { sendError, sendServerError, sendSuccess } from "../../helper/client.js"
import { KetQuaDRLSinhVien, KieuCanhBaoSV, TrangThaiTonTai } from "../../constant.js"
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
 * @route POST /api/admin/canh-bao-hoc-tap/importFile
 * @description Thêm đợt cảnh báo học tập hoặc cảnh báo điểm rèn luyện
 * @access public
 */
CanhBaoHocTapAdminRoute.post('/importFile', createCanhBaoHocTapDir, uploadFile.single("FileExcelPDF"), async (req, res) => {
    try{
        const errors = KtraDuLieuCBHTKhiThem(req.body)
        if (errors)
            return sendError(res, errors)
        const { MaCBHT, Ten, Dot, NienKhoa, KieuCanhBao, KetQuaDRL } = req.body;
        if (KieuCanhBao != KieuCanhBaoSV.DRL && KieuCanhBao != KieuCanhBaoSV.DHT)
            return sendError(res,"Kiểu cảnh báo phải là Điểm rèn luyện hoặc là Điểm học tập");
        let thongtin = [];
        let fileName = path.join(__dirname, `../../public/CanhBaoHocTap/${req.file.filename}`);
        if (KieuCanhBao == KieuCanhBaoSV.DHT){
            const workbook = new ExcelJS.Workbook();
            await workbook.xlsx.readFile(fileName)
                    .then(() => {
                        const sheetCount = workbook.worksheets.length;
                        let NganhHoc = "";
                        let KhoaHoc = "";
                        let LopHoc = "";
                        for (let i = 1; i <= sheetCount; i++){
                            const worksheet = workbook.getWorksheet(i);
                            worksheet.eachRow((row, rowNumber) => {
                                if ( row.getCell("A").value.richText ){
                                    if ( row.getCell("A").value.richText[0].text.includes("Ngành:") ){
                                        NganhHoc = row.getCell("A").value.richText[0].text.split('(')[1].split(')')[0];
                                    }
                                    if ( row.getCell("A").value.richText[0].text.includes("Khóa học:") ){
                                        KhoaHoc = row.getCell("A").value.richText[0].text.split(': ')[1];
                                    }
                                    if ( row.getCell("A").value.richText[0].text.includes("Lớp:") ){
                                        LopHoc = row.getCell("A").value.richText[0].text.split('(')[1].split(')')[0];
                                    }
                                }
                                else{
                                    if (row.cellCount > 12){
                                        let slcblt = '';
                                        let ghichu = '';
                                        if ( row.getCell("H").value != null )
                                            slcblt = row.getCell("H").value;
                                        if ( row.getCell("M").value != null )
                                            ghichu = row.getCell("M").value.richText[0].text;
                                        let ngaysinh = XuLyNgaySinh(row.getCell("E").value);
                                        let sv = {
                                            MaSV: row.getCell("B").value,
                                            HoSV: row.getCell("C").value.richText[0].text,
                                            TenSV: row.getCell("D").value.richText[0].text,
                                            NgaySinh: ngaysinh,
                                            NamThu: row.getCell("F").value,
                                            HocKyThu: row.getCell("G").value,
                                            SoLanCBLienTiep: slcblt,
                                            TongSoLanCB: row.getCell("I").value,
                                            DTBCHK: row.getCell("J").value,
                                            DTBCTL: row.getCell("K").value,
                                            KQ: row.getCell("L").value.richText[0].text,
                                            GhiChu: ghichu,
                                            Lop: LopHoc,
                                            Nganh: NganhHoc,
                                            Khoa: KhoaHoc,
                                        }
                                        thongtin.push(sv);
                                    }
                                    else{
                                        let slcblt = '';
                                        let ghichu = '';
                                        if ( row.getCell("H").value != null )
                                            slcblt = row.getCell("G").value;
                                        if ( row.getCell("M").value != null )
                                            ghichu = row.getCell("L").value.richText[0].text;
                                        let ngaysinh = XuLyNgaySinh(row.getCell("D").value);
                                        let hoten = row.getCell("C").value.richText[0].text.trim();
                                        let ho = hoten.split(' ')[0] + " " + hoten.split(' ')[1];
                                        let ten = hoten.split(' ')[hoten.split(' ').length - 1];
                                        let sv = {
                                            MaSV: row.getCell("B").value,
                                            HoSV: ho,
                                            TenSV: ten,
                                            NgaySinh: ngaysinh,
                                            NamThu: row.getCell("E").value,
                                            HocKyThu: row.getCell("F").value,
                                            SoLanCBLienTiep: slcblt,
                                            TongSoLanCB: row.getCell("H").value,
                                            DTBCHK: row.getCell("I").value,
                                            DTBCTL: row.getCell("J").value,
                                            KQ: row.getCell("K").value.richText[0].text,
                                            GhiChu: ghichu,
                                            Lop: LopHoc,
                                            Nganh: NganhHoc,
                                            Khoa: KhoaHoc,
                                        }
                                        thongtin.push(sv);
                                    }
                                }
                            });
                        }
                    })
                    .catch(err => {
                        console.error(err);
                    });
            await CanhBaoHocTap.create({ MaCBHT: MaCBHT, Ten: Ten, Dot: Dot, NienKhoa: NienKhoa, KieuCanhBao: KieuCanhBao, ThongTin: thongtin });
        }

        if (KieuCanhBao == KieuCanhBaoSV.DRL){
            if (KetQuaDRL != KetQuaDRLSinhVien.BTH && KetQuaDRL != KetQuaDRLSinhVien.CB && KetQuaDRL != KetQuaDRLSinhVien.TD)
                return sendError(res, "Kiểu cảnh báo điểm rèn luyện không chính xác");
            const pdfParser = new Pdfparser();
            pdfParser.loadPDF(fileName);

            await pdfParser.on('pdfParser_dataError', errData => {
                console.error(errData.parserError);
            });

            await pdfParser.on('pdfParser_dataReady', async pdfData => {
                let lengthPage = pdfData.Pages.length;
                for (let i = 0 ; i < lengthPage; i++){
                    let lengthTexts = pdfData.Pages[i].Texts.length;
                    for (let j = 0; j < lengthTexts; j++){
                        if (decodeURIComponent(pdfData.Pages[i].Texts[j].R[0].T).match(/^[0-9]/) && decodeURIComponent(pdfData.Pages[i].Texts[j+1].R[0].T).match(/^[0-9]{10}/)){
                            let xeploai = decodeURIComponent(pdfData.Pages[i].Texts[j+8].R[0].T);
                            if (decodeURIComponent(pdfData.Pages[i].Texts[j+7].R[0].T) == 0)
                                xeploai = 'Kém';
                            let sv = {
                                MaSV: decodeURIComponent(pdfData.Pages[i].Texts[j+1].R[0].T),
                                HoSV: decodeURIComponent(pdfData.Pages[i].Texts[j+2].R[0].T),
                                TenSV: decodeURIComponent(pdfData.Pages[i].Texts[j+3].R[0].T),
                                GioiTinh: decodeURIComponent(pdfData.Pages[i].Texts[j+4].R[0].T),
                                NgaySinh: decodeURIComponent(pdfData.Pages[i].Texts[j+5].R[0].T),
                                Lop: decodeURIComponent(pdfData.Pages[i].Texts[j+6].R[0].T),
                                DiemRenLuyen: decodeURIComponent(pdfData.Pages[i].Texts[j+7].R[0].T),
                                XepLoaiDRL: xeploai,
                                KQ: KetQuaDRL,
                            }
                            thongtin.push(sv);
                            if (decodeURIComponent(pdfData.Pages[i].Texts[j+7].R[0].T) == 0 && decodeURIComponent(pdfData.Pages[i].Texts[j+8].R[0].T).match(/^[0-9]/))
                                j = j +7;
                            else
                                j = j+8;
                        }
                    }
                }
                await CanhBaoHocTap.create({ MaCBHT: MaCBHT, Ten: Ten, Dot: Dot, NienKhoa: NienKhoa, KieuCanhBao: KieuCanhBao, ThongTin: thongtin });
            });
        }   
        fs.unlinkSync(fileName, (err) => {
            console.log(err)
        })

        return sendSuccess(res, "Thêm đợt cảnh báo thành công");
    }
    catch (error){
        console.log(error)
        return sendServerError(res)
    }
})


export default CanhBaoHocTapAdminRoute
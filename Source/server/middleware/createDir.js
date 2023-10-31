import { mkdir } from "fs"
import { sendError, sendServerError } from "../helper/client.js"
import fs from 'fs'
import multer from 'multer'
import path from 'path'

export const createChucNangDir = (req, res, next) => {
    mkdir(`public/ChucNang`, { recursive: true }, (err) => {
        if (err) return sendError(res, 'Không thể tải tập tin lên.')
    })
    req.dirName = 'ChucNang'
    next()
}

export const createSinhVienDir = (req, res, next) => {
    mkdir(`public/SinhVien`, { recursive: true }, (err) => {
        if (err) return sendError(res, 'Không thể tải tập tin lên.')
    })
    req.dirName = 'SinhVien'
    next()
}

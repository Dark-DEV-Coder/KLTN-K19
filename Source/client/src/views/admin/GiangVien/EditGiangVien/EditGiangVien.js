import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchAllChuyenNganh, fetchDetailGiangVien, fetchEditGiangVien } from "../../GetData"
import * as React from 'react';
import { toast } from "react-toastify";
import moment from "moment";
import "./EditGiangVien.scss"

const EditGiangVien = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    let navigate = useNavigate();
    const giangvien = useParams();
    const [listChuyenNganh, setListChuyenNganh] = useState([]);
    const [magv, SetMagv] = useState("")
    const [hogv, SetHogv] = useState("")
    const [tengv, SetTengv] = useState("")
    const [email, SetEmail] = useState("")
    const [sdt, SetSdt] = useState("")
    const [gioitinh, SetGioitinh] = useState("")
    const [ngaysinh, SetNgaysinh] = useState("")
    const [donvicongtac, SetDonvicongtac] = useState("")
    const [chuyennganh, SetChuyennganh] = useState("")
    const [trinhdo, SetTrinhdo] = useState("")
    const [giangvienEdit, setGiangvienEdit] = useState({ MaGV: "", HoGV: "", TenGV: "", Email: "", SoDienThoai: "", GioiTinh: "", NgaySinh: "", DonViCongTac: "", ChuyenNganh: "", TrinhDo: "" });
    const [Hinh, setHinh] = useState("")
    // component didmount
    useEffect(() => {
        getListChuyenNganh();
        getDetailGiangVien();
    }, []);
    const getListChuyenNganh = async () => {
        const headers = { 'x-access-token': accessToken };
        let res = await fetchAllChuyenNganh(headers);
        if (res && res.data && res.data.DanhSach) {
            setListChuyenNganh(res.data.DanhSach)
        }
    }

    const getDetailGiangVien = async () => {
        const headers = { 'x-access-token': accessToken };
        let res = await fetchDetailGiangVien(headers, giangvien.MaGV);
        if (res && res.data) {
            SetMagv(res.data.MaGV)
            SetHogv(res.data.HoGV)
            SetTengv(res.data.TenGV)
            SetEmail(res.data.Email)
            SetSdt(res.data.SoDienThoai)
            SetGioitinh(res.data.GioiTinh)
            SetNgaysinh(res.data.NgaySinh)
            SetDonvicongtac(res.data.DonViCongTac)
            SetChuyennganh(res.data.ChuyenNganh)
            SetTrinhdo(res.data.TrinhDo)
        }
    }
    const handleEditGiangVien = async () => {
        const headers = { 'x-access-token': accessToken };
        if (!headers || !magv || !hogv || !tengv || !email || !sdt || !gioitinh || !ngaysinh || !donvicongtac || !chuyennganh || !trinhdo) {
            toast.error("Vui lòng điền đầy đủ dữ liệu")
            return
        }

        let value_img = new FormData();
        value_img.append("MaGV", magv);
        value_img.append("HoGV", hogv);
        value_img.append("TenGV", tengv);
        value_img.append("Email", email);
        value_img.append("SoDienThoai", sdt);
        value_img.append("GioiTinh", gioitinh);
        value_img.append("Hinh", ngaysinh);
        value_img.append("DonViCongTac", donvicongtac);
        value_img.append("ChuyenNganh", chuyennganh);
        value_img.append("TrinhDo", trinhdo);
        value_img.append("Hinh", Hinh);

        let res = await fetchEditGiangVien(headers, magv, value_img)
        if (res.status === true) {
            toast.success(res.message)
            navigate("/admin/giangvien")
            return;
        }
        if (res.status === false) {
            toast.error(res.message)
            return;

        }
    }

    const onChangeFile = (event, setSL) => {
        const img = event.target.files[0];
        img.preview = URL.createObjectURL(img)
        setSL(img)
    }

    const onChangeInputSL = (event, SetState) => {
        let changeValue = event.target.value;
        SetState(changeValue);
    }

    const onChangeSelect = (event, SetSelect) => {
        let changeValue = event.target.value;
        SetSelect(changeValue);
    }

    // check dữ liệu
    const [checkdulieuHo, SetCheckdulieuHo] = useState(true)
    const [checkdulieuTen, SetCheckdulieuTen] = useState(true)
    const [checkdulieuEmail, SetCheckdulieuEmail] = useState(true)
    const [checkdulieuSDT, SetCheckdulieuSDT] = useState(true)
    const [checkdulieuDVCT, SetCheckdulieuDVCT] = useState(true)
    const [checkdulieuTrinhDo, SetCheckdulieuTrinhDo] = useState(true)
    const checkdulieu = (value, SetDuLieu) => {
        value === '' ? SetDuLieu(false) : SetDuLieu(true)
    }
    return (
        <main className="main2">
            {/* <HeaderMain title={'Chuyên ngành'} /> */}
            <div className="head-title">
                <div className="left">
                    <h1>CHỈNH SỬA</h1>
                    <ul className="breadcrumb">
                        <li>
                            <Link>Dashboard</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link>Giảng viên</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >{magv}</Link>
                        </li>
                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" htmlFor="inputHoGV">Họ lót</label>
                            <input type="text" className="form-control" id="inputHoGV" value={hogv} onChange={(event) => onChangeInputSL(event, SetHogv)} onBlur={() => checkdulieu(hogv, SetCheckdulieuHo)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuHo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputGV" htmlFor="inputTenGV">Tên</label>
                            <input type="text" className="form-control" id="inputTenGV" value={tengv} onChange={(event) => onChangeInputSL(event, SetTengv)} onBlur={() => checkdulieu(tengv, SetCheckdulieuTen)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuTen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" htmlFor="inputEmailGV">Email</label>
                            <input type="text" className="form-control" id="inputEmailGV" value={email} onChange={(event) => onChangeInputSL(event, SetEmail)} onBlur={() => checkdulieu(email, SetCheckdulieuEmail)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuEmail ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputGV" htmlFor="inputSdtGV">Số điện thoại</label>
                            <input type="text" className="form-control" id="inputSdtGV" value={sdt} onChange={(event) => onChangeInputSL(event, SetSdt)} onBlur={() => checkdulieu(sdt, SetCheckdulieuSDT)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuSDT ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" htmlFor="inputGioitinhGV">Giới tính</label>
                            <select value={gioitinh} onChange={(event) => onChangeSelect(event, SetGioitinh)} id="inputGioitinhGV" className="form-control">
                                <option value='Nam'>Nam</option>
                                <option value='Nữ'>Nữ</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputGV" htmlFor="inputNgaysinh">Ngày sinh</label>
                            <input type="date" className="form-control" id="inputNgaysinh" value={ngaysinh} onChange={(event) => onChangeInputSL(event, SetNgaysinh)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" htmlFor="inputDonviCT">Đơn vị công tác</label>
                            <input type="text" className="form-control" id="inputDonviCT" value={donvicongtac} onChange={(event) => onChangeInputSL(event, SetDonvicongtac)} onBlur={() => checkdulieu(donvicongtac, SetCheckdulieuDVCT)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuDVCT ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputGV" htmlFor="inputChuyennganh">Chuyên ngành</label>
                            <select value={chuyennganh} onChange={(event) => onChangeSelect(event, SetChuyennganh)} id="inputChuyennganh" className="form-control">
                                {listChuyenNganh && listChuyenNganh.length > 0 &&
                                    listChuyenNganh.map((item, index) => {
                                        return (
                                            <option key={item.MaChuyenNganh} value={item.TenChuyenNganh}>{item.TenChuyenNganh}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="inputGV" htmlFor="inputTrinhdo">Trình độ</label>
                            <input type="text" className="form-control" id="inputTrinhdo" value={trinhdo} onChange={(event) => onChangeInputSL(event, SetTrinhdo)} onBlur={() => checkdulieu(trinhdo, SetCheckdulieuTrinhDo)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <div className="custom-file">
                                <label className="inputKL" htmlFor="inputDSDT">Hình ảnh</label>
                                <input type="file" accept="image/*" className="form-control file" id="inputDSDT" onChange={(event) => onChangeFile(event, setHinh)} />
                            </div>
                            <div className="invalid-feedback" style={{ display: 'block' }}>Chỉ chấp nhận các file có đuôi là png, ...</div>
                        </div>
                    </div>
                    <button className="btn" type="button" onClick={() => handleEditGiangVien()}>Lưu</button>
                </div>



            </form>



        </main >
    )
}
export default EditGiangVien
import "./AddDKCN.scss"
import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import * as React from 'react';
import { toast } from "react-toastify";
import { fetchAddDangKyCN, fetchAddChuyenNganhDangKyCN } from "../../GetData"
const AddDKCN = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    let navigate = useNavigate();
    const today = moment().format("YYYY-MM-DD")
    const [sl_httt, SetSl_httt] = useState(0)
    const [sl_khmt, SetSl_khmt] = useState(0)
    const [sl_ktpm, SetSl_ktpm] = useState(0)
    const [sl_mmt, SetSl_mmt] = useState(0)
    const [sl_ltw, SetSl_ltw] = useState(0)
    const [sl_ltud, SetSl_ltud] = useState(0)


    const [maDKCN, SetMaDKCN] = useState('')
    const [tenDKCN, SetTenDKCN] = useState('')
    const [khoaDKCN, SetKhoaDKCN] = useState('')
    const [danhsachSV, SetDanhsachSV] = useState('')
    const [matkhau, SetMatkhau] = useState('')
    const [tgbd, SetTgbd] = useState(today)
    const [tgkt, SetTgkt] = useState(today)

    const handleAddDangKyCN = async () => {
        const headers = { 'x-access-token': accessToken };
        if (!headers || !maDKCN || !tenDKCN || !khoaDKCN) {
            toast.error("Vui lòng điền đầy đủ dữ liệu")
            return
        }
        const ngayBD = new Date(tgbd);
        const ngayKT = new Date(tgkt);
        let res = await fetchAddDangKyCN(headers, maDKCN, tenDKCN, khoaDKCN, ngayBD, ngayKT)
        console.log(res)
        setTimeout(() => {
            if (sl_httt !== 0) {
                AddSoLuongChuyenNganh("DCT", "HTTT", sl_httt)
            }
            if (sl_khmt !== 0) {
                AddSoLuongChuyenNganh("DCT", "KHMT", sl_khmt)
            }
            if (sl_ktpm !== 0) {
                AddSoLuongChuyenNganh("DCT", "KTPM", sl_ktpm)
            }
            if (sl_mmt !== 0) {
                AddSoLuongChuyenNganh("DCT", "MMT", sl_mmt)
            }
            if (sl_ltw !== 0) {
                AddSoLuongChuyenNganh("DKP", "LTW", sl_ltw)
            }
            if (sl_ltud !== 0) {
                AddSoLuongChuyenNganh("DKP", "LTUD", sl_ltud)
            }
            if (res.status === true) {
                toast.success(res.message)
                navigate("/admin/dkichuyennganh")
                return;
            }
            if (res.status === false) {
                toast.error(res.message)
                return;
            }

        }, 5000)


    }

    const AddSoLuongChuyenNganh = async (MaNganh, MaChuyenNganh, ToiDa) => {
        const headers = { 'x-access-token': accessToken };
        let res = await fetchAddChuyenNganhDangKyCN(headers, maDKCN, MaNganh, MaChuyenNganh, ToiDa)
        console.log("Mã ngành: ", res)
    }

    const onChangeInputSL = (event, SetSL) => {
        let changeValue = event.target.value;
        SetSL(changeValue);
    }
    const onChangeInputSL_DKCN = (event, SetSL) => {
        let changeValue = event.target.value;
        SetSL(parseInt(changeValue));
    }

    // check dữ liệu
    const [checkdulieuMa, SetCheckdulieuMa] = useState(true)
    const [checkdulieuTen, SetCheckdulieuTen] = useState(true)
    const [checkdulieuKhoa, SetCheckdulieuKhoa] = useState(true)
    const [checkdulieuMatKhau, SetCheckdulieuNienMatKhau] = useState(true)
    const checkdulieu = (value, SetDuLieu) => {
        value === '' ? SetDuLieu(false) : SetDuLieu(true)
    }

    return (
        <main className="main2">
            {/* <HeaderMain title={'Chuyên ngành'} /> */}
            <div className="head-title">
                <div className="left">
                    <h1>TẠO MỚI</h1>
                    <ul className="breadcrumb">
                        <li>
                            <Link>Dashboard</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link>Đăng ký chuyên ngành</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >Tạo mới</Link>
                        </li>
                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-4 ">
                            <label className="inputDKCN" htmlFor="inputTenDKCN">Mã đợt đăng ký chyên ngành</label>
                            <input type="text" className="form-control" id="inputTenDKCN" placeholder="Nhập mã ..." value={maDKCN} onChange={(event) => onChangeInputSL(event, SetMaDKCN)} onBlur={() => checkdulieu(maDKCN, SetCheckdulieuMa)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuMa ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>

                        </div>
                        <div className="form-group col-md-5 ">
                            <label className="inputDKCN" htmlFor="inputTenDKCN">Tên đợt đăng ký chyên ngành</label>
                            <input type="text" className="form-control" id="inputTenDKCN" placeholder="Nhập tên ..." value={tenDKCN} onChange={(event) => onChangeInputSL(event, SetTenDKCN)} onBlur={() => checkdulieu(tenDKCN, SetCheckdulieuTen)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuTen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>

                        </div>
                        <div className="form-group col-md-3">
                            <label className="inputDKCN" htmlFor="inputKhoaDKCN">Khóa học</label>
                            <input type="text" className="form-control" id="inputKhoaDKCN" placeholder="Điền khóa học" value={khoaDKCN} onChange={(event) => onChangeInputSL(event, SetKhoaDKCN)} onBlur={() => checkdulieu(khoaDKCN, SetCheckdulieuKhoa)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuKhoa ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>

                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <div className="custom-file">
                                <label className="inputDKCN" htmlFor="inputDSSVDKCN">Danh sách sinh viên</label>
                                <input type="file" className="form-control file" id="inputDSSVDKCN" placeholder="Điền niên khóa" onChange={(event) => onChangeInputSL(event, SetDanhsachSV)} />

                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <label className="inputDKCN" htmlFor="inputMatkhauDKCN">Mật khẩu</label>
                            <input type="text" className="form-control" id="inputMatkhauDKCN" placeholder="******" value={matkhau} onChange={(event) => onChangeInputSL(event, SetMatkhau)} onBlur={() => checkdulieu(matkhau, SetCheckdulieuNienMatKhau)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuMatKhau ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputDKCN" htmlFor="inputNgayBDDKCN">Ngày bắt đầu</label>
                            <input type="date" className="form-control" id="inputNgayBDDKCN" value={tgbd} onChange={(event) => onChangeInputSL(event, SetTgbd)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputDKCN" htmlFor="inputNgayKTDKCN">Ngày kết thúc</label>
                            <input type="date" className="form-control" id="inputNgayKTDKCN" value={tgkt} onChange={(event) => onChangeInputSL(event, SetTgkt)} />
                        </div>
                    </div>
                    <div className="row">

                        {/* CNTT */}
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title2">CÔNG NGHỆ THÔNG TIN</h5>
                                    <ul className="ul-admin">
                                        <li>
                                            <div className="form-group row lb">
                                                <label htmlFor="inputlabel-card" className="col-sm-8 col-form-label label-card">Hệ thống thông tin</label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={sl_httt} min={0} onChange={(event) => onChangeInputSL_DKCN(event, SetSl_httt)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label htmlFor="inputlabel-card" className="col-sm-8 col-form-label label-card">Khoa học máy tính</label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={sl_khmt} min={0} onChange={(event) => onChangeInputSL_DKCN(event, SetSl_khmt)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label htmlFor="inputlabel-card" className="col-sm-8 col-form-label label-card">Kỹ thuật phần mềm</label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={sl_ktpm} min={0} onChange={(event) => onChangeInputSL_DKCN(event, SetSl_ktpm)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label htmlFor="inputlabel-card" className="col-sm-8 col-form-label label-card">Mạng máy tính </label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={sl_mmt} min={0} onChange={(event) => onChangeInputSL_DKCN(event, SetSl_mmt)} />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                    {/* <p className="note">*Lưu ý: Nếu không nhập số lượng thì mặc định bằng 0</p> */}
                                </div>
                            </div>
                        </div>
                        {/* CNTT */}

                        {/* KTPM */}
                        <div className="col-sm-6">
                            <div className="card">
                                <div className="card-body">
                                    <h5 className="card-title2">KỸ THUẬT PHẦN MỀM</h5>
                                    <ul className="ul-admin">
                                        <li>
                                            <div className="form-group row lb">
                                                <label htmlFor="inputlabel-card" className="col-sm-8 col-form-label label-card">Lập trình web</label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={sl_ltw} min={0} onChange={(event) => onChangeInputSL_DKCN(event, SetSl_ltw)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label htmlFor="inputlabel-card" className="col-sm-8 col-form-label label-card">Lập trình ứng dụng</label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={sl_ltud} min={0} onChange={(event) => onChangeInputSL_DKCN(event, SetSl_ltud)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label htmlFor="inputlabel-card" className="col-sm-8 col-form-label label-card"></label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={sl_khmt} style={{ visibility: 'hidden' }} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label htmlFor="inputlabel-card" className="col-sm-8 col-form-label label-card"></label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={sl_khmt} style={{ visibility: 'hidden' }} />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        {/* KTPM */}


                        <p className="note">*Lưu ý: Nếu không nhập số lượng thì mặc định bằng 0</p>
                    </div>
                    <button className="btn" type="button" onClick={() => handleAddDangKyCN()}>Lưu</button>
                </div>



            </form>



        </main >
    )
}
export default AddDKCN;
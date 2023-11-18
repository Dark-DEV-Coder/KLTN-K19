import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import "./EditDKCN.scss"
import { fetchDetailDangKyCN, fetchEditDangKyCN } from "../../GetData"
import { toast } from "react-toastify";
import moment from "moment";
const EditDKCN = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    let navigate = useNavigate();
    const dangkychuyennganh = useParams();

    const [MaDKCN, setMaDKCN] = useState("")
    const [Ten, SetTen] = useState("")
    const [Khoa, SetKhoa] = useState("")
    const [ThoiGianBD, SetThoiGianBD] = useState("")
    const [ThoiGianKT, SetThoiGianKT] = useState("")

    const [httt, SetHttt] = useState({})
    const [khmt, SetKhmt] = useState({})
    const [ktpm, SetKtpm] = useState({})
    const [mmt, SetMmt] = useState({})
    const [ltw, SetLtw] = useState({})
    const [ltud, SetLtud] = useState({})

    useEffect(() => {
        getDetailDangKyCN();
    }, []);
    const getDetailDangKyCN = async () => {
        const headers = { 'x-access-token': accessToken };
        let res = await fetchDetailDangKyCN(headers, dangkychuyennganh.MaDKCN);
        console.log(res)
        if (res && res.data) {
            setMaDKCN(res.data.MaDKCN)
            SetTen(res.data.Ten)
            SetKhoa(res.data.Khoa)
            SetThoiGianBD(moment(res.data.ThoiGianBD).format("YYYY-MM-DD"))
            SetThoiGianKT(moment(res.data.ThoiGianKT).format("YYYY-MM-DD"))
            res.data.ThongTin.map((item, index) => {
                if (item.ChuyenNganh.MaChuyenNganh === "KTPM") {
                    SetKtpm(item)
                }
                if (item.ChuyenNganh.MaChuyenNganh === "HTTT") {
                    SetHttt(item)
                }
                if (item.ChuyenNganh.MaChuyenNganh === "KHMT") {
                    SetKhmt(item)
                }
                if (item.ChuyenNganh.MaChuyenNganh === "MMT") {
                    SetMmt(item)
                }
                if (item.ChuyenNganh.MaChuyenNganh === "LTUD") {
                    SetLtud(item)
                }
                if (item.ChuyenNganh.MaChuyenNganh === "LTW") {
                    SetLtw(item)
                }
            })
        }
    }

    const handleEditDangKyCN = async () => {
        const headers = { 'x-access-token': accessToken };
        if (!Ten || !Khoa) {
            toast.error("Vui lòng điền đầy đủ dữ liệu !")
            return
        }
        const ngayBD = new Date(ThoiGianBD);
        const ngayKT = new Date(ThoiGianKT);

        let res = await fetchEditDangKyCN(headers, dangkychuyennganh.MaDKCN, Ten, Khoa, ngayBD, ngayKT)
        if (res.status === true) {
            toast.success(res.message)
            navigate("/admin/dkichuyennganh")
            return;
        }
        if (res.status === false) {
            toast.error(res.message)
            return;
        }
    }






    const onChangeInputSL = (event, SetSL) => {
        let changeValue = event.target.value;
        SetSL(changeValue);
    }
    const onChangeInputSL_DKCN = (event, thongtinstate, setThongtinsate) => {
        let changeValue = event.target.value;
        setThongtinsate({ ...thongtinstate, ToiDa: parseInt(changeValue) });
    }

    // check dữ liệu
    const [checkdulieuTen, SetCheckdulieuTen] = useState(true)
    const [checkdulieuKhoa, SetCheckdulieuKhoa] = useState(true)
    // const [checkdulieuNienKhoa, SetCheckdulieuNienKhoa] = useState(true)
    // const [checkdulieuMatKhau, SetCheckdulieuNienMatKhau] = useState(true)
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
                            <Link>Đăng ký chuyên ngành</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >{dangkychuyennganh.MaDKCN}</Link>
                        </li>
                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-row ">
                        <div className="form-group col-md-6">
                            <label className="inputDKCN" htmlFor="inputTenDKCN">Tên đợt đăng ký chyên ngành</label>
                            <input type="text" className="form-control" id="inputTenDKCN" value={Ten} onChange={(event) => onChangeInputSL(event, SetTen)} onBlur={() => checkdulieu(Ten, SetCheckdulieuTen)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuTen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputDKCN" htmlFor="inputKhoaDKCN">Khóa học</label>
                            <input type="text" className="form-control" id="inputKhoaDKCN" value={Khoa} onChange={(event) => onChangeInputSL(event, SetKhoa)} onBlur={() => checkdulieu(Khoa, SetCheckdulieuKhoa)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuKhoa ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputDKCN" htmlFor="inputNgayBDDKCN">Ngày bắt đầu</label>
                            <input type="date" className="form-control" id="inputNgayBDDKCN" value={ThoiGianBD} onChange={(event) => onChangeInputSL(event, SetThoiGianBD)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputDKCN" htmlFor="inputNgayKTDKCN">Ngày kết thúc</label>
                            <input type="date" className="form-control" id="inputNgayKTDKCN" value={ThoiGianKT} onChange={(event) => onChangeInputSL(event, SetThoiGianKT)} />
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
                                                <label htmlFor="inputlabel-card" className="col-sm-5 col-form-label label-card">Hệ thống thông tin</label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={httt.ToiDa} min={httt.ToiDa} onChange={(event) => onChangeInputSL_DKCN(event, httt, SetHttt)} disabled={true} />
                                                </div>
                                                <div className="col-sm-3">
                                                    <input type="number" className="form-control" id="inputlabel-card" min={0} placeholder="SL thêm" onChange={(event) => onChangeInputSL_DKCN(event, httt, SetHttt)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label htmlFor="inputlabel-card" className="col-sm-5 col-form-label label-card">Khoa học máy tính</label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={khmt.ToiDa} min={khmt.ToiDa} onChange={(event) => onChangeInputSL_DKCN(event, khmt, SetKhmt)} disabled={true} />
                                                </div>
                                                <div className="col-sm-3">
                                                    <input type="number" className="form-control" id="inputlabel-card" min={0} placeholder="SL thêm" onChange={(event) => onChangeInputSL_DKCN(event, httt, SetHttt)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label htmlFor="inputlabel-card" className="col-sm-5 col-form-label label-card">Kỹ thuật phần mềm</label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={ktpm.ToiDa} min={ktpm.ToiDa} onChange={(event) => onChangeInputSL_DKCN(event, ktpm, SetKtpm)} disabled={true} />
                                                </div>
                                                <div className="col-sm-3">
                                                    <input type="number" className="form-control" id="inputlabel-card" min={0} placeholder="SL thêm" onChange={(event) => onChangeInputSL_DKCN(event, httt, SetHttt)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label htmlFor="inputlabel-card" className="col-sm-5 col-form-label label-card">Mạng máy tính </label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={mmt.ToiDa} min={mmt.ToiDa} onChange={(event) => onChangeInputSL_DKCN(event, mmt, SetMmt)} disabled={true} />
                                                </div>
                                                <div className="col-sm-3">
                                                    <input type="number" className="form-control" id="inputlabel-card" min={0} placeholder="SL thêm" onChange={(event) => onChangeInputSL_DKCN(event, httt, SetHttt)} />
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
                                                <label htmlFor="inputlabel-card" className="col-sm-5 col-form-label label-card">Lập trình web</label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={ltw.ToiDa} min={ltw.ToiDa} onChange={(event) => onChangeInputSL_DKCN(event, ltw, SetLtw)} disabled={true} />
                                                </div>
                                                <div className="col-sm-3">
                                                    <input type="number" className="form-control" id="inputlabel-card" min={0} placeholder="SL thêm" onChange={(event) => onChangeInputSL_DKCN(event, httt, SetHttt)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label htmlFor="inputlabel-card" className="col-sm-5 col-form-label label-card">Lập trình ứng dụng</label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={ltud.ToiDa} min={ltud.ToiDa} onChange={(event) => onChangeInputSL_DKCN(event, ltud, SetLtud)} disabled={true} />
                                                </div>
                                                <div className="col-sm-3">
                                                    <input type="number" className="form-control" id="inputlabel-card" min={0} placeholder="SL thêm" onChange={(event) => onChangeInputSL_DKCN(event, httt, SetHttt)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label htmlFor="inputlabel-card" className="col-sm-5 col-form-label label-card"></label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" style={{ visibility: 'hidden' }} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label htmlFor="inputlabel-card" className="col-sm-5 col-form-label label-card"></label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" style={{ visibility: 'hidden' }} />
                                                </div>
                                            </div>
                                        </li>
                                    </ul>

                                </div>
                            </div>
                        </div>
                        {/* KTPM */}


                        <p className="note">*Lưu ý: Chuyên ngành nào không được mở trong đợt đăng ký vui lòng đặt số lượng bằng 0 </p>

                    </div>
                    <button className="btn" type="button" onClick={() => handleEditDangKyCN()}>Lưu</button>
                </div>



            </form>



        </main >
    )
}
export default EditDKCN;
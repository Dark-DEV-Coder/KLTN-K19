import "./AddDKCN.scss"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from "moment";
import * as React from 'react';
const AddDKCN = () => {
    const dulieutest = {
        madkcn: 'CN1',
        tendkcn: 'Đăng ký chuyên ngành đợt 1',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '2022-01-02',
        tgkt: '2022-07-25',
        trangthai: 1,
    };
    const today = moment().format("YYYY-MM-DD")
    const chuyennganh = useParams();
    const [sl_httt, SetSl_httt] = useState(0)
    const [sl_khmt, SetSl_khmt] = useState(0)
    const [sl_ktpm, SetSl_ktpm] = useState(0)
    const [sl_mmt, SetSl_mmt] = useState(0)


    const [sl_ltw, SetSl_ltw] = useState(0)
    const [sl_ltud, SetSl_ltud] = useState(0)


    const [tenDKCN, SetTenDKCN] = useState('')
    const [nienkhoaDKCN, SetNienkhoaDKCN] = useState('')
    const [khoahocDKCN, SetKhoahocDKCN] = useState('')
    const [danhsachSV, SetDanhsachSV] = useState('')
    const [matkhau, SetMatkhau] = useState('')
    const [tgbd, SetTgbd] = useState(today)
    const [tgkt, SetTgkt] = useState(today)

    const onChangeInputSL = (event, SetSL) => {
        let changeValue = event.target.value;
        SetSL(changeValue);
    }

    // check dữ liệu
    const [checkdulieuTen, SetCheckdulieuTen] = useState(true)
    const [checkdulieuKhoa, SetCheckdulieuKhoa] = useState(true)
    const [checkdulieuNienKhoa, SetCheckdulieuNienKhoa] = useState(true)
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
                            <Link className="active" >new</Link>
                        </li>


                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-group">
                        <label className="inputDKCN" for="inputTenDKCN">Tên đợt đăng ký chyên ngành</label>
                        <input type="text" className="form-control" id="inputTenDKCN" placeholder="Nhập tên ..." value={tenDKCN} onChange={(event) => onChangeInputSL(event, SetTenDKCN)} onBlur={() => checkdulieu(tenDKCN, SetCheckdulieuTen)} />
                        <div className="invalid-feedback" style={{ display: checkdulieuTen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>

                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputDKCN" for="inputKhoaDKCN">Khóa học</label>
                            <input type="text" className="form-control" id="inputKhoaDKCN" placeholder="Điền khóa học" value={khoahocDKCN} onChange={(event) => onChangeInputSL(event, SetKhoahocDKCN)} onBlur={() => checkdulieu(khoahocDKCN, SetCheckdulieuKhoa)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuKhoa ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>

                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputDKCN" for="inputNienKhoaDKCN">Niên khóa</label>
                            <input type="text" className="form-control" id="inputNienKhoaDKCN" placeholder="Điền niên khóa" value={nienkhoaDKCN} onChange={(event) => onChangeInputSL(event, SetNienkhoaDKCN)} onBlur={() => checkdulieu(nienkhoaDKCN, SetCheckdulieuNienKhoa)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuNienKhoa ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>

                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <div className="custom-file">
                                <label className="inputDKCN" for="inputDSSVDKCN">Danh sách sinh viên</label>
                                <input type="file" className="form-control file" id="inputDSSVDKCN" placeholder="Điền niên khóa" onChange={(event) => onChangeInputSL(event, SetDanhsachSV)} />

                            </div>
                        </div>

                        <div className="form-group col-md-6">
                            <label className="inputDKCN" for="inputMatkhauDKCN">Mật khẩu</label>
                            <input type="text" className="form-control" id="inputMatkhauDKCN" placeholder="******" value={matkhau} onChange={(event) => onChangeInputSL(event, SetMatkhau)} onBlur={() => checkdulieu(matkhau, SetCheckdulieuNienMatKhau)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuMatKhau ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputDKCN" for="inputNgayBDDKCN">Ngày bắt đầu</label>
                            <input type="date" className="form-control" id="inputNgayBDDKCN" value={today} onChange={(event) => onChangeInputSL(event, SetTgbd)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputDKCN" for="inputNgayKTDKCN">Ngày kết thúc</label>
                            <input type="date" className="form-control" id="inputNgayKTDKCN" value={today} onChange={(event) => onChangeInputSL(event, SetTgkt)} />
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
                                                <label for="inputlabel-card" className="col-sm-8 col-form-label label-card">Hệ thống thông tin</label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={sl_httt} onChange={(event) => onChangeInputSL(event, SetSl_httt)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label for="inputlabel-card" className="col-sm-8 col-form-label label-card">Khoa học máy tính</label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={sl_khmt} onChange={(event) => onChangeInputSL(event, SetSl_khmt)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label for="inputlabel-card" className="col-sm-8 col-form-label label-card">Kỹ thuật phần mềm</label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={sl_ktpm} onChange={(event) => onChangeInputSL(event, SetSl_ktpm)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label for="inputlabel-card" className="col-sm-8 col-form-label label-card">Mạng máy tính </label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={sl_mmt} onChange={(event) => onChangeInputSL(event, SetSl_mmt)} />
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
                                                <label for="inputlabel-card" className="col-sm-8 col-form-label label-card">Lập trình web</label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={sl_ltw} onChange={(event) => onChangeInputSL(event, SetSl_ltw)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label for="inputlabel-card" className="col-sm-8 col-form-label label-card">Lập trình ứng dụng</label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={sl_ltud} onChange={(event) => onChangeInputSL(event, SetSl_ltud)} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label for="inputlabel-card" className="col-sm-8 col-form-label label-card"></label>
                                                <div className="col-sm-4">
                                                    <input type="number" className="form-control" id="inputlabel-card" value={sl_khmt} style={{ visibility: 'hidden' }} />
                                                </div>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="form-group row lb">
                                                <label for="inputlabel-card" className="col-sm-8 col-form-label label-card"></label>
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
                    <button className="btn" type="submit">Submit</button>
                </div>



            </form>



        </main >
    )
}
export default AddDKCN;
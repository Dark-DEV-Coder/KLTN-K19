import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from 'moment';
import * as React from 'react';
const AddThucTap = () => {
    const date = moment().format("YYYY-MM-DD");
    const [MaDKTT, SetMaDKTT] = useState()
    const [Ten, SetTen] = useState("")
    const [NienKhoa, SetNienKhoa] = useState("")
    const [DSCT, SetDSCT] = useState("")
    const [ThoiGianBD, SetThoiGianBD] = useState(date)
    const [ThoiGianKT, SetThoiGianKT] = useState(date)

    const onChangeInputSL = (event, SetSL) => {
        let changeValue = event.target.value;
        SetSL(changeValue);
    }

    // check dữ liệu
    const [checkdulieuTen, SetCheckdulieuTen] = useState(true)
    const [checkdulieuNienKhoa, SetCheckdulieuNienKhoa] = useState(true)
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
                            <Link>Thực tập</Link>
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
                        <label className="inputKL" for="inputTen">Tên đợt đăng ký khóa luận</label>
                        <input type="text" className="form-control" id="inputTen" placeholder="Điền tên đợt đăng ký khóa luận ..." value={Ten} onChange={(event) => onChangeInputSL(event, SetTen)} onBlur={() => checkdulieu(Ten, SetCheckdulieuTen)} />
                        <div className="invalid-feedback" style={{ display: checkdulieuTen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                    </div>
                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label className="inputKL" for="inputNienKhoa">Niên khóa</label>
                            <input type="text" className="form-control" id="inputNienKhoa" placeholder="Điền niên khóa ..." value={NienKhoa} onChange={(event) => onChangeInputSL(event, SetNienKhoa)} onBlur={() => checkdulieu(NienKhoa, SetCheckdulieuNienKhoa)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuNienKhoa ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <div className="custom-file">
                                <label className="inputKL" for="inputDSCT">Danh sách công ty</label>
                                <input type="file" className="form-control file" id="inputDSDT" onChange={(event) => onChangeInputSL(event, SetDSCT)} />
                            </div>
                            <div className="invalid-feedback" style={{ display: 'block' }}>Chỉ chấp nhận các file có đuôi là xls, xlsm, xlsx, xlt,...</div>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputKL" for="inputNgayBD">Ngày bắt đầu</label>
                            <input type="date" className="form-control" id="inputNgayBD" value={ThoiGianBD} onChange={(event) => onChangeInputSL(event, SetThoiGianBD)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputKL" for="inputNgayKT">Ngày kết thúc</label>
                            <input type="date" className="form-control" id="inputNgayKT" value={ThoiGianKT} onChange={(event) => onChangeInputSL(event, SetThoiGianKT)} />
                        </div>
                    </div>
                    <button className="btn" type="submit">Submit form</button>
                </div>



            </form>



        </main >
    )
}
export default AddThucTap;
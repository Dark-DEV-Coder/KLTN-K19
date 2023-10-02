import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import moment from 'moment';
import * as React from 'react';
import "./AddKhoaLuan.scss"
const AddKhoaLuan = () => {

    const date = moment().format("YYYY-MM-DD");
    const [ten, SetTen] = useState("")
    const [nienkhoa, SetNienkhoa] = useState("")
    const [khoahoc, SetKhoahoc] = useState("")
    const [dsdt, SetDsdt] = useState("")
    const [tgbd, SetTgbd] = useState(date)
    const [tgkt, SetTgkt] = useState(date)

    const onChangeInputSL = (event, SetSL) => {
        let changeValue = event.target.value;
        SetSL(changeValue);
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
                            <Link>Khóa luận</Link>
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
                        <input type="text" className="form-control" id="inputTen" value={ten} onChange={(event) => onChangeInputSL(event, SetTen)} />
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputKL" for="inputKhoa">Khóa học</label>
                            <input type="text" className="form-control" id="inputKhoa" value={khoahoc} onChange={(event) => onChangeInputSL(event, SetKhoahoc)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputKL" for="inputNienKhoa">Niên khóa</label>
                            <input type="text" className="form-control" id="inputNienKhoa" value={nienkhoa} onChange={(event) => onChangeInputSL(event, SetNienkhoa)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <div className="custom-file">
                                <label className="inputKL" for="inputDSDT">Danh sách đề tài</label>
                                <input type="file" className="form-control file" id="inputDSDT" onChange={(event) => onChangeInputSL(event, SetDsdt)} />
                            </div>
                            <div className="invalid-feedback" style={{ display: 'block' }}>Chỉ chấp nhận các file có đuôi là xls, xlsm, xlsx, xlt,...</div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputKL" for="inputNgayBD">Ngày bắt đầu</label>
                            <input type="date" className="form-control" id="inputNgayBD" value={tgbd} onChange={(event) => onChangeInputSL(event, SetTgbd)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputKL" for="inputNgayKT">Ngày kết thúc</label>
                            <input type="date" className="form-control" id="inputNgayKT" value={tgkt} onChange={(event) => onChangeInputSL(event, SetTgkt)} />
                        </div>
                    </div>
                    <button className="btn" type="submit">Submit form</button>
                </div>



            </form>



        </main >
    )
}
export default AddKhoaLuan;
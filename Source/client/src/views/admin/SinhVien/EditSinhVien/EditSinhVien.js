import "./EditSinhVien.scss"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';

const EditSinhVien = () => {
    const dulieutest = {
        masv: 'SV10',
        hosv: 'Lê Thị',
        tensv: 'A',
        email: 'abc@gmail.com',
        sdt: '0936362711',
        gioitinh: 'nữ',
        ngaysinh: '2002-08-12',
        khoa: 'K19',
        chuyennganh: 'khmt',
        nganh: 'ktpm',
        lop: 'DKP1191',
        trangthaitotnghiep: 'Chưa tốt nghiệp',
        trangthai: 1,
    }

    const sinhvien = useParams();
    const [hosv, SetHosv] = useState(dulieutest.hosv)
    const [tensv, SetTensv] = useState(dulieutest.tensv)
    const [email, SetEmail] = useState(dulieutest.email)
    const [sdt, SetSdt] = useState(dulieutest.sdt)
    const [gioitinh, SetGioitinh] = useState(dulieutest.gioitinh)
    const [ngaysinh, SetNgaysinh] = useState(dulieutest.ngaysinh)
    const [khoa, SetKhoa] = useState(dulieutest.khoa)
    const [nganhhoc, SetNganhhoc] = useState(dulieutest.nganh)
    const [chuyennganh, SetChuyennganh] = useState(dulieutest.chuyennganh)
    const [lop, SetLop] = useState(dulieutest.lop)
    const [trangthaitotnghiep, SetTrangthaitotnghiep] = useState(dulieutest.trangthaitotnghiep)

    const nganh = [
        { id: 'httt', ten: 'Hệ thống thông tin' },
        { id: 'khmt', ten: 'Khoa học máy tính' },
        { id: 'ktpm', ten: 'Kỹ thuật phần mềm' },
        { id: 'mmt', ten: 'Mạng máy tính' },
    ]
    const onChangeInputSL = (event, SetState) => {
        let changeValue = event.target.value;
        SetState(changeValue);
    }

    const onChangeSelect = (event, SetSelect) => {
        let changeValue = event.target.value;
        console.log('select', changeValue)
        SetSelect(changeValue);
    }

    // check dữ liệu
    const [checkdulieuHo, SetCheckdulieuHo] = useState(true)
    const [checkdulieuTen, SetCheckdulieuTen] = useState(true)
    const [checkdulieuEmail, SetCheckdulieuEmail] = useState(true)
    const [checkdulieuSDT, SetCheckdulieuSDT] = useState(true)
    const [checkdulieuKhoa, SetCheckdulieuKhoa] = useState(true)
    const [checkdulieuLop, SetCheckdulieuLop] = useState(true)
    const checkdulieu = (value, SetDuLieu) => {
        value === '' ? SetDuLieu(false) : SetDuLieu(true)
    }

    return (
        <main className="main2">
            {/* <HeaderMain title={'Chuyên ngành'} /> */}
            <div className="head-title">
                <div className="left">
                    <h1>CHỈNH SỬA </h1>
                    <ul className="breadcrumb">
                        <li>
                            <Link>Dashboard</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link>Sinh viên</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >{sinhvien.masv}</Link>
                        </li>


                    </ul>
                </div>

            </div>


            <form className="form-new">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputSV" for="inputHoGV">Họ lót</label>
                            <input type="text" className="form-control" id="inputHoGV" placeholder="Điền họ lót ..." value={hosv} onChange={(event) => onChangeInputSL(event, SetHosv)} onBlur={() => checkdulieu(hosv, SetCheckdulieuHo)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuHo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputSV" for="inputTenGV">Tên</label>
                            <input type="text" className="form-control" id="inputTenGV" placeholder="Điền tên ..." value={tensv} onChange={(event) => onChangeInputSL(event, SetTensv)} onBlur={() => checkdulieu(tensv, SetCheckdulieuTen)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuTen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputSV" for="inputEmailGV">Email</label>
                            <input type="text" className="form-control" id="inputEmailGV" placeholder="abc...@gmail.com" value={email} onChange={(event) => onChangeInputSL(event, SetEmail)} onBlur={() => checkdulieu(email, SetCheckdulieuEmail)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuEmail ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputSV" for="inputSdtGV">Số điện thoại</label>
                            <input type="text" className="form-control" id="inputSdtGV" placeholder="03899...." value={sdt} onChange={(event) => onChangeInputSL(event, SetSdt)} onBlur={() => checkdulieu(sdt, SetCheckdulieuSDT)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuSDT ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputSV" for="inputGioitinhGV">Giới tính</label>
                            <select value={gioitinh} onChange={(event) => onChangeSelect(event, SetGioitinh)} id="inputGioitinhGV" className="form-control">
                                <option value='Nam'>Nam</option>
                                <option value='Nữ'>Nữ</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputSV" for="inputNgaysinh">Ngày sinh</label>
                            <input type="date" className="form-control" id="inputNgaysinh" value={ngaysinh} onChange={(event) => onChangeInputSL(event, SetNgaysinh)} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputSV" for="inputNganh">Ngành</label>
                            <select value={nganhhoc} onChange={(event) => onChangeSelect(event, SetNganhhoc)} id="inputNganh" className="form-control">
                                {nganh && nganh.length > 0 &&
                                    nganh.map((item, index) => {
                                        return (
                                            <option key={item.id} value={item.id}>{item.ten}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputSV" for="inputChuyenNganh">Chuyên Ngành</label>
                            <select value={chuyennganh} onChange={(event) => onChangeSelect(event, SetChuyennganh)} id="inputChuyenNganh" className="form-control">
                                {nganh && nganh.length > 0 &&
                                    nganh.map((item, index) => {
                                        return (
                                            <option key={item.id} value={item.id}>{item.ten}</option>
                                        )
                                    })
                                }
                            </select>
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputSV" for="inputKhoa">Lớp</label>
                            <input type="text" className="form-control" id="inputKhoa" placeholder="Điền khóa ..." value={lop} onChange={(event) => onChangeInputSL(event, SetLop)} onBlur={() => checkdulieu(lop, SetCheckdulieuLop)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuLop ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputSV" for="inputKhoa">Khóa</label>
                            <input type="text" className="form-control" id="inputKhoa" placeholder="Điền khóa ..." value={khoa} onChange={(event) => onChangeInputSL(event, SetKhoa)} onBlur={() => checkdulieu(khoa, SetCheckdulieuKhoa)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuKhoa ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>

                    </div>


                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="inputSV" for="inputTrangthaitotnghiep">Trạng thái tốt nghiệp</label>
                            <select value={trangthaitotnghiep} onChange={(event) => onChangeSelect(event, SetTrangthaitotnghiep)} id="inputTrangthaitotnghiep" className="form-control">
                                <option value="Chưa tốt nghiệp">Chưa tốt nghiệp</option>
                                <option value="Đã tốt nghiệp">Đã tốt nghiệp</option>
                            </select>
                        </div>

                    </div>
                    <button className="btn" type="submit">Submit form</button>
                </div>



            </form>



        </main >
    )
}
export default EditSinhVien
import "./AddGiangVien.scss"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';

const AddGiangVien = () => {
    const [hogv, SetHogv] = useState('')
    const [tengv, SetTengv] = useState('')
    const [email, SetEmail] = useState('')
    const [sdt, SetSdt] = useState('')
    const [gioitinh, SetGioitinh] = useState('Nam')
    const [ngaysinh, SetNgaysinh] = useState('1970-01-01')
    const [donvicongtac, SetDonvicongtac] = useState('')
    const [chuyennganh, SetChuyennganh] = useState('httt')
    const [trinhdo, SetTrinhdo] = useState('')

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
        console.log("Select", changeValue)
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
                    <h1>TẠO MỚI </h1>
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
                            <Link className="active" >new</Link>
                        </li>


                    </ul>
                </div>
            </div>


            <form className="form-new">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputHoGV">Họ lót</label>
                            <input type="text" className="form-control" id="inputHoGV" placeholder="Điền họ lót ..." value={hogv} onChange={(event) => onChangeInputSL(event, SetHogv)} onBlur={() => checkdulieu(hogv, SetCheckdulieuHo)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuHo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputTenGV">Tên</label>
                            <input type="text" className="form-control" id="inputTenGV" placeholder="Điền tên ..." value={tengv} onChange={(event) => onChangeInputSL(event, SetTengv)} onBlur={() => checkdulieu(tengv, SetCheckdulieuTen)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuTen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputEmailGV">Email</label>
                            <input type="text" className="form-control" id="inputEmailGV" placeholder="abc...@gmail.com" value={email} onChange={(event) => onChangeInputSL(event, SetEmail)} onBlur={() => checkdulieu(email, SetCheckdulieuEmail)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuEmail ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputSdtGV">Số điện thoại</label>
                            <input type="text" className="form-control" id="inputSdtGV" placeholder="03899...." value={sdt} onChange={(event) => onChangeInputSL(event, SetSdt)} onBlur={() => checkdulieu(sdt, SetCheckdulieuSDT)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuSDT ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputGioitinhGV">Giới tính</label>
                            <select value={gioitinh} onChange={(event) => onChangeSelect(event, SetGioitinh)} id="inputGioitinhGV" className="form-control">
                                <option value='Nam'>Nam</option>
                                <option value='Nữ'>Nữ</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputNgaysinh">Ngày sinh</label>
                            <input type="date" className="form-control" id="inputNgaysinh" value={ngaysinh} onChange={(event) => onChangeInputSL(event, SetNgaysinh)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputDonviCT">Đơn vị công tác</label>
                            <input type="text" className="form-control" id="inputDonviCT" placeholder="Điền đơn vị ..." value={donvicongtac} onChange={(event) => onChangeInputSL(event, SetDonvicongtac)} onBlur={() => checkdulieu(donvicongtac, SetCheckdulieuDVCT)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuDVCT ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputChuyennganh">Chuyên ngành</label>
                            <select value={chuyennganh} onChange={(event) => onChangeSelect(event, SetChuyennganh)} id="inputChuyennganh" className="form-control">
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
                        <div className="form-group col-md-12">
                            <label className="inputGV" for="inputTrinhdo">Trình độ</label>
                            <input type="text" className="form-control" id="inputTrinhdo" placeholder="Điền trình độ ..." value={trinhdo} onChange={(event) => onChangeInputSL(event, SetTrinhdo)} onBlur={() => checkdulieu(trinhdo, SetCheckdulieuTrinhDo)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>
                    <button className="btn" type="submit">Submit form</button>
                </div>



            </form>



        </main >
    )
}
export default AddGiangVien
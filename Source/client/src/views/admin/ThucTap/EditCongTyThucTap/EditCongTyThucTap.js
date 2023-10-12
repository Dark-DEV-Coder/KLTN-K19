
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';

const EditCongTyThucTap = () => {

    const dulieutest = {
        TenCongTy: 'Công ty A',
        Website: 'http:///A.com',
        SoDienThoai: '098888888',
        Email: 'A@gmail.com',
        DiaChi: '12/1,Bình Chánh, Nhà Bè, TP.Thủ Đức',

        ViTri: 'FrontEnd, BackEnd, AI, Mobile',
        ToiDa: '5',
        DaDangKy: '1',
        ConLai: '4',
        trangthai: 1,

    };
    const ctythuctap = useParams();

    const [TenCongTy, SetTenCongTy] = useState(dulieutest.TenCongTy)
    const [Website, SetWebsite] = useState(dulieutest.Website)
    const [SoDienThoai, SetSoDienThoai] = useState(dulieutest.SoDienThoai)
    const [Email, SetEmail] = useState(dulieutest.Email)
    const [DiaChi, SetDiaChi] = useState(dulieutest.DiaChi)

    const [ViTri, SetViTri] = useState(dulieutest.ViTri)
    const [ToiDa, SetToiDa] = useState(dulieutest.ToiDa)
    const [DaDangKy, SetDaDangKy] = useState(dulieutest.DaDangKy)
    const [ConLai, SetConLai] = useState(dulieutest.ConLai)


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
    const [checkdulieuWebsite, SetCheckdulieuWebsite] = useState(true)
    const [checkdulieuTen, SetCheckdulieuTen] = useState(true)
    const [checkdulieuEmail, SetCheckdulieuEmail] = useState(true)
    const [checkdulieuSDT, SetCheckdulieuSDT] = useState(true)
    const [checkdulieuDiaChi, SetCheckdulieuDiaChi] = useState(true)
    const [checkdulieuVitri, SetCheckdulieuVitri] = useState(true)
    const checkdulieu = (value, SetDuLieu) => {
        value === '' ? SetDuLieu(false) : SetDuLieu(true)
    }

    return (
        <main className="main2">
            {/* <HeaderMain title={'Chuyên ngành'} /> */}
            <div className="head-title">
                <div className="left">
                    <h1>CHỈNH SỬA CÔNG TY THỰC TẬP</h1>
                    <ul className="breadcrumb">
                        <li>
                            <Link>Dashboard</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link>Thực tập tốt nghiệp</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active">{ctythuctap.TenCongTy}</Link>
                        </li>


                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputTen">Tên công ty</label>
                            <input type="text" className="form-control" id="inputTen" value={TenCongTy} onChange={(event) => onChangeInputSL(event, SetTenCongTy)} onBlur={() => checkdulieu(TenCongTy, SetCheckdulieuTen)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuTen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputWebsite">Website</label>
                            <input type="text" className="form-control" id="inputWebsite" value={Website} onChange={(event) => onChangeInputSL(event, SetWebsite)} onBlur={() => checkdulieu(Website, SetCheckdulieuWebsite)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuWebsite ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputSoDienThoai">Số điện thoại</label>
                            <input type="text" className="form-control" id="inputSoDienThoai" value={SoDienThoai} onChange={(event) => onChangeInputSL(event, SetSoDienThoai)} onBlur={() => checkdulieu(SoDienThoai, SetCheckdulieuSDT)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuSDT ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputEmail">Email</label>
                            <input type="text" className="form-control" id="inputEmail" value={Email} onChange={(event) => onChangeInputSL(event, SetEmail)} onBlur={() => checkdulieu(Email, SetCheckdulieuEmail)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuEmail ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="inputGV" for="inputDiaChi">Địa chỉ</label>
                            <input type="text" className="form-control" id="inputDiaChi" value={DiaChi} onChange={(event) => onChangeInputSL(event, SetDiaChi)} onBlur={() => checkdulieu(DiaChi, SetCheckdulieuDiaChi)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuDiaChi ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputTenGV">Vị Trí</label>
                            <textarea class="form-control" id="inputTenGV" value={ViTri} onChange={(event) => onChangeInputSL(event, SetViTri)} onBlur={() => checkdulieu(ViTri, SetCheckdulieuVitri)} rows="10"></textarea>
                            <div className="invalid-feedback" style={{ display: checkdulieuVitri ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-2">
                            <label className="inputGV" for="inputTenGV">Số lượng</label>
                            <input type="number" className="form-control" id="inputTenGV" value={ToiDa} onChange={(event) => onChangeInputSL(event, SetToiDa)} />

                            <label className="inputGV" for="inputTenGV">Đã đăng ký</label>
                            <input type="number" className="form-control" id="inputTenGV" value={DaDangKy} onChange={(event) => onChangeInputSL(event, SetDaDangKy)} />

                            <label className="inputGV" for="inputTenGV">Chưa đăng ký</label>
                            <input type="number" className="form-control" id="inputTenGV" value={ConLai} onChange={(event) => onChangeInputSL(event, SetConLai)} />

                        </div>
                    </div>
                    <button className="btn" type="submit">Submit form</button>
                </div>
            </form>



        </main >
    )
}
export default EditCongTyThucTap
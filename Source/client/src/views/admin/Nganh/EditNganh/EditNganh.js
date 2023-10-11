import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import "./EditNganh.scss"
const EditNganh = () => {
    const dulieutest = {
        manganhhoc: 'CNTT',
        tennganh: 'Công nghệ thông tin',
        trangthai: 1,
    };
    const nganh = useParams();
    const [manganh, SetMaNganh] = useState(dulieutest.manganhhoc)
    const [tennganh, SetTenNganh] = useState(dulieutest.tennganh)

    const onChangeInputSL = (event, SetSL) => {
        let changeValue = event.target.value;
        SetSL(changeValue);
    }

    // check dữ liệu
    const [checkdulieuMa, SetCheckdulieuMa] = useState(true)
    const [checkdulieuTen, SetCheckdulieuTen] = useState(true)
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
                            <Link>Ngành</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >{nganh.manganhhoc}</Link>
                        </li>


                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputMa">Mã ngành</label>
                            <input type="text" className="form-control" id="inputMa" value={manganh} onChange={(event) => onChangeInputSL(event, SetMaNganh)} onBlur={(event) => checkdulieu(manganh, SetCheckdulieuMa)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuMa ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputTen">Tên ngành</label>
                            <input type="text" className="form-control" id="inputTen" value={tennganh} onChange={(event) => onChangeInputSL(event, SetTenNganh)} onBlur={(event) => checkdulieu(tennganh, SetCheckdulieuTen)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuTen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>

                    <button className="btn" type="submit">Submit form</button>
                </div>



            </form>



        </main >
    )
}
export default EditNganh;
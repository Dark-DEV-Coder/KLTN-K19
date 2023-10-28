

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import "./ChiTietNganh.scss"
import TableChuyenNganh from "./TableChuyenNganh/TableChuyenNganh";
const ChiTietNganh = () => {
    const dulieutest = {
        MaNganh: 'CNTT',
        TenNganh: 'Công nghệ thông tin',
        trangthai: 1,
    };
    const nganh = useParams();
    const [manganh, SetMaNganh] = useState(dulieutest.MaNganh)
    const [tennganh, SetTenNganh] = useState(dulieutest.TenNganh)

    const onChangeInputSL = (event, SetSL) => {
        let changeValue = event.target.value;
        SetSL(changeValue);
    }
    return (
        <main className="main2">
            {/* <HeaderMain title={'Chuyên ngành'} /> */}
            <div className="head-title">
                <div className="left">
                    <h1>THÔNG TIN CHI TIẾT</h1>
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
                            <Link className="active" >{tennganh}</Link>
                        </li>


                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputMa">Mã ngành</label>
                            <input type="text" className="form-control" id="inputMa" value={manganh} disabled />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputTen">Tên ngành</label>
                            <input type="text" className="form-control" id="inputTen" value={tennganh} disabled />
                        </div>
                    </div>

                    <TableChuyenNganh />
                    {/* <button className="btn" type="submit">Submit form</button> */}
                </div>
            </form>
        </main >
    )
}
export default ChiTietNganh;
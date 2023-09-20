import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import "./EditChuyenNganh.scss"
const EditChuyenNganh = () => {
    const dulieutest = {
        machuyennganh: 'HTTT',
        tenchuyennganh: 'Hệ Thống Thông Tin',
        trangthai: 1,
    };
    const chuyennganh = useParams();
    const [manchuyenganh, SetMachuyennganh] = useState(dulieutest.machuyennganh)
    const [tenchuyennganh, SetTenchuyennganh] = useState(dulieutest.tenchuyennganh)

    const onChangeInputSL = (event, SetSL) => {
        let changeValue = event.target.value;
        SetSL(changeValue);
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
                            <Link>Chuyên ngành</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >{chuyennganh.machuyennganh}</Link>
                        </li>
                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputMa">Mã chuyên ngành</label>
                            <input type="text" className="form-control" id="inputMa" value={manchuyenganh} onChange={(event) => onChangeInputSL(event, SetMachuyennganh)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputTen">Tên chuyên ngành</label>
                            <input type="text" className="form-control" id="inputTen" value={tenchuyennganh} onChange={(event) => onChangeInputSL(event, SetTenchuyennganh)} />
                        </div>
                    </div>


                    <button className="btn" type="submit">Submit form</button>
                </div>



            </form>



        </main >
    )
}
export default EditChuyenNganh;
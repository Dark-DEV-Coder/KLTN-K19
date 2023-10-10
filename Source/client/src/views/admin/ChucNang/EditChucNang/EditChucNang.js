
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
const EditChucNang = () => {
    const dulieutest = { MaCN: 'dkichuyennganh', TenChucNang: 'Đăng ký chuyên ngành' }
    const chucnang = useParams();
    const [MaCN, SetMaCN] = useState(dulieutest.MaCN)
    const [TenChucNang, SetTenChucNang] = useState(dulieutest.TenChucNang)

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
                            <Link>Chức năng</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >{chucnang.MaCN}</Link>
                        </li>


                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputMa">Mã chức năng</label>
                            <input type="text" className="form-control" id="inputMa" value={MaCN} onChange={(event) => onChangeInputSL(event, SetMaCN)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputTen">Tên chức năng</label>
                            <input type="text" className="form-control" id="inputTen" value={TenChucNang} onChange={(event) => onChangeInputSL(event, SetTenChucNang)} />
                        </div>
                    </div>


                    <button className="btn" type="submit">Submit form</button>
                </div>



            </form>



        </main >
    )
}
export default EditChucNang;
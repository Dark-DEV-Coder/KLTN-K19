import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import "./EditCBHT.scss"
const EditCBHT = () => {
    const dulieutest = {
        MaCBHT: 'CBHT1',
        Ten: 'Cảnh báo học tập đợt 1 năm học 2022-2023',
        NienKhoa: '2022-2023',
        trangthai: 1,
    };
    const canhbaohoctap = useParams();

    const [Ten, SetTen] = useState(dulieutest.Ten)
    const [NienKhoa, SetNienKhoa] = useState(dulieutest.NienKhoa)

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
                            <Link>Cảnh báo học tập</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >{canhbaohoctap.MaCBHT}</Link>
                        </li>


                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-group">
                        <label className="inputCBHT" for="inputTen">Tên đợt cảnh báo học tập</label>
                        <input type="text" className="form-control" id="inputTen" value={Ten} onChange={(event) => onChangeInputSL(event, SetTen)} />
                    </div>
                    <div className="form-row">

                        <div className="form-group col-md-12">
                            <label className="inputCBHT" for="inputNienKhoa">Niên khóa</label>
                            <input type="text" className="form-control" id="inputNienKhoa" value={NienKhoa} onChange={(event) => onChangeInputSL(event, SetNienKhoa)} />
                        </div>
                    </div>


                    <button className="btn" type="submit">Submit form</button>
                </div>



            </form>



        </main >
    )
}
export default EditCBHT;
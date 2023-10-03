import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import "./AddCBHT.scss"
const AddCBHT = () => {
    const [Ten, SetTen] = useState("")
    const [NienKhoa, SetNienKhoa] = useState("")
    const [DSSV, SetDSSV] = useState("")

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
                            <Link>Cảnh báo học tập</Link>
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
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputCBHT" for="inputTen">Tên đợt cảnh báo học tập</label>
                            <input type="text" className="form-control" id="inputTen" value={Ten} placeholder="Điền tên đợt cảnh báo ..." onChange={(event) => onChangeInputSL(event, SetTen)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputCBHT" for="inputNienKhoa">Niên khóa</label>
                            <input type="text" className="form-control" id="inputNienKhoa" value={NienKhoa} placeholder="Điền niên khóa ..." onChange={(event) => onChangeInputSL(event, SetNienKhoa)} />
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <div className="custom-file">
                                <label className="inputCBHT" for="inputDSSV">Danh sách sinh viên</label>
                                <input type="file" className="form-control file" id="inputDSSV" onChange={(event) => onChangeInputSL(event, SetDSSV)} />
                                <div className="invalid-feedback">Example invalid custom file feedback</div>
                            </div>
                        </div>
                    </div>


                    <button className="btn" type="submit">Submit form</button>
                </div>



            </form>



        </main >
    )
}
export default AddCBHT;
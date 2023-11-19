import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import "./ViTriThucTap.scss"
import DSSVThucTap from "./DSSVThucTap";

const ViTriThucTap = () => {

    const dulieutest = {
        ViTri: 'FrontEnd, BackEnd, AI, Mobile',
        ToiDa: '5',
        DaDangKy: '1',
        ConLai: '4',
        trangthai: 1,

    };
    const ctythuctap = useParams();

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
        SetSelect(changeValue);
    }
    return (
        <main className="main2">
            {/* <HeaderMain title={'Chuyên ngành'} /> */}
            <div className="head-title">
                <div className="left">
                    <h1>VỊ TRÍ THỰC TẬP</h1>
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
                            <Link>{ctythuctap.TenCongTy}</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >Danh sách vị trí của {ctythuctap.TenCongTy}</Link>
                        </li>
                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputGV" for="inputTenGV">Vị Trí</label>
                            <textarea className="form-control" id="inputTenGV" value={ViTri} rows="10"></textarea>
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
                    <DSSVThucTap />
                </div>



            </form>



        </main >
    )
}
export default ViTriThucTap
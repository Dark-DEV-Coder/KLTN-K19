import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
const EditThucTap = () => {
    const dulieutest = {
        MaDKTT: 'DKTT1',
        Ten: 'Thực tập tốt nghiệp đợt 1 năm học 2022-2023',
        NienKhoa: '2022-2023',
        ThoiGianBD: '2022-09-15',
        ThoiGianKT: '2022-10-15',
        trangthai: 1,
    };
    const thuctap = useParams();

    const [MaDKTT, SetMaDKTT] = useState(dulieutest.MaDKTT)
    const [Ten, SetTen] = useState(dulieutest.Ten)
    const [NienKhoa, SetNienKhoa] = useState(dulieutest.NienKhoa)
    const [ThoiGianBD, SetThoiGianBD] = useState(dulieutest.ThoiGianBD)
    const [ThoiGianKT, SetThoiGianKT] = useState(dulieutest.ThoiGianKT)

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
                            <Link>Thực tập</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >{thuctap.MaDKTT}</Link>
                        </li>


                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-group">
                        <label className="inputKL" for="inputTen">Tên đợt đăng ký khóa luận</label>
                        <input type="text" className="form-control" id="inputTen" value={Ten} onChange={(event) => onChangeInputSL(event, SetTen)} />
                    </div>
                    <div className="form-row">

                        <div className="form-group col-md-6">
                            <label className="inputKL" for="inputNienKhoa">Niên khóa</label>
                            <input type="text" className="form-control" id="inputNienKhoa" value={NienKhoa} onChange={(event) => onChangeInputSL(event, SetNienKhoa)} />
                        </div>
                    </div>
                    {/* <div className="form-row">
                        <div className="form-group col-md-12">
                            <div className="custom-file">
                                <label className="inputKL" for="inputDSDT">Danh sách đề tài</label>
                                <input type="file" className="form-control file" id="inputDSDT" onChange={(event) => onChangeInputSL(event, SetDsdt)} />
                            </div>
                            <div className="invalid-feedback" style={{ display: 'block' }}>Chỉ chấp nhận các file có đuôi là xls, xlsm, xlsx, xlt,...</div>
                        </div>
                    </div> */}
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputKL" for="inputNgayBD">Ngày bắt đầu</label>
                            <input type="date" className="form-control" id="inputNgayBD" value={ThoiGianBD} onChange={(event) => onChangeInputSL(event, SetThoiGianBD)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputKL" for="inputNgayKT">Ngày kết thúc</label>
                            <input type="date" className="form-control" id="inputNgayKT" value={ThoiGianKT} onChange={(event) => onChangeInputSL(event, SetThoiGianKT)} />
                        </div>
                    </div>
                    <button className="btn" type="submit">Submit form</button>
                </div>



            </form>



        </main >
    )
}
export default EditThucTap;
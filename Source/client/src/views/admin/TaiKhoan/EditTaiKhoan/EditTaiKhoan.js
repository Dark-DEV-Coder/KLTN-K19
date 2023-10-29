
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const EditTaiKhoan = () => {
    const dulieutest = {
        MaTK: 'TK1',
        TenDangNhap: 'admin',
        MatKhau: 'admin',
        MaQuyen: 'giangvien',
        trangthai: 1,
    }
    const quyenTK = [
        {
            MaQuyen: 'admin',
            TenQuyen: 'Admin',
            trangthai: 1,
        },
        {
            MaQuyen: 'giangvien',
            TenQuyen: 'Giảng viên',
            trangthai: 1,
        },
        {
            MaQuyen: 'sinhvien',
            TenQuyen: 'Sinh Viên',
            trangthai: 1,
        },
    ]
    const [TenDangNhap, SetTenDangNhap] = useState(dulieutest.TenDangNhap)
    const [MatKhau, SetMatKhau] = useState(dulieutest.MatKhau)
    const [QuyenTK, SetQuyenTK] = useState(dulieutest.MaQuyen)
    const onChangeInputSL = (event, SetState) => {
        let changeValue = event.target.value;
        SetState(changeValue);
    }
    const onChangeSelect = (event, SetSelect) => {
        let changeValue = event.target.value;
        SetSelect(changeValue);
    }

    // check dữ liệu
    const [checkdulieuTenDN, SetCheckdulieuTenDN] = useState(true)
    const [checkdulieuMatKhau, SetCheckdulieuMatKhau] = useState(true)
    const checkdulieu = (value, SetDuLieu) => {
        value === '' ? SetDuLieu(false) : SetDuLieu(true)
    }

    const taikhoan = useParams();
    return (
        <>
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
                                <Link className="active" >Tài khoản</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link className="active" >{taikhoan.MaTK}</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <form className="form-new">
                    <div className="container-edit">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="inputTK" htmlFor="inputTenDN">Tên đăng nhập</label>
                                <input type="text" className="form-control" id="inputTenDN" value={TenDangNhap} onChange={(event) => onChangeInputSL(event, SetTenDangNhap)} onBlur={() => checkdulieu(TenDangNhap, SetCheckdulieuTenDN)} />
                                <div className="invalid-feedback" style={{ display: checkdulieuTenDN ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="inputTK" htmlFor="inputTenGV">Mật khẩu</label>
                                <input type="text" className="form-control" id="inputTenDN" value={MatKhau} onChange={(event) => onChangeInputSL(event, SetMatKhau)} onBlur={() => checkdulieu(MatKhau, SetCheckdulieuMatKhau)} />
                                <div className="invalid-feedback" style={{ display: checkdulieuMatKhau ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                            </div>
                        </div>
                        <div className="form-row" >
                            <div className="form-group col-md-12">
                                <label className="inputDT" htmlFor="inputTrangthai">Quyền tài khoản </label>
                                <select defaultValue={QuyenTK} id="inputTrangthai" className="form-control" onChange={(event) => onChangeSelect(event, SetQuyenTK)} >
                                    {quyenTK && quyenTK.length > 0 &&
                                        quyenTK.map((item, index) => {
                                            return (
                                                <option value={item.MaQuyen} key={item.MaQuyen}>{item.TenQuyen}</option>
                                            )
                                        })
                                    }

                                </select>
                            </div>

                        </div>
                        <button className="btn" type="submit" style={{ marginTop: '2rem' }}>Submit form</button>
                    </div>
                </form>


            </main >
        </>
    )
}
export default EditTaiKhoan;
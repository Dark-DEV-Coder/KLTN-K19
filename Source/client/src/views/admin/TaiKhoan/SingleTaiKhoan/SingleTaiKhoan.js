
import "./SingleTaiKhoan.scss"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const SingleTaiKhoan = () => {
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
    const taikhoan = useParams();
    return (
        <>
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
                                <input type="text" className="form-control" id="inputTenDN" value={dulieutest.TenDangNhap} disabled />
                            </div>
                            <div className="form-group col-md-6">
                                <label className="inputTK" htmlFor="inputTenGV">Mật khẩu</label>
                                <input type="text" className="form-control" id="inputTenDN" value={dulieutest.MatKhau} disabled />
                            </div>
                        </div>
                        <div className="form-row" >
                            <div className="form-group col-md-12">
                                <label className="inputDT" htmlFor="inputTrangthai">Quyền tài khoản </label>
                                <select defaultValue={dulieutest.MaQuyen} id="inputTrangthai" className="form-control" disabled >
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
                    </div>
                </form>


            </main >
        </>
    )
}
export default SingleTaiKhoan;
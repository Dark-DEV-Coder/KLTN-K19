
import "./SingleQuyenTaiKhoan.scss"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const SingleTaiKhoan = () => {
    const dulieutest = {
        MaQuyen: 'admin',
        TenQuyen: 'admin',
        trangthai: 1,
    }
    const chucnangcuaTK = [
        { MaCN: 'khoaluan', TenChucNang: 'Khóa luận' },
        { MaCN: 'thuctap', TenChucNang: 'Thực tập' },
        { MaCN: 'totnghiep', TenChucNang: 'Tốt nghiệp' },
        { MaCN: 'sinhvien', TenChucNang: 'Sinh viên' },
    ]

    const listchucnang = [
        { MaCN: 'home', TenChucNang: 'Dashboard', },
        { MaCN: 'dkichuyennganh', TenChucNang: 'Đăng ký chuyên ngành' },
        { MaCN: 'khoaluan', TenChucNang: 'Khóa luận' },
        { MaCN: 'thuctap', TenChucNang: 'Thực tập' },
        { MaCN: 'totnghiep', TenChucNang: 'Tốt nghiệp' },
        { MaCN: 'canhbaohoctap', TenChucNang: 'Cảnh báo' },
        { MaCN: 'giangvien', TenChucNang: 'Giảng viên' },
        { MaCN: 'sinhvien', TenChucNang: 'Sinh viên' },
        { MaCN: 'nganhhoc', TenChucNang: 'Ngành' },
        { MaCN: 'chuyennganh', TenChucNang: 'Chuyên ngành' },
        { MaCN: 'taikhoan', TenChucNang: 'Tài khoản' },
        { MaCN: 'chucnang', TenChucNang: 'Chức năng' },
        { MaCN: 'chat', TenChucNang: 'ChatBox' },

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
                                <Link className="active" >Quyền tài khoản</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link className="active" >{dulieutest.TenQuyen}</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <form className="form-new">
                    <div className="container-edit">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="inputTK" for="inputMaQuyen">Mã quyền</label>
                                <input type="text" className="form-control" id="inputTenDN" value={dulieutest.MaQuyen} disabled />
                            </div>
                            <div className="form-group col-md-6">
                                <label className="inputTK" for="inputTenQuyen">Tên Quyền</label>
                                <input type="text" className="form-control" id="inputTenDN" value={dulieutest.TenQuyen} disabled />
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label className="inputTK" for="inputTenGV">Danh sách chức năng </label>
                            </div>
                        </div>
                        <div className="form-row">
                            {listchucnang && listchucnang.length > 0 &&
                                listchucnang.map((item, index) => {

                                    return (
                                        <div className="form-check form-check-inline">
                                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value={item.MaCN} defaultChecked={chucnangcuaTK.filter(item2 => item2.MaCN == item.MaCN).length > 0 ? true : false} disabled />
                                            <label className="inputTKK" for="inlineCheckbox1">{item.TenChucNang}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                    </div>
                </form>


            </main >
        </>
    )
}
export default SingleTaiKhoan;
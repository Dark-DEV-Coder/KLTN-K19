
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const EditTaiKhoan = () => {
    const dulieutest = {
        MaTK: 'TK1',
        TenDangNhap: 'admin',
        MatKhau: 'admin',
        trangthai: 1,
    }

    const chucnangcuaTK = [
        { MaCN: 'khoaluan', TenChucNang: 'Khóa luận' },
        { MaCN: 'thuctap', TenChucNang: 'Thực tập' },
        { MaCN: 'totnghiep', TenChucNang: 'Tốt nghiệp' },
        { MaCN: 'sinhvien', TenChucNang: 'Sinh viên' },
    ]
    const [TenDangNhap, SetTenDangNhap] = useState(dulieutest.TenDangNhap)
    const [MatKhau, SetMatKhau] = useState(dulieutest.MatKhau)

    const [CNTaiKhoan, SetCNTaiKhoan] = useState(chucnangcuaTK)
    const onChangeInputSL = (event, SetState) => {
        let changeValue = event.target.value;
        SetState(changeValue);
    }

    const onChangeChucNang = (chucnang) => {
        let current = CNTaiKhoan;
        let check = current.filter(item => item.MaCN === chucnang.MaCN).length;
        check === 1 ? current = current.filter(item => item.MaCN !== chucnang.MaCN) : current = [...current, chucnang]
        SetCNTaiKhoan(current)
    }

    // check dữ liệu
    const [checkdulieuTenDN, SetCheckdulieuTenDN] = useState(true)
    const [checkdulieuMatKhau, SetCheckdulieuMatKhau] = useState(true)
    const checkdulieu = (value, SetDuLieu) => {
        value === '' ? SetDuLieu(false) : SetDuLieu(true)
    }



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
                                <label className="inputTK" for="inputTenDN">Tên đăng nhập</label>
                                <input type="text" className="form-control" id="inputTenDN" value={TenDangNhap} onChange={(event) => onChangeInputSL(event, SetTenDangNhap)} onBlur={() => checkdulieu(TenDangNhap, SetCheckdulieuTenDN)} />
                                <div className="invalid-feedback" style={{ display: checkdulieuTenDN ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="inputTK" for="inputTenGV">Mật khẩu</label>
                                <input type="text" className="form-control" id="inputTenDN" value={MatKhau} onChange={(event) => onChangeInputSL(event, SetMatKhau)} onBlur={() => checkdulieu(MatKhau, SetCheckdulieuMatKhau)} />
                                <div className="invalid-feedback" style={{ display: checkdulieuMatKhau ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label className="inputTK" for="inputTenGV">Danh sách chức năng của tài khoản</label>
                            </div>
                        </div>
                        <div className="form-row">
                            {listchucnang && listchucnang.length > 0 &&
                                listchucnang.map((item, index) => {

                                    return (
                                        <div className="form-check form-check-inline" key={item.MaCN}>
                                            <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value={item.MaCN} defaultChecked={chucnangcuaTK.filter(item2 => item2.MaCN == item.MaCN).length > 0 ? true : false} onClick={(event) => onChangeChucNang(item)} />
                                            <label className="inputTKK" for="inlineCheckbox1">{item.TenChucNang}</label>
                                        </div>
                                    )
                                })
                            }
                        </div>
                        <button className="btn" type="submit" style={{ marginTop: '2rem' }}>Submit form</button>
                    </div>
                </form>


            </main >
        </>
    )
}
export default EditTaiKhoan;
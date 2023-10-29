
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const EditTaiKhoan = () => {
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

    const [MaQuyen, SetMaQuyen] = useState(dulieutest.MaQuyen)
    const [TenQuyen, SetTenQuyen] = useState(dulieutest.TenQuyen)
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
    const [checkdulieuMaQuyen, SetCheckdulieuMaQuyen] = useState(true)
    const [checkdulieuTenQuyen, SetCheckdulieuTenQuyen] = useState(true)
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
                                <input type="text" className="form-control" id="inputTenDN" value={MaQuyen} onChange={(event) => onChangeInputSL(event, SetMaQuyen)} onBlur={() => checkdulieu(MaQuyen, SetCheckdulieuMaQuyen)} />
                                <div className="invalid-feedback" style={{ display: checkdulieuMaQuyen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="inputTK" for="inputTenQuyen">Tên quyền</label>
                                <input type="text" className="form-control" id="inputTenDN" value={TenQuyen} onChange={(event) => onChangeInputSL(event, SetTenQuyen)} onBlur={() => checkdulieu(TenQuyen, SetCheckdulieuTenQuyen)} />
                                <div className="invalid-feedback" style={{ display: checkdulieuTenQuyen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
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

import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./EditQuyenTaiKhoan.scss"
import { fetchAllChucNang } from "../../GetData"
const EditQuyenTaiKhoan = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    const [listchucnang, SetListchucnang] = useState([]);
    // component didmount
    useEffect(() => {
        getListChucNang();
    }, []);

    const getListChucNang = async () => {
        const headers = { 'x-access-token': accessToken };
        let res = await fetchAllChucNang(headers);
        if (res && res.data && res.data.DanhSach) {
            SetListchucnang(res.data.DanhSach)
        }
    }


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
                                <label className="inputTK" htmlFor="inputMaQuyen">Mã quyền</label>
                                <input type="text" className="form-control" id="inputTenDN" value={MaQuyen} onChange={(event) => onChangeInputSL(event, SetMaQuyen)} onBlur={() => checkdulieu(MaQuyen, SetCheckdulieuMaQuyen)} />
                                <div className="invalid-feedback" style={{ display: checkdulieuMaQuyen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="inputTK" htmlFor="inputTenQuyen">Tên quyền</label>
                                <input type="text" className="form-control" id="inputTenDN" value={TenQuyen} onChange={(event) => onChangeInputSL(event, SetTenQuyen)} onBlur={() => checkdulieu(TenQuyen, SetCheckdulieuTenQuyen)} />
                                <div className="invalid-feedback" style={{ display: checkdulieuTenQuyen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label className="inputTK" htmlFor="inputTenGV">Danh sách chức năng của tài khoản</label>
                            </div>
                        </div>
                        <div className="form-row">
                            {/* chạy map */}
                            {listchucnang && listchucnang.length > 0 &&
                                listchucnang.map((item, index) => {
                                    return (
                                        <div key={item.MaCN} >
                                            <div className="form-check form-check-inline" key={item.MaCN}>
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value={item.MaCN} defaultChecked={chucnangcuaTK.filter(item2 => item2.MaCN == item.MaCN).length > 0 ? true : false} onClick={(event) => onChangeChucNang(item)} />
                                                <label className="inputTKK label-TCN" htmlFor="inlineCheckbox1">{item.TenChucNang}</label>
                                            </div>
                                            <div className="div-CN-con">
                                                <div className="form-check them">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Thêm,Sửa,Xóa" />
                                                    <label className="inputTKK" htmlFor="inlineCheckbox1">Thêm, Sửa, Xóa</label>
                                                </div>
                                                <div className="form-check sua">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Xem danh sách" />
                                                    <label className="inputTKK" htmlFor="inlineCheckbox1">Xem danh sách</label>
                                                </div>
                                                {/* <div className="form-check xoa">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Xóa" />
                                                    <label className="inputTKK" htmlFor="inlineCheckbox1">Xóa</label>
                                                </div>
                                                <div className="form-check xem-ds">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Xem danh sách" />
                                                    <label className="inputTKK" htmlFor="inlineCheckbox1">Xem danh sách</label>
                                                </div> */}
                                            </div>
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
export default EditQuyenTaiKhoan;

import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import "./EditQuyenTaiKhoan.scss"
import { fetchDetailQuyenTK, fetchAllChucNang } from "../../GetData"
import { toast } from "react-toastify";
const EditQuyenTaiKhoan = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    let navigate = useNavigate();
    const quyenTK = useParams();
    const [maquyen, setMaquyen] = useState("")
    const [tenquyen, setTenquyen] = useState("")
    const [listchucnangTK, setListchucnangTK] = useState([]);
    const [listchucnang, setListchucnang] = useState([]);
    // component didmount
    useEffect(() => {
        getListChucNang();
        getDetailQuyenTK();
    }, []);

    const getListChucNang = async () => {
        const headers = { 'x-access-token': accessToken };
        let res = await fetchAllChucNang(headers);
        if (res && res.data && res.data.DanhSach) {
            setListchucnang(res.data.DanhSach)
        }
    }
    const getDetailQuyenTK = async () => {
        const headers = { 'x-access-token': accessToken };
        let res = await fetchDetailQuyenTK(headers, quyenTK.MaQTK);
        if (res && res.data) {
            setMaquyen(res.data.MaQTK)
            setTenquyen(res.data.TenQuyenTK)
            setListchucnangTK(res.data.ChucNang)
        }
    }
    const getCheckChucNang = (maquyen) => {
        const check = listchucnangTK.filter(item2 => item2.MaCN.MaCN === maquyen).length;
        return check
    }

    const onChangeInputSL = (event, SetState) => {
        let changeValue = event.target.value;
        SetState(changeValue);
    }

    const onChangeChucNang = (maquyen) => {
        let current = listchucnangTK;
        let check = current.filter(item => item.MaCN === maquyen).length;
        check === 1 ? current = current.filter(item => item.MaCN !== maquyen) : current = [...current, maquyen]
        setListchucnangTK(current)
    }

    // check dữ liệu
    const [checkdulieuMaQuyen, SetCheckdulieuMaQuyen] = useState(true)
    const [checkdulieuTenQuyen, SetCheckdulieuTenQuyen] = useState(true)
    const checkdulieu = (value, SetDuLieu) => {
        value === '' ? SetDuLieu(false) : SetDuLieu(true)
    }

    //
    const [hidden_DKCN, setHidden_DKCN] = useState(false)

    const onHidden = (value, SetHidden) => {
        let current = listchucnangTK;
        // console.log(current)
        let check = current.filter(item => item.MaCN.MaCN === value).length;
        // console.log(check)
        check === 1 ? SetHidden(true) : SetHidden(false)
    }
    const offHidden = (SetHidden) => {
        SetHidden(false)
    }

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
                                <Link className="active" >{quyenTK.MaQTK}</Link>
                            </li>
                        </ul>
                    </div>
                </div>

                <form className="form-new">
                    <div className="container-edit">
                        <div className="form-row">
                            <div className="form-group col-md-6">
                                <label className="inputTK" htmlFor="inputMaQuyen">Mã quyền</label>
                                <input type="text" className="form-control" id="inputTenDN" value={maquyen} onChange={(event) => onChangeInputSL(event, setMaquyen)} onBlur={() => checkdulieu(maquyen, SetCheckdulieuMaQuyen)} />
                                <div className="invalid-feedback" style={{ display: checkdulieuMaQuyen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                            </div>
                            <div className="form-group col-md-6">
                                <label className="inputTK" htmlFor="inputTenQuyen">Tên quyền</label>
                                <input type="text" className="form-control" id="inputTenDN" value={tenquyen} onChange={(event) => onChangeInputSL(event, setTenquyen)} onBlur={() => checkdulieu(tenquyen, SetCheckdulieuTenQuyen)} />
                                <div className="invalid-feedback" style={{ display: checkdulieuTenQuyen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                            </div>
                        </div>
                        <div className="form-row">
                            <div className="form-group col-md-12">
                                <label className="inputTK" htmlFor="inputTenGV">Danh sách chức năng của tài khoản</label>
                            </div>
                        </div>
                        <div className="form-row">
                            <div >
                                <div className="form-check form-check-inline" >
                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="dkychuyennganh" defaultChecked={getCheckChucNang("dkychuyennganh") === 1 ? true : false} onClick={() => onHidden("dkychuyennganh", setHidden_DKCN)} onBlur={() => offHidden(setHidden_DKCN)} />
                                    <label className="inputTKK label-TCN" htmlFor="inlineCheckbox1">Đăng ký chuyên ngành</label>
                                </div>
                                <div className="div-CN-con" style={{ display: hidden_DKCN ? 'block' : 'none' }}>
                                    <div className="form-check them">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Thêm,Sửa,Xóa" />
                                        <label className="inputTKK" htmlFor="inlineCheckbox1">Thêm, Sửa, Xóa</label>
                                    </div>
                                    <div className="form-check sua">
                                        <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Xem danh sách" />
                                        <label className="inputTKK" htmlFor="inlineCheckbox1">Xem danh sách</label>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className="btn" type="submit" style={{ marginTop: '2rem' }}>Submit form</button>
                    </div>
                </form>


            </main >
        </>
    )
}
export default EditQuyenTaiKhoan;
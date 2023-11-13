
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
    const [listmachucnang, setListmachucnang] = useState([]);

    const [defaultChecked, setDefaultChecked] = useState(false)
    // component didmount
    useEffect(() => {
        getDetailQuyenTK();
        getListChucNang();
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
            let current = [];
            res.data.ChucNang.map((item, index) => {
                current = [...current, item.MaCN.MaCN]
            })
            setListmachucnang(current)
        }
    }

    const onChangeInputSL = (event, SetState) => {
        let changeValue = event.target.value;
        SetState(changeValue);
    }

    const onChangeChucNang = (item2) => {
        let current = listchucnangTK;
        let check = current.filter(item => item.MaCN.MaCN === item2.MaCN).length;
        check === 1 ? current = current.filter(item => item.MaCN.MaCN !== item2.MaCN) : current = [...current, item2]
        setListchucnangTK(current)
    }

    // check dữ liệu
    const [checkdulieuMaQuyen, SetCheckdulieuMaQuyen] = useState(true)
    const [checkdulieuTenQuyen, SetCheckdulieuTenQuyen] = useState(true)
    const checkdulieu = (value, SetDuLieu) => {
        value === '' ? SetDuLieu(false) : SetDuLieu(true)
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
                            {/* chạy map */}
                            {listchucnang && listchucnang.length > 0 &&
                                listchucnang.map((item, index) => {
                                    return (
                                        <div key={item.MaCN} >
                                            <div className="form-check form-check-inline" key={item.MaCN}>
                                                <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value={item.MaCN} defaultChecked={listmachucnang.filter(item2 => item2 === item.MaCN).length > 0 ? true : false} onClick={(event) => onChangeChucNang(item)} />
                                                <label className="inputTKK label-TCN" htmlFor="inlineCheckbox1">{item.TenChucNang}</label>
                                            </div>
                                            {/* <div className="div-CN-con">
                                                <div className="form-check them">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Thêm,Sửa,Xóa" />
                                                    <label className="inputTKK" htmlFor="inlineCheckbox1">Thêm, Sửa, Xóa</label>
                                                </div>
                                                <div className="form-check sua">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Xem danh sách" />
                                                    <label className="inputTKK" htmlFor="inlineCheckbox1">Xem danh sách</label>
                                                </div> */}
                                            {/* <div className="form-check xoa">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Xóa" />
                                                    <label className="inputTKK" htmlFor="inlineCheckbox1">Xóa</label>
                                                </div>
                                                <div className="form-check xem-ds">
                                                    <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="Xem danh sách" />
                                                    <label className="inputTKK" htmlFor="inlineCheckbox1">Xem danh sách</label>
                                                </div> */}
                                            {/* </div> */}
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
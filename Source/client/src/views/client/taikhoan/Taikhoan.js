import "./Taikhoan.scss"
import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { fetchDetailSinhVien, fetchDetailGiangVien, fetchEditSinhVien } from "../GetData_client"
import { toast } from "react-toastify";
import moment from "moment";
const Taikhoan = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    let navigate = useNavigate();
    const [ThongTin, setThongTin] = useState({})
    const [suadoi, setSuadoi] = useState(true)
    const [holot, setHolot] = useState("")
    const [ten, setTen] = useState("")
    const [maso, setMaso] = useState("")
    const [lopsinhvien, setLopsinhvien] = useState("")
    const [nganh, setNganh] = useState("")
    const [chuyennganh, setChuyennganh] = useState("")
    const [email, setEmail] = useState("")
    const [sdt, setSdt] = useState("")
    // const [diachithuongtrusinhvien, setDiachithuongtrusinhvien] = useState("")
    // const [diachilienhesinhvien, setDiachilienhesinhvien] = useState("")
    const [gioitinh, setGioitinh] = useState("Nam")
    const [ngaysinh, setNgaysinh] = useState("2003-10-12")
    const [khoa, setKhoa] = useState("")

    // component didmount
    useEffect(() => {
        let thongtin = JSON.parse(localStorage.getItem("ThongTin"))
        setThongTin(thongtin)
        thongtin.ChucVu === "Sinh viên" ? getDetailSinhVien(thongtin.MaSo) : getDetailGiangVien(thongtin.MaSo)
    }, []);
    const getDetailGiangVien = async (MaSo) => {
        const headers = { 'x-access-token': accessToken };
        let res = await fetchDetailGiangVien(headers, MaSo);
        console.log("GV: ", res)
        // if (res && res.data) {
        //     setMagv(res.data.MaGV)
        //     setHogv(res.data.HoGV)
        //     setTengv(res.data.TenGV)
        //     setEmail(res.data.Email)
        //     setSdt(res.data.SoDienThoai)
        //     setGioitinh(res.data.GioiTinh)
        //     setNgaysinh(moment(res.data.NgaySinh).format("YYYY-MM-DD"))
        //     setDonvicongtac(res.data.DonViCongTac)
        //     setChuyennganh(res.data.ChuyenNganh)
        //     setTrinhdo(res.data.TrinhDo)
        //     setHinh(res.data.Hinh)
        // }
    }
    const getDetailSinhVien = async (MaSo) => {
        const headers = { 'x-access-token': accessToken };
        let res = await fetchDetailSinhVien(headers, MaSo);
        if (res && res.data) {
            setMaso(res.data.MaSV)
            setHolot(res.data.HoSV)
            setTen(res.data.TenSV)
            setEmail(res.data.Email)
            setSdt(res.data.SoDienThoai)
            setGioitinh(res.data.GioiTinh)
            setNgaysinh(moment(res.data.NgaySinh).format("YYYY-MM-DD"))
            setLopsinhvien(res.data.Lop)
            setChuyennganh(res.data.ChuyenNganh)
            setKhoa(res.data.Khoa)
            setNganh(res.data.Nganh)
        }
    }


    const onClickSuaDoi = () => {
        setSuadoi(!suadoi)
    }
    const onChangeInput = (event, setState) => {
        let changeValue = event.target.value;
        setState(changeValue);
    }

    const onChangeSelect = (event, setSelect) => {
        let changeValue = event.target.value;
        setSelect(changeValue);
    }

    const handleEdit = async () => {
        const headers = { 'x-access-token': accessToken };
        if (!holot || !ten || !email || !sdt) {
            toast.error("Vui lòng điền đầy đủ dữ liệu")
            return
        }
        const value_ngaysinh = new Date(ngaysinh)
        let res = await fetchEditSinhVien(headers, maso, holot, ten, email, sdt, gioitinh, value_ngaysinh)
        console.log(res)
        if (res.status === true) {
            toast.success(res.message)
            navigate("/taikhoan")
            return;
        }
        if (res.status === false) {
            toast.error(res.message)
            return;

        }
    }


    // check dữ liệu
    const [checkmaso, setCheckmaso] = useState(true)
    const [checkholot, setCheckholot] = useState(true)
    const [checkten, setCheckten] = useState(true)
    const [checkemail, setCheckemail] = useState(true)
    const [checksdt, setChecksdt] = useState(true)
    const [checknganh, setChecknganh] = useState(true)
    const [checkchuyennganh, setCheckchuyennganh] = useState(true)
    const [checklopsinhvien, setChecklopsinhvien] = useState(true)
    // const [checkdiachithuongtrusinhvien, setCheckdiachithuongtrusinhvien] = useState(true)
    // const [checkdiachilienhesinhvien, setCheckdiachilienhesinhvien] = useState(true)
    const [checkdulieuKhoa, setCheckdulieuKhoa] = useState(true)
    // const [checkdtlsinhvien, setCheckdtlsinhvien] = useState(true)
    const checkdulieu = (value, setDuLieu) => {
        value === '' ? setDuLieu(false) : setDuLieu(true)
    }
    // const checkdulieuSo = (value, setDuLieu) => {
    //     value == 0 ? setDuLieu(false) : setDuLieu(true)
    // }

    // const checkdulieuDetai = (setDuLieu) => {
    //     detai === '' ? setDuLieu(false) : setDuLieu(true)
    //     console.log(checkdetai)
    // }

    return (
        <div className="container-taikhoan">
            <ol className="breadcrumb" >
                <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                <li className="breadcrumb-item">Tài khoản</li>
                <li className="breadcrumb-item active">Quản lý thông tin cá nhân</li>
            </ol>
            <div className="container-tk">
                <h3>Quản lý thông tin cá nhân</h3>
                <button type="button" className="btn btn-secondary" onClick={() => onClickSuaDoi()} style={suadoi ? { display: 'block' } : { display: 'none' }}> Sửa đổi </button>
                {/* <h6 className="time-line">Thời gian đăng ký : [ 10/09/2023 - 22/10/2023 ] </h6> */}
            </div>
            {/* <h3>Điền đầy đủ thông tin sau</h3> */}
            <div className="content-dkythuctap">
                <div className="container-form">
                    <form className="form-edit">
                        <div className="container-edit">
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Mã số</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={maso} placeholder="Điền mã số sinh viên ..." onChange={(event) => onChangeInput(event, setMaso)} onBlur={() => checkdulieu(maso, setCheckmaso)} disabled={true} />
                                    <div className="invalid-feedback" style={{ display: checkmaso ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Họ lót</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={holot} placeholder="Điền họ lót ..." onChange={(event) => onChangeInput(event, setHolot)} onBlur={() => checkdulieu(holot, setCheckholot)} disabled={suadoi} />
                                    <div className="invalid-feedback" style={{ display: checkholot ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Tên</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={ten} placeholder="Điền tên ..." onChange={(event) => onChangeInput(event, setTen)} onBlur={() => checkdulieu(ten, setCheckten)} disabled={suadoi} />
                                    <div className="invalid-feedback" style={{ display: checkten ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label className="inputSV" htmlFor="inputGioitinhGV">Giới tính</label>
                                    <select value={gioitinh} onChange={(event) => onChangeSelect(event, setGioitinh)} id="inputGioitinhGV" className="form-control" disabled={suadoi}>
                                        <option value='Nam'>Nam</option>
                                        <option value='Nữ'>Nữ</option>
                                    </select>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="inputSV" htmlFor="inputNgaysinh">Ngày sinh</label>
                                    <input type="date" className="form-control" id="inputNgaysinh" value={ngaysinh} onChange={(event) => onChangeInput(event, setNgaysinh)} disabled={suadoi} />
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="inputSV" htmlFor="inputKhoa">Khóa</label>
                                    <input type="text" className="form-control" id="inputKhoa" placeholder="Điền khóa ..." value={khoa} onChange={(event) => onChangeInput(event, setKhoa)} onBlur={() => checkdulieu(khoa, setCheckdulieuKhoa)} disabled={suadoi} />
                                    <div className="invalid-feedback" style={{ display: checkdulieuKhoa ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Lớp</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={lopsinhvien} placeholder="Điền lớp ..." onChange={(event) => onChangeInput(event, setLopsinhvien)} onBlur={() => checkdulieu(lopsinhvien, setChecklopsinhvien)} disabled={true} />
                                    <div className="invalid-feedback" style={{ display: checklopsinhvien ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu</div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Chuyên ngành</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={chuyennganh} placeholder="Điền chuyên ngành ..." onChange={(event) => onChangeInput(event, setChuyennganh)} onBlur={() => checkdulieu(chuyennganh, setCheckchuyennganh)} disabled={true} />
                                    <div className="invalid-feedback" style={{ display: checkchuyennganh ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu</div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Ngành</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={nganh} placeholder="Điền ngành ..." onChange={(event) => onChangeInput(event, setNganh)} onBlur={() => checkdulieu(nganh, setChecknganh)} disabled={true} />
                                    <div className="invalid-feedback" style={{ display: checknganh ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu</div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Email</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={email} placeholder="Điền email ..." onChange={(event) => onChangeInput(event, setEmail)} onBlur={() => checkdulieu(email, setCheckemail)} disabled={suadoi} />
                                    <div className="invalid-feedback" style={{ display: checkemail ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Số điện thoại</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={sdt} placeholder="Điền số điện thoại ..." onChange={(event) => onChangeInput(event, setSdt)} onBlur={() => checkdulieu(sdt, setChecksdt)} disabled={suadoi} />
                                    <div className="invalid-feedback" style={{ display: checksdt ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                            </div>

                            {/* <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Địa chỉ thường trú</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={diachithuongtrusinhvien} placeholder="Điền địa chỉ thường trú ..." onChange={(event) => onChangeInput(event, setDiachithuongtrusinhvien)} onBlur={() => checkdulieu(diachithuongtrusinhvien, setCheckdiachithuongtrusinhvien)} disabled={suadoi} />
                                    <div className="invalid-feedback" style={{ display: checkdiachithuongtrusinhvien ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Địa chỉ liên hệ</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={diachilienhesinhvien} placeholder="Điền địa chỉ liên hệ ..." onChange={(event) => onChangeInput(event, setDiachilienhesinhvien)} onBlur={() => checkdulieu(diachilienhesinhvien, setCheckdiachilienhesinhvien)} disabled={suadoi} />
                                    <div className="invalid-feedback" style={{ display: checkdiachilienhesinhvien ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                            </div> */}
                        </div>
                        <button type="button" className="btntk btn btn-secondary" style={suadoi ? { display: 'none' } : { display: 'block' }} onClick={() => handleEdit()} >Lưu thay đổi</button>
                    </form>
                </div>
            </div >
        </div >
    )
}
export default Taikhoan
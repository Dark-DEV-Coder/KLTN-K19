import "./Doimatkhau.scss"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Doimatkhau = () => {

    const dulieutest = {
        masv: '3119560010',
        tendangnhap: '3119560010',
        matkhau: 'password',
        trangthai: 1,
    }

    const [suadoi, SetSuadoi] = useState(true)
    const [tendangnhap, SetTendangnhap] = useState(dulieutest.tendangnhap)
    const [matkhaucu, SetMatkhaucu] = useState("")
    const [matkhaumoi, SetMatkhaumoi] = useState("")
    const [xacnhanmk, SetXacnhanmk] = useState("")

    const onChangeInput = (event, SetState) => {
        let changeValue = event.target.value;
        SetState(changeValue);
    }


    // check dữ liệu
    const [checktendangnhap, SetChecktendangnhap] = useState(true)
    const [checkmatkhaucu, SetCheckmatkhaucu] = useState(true)
    const [checkmatkhaumoi, SetCheckmatkhaumoi] = useState(true)
    const [checkxacnhanmatkhau, SetCheckxacnhanmatkhau] = useState(true)
    const [checkxacnhanmatkhau2, SetCheckxacnhanmatkhau2] = useState(true)
    const checkdulieu = (value, SetDuLieu) => {
        value === '' ? SetDuLieu(false) : SetDuLieu(true)
    }
    const checkdulieumatkhau = (value, SetDuLieu, SetDuLieu2) => {
        value === '' ? SetDuLieu(false) : SetDuLieu(true)
        value === matkhaumoi ? SetDuLieu2(true) : SetDuLieu2(false)
    }

    return (
        <div className="container-taikhoan">
            <ol className="breadcrumb" >
                <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                <li className="breadcrumb-item">Tài khoản</li>
                <li className="breadcrumb-item active">Đổi mật khẩu</li>
            </ol>
            <div className="container-tk">
                <h3>Thay đổi mật khẩu</h3>
            </div>
            {/* <h3>Điền đầy đủ thông tin sau</h3> */}
            <div className="content-dkythuctap">
                <div className="container-form">
                    <form className="form-edit">
                        <div className="container-edit">
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Tên đăng nhập</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={tendangnhap} placeholder="Điền họ lót ..." onChange={(event) => onChangeInput(event, SetTendangnhap)} onBlur={() => checkdulieu(tendangnhap, SetChecktendangnhap)} disabled />
                                    <div className="invalid-feedback" style={{ display: checktendangnhap ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Mật khẩu cũ</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={matkhaucu} placeholder="Điền mật khẩu cũ ..." onChange={(event) => onChangeInput(event, SetMatkhaucu)} onBlur={() => checkdulieu(matkhaucu, SetCheckmatkhaucu)} />
                                    <div className="invalid-feedback" style={{ display: checkmatkhaucu ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Mật khẩu mới</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={matkhaumoi} placeholder="Điền mật khẩu mới ..." onChange={(event) => onChangeInput(event, SetMatkhaumoi)} onBlur={() => checkdulieu(matkhaumoi, SetCheckmatkhaumoi)} />
                                    <div className="invalid-feedback" style={{ display: checkmatkhaumoi ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu</div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Xác nhận mật khẩu mới</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={xacnhanmk} placeholder="Điền lại mật khẩu mới ..." onChange={(event) => onChangeInput(event, SetXacnhanmk)} onBlur={() => checkdulieumatkhau(xacnhanmk, SetCheckxacnhanmatkhau, SetCheckxacnhanmatkhau2)} />
                                    {/* <div className="invalid-feedback" style={{ display: checkxacnhanmatkhau ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu</div> */}
                                    <div className="invalid-feedback" style={{ display: checkxacnhanmatkhau && checkxacnhanmatkhau2 ? 'none' : 'block' }}>Dữ liệu không khớp mật khẩu mới  </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btntk btn btn-secondary" >Lưu thay đổi</button>
                    </form>
                </div>
            </div >
        </div >
    )
}
export default Doimatkhau
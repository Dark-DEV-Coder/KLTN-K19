import './Login.scss'
import Slideshow from '../Slideshow/Slideshow'
import LoginIcon from '@mui/icons-material/Login';
import Nav from '../Nav';
import Nav2 from '../sinhvien/NavSV';
import { Link } from 'react-router-dom';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { toast } from "react-toastify";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
    const [TenDangNhap, setTenDangNhap] = useState("");
    const [MatKhau, setMatKhau] = useState("");
    const [accessToken, setAccessToken] = useState("");
    const [isShowPass, setIsShowPass] = useState(false);
    const [loadingAPI, setLoadingAPI] = useState(false)
    const onChangeInputSL = (event, SetState) => {
        let changeValue = event.target.value;
        SetState(changeValue);
    }
    //check dữ liệu
    const [checkTenDangNhap, setCheckTenDangNhap] = useState(true)
    const [checkMatKhau, setCheckMatKhau] = useState(true)

    const checkdulieu = (value, SetDuLieu) => {
        value === '' ? SetDuLieu(false) : SetDuLieu(true)
    }

    const handleLogin = async () => {
        if (!TenDangNhap || !MatKhau) {
            toast.error("Dữ liệu điền chưa đủ điều kiện !")
            return
        }
        setLoadingAPI(true);
        // let res = await fetchLoginAdmin(TenDangNhap, MatKhau);
        // setAccessToken(res.data.accessToken)
        // if (res.status) {
        //     if (res.data && res.data.accessToken) {
        //         localStorage.setItem("accessToken", res.data.accessToken)
        //         localStorage.setItem("QuyenHan", res.data.ThongTin.QuyenHan.MaQTK)
        //     }
        //     OnCheckLogin();
        //     toast.success(res.message)
        //     navigate("/admin")
        //     return
        // }
        // if (!res.status) {
        //     toast.error(res.message)
        // }
        // setLoadingAPI(false)
    }
    return (
        <>
            <Slideshow />
            <div className='container-login-big' >
                <div className='container-tb-login'>
                    <LoginIcon className='icon-login' sx={{ color: '#202C45', marginLeft: '11%', fontStyle: 'bold' }} />
                    <h5>ĐĂNG NHẬP</h5>
                </div>
                <div className='container-login'>
                    <div className='login'>
                        <div className='login-left'>
                            <form>
                                <div className="form-group formsh">
                                    <label htmlFor="exampleInputEmail1">TÊN ĐĂNG NHẬP</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" value={TenDangNhap} placeholder="Điền tài khoản ..." onChange={(event) => onChangeInputSL(event, setTenDangNhap)} onBlur={() => checkdulieu(TenDangNhap, setCheckTenDangNhap)} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">MẬT KHẨU</label>
                                    <input type={isShowPass === true ? "text" : "password"} className="form-control" id="exampleInputPassword1" placeholder="Điền mật khẩu ..." value={MatKhau} onChange={(event) => onChangeInputSL(event, setMatKhau)} onBlur={() => checkdulieu(MatKhau, setCheckMatKhau)} />
                                    <div onClick={() => setIsShowPass(!isShowPass)}>
                                        {isShowPass === true ?
                                            <VisibilityIcon style={{ color: '#1E3050', position: 'absolute', right: '22%', top: '61%' }} />
                                            :
                                            <VisibilityOffIcon style={{ color: '#1E3050', position: 'absolute', right: '22%', top: '61%' }} />
                                        }

                                    </div>
                                    <div className='label-dky' >
                                        <label className='pass-mk'>
                                            <Link to="/dangky">
                                                <u>Đăng ký tài khoản</u>
                                            </Link>
                                        </label>
                                        <label className='pass-mk' style={{ marginLeft: '25%' }}>
                                            <Link to="/quenmatkhau">
                                                <u>Quên mật khẩu</u>
                                            </Link>
                                        </label>
                                    </div>
                                </div>


                                <button type="button" className={TenDangNhap && MatKhau ? "active btn2 btn-primary" : "btn2 btn-primary"} disabled={TenDangNhap && MatKhau ? false : true} onClick={() => handleLogin()}><i className="fa-solid fa-sync fa-spin"></i>{loadingAPI ? "Loading ..." : "ĐĂNG NHẬP"}</button>
                            </form>
                        </div>
                        {/* <div className='login-right'>
                            <div className='right'>
                                <h3> CHÀO MỪNG ĐẾN VỚI KHOA CÔNG NGHỆ THÔNG TIN</h3>
                            </div>
                        </div> */}
                    </div>



                </div>

            </div>


        </>
    )
}
export default Login;
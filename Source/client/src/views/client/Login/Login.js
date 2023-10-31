import './Login.scss'
import Slideshow from '../Slideshow/Slideshow'
import LoginIcon from '@mui/icons-material/Login';
import Nav from '../Nav';
import Nav2 from '../sinhvien/NavSV';
import { Link } from 'react-router-dom';
const Login = () => {

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
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="" />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputPassword1">MẬT KHẨU</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" placeholder="" />
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


                                <button type="submit" className="btn btn-primary">ĐĂNG NHẬP</button>
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
import '../../css/style.css'
import { NavLink, Link } from "react-router-dom";
const Nav2 = (props) => {
    const danhmuc = props.danhmuc;
    return (
        <section className="ftco-section">
            <nav className="navbar navbar-expand-lg navbar-dark ftco_navbar bg-dark ftco-navbar-light" id="ftco-navbar">
                <div className="container">
                    {/* <a className="navbar-brand" href="index.html">TRANG CHỦ</a> */}
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#ftco-nav" aria-controls="ftco-nav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="fa fa-bars"></span> Menu
                    </button>

                    <div style={{ justifyContent: 'space-between' }} className="collapse navbar-collapse " id="ftco-nav">
                        <ul className="navbar-nav ">

                            {/* {danhmuc && danhmuc.length > 0 &&
                                danhmuc.map((item, idex) => {
                                    return (
                                        <NavLink key={item.id} to={item.id} className={({ isActive }) => isActive ? "active nav-link nav-item cta" : 'nav-link nav-item cta'} exact="true">
                                            {item.title}
                                        </NavLink>
                                    )

                                })
                            } */}
                            {/* <li className="nav-item cta" activeClassName='active'> */}
                            <NavLink to="/" className={({ isActive }) => isActive ? "active nav-link nav-item cta" : 'nav-link nav-item cta'} exact="true">
                                TRANG CHỦ
                            </NavLink>
                            {/* </li> */}

                            <li className="nav-item dropdown dropdown1">
                                <Link className="nav-link dropdown-toggle" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">KHÓA LUẬN</Link>
                                <div className="dropdown-menu" aria-labelledby="dropdown04">
                                    <Link to="/khoaluan" className="dropdown-item" >Danh sách đề tài khóa luận</Link>
                                    <Link to="/khoaluan/dieukiendkykhoaluan" className="dropdown-item" >Điều kiện đăng ký</Link>
                                    <Link to="/khoaluan/huongdandky" className="dropdown-item" >Hướng dẫn đăng ký</Link>
                                </div>
                            </li>
                            <NavLink to="/thuctap" className={({ isActive }) => isActive ? "active nav-link nav-item cta" : 'nav-link nav-item cta'}>
                                THỰC TẬP
                            </NavLink>
                            <li className="nav-item dropdown dropdown1">
                                <Link className="nav-link dropdown-toggle" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">CHUYÊN NGÀNH</Link>
                                <div className="dropdown-menu" aria-labelledby="dropdown04">
                                    <Link to="/chuyennganh/ds-sinhvien" className="dropdown-item" >Kết quả đăng ký chuyên ngành</Link>
                                    <Link to="/chuyennganh/dieukiendkychuyennganh" className="dropdown-item" >Điều kiện đăng ký</Link>
                                    <Link to="/chuyennganh/huongdandkychuyennganh" className="dropdown-item" >Hướng dẫn đăng ký</Link>
                                </div>
                            </li>
                            {/* <NavLink to="/chuyennganh" className={({ isActive }) => isActive ? "active nav-link nav-item cta" : 'nav-link nav-item cta'}>
                                ĐĂNG KÝ CHUYÊN NGÀNH
                            </NavLink> */}
                            <NavLink to="/chatbox" className={({ isActive }) => isActive ? "active nav-link nav-item cta" : 'nav-link nav-item cta'}>
                                CHATBOX
                            </NavLink>
                            <NavLink to="/contract" className={({ isActive }) => isActive ? "active nav-link nav-item cta" : 'nav-link nav-item cta'}>
                                LIÊN HỆ
                            </NavLink>



                            {/* <li className="nav-item cta"><a href="#" className="nav-link">Menu</a></li>
                                <li className="nav-item cta"><a href="#" className="nav-link">Blog</a></li>
                                <li className="nav-item cta"><a href="#" className="nav-link">Contact</a></li>
                                <li className="nav-item cta"><a href="#" className="nav-link">Book a table</a></li> */}

                        </ul>
                        <NavLink to="/login">
                            <button type="button" className="btn btn-secondary btn-lg">ĐĂNG NHẬP</button>
                        </NavLink>




                    </div>
                </div>
            </nav>
        </section >





    )
}
export default Nav2;
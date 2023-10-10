

import { Link } from "react-router-dom";
import TableTaiKhoan from "./TableTaiKhoan";


const TaiKhoan = () => {
    return (
        <>
            <main className="main2">
                {/* <HeaderMain title={'Chuyên ngành'} /> */}
                <div className="head-title">
                    <div className="left">
                        <h1>TÀI KHOẢN</h1>
                        <ul className="breadcrumb">
                            <li>
                                <Link>Dashboard</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link className="active" >Tài khoản</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to={"/admin/taikhoan/new"} className="btn-download">
                        <i className='bx bxs-cloud-download'></i>
                        <span className="text">Create Data</span>
                    </Link>
                </div>
                <TableTaiKhoan />

            </main >
        </>
    )
}
export default TaiKhoan;
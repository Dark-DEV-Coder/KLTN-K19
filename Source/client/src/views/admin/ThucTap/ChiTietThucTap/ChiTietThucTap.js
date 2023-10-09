import "./ChiTietThucTap.scss"


import { Link } from "react-router-dom";
import TableDSCtyThucTap from "./TableDSCtyThucTap";

const ChiTietThucTap = () => {
    const dulieutest =
    {
        MaDKTT: 'DKTT1',
        Ten: 'Thực tập tốt nghiệp đợt 1 năm học 2022-2023',
        NienKhoa: '2022-2023',
        ThoiGianBD: '2022-09-15',
        ThoiGianKT: '2022-10-15',
        trangthai: 1,
    }
    return (
        <>
            <main className="main2">
                {/* <HeaderMain title={'Chuyên ngành'} /> */}
                <div className="head-title">
                    <div className="left">
                        <h1>DANH SÁCH CÔNG TY THỰC TẬP</h1>
                        <ul className="breadcrumb">
                            <li>
                                <Link>Dashboard</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link >Thực tập tốt nghiệp</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link className="active" >{dulieutest.Ten}</Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <TableDSCtyThucTap />





            </main >
        </>
    )
}
export default ChiTietThucTap;
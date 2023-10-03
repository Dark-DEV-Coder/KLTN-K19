import "./ChiTietCBHT.scss"
import { Link } from "react-router-dom";
import TableDSSVCanhBao from "./TableDSSVCanhBao";

const ChiTietCBHT = () => {
    const dulieutest =
    {
        MaCBHT: 'CBHT1',
        Ten: 'Cảnh báo học tập đợt 1 năm học 2022-2023',
        NienKhoa: '2022-2023',
        trangthai: 1,
    }
    return (
        <>
            <main className="main2">
                {/* <HeaderMain title={'Chuyên ngành'} /> */}
                <div className="head-title">
                    <div className="left">
                        <h1>THÔNG TIN CHI TIẾT</h1>
                        <ul className="breadcrumb">
                            <li>
                                <Link>Dashboard</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link >Cảnh báo học tập</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link className="active" >{dulieutest.Ten}</Link>
                            </li>
                        </ul>
                    </div>

                </div>
                <TableDSSVCanhBao />





            </main >
        </>
    )
}
export default ChiTietCBHT;
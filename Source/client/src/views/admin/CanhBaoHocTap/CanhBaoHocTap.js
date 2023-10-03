
import "./CanhBaoHocTap.scss"
import { Link } from "react-router-dom";
import TableCanhBaoHocTap from "./TableCanhBaoHocTap";
const CanhBaoHocTap = () => {
    return (
        <>
            <main className="main2">
                {/* <HeaderMain title={'Chuyên ngành'} /> */}
                <div className="head-title">
                    <div className="left">
                        <h1>CẢNH BÁO HỌC TẬP</h1>
                        <ul className="breadcrumb">
                            <li>
                                <Link>Dashboard</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link className="active" >Cảnh báo học tập</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to={"/admin/canhbaohoctap/new"} className="btn-download">
                        <i className='bx bxs-cloud-download'></i>
                        <span className="text">Create Data</span>
                    </Link>
                </div>

                <TableCanhBaoHocTap />




            </main >
        </>
    )
}
export default CanhBaoHocTap;
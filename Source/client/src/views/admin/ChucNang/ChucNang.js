
import { Link } from "react-router-dom";
import TableChucNang from "./TableChucNang";


const ChucNang = () => {
    return (
        <>
            <main className="main2">
                {/* <HeaderMain title={'Chuyên ngành'} /> */}
                <div className="head-title">
                    <div className="left">
                        <h1>CHỨC NĂNG</h1>
                        <ul className="breadcrumb">
                            <li>
                                <Link>Dashboard</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link className="active" >Chức năng</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to={"/admin/chucnang/new"} className="btn-download">
                        <i className='bx bxs-cloud-download'></i>
                        <span className="text">Create Data</span>
                    </Link>
                </div>
                <TableChucNang />

            </main >
        </>
    )
}
export default ChucNang;
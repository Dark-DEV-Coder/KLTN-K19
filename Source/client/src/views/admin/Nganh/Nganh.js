import "./Nganh.scss"
import { Link } from "react-router-dom";
import TableNganh from "./TableNganh";
import { useState, useEffect } from 'react';
import { fetchAllNganh } from "../GetData"
const Nganh = (props) => {

    const accessToken = props.accessToken;
    // get danh sach nganh
    const [listData_nganh, SetListData_nganh] = useState([]);

    // component didmount
    useEffect(() => {
        getListNganh();
    }, []);

    const getListNganh = async () => {
        const headers = { 'x-access-token': { accessToken } };
        let res = await fetchAllNganh(headers);
        if (res && res.data && res.data.DanhSach) {
            SetListData_nganh(res.data.DanhSach)
        }
    }
    return (
        <>
            <main className="main2">
                {/* <HeaderMain title={'Chuyên ngành'} /> */}
                <div className="head-title">
                    <div className="left">
                        <h1>NGÀNH</h1>
                        <ul className="breadcrumb">
                            <li>
                                <Link>Dashboard</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link className="active" >Ngành</Link>
                            </li>
                        </ul>
                    </div>
                    <Link to={"/admin/nganhhoc/new"} className="btn-download">
                        <i className='bx bxs-cloud-download'></i>
                        <span className="text">Tạo mới</span>
                    </Link>
                </div>
                <TableNganh listData_nganh={listData_nganh} accessToken={accessToken} />

            </main >
        </>
    )
}
export default Nganh;
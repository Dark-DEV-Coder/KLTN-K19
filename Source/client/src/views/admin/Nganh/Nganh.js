import "./Nganh.scss"
import { Link } from "react-router-dom";
import TableNganh from "./TableNganh";
import { useState, useEffect } from 'react';
import axios from "axios";
import { fetchAllNganh } from "./GetData"
const Nganh = () => {
    // component didmount

    // get danh sach nganh
    const [listData_nganh, SetListData_nganh] = useState([]);
    // useEffect(() => {
    //     // getListNganh();
    //     axios.get('https://hotrodaotao-api-k19-sgu.onrender.com/api/admin/nganh/DanhSachNganh').then((res) => {
    //         console.log(res);
    //     })
    // }, []);

    // const getListNganh = async () => {
    //     let res = await fetchAllNganh();
    //     console.log("check API ngành >>>", res)
    // }

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
                        <span className="text">Create Data</span>
                    </Link>
                </div>
                <TableNganh listData_nganh={listData_nganh} />

            </main >
        </>
    )
}
export default Nganh;
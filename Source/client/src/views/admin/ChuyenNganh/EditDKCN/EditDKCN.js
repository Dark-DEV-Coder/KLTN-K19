import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import "./EditDKCN.scss"
const EditDKCN = () => {
    const dulieutest = {
        madkcn: 'CN1',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        trangthai: 1,
    };

    return (
        <main className="main2">
            {/* <HeaderMain title={'Chuyên ngành'} /> */}
            <div className="head-title">
                <div className="left">
                    <h1>TÊN DKY CHUYÊN NGÀNH</h1>
                    <ul className="breadcrumb">
                        <li>
                            <Link>{dulieutest.tgbd}</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link >{dulieutest.tgkt}</Link>
                        </li>


                    </ul>
                </div>
                <a href="#" className="btn-download">
                    <i className='bx bxs-cloud-download'></i>
                    <span className="text">Export Data</span>

                </a>
            </div>

            {/* <MantineReactTable table={table} />; */}






        </main >
    )
}
export default EditDKCN;
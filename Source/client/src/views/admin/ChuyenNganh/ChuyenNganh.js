import HeaderMain from "../HeaderMain/HeaderMain";
import "./ChuyenNganh.scss"
import "./Example"
import { Link } from "react-router-dom";
import { useMemo, useState, useEffect } from 'react';
import { MantineReactTable, useMantineReactTable } from 'mantine-react-table';
import Example from "./Example";


const ChuyenNganh = () => {



    return (
        <>
            <main className="main2">
                {/* <HeaderMain title={'Chuyên ngành'} /> */}
                <div className="head-title">
                    <div className="left">
                        <h1>CHUYÊN NGÀNH</h1>
                        <ul className="breadcrumb">
                            <li>
                                <Link>Dashboard</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link className="active" >Chuyên Ngành</Link>
                            </li>
                        </ul>
                    </div>
                    <a href="#" className="btn-download">
                        <i className='bx bxs-cloud-download'></i>
                        <span className="text">Create Data</span>

                    </a>
                </div>

                {/* <MantineReactTable table={table} />; */}


                <Example />

            </main >
        </>
    )
}
export default ChuyenNganh;
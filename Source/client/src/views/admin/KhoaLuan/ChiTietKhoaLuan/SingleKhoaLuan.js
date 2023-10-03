import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useState } from "react";
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import "./SingleKhoaLuan.scss"
import TableDSDeTai from "./TableDSDeTai";
const SingleKhoaLuan = () => {

    const maKL = useParams();
    const [value, setValue] = useState('CNTT');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const nganh = [
        {
            manganhhoc: 'CNTT',
            tennganh: 'Công nghệ thông tin',
            trangthai: 1,
        },
        {
            manganhhoc: 'CNTT_CLC',
            tennganh: 'Công nghệ thông tin CLC',
            trangthai: 1,
        },
    ]
    const dulieutest = {
        makl: 'KL1',
        ten: 'Đợt đăng ký khóa luận năm học 2023-2024',
        nienkhoa: '2023-2024',
        trangthai: 1,
    };

    const data_detai = [
        {
            ten: 'Nghiên cứu và xây dựng một hệ thống khuyến nghị.',
            giangvienhuongdan: 'Phan Tấn Quốc',
            donvi: 'Khoa CNTT',
            trangthai: 1,
        },
        {
            ten: 'Phần mềm quản lý ghi chú cá nhân với tính năng nhận dạng tiếng nói',
            giangvienhuongdan: 'Nguyễn Tuấn Đăng',
            donvi: 'Khoa CNTT',
            trangthai: 1,
        },
        {
            ten: 'Xây dựng website hỗ trợ đào tạo khoa CNTT.',
            giangvienhuongdan: 'Nguyễn Thanh Sang',
            donvi: 'Khoa CNTT',
            trangthai: 1,
        },
        {
            ten: 'Xây dựng trò chơi hỗ trợ làm quen với tiếng Anh',
            giangvienhuongdan: 'Phạm Thi Vương',
            donvi: 'Viện KHDL - TTNT',
            trangthai: 1,
        },
    ]
    return (
        <main className="main2">
            <div className="head-title">
                <div className="left">
                    <h1>THÔNG TIN CHI TIẾT</h1>
                    <ul className="breadcrumb">
                        <li>
                            <Link>{maKL.makl}</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link >{dulieutest.nienkhoa}</Link>
                        </li>


                    </ul>
                </div>
                {/* <a href="#" className="btn-download">
                    <i className='bx bxs-cloud-download'></i>
                    <span className="text">Export Data</span>

                </a> */}
            </div>



            {/* TabContext */}
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">

                        {nganh && nganh.length > 0 &&
                            nganh.map((item, index) => {

                                return (
                                    <Tab label={item.tennganh} value={item.manganhhoc} key={item.manganhhoc} />
                                )
                            })}
                    </TabList>
                </Box>

                <TabPanel value="CNTT" >
                    <div className="table">
                        <div className="card4">
                            <h6 className="card-header">Danh sách đề tài</h6>
                        </div>
                        <TableDSDeTai data_detai={data_detai} />
                    </div>
                </TabPanel>
                <TabPanel value="CNTT_CLC">
                    <div className="table">
                        <div className="card4">
                            <h6 className="card-header">Danh sách đề tài</h6>
                        </div>


                    </div>
                </TabPanel>


            </TabContext>
            {/* TabContext */}





        </main >
    )
}
export default SingleKhoaLuan;
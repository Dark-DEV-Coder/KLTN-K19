import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import CardNganh from "./CardNganh";
import TableCTDKCN from "./TableCTDKCN";
import "./SingleDkiChuyenNganh.scss"
import TabContentTheoNganh from "./TabContentTheoNganh"
const SingleDkiChuyenNganh = () => {
    const data_CNTT = [
        {
            masv: '3119560010',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Hệ thống thông tin',
            trangthai: 1,
        },
        {
            masv: '3119560011',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Chưa đăng ký',
            trangthai: 1,
        },
        {
            masv: '3119560012',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Chưa đăng ký',
            trangthai: 1,
        },
        {
            masv: '3119560013',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Chưa đăng ký',
            trangthai: 1,
        },
        {
            masv: '3119560014',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
    ]
    const data_HTTT = [
        {
            masv: '3119560010',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Hệ thống thông tin',
            trangthai: 1,
        },
        {
            masv: '3119560011',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Hệ thống thông tin',
            trangthai: 1,
        },

    ]

    const data_KHMT = [
        {
            masv: '3119560010',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Khoa học máy tính',
            trangthai: 1,
        },
        {
            masv: '3119560011',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Khoa học máy tính',
            trangthai: 1,
        },
        {
            masv: '3119560011',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Khoa học máy tính',
            trangthai: 1,
        },
    ]


    const data_KTPM = [
        {
            masv: '3119560010',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560011',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
        {
            masv: '3119560012',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Kỹ thuật phần mềm',
            trangthai: 1,
        },
    ]

    const data_MMT = [
        {
            masv: '3119560010',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Mạng máy tính',
            trangthai: 1,
        },
        {
            masv: '3119560011',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Mạng máy tính',
            trangthai: 1,
        },
        {
            masv: '3119560012',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Mạng máy tính',
            trangthai: 1,
        },
    ]

    const data_LTW = [
        {
            masv: '3119560010',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Lập trình web',
            trangthai: 1,
        },
        {
            masv: '3119560011',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Lập trình web',
            trangthai: 1,
        },
        {
            masv: '3119560012',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Lập trình web',
            trangthai: 1,
        },
    ]

    const data_LTUD = [
        {
            masv: '3119560010',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Lập trình ứng dụng',
            trangthai: 1,
        },
        {
            masv: '3119560011',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Lập trình ứng dụng',
            trangthai: 1,
        },
        {
            masv: '3119560012',
            ho: 'Lê Thị Cẩm',
            ten: 'Duyên',
            diem: 2.97,
            chuyennganh: 'Lập trình ứng dụng',
            trangthai: 1,
        },
    ]

    const [value, setValue] = useState('1');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const dulieutest = {
        madkcn: 'CN1',
        nienkhoa: '2019',
        khoahoc: 'K19',
        tgbd: '01/02/2019',
        tgkt: '14/03/2019',
        trangthai: 1,
    };

    const [valueTableCNTT, setValueTableCNTT] = useState('cntt');
    const [listData, setListData] = useState(data_CNTT);
    const handleChangeCNTT = (event, newValue) => {
        setValueTableCNTT(newValue);
    };
    const handleChangeTest = (maCN) => {
        if (maCN === "cntt") {
            setListData(data_CNTT)
            return
        }
        if (maCN === "httt") {
            setListData(data_HTTT)
            return
        }
        if (maCN === "khmt") {
            setListData(data_KHMT)
            return
        }
        if (maCN === "ktpm") {
            setListData(data_KTPM)
            return
        }

        if (maCN === "mmt") {
            setListData(data_MMT)
            return
        }
    }


    const [listData_KTPM, setListData_KTPM] = useState(data_LTW);
    const [valueTableKTPM, setValueTableKTPM] = useState('ltw');
    const handleChangeKTPM = (event, newValue) => {
        setValueTableKTPM(newValue);
    };
    const handleChange_KTPM = (maCN) => {
        if (maCN === "ltw") {
            setListData_KTPM(data_LTW)
            return
        }
        if (maCN === "ltud") {
            setListData_KTPM(data_LTUD)
            return
        }
    }

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


            {/* TabContext */}
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Công nghệ thông tin" value="1" />
                        <Tab label="Kỹ thuật phần mềm" value="2" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <TabContext value={valueTableCNTT}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChangeCNTT} aria-label="lab API tabs example">
                                <Tab label="Công nghệ thông tin" value="cntt" onClick={() => handleChangeTest("cntt")} />
                                <Tab label="Hệ thống thông tin" value="httt" onClick={() => handleChangeTest("httt")} />
                                <Tab label="Khoa học máy tính" value="khmt" onClick={() => handleChangeTest("khmt")} />
                                <Tab label="Kỹ thuật phần mềm" value="ktpm" onClick={() => handleChangeTest("ktpm")} />
                                <Tab label="Mạng máy tính" value="mmt" onClick={() => handleChangeTest("mmt")} />
                            </TabList>
                        </Box>
                        <TabPanel value="cntt">
                            <div className="table">
                                <div className="card4">
                                    <h6 className="card-header">Số lượng: {listData.length}/75</h6>
                                </div>
                                <TableCTDKCN listData={listData} />

                            </div>
                        </TabPanel>
                        <TabPanel value="httt">
                            <div className="table">
                                <div className="card4">
                                    <h6 className="card-header">Số lượng: {listData.length}/75</h6>
                                </div>
                                <TableCTDKCN listData={listData} />

                            </div>
                        </TabPanel>
                        <TabPanel value="khmt">
                            <div className="table">
                                <div className="card4">
                                    <h6 className="card-header">Số lượng: {listData.length}/75</h6>
                                </div>
                                <TableCTDKCN listData={listData} />

                            </div>
                        </TabPanel>
                        <TabPanel value="ktpm">
                            <div className="table">
                                <div className="card4">
                                    <h6 className="card-header">Số lượng: {listData.length}/75</h6>
                                </div>
                                <TableCTDKCN listData={listData} />

                            </div>
                        </TabPanel>
                        <TabPanel value="mmt">
                            <div className="table">
                                <div className="card4">
                                    <h6 className="card-header">Số lượng: {listData.length}/75</h6>
                                </div>
                                <TableCTDKCN listData={listData} />
                            </div>
                        </TabPanel>

                    </TabContext>
                </TabPanel>
                <TabPanel value="2">
                    <TabContext value={valueTableKTPM}>
                        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                            <TabList onChange={handleChangeKTPM} aria-label="lab API tabs example">
                                <Tab label="Lập trình web" value="ltw" onClick={() => handleChange_KTPM("ltw")} />
                                <Tab label="Lập trình ứng dụng" value="ltud" onClick={() => handleChange_KTPM("ltud")} />
                            </TabList>
                        </Box>
                        <TabPanel value="ltw">
                            <div className="table">
                                <div className="card4">
                                    <h6 className="card-header">Số lượng: {listData_KTPM.length}/75</h6>
                                </div>
                                <TableCTDKCN listData={listData_KTPM} />

                            </div>
                        </TabPanel>
                        <TabPanel value="ltud">
                            <div className="table">
                                <div className="card4">
                                    <h6 className="card-header">Số lượng: {listData_KTPM.length}/75</h6>
                                </div>
                                <TableCTDKCN listData={listData_KTPM} />

                            </div>
                        </TabPanel>

                    </TabContext>
                </TabPanel>

            </TabContext>
            {/* TabContext */}





        </main >
    )
}
export default SingleDkiChuyenNganh;
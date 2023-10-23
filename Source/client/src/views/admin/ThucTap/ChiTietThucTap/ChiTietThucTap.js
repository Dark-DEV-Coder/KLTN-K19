import "./ChiTietThucTap.scss"
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import TableDSCtyThucTap from "./TableDSCtyThucTap";
import TableDSSinhVienThucTap from "./TableDSSinhVienThucTap";

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
    const data_ctythuctap = [
        {
            TenCongTy: 'Công ty A',
            Website: 'http:///A.com',
            SoDienThoai: '098888888',
            Email: 'A@gmail.com',
            DiaChi: '12/1,Bình Chánh, Nhà Bè, TP.Thủ Đức',
            trangthai: 1,
        },
        {
            TenCongTy: 'Công ty B',
            Website: 'http:///B.com',
            SoDienThoai: '098888888',
            Email: 'B@gmail.com',
            DiaChi: '12/1,Bình Chánh, Nhà Bè, TP.Thủ Đức',
            trangthai: 1,
        },
        {
            TenCongTy: 'Công ty C',
            Website: 'http:///C.com',
            SoDienThoai: '098888888',
            Email: 'C@gmail.com',
            DiaChi: '12/1,Bình Chánh, Nhà Bè, TP.Thủ Đức',
            trangthai: 1,
        },
        {
            TenCongTy: 'Công ty D',
            Website: 'http:///D.com',
            SoDienThoai: '098888888',
            Email: 'D@gmail.com',
            DiaChi: '12/1,Bình Chánh, Nhà Bè, TP.Thủ Đức',
            trangthai: 1,
        },
    ]


    const thuctap = useParams();
    // lấy tên rồi add tên vào breacrum

    const [value, setValue] = useState('dsSV');
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
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

                {/* Tab */}
                <TabContext value={value}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChange} aria-label="lab API tabs example">
                            <Tab label="Danh sách sinh viên" value="dsSV" />
                            <Tab label="Danh sách công ty" value="dsCTy" />
                        </TabList>
                    </Box>

                    <TabPanel value="dsSV" >
                        <div className="table">
                            <div className="card4">
                                <h6 className="card-header">Danh sách sinh viên tham gia thực tập</h6>
                            </div>
                            <TableDSSinhVienThucTap />

                        </div>
                    </TabPanel>
                    <TabPanel value="dsCTy">
                        <div className="table">
                            <div className="card4">
                                <h6 className="card-header">Danh sách công ty thực tập</h6>
                            </div>
                            <TableDSCtyThucTap listDSCty={data_ctythuctap} />

                        </div>
                    </TabPanel>


                </TabContext>





            </main >
        </>
    )
}
export default ChiTietThucTap;
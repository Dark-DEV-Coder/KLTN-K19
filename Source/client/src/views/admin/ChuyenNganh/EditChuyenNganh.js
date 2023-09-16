import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import FormControl from '@mui/material/FormControl';
import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
const EditChuyenNganh = () => {
    const [value, setValue] = React.useState('1');

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

            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList onChange={handleChange} aria-label="lab API tabs example">
                        <Tab label="Item One" value="1" />
                        <Tab label="Item Two" value="2" />
                        <Tab label="Item Three" value="3" />
                    </TabList>
                </Box>
                <TabPanel value="1">Item One</TabPanel>
                <TabPanel value="2">Item Two</TabPanel>
                <TabPanel value="3">Item Three</TabPanel>
            </TabContext>

        </main >
    )
}
export default EditChuyenNganh;
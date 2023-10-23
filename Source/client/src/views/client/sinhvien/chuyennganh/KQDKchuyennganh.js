import "./KQDKchuyennganh.scss"
import { Link } from "react-router-dom";
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import { useEffect, useState } from "react";
import TableDSSV from "./TableDSSV";
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { data_CNKTPM, data_CNCNTT } from "../../data"
const KQDKchuyennganh = () => {

    const [valueTableCNTT, setValueTableCNTT] = useState('cntt');
    const [listData, setListData] = useState(data_CNCNTT);
    const handleChangeCNTT = (event, newValue) => {
        setValueTableCNTT(newValue);
    };
    const handleChangeListData = (maCN) => {
        if (maCN === "cntt") {
            setListData(data_CNCNTT)
            return
        }
        if (maCN === "ktpm") {
            setListData(data_CNKTPM)
            return
        }
    }
    return (
        <div className="container-chuyennganh">
            <ol className="breadcrumb" >
                <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                <li className="breadcrumb-item">Chuyên ngành</li>
                <li className="breadcrumb-item active">Kết quả đăng ký chuyên ngành</li>
            </ol>
            <div className="container-tb-update">
                <h3>Đăng ký chuyên ngành kỳ năm học 2023-2024</h3>
                <h6>Ngày cập nhật : 10/09/2023</h6>
                <h6 className="time-line">Thời gian đăng ký : [ 10/09/2023 - 22/10/2023 ] </h6>
            </div>
            <div className="container-dky">
                <h5>Danh sách được công bố</h5>
            </div>

            <div className="content-table">
                <TabContext value={valueTableCNTT}>
                    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                        <TabList onChange={handleChangeCNTT} aria-label="lab API tabs example">
                            <Tab label="Công nghệ thông tin" value="cntt" onClick={() => handleChangeListData("cntt")} />
                            <Tab label="Kỹ thuật phần mềm" value="ktpm" onClick={() => handleChangeListData("ktpm")} />
                        </TabList>
                    </Box>

                    <TabPanel value="cntt">
                        <div className="table">
                            <div className="card4">
                                <h6 className="card-header">Số lượng: {data_CNCNTT.length}</h6>
                            </div>
                            <TableDSSV listData={data_CNCNTT} />
                        </div>
                    </TabPanel>

                    <TabPanel value="ktpm">
                        <div className="table">
                            <div className="card4">
                                <h6 className="card-header">Số lượng: {data_CNKTPM.length}</h6>
                            </div>
                            <TableDSSV listData={data_CNKTPM} />
                        </div>
                    </TabPanel>

                </TabContext>

            </div>
        </div>
    )
}
export default KQDKchuyennganh
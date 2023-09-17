import { Title } from "@mui/icons-material";
import {
    Routes,
    Route,
} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard"
import Tongquan from "./Tongquan/Tongquan";
import { useEffect, useState } from "react";
import Nav from "./Nav/Nav";
import "./Admin.scss"
import ChuyenNganh from "./ChuyenNganh/ChuyenNganh";
import SingleChuyenNganh from "./ChuyenNganh/ChiTietDKCN/SingleChuyenNganh";
import EditDKCN from "./ChuyenNganh/EditDKCN/EditDKCN";
const Admin = () => {
    const [hiddenDB, setHiddenDB] = useState(false);
    const [switchmode, setSwitchmode] = useState(false);
    const changleHidden = () => {
        setHiddenDB(!hiddenDB);
    }
    const changleSwitchMode = () => {
        setSwitchmode(!switchmode);
    }
    return (
        <>
            <div className={switchmode ? "dark" : ""}>
                <Dashboard hiddenDB={hiddenDB} />
                <section id="content">
                    <Nav changleHidden={changleHidden} changleSwitchMode={changleSwitchMode} />
                    <Routes >
                        <Route path="/admin" exact>
                            <Route path='' element={<Tongquan />} exact></Route>
                            <Route path='chuyennganh'  >
                                <Route index element={<ChuyenNganh />}></Route>
                                <Route path="new"></Route>
                                <Route path="single/:madkcn" element={<SingleChuyenNganh />}></Route>
                                <Route path="edit/:madkcn" element={<EditDKCN />}></Route>
                            </Route>
                        </Route>

                    </Routes >
                </section>

            </div >




        </>
    )
}

export default Admin;
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
                            <Route path='chuyennganh' element={<ChuyenNganh />} ></Route>
                        </Route>

                    </Routes >
                </section>

            </div>




        </>
    )
}

export default Admin;
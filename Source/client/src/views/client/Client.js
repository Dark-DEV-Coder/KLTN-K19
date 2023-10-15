import Error from "../error/Error";
import Footer from "./Footer/Footer";
import Login from "./Login/Login";
import Nav from "./Nav";
import Nav2 from "./Nav2";
import TrangChu from "./TrangChu";
import {

    Routes,
    Route,

} from "react-router-dom";
import KhoaLuan from "./sinhvien/khoaluan/KhoaLuan";
import DieuKien from "./sinhvien/khoaluan/DieuKien/DieuKien";
import HuongDanDK from "./sinhvien/khoaluan/HuongDanDK/HuongDanDK";
import DangKy from "./sinhvien/khoaluan/DangKy/DangKy";
import KQDKchuyennganh from "./sinhvien/chuyennganh/KQDKchuyennganh";
import DieuKienDK_CN from "./sinhvien/chuyennganh/DieuKien/DieuKienDK_CN"
import HuongDanDK_CN from "./sinhvien/chuyennganh/HuongDanDK/HuongDanDK_CN"
const Client = () => {
    const aaa = true
    const danhmucSV = [
        { id: '/', title: 'TRANG CHỦ' },
        { id: 'thuctap', title: 'THỰC TẬP' },
        { id: 'khoaluan', title: 'KHÓA LUẬN' },
        { id: 'chuyennganh', title: 'ĐĂNG KÝ CHUYÊN NGÀNH' },
        // { id: 'canhbaohoctap', title: 'CẢNH BÁO HỌC TẬP' },
        { id: 'chat', title: 'CHATBOX' },
    ]

    const danhmucGV = [
        { id: '/', title: 'TRANG CHỦ' },
        { id: 'thuctap', title: 'THỰC TẬP' },
        { id: 'khoaluan', title: 'KHÓA LUẬN' },
        { id: 'chuyennganh', title: 'CHUYÊN NGÀNH' },
        { id: 'totnghiep', title: 'TỐT NGHIỆP' },
        { id: 'canhbaohoctap', title: 'CẢNH BÁO HỌC TẬP' },

    ]
    return (
        <div>
            {aaa === true ? <div>
                <Nav />
                <Nav2 danhmuc={danhmucSV} />
                <Routes >
                    <Route path="/">
                        <Route index path='' element={<TrangChu />} exact></Route>
                        <Route path='login' element={<Login />}></Route>
                        <Route path='thuctap' element={<Error />} ></Route>
                        <Route path='khoaluan' >
                            <Route index element={<KhoaLuan />}></Route>
                            <Route path='dky-khoaluan' element={<DangKy />}></Route >
                            <Route path='dieukiendkykhoaluan' element={<DieuKien />}></Route>
                            <Route path='huongdandky' element={<HuongDanDK />}></Route>
                        </Route>
                        <Route path='chuyennganh' >
                            <Route index element={<Error />}></Route>
                            <Route path='ds-sinhvien' element={<KQDKchuyennganh />}></Route >
                            <Route path='dieukiendkychuyennganh' element={<DieuKienDK_CN />}></Route>
                            <Route path='huongdandkychuyennganh' element={<HuongDanDK_CN />}></Route>
                        </Route>

                        <Route path='chatbox'></Route>
                        <Route path='*' element={<Error />}></Route>
                    </Route>
                </Routes >
                <Footer />
            </div> :
                <Nav />
            }

        </div>

    )
}
export default Client;
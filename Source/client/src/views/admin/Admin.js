import { Title } from "@mui/icons-material";
import {
    Routes,
    Route,
    useParams,
    Navigate
} from "react-router-dom";

import Dashboard from "./Dashboard/Dashboard"
import Tongquan from "./Tongquan/Tongquan";
import { useEffect, useState } from "react";
import Nav from "./Nav/Nav";
import "./Admin.scss"
import DkiChuyenNganh from "./DKiChuyenNganh/DKiChuyenNganh";
import SingleDkiChuyenNganh from "./DKiChuyenNganh/ChiTietDKCN/SingleDkiChuyenNganh";
import EditDKCN from "./DKiChuyenNganh/EditDKCN/EditDKCN";
import AddDKCN from "./DKiChuyenNganh/ThemDKCN/AddDKCN";
import GiangVien from "./GiangVien/GiangVien";
import EditGiangVien from "./GiangVien/EditGiangVien/EditGiangVien";
import AddGiangVien from "./GiangVien/ThemGiangVien/AddGiangVien";
import SinhVien from "./SinhVien/SinhVien";
import AddSinhVien from "./SinhVien/ThemSinhVien/AddSinhVien";
import EditSinhVien from "./SinhVien/EditSinhVien/EditSinhVien";
import Nganh from "./Nganh/Nganh";
import EditNganh from "./Nganh/EditNganh/EditNganh";
import AddNganh from "./Nganh/ThemNganh/AddNganh";
import ChuyenNganh from "./ChuyenNganh/ChuyenNganh";
import EditChuyenNganh from "./ChuyenNganh/EditChuyenNganh/EditChuyenNganh";
import AddChuyenNganh from "./ChuyenNganh/ThemChuyenNganh/AddChuyenNganh";
import KhoaLuan from "./KhoaLuan/KhoaLuan";
import SingleKhoaLuan from "./KhoaLuan/ChiTietKhoaLuan/SingleKhoaLuan";
import ChiTietDeTai from "./KhoaLuan/ChiTietDeTai/ChiTietDeTai";
import EditDeTai from "./KhoaLuan/EditDeTai/EditDeTai";
import EditKhoaLuan from "./KhoaLuan/EditKhoaLuan/EditKhoaLuan";
import AddKhoaLuan from "./KhoaLuan/ThemKhoaLuan/AddKhoaLuan";
import CanhBaoHocTap from "./CanhBaoHocTap/CanhBaoHocTap";
import ChiTietCBHT from "./CanhBaoHocTap/ChiTietCBHT/ChiTietCBHT";
import EditCBHT from "./CanhBaoHocTap/EditCBHT/EditCBHT";
import AddCBHT from "./CanhBaoHocTap/ThemCBHT/AddCBHT";
import Error from "../error/Error";
import ThucTap from "./ThucTap/ThucTap";
import ChiTietThucTap from "./ThucTap/ChiTietThucTap/ChiTietThucTap";
import ViTriThucTap from "./ThucTap/DSViTriThucTap/ViTriThucTap";
import EditThucTap from "./ThucTap/EditThucTap/EditThucTap";
import AddThucTap from "./ThucTap/ThemThucTap/AddThucTap";
import EditCongTyThucTap from "./ThucTap/EditCongTyThucTap/EditCongTyThucTap";
import TaiKhoan from "./TaiKhoan/TaiKhoan";
import SingleTaiKhoan from "./TaiKhoan/SingleTaiKhoan/SingleTaiKhoan";
import EditTaiKhoan from "./TaiKhoan/EditTaiKhoan/EditTaiKhoan";
import AddTaiKhoan from "./TaiKhoan/ThemTaiKhoan/AddTaiKhoan";
import ChucNang from "./ChucNang/ChucNang";
import EditChucNang from "./ChucNang/EditChucNang/EditChucNang";
import AddChucNang from "./ChucNang/ThemChucNang/AddChucNang";
import ChiTietNganh from "./Nganh/ChiTietNganh/ChiTietNganh";
import QuyenTaiKhoan from "./QuyenTaiKhoan/QuyenTaiKhoan";
import ThemQuyenTaiKhoan from "./QuyenTaiKhoan/ThemQuyenTaiKhoan/ThemQuyenTaiKhoan";
import SingleQuyenTaiKhoan from "./QuyenTaiKhoan/SingleQuyenTaiKhoan/SingleQuyenTaiKhoan";
import EditQuyenTaiKhoan from "./QuyenTaiKhoan/EditQuyenTaiKhoan/EditQuyenTaiKhoan";
import LoginAdmin from "./Login/LoginAdmin";
const Admin = () => {

    const [hiddenDB, setHiddenDB] = useState(false);
    const [switchmode, setSwitchmode] = useState(false);
    // const [accessToken, SetAccessToken] = useState("");
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
                        {/* <Route path="/admin/"> */}
                        <Route index element={<Tongquan />}></Route>
                        <Route path='dkichuyennganh'  >
                            <Route index element={<DkiChuyenNganh />}></Route>
                            <Route path="new" element={<AddDKCN />}></Route>
                            <Route path="single/:madkcn" element={<SingleDkiChuyenNganh />}></Route>
                            <Route path="edit/:madkcn" element={<EditDKCN />}></Route>
                        </Route>
                        <Route path='khoaluan'  >
                            <Route index element={<KhoaLuan />}></Route>
                            <Route path="new" element={<AddKhoaLuan />}></Route>
                            <Route path="single/:makl" element={<SingleKhoaLuan />}></Route>
                            <Route path="edit/:makl" element={<EditKhoaLuan />}></Route>

                            <Route path="detai/:ten" element={<ChiTietDeTai />}></Route>
                            <Route path="detai/edit/:ten" element={<EditDeTai />}></Route>
                        </Route>
                        <Route path='thuctap'  >
                            <Route index element={<ThucTap />}></Route>
                            <Route path="new" element={<AddThucTap />}></Route>
                            <Route path="single/:MaDKTT" element={<ChiTietThucTap />}></Route>
                            <Route path="edit/:MaDKTT" element={<EditThucTap />}></Route>

                            <Route path="vitri/:TenCongTy" element={<ViTriThucTap />}></Route>
                            <Route path="cty/edit/:TenCongTy" element={<EditCongTyThucTap />}></Route>
                        </Route>
                        <Route path='canhbaohoctap'  >
                            <Route index element={<CanhBaoHocTap />}></Route>
                            <Route path="new" element={<AddCBHT />}></Route>
                            <Route path="single/:MaCBHT" element={<ChiTietCBHT />}></Route>
                            <Route path="edit/:MaCBHT" element={<EditCBHT />}></Route>
                        </Route>
                        <Route path='giangvien'  >
                            <Route index element={<GiangVien />}></Route>
                            <Route path="new" element={<AddGiangVien />} ></Route>
                            <Route path="edit/:magv" element={<EditGiangVien />} ></Route>
                        </Route>
                        <Route path='sinhvien'  >
                            <Route index element={<SinhVien />}></Route>
                            <Route path="new" element={<AddSinhVien />} ></Route>
                            <Route path="edit/:masv" element={<EditSinhVien />} ></Route>
                        </Route>
                        <Route path='nganhhoc'  >
                            <Route index element={<Nganh />}></Route>
                            <Route path="new" element={<AddNganh />} ></Route>
                            <Route path="single/:MaNganh" element={<ChiTietNganh />} ></Route>
                            <Route path="edit/:MaNganh" element={<EditNganh />} ></Route>
                        </Route>
                        <Route path='chuyennganh'  >
                            <Route index element={<ChuyenNganh />}></Route>
                            <Route path="new" element={<AddChuyenNganh />} ></Route>
                            <Route path="edit/:machuyennganh" element={<EditChuyenNganh />} ></Route>
                        </Route>
                        <Route path='taikhoan'  >
                            <Route index element={<TaiKhoan />}></Route>
                            <Route path="new" element={<AddTaiKhoan />} ></Route>
                            <Route path="single/:MaTK" element={<SingleTaiKhoan />} ></Route>
                            <Route path="edit/:MaTK" element={<EditTaiKhoan />} ></Route>
                        </Route>
                        <Route path='quyentaikhoan'  >
                            <Route index element={<QuyenTaiKhoan />}></Route>
                            <Route path="new" element={<ThemQuyenTaiKhoan />} ></Route>
                            <Route path="single/:MaQuyen" element={<SingleQuyenTaiKhoan />} ></Route>
                            <Route path="edit/:MaQuyen" element={<EditQuyenTaiKhoan />} ></Route>
                        </Route>
                        <Route path='chucnang'  >
                            <Route index element={<ChucNang />}></Route>
                            <Route path="new" element={<AddChucNang />} ></Route>
                            <Route path="edit/:MaCN" element={<EditChucNang />} ></Route>
                        </Route>
                        {/* <Route path='login' element={<LoginAdmin loggedIn={loggedIn} CheckLogin={() => CheckLogin()} />}></Route> */}
                        {/* </Route> */}

                    </Routes >
                </section>
            </div >
        </>
    )
}

export default Admin
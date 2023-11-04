import './App.css';
import Admin from "./views/admin/Admin"
import Client from './views/client/Client';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate
} from "react-router-dom";
import Dashboard from "./views/admin/Dashboard/Dashboard"
import Tongquan from "./views/admin/Tongquan/Tongquan";
import { useEffect, useState } from "react";
import Nav from "./views/admin/Nav/Nav";
import "./views/admin/Admin.scss"
import DkiChuyenNganh from "./views/admin/DKiChuyenNganh/DKiChuyenNganh";
import SingleDkiChuyenNganh from "./views/admin/DKiChuyenNganh/ChiTietDKCN/SingleDkiChuyenNganh";
import EditDKCN from "./views/admin/DKiChuyenNganh/EditDKCN/EditDKCN";
import AddDKCN from "./views/admin/DKiChuyenNganh/ThemDKCN/AddDKCN";
import GiangVien from "./views/admin/GiangVien/GiangVien";
import EditGiangVien from "./views/admin/GiangVien/EditGiangVien/EditGiangVien";
import AddGiangVien from "./views/admin/GiangVien/ThemGiangVien/AddGiangVien";
import SinhVien from "./views/admin/SinhVien/SinhVien";
import AddSinhVien from "./views/admin/SinhVien/ThemSinhVien/AddSinhVien";
import EditSinhVien from "./views/admin/SinhVien/EditSinhVien/EditSinhVien";
import Nganh from "./views/admin/Nganh/Nganh";
import EditNganh from "./views/admin/Nganh/EditNganh/EditNganh";
import AddNganh from "./views/admin/Nganh/ThemNganh/AddNganh";
import ChuyenNganh from "./views/admin/ChuyenNganh/ChuyenNganh";
import EditChuyenNganh from "./views/admin/ChuyenNganh/EditChuyenNganh/EditChuyenNganh";
import AddChuyenNganh from "./views/admin/ChuyenNganh/ThemChuyenNganh/AddChuyenNganh";
import KhoaLuan from "./views/admin/KhoaLuan/KhoaLuan";
import SingleKhoaLuan from "./views/admin/KhoaLuan/ChiTietKhoaLuan/SingleKhoaLuan";
import ChiTietDeTai from "./views/admin/KhoaLuan/ChiTietDeTai/ChiTietDeTai";
import EditDeTai from "./views/admin/KhoaLuan/EditDeTai/EditDeTai";
import EditKhoaLuan from "./views/admin/KhoaLuan/EditKhoaLuan/EditKhoaLuan";
import AddKhoaLuan from "./views/admin/KhoaLuan/ThemKhoaLuan/AddKhoaLuan";
import CanhBaoHocTap from "./views/admin/CanhBaoHocTap/CanhBaoHocTap";
import ChiTietCBHT from "./views/admin/CanhBaoHocTap/ChiTietCBHT/ChiTietCBHT";
import EditCBHT from "./views/admin/CanhBaoHocTap/EditCBHT/EditCBHT";
import AddCBHT from "./views/admin/CanhBaoHocTap/ThemCBHT/AddCBHT";
// import Error from "../error/Error";
import ThucTap from "./views/admin/ThucTap/ThucTap";
import ChiTietThucTap from "./views/admin/ThucTap/ChiTietThucTap/ChiTietThucTap";
import ViTriThucTap from "./views/admin/ThucTap/DSViTriThucTap/ViTriThucTap";
import EditThucTap from "./views/admin/ThucTap/EditThucTap/EditThucTap";
import AddThucTap from "./views/admin/ThucTap/ThemThucTap/AddThucTap";
import EditCongTyThucTap from "./views/admin/ThucTap/EditCongTyThucTap/EditCongTyThucTap";
import TaiKhoan from "./views/admin/TaiKhoan/TaiKhoan";
import SingleTaiKhoan from "./views/admin/TaiKhoan/SingleTaiKhoan/SingleTaiKhoan";
import EditTaiKhoan from "./views/admin/TaiKhoan/EditTaiKhoan/EditTaiKhoan";
import AddTaiKhoan from "./views/admin/TaiKhoan/ThemTaiKhoan/AddTaiKhoan";
import ChucNang from "./views/admin/ChucNang/ChucNang";
import EditChucNang from "./views/admin/ChucNang/EditChucNang/EditChucNang";
import AddChucNang from "./views/admin/ChucNang/ThemChucNang/AddChucNang";
import ChiTietNganh from "./views/admin/Nganh/ChiTietNganh/ChiTietNganh";
import QuyenTaiKhoan from "./views/admin/QuyenTaiKhoan/QuyenTaiKhoan";
import ThemQuyenTaiKhoan from "./views/admin/QuyenTaiKhoan/ThemQuyenTaiKhoan/ThemQuyenTaiKhoan";
import SingleQuyenTaiKhoan from "./views/admin/QuyenTaiKhoan/SingleQuyenTaiKhoan/SingleQuyenTaiKhoan";
import EditQuyenTaiKhoan from "./views/admin/QuyenTaiKhoan/EditQuyenTaiKhoan/EditQuyenTaiKhoan";
import LoginAdmin from "./views/admin/Login/LoginAdmin";

function App() {
  // const [catalog, setCatalog] = useState([
  //   { id: '1', title: 'Dashboard', img: 'bx bxs-dashboard', link: 'admin' },
  //   { id: '2', title: 'Khóa luận', img: 'bx bxs-shopping-bag-alt', link: 'khoaluan' },
  //   { id: '3', title: 'Thực tập', img: 'bx bxs-doughnut-chart', link: 'thuctap' },
  //   { id: '4', title: 'Cải thiện', img: 'bx bxs-message-dots', link: 'caithien' },
  //   { id: '5', title: 'Buộc thôi học', img: 'bx bxs-dashboard', link: 'thoihoc' },
  // ]);

  const [hiddenDB, setHiddenDB] = useState(false);
  const [switchmode, setSwitchmode] = useState(false);
  const [accessToken, SetAccessToken] = useState("");
  const changleHidden = () => {
    setHiddenDB(!hiddenDB);
  }
  const changleSwitchMode = () => {
    setSwitchmode(!switchmode);
  }

  const [loggedIn, setLoggedIn] = useState();
  // useEffect(() => {
  //   let token = localStorage.getItem("accessToken");
  //   console.log("Token: ", token)
  //   token ? setLoggedIn(true) : setLoggedIn(false)
  // }, [])
  const [loggedInClient, setLoggedInClient] = useState(false);
  const CheckLogin = () => {
    let token = localStorage.getItem("accessToken");
    token ? setLoggedIn(true) : setLoggedIn(false)

  }

  return (
    <BrowserRouter>
      {/* Admin */}
      <div className='App'>
        <Routes>
          <Route path='/admin/login' element={<LoginAdmin loggedIn={loggedIn} CheckLogin={() => CheckLogin()} />}></Route>
          <Route path='admin/*' element={loggedIn ?
            <Admin /> : <Navigate to="/admin/login" />}>
          </Route>
          <Route path='/*' element={<Client />}></Route>


        </Routes>


        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />

      </div>
    </BrowserRouter >
  )




}

export default App;

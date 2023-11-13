import "./ChiTietCBHT.scss"
import { Link, useNavigate } from "react-router-dom";
import TableDSSVCanhBao from "./TableDSSVCanhBao";
import { fetchDetailCanhBao, fetchEditChucNang } from "../../GetData"
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import TableDSSVCanhBao_DRL from "./TableDSSVCanhBao_DRL";
const ChiTietCBHT = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    const canhbao = useParams();
    let navigate = useNavigate();
    const [MaCBHT, setMaCBHT] = useState("")
    const [Ten, setTen] = useState("")
    const [Dot, setDot] = useState("")
    const [NienKhoa, setNienKhoa] = useState("")
    const [KieuCanhBao, setKieuCanhBao] = useState("")
    const [data_SV, setData_SV] = useState([])
    useEffect(() => {
        getDetailCanhBao();
    }, []);
    const getDetailCanhBao = async () => {
        const headers = { 'x-access-token': accessToken };
        let res = await fetchDetailCanhBao(headers, canhbao.MaCBHT);
        if (res && res.data) {
            setMaCBHT(res.data.MaCBHT)
            setTen(res.data.Ten)
            setDot(res.data.Dot)
            setNienKhoa(res.data.NienKhoa)
            setKieuCanhBao(res.data.KieuCanhBao)
            setData_SV(res.data.ThongTin)
        }
    }
    return (
        <>
            <main className="main2">
                {/* <HeaderMain title={'Chuyên ngành'} /> */}
                <div className="head-title">
                    <div className="left">
                        <h1>THÔNG TIN CHI TIẾT</h1>
                        <ul className="breadcrumb">
                            <li>
                                <Link>Dashboard</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link >Cảnh báo học tập</Link>
                            </li>
                            <li><i className='bx bx-chevron-right'></i></li>
                            <li>
                                <Link className="active" >{Ten}</Link>
                            </li>
                        </ul>
                    </div>

                </div>
                {KieuCanhBao === "Điểm học tập" ?
                    <TableDSSVCanhBao list_data={data_SV} />
                    : <TableDSSVCanhBao_DRL list_data={data_SV} />

                }






            </main >
        </>
    )
}
export default ChiTietCBHT;

import { Link, useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import * as React from 'react';
import { fetchDetailChucNang, fetchEditChucNang } from "../../GetData"
import { toast } from "react-toastify";
const EditChucNang = () => {
    const [accessToken, setAccessToken] = useState(localStorage.getItem("accessToken"));
    const chucnang = useParams();
    let navigate = useNavigate();
    const [MaCN, setMaCN] = useState("")
    const [TenChucNang, setTenChucNang] = useState("")
    const [Hinh, setHinh] = useState(null)

    useEffect(() => {
        getDetailChucNang();

    }, []);

    // const convertBase64 = (file) => {
    //     return new Promise((resolve, reject) => {
    //         const fileReader = new FileReader();
    //         fileReader.readAsDataURL(file);

    //         fileReader.onload = () => {
    //             resolve(fileReader.result);
    //         };

    //         fileReader.onerror = (error) => {
    //             reject(error);
    //         };
    //     });
    // };

    // const uploadImage = async (event) => {
    //     const files = event.target.files;
    //     if (files.length === 1) {
    //         const base64 = await convertBase64(files[0]);
    //         setHinh(base64)
    //         return;
    //     }
    // };

    const getDetailChucNang = async () => {
        const headers = { 'x-access-token': accessToken };
        let res = await fetchDetailChucNang(headers, chucnang.MaCN);
        if (res && res.data) {
            setMaCN(res.data.MaCN)
            setTenChucNang(res.data.TenChucNang)
            setHinh(res.data.Hinh)
        }
    }
    const handleEditChucNang = async () => {
        const headers = { 'x-access-token': accessToken };
        if (!TenChucNang || !Hinh) {
            toast.error("Vui lòng điền đầy đủ dữ liệu !")
            return
        }
        let value_img = new FormData();
        // value_img.TenChucNang = TenChucNang;
        value_img.append("TenChucNang", TenChucNang);
        value_img.append("Hinh", Hinh);
        console.log(value_img);

        let res = await fetchEditChucNang(headers, MaCN, value_img)
        console.log("Eror: ", res)
        if (res.status === true) {
            toast.success(res.message)
            navigate("/admin/chucnang")
            return;
        }
        if (res.status === false) {
            toast.error(res.message)
            return;
        }
    }
    const onChangeFile = (event, setSL) => {
        const img = event.target.files[0];
        img.preview = URL.createObjectURL(img)
        setSL(img)
    }

    const onChangeInputSL = (event, setSL) => {
        let changeValue = event.target.value;
        setSL(changeValue);
    }

    // check dữ liệu
    const [checkdulieuMa, setCheckdulieuMa] = useState(true)
    const [checkdulieuTen, setCheckdulieuTen] = useState(true)
    const checkdulieu = (value, setDuLieu) => {
        value === '' ? setDuLieu(false) : setDuLieu(true)
    }

    return (
        <main className="main2">
            {/* <HeaderMain title={'Chuyên ngành'} /> */}
            <div className="head-title">
                <div className="left">
                    <h1>CHỈNH SỬA</h1>
                    <ul className="breadcrumb">
                        <li>
                            <Link>Dashboard</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link>Chức năng</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >{chucnang.MaCN}</Link>
                        </li>
                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputNganh" htmlFor="inputMa">Mã chức năng</label>
                            <input type="text" className="form-control" id="inputMa" value={MaCN} disabled={true} />
                            <div className="invalid-feedback" style={{ display: checkdulieuMa ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputNganh" htmlFor="inputTen">Tên chức năng</label>
                            <input type="text" className="form-control" id="inputTen" value={TenChucNang} onChange={(event) => onChangeInputSL(event, setTenChucNang)} onBlur={() => checkdulieu(TenChucNang, setCheckdulieuTen)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuTen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>
                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <div className="custom-file">
                                <label className="inputKL" htmlFor="inputDSDT">Icon chức năng  <a href="https://boxicons.com/" target="_blank" rel="noopener" style={{ fontWeight: '400' }}>(Link lấy icon)</a></label>
                                <input type="file" accept=".png" className="form-control file" id="inputDSDT" onChange={(event) => onChangeFile(event, setHinh)} />
                            </div>
                            <div className="invalid-feedback" style={{ display: 'block' }}>Chỉ chấp nhận các file có đuôi là png, ...</div>
                        </div>
                    </div>


                    <button className="btn" type="button" onClick={() => handleEditChucNang()}>Lưu</button>
                </div>



            </form>



        </main >
    )
}
export default EditChucNang;
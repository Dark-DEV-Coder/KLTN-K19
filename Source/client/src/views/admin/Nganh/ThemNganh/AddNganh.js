import { Link } from "react-router-dom";
import { useState } from "react";
import * as React from 'react';
import "./AddNganh.scss"
import { fetchAddNganh } from "../../GetData"
import { toast } from "react-toastify";
const AddNganh = (props) => {

    const accessToken = props.accessToken;
    const [Manganh, SetMaNganh] = useState('')
    const [TenNganh, SetTenNganh] = useState('')

    const handleAddNganh = async () => {
        const headers = { 'x-access-token': { accessToken } };
        let res = await fetchAddNganh(headers, Manganh, TenNganh)
        console.log(res)
        if (res.success === true) {
            toast.success('Thêm ngành thành công !')
            return;
        }
        if (res.success === false) {
            toast.error("Thêm ngành thất bại !")
            return;
        }
    }

    const onChangeInputSL = (event, SetSL) => {
        let changeValue = event.target.value;
        SetSL(changeValue);
    }

    // check dữ liệu
    const [checkdulieuMa, SetCheckdulieuMa] = useState(true)
    const [checkdulieuTen, SetCheckdulieuTen] = useState(true)
    const checkdulieu = (value, SetDuLieu) => {
        value === '' ? SetDuLieu(false) : SetDuLieu(true)
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
                            <Link>Ngành</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >new</Link>
                        </li>


                    </ul>
                </div>

            </div>


            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputMa">Mã ngành</label>
                            <input type="text" className="form-control" id="inputMa" placeholder="Điền mã ngành ..." onChange={(event) => onChangeInputSL(event, SetMaNganh)} onBlur={() => checkdulieu(Manganh, SetCheckdulieuMa)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuMa ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputNganh" for="inputTen">Tên ngành</label>
                            <input type="text" className="form-control" id="inputTen" placeholder="Điền tên ngành ..." onChange={(event) => onChangeInputSL(event, SetTenNganh)} onBlur={() => checkdulieu(TenNganh, SetCheckdulieuTen)} />
                            <div className="invalid-feedback" style={{ display: checkdulieuTen ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                        </div>
                    </div>


                    <button className="btn" type="button" onClick={() => handleAddNganh()}>Lưu</button>
                </div>
            </form>
        </main >
    )
}
export default AddNganh;
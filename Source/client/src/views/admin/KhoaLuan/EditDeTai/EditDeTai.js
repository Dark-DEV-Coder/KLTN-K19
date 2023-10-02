
import "./EditDeTai.scss"
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
const EditDeTai = () => {

    const detai = useParams();
    const dulieutest = {
        ten: 'Phần mềm quản lý ghi chú cá nhân với tính năng nhận dạng tiếng nói',
        giangvienhuongdan: 'Nguyễn Tuấn Đăng',
        donvi: 'Khoa CNTT',
        sinhvien1: 'Cẩm Duyên 1',
        sinhvien2: 'Cẩm Duyên 2',
        trangthai: 1,
    };

    const [ten, SetTen] = useState(dulieutest.ten)
    const [giangvienhuongdan, SetGiangvienhuongdan] = useState(dulieutest.giangvienhuongdan)
    const [donvi, SetDonvi] = useState(dulieutest.donvi)
    const [mssvsinhvien1, SetMssvsinhvien1] = useState("3119560010")
    const [sinhvien1, SetSinhvien1] = useState(dulieutest.sinhvien1)
    const [emailsinhvien1, SetEmailsinhvien1] = useState("camduyen20015@gmail.com")
    const [stcsinhvien1, SetStcsinhvien1] = useState(138)
    const [dtlsinhvien1, SetDtlsinhvien1] = useState(2.99)

    const [mssvsinhvien2, SetMssvsinhvien2] = useState("3119560016")
    const [sinhvien2, SetSinhvien2] = useState(dulieutest.sinhvien2)
    const [emailsinhvien2, SetEmailsinhvien2] = useState("camduyen20019@gmail.com")
    const [stcsinhvien2, SetStcsinhvien2] = useState(138)
    const [dtlsinhvien2, SetDtlsinhvien2] = useState(2.99)


    const [trangthai, SetTrangthai] = useState(dulieutest.trangthai)

    const onChangeInput = (event, SetState) => {
        let changeValue = event.target.value;
        SetState(changeValue);
    }
    const onChangeSelect = (event, SetSelect) => {
        let changeValue = event.target.value;
        console.log("Select", changeValue)
        SetSelect(changeValue);
    }

    return (
        <main className="main2">
            <div className="head-title">
                <div className="left">
                    <h1>CHỈNH SỬA ĐỀ TÀI</h1>
                    <ul className="breadcrumb">
                        <li>
                            <Link>Dashboard</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link>Khóa luận</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link>Đề tài</Link>
                        </li>
                        <li><i className='bx bx-chevron-right'></i></li>
                        <li>
                            <Link className="active" >{detai.ten}</Link>
                        </li>
                    </ul>

                </div>


            </div>
            <form className="form-edit">
                <div className="container-edit">
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputDT" for="inputTenDT">Tên đề tài</label>
                            <input type="text" className="form-control" id="inputTenDT" value={ten} onChange={(event) => onChangeInput(event, SetTen)} />
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputDT" for="inputGiangvienhuongdan">Giảng viên hướng dẫn</label>
                            <input type="text" className="form-control" id="inputGiangvienhuongdan" value={giangvienhuongdan} onChange={(event) => onChangeInput(event, SetGiangvienhuongdan)} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="inputDT" for="inputDonviCT">Đơn vị công tác</label>
                            <input type="text" className="form-control" id="inputDonviCT" value={donvi} onChange={(event) => onChangeInput(event, SetDonvi)} />
                        </div>
                    </div>



                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label className="inputDT" for="inputSDTSV1">Mã số SV1</label>
                            <input type="text" className="form-control" id="inputSDTSV1" value={mssvsinhvien1} onChange={(event) => onChangeInput(event, SetMssvsinhvien1)} />
                        </div>
                        <div className="form-group col-md-3">
                            <label className="inputDT" for="inputSV1">Sinh viên 1</label>
                            <input type="text" className="form-control" id="inputSV1" value={sinhvien1} onChange={(event) => onChangeInput(event, SetSinhvien1)} />
                        </div>
                        <div className="form-group col-md-3">
                            <label className="inputDT" for="inputEmailSV1">Email</label>
                            <input type="text" className="form-control" id="inputEmailSV1" value={emailsinhvien1} onChange={(event) => onChangeInput(event, SetEmailsinhvien1)} />
                        </div>
                        <div className="form-group col-md-2">
                            <label className="inputDT" for="inputSTCSV1">Số tín chỉ tích lũy</label>
                            <input type="text" className="form-control" id="inputSTCSV1" value={stcsinhvien1} onChange={(event) => onChangeInput(event, SetStcsinhvien1)} />
                        </div>
                        <div className="form-group col-md-2">
                            <label className="inputDT" for="inputDTB1">Điểm TB tích lũy hệ 4</label>
                            <input type="text" className="form-control" id="inputDTB1" value={dtlsinhvien1} onChange={(event) => onChangeInput(event, SetDtlsinhvien1)} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-2">
                            <label className="inputDT" for="inputSDTSV2">Mã số SV2</label>
                            <input type="text" className="form-control" id="inputSDTSV2" value={mssvsinhvien2} onChange={(event) => onChangeInput(event, SetMssvsinhvien2)} />
                        </div>
                        <div className="form-group col-md-3">
                            <label className="inputDT" for="inputSV2">Sinh viên 2</label>
                            <input type="text" className="form-control" id="inputSV2" value={sinhvien2} onChange={(event) => onChangeInput(event, SetSinhvien2)} />
                        </div>
                        <div className="form-group col-md-3">
                            <label className="inputDT" for="inputEmailSV2">Email</label>
                            <input type="text" className="form-control" id="inputEmailSV2" value={emailsinhvien2} onChange={(event) => onChangeInput(event, SetEmailsinhvien2)} />
                        </div>
                        <div className="form-group col-md-2">
                            <label className="inputDT" for="inputSTCSV2">Số tín chỉ tích lũy</label>
                            <input type="text" className="form-control" id="inputSTCSV2" value={stcsinhvien2} onChange={(event) => onChangeInput(event, SetStcsinhvien2)} />
                        </div>
                        <div className="form-group col-md-2">
                            <label className="inputDT" for="inputDTB2">Điểm TB tích lũy hệ 4</label>
                            <input type="text" className="form-control" id="inputDTB2" value={dtlsinhvien2} onChange={(event) => onChangeInput(event, SetDtlsinhvien2)} />
                        </div>
                    </div>

                    <div className="form-row" >
                        <div className="form-group col-md-12">
                            <label className="inputDT" for="inputTrangthai">Trạng thái</label>
                            <select value={trangthai} onChange={(event) => onChangeSelect(event, SetTrangthai)} id="inputTrangthai" className="form-control" >
                                <option value='1'>Đã đăng ký</option>
                                <option value='0'>Chưa đăng ký</option>
                            </select>
                        </div>

                    </div>


                    {/* <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="inputDT" for="inputGioitinhGV">Giới tính</label>
                            <select value={gioitinh} onChange={(event) => onChangeSelect(event, SetGioitinh)} id="inputGioitinhGV" className="form-control">
                                <option value='Nam'>Nam</option>
                                <option value='Nữ'>Nữ</option>
                            </select>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="inputDT" for="inputNgaysinh">Ngày sinh</label>
                            <input type="date" className="form-control" id="inputNgaysinh" value={ngaysinh} onChange={(event) => onChangeInput(event, SetNgaysinh)} />
                        </div>
                    </div>

                    <div className="form-row">
                        <div className="form-group col-md-12">
                            <label className="inputDT" for="inputTrinhdo">Trình độ</label>
                            <input type="text" className="form-control" id="inputTrinhdo" value={trinhdo} onChange={(event) => onChangeInput(event, SetTrinhdo)} />
                        </div>

                    </div> */}
                    <button className="btn" type="submit" style={{ marginBottom: '12rem' }}>Submit form</button>
                </div>



            </form>
        </main>
    )
}
export default EditDeTai;
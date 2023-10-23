import "./DangKy.scss";
import { useEffect, useState } from "react";
const DangKy = () => {
    const dulieu_testDeTai = [
        {
            id: '1',
            ten: 'Nghiên cứu và xây dựng một hệ thống khuyến nghị.',
            giangvienhuongdan: 'Phan Tấn Quốc',
            donvi: 'Khoa CNTT',
            trangthai: 1,
        },
        {
            id: '2',
            ten: 'Phần mềm quản lý ghi chú cá nhân với tính năng nhận dạng tiếng nói',
            giangvienhuongdan: 'Nguyễn Tuấn Đăng',
            donvi: 'Khoa CNTT',
            trangthai: 1,
        },
        {
            id: '3',
            ten: 'Xây dựng website hỗ trợ đào tạo khoa CNTT.',
            giangvienhuongdan: 'Nguyễn Thanh Sang',
            donvi: 'Khoa CNTT',
            trangthai: 1,
        },
        {
            id: '4',
            ten: 'Xây dựng trò chơi hỗ trợ làm quen với tiếng Anh',
            giangvienhuongdan: 'Phạm Thi Vương',
            donvi: 'Viện KHDL - TTNT',
            trangthai: 1,
        },
    ]

    const [mssvsinhvien1, SetMssvsinhvien1] = useState("")
    const [holotsinhvien1, SetHolotinhvien1] = useState("")
    const [tensinhvien1, SetTensinhvien1] = useState("")
    const [emailsinhvien1, SetEmailsinhvien1] = useState("")
    const [sdtsinhvien1, SetSdtsinhvien1] = useState("")
    const [stcsinhvien1, SetStcsinhvien1] = useState(0)
    const [dtlsinhvien1, SetDtlsinhvien1] = useState(0)

    const [mssvsinhvien2, SetMssvsinhvien2] = useState("")
    const [holotsinhvien2, SetHolotinhvien2] = useState("")
    const [tensinhvien2, SetTensinhvien2] = useState("")
    const [emailsinhvien2, SetEmailsinhvien2] = useState("")
    const [sdtsinhvien2, SetSdtsinhvien2] = useState("")
    const [stcsinhvien2, SetStcsinhvien2] = useState(0)
    const [dtlsinhvien2, SetDtlsinhvien2] = useState(0)

    const [detai, SetDetai] = useState("")

    const onChangeInputSL = (event, SetState) => {
        let changeValue = event.target.value;
        SetState(changeValue);
    }

    // check dữ liệu
    const [checkmssvsinhvien1, SetCheckmssvsinhvien1] = useState(true)
    const [checkholotsinhvien1, SetCheckholotsinhvien1] = useState(true)
    const [checktensinhvien1, SetChecktensinhvien1] = useState(true)
    const [checkemailsinhvien1, SetCheckemailsinhvien1] = useState(true)
    const [checksdtsinhvien1, SetChecksdtsinhvien1] = useState(true)
    const [checkstcsinhvien1, SetCheckstcsinhvien1] = useState(true)
    const [checkdtlsinhvien1, SetCheckdtlsinhvien1] = useState(true)

    const [checkmssvsinhvien2, SetCheckmssvsinhvien2] = useState(true)
    const [checkholotsinhvien2, SetCheckholotsinhvien2] = useState(true)
    const [checktensinhvien2, SetChecktensinhvien2] = useState(true)
    const [checkemailsinhvien2, SetCheckemailsinhvien2] = useState(true)
    const [checksdtsinhvien2, SetChecksdtsinhvien2] = useState(true)
    const [checkstcsinhvien2, SetCheckstcsinhvien2] = useState(true)
    const [checkdtlsinhvien2, SetCheckdtlsinhvien2] = useState(true)


    const [checkdetai, SetCheckdetai] = useState(true)
    const checkdulieu = (value, SetDuLieu) => {
        value === '' ? SetDuLieu(false) : SetDuLieu(true)
    }
    const checkdulieuSo = (value, SetDuLieu) => {
        value == 0 ? SetDuLieu(false) : SetDuLieu(true)
    }

    const checkdulieuDetai = (SetDuLieu) => {
        detai === '' ? SetDuLieu(false) : SetDuLieu(true)
        console.log(checkdetai)
    }


    return (
        <div className="container-dangky">
            <ol className="breadcrumb">
                <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                <li className="breadcrumb-item">Khóa luận</li>
                <li className="breadcrumb-item active">Đăng ký đề tài khóa luận tốt nghiệp</li>
            </ol>
            {/* <div className="container-tb-update">
                <h3>Khóa luận học kỳ 1 năm học 2023-2024</h3>
                <h6>Ngày cập nhật : 10/09/2023</h6>
            </div> */}

            <h3>Điền đầy đủ thông tin sau</h3>
            <div className="content" >
                <div className="container-form">
                    <form className="form-edit">
                        <div className="container-edit">
                            {/* Sv1 */}
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Sinh viên 1</label>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Họ lót</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={holotsinhvien1} placeholder="Điền họ lót ..." onChange={(event) => onChangeInputSL(event, SetHolotinhvien1)} onBlur={() => checkdulieu(holotsinhvien1, SetCheckholotsinhvien1)} />
                                    <div className="invalid-feedback" style={{ display: checkholotsinhvien1 ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Tên</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={tensinhvien1} placeholder="Điền tên ..." onChange={(event) => onChangeInputSL(event, SetTensinhvien1)} onBlur={() => checkdulieu(tensinhvien1, SetChecktensinhvien1)} />
                                    <div className="invalid-feedback" style={{ display: checktensinhvien1 ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                                <div className="form-group col-md-12">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Mã số sinh viên</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={mssvsinhvien1} placeholder="Điền mã số sinh viên ..." onChange={(event) => onChangeInputSL(event, SetMssvsinhvien1)} onBlur={() => checkdulieu(mssvsinhvien1, SetCheckmssvsinhvien1)} />
                                    <div className="invalid-feedback" style={{ display: checkmssvsinhvien1 ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Số tín chỉ tích lỹ</label>
                                    <input type="number" className="form-control" id="inputTrinhdo" value={stcsinhvien1} onChange={(event) => onChangeInputSL(event, SetStcsinhvien1)} onBlur={() => checkdulieuSo(stcsinhvien1, SetCheckstcsinhvien1)} />
                                    <div className="invalid-feedback" style={{ display: checkstcsinhvien1 ? 'none' : 'block' }}>Số tín chỉ tích lỹ không hợp lệ</div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Điểm TB tích lỹ hệ 4</label>
                                    <input type="number" className="form-control" id="inputTrinhdo" value={dtlsinhvien1} min="0" max="4" onChange={(event) => onChangeInputSL(event, SetDtlsinhvien1)} onBlur={() => checkdulieuSo(dtlsinhvien1, SetCheckdtlsinhvien1)} />
                                    <div className="invalid-feedback" style={{ display: checkdtlsinhvien1 ? 'none' : 'block' }}>Điểm TB tích lỹ hệ 4 không hợp lệ</div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Email</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={emailsinhvien1} placeholder="Điền email ..." onChange={(event) => onChangeInputSL(event, SetEmailsinhvien1)} onBlur={() => checkdulieu(emailsinhvien1, SetCheckemailsinhvien1)} />
                                    <div className="invalid-feedback" style={{ display: checkemailsinhvien1 ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Số điện thoại</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={sdtsinhvien1} placeholder="Điền số điện thoại ..." onChange={(event) => onChangeInputSL(event, SetSdtsinhvien1)} onBlur={() => checkdulieu(sdtsinhvien1, SetChecksdtsinhvien1)} />
                                    <div className="invalid-feedback" style={{ display: checksdtsinhvien1 ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                            </div>

                            {/* SV2 */}
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Sinh viên 2</label>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Họ lót</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={holotsinhvien2} placeholder="Điền họ lót ..." onChange={(event) => onChangeInputSL(event, SetHolotinhvien2)} onBlur={() => checkdulieu(holotsinhvien2, SetCheckholotsinhvien2)} />
                                    <div className="invalid-feedback" style={{ display: checkholotsinhvien2 ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Tên</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={tensinhvien2} placeholder="Điền tên ..." onChange={(event) => onChangeInputSL(event, SetTensinhvien2)} onBlur={() => checkdulieu(tensinhvien2, SetChecktensinhvien2)} />
                                    <div className="invalid-feedback" style={{ display: checktensinhvien2 ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                                <div className="form-group col-md-12">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Mã số sinh viên</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={mssvsinhvien2} placeholder="Điền mã số sinh viên ..." onChange={(event) => onChangeInputSL(event, SetMssvsinhvien2)} onBlur={() => checkdulieu(mssvsinhvien2, SetCheckmssvsinhvien2)} />
                                    <div className="invalid-feedback" style={{ display: checkmssvsinhvien2 ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                    {/* <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div> */}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Số tín chỉ tích lỹ</label>
                                    <input type="number" className="form-control" id="inputTrinhdo" value={stcsinhvien2} onChange={(event) => onChangeInputSL(event, SetStcsinhvien2)} onBlur={() => checkdulieuSo(stcsinhvien2, SetCheckstcsinhvien2)} />
                                    <div className="invalid-feedback" style={{ display: checkstcsinhvien2 ? 'none' : 'block' }}>Số tín chỉ tích lỹ không hợp lệ</div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Điểm TB tích lỹ hệ 4</label>
                                    <input type="number" className="form-control" id="inputTrinhdo" value={dtlsinhvien2} onChange={(event) => onChangeInputSL(event, SetDtlsinhvien2)} onBlur={() => checkdulieuSo(dtlsinhvien2, SetCheckdtlsinhvien2)} />
                                    <div className="invalid-feedback" style={{ display: checkdtlsinhvien2 ? 'none' : 'block' }}>Điểm TB tích lỹ hệ 4 không hợp lệ</div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Email</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={emailsinhvien2} placeholder="Điền email ..." onChange={(event) => onChangeInputSL(event, SetEmailsinhvien2)} onBlur={() => checkdulieu(emailsinhvien2, SetCheckemailsinhvien2)} />
                                    <div className="invalid-feedback" style={{ display: checkemailsinhvien2 ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Số điện thoại</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={sdtsinhvien2} placeholder="Điền số điện thoại ..." onChange={(event) => onChangeInputSL(event, SetSdtsinhvien2)} onBlur={() => checkdulieu(sdtsinhvien2, SetChecksdtsinhvien2)} />
                                    <div className="invalid-feedback" style={{ display: checksdtsinhvien2 ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-outline-primary" onClick={() => checkdulieuDetai(SetCheckdetai)}>Đăng ký</button>
                    </form>
                </div>
                <div className="container-list-detai">
                    <fieldset className="form-group">
                        <div className="row">
                            <div className="col-sm-12">
                                {dulieu_testDeTai && dulieu_testDeTai.length > 0 &&
                                    dulieu_testDeTai.map((item, index) => {
                                        return (
                                            <>
                                                <div className="form-check">
                                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value={item.ten} onClick={(event) => onChangeInputSL(event, SetDetai)} />
                                                    <label className="inputDK" htmlFor="gridRadios1">{item.ten}</label>
                                                    <label className="inputDK" htmlFor="gridRadios1">- GVHD : {item.giangvienhuongdan}</label>
                                                </div>
                                            </>
                                        )
                                    })
                                }
                                <div className="invalid-feedback" style={{ display: checkdetai ? 'none' : 'block' }}>Vui lòng chọn 1 đề tài </div>
                            </div>
                        </div>
                    </fieldset>



                </div>

            </div>
        </div>
    )
}
export default DangKy
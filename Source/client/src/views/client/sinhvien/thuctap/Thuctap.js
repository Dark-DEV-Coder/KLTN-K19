import "./Thuctap.scss"
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
const Thuctap = () => {
    const [holotsinhvien, SetHolotinhvien] = useState("")
    const [tensinhvien, SetTensinhvien] = useState("")
    const [mssvsinhvien, SetMssvsinhvien] = useState("")
    const [lopsinhvien, SetLopsinhvien] = useState("")
    const [nganhsinhvien, SetNganhsinhvien] = useState("")
    const [dtlsinhvien, SetDtlsinhvien] = useState(0)
    const [emailsinhvien, SetEmailsinhvien] = useState("")
    const [sdtsinhvien, SetSdtsinhvien] = useState("")
    const [diachithuongtrusinhvien, SetDiachithuongtrusinhvien] = useState("")
    const [diachilienhesinhvien, SetDiachilienhesinhvien] = useState("")


    const [tencty, SetTencty] = useState("")
    const [diachicty, SetDiachicty] = useState("")
    const [linhvuchoatdong, SetLinhvuchoatdong] = useState("")
    const [website, SetWebsite] = useState("")
    const [dienthoailienhe, SetDienthoailienhe] = useState("")

    const [radioCty, SetRadioCty] = useState('')

    const onChangeInputSL = (event, SetState) => {
        let changeValue = event.target.value;
        SetState(changeValue);
    }


    // check dữ liệu
    const [checkmssvsinhvien, SetCheckmssvsinhvien] = useState(true)
    const [checkholotsinhvien, SetCheckholotsinhvien] = useState(true)
    const [checktensinhvien, SetChecktensinhvien] = useState(true)
    const [checkemailsinhvien, SetCheckemailsinhvien] = useState(true)
    const [checksdtsinhvien, SetChecksdtsinhvien] = useState(true)
    const [checknganhsinhvien, SetChecknganhsinhvien] = useState(true)
    const [checklopsinhvien, SetChecklopsinhvien] = useState(true)
    const [checkdiachithuongtrusinhvien, SetCheckdiachithuongtrusinhvien] = useState(true)
    const [checkdiachilienhesinhvien, SetCheckdiachilienhesinhvien] = useState(true)
    const [checkdtlsinhvien, SetCheckdtlsinhvien] = useState(true)

    const [checkTencty, SetCheckTencty] = useState(true)
    const [checkdiachicty, SetCheckdiachicty] = useState(true)
    const [checklinhvuchoatdong, SetChecklinhvuchoatdong] = useState(true)
    const [checkwebsite, SetCheckwebsite] = useState(true)
    const [checkdienthoailienhe, SetCheckdienthoailienhe] = useState(true)



    const [checkdetai, SetCheckdetai] = useState(true)
    const checkdulieu = (value, SetDuLieu) => {
        value === '' ? SetDuLieu(false) : SetDuLieu(true)
    }
    const checkdulieuSo = (value, SetDuLieu) => {
        value == 0 ? SetDuLieu(false) : SetDuLieu(true)
    }

    // const checkdulieuDetai = (SetDuLieu) => {
    //     detai === '' ? SetDuLieu(false) : SetDuLieu(true)
    //     console.log(checkdetai)
    // }

    return (
        <div className="container-thuctap">
            <ol className="breadcrumb" >
                <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                <li className="breadcrumb-item">Thực tập</li>
                <li className="breadcrumb-item active">Thực tập tốt nghiệp học kỳ 1 năm học 2023-2024</li>
            </ol>
            <div className="container-tb-update">
                <h3>Đăng ký thực tập tốt nghiệp học kỳ 1 năm học 2023-2024</h3>
                {/* <h6>Ngày cập nhật : 10/09/2023</h6> */}
                <h6 className="time-line">Thời gian đăng ký : [ 10/09/2023 - 22/10/2023 ] </h6>
            </div>
            {/* <div className="container-dky">
                <h5>Danh sách công ty được công bố</h5>
                <Link to="/thuctap/dky-thuctap">
                    <button type="button" className="btn btn-outline-primary">Xem danh sách</button>
                </Link>
            </div> */}
            <h3>Điền đầy đủ thông tin sau</h3>
            <div className="content-dkythuctap">
                <div className="container-form">
                    <form className="form-edit">
                        <div className="container-edit">
                            <label className="inputDK" htmlFor="inputTrinhdo">Thông tin sinh viên đăng ký thực tập</label>
                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Họ lót</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={holotsinhvien} placeholder="Điền họ lót ..." onChange={(event) => onChangeInputSL(event, SetHolotinhvien)} onBlur={() => checkdulieu(holotsinhvien, SetCheckholotsinhvien)} />
                                    <div className="invalid-feedback" style={{ display: checkholotsinhvien ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Tên</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={tensinhvien} placeholder="Điền tên ..." onChange={(event) => onChangeInputSL(event, SetTensinhvien)} onBlur={() => checkdulieu(tensinhvien, SetChecktensinhvien)} />
                                    <div className="invalid-feedback" style={{ display: checktensinhvien ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Mã số sinh viên</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={mssvsinhvien} placeholder="Điền mã số sinh viên ..." onChange={(event) => onChangeInputSL(event, SetMssvsinhvien)} onBlur={() => checkdulieu(mssvsinhvien, SetCheckmssvsinhvien)} />
                                    <div className="invalid-feedback" style={{ display: checkmssvsinhvien ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-4">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Lớp</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={lopsinhvien} placeholder="Điền lớp ..." onChange={(event) => onChangeInputSL(event, SetLopsinhvien)} onBlur={() => checkdulieu(lopsinhvien, SetChecklopsinhvien)} />
                                    <div className="invalid-feedback" style={{ display: checklopsinhvien ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu</div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Ngành</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={nganhsinhvien} placeholder="Điền ngành ..." onChange={(event) => onChangeInputSL(event, SetNganhsinhvien)} onBlur={() => checkdulieu(nganhsinhvien, SetChecknganhsinhvien)} />
                                    <div className="invalid-feedback" style={{ display: checknganhsinhvien ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu</div>
                                </div>
                                <div className="form-group col-md-4">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Điểm TB tích lỹ (hệ 4)</label>
                                    <input type="number" className="form-control" id="inputTrinhdo" value={dtlsinhvien} min="0" max="4" onChange={(event) => onChangeInputSL(event, SetDtlsinhvien)} onBlur={() => checkdulieuSo(dtlsinhvien, SetCheckdtlsinhvien)} />
                                    <div className="invalid-feedback" style={{ display: checkdtlsinhvien ? 'none' : 'block' }}>Điểm TB tích lỹ hệ 4 không hợp lệ</div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Email</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={emailsinhvien} placeholder="Điền email ..." onChange={(event) => onChangeInputSL(event, SetEmailsinhvien)} onBlur={() => checkdulieu(emailsinhvien, SetCheckemailsinhvien)} />
                                    <div className="invalid-feedback" style={{ display: checkemailsinhvien ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Số điện thoại</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={sdtsinhvien} placeholder="Điền số điện thoại ..." onChange={(event) => onChangeInputSL(event, SetSdtsinhvien)} onBlur={() => checkdulieu(sdtsinhvien, SetChecksdtsinhvien)} />
                                    <div className="invalid-feedback" style={{ display: checksdtsinhvien ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Địa chỉ thường trú</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={diachithuongtrusinhvien} placeholder="Điền địa chỉ thường trú ..." onChange={(event) => onChangeInputSL(event, SetDiachithuongtrusinhvien)} onBlur={() => checkdulieu(diachithuongtrusinhvien, SetCheckdiachithuongtrusinhvien)} />
                                    <div className="invalid-feedback" style={{ display: checkdiachithuongtrusinhvien ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Địa chỉ liên hệ</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" value={diachilienhesinhvien} placeholder="Điền địa chỉ liên hệ ..." onChange={(event) => onChangeInputSL(event, SetDiachilienhesinhvien)} onBlur={() => checkdulieu(diachilienhesinhvien, SetCheckdiachilienhesinhvien)} />
                                    <div className="invalid-feedback" style={{ display: checkdiachilienhesinhvien ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                </div>
                            </div>

                            <label className="inputDK" htmlFor="inputTrinhdo">Thông tin công ty đăng ký thực tập <a href="#">( Danh sách công ty thực tập )</a></label>

                            <div className="form-row">
                                <div className="form-check">
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value='1' onClick={(event) => onChangeInputSL(event, SetRadioCty)} />
                                    <label className="inputDK" htmlFor="gridRadios1">Trong sanh sách</label>
                                </div>
                                <div className="form-check" style={{ marginLeft: '3rem' }}>
                                    <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value='0' onClick={(event) => onChangeInputSL(event, SetRadioCty)} />
                                    <label className="inputDK" htmlFor="gridRadios1">Ngoài danh sách</label>
                                </div>
                            </div>


                            <div style={radioCty === '' ? { display: 'none' } : { display: 'block' }}>
                                <div className="form-row">
                                    <div className="form-group col-md-12">
                                        <label className="inputDK" htmlFor="inputTrinhdo">Tên công ty thực tập</label>
                                        <input type="text" className="form-control" id="inputTrinhdo" value={tencty} placeholder="Điền tên công ty thực tập ..." onChange={(event) => onChangeInputSL(event, SetTencty)} onBlur={() => checkdulieu(tencty, SetCheckTencty)} />
                                        <div className="invalid-feedback" style={{ display: checkTencty ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                    </div>
                                </div>
                                <div style={radioCty === '1' ? { display: 'none' } : { display: 'block' }}>
                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label className="inputDK" htmlFor="inputTrinhdo">Địa chỉ</label>
                                            <input type="text" className="form-control" id="inputTrinhdo" value={diachicty} placeholder="Điền địa chỉ ..." onChange={(event) => onChangeInputSL(event, SetDiachicty)} onBlur={() => checkdulieu(diachicty, SetCheckdiachicty)} />
                                            <div className="invalid-feedback" style={{ display: checkdiachicty ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu</div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="inputDK" htmlFor="inputTrinhdo">Lĩnh vực hoạt động</label>
                                            <input type="text" className="form-control" id="inputTrinhdo" value={linhvuchoatdong} placeholder="Điền lĩnh vực hoạt động ..." onChange={(event) => onChangeInputSL(event, SetLinhvuchoatdong)} onBlur={() => checkdulieu(linhvuchoatdong, SetChecklinhvuchoatdong)} />
                                            <div className="invalid-feedback" style={{ display: checklinhvuchoatdong ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu</div>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-md-6">
                                            <label className="inputDK" htmlFor="inputTrinhdo">Website</label>
                                            <input type="text" className="form-control" id="inputTrinhdo" value={website} placeholder="Điền website ..." onChange={(event) => onChangeInputSL(event, SetWebsite)} onBlur={() => checkdulieu(website, SetCheckwebsite)} />
                                            <div className="invalid-feedback" style={{ display: checkwebsite ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                        </div>
                                        <div className="form-group col-md-6">
                                            <label className="inputDK" htmlFor="inputTrinhdo">Điện thoại liên hệ</label>
                                            <input type="text" className="form-control" id="inputTrinhdo" value={dienthoailienhe} placeholder="Điền số điện thoại liên hệ ..." onChange={(event) => onChangeInputSL(event, SetDienthoailienhe)} onBlur={() => checkdulieu(dienthoailienhe, SetCheckdienthoailienhe)} />
                                            <div className="invalid-feedback" style={{ display: checkdienthoailienhe ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div>
                                        </div>
                                    </div>
                                </div>
                            </div>



                        </div>
                        <button type="button" className="btn btn-outline-primary" >Đăng ký</button>
                    </form>
                </div>
            </div >
        </div >
    )
}
export default Thuctap
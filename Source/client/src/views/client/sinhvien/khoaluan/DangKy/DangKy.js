import "./DangKy.scss"
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
                                    <input type="text" className="form-control" id="inputTrinhdo" placeholder="Điền trình độ ..." />
                                    {/* <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div> */}
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Tên</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" placeholder="Điền trình độ ..." />
                                    {/* <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div> */}
                                </div>
                                <div className="form-group col-md-12">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Mã số sinh viên</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" placeholder="Điền trình độ ..." />
                                    {/* <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div> */}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Số tín chỉ tích lỹ</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" placeholder="Điền trình độ ..." />
                                    {/* <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div> */}
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Điểm TB tích lỹ hệ 4</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" placeholder="Điền trình độ ..." />
                                    {/* <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div> */}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Email</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" placeholder="Điền trình độ ..." />
                                    {/* <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div> */}
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Số điện thoại</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" placeholder="Điền trình độ ..." />
                                    {/* <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div> */}
                                </div>
                            </div>

                            {/* SV2 */}
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Sinh viên 2</label>
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Họ lót</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" placeholder="Điền trình độ ..." />
                                    {/* <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div> */}
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Tên</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" placeholder="Điền trình độ ..." />
                                    {/* <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div> */}
                                </div>
                                <div className="form-group col-md-12">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Mã số sinh viên</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" placeholder="Điền trình độ ..." />
                                    {/* <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div> */}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Số tín chỉ tích lỹ</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" placeholder="Điền trình độ ..." />
                                    {/* <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div> */}
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Điểm TB tích lỹ hệ 4</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" placeholder="Điền trình độ ..." />
                                    {/* <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div> */}
                                </div>
                            </div>

                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Email</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" placeholder="Điền trình độ ..." />
                                    {/* <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div> */}
                                </div>
                                <div className="form-group col-md-6">
                                    <label className="inputDK" htmlFor="inputTrinhdo">Số điện thoại</label>
                                    <input type="text" className="form-control" id="inputTrinhdo" placeholder="Điền trình độ ..." />
                                    {/* <div className="invalid-feedback" style={{ display: checkdulieuTrinhDo ? 'none' : 'block' }}>Vui lòng điền vào ô dữ liệu </div> */}
                                </div>
                            </div>
                        </div>
                        <button type="button" className="btn btn-outline-primary">Đăng ký</button>
                    </form>
                </div>
                <div className="container-list-detai">
                    <fieldset className="form-group">
                        <div className="row">
                            <div className="col-sm-12">
                                {dulieu_testDeTai && dulieu_testDeTai.length > 0 &&
                                    dulieu_testDeTai.map((item, index) => {
                                        return (
                                            <div className="form-check">
                                                <input className="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value={item.id} />
                                                <label className="inputDK" htmlFor="gridRadios1">{item.ten}</label>
                                                <label className="inputDK" htmlFor="gridRadios1">- GVHD : {item.giangvienhuongdan}</label>
                                            </div>

                                        )
                                    })
                                }
                            </div>
                        </div>
                    </fieldset>



                </div>

            </div>
        </div>
    )
}
export default DangKy
import "./Thuctap.scss"
import { Link } from "react-router-dom";
const Thuctap = () => {

    return (
        <div className="container-thuctap">
            <ol className="breadcrumb" >
                <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                <li className="breadcrumb-item">Thực tập</li>
                <li className="breadcrumb-item active">hực tập tốt nghiệp học kỳ 1 năm học 2023-2024</li>
            </ol>
            <div className="container-tb-update">
                <h3>Thực tập tốt nghiệp học kỳ 1 năm học 2023-2024</h3>
                <h6>Ngày cập nhật : 10/09/2023</h6>
                <h6 className="time-line">Thời gian đăng ký : [ 10/09/2023 - 22/10/2023 ] </h6>
            </div>
            <div className="container-dky">
                <h5>Danh sách công ty được công bố</h5>
                <Link to="/thuctap/dky-thuctap">
                    <button type="button" className="btn btn-outline-primary">Đăng ký</button>
                </Link>

            </div>

            <div className="content-table">

            </div>
        </div>
    )
}
export default Thuctap
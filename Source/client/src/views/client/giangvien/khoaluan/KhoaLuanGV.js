import "./KhoaLuanGV.scss"
import { Link } from "react-router-dom";
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import { data_khoaluan } from "../../data"
import { useState } from "react";
const KhoaLuanGV = () => {
    const [khoaluan, SetKhoaluan] = useState(data_khoaluan)
    const [search, SetSearch] = useState('')
    const onChangSearch = (event) => {
        let result = event.target.value;
        SetSearch(result);
    }
    return (
        <div className="container-khoaluan">
            <ol className="breadcrumb" >
                <li className="breadcrumb-item"><a href="#">Trang chủ</a></li>
                <li className="breadcrumb-item">Khóa luận</li>
                <li className="breadcrumb-item active">Khóa luận học kỳ 1 năm học 2023-2024</li>
            </ol>
            <div className="container-tb-update">
                <h3>Khóa luận học kỳ 1 năm học 2023-2024</h3>
                <h6>Ngày cập nhật : 10/09/2023</h6>
                <h6 className="time-line">Thời gian đăng ký : [ 10/09/2023 - 22/10/2023 ] </h6>
            </div>
            <div className="container-dky">
                <h5>Danh sách sinh viên đăng ký đề tài</h5>
                <div className="col-md-3">
                    <input type="text" className="form-control" id="validationCustom02" placeholder="Tìm kiếm ..." onChange={(event) => onChangSearch(event)} />
                </div>

            </div>

            <div className="content-table">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th scope="col" rowSpan="2">#</th>
                            <th scope="col" colSpan="2">Sinh viên đăng ký đề tài</th>
                            <th scope="col" rowSpan="2">Số tín chỉ tích lỹ</th>
                            <th scope="col" rowSpan="2">Điểm TB tích lỹ hệ 4</th>
                            <th scope="col" rowSpan="2" className="th-email">Email</th>
                            <th scope="col" rowSpan="2">Điện thoại</th>
                            <th scope="col" rowSpan="2">Tên đề tài</th>
                            <th scope="col" colSpan="2">Giảng viên hướng dẫn</th>
                        </tr>
                        <tr>
                            <th scope="col">Họ tên sinh viên</th>
                            <th scope="col">Mã số sinh viên</th>

                            <th scope="col" colSpan="2">
                                <button type="button" className="btn btn-outline-dark">Xóa tất cả</button>
                            </th>

                        </tr>
                    </thead>
                    <tbody>
                        {khoaluan && khoaluan.length > 0 &&
                            khoaluan.filter((item) => {
                                return search.toLocaleLowerCase() === '' ? item : item.ten.toLocaleLowerCase().includes(search)
                            }).map((item, index) => {
                                return (
                                    <>
                                        <tr key={index}>
                                            <th scope="row" rowSpan="2">{index + 1}</th>
                                            <td>{item.sinhvien1}</td>
                                            <td>{item.MSSV1}</td>
                                            <td>{item.TC1}</td>
                                            <td>{item.TB1}</td>
                                            <td>{item.Email1}</td>
                                            <td>{item.Sdt1}</td>
                                            <td rowSpan="2">{item.ten}</td>
                                            <td rowSpan="2"><button type="button" className="btn btn-outline-success">Chấp nhận</button></td>
                                            <td rowSpan="2"><button type="button" className="btn btn-outline-danger">Từ chối</button></td>
                                        </tr>
                                        <tr>
                                            <td>{item.sinhvien2}</td>
                                            <td>{item.MSSV2}</td>
                                            <td>{item.TC2}</td>
                                            <td>{item.TB2}</td>
                                            <td>{item.Email2}</td>
                                            <td>{item.Sdt2}</td>
                                        </tr></>
                                )
                            })
                        }
                    </tbody>
                </table>
                <h6>Ghi chú: mỗi số thứ tự là 2 sinh viên chung một đề tài</h6>
            </div>
        </div>
    )
}
export default KhoaLuanGV
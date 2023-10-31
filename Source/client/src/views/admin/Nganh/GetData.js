import axios from "axios";
const fetchAllNganh = () => {
    return axios.get('https://hotrodaotao-api-k19-sgu.onrender.com/api/admin/nganh/DanhSachNganh');
}
export { fetchAllNganh };
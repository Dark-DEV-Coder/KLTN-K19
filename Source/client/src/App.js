import './App.css';
import {
  BrowserRouter,
} from "react-router-dom";
import { useState } from 'react';
import Admin from "./views/admin/Admin"
import Client from './views/client/Client';


function App() {
  const [catalog, setCatalog] = useState([

    { id: '1', title: 'Dashboard', img: 'bx bxs-dashboard', link: 'admin' },
    { id: '2', title: 'Khóa luận', img: 'bx bxs-shopping-bag-alt', link: 'khoaluan' },
    { id: '3', title: 'Thực tập', img: 'bx bxs-doughnut-chart', link: 'thuctap' },
    { id: '4', title: 'Cải thiện', img: 'bx bxs-message-dots', link: 'caithien' },
    { id: '5', title: 'Buộc thôi học', img: 'bx bxs-dashboard', link: 'thoihoc' },

  ]);
  return (
    <BrowserRouter>
      {/* Admin */}
      <div className='App'>
        {/* <Admin /> */}
        <Client />
      </div>
    </BrowserRouter >
  );
}

export default App;

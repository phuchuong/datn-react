// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import DienThoai from './pages/Dienthoai/DienThoai';
import Loaidt from './pages/Loaidt/Loaidt';
import Nhanvien from './pages/Nhanvien/Nhanvien';
import Admin from './pages/Admin/Admin';

// import Header from './components/Admin/Header/Header';
// import Navbar from './components/Admin/Navbar/Navbar';
// import Footer from './components/Admin/Footer/Footer';
import Modal from './components/Admin/Modal';
import Login from './pages/Login/Login';

import { UserLoginTemplate } from './templates/LoginTemplates/UserLoginTemplate';
import { AdminTemplate } from './templates/AdminTemplates/AdminTemplaes';




function App() {

  return (
    <BrowserRouter>

      <Modal />

      <Switch>

        <AdminTemplate exact path={'/admin'} Compoment={Admin} />
        <AdminTemplate exact path={'/nhanvien'} Compoment={Nhanvien} />
        <AdminTemplate exact path={'/loaidt'} Compoment={Loaidt} />
        <AdminTemplate exact path={'/dienthoai'} Compoment={DienThoai} />

        <UserLoginTemplate exact path={'/login'} Compoment={Login} />

        <AdminTemplate exact path={'*'} Compoment={Admin} />
        <AdminTemplate exact path={'/'} Compoment={Admin} />

      </Switch>

    </BrowserRouter>
  );
}

export default App;

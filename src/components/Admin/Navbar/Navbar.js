import React from 'react'
import {NavLink} from 'react-router-dom'

export default function Navbar() {
    return (
        <div className="navbar">
            <div className="navbar-item ">
                <div className="item-icon icon-1" />
                <NavLink activeStyle={{color:'#fff'}} className="item-text" to="/admin">Admin</NavLink>
            </div>
            <div className="navbar-item">
                <div className="item-icon icon-2" />
                <NavLink activeStyle={{color:'#fff'}} className="item-text" to="/loaidt">Loại điện thoại</NavLink>
            </div>
            <div className="navbar-item">
                <div className="item-icon icon-3" />
                <NavLink activeStyle={{color:'#fff'}} className="item-text"to="/dienthoai">Điện Thoại</NavLink>
            </div>
            <div className="navbar-item">
                <div className="item-icon icon-4" />
                <NavLink activeStyle={{color:'#fff'}} className="item-text"to="/nhanvien">Nhân Viên</NavLink>
            </div>
            <div className="navbar-item">
                <div className="item-icon icon-13" />
                <div className="item-text">Nhà cung cấp</div>
            </div>
            <div className="navbar-item">
                <div className="item-icon icon-5" />
                <div className="item-text">Hóa đơn nhập</div>
            </div>
            <div className="navbar-item">
                <div className="item-icon icon-6" />
                <div className="item-text">Chi tiết hóa đơn nhập</div>
            </div>
            <div className="navbar-item">
                <div className="item-icon icon-13" />
                <div className="item-text">Hóa đơn bán</div>
            </div>
            <div className="navbar-item">
                <div className="item-icon icon-14" />
                <div className="item-text">Chi tiết hóa đơn bán</div>
            </div>
            <div className="navbar-item">
                <div className="item-icon icon-15" />
                <div className="item-text">Phân tích</div>
            </div>
        </div>

    )
}

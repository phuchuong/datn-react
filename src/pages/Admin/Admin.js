import React, { useState, useEffect } from 'react';
import Axios from 'axios';
// import cors from 'cors';
import { Pagination } from 'antd';


export default function Admin(props) {

    let [state, setState] = useState({
        taskList: [],
        values: {
            IDADMIN: '',
            Username: '',
            Password: ''
        },
        errors: {
            IDADMIN: '',
            Username: '',
            Password: ''
        }
    });

    const getTaskList = () => {
        let promises = Axios({
            url: 'https://localhost:7091/api/Admin',
            method: 'GET',

        });

        promises.then((result) => {

            console.log(result.data);
            setState({
                ...state,
                taskList: result.data
            })

        })
        promises.catch((err) => {
            console.log(err.response.data);

        });
    }


    useEffect(() => {
        getTaskList();
        return () => {

        }
    }, [])

    const renderTaskAdmin = () => {
        return state.taskList.filter(item => !item.status).map((item, index) => {
            return <tr key={index}>
                <td className="text-center"><input type="checkbox" className="checkbox-input" /></td>
                <td className="text-left">{item.IDADMIN}</td>
                <td className="text-left">{item.Username}</td>
                <td className="text-left">{item.Password}</td>

                <td className="text-center">
                    <div className="list-func">
                        <div className="function-text">Sửa</div>
                        <div className="function__icon">
                        </div>
                        <ul className="function__nav">
                            <li>Nhân bản</li>
                            <li className="delete__employee">Xóa</li>
                            <li>Ngừng sử dụng</li>
                        </ul>
                    </div>
                </td>
            </tr>

        })
    }
    return (

        <div className="content">

            <div className="content-title">
                <div className="title-name">NHÂN VIÊN</div>
                <div className="title-btn">
                    <button className="btn" id="addEmployee">Thêm mới nhân viên</button>
                </div>
            </div>
            <div className="content-main">
                <div className="content__function">
                    <div className="content_search input-search">
                        <input type="text" className="input input-search-forcus" placeholder="tìm theo mã, tên nhân viên" />
                        <div className="input-icon" />
                    </div>
                    <div className="content__load" />
                </div>
                <div className="content__table">
                    <table className="table">
                        <thead>
                            <tr>
                                <th className="text-center" style={{ width: 50 }}><input type="checkbox" className="checkbox-input" /></th>
                                <th className="text-left" style={{ width: 150 }}>Mã Admin </th>
                                <th className="text-left">Tên Nhân Viên</th>
                                <th className="text-left" style={{ width: 100 }}>Mật khẩu</th>
                                <th className="text-left" style={{ width: 100 }}>Chức năng</th>


                            </tr>
                        </thead>
                        <tbody >

                            {renderTaskAdmin()}


                        </tbody>
                    </table>
                </div>
                <div className="paging">
                <Pagination defaultCurrent={6} total={500} />
                </div>
            </div>

{/* modal */}
            <div className="modal">
                <div className="modal__main">
                    <div className="modal__header">
                        <div className="modal__header--left">
                            <div className="modal__header--title">Thông Tin Nhân Viên</div>
                            <div className="modal__header--checkbox">
                                <div className="checkbox">
                                    <input type="checkbox" name="check" id="check" className="checkbox-input" />
                                    <label className="checkbox-label" htmlFor="check">là khách hàng</label>
                                </div>
                                <div className="checkbox">
                                    <input type="checkbox" name="check" id="check-1" className="checkbox-input" />
                                    <label className="checkbox-label" htmlFor="check-1">là nhà cung cấp</label>
                                </div>
                            </div>
                        </div>
                        <div className="modal__header--right">
                            <div className="modal_header--icon1" />
                            <div className="modal_header--icon2" />
                        </div>
                    </div>
                    <div className="modal__content">
                        <div className="modal__content--block">
                            <div className="modal__block--top">
                                <div className="block__input--left">
                                    <div className="form__input">
                                        <div className="form__input--item">
                                            <label htmlFor>Mã <span>*</span></label>
                                            <input type="text" className="input input-width-180" id="EmployeeCode" />
                                        </div>
                                        <div className="form__input--item">
                                            <label htmlFor>Tên <span>*</span></label>
                                            <input type="text" className="input input-width-300" id="EmployeeName" />
                                        </div>
                                    </div>
                                    <div className="form__input">
                                        <div className="form__input--item">
                                            <label htmlFor>Đơn vị <span>*</span></label>
                                            {/* <input type="text" class="input input-width-480"> */}
                                            {/* <combobox api="https://cukcuk.manhnv.net/api/v1/CustomerGroups" text="CustomerGroupName" value="CustomerGroupId" id="cbxGender" width="input-width-480" /> */}
                                        </div>
                                    </div>
                                    <div className="form__input">
                                        <div className="form__input--item">
                                            <label htmlFor>Chức danh</label>
                                            <input type="text" className="input input-width-480" id="EmployeeTitle" />
                                        </div>
                                    </div>
                                </div>
                                <div className="block__input--right">
                                    <div className="form__input form__input--start">
                                        <div className="form__input--item pad-12 form__input--date">
                                            <label htmlFor>Ngày sinh</label>
                                            <div className="form__input--date">
                                                <input type="text" className="input input-width-180 date datepicker" readOnly="readonly" placeholder="DD/MM/YYYY" id="EmployeeDateOfBirth" />
                                                <div className="date__icon" />
                                            </div>
                                        </div>
                                        <div className="form__input--item">
                                            <label htmlFor>Giới tính</label>
                                            <div className="form__input--radio">
                                                <div className="radio">
                                                    <input type="radio" name="check" id="radio-1" className="radio-input" />
                                                    <label className="radio-label" htmlFor="radio-1">Nam</label>
                                                </div>
                                                <div className="radio">
                                                    <input type="radio" name="check" id="radio-2" className="radio-input" />
                                                    <label className="radio-label" htmlFor="radio-2">Nữ</label>
                                                </div>
                                                <div className="radio">
                                                    <input type="radio" name="check" id="radio-3" className="radio-input" />
                                                    <label className="radio-label" htmlFor="radio-3">Khác</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form__input">
                                        <div className="form__input--item pad-12">
                                            <label htmlFor>Số CMND</label>
                                            <input type="text" className="input input-width-300" id="EmployeeCMND" />
                                        </div>
                                        <div className="form__input--item">
                                            <label htmlFor>Ngày cấp</label>
                                            <div className="form__input--date">
                                                <input type="text" className="input input-width-180 date datepicker" readOnly="readonly" placeholder="DD/MM/YYYY" id="EmployeeDateRange" />
                                                <div className="date__icon" />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form__input">
                                        <div className="form__input--item">
                                            <label htmlFor>Nơi cấp</label>
                                            <input type="text" className="input input-width-480" id="EmployeeLocation" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal__block--bottom">
                                <div className="form__input--bottom">
                                    <div className="form__input">
                                        <div className="form__input--item">
                                            <label htmlFor>Địa chỉ</label>
                                            <input type="text" className="input input-width-984" id="EmployeePlace" />
                                        </div>
                                    </div>
                                    <div className="form__input--flexStart">
                                        <div className="form__input--item pad-12">
                                            <label htmlFor>ĐT di động</label>
                                            <input type="text" className="input input-width-200" id="EmployeeSDT" />
                                        </div>
                                        <div className="form__input--item pad-12">
                                            <label htmlFor>ĐT cố định</label>
                                            <input type="text" className="input input-width-200" id="EmployeeSDTPermanent" />
                                        </div>
                                        <div className="form__input--item pad-12">
                                            <label htmlFor>Email</label>
                                            <input type="text" className="input input-width-200" id="EmployeeEmail" />
                                        </div>
                                    </div>
                                    <div className="form__input--flexStart">
                                        <div className="form__input--item pad-12">
                                            <label htmlFor>Tài khoản ngân hàng</label>
                                            <input type="text" className="input input-width-200" id="EmployeeBankAccount" />
                                        </div>
                                        <div className="form__input--item pad-12">
                                            <label htmlFor>Tên ngân hàng</label>
                                            <input type="text" className="input input-width-200" id="EmployeeBankName" />
                                        </div>
                                        <div className="form__input--item pad-12">
                                            <label htmlFor>Chi nhánh</label>
                                            <input type="text" className="input input-width-200" id="EmployeeBankBranch" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="modal__footer">
                        <div className="modal__footer--left">
                            <button className="btn-close modal__close">Hủy</button>
                        </div>
                        <div className="modal__footer--right">
                            <button className="btn-close modal--save">Cất</button>
                            <button className="btn modal--add">Cất và Thêm</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}

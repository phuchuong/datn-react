import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import './Loaidt.css';
import { useDispatch, useSelector } from 'react-redux';
import LoaidtInput from '../../components/InputModal/LoaidtInput';
import { ADD_LOAI_API, DELETE_LOAI_API, GET_LOAILISH_API, GET_LOAI_API, PUT_LOAI_API } from '../../redux/constants/LoaiDTConst';
import { Pagination } from 'antd';
// import cors from 'cors';

export default function Loaidt(props) {

    const Dispatch = useDispatch();

    const { taskList } = useSelector(state => state.LoaiDTReducers)


    let [state, setState] = useState({
        taskList: [],
        values: {
            IDLoaiDT: '',
            TenLoaiDT: '',

        },
        errors: {
            IDLoaiDT: '',
            TenLoaiDT: '',

        }
    });

    const addTaskLoai = (e) => {
        // e.preventDefault(); 
        e.preventDefault();
        Dispatch({
            type: ADD_LOAI_API,
            // idLoaiDT: itemLSP.id,
            // tenLoaiDT: itemLSP.ten,
            idLoaiDT:state.values.idLoaiDT,
            tenLoaiDT:state.values.tenLoaiDT,

        })
    }

    const handleChange = (e) => {
        let { value, name } = e.target;
        let newValues = { ...state.values };

        newValues = { ...newValues, [name]: value };

        let newErrors = { ...state.errors };

        let regexString = /^[a-z A-Z]+$/;

        if (!regexString.test(value) || value.trim() === '') {
            newErrors[name] = name + ' invalid !';
        } else {
            newErrors[name] = '';
        }


        setState({
            ...state,
            values: newValues,
            errors: newErrors
        })
    }

    const getTaskList = () => {
        Dispatch({
            type: GET_LOAILISH_API,
            // data:'abc'
        })
    }

    useEffect(() => {
        //goij hafm
        getTaskList();
        return () => {

        }
    }, [])


    const deleteTaskLoai = (IDLoaiDT) => {
        // console.log(IDLoaiDT)

        Dispatch({
            type: DELETE_LOAI_API,
            idLoaiDT: IDLoaiDT,
        })

        // getTaskList();

    }
    const putTaskLoai = (IDLoaiDT) => {
        console.log(IDLoaiDT)

        Dispatch({
            type: PUT_LOAI_API,
            idLoaiDT: IDLoaiDT,
            tenLoaiDT: state.values.TenLoaiDT,
        })

        // getTaskList();

    }
    const renderTaskAdmin = () => {
        return taskList.filter(item => !item.status).map((item, index) => {
            return <tr key={index}>
                <td className="text-center"><input type="checkbox" className="checkbox-input" /></td>
                <td className="text-left">{item.IDLoaiDT}</td>
                <td className="text-left">{item.TenLoaiDT}</td>
                <td className="text-center">
                    <div className="list-func">
                        <button className="update function-text" type="button" id="updateEmployee"  data-toggle="modal" data-target="#modelId"
                        onClick={()=>{
                            Dispatch({type:"LOG_MODAL",Component:<LoaidtInput />,tit:"Sửa Loại Điện Thoại",item:item })
                        }}
                        >
                            Sửa
                        </button>
                        <button className="remove function-text" type="button" onClick={() => { deleteTaskLoai(item.IDLoaiDT) }}>
                            Xóa
                        </button>

                    </div>
                </td>
            </tr>

        })
    }
    return (

        <div className="content" onSubmit={addTaskLoai}>

            <div className="content-title">
                <div className="title-name">NHÂN VIÊN</div>
                <div className="title-btn">
                    <button className="btn btn-primary btn-lg" id="addEmployee" data-toggle="modal" data-target="#modelId" type="button"
                    onClick={()=>{
                        Dispatch({type:"LOG_MODAL",Component:<LoaidtInput />,tit:"Thêm Loại Điện Thoại",item:{} })
                    }}
                    >Thêm mới loại sản phẩm</button>
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
                                <th className="text-left" style={{ width: 150 }}>ID loại điện thoại </th>
                                <th className="text-left">Tên loại điện thoại</th>
                                <th className="text-left" style={{ width: 100 }}>Chức năng</th>
                            </tr>
                        </thead>
                        <tbody >

                            {renderTaskAdmin()}

                        </tbody>
                    </table>
                </div>
                <div className="paging">
                    {/* <div className="paging-left">
                        Tổng số: <b style={{ color: 'black' }}>1020</b> bản ghi.
                    </div>
                    <div className="paging-center">
                        <div className="paging-number">
                            <div className="paging-number-text">Trước</div>
                            <button className="page-number-btn">1</button>
                            <button className="page-number-btn">2</button>
                            <button className="page-number-btn">3</button>
                            <div className="paging-number-icon" />
                            <button className="page-number-btn">52</button>
                            <div className="paging-number-text">Sau</div>
                        </div>
                    </div> */}
                    <Pagination defaultCurrent={6} total={500} />
                </div>
            </div>

        </div>

    )
}

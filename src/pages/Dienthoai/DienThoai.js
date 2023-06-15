/* eslint-disable jsx-a11y/alt-text */
import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { PHOTO_API } from '../../util/constants/settingSystem';
import { ADD_DIENTHOAI_API, DELETE_DIENTHOAI_API, GET_DIENTHOAI_API } from '../../redux/constants/DienThoaiConst';
import DienThoaiInput from '../../components/InputModal/DienThoaiInput';
import { Pagination } from 'antd';
export default function DienThoai(props) {

  const Dispatch = useDispatch();
  const { taskList } = useSelector(state => state.DienThoaiReducers)


  // let [state, setState] = useState({
  //   taskList: [],
  //   values: {
  //     IDDT: "",
  //     IDLoaiDT: "",
  //     TenDT: "",
  //     MoTa: "",
  //     AnhDT: "",
  //     MauSac: "",
  //     Gia: "",
  //     SoLuong: "",
  //     Sale: "",
  //   },
  //   errors: {
  //     IDDT: "",
  //     IDLoaiDT: "",
  //     TenDT: "",
  //     MoTa: "",
  //     AnhDT: "",
  //     MauSac: "",
  //     Gia: "",
  //     SoLuong: "",
  //     Sale: "",
  //   }
  // });

  // console.log('3',state.values.IDDT)
  //   const addTaskDienThoai = (e) => {
  //     // e.preventDefault(); 
  //     e.preventDefault();
  //     Dispatch({
  //         type: ADD_DIENTHOAI_API,
  //         // idLoaiDT: itemLSP.id,
  //         // tenLoaiDT: itemLSP.ten,
  //         iddt:state.values.iddt,
  //         idLoaiDT: state.values.idLoaiDT,
  //         tenDT: state.values.tenDT,
  //         moTa: state.values.moTa,
  //         anhDT: state.values.anhDT,
  //         mauSac: state.values.mauSac,
  //         gia: state.values.gia,
  //         soLuong: state.values.soLuong,
  //         sale: state.values.sale,

  //     })
  // }


  const getTaskList = () => {
    Dispatch({
      type: GET_DIENTHOAI_API,
      // data:'abc'
    })
  }

  useEffect(() => {
    getTaskList();
    return () => {
    }
  }, [])

  const deleteTaskDienThoai = (IDDT) => {
    Dispatch({
      type: DELETE_DIENTHOAI_API,
      iddt: IDDT,
    })
  }

  const renderTaskAdmin = () => {
    return taskList.filter(item => !item.status).map((item, index) => {
      return <tr key={index}>
        <td className="text-center"><input type="checkbox" className="checkbox-input" /></td>
        <td className="text-left">{item.IDDT}</td>
        <td className="text-left">{item.IDLoaiDT}</td>
        <td className="text-left">{item.TenDT}</td>
        <td className="text-left">{item.MoTa}</td>
        <td className="text-left"><img style={{ width: "100px", height: "100px" }} src={PHOTO_API + item.AnhDT} />  </td>
        <td className="text-left">{item.MauSac}</td>
        <td className="text-left">{item.Gia}</td>
        <td className="text-left">{item.SoLuong}</td>
        <td className="text-left">{item.Sale}</td>

        <td className="text-center">
          <div className="list-func">
            <button className="update function-text" type="button" id="updateEmployee" data-toggle="modal" data-target="#modelId"
              onClick={() => {
                Dispatch({ type: "LOG_MODAL", Component: <DienThoaiInput />, tit: "Sửa Điện Thoại", item: item })
              }}
            >
              Sửa
            </button>
            <button className="remove function-text" type="button" onClick={() => { deleteTaskDienThoai(item.IDDT) }}>
              Xóa
            </button>

          </div>
        </td>
      </tr>

    })
  }


  // phân trang
  // const dispatch = useDispatch();
  // const [currentPage, setCurrentPage] = useState(1);
  // const [itemsPerPage, setItemsPerPage] = useState(5);
  // const {taskList1} = useSelector((state) => state.DienThoaiReducers);

  // const [search, setSearch] = useState({
  //   IDDT: "",
  //   TenDT: "",
  // });
  // const [searchedSanPhams, setSearchedSanPhams] = useState([]);
  // const [displayedSanPhams, setDisplayedSanPhams] = useState([]);

  // useEffect(() => {
  //   const filtered = taskList1.filter((item => !item.status).map((item) => {
  //     return (
  //       item.IDDT.toLowerCase().includes(search.IDDT.toLowerCase()) &&
  //       item.TenDT
  //         .toLowerCase()
  //         .includes(search.TenDT.toLowerCase())
        
  //     );
  //   }))
  //   setSearchedSanPhams(filtered);
  //   setCurrentPage(1); // Reset trang hiện tại về 1
  // }, [search, taskList1]);

  // const handleSearchChange = (e) => {
  //   setSearch((prevSearch) => ({
  //     ...prevSearch,
  //     [e.target.name]: e.target.value,
  //   }));
  // };

  // const totalPages = Math.ceil(searchedSanPhams.length / itemsPerPage);

  // useEffect(() => {
  //   const indexOfLastItem = currentPage * itemsPerPage;
  //   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  //   const currentItems = searchedSanPhams.slice(
  //     indexOfFirstItem,
  //     indexOfLastItem
  //   );
  //   setDisplayedSanPhams(currentItems);
  // }, [searchedSanPhams, currentPage, itemsPerPage]);

  // const paginate = (pageNumber) => {
  //   setCurrentPage(pageNumber);
  // };

  // const getPageNumbers = () => {
  //   const pageNumbers = [];

  //   if (totalPages <= 6) {
  //     for (let i = 1; i <= totalPages; i++) {
  //       pageNumbers.push(i);
  //     }
  //   } else {
  //     if (currentPage <= 3) {
  //       for (let i = 1; i <= 5; i++) {
  //         pageNumbers.push(i);
  //       }
  //       pageNumbers.push("...");
  //       pageNumbers.push(totalPages);
  //     } else if (currentPage >= totalPages - 2) {
  //       pageNumbers.push(1);
  //       pageNumbers.push("...");
  //       for (let i = totalPages - 4; i <= totalPages; i++) {
  //         pageNumbers.push(i);
  //       }
  //     } else {
  //       pageNumbers.push(1);
  //       pageNumbers.push("...");
  //       for (let i = currentPage - 1; i <= currentPage + 1; i++) {
  //         pageNumbers.push(i);
  //       }
  //       pageNumbers.push("...");
  //       pageNumbers.push(totalPages);
  //     }
  //   }

  //   return pageNumbers;
  // };
  //eee



  return (
    <div className="content" >
      <div className="content-title">
        <div className="title-name">NHÂN VIÊN</div>
        <div className="title-btn">
          <button className="btn" id="addEmployee" type="button" data-toggle="modal" data-target="#modelId"
            onClick={() => {
              Dispatch({ type: "LOG_MODAL", Component: <DienThoaiInput />, tit: "Thêm Điện Thoại", item: {} })
            }}
          >Thêm mới nhân viên</button>
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
                <th className="text-left" style={{ width: 150 }}>Mã điện thoại </th>
                <th className="text-left" style={{ width: 150 }}>Mã loại điện thoại</th>
                <th className="text-left" style={{ width: 150 }}>Tên điện thoại </th>
                <th className="text-left" style={{ width: 150 }}>Mô tả</th>
                <th className="text-left" style={{ width: 150 }}>Ảnh điện thoại </th>
                <th className="text-left" style={{ width: 150 }}>Màu sắc</th>
                <th className="text-left" style={{ width: 150 }}>Gía</th>
                <th className="text-left" style={{ width: 150 }}>Số lượng</th>
                <th className="text-left" style={{ width: 150 }}>Sale </th>
                <th className="text-left" style={{ width: 100 }}>Chức năng</th>
              </tr>
            </thead>
            <tbody >

              {renderTaskAdmin()}

            </tbody>
          </table>
        </div>
        <Pagination defaultCurrent={6} total={500} />
        {/* phân trang */}

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
        {/* <div className="pagination">
          <ul>
            <li
              className={`${currentPage === 1 ? "disabled" : ""
                }`}
              onClick={() =>
                paginate(currentPage - 1)
              }
            >
              Prev
            </li>
            {getPageNumbers().map((number, index) => {
              return (
                <li
                  key={index}
                  className={`${number === currentPage
                    ? "active"
                    : ""
                    }`}
                  onClick={() =>
                    paginate(
                      number !== "..."
                        ? number
                        : currentPage
                    )
                  }
                >
                  {number}
                </li>
              );
            })}
            <li
              className={`${currentPage === totalPages
                ? "disabled"
                : ""
                }`}
              onClick={() =>
                paginate(currentPage + 1)
              }
            >
              Next
            </li>
          </ul>
        </div> */}
        {/* endphan trang */}
      </div>
    </div>

  )
}

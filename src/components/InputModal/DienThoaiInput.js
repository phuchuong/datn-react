import React, { useState, useEffect } from 'react'
import { Button, Input } from 'antd';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';

import * as Yup from 'yup';
import { withFormik, Formik } from 'formik'
import  Axios  from 'axios';
import { PHOTO_API } from '../../util/constants/settingSystem';



function DienThoaiInput(props) {

    var item = useSelector(state => state.DienThoaiReducers.item);
    var tit = useSelector(state => state.DienThoaiReducers.tit);

    const {
        values,
        touched,
        errors,
        handleChange,
        handleBlur,
        handleSubmit,
        setValues
    } = props;

    useEffect(() => {
        if (item) {
            setValues({
                IDDT: item.iddt,
                IDLoaiDT: item.idLoaiDT,
                TenDT: item.tenDT,
                MoTa: item.moTa,
                AnhDT: item.anhDT,
                MauSac: item.mauSac,
                Gia: item.gia,
                SoLuong: item.soLuong,
                Sale: item.Sale,
            })
        }
    }, [item, setValues]);

    values.tit = tit;

    const [anh,setAnh]=useState('')
    function xulyAnh(e){
      // console.log(e.target.files[0])
      setAnh(e.target.files[0])
      values.AnhDT=e.target.files[0].name;
    }
    function xulyApi(){
      const formData=new FormData();
      formData.append('Photos',anh);
      console.log(formData);
      Axios.post('https://localhost:7091/api/DienThoai/Upload',formData).then((res)=>{console.log(res)})
    }


    return (
        <form className="" onSubmit={handleSubmit}>
            {/* <label htmlFor  /> */}
            <h3>{tit}</h3>
            <Input onChange={handleChange} type="text" name="IDDT" size='large' id className="form-control" placeholder='Mã điện thoại' aria-describedby="helpId" />
            <br />
            <Input onChange={handleChange} type="text" name="IDLoaiDT" size='large' id className="form-control" placeholder='Mã loại điện thoại' aria-describedby="helpId" />
            {/* <div className="text-danger">{errors.IDLoaiDT} </div> */}
            <br />
            <Input onChange={handleChange} type="text" name='TenDT' id className="form-control" placeholder='Tên điện thoại' aria-describedby />
            <br />
            <Input onChange={handleChange} type="text" name="MoTa" size='large' id className="form-control" placeholder='Mô Tả' aria-describedby="helpId" />
            <br />
            
            {/* <Input onChange={handleChange}  type="text" name="AnhDT" size='large'  className="form-control " placeholder='Anh điện thoại' aria-describedby="helpId" /> */}
        

            <div className="form-group">
                <label htmlFor="anh">Ảnh:</label>
                <Input
                  type="file"
                  className="form-control"
                  id="anh"
                  name="file"
                  onChange={xulyAnh}
                />
                <button className="btn" onClick={xulyApi}>cập nhật</button> 
                <img style={{width:'50px',height:'50px'}} src={PHOTO_API+values.AnhDT} placeholder="anhsanpham"/>
                <p>{values.anh}</p>
              </div>


            <Input onChange={handleChange} type="text" name="MauSac" size='large' id className="form-control" placeholder='Màu sắc' aria-describedby="helpId" />
            <br />
            <Input onChange={handleChange} type="text" name="Gia" size='large' id className="form-control" placeholder='Gía' aria-describedby="helpId" />
            <br />
            <Input onChange={handleChange} type="text" name="SoLuong" size='large' id className="form-control" placeholder='Số lượng' aria-describedby="helpId" />
            <br />
            <Input onChange={handleChange} type="text" name="Sale" size='large' id className="form-control" placeholder='Sale' aria-describedby="helpId" />

            {/* <small id="helpId" className="text-muted">Help text</small> */}

            <br />

            <div className="modal-footer">
                <Button type="button" className="btn btn-secondary" data-dismiss="modal">Thoát</Button>
                <Button htmlType="submit" type="button" className="btn btn-primary">Lưu</Button>
            </div>
        </form>



    )
}

const DienThoaibugWithFomik = withFormik({
    mapPropsToValues: () => ({
        IDDT: "",
        IDLoaiDT: "",
        TenDT: "",
        MoTa: "",
        AnhDT: "",
        MauSac: "",
        Gia: "",
        SoLuong: "",
        Sale: "",
        tit: ''
    }),

    // Custom sync validation
    validationSchema: Yup.object().shape({
        //IDLoaiDT: Yup.string(),
        // TenLoaDT: Yup.string(),
        IDDT: Yup.string(),
        IDLoaiDT: Yup.string(),
        TenDT: Yup.string(),
        MoTa: Yup.string(),
        AnhDT: Yup.string(),
        MauSac: Yup.string(),
        Gia: Yup.string(),
        SoLuong: Yup.string(),
        Sale: Yup.string(),


    }),

    // validate: values => {
    //   const errors = {};

    //   if (!values.name) {
    //     errors.name = 'Required';
    //   }
    //   return errors;
    // },

    handleSubmit: (values, { props, setSubmitting }) => {

        let action = {
            type: 'SAVE_DIENTHOAI',
            iddt: values.IDDT,
            idLoaiDT: values.IDLoaiDT,
            tenDT: values.TenDT,
            moTa: values.MoTa,
            anhDT: values.AnhDT,
            mauSac: values.MauSac,
            gia: values.Gia,
            soLuong: values.SoLuong,
            sale: values.Sale,
            tit: values.tit,
        }

        props.dispatch(action)

        console.log('a',props)
        console.log('b',values)


        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'điện thoại',
})(DienThoaiInput);


export default connect()(DienThoaibugWithFomik);
import React, { useState, useEffect } from 'react'

import { ADD_LOAI_API, DELETE_LOAI_API, GET_LOAILISH_API, GET_LOAI_API, PUT_LOAI_API } from '../../redux/constants/LoaiDTConst';
import { withFormik, Formik } from 'formik'
import * as Yup from 'yup';
import { Button, Input } from 'antd';
import { useSelector } from 'react-redux';
import { connect } from 'react-redux';



function LoaidtInput(props) {

    var item = useSelector(state => state.LoaiDTReducers.item);
    var tit = useSelector(state => state.LoaiDTReducers.tit);


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
                IDLoaiDT: item.idLoaiDT,
                TenLoaDT: item.tenLoaiDT
            })
        }
    }, [item, setValues]);

    values.tit = tit;

    return (
        <form className="" onSubmit={handleSubmit}>
            {/* <label htmlFor  /> */}
            <h3>{tit}</h3>
            <Input onChange={handleChange} type="text" name="IDLoaiDT" size='large' id className="form-control" placeholder='Mã loại điện thoại' aria-describedby="helpId" />
            {/* <div className="text-danger">{errors.IDLoaiDT} </div> */}

            <br />
            <Input onChange={handleChange} type="text" name='TenLoaDT' id className="form-control" placeholder='Tên loại điện thoại' aria-describedby />
            <div className="text-danger">{errors.TenLoaDT}</div>

            {/* <small id="helpId" className="text-muted">Help text</small> */}

            <br />

            <div className="modal-footer">
                <Button type="button" className="btn btn-secondary" data-dismiss="modal">Thoát</Button>
                <Button htmlType="submit" type="button" className="btn btn-primary">Lưu</Button>
            </div>
        </form>



    )
}

const LoaiDTbugWithFomik = withFormik({
    mapPropsToValues: () => ({
        IDLoaiDT: '',
        TenLoaDT: '',
        tit: ''
    }),

    // Custom sync validation
    validationSchema: Yup.object().shape({
        //IDLoaiDT: Yup.string(),
        TenLoaDT: Yup.string(),

    }),

    // validate: values => {
    //   const errors = {};

    //   if (!values.name) {
    //     errors.name = 'Required';
    //   }
    //   return errors;
    // },

    handleSubmit: (values, { props, setSubmitting }) => {

        console.log('4', props);

        props.dispatch({
            type: 'SAVE_LOAI',
            idLoaiDT: values.IDLoaiDT,
            tenLoaiDT: values.TenLoaDT,
            tit: values.tit
        })



        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'loai điện thoại',
})(LoaidtInput);


export default connect()(LoaiDTbugWithFomik);
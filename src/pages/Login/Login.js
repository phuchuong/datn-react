import React from 'react'
import { Button, Input } from 'antd';
import { UserOutlined, LockOutlined, FacebookOutlined, TwitterOutlined } from '@ant-design/icons';
import { withFormik, Formik } from 'formik'
import * as Yup from 'yup';
import { connect } from 'react-redux';



function Login(props) {

  const {
    values,
    touched,
    errors,
    handleChange,
    handleBlur,
    handleSubmit,
  } = props;

  return (
    <form onSubmit={handleSubmit} className="container" style={{ height: window.innerHeight }} >
      <div className="d-flex flex-column justify-content-center align-items-center" style={{ height: window.innerHeight }} >
        <h3 className="text-center" style={{ fontWeight: 300, fontSize: 35 }}>Login cyberbugs</h3>
        <div className="d-flex mt-3" >
          <Input onChange={handleChange} style={{ width: '100%', minWidth: 300 }} name="email" size="large" placeholder="email" prefix={<UserOutlined />} />
        </div>
        <div className="text-danger">{errors.email}</div>
        <div className="d-flex mt-3">
          <Input onChange={handleChange} style={{ width: '100%', minWidth: 300 }} type="password" name="password" size="large" placeholder="password" prefix={<LockOutlined />} />
        </div>
        <div className="text-danger">{errors.password}</div>

        <Button htmlType="submit" size="large" style={{ minWidth: 300, backgroundColor: 'rgb(102,117,223)', color: '#fff' }} className="mt-5">Login</Button>


        <div className="social mt-3 d-flex">
          <Button style={{ backgroundColor: 'rgb(59,89,152)' }} shape="circle" size={"large"}>
            <span className="font-weight-bold" style={{ color: '#fff' }} >F</span>
          </Button>
          <Button type="primary ml-3" shape="circle" icon={<TwitterOutlined />} size={"large"}>
          </Button>
        </div>
      </div>

    </form>
  )
}

const LoginbugWithFomik = withFormik({
  mapPropsToValues: () => ({
    email: '',
    password: ''
  }),

  // Custom sync validation
  validationSchema: Yup.object().shape({
    email: Yup.string().required('email is required').email('email is invalid'),
    password: Yup.string().min(6, 'pasword min 6').max(32, 'pasword max 32'),
  }),

  // validate: values => {
  //   const errors = {};

  //   if (!values.name) {
  //     errors.name = 'Required';
  //   }
  //   return errors;
  // },

  handleSubmit: (values, { setSubmitting }) => {
    console.log(values)
    setTimeout(() => {
      alert(JSON.stringify(values, null, 2));
      setSubmitting(false);


    }, 1000);
  },

  displayName: 'Login cyberbugs',
})(Login);


export default LoginbugWithFomik;
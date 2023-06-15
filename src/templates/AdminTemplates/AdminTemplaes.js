import React, { Fragment } from 'react';
import { Route } from 'react-router-dom';
import Header from '../../components/Admin/Header/Header';
import Navbar from '../../components/Admin/Navbar/Navbar';
import Footer from '../../components/Admin/Footer/Footer';





export const AdminTemplate = (props) => {
    const { Compoment, ...propsRoute } = props;
    return <Route {...propsRoute} render={(propsRoute) => {
        return <>
            <Header />
            <div className='main'>
                <Navbar />
                <Compoment {...propsRoute} />
            </div>
            <Footer />
        </>
    }} />

}
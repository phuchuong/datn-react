import React from 'react'
import { Route } from 'react-router-dom';
import { Button, DatePicker, Space, version, Layout } from "antd";


const { Header, Footer, Sider, Content } = Layout;



export const UserLoginTemplate = (props) => {
    let { Compoment, ...restRoute } = props;

    return <Route {...restRoute} render={(propsRoute) => {
        return <>

            <Layout>
                <Sider width={window.innerWidth/2}  style={{height:window.innerHeight, backgroundImage:'url(https://static-images.vnncdn.net/files/publish/2022/9/28/iphone-15-ultra-864.jpg)',backgroundSize:'100%'}}  >
                    {/* sider */}
                </Sider>

                <Content>
                    <Compoment{...propsRoute} />

                </Content>

            </Layout>
        </>
    }} />
}

import React from 'react';
import { Row, Col } from 'antd';
import Header from './component/Header';
import Footer from './component/Footer';
import NavLeft from './component/NavLeft';
import Home from './pages/home'
import './style/Common.less';


export default class Admin extends React.Component{
    render(){
        return(
            <Row className="container">
                <Col span="3" className="nav-left">
                    <NavLeft/>
                </Col>
                <Col span="21" className="main">
                    <Header/>
                    <Row className="content">
                        <Home></Home>
                    </Row>
                    <Footer/>
                </Col>
            </Row>
        );
    };
}
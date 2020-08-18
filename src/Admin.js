import React from "react";
import { Row, Col } from "antd";
import Header from "./component/Header";
import Footer from "./component/Footer";
import NavLeft from "./component/NavLeft";
import "./style/Common.less";

export default class Admin extends React.Component {
  render() {
    return (
      <Row className="container">
        <Col span="3" className="nav-left">
          <NavLeft />
        </Col>
        <Col span="21" className="main">
          <Header />
          <Row className="content">{this.props.children}</Row>
          <Footer />
        </Col>
      </Row>
    );
  }
}

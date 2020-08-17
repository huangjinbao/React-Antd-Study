/* eslint-disable jsx-a11y/anchor-is-valid */

import React from "react";
import { Row, Col } from "antd";
import "./index.less";
import Utils from "../../utils/Utils";
import Axios from "../../axios";

export default class Header extends React.Component {
  componentWillMount() {
    this.setState({
      username: "Herman",
    });

    setInterval(() => {
      let setDateTime = Utils.formateDate(new Date().getTime());
      this.setState({
        setDateTime,
      });
    }, 1000);

    let json = this.getWeatherDetail();
    console.log(json);
  }

  getWeatherDetail = () => {
    let city = "北京";
    return Axios.jsonp({
      url:
        "http://api.map.baidu.com/telematics/v3/weather?location=" +
        encodeURIComponent(city) +
        "&output=json&ak=3p49MVra6urFRGOT9s8UBWr2",
    }).then((res) => {
      if (res.status === "success") {
        let data = res.results[0].weather_data[0];
        this.setState({
          dayPictureUrl: data.dayPictureUrl,
          weather: data.weather,
        });
      }
    });
  };

  render() {
    return (
      <div className="header">
        <Row className="header-top">
          <Col span="24">
            <p>
              欢迎，{this.state.username} <a href="#">退出</a>
            </p>
          </Col>
        </Row>
        <Row className="breadcrumb">
          <Col span="3" className="breadcrumb-title">
            首页
          </Col>
          <Col span="21" className="weather">
            <span className="weather-date">{this.state.setDateTime}</span>
            <span className="weather-img">
              <img src={this.state.dayPictureUrl} alt=""></img>
            </span>
            <span className="weather-detail">{this.state.weather}</span>
          </Col>
        </Row>
      </div>
    );
  }
}

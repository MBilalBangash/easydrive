import React from "react";
import "./ResponsablePrice.css";
import { Row, Col } from "antd";
import Image9 from "../../assets/measure-kilometer_svgrepo.com.svg";
import Image10 from '../../assets/Frame 11 (1).png'
const ResponsablePrice = () => {
  return (
    <div>
      <div style={{ textAlign: "center" }}>
        <h1>
          Our <span style={{ color: "red" }}>Reasonable Prices</span>
        </h1>
        <p className="title-dis">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          <br />
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <Row gutter={4}>
        <Col lg={12} xs={24} style={{ padding: "15px" }}>
          <div style={{ textAlign: "center" }} className="price-grid-left">
            <img src={Image9} alt="" />
            <p>Price Per Kilometer</p>
            <Row>
              <Col lg={8} xs={12} >
                <div className="left-grid">
                  <p>0-10 Kilometer</p>
                  <p>10-15 Kilometer</p>
                  <p>15-20 Kilometer</p>
                  <p>20-25 Kilometer</p>
                  <p>30-35 Kilometer</p>
                  <p>35-40 Kilometer</p>
                  <p>45-50 Kilometer</p>
                </div>
              </Col>
              <Col lg={16} xs={12}>
                <div className="right-grid">
                  <p>AED 80</p>
                  <p>AED 80</p>
                  <p>AED 80</p>
                  <p>AED 80</p>
                  <p>AED 80</p>
                  <p>AED 80</p>
                  <p>AED 80</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>

        <Col lg={12} xs={24}>
        <div style={{ textAlign: "center" }} className="price-grid-right">
            <img src={Image10} alt="" />
            <p>Price Per Cities</p>
            <Row>
              <Col lg={8} xs={12}>
                <div className="left-grid-right">
                  <p>Abu Dhabi to Dubai</p>
                  <p>Abu Dhabi to Dubai</p>
                  <p>Abu Dhabi to Dubai</p>
                  <p>Abu Dhabi to Dubai</p>
                  <p>Abu Dhabi to Dubai</p>
                  <p>Abu Dhabi to Dubai</p>
                  <p>Abu Dhabi to Dubai</p>
                </div>
              </Col>
              <Col lg={16} xs={12} >
                <div className="right-grid-right">
                  <p>AED 80</p>
                  <p>AED 80</p>
                  <p>AED 80</p>
                  <p>AED 80</p>
                  <p>AED 80</p>
                  <p>AED 80</p>
                  <p>AED 80</p>
                </div>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default ResponsablePrice;

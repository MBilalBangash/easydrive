import React from "react";
import "./Footer.css";
import Image11 from "../../assets/pngimg 2.png";
import Image12 from "../../assets/steering-wheel-car_svgrepo.com (1).svg";
import { Col, Row } from "antd";

import {
  SkypeOutlined,
  FacebookOutlined,
  LinkedinOutlined,
  GoogleOutlined,
} from "@ant-design/icons";

const Footer = () => {
  return (
    <div>
      <div className="footer-contact">
        <Row>
          <Col lg={12} xs={24} style={{ padding: "15px" }}>
            <h1>contact</h1>
            <p>+97157153725373</p>
          </Col>
          <Col lg={12} xs={24}>
            <img src={Image11} alt="" width={"90%"}/>
          </Col>
        </Row>

        <Row gutter={16}>
          <Col className="gutter-row" lg={6} xs={24} sm={24} md={12}>
            <div>
              <center>
                <img src={Image12} alt="" />
              </center>
              <p>
                Safe <span style={{ color: "red" }}>Driver</span>4U
              </p>
            </div>
          </Col>
          <Col className="gutter-row-text" lg={6} xs={24} sm={24} md={12}>
            <div>
              <p style={{ fontSize: "20px", fontWeight: "400px" }}>Sitemap </p>
              <p>Home </p>
              <p>About </p>
              <p>Growers</p>
              <p>Merchants</p>
              <p>Contact</p>
            </div>
          </Col>
          <Col className="gutter-row-text" lg={6} xs={24} sm={24} md={12}>
            <div>
              <p style={{ fontSize: "20px", fontWeight: "400" }}>Socials </p>
              <p>Facebook</p>
              <p>Linkedin</p>
              <p>Instagram</p>
              <p>Twitter</p>
            </div>
          </Col>
          <Col className="gutter-row-text" lg={6} xs={24} sm={24} md={12}>
            <div>
              <p style={{ fontSize: "18px", fontWeight: "400px" }}>
                HEAD OFFICE
              </p>
              <p>
                Xilliams Corner Wine © 2017. 1112 A Market St
                <br /># Ste B22, Charlottesville, CA 45565
              </p>
              <div className="icons">
                <SkypeOutlined />
                <LinkedinOutlined />
                <FacebookOutlined />
                <GoogleOutlined />
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Footer;

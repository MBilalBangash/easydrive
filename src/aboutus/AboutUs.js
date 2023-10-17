import React from "react";
import "./AboutUs.css";
import { Row, Col } from "antd";
import Image from "../assets/honda-cars-png-35 1.png";
import Image1 from "../assets/steering-wheel-car_svgrepo.com.svg";
import Layout from "../layout/layout";

const AboutUs = () => {
  return (
    <Layout>
      <div className="about-bg-color">
      <div><h1>About US</h1></div>
        <p>
          Yorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>
      <div className="about-title">
        <h1>About Us</h1>
        <p>
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          <br />
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>
      <Row gutter={4}>
        <Col lg={12} xs={24} style={{ padding: "15px" }}>
          <p className="about-dis">
            Easy Drive 4u is the only company that provides experienced,
            cost-effective drivers for both personal and business use. We are
            currently operating in all places in Dubai which caters
            professional, well-trained drivers for personal chauffeurs; business
            transportation, packing and moving, personal school pick up/drop
            off, valet parking services, monthly and weekly drivers. Unlike
            other taxi services in Dubai we offer our well experienced drivers
            to drive your own vehicles.
          </p>
          <p className="about-dis">
            Our drivers are well-trained,highly experienced professionals who
            have been thoroughly background-checked, interviewed, and insured.
            From client management to chauffeur services and event drivers, safe
            driver Dubai is the perfect solution for any of your transportation
            need. We provide door-to-door driver service in Dubai to drive you
            in the comfort of your car. Our driver service is available 24/7 for
            trips and travel to any destination in Dubai. We make sure you reach
            your destination on-time, safely, and above all, affordably.
          </p>
          <p className="about-dis">
            According to UAE traffic laws,it is against the law to drink and
            drive if you have been drinking at a party and are unable to operate
            a vehicle. Just give us a call we will pick you and your car from
            the location and drive back you the home.
          </p>
        </Col>

        <div className="about-grid-color">
          <Col lg={12} xs={24}>
            <div className="about-txt">
              <center>
                <img src={Image1} alt="" />
              </center>
              <p>
                Easy<span style={{ color: "red" }}>Driver</span>4U
              </p>
            </div>

            <img className="about-img" src={Image} alt="car" />
          </Col>
        </div>
      </Row>
    </Layout>
  );
};

export default AboutUs;

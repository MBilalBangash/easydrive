import React from "react";
import "./Services.css";
import Image4 from "../../assets/ClockCountdown.svg";
import Image5 from "../../assets/AirplaneTilt.svg";
import Image6 from "../../assets/Lighthouse.svg";
import Image7 from "../../assets/Calendar.svg";
import { Row, Col } from "antd";

const Services = () => {
  const data = [
    {
      image: Image4,
      title: "Hourly Ride",
      text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, usex. Suspendisse ac rhoncus nisl, eu temporurna. Curabitur vel bibendum lorem. Morbiconvallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    },
    {
      image: Image5,
      title: "Airport Pick-Up & Drop-off",
      text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, usex. Suspendisse ac rhoncus nisl, eu temporurna. Curabitur vel bibendum lorem. Morbiconvallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    },

    {
      image: Image6,
      title: "City Tours",
      text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, usex. Suspendisse ac rhoncus nisl, eu temporurna. Curabitur vel bibendum lorem. Morbiconvallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    },

    {
      image: Image7,
      title: "Calendar",
      text: "Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, usex. Suspendisse ac rhoncus nisl, eu temporurna. Curabitur vel bibendum lorem. Morbiconvallis convallis diam sit amet lacinia. Aliquam in elementum tellus.",
    },
  ];
  return (
    <div>
      <div style={{textAlign:"center"}}>
        <h1>
          Our <span style={{ color: "red" }}>Services</span>
        </h1>
        <p className="title-dis">
          Yorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
          <br />
          vulputate libero et velit interdum, ac aliquet odio mattis.
        </p>
      </div>

      <Row gutter={2}>
        {data.map((item, i) => {
          return (
            <Col lg={6} xs={24} sm={24} md={12}>
              <div className="services">
                <center>
                  <img src={item.image} alt="" />
                </center>
                <div>{item.title}</div>
                <p>{item.text}</p>
              </div>
            </Col>
          );
        })}
      </Row>
    </div>
  );
};

export default Services;

import React from "react";
import "./Home.css";
import Image from "../assets/steering-wheel-car_svgrepo.com.svg";
import Image2 from "../assets/car.png";
import Image3 from "../assets/car 2.png";

import { Row, Col } from "antd";
import Services from "./services/Services";
import Work from "./work/Work";
import ResponsablePrice from "./responsableprice/ResponsablePrice";
import Footer from "./footer/Footer";
import { Link } from "react-router-dom";
import ContactForm from "../contactform/ContactForm";
import { Box } from "@mui/material";

const Home = () => {
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={Image} alt="" />
          <p>
            Easy<span className="logo span">Driver</span>4U
          </p>
        </div>
        <div class="menu">
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link to="/service">Services</Link>
            </li>
            <li>
              <Link to="/about-us">About</Link>
            </li>

            <li>
              <Link to="/price">Price</Link>
            </li>
            <li>
              <Link to="/contact-us">Contact</Link>
            </li>
          </ul>
        </div>
        <div className="home-text">
          <p>BOOK YOUR DRIVER NOW</p>
          <p>+97157153725373</p>
        </div>
        <div className="home-img">
          <img src={Image2} alt="car" width={"80%"} height={600} />
        </div>
      </nav>
      <div className="color"></div>
      <Box sx={{marginTop:"-240px",}}>
        <center>
          <ContactForm  />
        </center>
      </Box>
      <Row gutter={4}>
        <Col lg={12} xs={24} style={{ padding: "15px" }}>
          <h1 className="easy-drive-title">Easy Drive4U</h1>
          <p className="easy-drive-dis">
            Torem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus. Maecenas eget condimentum velit, sit amet
            feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus
            enim egestas, ac scelerisque ante pulvinar. Donec ut rhoncus ex.
            Suspendisse ac rhoncus nisl, eu tempor urna. Curabitur vel bibendum
            lorem. Morbi convallis convallis diam sit amet lacinia. Aliquam in
            elementum tellus.
          </p>
          <p className="easy-drive-dis">
            Curabitur tempor quis eros tempus lacinia. Nam bibendum pellentesque
            quam a convallis. Sed ut vulputate nisi. Integer in felis sed leo
            vestibulum venenatis. Suspendisse quis arcu sem. Aenean feugiat ex
            eu vestibulum vestibulum. Morbi a eleifend magna. Nam metus lacus,
            porttitor eu mauris a, blandit ultrices nibh. Mauris sit amet magna
            non ligula vestibulum eleifend. Nulla varius volutpat turpis sed
            lacinia. Nam eget mi in purus lobortis eleifend. Sed nec ante dictum
            sem condimentum ullamcorper quis venenatis nisi. Proin vitae
            facilisis nisi, ac posuere leo.
          </p>
        </Col>

        <Col lg={12} xs={24}>
          <img src={Image3} alt="car2" width={"100%"} />
        </Col>
      </Row>
      <div>
        <Services />
      </div>
      <div>
        <Work />
      </div>
      <div>
        <ResponsablePrice />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
};

export default Home;

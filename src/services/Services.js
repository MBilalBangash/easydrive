import React from "react";
import "./Services.css";
import { Row, Col } from "antd";
import Image1 from "../assets/top illus.png";
import Image4 from "../assets/ClockCountdown (2).svg";
import Image5 from "../assets/AirplaneTilt.svg";
import Image6 from "../assets/Lighthouse.svg";
import Image7 from "../assets/Calendar.svg";
import Layout from "../layout/layout";
import { Box, Grid } from "@mui/material";

const Services = () => {
  return (
    <Layout>
      <Row gutter={4}>
        <Col lg={12} xs={24} style={{ padding: "15px" }}>
          <h1 className="service-title">
            One Of Best Driver Agency Whole Online
            <span style={{ color: "red" }}>Today</span>
          </h1>
          <p className="service-text">
            Norem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis. Class
            aptent taciti sociosqu ad litora torquent per conubia nostra, per
            inceptos himenaeos. Curabitur tempus urna at turpis condimentum
            lobortis.
          </p>
          <button className="service-btn">Book Now</button>
        </Col>

        <Col lg={12} xs={24}>
          <img src={Image1} alt="" width={"450px"} />
        </Col>
      </Row>

     
      <Grid
        sx={{ padding: "8px", paddingY: "1rem" }}
        container
        justifyContent={"center"}
        spacing={2}
      >
        <Grid item lg={4} xs={12}>
          <Box sx={{ borderRadius: "8px",padding:"20px"}}>
            <center>
              <img src={Image5} alt="" />
            </center>
            <h1 style={{fontSize:"24px",fontWeight:"600"}}>Airport Pick-Up & Drop-off</h1>
            <p>
              Torem ipsum dolor sit amet, consectetur adipiscing
              <br /> elit. Etiam euturpis molestie, usex. Suspendisse ac <br />
              rhoncus nisl, eu temporurna.Curabitur vel bibendum lorem.
              <br /> Morbiconvallis convallis diam sitamet lacinia. <br />
              Aliquam in elementum tellus.
            </p>
          </Box>
        </Grid>

        <Grid item lg={4} xs={12}>
          <Box
            sx={{
              background: "red",
              borderRadius: "8px",
              padding:"20px"
            }}
          >
            <center>
              <img src={Image4} alt="" />
            </center>
            <h1 style={{textAlign:"center",color:"white",fontSize:"24px",fontWeight:"600"}}>Hourly Ride </h1>
            <p style={{color:"white",fontSize:"16px",fontWeight:"400"}}>
              Torem ipsum dolor sit amet, consectetur adipiscing
              <br /> elit. Etiam euturpis molestie, usex. Suspendisse ac <br />
              rhoncus nisl, eu temporurna.Curabitur vel bibendum lorem.
              <br /> Morbiconvallis convallis diam sitamet lacinia. <br />
              Aliquam in elementum tellus.
            </p>
          </Box>
        </Grid>

        <Grid item lg={4} xs={12}>
          <Box sx={{ borderRadius: "8px",padding:"20px" }}>
          <p style={{color:"red",
          fontSize:"24",fontWeight:"400"}}>Services</p>
            <p style={{color:"black",
          fontSize:"46px",fontWeight:"500"}}>
              Our Provides
              <br /> Services
            </p>
            <p  style={{color:"#969696",
          fontSize:"16px",fontWeight:"400"}}>
              Gorem ipsum dolor sit amet, consectetur adipiscing elit.
              <br />
              Nunc vulputate libero et velit interdum, ac aliquet
              <br />
              odio mattis. Class aptent taciti sociosqu ad litora
              <br />
              torquent per conubia nostra, per inceptos himenaeos.
              <br />
              Curabitur tempus urna at turpis condimentum
              <br />
              lobortis. Ut commodo efficitur neque. Ut diam quam,
              <br /> semper iaculis condimentum ac, vestibulum eu nisl.{" "}
            </p>
          </Box>
        </Grid>

        <Grid item lg={4} xs={12}>
          <Box
            sx={{
              background: "red",
              borderRadius: "8px",
              padding:"20px"
            }}
          >
            <center>
              <img src={Image7} alt="" />
            </center>
            <h1 style={{textAlign:"center",color:"white",fontSize:"24px",fontWeight:"600"}}>City Tours</h1>
            <p  style={{color:"white",fontSize:"16px",fontWeight:"400"}}>
              Torem ipsum dolor sit amet, consectetur adipiscing
              <br /> elit. Etiam euturpis molestie, usex. Suspendisse ac <br />
              rhoncus nisl, eu temporurna.Curabitur vel bibendum lorem.
              <br /> Morbiconvallis convallis diam sitamet lacinia. <br />
              Aliquam in elementum tellus.
            </p>
          </Box>
        </Grid>

        <Grid item lg={4} xs={12}>
          <Box sx={{ borderRadius: "8px", padding:"20px" }}>
            <center>
              <img src={Image5} alt="" />
            </center>
            <h1 style={{fontSize:"24px",fontWeight:"600",textAlign:"center"}}>Monthly Driver</h1>
            <p  style={{
          fontSize:"16px",fontWeight:"400"}}>
              Torem ipsum dolor sit amet, consectetur adipiscing
              <br /> elit. Etiam euturpis molestie, usex. Suspendisse ac <br />
              rhoncus nisl, eu temporurna.Curabitur vel bibendum lorem.
              <br /> Morbiconvallis convallis diam sitamet lacinia. <br />
              Aliquam in elementum tellus.
            </p>
          </Box>
        </Grid>
      </Grid>
    </Layout>
  );
};

export default Services;

import React from "react";
import "./Contact.css";
import { Row, Col } from "antd";
import Image from "../assets/Screenshot 2023-09-26 at 11.10 1.png";
import {
  WhatsAppOutlined,
  PhoneOutlined,
  MailOutlined,
} from "@ant-design/icons/lib/icons";
import Layout from "../layout/layout";
import ContactForm from "../contactform/ContactForm";
import { Box } from "@mui/material";
const Contact = () => {
  return (
    <Layout>
      <Row gutter={4}>
        <Col lg={12} xs={24} style={{padding:"15px"}}>
          <Box sx={{width:"100%"}}>
            <ContactForm text="Contact US" width="85%"/>
          </Box>
        </Col>

        <Col lg={12} xs={24}>
          <div className="contact-map">
            <img src={Image} alt="" />
          </div>

          <Row>
            <div className="contact-icons">
              <Col>
                <PhoneOutlined
                  style={{ marginTop: "10px", fontSize: "24px" }}
                />
              </Col>
              <Col>
                <WhatsAppOutlined
                  style={{ marginTop: "20px", fontSize: "24px" }}
                />
              </Col>
              <Col>
                <MailOutlined style={{ marginTop: "20px", fontSize: "24px" }} />
              </Col>
            </div>

            <div className="contact-num">
              <Col>
                <p>Phone</p>
                <div>+9717631585318</div>
              </Col>
              <Col>
                <p>Whatsapp</p>
                <div>+9717631585318</div>
              </Col>
              <Col>
                <p>Email</p>
                <div>safedriver4u@gmail.com</div>
              </Col>
            </div>
          </Row>
        </Col>
      </Row>
     
    </Layout>
  );
};

export default Contact;

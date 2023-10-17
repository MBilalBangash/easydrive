import React from 'react'
import './Work.css'
import { Row,Col } from 'antd'
import Image8 from '../../assets/Frame 6.png'


const Work = () => {
  const data = [
    {
      image: Image8,
      title: "Book Your Driver",
      text: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class ap\is condimentum lobortis.",
    },
    {
      image: Image8,
      title: "Book Your Driver",
      text: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class ap\is condimentum lobortis.",
    },

    {
      image: Image8,
      title: "Book Your Driver",
      text: "Morem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis. Class ap\is condimentum lobortis.",
    },
  ];
  return (
    <div>
        <div style={{textAlign:"center"}}>
        <h1>
          How its <span style={{ color: "red" }}>Work</span>
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
            <Col lg={8} xs={24} sm={24} md={12}>
              <div className="work">
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
  )
}

export default Work

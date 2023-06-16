import React from "react";
import { Row, Col } from "antd";
import Img from "../../assets/forgot.avif";
const LoginImg = () => {
  return (
    <>
      <Row>
        <Col span={24}>
          <img
            src={Img}
            alt=""
            style={{
              backgroundColor: "#1F4EB4",
              height: "100vh",
              width: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          />
        </Col>
      </Row>
    </>
  );
};

export default LoginImg;

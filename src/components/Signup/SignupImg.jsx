import { Row, Col } from "antd";
import React from "react";
import Img from "../../assets/signup.avif";
const SignupImg = () => {
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

export default SignupImg;

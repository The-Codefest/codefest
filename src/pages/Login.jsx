import React from "react";
import LoginImg from "../components/Login/LoginImg";
import LoginFileads from "../components/Login/LoginFileads";
import { Row, Col } from "antd";
const Login = () => {
  return (
    <Row>
      <Col
        sm={24}
        md={12}
        xs={24}
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <LoginFileads />
      </Col>
      <Col xs={0} sm={0} md={12} display={["none", "none", "none", "block"]}>
        <LoginImg />
      </Col>
    </Row>
  );
};

export default Login;

import React from "react";
import SignupFields from "../components/Signup/SignupFields";
import SignupImg from "../components/Signup/SignupImg"
import { Row, Col } from "antd";
const Signup = () => {
  return (
    <Row>
      <Col xs={0} sm={0} md={12} display={["none", "none", "block"]}>
        <SignupImg />
      </Col>
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
        <SignupFields />
      </Col>
    </Row>
  );
};

export default Signup;

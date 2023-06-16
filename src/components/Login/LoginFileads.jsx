import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
import { APIS } from "../../utils/services";
import axios from "axios";

const LoginFileads = () => {
  const navigate = useNavigate();

  const onFinish = async (values) => {
    console.log("Received values of form: ", values);
    try {
      const userData = {
        email: values.email,
        password: values.password,
        userTypeL: "1",
      };
      console.log("userData: ", userData);

      const response = await axios.post(
        "http://192.168.43.45/api/auth/login",
        userData
      );
      console.log(response);
      console.log(response.data);
      if (response?.status === 200) {
        navigate("/");
      }
    } catch (error) {
      console.error("There was a problem with the API operation:", error);
    }
  };

  const { Title } = Typography;
  return (
    <div>
      <Form
        style={{
          margin: "auto",
          display: "block",
          maxWidth: 450,
        }}
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <Title style={{ textAlign: "center" }}>Login</Title>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            size="large"
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            size="large"
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Form.Item name="remember" valuePropName="checked" noStyle>
              <Checkbox>Remember me</Checkbox>
            </Form.Item>
            <Link to={"/forgot"}>Forgot password?</Link>
          </div>
        </Form.Item>

        <Form.Item>
          <Button
            size="large"
            type="primary"
            htmlType="submit"
            className="login-form-button"
            style={{
              width: 450,
            }}
          >
            Log in
          </Button>
          Don't have an Acctoun?
          <Link to={"/signup"} style={{ marginLeft: 8, fontSize: "18px" }}>
            Register now!
          </Link>
        </Form.Item>
      </Form>
    </div>
  );
};
export default LoginFileads;

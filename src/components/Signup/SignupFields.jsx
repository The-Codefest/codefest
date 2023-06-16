import React from "react";
import { LockOutlined, UserOutlined, MailOutlined } from "@ant-design/icons";
import { Button, Form, Input, Typography } from "antd";
import { Link, useNavigate } from "react-router-dom";
// import axios from "axios";
import { APIS } from "../../utils/services";


const SignupFields = () => {
  const navigate = useNavigate();
  const onFinish = async (values) => {
    try {
      console.log("Received values of form: ", values);
      const userData = {
        name: values.name,
        username: values.username,
        email: values.email,
        password: values.password,
      };
      const response = await APIS.post("/sign_up", userData);
      console.log(response);
      if (response?.status === 200) {
        navigate("/login");
      }

    } catch (error) {
      console.error("There was a problem with the axios operation:", error);
    }
  };

  const { Title } = Typography;

  return (
    <div>
      <>
        <Form
          name="normal_login"
          className="login-form"
          initialValues={{
            remember: true,
          }}
          style={{
            margin: "auto",
            display: "block",
            maxWidth: 450,
          }}
          onFinish={onFinish}
        >
          <Title style={{ textAlign: "center" }}>Create an Account</Title>
          <Form.Item
            name="name"
            rules={[
              {
                required: true,
                message: "Please input your first and last names!",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="First and Last name"
            />
          </Form.Item>
          <Form.Item
            name="email"
            rules={[
              {
                type: "email",
                message: "The input is not valid E-mail!",
              },
              {
                required: true,
                message: "Please input your E-mail!",
              },
            ]}
          >
            <Input
              size="large"
              placeholder="user@gmail.com"
              prefix={<MailOutlined className="site-form-item-icon" />}
            />
          </Form.Item>
          <Form.Item
            name="username"
            rules={[
              {
                required: true,
                message: "Please input your Username!",
              },
            ]}
          >
            <Input
              size="large"
              prefix={<UserOutlined className="site-form-item-icon" />}
              placeholder="Username"
            />
          </Form.Item>

          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: "Please input your password!",
              },
            ]}
            hasFeedback
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item
            name="confirm"
            dependencies={["password"]}
            hasFeedback
            rules={[
              {
                required: true,
                message: "Please confirm your password!",
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue("password") === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error(
                      "The two passwords that you entered do not match!"
                    )
                  );
                },
              }),
            ]}
          >
            <Input.Password
              size="large"
              prefix={<LockOutlined className="site-form-item-icon" />}
              placeholder="Confirm Password"
            />
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
              Get Started
            </Button>
            Already have an Account?
            <Link to={"/login"} style={{ marginLeft: 8, fontSize: "18px" }}>
              Login!
            </Link>
          </Form.Item>
        </Form>
      </>
    </div>
  );
};
export default SignupFields;

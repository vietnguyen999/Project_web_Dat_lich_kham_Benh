import "./Login.css";
import {
  Alert,
  Button,
  Form,
  Input,
  message,
  Spin,
} from "antd";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import useScreenSize from "../hooks/useScreenSize";
import { API } from "../constant";
import { setToken } from "../helpers";

export const Login = () => {
  const { isDesktopView } = useScreenSize();

  const navigate = useNavigate();

  const { setUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const value = {
        identifier: values.email,
        password: values.password,
      };
      const response = await fetch(`${API}/auth/local`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(value),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);

        // set the user
        setUser(data.user);

        message.success(`Welcome back ${data.user.username}!`);

        navigate("/home", { replace: true });
      }
    } catch (error) {
      setError(error?.message ?? "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <div className="login">
      <div
        className="App"
        span={isDesktopView ? 8 : 24}
        offset={isDesktopView ? 8 : 0}
      >
        <img className="logo" alt="Business view - Reports" />
        {error ? (
          <Alert
            className="alert_error"
            message={error}
            type="error"
            closable
            afterClose={() => setError("")}
          />
        ) : null}
        <Form
          name="basic"
          layout="vertical"
          onFinish={onFinish}
          autoComplete="off"
          className="form"
        >
          <Form.Item
            label="Email"
            className="input-group"
            name="email"
            rules={[
              {
                required: true,
                type: "email",
              },
            ]}
          >
            <Input placeholder="Email address" />
          </Form.Item>

          <Form.Item
            label="Password"
            className="input-group"
            name="password"
            rules={[{ required: true }]}
          >
            <Input.Password placeholder="Password" />
          </Form.Item>
          {/* <div className="input-group">
            <label
              label="Email"
              name="email"
              rules={[
                {
                  required: true,
                  type: "email",
                },
              ]}
              htmlFor="email text-red-800">Email</label>
            <input type="email" name="email" placeholder="nome@gmail.com" />
          </div>
          <div className="input-group">
            <label
              label="Password"
              name="password"
              rules={[{ required: true }]}
              htmlFor="password">PASSWORD</label>
            <input type="password" name="password" />
          </div> */}
          <Form.Item>
            <Button type="primary" htmlType="submit" className="primary">
              Login {isLoading && <Spin size="small" />}
            </Button>
          </Form.Item>
          {/* <Button 
            type="primary"
            htmlType="submit"
            className="primary">Login{isLoading && <Spin size="small" />}</Button> */}
        </Form>
        <div className="forgot-password">
          <div className="forgot-password-handle">
            <a className="underline text-blue-700" href="#">
              Quên mật khẩu
            </a>
          </div>
          <div className="create-account">
            <span>
              Bạn chưa có tài khoản{" "}
              <a className="underline text-blue-700" href="#">
                Tạo ngay
              </a>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

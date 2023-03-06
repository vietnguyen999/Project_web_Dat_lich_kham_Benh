import "./Login.css";
import {
  Alert,
  Button,
  Card,
  Col,
  Form,
  Input,
  message,
  Row,
  Spin,
  Typography,
} from "antd";
import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import useScreenSize from "../hooks/useScreenSize";
import { API } from "../constant";
import { setToken } from "../helpers";

export const Register = () => {
  const { isDesktopView } = useScreenSize();
  const navigate = useNavigate();

  const { setUser } = useAuthContext();

  const [isLoading, setIsLoading] = useState(false);

  const [error, setError] = useState("");

  const onFinish = async (values) => {
    setIsLoading(true);
    try {
      const response = await fetch(`${API}/auth/local/register`, {
        method: "POST",
        headers: {
          Accept: "*/*",
          "content-Type": "application/json",
        },
        // body: JSON.stringify(values),
        body: JSON.stringify(values),
      });

      const data = await response.json();
      if (data?.error) {
        throw data?.error;
      } else {
        // set the token
        setToken(data.jwt);

        // set the user
        setUser(data.user);

        message.success(`Welcome to Social Cards ${data.user.username}!`);

        navigate("/home", { replace: true });
      }
    } catch (error) {
      setError(error?.message ?? "Something went wrong!");
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <Fragment>
      <div className="login ">
        <div
          className="App-Login"
          span={isDesktopView ? 8 : 24}
          offset={isDesktopView ? 8 : 0}
        >
          <img className="logo" src="" alt="Business view - Reports" />
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
            className="form"
            name="basic"
            layout="vertical"
            onFinish={onFinish}
            autoComplete="off"
          >
            <Form.Item
              label="Username"
              name="username"
              className="input-group"
              rules={[
                {
                  required: true,
                  type: "string",
                },
              ]}
            >
              <Input placeholder="Username" />
            </Form.Item>
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
                <label rules={[
                      {
                        required: true,
                        type: "string",
                      },
                    ]} 
                    htmlFor="">Họ và tên</label>
                <input type="text" name="username" />
              </div> */}
            {/* <div className="input-group">
                <label htmlFor="address">Đại chỉ</label>
                <input type="text" name="address" />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Số điện thoại</label>
                <input type="number" name="phone"/>
              </div> */}
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
                 htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="nome@gmail.com" />
              </div>
              <div className="input-group">
                <label
                 label="Password"
                 name="password"
                 rules={[{ required: true }]}
                 htmlFor="password">passowrd</label>
                <input type="password" name="password" />
              </div> */}
            {/* <div className="input-group">
                <label htmlFor="rpassword">nhập lại password</label>
                <input type="password" name="rpassword" />
              </div> */}
            {/* <Button
                type="primary"
                htmlType="submit"
              className="primary">ADD{isLoading && <Spin size="small" />}</Button> */}
            <Form.Item>
              <Button type="primary" htmlType="submit" className="primary">
                Submit {isLoading && <Spin size="small" />}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </div>
    </Fragment>
  );
};

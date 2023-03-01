import './Login.css'
import { message, Alert, Spin } from "antd"
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import useScreenSize from "react";
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
    
            navigate("/profile", { replace: true });
          }
        } catch (error) {
          console.error(error);
          setError(error?.message ?? "Something went wrong!");
        } finally {
          setIsLoading(false);
        }
      };
    return(
        <div className='login'>
          <div className="App" span={isDesktopView ? 8 : 24} offset={isDesktopView ? 8 : 0}>
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
        <form
         name="basic"
         layout="vertical"
         onFinish={onFinish}
         autoComplete="off"
         className="form"
        >
          <div className="input-group">
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
          </div>
          <button 
            type="primary"
            htmlType="submit"
            className="primary">Login{isLoading && <Spin size="small" />}</button>
        </form>
        <div className='forgot-password' >
            <div className='forgot-password-handle' >
                <a className='underline text-blue-700' href='#' >Quên mật khẩu</a>
            </div>
            <div className='create-account' >
                <span>Bạn chưa có tài khoản <a className='underline text-blue-700' href='#' >Tạo ngay</a></span>
            </div>
            
        </div>
      </div>
        </div>
    )
}
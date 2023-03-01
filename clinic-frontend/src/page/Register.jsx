import './Login.css'
import { message, Alert, Spin } from "antd"
import React, { Fragment, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../context/AuthContext";
import useScreenSize from "../../hooks/useScreenSize";
import { API } from "../../constant";
import { setToken } from "../../helpers";
    
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
              "Content-Type": "application/json",
            },
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
    
            navigate("/profile", { replace: true });
          }
        } catch (error) {
          console.error(error);
          setError(error?.message ?? "Something went wrong!");
        } finally {
          setIsLoading(false);
        }
      };
    return (
        <div className="login " >
          <div className="App" >
            <img className="logo" src='' alt="Business view - Reports" />
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
              className="form"
              name="basic"
              layout="vertical"
              onFinish={onFinish}
              autoComplete="off"
             >
              <div className="input-group">
                <label rules={[
                      {
                        required: true,
                        type: "string",
                      },
                    ]} 
                    htmlFor="">Họ và tên</label>
                <input type="username" name="email" />
              </div>
              <div className="input-group">
                <label htmlFor="address">Đại chỉ</label>
                <input type="email" name="email" />
              </div>
              <div className="input-group">
                <label htmlFor="phone">Số điện thoại</label>
                <input type="email" name="email"/>
              </div>
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
                 htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="nome@gmail.com" />
              </div>
              <div className="input-group">
                <label
                 label="Password"
                 name="password"
                 rules={[{ required: true }]}
                 htmlFor="password">passowrd</label>
                <input type="email" name="email" placeholder="nome@gmail.com" />
              </div>
              <div className="input-group">
                <label htmlFor="rpassword">nhập lại password</label>
                <input type="password" name="password" />
              </div>
              <button
                type="primary"
                htmlType="submit"
              className="primary">ADD{isLoading && <Spin size="small" />}</button>
            </form>
        </div>                      
      </div>
    )
}
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FormGroup, Col, Input, Button, Row, Label } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import { storeUser } from "../helpers";
import { API } from "../constant";
import "./Login.css";

const initalUser = { email: "", password: "" };
function Login() {
  const navigate = useNavigate();
  const [user, setUser] = useState(initalUser);
  const handleChange = ({ target }) => {
    const { name, value } = target;
    setUser((currenUser) => ({
      ...currenUser,
      [name]: value,
    }));
  };
  const handleClick = async () => {
    const url = `${API}/auth/local`;
    try {
      if (user.identifier && user.password) {
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          toast.success(`welcome ${data.user.username}`, {
            hideProgressBar: true,
          });
          setUser(initalUser);
          navigate("/");
        }
      }
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };
  return (
    <Row className="login">
      <Col sm={4} className="login-form">
        <div className="login-title" >
          <h2>Đăng Nhập</h2>
        </div>
        <FormGroup>
          <Input
            type="email"
            name="identifier"
            onChange={handleChange}
            value={user.identifier}
            placeholder="Nhập email"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password}
            placeholder="Nhập mật khẩu"
          />
        </FormGroup>
        <Button onClick={handleClick} color="primary">
          Đăng Nhập
        </Button>
        <div className="login-create-now" >
          <h6>
            Bạn chưa có tài khoản <Link to="/signUp">Tạo ngay</Link>
          </h6>
        </div>
      </Col>
    </Row>
  );
}

export default Login;

import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FormGroup, Col, Input, Button, Row, Label } from "reactstrap";
import { Link, useAsyncError, useNavigate } from "react-router-dom";
import { storeUser } from "../helpers";
import { API } from "../constant";
import "./Login.css";
import isEmpty from "validator/lib/isEmpty"
import isEmail from "validator/lib/isEmail";

const initalUser = { email: "", password: "" };
function Login() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [user, setUser] = useState(initalUser);
  const [messageEmail, setMessageEmail] = useState("");
  const [messagePasswprd, setMessagePassword] = useState("");
  const navigate = useNavigate()

  const handleChangeEmail = (e) => {
    setEmail(e.target.value)
  };
  const handleChangePassword = (e) => {
    setPass(e.target.value)
  };
  const VilidateAll = () => {
    handleBlurEmail()
    handleBlurPassword()
  }

  const handleBlurEmail = () => {
    const error = {}
    if(isEmpty(email)) {
      error.email = "Vui lòng nhập Email"
    } else if(!isEmail(email)) {
      error.email = "Email không đúng định dạng."
    }
    setMessageEmail(error);
    if(Object.keys(error).length > 0) return false
    return true;
  }
  const handleInputEmail = () => {
    const error = {}
    setMessageEmail("")
    if(Object.keys(error).length > 0) return false
    return true;
  }
  const handleInputPassword = () => {
    const error = {}
    setMessagePassword("")
    if(Object.keys(error).length > 0) return false
    return true;
  }
  const handleBlurPassword = () => {
    const error = {}
    if(isEmpty(pass)) {
      error.pass = "Vui lòng nhập mật khẩu"
    } else if(pass.length < 8) {
      error.pass = "Mật khẩu tối thiểu 8 ký tự."
    }
    setMessagePassword(error);
    if(Object.keys(error).length > 0) return false
    return true;
  }
  const handleClick = async () => {
    const isValidEmail = handleBlurEmail();
    const isValidPassword = handleBlurPassword();
    if(!isValidEmail && !isValidPassword)  return
    const url = `${API}/auth/local`;
    try {
        user.identifier = email;
        user.password = pass;

        console.log(user)
        const { data } = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data);
          toast.success(`welcome ${data.user.username}`, {
            hideProgressBar: true,
          });
          setUser(initalUser);
          navigate("/");
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
        <div className="login-title">
          <h2>Đăng Nhập</h2>
        </div>
        <FormGroup>
          <Input
            type="email"
            name="identifier"
            onChange={handleChangeEmail}
            onBlur={handleBlurEmail}
            onInput={handleInputEmail}
            placeholder="Nhập email"
          />
          <p className="error">{messageEmail.email}</p>
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            onChange={handleChangePassword}
            onBlur={handleBlurPassword}
            onInput={handleInputPassword}
            placeholder="Nhập mật khẩu"
          />
          <p className="error">{messagePasswprd.pass}</p>
        </FormGroup>
        <Button onClick={handleClick} color="primary">
          Đăng Nhập
        </Button>
        <div className="login-create-now">
          <h6>
            Bạn chưa có tài khoản <Link to="/signUp">Tạo ngay</Link>
          </h6>
        </div>
      </Col>
    </Row>
  );
}

export default Login;

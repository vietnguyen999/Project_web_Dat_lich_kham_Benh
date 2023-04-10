import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FormGroup, Col, Input, Button, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { API } from "../constant";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { storeUser } from "../helpers";
import { message, Alert } from "antd";

const info = { username: "", email: "", password: "" };
function Register() {
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [username, setUserName] = useState("");
  const [rpass, setRPass] = useState("");
  const [messageRPassword, setMessageRPassword] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messagePasswprd, setMessagePassword] = useState("");
  const [messageUserName, setMessageUserName] = useState("");
  const navigate = useNavigate();
  const [user, setUser] = useState(info);
  const [error, setError] = useState("");

  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePassword = (e) => {
    setPass(e.target.value);
  };
  const handleChangeRPassword = (e) => {
    setRPass(e.target.value);
  };
  const handleChangeUserName = (e) => {
    setUserName(e.target.value);
  };

  const handleBlurUserName = () => {
    const error = {};
    if (isEmpty(username)) {
      error.username = "Vui lòng nhập họ tên";
    }
    setMessageUserName(error);
    if (Object.keys(error).length > 0) return false;
    return true;
  };
  const handleInputUserName = () => {
    const error = {};
    setMessageEmail("");
    if (Object.keys(error).length > 0) return false;
    return true;
  };

  const handleBlurEmail = () => {
    const error = {};
    if (isEmpty(email)) {
      error.email = "Vui lòng nhập Email";
    } else if (!isEmail(email)) {
      error.email = "Email không đúng định dạng.";
    }
    setMessageEmail(error);
    if (Object.keys(error).length > 0) return false;
    return true;
  };
  const handleInputEmail = () => {
    const error = {};
    setMessageEmail("");
    if (Object.keys(error).length > 0) return false;
    return true;
  };
  const handleInputRPassword = () => {
    const error = {};
    setMessageRPassword("");
    if (Object.keys(error).length > 0) return false;
    return true;
  };
  const handleBlurRPassword = () => {
    const error = {};
    if (isEmpty(rpass)) {
      error.rpass = "Vui lòng nhập mật khẩu";
    } else if (rpass.length < 8) {
      error.rpass = "Mật khẩu tối thiểu 8 ký tự.";
    } else if (pass !== rpass) {
      error.rpass = "Mật khẩu không khớp.";
    }
    setMessageRPassword(error);
    if (Object.keys(error).length > 0) return false;
    return true;
  };
  const handleInputPassword = () => {
    const error = {};
    setMessagePassword("");
    if (Object.keys(error).length > 0) return false;
    return true;
  };
  const handleBlurPassword = () => {
    const error = {};
    if (isEmpty(pass)) {
      error.pass = "Vui lòng nhập mật khẩu";
    } else if (pass.length < 8) {
      error.pass = "Mật khẩu tối thiểu 8 ký tự.";
    }
    setMessagePassword(error);
    if (Object.keys(error).length > 0) return false;
    return true;
  };
  const handleSignUp = async () => {
    const isValidUserName = handleBlurUserName();
    const isValidEmail = handleBlurEmail();
    const isValidPassword = handleBlurPassword();
    const isValidRPassword = handleBlurRPassword();
    if (
      !isValidUserName &&
      !isValidEmail &&
      !isValidPassword &&
      !isValidRPassword
    )
      return;
    const url = `${API}/auth/local/register`;
    try {
      user.username = username;
      user.email = email;
      user.password = pass;
      const { data } = await axios.post(url, user);
      console.log(data);
      if (data.jwt) {
        storeUser(data);
        message.success(`Welcome to Social Cards ${data.user.username}!`);
      }

      setUser(info);
      navigate("/");
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };
  return (
    <div className="login-body">
      <Row className="login">
        {error ? (
          <Alert
            className="alert_error"
            message={error}
            type="error"
            closable
            afterClose={() => setError("")}
          />
        ) : null}
        <Col sm={12} className="login-form">
          <div className="login-title">
            <h1 className="login-title-h2">Đăng Ký</h1>
          </div>

          <FormGroup>
            <label className="login-label">Họ Tên</label>
            <Input
              className="login-input"
              type="text"
              name="username"
              onChange={handleChangeUserName}
              onBlur={handleBlurUserName}
              onInput={handleInputUserName}
              placeholder="Nhập họ tên"
            />
            <p className="login-error">{messageUserName.username}</p>
          </FormGroup>
          <FormGroup>
            <label className="login-label">Email</label>
            <Input
              className="login-input"
              type="email"
              name="email"
              onChange={handleChangeEmail}
              onBlur={handleBlurEmail}
              onInput={handleInputEmail}
              placeholder="Nhập email"
            />
            <p className="login-error">{messageEmail.email}</p>
          </FormGroup>
          <FormGroup>
            <label className="login-label">Mật Khẩu</label>
            <Input
              className="login-input"
              type="password"
              name="password"
              onChange={handleChangePassword}
              onBlur={handleBlurPassword}
              onInput={handleInputPassword}
              placeholder="Nhập mật khẩu"
            />
            <p className="login-error">{messagePasswprd.pass}</p>
          </FormGroup>
          <FormGroup>
            <label className="login-label">Nhập Lại Mật Khẩu</label>
            <Input
              className="login-input"
              type="password"
              name="rpassword"
              onChange={handleChangeRPassword}
              onBlur={handleBlurRPassword}
              onInput={handleInputRPassword}
              placeholder="Nhập lại mật khẩu"
            />
            <p className="login-error">{messageRPassword.rpass}</p>
          </FormGroup>
          <div className="login-btn">
            <Button
              onClick={handleSignUp}
              color="primary"
              className="btn-login"
            >
              Đăng Ký
            </Button>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Register;

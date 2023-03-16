import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FormGroup, Col, Input, Button, Row } from "reactstrap";
import { useNavigate } from "react-router-dom";
import { API } from "../constant";

const info = { username: "", email: "", password: "" };
function Register() {
  const navigate = useNavigate();
  const [user, setUser] = useState(info);
  const handleUserChange = ({ target }) => {
    const { name, value } = target;
    setUser((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  const handleSignUp = async () => {
    const url = `${API}/auth/local/register`;
    try {
      if (user.username && user.email && user.password) {
        const res = await axios.post(url, user);
        if (res) {
          toast.success(`welcome ${user.username}`, { hideProgressBar: true });
          setUser(info);
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
        <div className="login-title">
          <h1>Đăng Ký</h1>
        </div>

        <FormGroup>
          <Input
            type="text"
            name="username"
            onChange={handleUserChange}
            value={user.username}
            placeholder="Nhập họ tên"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            onChange={handleUserChange}
            value={user.email}
            placeholder="Nhập email"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            onChange={handleUserChange}
            value={user.password}
            placeholder="Nhập mật khẩu"
          />
        </FormGroup>
        
        <Button onClick={handleSignUp} color="primary">
          Đăng Ký
        </Button>
      </Col>
    </Row>
  );
}

export default Register;

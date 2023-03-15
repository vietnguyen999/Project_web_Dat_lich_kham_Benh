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
    <Row>
      <Col sm={10}>
        <h1>Register</h1>
        <FormGroup>
          <Input
            type="text"
            name="username"
            onChange={handleUserChange}
            value={user.username}
            placeholder="Nhap email"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="email"
            name="email"
            onChange={handleUserChange}
            value={user.email}
            placeholder="Nhap email"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            onChange={handleUserChange}
            value={user.password}
            placeholder="Nhap mat khau"
          />
        </FormGroup>
        <Button onClick={handleSignUp} color="primary">
          Sign Up
        </Button>
      </Col>
    </Row>
  );
}

export default Register;

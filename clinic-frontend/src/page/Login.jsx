import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { FormGroup, Col, Input, Button, Row } from "reactstrap";
import { Link, useNavigate } from "react-router-dom";
import{ storeUser } from "../helpers";
import { API } from '../constant'


const initalUser = { email: "", password: "" };
function Login() {
  const navigate = useNavigate()
  const [user, setUser] = useState(initalUser);
  const handleChange = ({target}) => {
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
        const {data} = await axios.post(url, user);
        if (data.jwt) {
          storeUser(data)
          toast.success(`welcome ${data.user.username}`,
          {hideProgressBar: true})
          setUser(initalUser)
          navigate("/")
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
        <h1 >Login</h1>
        <FormGroup>
          <Input
            type="email"
            name="identifier"
            onChange={handleChange}
            value={user.identifier}
            placeholder="Nhap email"
          />
        </FormGroup>
        <FormGroup>
          <Input
            type="password"
            name="password"
            onChange={handleChange}
            value={user.password}
            placeholder="Nhap mat khau"
          />
        </FormGroup>
        <Button onClick={handleClick} color="primary">
          Login
        </Button>
        <div>
          <h6>Click <Link to='/register' >Here</Link></h6>
        </div>
      </Col>
    </Row>
  );
}

export default Login;

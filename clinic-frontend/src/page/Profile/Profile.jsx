import { useState } from "react";
import { Button, FormGroup, Input, Label } from "reactstrap";
import isEmail from "validator/lib/isEmail";
import isEmpty from "validator/lib/isEmpty";
import { storeUser, useUserData } from "../../helpers";
import axios from "axios";
import { API, AUTH_TOKEN } from "../../constant";
import { Alert, message } from "antd";
import { Row } from "react-bootstrap";
import { toast } from "react-toastify";

const info = { username: "", email: "" };
function Profile() {
  const { usernameStore, emailStore, idStore } = useUserData();
  const [username, setUsername] = useState(usernameStore);
  const [email, setEmail] = useState(emailStore);
  const [user, setUser] = useState(info);
  const [messageEmail, setMessageEmail] = useState("");
  const [messageUsername, setMessageUsername] = useState("");
  const [error, setError] = useState("");

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleBlurUsername = () => {
    const error = {};
    if (isEmpty(username)) {
      error.username = "Vui lòng nhập họ và tên";
    }
    setMessageUsername(error);
    if (Object.keys(error).length > 0) return false;
    return true;
  };
  const handleInputUsername = () => {
    const error = {};
    setMessageUsername("");
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

  const handleUpdateUserClick = async () => {
    const isValidEmail = handleBlurEmail();
    const isValidUsername = handleBlurUsername();
    if (!isValidEmail && !isValidUsername) return;
    user.username = username;
    user.email = email;
    const url = `${API}/users/${idStore}`;
    try {
      const {data} = await axios.put(
        url,
        user ,
        // {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: "Basic " + localStorage.getItem(AUTH_TOKEN),
        //   },
        // }
      );
      console.log(data.user.username);
      if (data) {
        storeUser(data);
        message.success("Cập nhật thành công!");
      }
      setUser(info);
    } catch (error) {
      toast.error(error.message, {
        hideProgressBar: true,
      });
      console.log("err", error);
    }
  };
  return (
    <Row>
      {error ? (
        <Alert
          className="alert_error"
          message={error}
          type="error"
          closable
          afterClose={() => setError("")}
        />
      ) : null}
      <FormGroup>
        <Label>Họ tên</Label>
        <Input
          type="text"
          name="username"
          onChange={handleChangeUsername}
          onBlur={handleBlurUsername}
          onInput={handleInputUsername}
          value={username}
          // placeholder="Nguyễn Văn A"
        />
        <p className="error">{messageUsername.username}</p>
      </FormGroup>
      <FormGroup>
        <Label>Email</Label>
        <Input
          type="email"
          name="email"
          onChange={handleChangeEmail}
          onBlur={handleBlurEmail}
          onInput={handleInputEmail}
          value={email}
          // placeholder="Nguyễn Văn A"
        />
        <p className="error">{messageEmail.email}</p>
      </FormGroup>
      <div className="btn-calendar">
        <Button type="primary" onClick={handleUpdateUserClick} className="">
          Cập nhật
        </Button>
      </div>
    </Row>
  );
}

export default Profile;

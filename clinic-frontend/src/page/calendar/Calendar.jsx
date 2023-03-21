import { Modal, Col, Row } from "react-bootstrap";
import { message, Alert } from "antd";
import { useState } from "react";
import axios from "axios";
import { FormGroup, Input, Button, Label } from "reactstrap";
import useScreenSize from "../../hooks/useScreenSize";
import "./Calendar.css";
import { API, AUTH_TOKEN } from "../../constant";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import useData from "../../helpers";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";
import { current } from "@reduxjs/toolkit";

const infoCalendar = {
  username: "",
  email: "",
  phone: "",
  datetime: "",
  describe: "",
};
function Calendar(props) {
  const {usernameStore, emailStore} = useData();
  const { isDesktopView } = useScreenSize();
  const [username, setUsername] = useState(usernameStore);
  const [email, setEmail] = useState(emailStore);
  const [phone, setPhone] = useState("");
  const [datetime, setDatetime] = useState("");
  const [describe, setDescribe] = useState("");
  const [messageEmail, setMessageEmail] = useState("");
  const [messageUsername, setMessageUsername] = useState("");
  const [messagePhone, setMessagePhone] = useState("");
  const [messageDatetime, setMessageDatetime] = useState("");
  const [messageDescribe, setMessageDescribe] = useState("");
  const [error, setError] = useState("");

  const [calendar, setCalendar] = useState(infoCalendar);

  const handleChangeUsername = (e) => {
    setUsername(e.target.value)
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeDatetime = (e) => {
    setDatetime(e.target.value);
  };
  const handleChangeDescribe = (e) => {
    setDescribe(e.target.value);
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

  const handleBlurPhone = () => {
    const error = {};
    const regexPhone = /((84|0[3|5|7|8|9])+([0-9]{8})\b)/g;
    if (isEmpty(phone)) {
      error.phone = "Vui lòng nhập số điện thoại";
    } else if (phone.length < 10) {
      error.phone = "Số điện thoại tối thiểu 10 chữ số.";
    } else if (regexPhone.test(phone) === false) {
      error.phone = "Số điện thoại của bạn không đúng định dạng.";
    }
    setMessagePhone(error);
    if (Object.keys(error).length > 0) return false;
    return true;
  };
  const handleInputPhone = () => {
    const error = {};
    setMessagePhone("");
    if (Object.keys(error).length > 0) return false;
    return true;
  };

  const handleBlurDatetime = () => {
    const error = {};
    if (isEmpty(datetime)) {
      error.datetime = "Vui lòng nhập ngày hẹn.";
    }
    setMessageDatetime(error);
    if (Object.keys(error).length > 0) return false;
    return true;
  };
  const handleInputDatetime = () => {
    const error = {};
    setDatetime("");
    if (Object.keys(error).length > 0) return false;
    return true;
  };

  const handleBlurDescribe = () => {
    const error = {};
    if (isEmpty(describe)) {
      error.describe = "Vui lòng nhập.";
    }
    setMessageDescribe(error);
    if (Object.keys(error).length > 0) return false;
    return true;
  };
  const handleInputDescribe = () => {
    const error = {};
    setMessageDescribe("");
    if (Object.keys(error).length > 0) return false;
    return true;
  };

  const handleCalendarClick = async () => {
    const isValidEmail = handleBlurEmail();
    const isValidUsername = handleBlurUsername();
    const isValidPhone = handleBlurPhone();
    const isValidDatetime = handleBlurDatetime();
    const isValidDescribe = handleBlurDescribe();
    if (
      !isValidEmail &&
      !isValidUsername &&
      !isValidPhone &&
      !isValidDatetime &&
      !isValidDescribe
    )
      return
    const url = `${API}/calendars`;
    try {
      calendar.username = username;
      calendar.email = email;
      calendar.phone = phone;
      calendar.datetime = datetime;
      calendar.describe = describe;
      console.log(calendar)
      const res = await axios.post(url, {
        data: calendar
      }, 
        {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + localStorage.getItem(AUTH_TOKEN),
        },
      }
      );
      console.log(res);
      if (res) {
        message.success("Đặt lịch thành công!");
        setCalendar(infoCalendar);
      }
    } catch (error) {
      console.log("err", error);
      toast.error(error.message, {
        hideProgressBar: true,
      });
    }
  };
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Đặt Lịch</Modal.Title>
        {error ? (
          <Alert
            className="alert_error"
            message={error}
            type="error"
            closable
            afterClose={() => setError("")}
          />
        ) : null}
      </Modal.Header>
      <Modal.Body span={isDesktopView ? 8 : 24} offset={isDesktopView ? 8 : 0}>
        <Row className="modal-calendar-day">
          <Col md={5} lg={5} sm={12} xs={12} className="modal-calendar-title">
            <div className="calendar-title">
              <div className="waiting">
                <h2>LƯU Ý</h2>
              </div>
              <div className="list-waiting">
                <div className="waiting-item">
                  <ul>
                    <li>
                      Lịch hẹn chỉ có hiệu lực khi Quý khách được xác nhận chính
                      thức từ Bệnh viện thông qua điện thoại hoặc email.
                    </li>
                    <li>
                      Quý khách sử dụng dịch vụ đặt hẹn trực tuyến, vui lòng đặt
                      hẹn ít nhất 24h trước khi đến khám.
                    </li>
                    <li>
                      Quý khách vui lòng cung cấp thông tin chính xác để được hỗ
                      trợ nhanh nhất.
                    </li>
                    <li>
                      Trường hợp khẩn cấp hay có triệu chứng nguy hiểm, vui lòng
                      liên hệ trực tiếp cơ sở y tế để kịp thời xử lý.
                    </li>
                  </ul>
                  <div className="hotline">
                    <Link className="hotline-link">
                      {" "}
                      <span>
                        <BsFillTelephoneInboundFill />
                      </span>{" "}
                      HOTLINE: 0123456789
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </Col>
          <Col md={7} lg={7} sm={12} xs={12} className="calendar-day-register">
            <div className="calendar-days-form">
              <div className="calendar-days-form-title">
                <h2>ĐẶT LỊCH KHÁM</h2>
              </div>
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
                  // placeholder="acb@gmail.com"
                />
                <p className="error">{messageEmail.email}</p>
              </FormGroup>
              <Row>
                <Col md={6} lg={6} sm={12} xs={12}>
                  <FormGroup>
                    <Label>Số điện thoại</Label>
                    <Input
                      type=""
                      maxLength={10}
                      name="phone"
                      onChange={handleChangePhone}
                      onBlur={handleBlurPhone}
                      onInput={handleInputPhone}
                      placeholder="0123456789"
                    />
                    <p className="error">{messagePhone.phone}</p>
                  </FormGroup>
                </Col>
                <Col md={6} lg={6} sm={12} xs={12}>
                  <FormGroup>
                    <Label>Lịch hẹn</Label>
                    <Input
                      type="datetime-local"
                      name="datetime"
                      onChange={handleChangeDatetime}
                      onBlur={handleBlurDatetime}
                      onInput={handleInputDatetime}
                    />
                    <p className="error">{messageDatetime.datetime}</p>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label>Mô tả</Label>
                <Input
                  type="textarea"
                  rows={4}
                  name="describe"
                  onChange={handleChangeDescribe}
                  onBlur={handleBlurDescribe}
                  onInput={handleInputDescribe}
                  placeholder="Chào Bác Sỹ ! Tôi có vài câu hỏi về [Về Sức Khỏe/răng]. Vui lòng liên hệ tôi sớm nhất. Xin Cảm ơn!"
                />
                <p className="error">{messageDescribe.describe}</p>
              </FormGroup>
              <div className="btn-calendar">
                <Button
                  type="primary"
                  onClick={handleCalendarClick}
                  className=""
                >
                  Đặt Lịch Hẹn
                </Button>
              </div>
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default Calendar;

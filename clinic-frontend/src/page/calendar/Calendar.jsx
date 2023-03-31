import { Modal, Col, Row } from "react-bootstrap";
import { message, Alert } from "antd";
import { useEffect, useState } from "react";
import axios from "axios";
import { FormGroup, Input, Button, Label } from "reactstrap";
import useScreenSize from "../../hooks/useScreenSize";
import "./Calendar.css";
import { API, AUTH_TOKEN } from "../../constant";
import { Link } from "react-router-dom";
import { BsFillTelephoneInboundFill } from "react-icons/bs";
import {
  useCalendarData,
  storeCalendar,
  useUserData,
  useDoctorData,
} from "../../helpers";
import isEmpty from "validator/lib/isEmpty";
import isEmail from "validator/lib/isEmail";

const infoCalendar = {
  username: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  describe: "",
  iduser: "",
  namedoctor: "",
  status: "",
};

function Calendar(props) {
  const { usernameStore, emailStore, idStore } = useUserData();
  const [id, setID] = useState("");
  const [username, setUsername] = useState(usernameStore);
  const [email, setEmail] = useState(emailStore);
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [nameDoctor, setNameDoctor] = useState("");
  const [describe, setDescribe] = useState("");
  const [status, setStatus] = useState(true);
  const [calendar, setCalendar] = useState(infoCalendar);

  const [messageEmail, setMessageEmail] = useState("");
  const [messageUsername, setMessageUsername] = useState("");
  const [messagePhone, setMessagePhone] = useState("");
  const [messageDate, setmessageDate] = useState("");
  const [messageDescribe, setMessageDescribe] = useState("");
  const [error, setError] = useState("");

  const { isDesktopView } = useScreenSize();
  const [listCalendar, setListCalendar] = useState([]);
  const [listDoctor, setListDoctor] = useState([])

  let dateNow = new Date().toLocaleDateString() + "";

  const {
    idCalendarStore,
    usernameCalendarStore,
    emailCalendarStore,
    phoneCalendarStore,
    dateCalendarStore,
    timeCalendarStore,
    nameDoctorCalendarStore,
    describeCalendarStore,
    // statusCalendarStore,
  } = useCalendarData();
  // statusCalendar;
  const { usernameDoctorStore } = useDoctorData();
  useEffect(() => {
    const url = `${API}/calendars`;
    axios
      .get(url)
      .then(({ data }) => setListCalendar(data.data))
      .catch((error) => setError(error));
  }, [idCalendarStore]);

  useEffect(() => {
    const url = `${API}/doctor-informations`;
    axios
      .get(url)
      .then(({ data }) => setListDoctor(data.data))
      .catch((error) => setError(error));
  }, []);

  useEffect(() => {
    if (idCalendarStore !== undefined) {
      setID(idCalendarStore);
      setUsername(usernameCalendarStore);
      setEmail(emailCalendarStore);
      setPhone(phoneCalendarStore);
      setDate(dateCalendarStore);
      setTime(timeCalendarStore);
      setNameDoctor(nameDoctorCalendarStore)
      setDescribe(describeCalendarStore);
      // statusCalendar = statusCalendarStore;
    } else if (idCalendarStore === undefined && listCalendar.length > 0) {
      // eslint-disable-next-line array-callback-return
      listCalendar.map((calendarIdUser) => {
        setID(calendarIdUser.id);
        setUsername(calendarIdUser.attributes.username);
        setEmail(calendarIdUser.attributes.email);
        setPhone(calendarIdUser.attributes.phone);
        setDate(calendarIdUser.attributes.date);
        setTime(calendarIdUser.attributes.time);
        setNameDoctor(calendarIdUser.attributes.namedoctor)
        setDescribe(calendarIdUser.attributes.describe);
      });
    }
  }, [
    listCalendar,
    // id,
  ]);

  useEffect(() => {
    if(usernameDoctorStore !== undefined) {
      console.log("sdfdsfdsfdsf")
      setNameDoctor(usernameDoctorStore)
    }
  }, [usernameDoctorStore])

  const handleChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const handleChangeEmail = (e) => {
    setEmail(e.target.value);
  };
  const handleChangePhone = (e) => {
    setPhone(e.target.value);
  };
  const handleChangeDate = (e) => {
    setDate(e.target.value);
  };
  const handelChangeTime = (e) => {
    setTime(e.target.value);
  };
  const handleChangeDescribe = (e) => {
    setDescribe(e.target.value);
  };
  const handelChangeUserNameDoctor = (e) => {
    setNameDoctor(e.target.value)
  }

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

  const handleBlurDate = () => {
    const error = {};
    if (isEmpty(date)) {
      error.date = "Vui lòng nhập ngày hẹn.";
    }
    setmessageDate(error);
    if (Object.keys(error).length > 0) return false;
    return true;
  };
  const handleInputDate = () => {
    const error = {};
    setDate("");
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

  const handleCalendarClickDelete = () => {
    const url = `${API}/calendars/${id}`;
    localStorage.setItem("calendar", "");
    axios.delete(url);

    setID("");
    setUsername("");
    setEmail("");
    setPhone("");
    setDate("");
    setTime("");
    setDescribe("");
    setCalendar({});
  };

  useEffect(() => {
    console.log(listDoctor)
  }, [listDoctor])

  const handleCalendarClickAcc = async () => {
    const isValidEmail = handleBlurEmail();
    const isValidUsername = handleBlurUsername();
    const isValidPhone = handleBlurPhone();
    const isValidDate = handleBlurDate();
    const isValidDescribe = handleBlurDescribe();
    const objCalendar = {};
    if (
      !isValidEmail &&
      !isValidUsername &&
      !isValidPhone &&
      !isValidDate &&
      !isValidDescribe
    )
      return;
    objCalendar.username = username;
    objCalendar.email = email;
    objCalendar.phone = phone;
    objCalendar.date = date;
    objCalendar.time = time;
    objCalendar.namedoctor = nameDoctor;
    objCalendar.describe = describe;
    objCalendar.iduser = idStore;
    if (dateNow < date) {
      setStatus(true);
    } else {
      setStatus(false);
    }
    objCalendar.status = status;
    // console.log(objCalendar);
    const url = `${API}/calendars`;
    try {
      const res = await axios.post(
        url,
        {
          data: objCalendar,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Basic " + localStorage.getItem(AUTH_TOKEN),
          },
        }
      );
      if (res) {
        console.log("có dô");
        storeCalendar(res);
        message.success("Đặt lịch thành công!");
        setCalendar(objCalendar);
      }
    } catch (error) {
      setError(error);
    }
  };
  const handleCalendarClickUpdate = async () => {
    const isValidEmail = handleBlurEmail();
    const isValidUsername = handleBlurUsername();
    const isValidPhone = handleBlurPhone();
    const isValidDate = handleBlurDate();
    const isValidDescribe = handleBlurDescribe();
    if (
      !isValidEmail &&
      !isValidUsername &&
      !isValidPhone &&
      !isValidDate &&
      !isValidDescribe
    )
      return;
    calendar.username = username;
    calendar.email = email;
    calendar.phone = phone;
    calendar.date = date;
    calendar.time = time;
    calendar.describe = describe;
    calendar.iduser = idStore;
    if (dateNow < date) {
      setStatus(true);
    } else {
      setStatus(false);
    }
    calendar.status = status;
    const url = `${API}/calendars/${id}`;
    try {
      const res = await axios.put(
        url,
        {
          data: calendar,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Basic` + localStorage.getItem(AUTH_TOKEN),
            // 'Content-Type': 'application/json',
            // 'Authorization': 'Bearer '+ localStorage.getItem(AUTH_TOKEN)
          },
        }
      );
      if (res) {
        storeCalendar(res);
        message.success("Cập nhật thành công!");
        setCalendar(infoCalendar);
      }
    } catch (error) {
      setError(error);
    }
  };

  useEffect(() => {
    console.log(calendar);
  }, [calendar]);

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
                    <li>{nameDoctor}</li>
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
                <Col md={5} lg={5} sm={12} xs={12}>
                  <FormGroup>
                    <Label>Số điện thoại</Label>
                    <Input
                      type=""
                      maxLength={10}
                      name="phone"
                      onChange={handleChangePhone}
                      onBlur={handleBlurPhone}
                      onInput={handleInputPhone}
                      value={phone}
                      placeholder="0XXXXXXXXX"
                    />
                    <p className="error">{messagePhone.phone}</p>
                  </FormGroup>
                </Col>
                <Col md={4} lg={4} sm={12} xs={12}>
                  <FormGroup>
                    <Label>Lịch hẹn</Label>
                    <Input
                      type="date"
                      name="date"
                      onChange={handleChangeDate}
                      onBlur={handleBlurDate}
                      onInput={handleInputDate}
                      value={date}
                    />
                    <p className="error">{messageDate.date}</p>
                  </FormGroup>
                </Col>
                <Col md={3} lg={3} sm={12} xs={12}>
                  <FormGroup>
                    <Label>Giờ hẹn</Label>
                    <Input
                      value={time}
                      onChange={handelChangeTime}
                      type="select"
                      name="time"
                    >
                      <option>07:00</option>
                      <option>08:00</option>
                      <option>09:00</option>
                      <option>10:00</option>
                      <option>11:00</option>
                      <option>13:00</option>
                      <option>14:00</option>
                      <option>15:00</option>
                      <option>16:00</option>
                      <option>17:00</option>
                      <option>19:00</option>
                      <option>20:00</option>
                      <option>21:00</option>
                    </Input>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label>Bác sĩ</Label>
                <Input
                  value={nameDoctor}
                  onChange={handelChangeUserNameDoctor}
                  type="select"
                  name="usernameDoctor"
                >
                  {listDoctor.map((doctor) => {
                    return (
                      <option key={ doctor.id }>{doctor.attributes.Name}</option>
                    )
                  })}
                </Input>
              </FormGroup>
              <FormGroup>
                <Label>Mô tả</Label>
                <Input
                  type="textarea"
                  rows={4}
                  name="describe"
                  onChange={handleChangeDescribe}
                  onBlur={handleBlurDescribe}
                  onInput={handleInputDescribe}
                  value={describe}
                  placeholder="Chào Bác Sỹ ! Tôi có vài câu hỏi về [Về Sức Khỏe/răng]. Vui lòng liên hệ tôi sớm nhất. Xin Cảm ơn!"
                />
                <p className="error">{messageDescribe.describe}</p>
              </FormGroup>
              {id ? (
                <div className="btn-calendar">
                  <Button
                    type="primary"
                    onClick={handleCalendarClickUpdate}
                    className=""
                  >
                    Cập nhật
                  </Button>
                  <Button
                    type="primary"
                    onClick={handleCalendarClickDelete}
                    className=""
                  >
                    Xóa lịch hẹn
                  </Button>
                </div>
              ) : (
                <div className="btn-calendar">
                  <Button
                    type="primary"
                    onClick={handleCalendarClickAcc}
                    className=""
                  >
                    Đặt Lịch Hẹn
                  </Button>
                </div>
              )}
            </div>
          </Col>
        </Row>
      </Modal.Body>
    </Modal>
  );
}

export default Calendar;

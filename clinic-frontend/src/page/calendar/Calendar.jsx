import { Modal, Col, Row } from "react-bootstrap";
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

const infoCalendar = {
  username: "",
  email: "",
  phone: "",
  datetiem: "",
  describe: "",
};
function Calendar(props) {
  const { isDesktopView } = useScreenSize();
  const [calendar, setCalendar] = useState(infoCalendar);
  const { jwt } = useData();

  const handleCalendarChange = ({ target }) => {
    const { name, value } = target;
    setCalendar((currentUser) => ({
      ...currentUser,
      [name]: value,
    }));
  };
  const handleCalendarClick = async () => {
    // const url = `${API}/calendars`;
    // // console.log(jwt);
    // axios
    // .post(
    //   url,
    //   calendar,
    //   {
    //     headers: {
    //       "Content-Type": "application/json",
    //       // "Authorization": 'Bearer '+ jwt,
    //     },
    //   }
    // )
    // .then((res) => {
    //   console.log("data", res.data);
    // })
    // .catch((err) => {
    //   console.log("err", err);

    // });
    const url = `${API}/calendars`;
    try {
      if (
        calendar.username &&
        calendar.email &&
        calendar.phone &&
        calendar.datetime &&
        calendar.describe
      ) {
        axios({
          method: "post",
          url,
          calendar,
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${jwt}`,
          }
        });
        // const res = await axios.post(url, calendar,
        //   {
        //   headers: {
        //     "Content-Type": "application/json",
        //     Authorization: "Bearer " + localStorage.getItem("authToken"),
        //   },
        // }
        // );

        // if (res) {
        //   toast.success("Đặt lịch thành công", { hideProgressBar: true });
        //   setCalendar(infoCalendar);
        // }
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
                  onChange={handleCalendarChange}
                  value={calendar.username}
                  placeholder="Nhập họ tên của bạn"
                />
              </FormGroup>
              <FormGroup>
                <Label>Email</Label>
                <Input
                  type="email"
                  name="email"
                  onChange={handleCalendarChange}
                  value={calendar.email}
                  placeholder="Nhập email của bạn"
                />
              </FormGroup>
              <Row>
                <Col md={6} lg={6} sm={12} xs={12}>
                  <FormGroup>
                    <Label>Số điện thoại</Label>
                    <Input
                      type="string"
                      name="phone"
                      onChange={handleCalendarChange}
                      value={calendar.phone}
                      placeholder="Nhập số điện thoại của bạn"
                      
                    />
                  </FormGroup>
                </Col>
                <Col md={6} lg={6} sm={12} xs={12}>
                  <FormGroup>
                    <Label>Lịch hẹn</Label>
                    <Input
                      type="datetime-local"
                      name="datetime"
                      onChange={handleCalendarChange}
                      value={calendar.datetime}
                    />
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label>Mô tả</Label>
                <Input
                  type="textarea"
                  rows={4}
                  name="describe"
                  onChange={handleCalendarChange}
                  value={calendar.describe}
                  placeholder="Chào Bác Sỹ ! Tôi có vài câu hỏi về [Về Sức Khỏe/răng]. Vui lòng liên hệ tôi sớm nhất. Xin Cảm ơn!"
                />
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

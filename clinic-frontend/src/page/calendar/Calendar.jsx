import { Modal } from "react-bootstrap";
import { useState } from "react";
import { Form, Input, Button, Col, Row } from "antd";
import { useAuthContext } from "../../context/AuthContext";
import "./Calendar.css";

function Calendar(props) {
  const [loading, setLoading] = useState(false);
  const { user, isLoading, setUser } = useAuthContext();
  return (
    <Modal show={props.show} onHide={props.handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Đặt Lịch</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <div className="modal-calendar-day">
          <div className="modal-calendar-title">
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
                </div>
              </div>
            </div>
          </div>
          <div className="calendar-day-register">
            <div className="calendar-days-form">
              <div className="calendar-days-form-title">
                <h2>ĐẶT LỊCH KHÁM</h2>
              </div>
              <Form
                initialValues={{
                  username: user?.username,
                  email: user?.email,
                }}
                name="basic"
                layout="vertical"
                // onFinish={onFinish}
                autoComplete="off"
                className="form"
              >
                <Form.Item
                  label="Họ tên"
                  className="input-group"
                  name="username"
                  rules={[
                    {
                      required: true,
                      type: "string",
                    },
                  ]}
                >
                  <Input />
                </Form.Item>
                <Form.Item
                  label="Email"
                  className="input-group"
                  name="email"
                  rules={[
                    {
                      required: true,
                      type: "email",
                    },
                  ]}
                >
                  <Input placeholder="Email address" />
                </Form.Item>
                <Row>
                  <Col md={12} lg={12} sm={24} xs={24}>
                    <Form.Item
                      label="Số điện thoại"
                      className="input-group"
                      name="phone"
                      rules={[
                        {
                          required: true,
                          type: "number",
                        },
                      ]}
                    >
                      <Input placeholder="Số điện thoại" />
                    </Form.Item>
                  </Col>
                  <Col md={12} lg={12} sm={24} xs={24}>
                    <Form.Item
                      label="Ngày đặt hẹn"
                      className="input-group"
                      name="appointmentdate"
                      rules={[
                        {
                          required: true,
                          type: "date",
                        },
                      ]}
                    >
                      <Input type="datetime-local" />
                    </Form.Item>
                  </Col>
                </Row>
                <Form.Item
                  label="Mô tả triệu chứng/lý do khám"
                  className=" input-group  "
                  name="describe"
                  rules={[
                    {
                      required: true,
                      type: "string",
                      max: 120,
                    },
                  ]}
                >
                  <Input.TextArea
                    placeholder="Chào Bác Sỹ ! Tôi có vài câu hỏi về [Về Sức Khỏe/răng]. Vui lòng liên hệ tôi sớm nhất. Xin Cảm ơn!"
                    rows={4}
                  />
                </Form.Item>
                <Form.Item>
                  <Button
                    className="login-Button primary"
                    type="primary"
                    htmlType="submit"
                  >
                    Đặt lịch hẹn
                    {/* Login {isLoading && <Spin size="small" />} */}
                  </Button>
                </Form.Item>
              </Form>
            </div>
          </div>
        </div>
      </Modal.Body>
    </Modal>
  );
}

export default Calendar;

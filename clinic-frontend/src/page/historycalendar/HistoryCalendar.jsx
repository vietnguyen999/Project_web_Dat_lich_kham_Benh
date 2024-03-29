import { Alert, Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { API } from "../../constant";
import { useCalendarData, useUserData } from "../../helpers";
import "./HistoryCalendar.css";
import Calendar from "../calendar/Calendar";

function HistoryCalendar() {
  const [error, setError] = useState(null);
  const [listCalendar, setListCalendar] = useState([]);
  const { idStore } = useUserData();
  const [id, setId] = useState(undefined);
  const [show, setShow] = useState(false);
  const [listCalendarIdUser, setListCalendarIdUser] = useState([]);
  const {
    idCalendarStore,
    usernameCalendarStore,
    emailCalendarStore,
    phoneCalendarStore,
    dateCalendarStore,
    timeCalendarStore,
    nameDoctorCalendarStore,
    describeCalendarStore,
    statusCalendarStore,
  } = useCalendarData();

  useEffect(() => {
    const url = `${API}/calendars`;
    axios
      .get(url)
      .then(({ data }) => setListCalendar(data.data))
      .catch((error) => setError(error));
  }, [
    idCalendarStore,
    usernameCalendarStore,
    emailCalendarStore,
    phoneCalendarStore,
    dateCalendarStore,
    timeCalendarStore,
    nameDoctorCalendarStore,
    describeCalendarStore,
    statusCalendarStore,
  ]);

  useEffect(() => {
    let list = [];
    listCalendar.map((calendar) => {
      if (calendar.attributes.iduser === idStore) {
        list.push(calendar);
      }
    });

    let sortedListCalendar = list.sort(
      (a, b) =>
        Date.parse(
          new Date(a.attributes.date.split("/").reverse().join("-"))
        ) -
        Date.parse(
          new Date(b.attributes.date.split("/").reverse().join("-"))
        )
    );
    setListCalendarIdUser(sortedListCalendar)
    // listCalendarIdUser.sort(function (a, b) {
    //   return a.attributes.date - b.attributes.date;
    // });
  }, [listCalendar]);

  const handleShow = (idCalendar) => {
    setShow(true);
    setId(idCalendar);
  };

  return (
    <>
      <Row>
        <h2>Lịch sử đặt lịch</h2>
      </Row>
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
        <div className="title-calendar">
          <div className="title-info">
            <div className="title-infor-row-col username">Họ tên</div>
            <div className="title-infor-row-col time">Giờ</div>
            <div className="title-infor-row-col date">Ngày</div>
            <div className="title-infor-row-col namedoctor">Bác sĩ khám </div>
            <div className="title-infor-row-col status"></div>
            <div className="title-infor-row-col default-calendar"></div>
          </div>
        </div>
        <div className="list-calendar">
          {listCalendarIdUser
            ? listCalendarIdUser.map((calendarIdUser) => {
                return (
                  <div key={calendarIdUser.id} className="calendar-id-user">
                    <div className="username  information-span-div">
                      <span>{calendarIdUser.attributes.username}</span>
                    </div>
                    {/* <div className="email">
                      <span>{calendarIdUser.attributes.email}</span>
                    </div> */}
                    {/* <div className="phone information-span-div">
                      <span  className="information-span">{calendarIdUser.attributes.phone}</span>
                    </div> */}
                    <div className="time information-span-div">
                      <span className="information-span-div-p">
                        {calendarIdUser.attributes.time}
                      </span>
                    </div>
                    <div className="date  information-span-div ">
                      <span className="information-span-div-p">
                        {calendarIdUser.attributes.date}
                      </span>
                    </div>

                    <div className="namedoctor  information-span-div">
                      <span className="information-span-div-p">
                        {calendarIdUser.attributes.namedoctor}
                      </span>
                    </div>
                    {/* <div className="describe">
                      <span>{calendarIdUser.attributes.describe}</span>
                    </div> */}
                    <div className="status  information-span-div ">
                      {calendarIdUser.attributes.status ? (
                        <span className="information-span-chua">Chưa khám</span>
                      ) : (
                        <span className="information-span-da">Đã khám</span>
                      )}
                    </div>
                    <div className="default-calendar">
                      <Button
                        onClick={() => handleShow(calendarIdUser.id)}
                        className="btn-xemchitiet"
                      >
                        Xem chi tiết
                      </Button>
                    </div>
                  </div>
                );
              })
            : null}
          <Calendar
            show={show}
            id={id}
            handleClose={() => {
              setId(undefined);
              setShow(false);
            }}
          />
        </div>
      </Row>
    </>
  );
}

export default HistoryCalendar;

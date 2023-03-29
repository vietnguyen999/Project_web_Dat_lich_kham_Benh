import { Alert, Button } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { API } from "../../constant";
import { useUserData } from "../../helpers";
import "./HistoryCalendar.css";

function HistoryCalendar() {
  const [error, setError] = useState(null);
  const [listCalendar, setListCalendar] = useState([]);
  const { idStore } = useUserData();
  const url = `${API}/calendars`;
  useEffect(() => {
    axios
      .get(url)
      .then(({ data }) => setListCalendar(data.data))
      .catch((error) => setError(error));
  }, []);
  let listCalendarIdUser = [];
  listCalendar.map((calendar) => {
    if (calendar.attributes.iduser === idStore) {
      listCalendarIdUser.push(calendar);
    }
    return listCalendarIdUser;
  });

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
        <div className="list-calendar">
          {listCalendarIdUser
            ? listCalendarIdUser.map((calendarIdUser) => {
                return (
                  <div className="calendar-id-user">
                    <div className="username">
                      <span>{calendarIdUser.attributes.username}</span>
                    </div>
                    <div className="email">
                      <span>{calendarIdUser.attributes.email}</span>
                    </div>
                    <div className="phone">
                      <span>{calendarIdUser.attributes.phone}</span>
                    </div>
                    <div className="datetime">
                      <span>{calendarIdUser.attributes.datetime}</span>
                    </div>
                    <div className="describe">
                      <span>{calendarIdUser.attributes.describe}</span>
                    </div>
                    <div className="delete-calendar">
                      <Button
                        onClick={() => {
                          const url = `${API}/calendars/${calendarIdUser.id}`;
                          axios.delete(url);
                          
                        }}
                      >
                        Xóa
                      </Button>
                    </div>
                  </div>
                );
              })
            : null}
        </div>
      </Row>
    </>
  );
}

export default HistoryCalendar;

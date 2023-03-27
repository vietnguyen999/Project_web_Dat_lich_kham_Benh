import React from "react";
import "./About.css";
import useFetch from "../../hooks/useFectch";
import { useState } from "react";
import { Row, Col } from "react-bootstrap";
import Accordion from "react-bootstrap/Accordion";

export default function Useinput() {
  const { loading, error, data } = useFetch(
    "http://localhost:1337/api/doctor-informations?populate=*"
  );
  const [query, setQuery] = useState("");
  // console.log(data.data);
  if (loading) return <p>loading...</p>;
  if (error) return <p>Eror...</p>;

  return (
    <div>
      <div className="doctor-seach">
        <h5 className="text-seach-doctor-h5">Tìm Kiến Bác Sĩ</h5>
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
      <div>
        {data.data
          .filter((doctor) =>
            doctor.attributes.Name.toLowerCase().includes(query)
          )
          .map((doctor) => (
            <div className="wrapper">
              <Row className="wrapper-row">
                <Col>
                  <img
                    src={`http://localhost:1337${doctor.attributes.imgs.data[0].attributes.url}`}
                    className="imgs-doctor"
                    alt=""
                  />
                </Col>
                <Col>
                  <div className="imgs-name">
                    <h3 className="text-doctor">
                      Bác Sĩ {doctor.attributes.Name}
                    </h3>
                  </div>
                  <div>
                    <h5 className="text-old">Tuổi: </h5>{" "}
                    <p className="text-old-old">{doctor.attributes.old}</p>
                  </div>
                  <div className="text-spe">
                    <h5 className="text-speci">Chuyên Khoa</h5>
                    <p className="text-speci-speci">
                      {" "}
                      {doctor.attributes.specialized}
                    </p>
                  </div>
                  <Accordion>
                    <Accordion.Item eventKey="0">
                      <Accordion.Header>
                        <h5 className="text-exper">Chứng Chỉ</h5>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>{doctor.attributes.experience}</div>
                      </Accordion.Body>
                    </Accordion.Item>
                    <Accordion.Item eventKey="1">
                      <Accordion.Header>
                        <h5 className="text-certi">Kinh Nghiện</h5>
                      </Accordion.Header>
                      <Accordion.Body>
                        <div>{doctor.attributes.certificate}</div>
                      </Accordion.Body>
                    </Accordion.Item>
                  </Accordion>
                  <button className="btn-doctor-datlich">Đặt Lịch Khám</button>
                </Col>
              </Row>
            </div>
          ))}
      </div>
    </div>
  );
}
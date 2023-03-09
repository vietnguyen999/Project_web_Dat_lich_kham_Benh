import React, { useState } from "react";
import { Navbar, Container, Nav, Button, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useAuthContext } from "../context/AuthContext";
import { removeToken } from "../helpers";
import { useNavigate } from "react-router-dom";
import { Dropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { AiOutlineCalendar } from "react-icons/ai";
import "./Nabar.css";
import Calendar from "../page/calendar/Calendar";
import logo1 from "../img/logoviet.png";
import "./Navbar.css";
import { BsCalendarCheck } from "react-icons/bs";
function Nabar() {
  const { user, setUser } = useAuthContext();
  const [show, setShow] = useState(false);
  const navigate = useNavigate();
  const handleLogout = () => {
    removeToken();
    setUser(undefined);
    navigate("/signin", { replace: true });
  };
  const handleShow = () => {
    setShow(true);
  };
  return (
    // variant={"dark"}
    <div>
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <Nav.Link className="navbare " as={Link} to={"/"}>
              <img src={logo1} alt="" className="Navbar-logo" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav className="justify-content-end flex-grow-1 pe-3 navx">
              <Nav.Link className="navbare" as={Link} to={"/rangsu"}>
                RĂNG SỨ THẨM MỸ
              </Nav.Link>
              <Nav.Link className="navbare" as={Link} to={"/blog"}>
                CHỈNH NHA-NIỀNG RĂNG
              </Nav.Link>
              <Nav.Link className="navbare" as={Link} to={"/news"}>
                TRỒNG RĂNG IMPLANT
              </Nav.Link>
              <Nav.Link className="navbare" as={Link} to={"/contact"}>
                NHA KHOA TỔNG QUÁT
              </Nav.Link>
              <Nav.Link className="navbare" as={Link} to={"/list"}>
                BẢNG GIÁ
              </Nav.Link>
              <Nav.Link className="navbare" as={Link} to={"/about"}>
                VỀ CHÚNG TÔI
              </Nav.Link>
            </Nav>
            {/* <Form className="d-flex">
              <Button variant="outline-success" className="onli">
                <Nav.Link className="navbare" as={Link} to={"/signIn"}>
                  Login
                </Nav.Link>
              </Button>
            </Form> */}
            {user ? (
              <>
                <Dropdown>
                  <Dropdown.Toggle
                    className="info"
                    variant="success"
                    id="dropdown-basic"
                  >
                    {user.username}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item>
                      <Nav.Link className="navbare" as={Link} to={"/profile"}>
                        Thông tin cá nhân
                      </Nav.Link>
                    </Dropdown.Item>
                    <Dropdown.Item onClick={handleLogout}>Logout</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </>
            ) : (
              <>
                <Button variant="outline-success" className="onli">
                  <Nav.Link className="navbare" as={Link} to={"/signIn"}>
                    Login
                  </Nav.Link>
                </Button>
              </>
            )}
            <div className="calendar-days">
              <button onClick={handleShow}>
                <span>
                  <AiOutlineCalendar />
                </span>
              </button>
              <Calendar show={show} handleClose={() => setShow(false)} />
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Nabar;

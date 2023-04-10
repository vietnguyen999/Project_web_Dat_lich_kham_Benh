import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo1 from "../../../../img/logoviet.png";
import "../../DefaultLayout/Navbar/Nabar.css";
import "./Header.css"

function Header() {
  return (
    <div  className="layout-login-header">
      <Navbar expand="lg">
        <Container fluid>
          <Navbar.Brand href="/">
            <Nav.Link className="navbare " as={Link} to={"/"}>
              <img src={logo1} alt="" className="Navbar-logo" />
            </Nav.Link>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse className="navbar-help" id="navbarScroll">
            <div className="help">
              <Nav.Link>Cần trợ giúp</Nav.Link>
            </div>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}

export default Header;

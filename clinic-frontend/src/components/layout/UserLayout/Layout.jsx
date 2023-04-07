import { Col, Row } from "react-bootstrap";
import Footer from "../DefaultLayout/Footer/Footer";
import Nabar from "../DefaultLayout/Navbar/Nabar";
import Navbar from "./NavbarUser/Navbar";
import "./UserLayout.css";
function LayoutDefault({ children }) {
  return (
    <div>
      <Nabar />
      <div className="user-info">
        <div className="container-info" >
          <Row className="row-info">
            <Col md={3} lg={3} sm={12} xs={12} className="navbar-info">
              <Navbar />
            </Col>
            <Col md={9} lg={9} sm={12} xs={12} className="show-info">
              {children}
            </Col>
          </Row>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default LayoutDefault;

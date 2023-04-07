import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import "./Navbar.css"

function Navbar(children) {
  return (
    <div>
      <div className="list-skill">
        <div className="personal-information">
          <Nav.Link active className="navbare" as={Link} to={"/profile"}>
            Thông tin cá nhân
          </Nav.Link>
        </div>
        <div className="history">
          <Nav.Link className="navbare" as={Link} to={"/history"}>
            Lịch sử đặt lịch
          </Nav.Link>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

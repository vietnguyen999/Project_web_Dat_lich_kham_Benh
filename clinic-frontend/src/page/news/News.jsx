import React from "react";
import "./News.css";
import { Link } from "react-router-dom";
import { Row, Col } from "react-bootstrap";
import imgs24 from "../../img/imgs24.png";
import imgs25 from "../../img/imgs25.png";
import Footer from "../../layout/Footer";
export default function News() {
  return (
    <div>
      <div className="header-rangsu">
        <p className="header-rangsu-p">
          Trang chủ <span className="header-rangsu-dau">-</span>Trồng Răng
          IMPLANT
        </p>
      </div>
      <Row className="section-rangsu">
        <Col className="section-rangsu-left" xs={12} md={8}>
          <h2 className="section-rangsu-left-h2">TRỒNG RĂNG IMPLANT</h2>
          <p className="section-rangsu-left-p">Tìm được 2 bài viết</p>
          <Row className="section-rangsu-left-tin">
            <Col
              className=" section-rangsu-left-tin-left"
              as={Link}
              to={"/trongrangtoanham"}
              xs={12}
              md={6}
            >
              <img
                src={imgs24}
                alt=""
                className="section-rangsu-left-tin-left-img"
              />
              <h3 className="section-rangsu-left-tin-left-h3">
                TRỒNG RĂNG TOÀN HÀM
              </h3>
              <p className="section-rangsu-left-tin-left-p">
                Trồng răng Implant toàn hàm với kỹ thuật All on 4 hay All on 6
                hiện nay được đánh giá mang lại hiệu quả cao khi phục hồi tình
                trạng mất răng toàn...
              </p>
              <button className="section-rangsu-left-tin-left-btn">
                XEM CHI TIẾT...
              </button>
            </Col>
            <Col
              className=" section-rangsu-left-tin-left"
              as={Link}
              to={"/cayghepinplant"}
              xs={12}
              md={6}
            >
              <img
                src={imgs25}
                alt=""
                className="section-rangsu-left-tin-left-img"
              />
              <h3 className="section-rangsu-left-tin-left-h3">
                CẤY GHÉP IMPLANT
              </h3>
              <p className="section-rangsu-left-tin-left-p">
                Cấy ghép Implant có khả năng phục hồi răng mang lại hiệu quả cải
                thiện tốt như mong đợi của khách hàng trong các trường hợp Mất
                một răng, Mất nhiều răng, Mất toàn hàm....
              </p>
              <button className="section-rangsu-left-tin-left-btn">
                XEM CHI TIẾT...
              </button>
            </Col>
          </Row>
        </Col>
        <Col className="section-rangsu-right" xs={6} md={4}>
          <h4 className="section-rangsu-right-h4">DỊCH VỤ</h4>
          <div className="section-rangsu-right-dichvu">
            <h5 className="section-rangsu-right-dichvu-h5">
            <Link to="/contact" className="section-rangsu-right-dichvu-h5-link"> NHA KHOA TỔNG QUÁT</Link>
            </h5>
            <h5 className="section-rangsu-right-dichvu-h5">
            <Link to="/news" className="section-rangsu-right-dichvu-h5-link"> TRỒNG RĂNG IMPLANT</Link>
            </h5>
            <h5 className="section-rangsu-right-dichvu-h5">
            <Link to="/blog" className="section-rangsu-right-dichvu-h5-link"> CHỈNH NHA - NIỀNG RĂNG</Link>
            </h5>
            <h5 className="section-rangsu-right-dichvu-h5">
            <Link to="/rangsu" className="section-rangsu-right-dichvu-h5-link"> RĂNG SỨ THẪM MỸ</Link>
            </h5>
          </div>
        </Col>
      </Row>

      <Footer />
    </div>
  );
}

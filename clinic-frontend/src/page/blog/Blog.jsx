import React from "react";
import "./Blog.css";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import imgs22 from "../../img/imgs22.png";
import imgs23 from "../../img/imgs23.png";
export default function Blog() {
  return (
    <div>
      <div className="header-chinhnhaniengrang">
        <p className="header-chinhnhaniengrang-p">
          Trang chủ <span className="header-chinhnhaniengrang-dau">-</span>Chỉnh Nha
        </p>
      </div>
      <Container>
      <Row className="section-rangsu">
        <Col className="section-rangsu-left" xs={12} md={8}>
          <h2 className="section-rangsu-left-h2">CHỈNH NHA - NIỀNG RĂNG</h2>
          <p className="section-rangsu-left-p">Tìm được 2 bài viết</p>
          <Row className="section-rangsu-left-tin">
            <Col
              className=" section-rangsu-left-tin-left"
              as={Link}
              to={"/niengrangtrongsuot"}
              xs={12}
              md={6}
            >
              <img
                src={imgs22}
                alt=""
                className="section-rangsu-left-tin-left-img"
              />
              <h3 className="section-rangsu-left-tin-left-h3">
                NIỀNG RĂNG TRONG SUỐT INVISALIGN
              </h3>
              <p className="section-rangsu-left-tin-left-p">
                Niềng răng trong suốt invisalign Là hệ thống máng chỉnh nha
                trong suốt của tập đoàn Align Technology - Hoa Kỳ....
              </p>
              <button className="section-rangsu-left-tin-left-btn">
                XEM CHI TIẾT...
              </button>
            </Col>
            <Col
              className=" section-rangsu-left-tin-left"
              as={Link}
              to={"/niengrangmaccai"}
              xs={12}
              md={6}
            >
              <img
                src={imgs23}
                alt=""
                className="section-rangsu-left-tin-left-img"
              />
              <h3 className="section-rangsu-left-tin-left-h3">
                NIỀNG RĂNG MẮC CÀI
              </h3>
              <p className="section-rangsu-left-tin-left-p">
                Niềng răng mắc cài là gì? Có những loại niềng răng mắc cài nào?
                Ưu, nhược điểm của từng loại mắc cài ra sao? Nên sử dụng loại
                mắc cài nào đ...
              </p>
              <button className="section-rangsu-left-tin-left-btn section-rangsu-left-tin-left-btn1">
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
      </Container>
    </div>
  );
}

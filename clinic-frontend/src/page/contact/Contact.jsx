import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Contact.css";
import { Link } from "react-router-dom";
import imgs26 from "../../img/imgs26.jpg";
import imgs27 from "../../img/imgs27.jpg";
import imgs28 from "../../img/imgs28.jpg";
import imgs29 from "../../img/imgs29.png";
import imgs30 from "../../img/imgs31.jpg";
import imgs31 from "../../img/imgs32.jpg";
export default function Contact() {
  return (
    <div>
      <div className="header-nhakhoa">
        <p className="header-nhakhoa-p">
          Trang chủ <span className="header-nhakhoa-dau">-</span>Nha khoa tổng quát
        </p>
      </div>
      <Container>
      <Row className="section-rangsu">
        <Col className="section-rangsu-left" xs={12} md={8}>
          <h2 className="section-rangsu-left-h2">RĂNG SỨ THẨM MỸ</h2>
          <p className="section-rangsu-left-p">Tìm được 6 bài viết</p>
          <Row className="section-rangsu-left-tin">
            <Col
              className=" section-rangsu-left-tin-left"
              as={Link}
              to={"/taytrangrang"}
              xs={12}
              md={6}
            >
              <img
                src={imgs26}
                alt=""
                className="section-rangsu-left-tin-left-img"
              />
              <h3 className="section-rangsu-left-tin-left-h3">
                TẨY TRẮNG RĂNG
              </h3>
              <p className="section-rangsu-left-tin-left-p">
                Tẩy trắng răng là phương pháp nha khoa có tác dụng giúp loại bỏ
                các sắc tố vàng, nâu đen, xỉn màu trên bề mặt răng đồng thời
                giúp hàm răng...
              </p>
              <button className="section-rangsu-left-tin-left-btn">
                XEM CHI TIẾT...
              </button>
            </Col>
            <Col
              className=" section-rangsu-left-tin-left"
              as={Link}
              to={"/nhorangsua"}
              xs={12}
              md={6}
            >
              <img
                src={imgs27}
                alt=""
                className="section-rangsu-left-tin-left-img"
              />
              <h3 className="section-rangsu-left-tin-left-h3">
                NHỔ RĂNG SỮA TRẺ EM
              </h3>
              <p className="section-rangsu-left-tin-left-p">
                Nhổ răng sữa cho bé khi nào và nhổ như thế nào là điều ba mẹ
                phải lưu ý để giúp quá trình nhổ răng sữa của trẻ an toàn. V...
              </p>
              <button className="section-rangsu-left-tin-left-btn">
                XEM CHI TIẾT...
              </button>
            </Col>
          </Row>

          <Row className="section-rangsu-left-tin">
            <Col
              className=" section-rangsu-left-tin-left"
              as={Link}
              to={"/nhorangsieuam"}
              xs={12}
              md={6}
            >
              <img
                src={imgs28}
                alt=""
                className="section-rangsu-left-tin-left-img"
              />
              <h3 className="section-rangsu-left-tin-left-h3">
                NHỔ RĂNG SIÊU ÂM PIEZOTOME
              </h3>
              <p className="section-rangsu-left-tin-left-p">
                Đau nhức là những nỗi sợ của khách hàng trước mỗi ca nhổ răng!
                Hiểu được điều đó,Nha Khoa Phúc Nguyên đã ứng dụng công nghệ nhổ
                răng...
              </p>
              <button className="section-rangsu-left-tin-left-btn">
                XEM CHI TIẾT...
              </button>
            </Col>
            <Col
              className=" section-rangsu-left-tin-left"
              as={Link}
              to={"/dieutrituy"}
              xs={12}
              md={6}
            >
              <img
                src={imgs29}
                alt=""
                className="section-rangsu-left-tin-left-img"
              />
              <h3 className="section-rangsu-left-tin-left-h3">ĐIỀU TRỊ TỦY</h3>
              <p className="section-rangsu-left-tin-left-p">
                Viêm tủy răng là nguyên nhân phổ biến gây đau nhức và mất răng.
                Viêm tủy răng bao gồm viêm vùng tủy của răng và mô bao xu....
              </p>
              <button className="section-rangsu-left-tin-left-btn">
                XEM CHI TIẾT...
              </button>
            </Col>
          </Row>

          <Row className="section-rangsu-left-tin">
            <Col
              className=" section-rangsu-left-tin-left"
              as={Link}
              to={"/tramrang"}
              xs={12}
              md={6}
            >
              <img
                src={imgs30}
                alt=""
                className="section-rangsu-left-tin-left-img"
              />
              <h3 className="section-rangsu-left-tin-left-h3">TRÁM RĂNG</h3>
              <p className="section-rangsu-left-tin-left-p">
                Trong trường hợp muốn phục hình nhanh tình trạng răng mẻ, vỡ,
                răng thưa, gãy… thì hàn trám răng sẽ là sự lựa chọn tối ưu. Nha
                Khoa Phú...
              </p>
              <button className="section-rangsu-left-tin-left-btn">
                XEM CHI TIẾT...
              </button>
            </Col>
            <Col
              className=" section-rangsu-left-tin-left"
              as={Link}
              to={"/caovoirang"}
              xs={12}
              md={6}
            >
              <img
                src={imgs31}
                alt=""
                className="section-rangsu-left-tin-left-img"
              />
              <h3 className="section-rangsu-left-tin-left-h3">CẠO VÔI RĂNG</h3>
              <p className="section-rangsu-left-tin-left-p">
                Cao răng khi tồn tại quá lâu có thể gây ra nhiều bệnh lý răng
                miệng nguy hiểm. Lấy cao răng là kỹ thuật đơn giản nhất để loại
                bỏ những mảng bám...
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
      </Container>
    </div>
  );
}
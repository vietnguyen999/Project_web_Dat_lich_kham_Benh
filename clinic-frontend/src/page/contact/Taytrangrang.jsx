import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Taytrangrang.css";
import Calendar from "../calendar/Calendar";
import imgs24 from "../../img/imgs24.png";
import taytrangranguenves14 from "../../img/tay_trang_rang-uenves14.jpg";
import quytrinhtaytrangrang from "../../img/quytrinhtaytrangrang.jpg";
import imgs26 from "../../img/imgs26.jpg";
import imgs27 from "../../img/imgs27.jpg";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
export default function Taytrangrang() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <div className="header-taytrangrang">
        <p className="header-taytrangrang-p">
          Trang chủ <span className="header-taytrangrang-dau">-</span>Dịch vụ{" "}
          <span className="header-rangsu-dau">-</span>NHA KHOA TỔNG QUÁT
        </p>
      </div>
      <Row className="section-taytrangrang">
        <Col className="section-taytrangrang-left" xs={12} md={8}>
          <h2 className="section-taytrangrang-left-h2">TẨY TRẮNG RĂNG</h2>
          <img src={imgs26} alt="" className="section-taytrangrang-left-img" />
          <h5 className="section-taytrangrang-left-text-h3">
            Trường hợp nào nên tẩy trắng răng?
          </h5>
          <li className="section-taytrangrang-left-text-li">
            Hàm răng không đều màu
          </li>
          <li className="section-taytrangrang-left-text-li">
            Răng bị xỉn màu, ố vàng kém thẩm mỹ
          </li>
          <li className="section-taytrangrang-left-text-li">
            Răng bị nhiễm kháng sinh ở mức độ nhẹ
          </li>
          <li className="section-taytrangrang-left-text-li">
            Răng nhiễm hóa chất fluor
          </li>
          <li className="section-taytrangrang-left-text-li">
            Người mong muốn hàm răng trắng đẹp hơn
          </li>
          <h5 className="section-taytrangrang-left-text-h3">
            Ưu điểm tẩy trắng răng bằng công nghệ hiện đại
          </h5>
          <p className="section-taytrangrang-left-text-p">
            Công nghệ hiện đại hoạt động dựa trên sự kết hợp đặc biệt giữa chất
            gel làm trắng với ánh sáng xanh dịu nhẹ, sẽ nhanh chóng phá vỡ các
            liên kết hóa học bên trong răng, giúp loại bỏ hiệu quả các lớp ngà
            răng ố vàng, đem đến vẻ trắng sáng cho hàm răng.
          </p>
          <img
            src={taytrangranguenves14}
            alt=""
            className="section-taytrangrang-left-img"
          />
          <p className="section-taytrangrang-left-text-p">
            Công nghệ tẩy trắng răng hiện đại chiếm trọn cảm tình của đông đảo
            khách hàng bởi:
          </p>
          <li className="section-taytrangrang-left-text-li">
            Hiệu quả vượt trội, lên nhiều tông màu ngay sau khi thực hiện.
          </li>
          <li className="section-taytrangrang-left-text-li">
            Mang đến hàm răng trắng sáng, đều màu tự nhiên từ sâu bên trong.
          </li>
          <li className="section-taytrangrang-left-text-li">
            Thời gian thực hiện ngắn, kỹ thuật đơn giản, nhẹ nhàng.
          </li>
          <li className="section-taytrangrang-left-text-li">
            Tính an toàn cao, không gây tác dụng phụ đến sức khỏe hay cho răng
            nướu, không ảnh hưởng đến men răng.
          </li>
          <li className="section-taytrangrang-left-text-li">
            Không có dấu hiệu của dị ứng hay biến chứng nào vì công nghệ có khả
            năng kiểm soát lượng nhiệt và ánh sáng phát ra.
          </li>
          <li className="section-taytrangrang-left-text-li">
            Khả năng duy trì độ trắng sáng của răng lâu dài, từ 3 – 5 năm.
          </li>
          <li className="section-taytrangrang-left-text-li">
            Với phản ứng tái khoáng men sẽ giúp cho răng chắc khỏe hơn.
          </li>
          <h5 className="section-taytrangrang-left-text-h3">
            Quy trình tẩy trắng răng hiệu quả và an toàn tại Nha Khoa Phúc
            Nguyên
          </h5>
          <p className="section-taytrangrang-left-text-p">
            Để đảm bảo an toàn và hiệu quả cho khách hàng, quy trình tẩy trắng
            răng luôn tuân thủ nghiêm ngặt những quy định của cơ quan y tế, kỹ
            thuật quốc tế, với các bước cơ bản như sau:
          </p>
          <img
            src={quytrinhtaytrangrang}
            alt=""
            className="section-taytrangrang-left-img"
          />
          <h5 className="section-taytrangrang-left-text-h3">
            Nha Khoa Phúc Nguyên – Địa chỉ tẩy trắng răng uy tín và chất lượng
          </h5>
          <li className="section-taytrangrang-left-text-li">
            Nha Khoa Phúc Nguyên là một trong những địa chỉ nha khoa ứng dụng
            thành công công nghệ tẩy trắng răng thế hệ mới nhất hiện nay, chắc
            chắn sẽ khiến bạn hài lòng khi thực hiện dịch vụ tại bất kỳ phòng
            khám nào thuộc hệ thống.
          </li>
          <li className="section-taytrangrang-left-text-li">
            Quy trình tẩy trắng răng được thực hiện theo đúng kỹ thuật và tuân
            thủ nghiêm ngặt quy định của cơ quan y tế để mang đến kết quả tốt
            nhất, an toàn nhất, giúp khách hàng có được nụ cười hoàn hảo, hàm
            răng trắng sáng.
          </li>
          <li className="section-taytrangrang-left-text-li">
            Đội ngũ bác sĩ giàu kinh nghiệm, giỏi chuyên môn, có chứng chỉ hành
            nghề, tận tâm và chu đáo sẽ giúp bạn thực sự hài lòng về nụ cười sau
            khi thực hiện dịch vụ.
          </li>
          <li className="section-taytrangrang-left-text-li">
            Sử dụng thuốc tẩy trắng răng chất lượng, được FDA chứng nhận an
            toàn, không gây ảnh hưởng đến sức khỏe răng miệng hay làm hại đến
            men răng. Kết hợp ánh sáng xanh laser hiện đại, đã được điều tiết
            cường độ hoạt động giúp rút ngắn thời gian thực hiện, nhưng đem đến
            hiệu quả cao hơn nhiều lần và không xâm lấn đến cấu trúc của răng.
          </li>
          <li className="section-taytrangrang-left-text-li">
            Mỗi ghế nha khoa được sắp xếp 1 phòng riêng biệt và mỗi khách hàng
            khi tới được trang bị 1 bộ tay khoan riêng, bộ dụng cụ riêng nhằm
            đảm bảo vô trùng, tránh tình trạng lây nhiễm chéo.
          </li>
          <p className="section-taytrangrang-left-text-p">
            Khách hàng có nhu cầu và muốn tìm hiểu rõ hơn về dịch vụ hãy đến
            trực tiếp tại Nha Khoa Phúc Nguyên để được hỗ trợ tốt nhất.
          </p>
          <h6 className="section-taytrangrang-left-text-h6-chiase">
            {" "}
            Chia sẻ{" "}
          </h6>
          <div className="section-taytrangrang-left-text-icon">
            <span className="section-taytrangrang-left-text-icon-fa">
              <FaFacebook />
            </span>
            <span className="section-taytrangrang-left-text-icon-fa">
              <AiFillTwitterCircle />
            </span>
            <span className="section-taytrangrang-left-text-icon-fa">
              <BsPinterest />
            </span>
            <span className="section-taytrangrang-left-text-icon-fa">
              <AiFillGooglePlusCircle />
            </span>
          </div>
          <div className="section-taytrangrang-left-btn">
            <button className="section-taytrangrang-left-text-btn">
              {" "}
              <span>
                <BiPhoneCall />
              </span>{" "}
              0941828083
            </button>
            <button
              onClick={handleShow}
              className="section-taytrangrang-left-text-btn"
            >
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              ĐẶT LỊCH KHÁM
            </button>
            <Calendar show={show} handleClose={() => setShow(false)} />
            <button className="section-taytrangrang-left-text-btn">
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              NHẬN TƯ VẤN
            </button>
          </div>
          <div className="section-taytrangrang-left-text-noidung">
            <h3 className="section-taytrangrang-left-text-noidumg-h3">
              NỘI DUNG LIÊN QUANG{" "}
            </h3>
            <Row>
              <Col
                className=" section-rangsu-left-tin-left"
                as={Link}
                to={"/taytrangrang"}
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
                  phải lưu ý để giúp quá trình nhổ răng sữa của trẻ an toàn.
                  V...
                </p>
                <button className="section-rangsu-left-tin-left-btn">
                  XEM CHI TIẾT...
                </button>
              </Col>
            </Row>
          </div>
        </Col>
        <Col className="section-bocsu-right" xs={6} md={4}>
          <h4 className="section-bocsu-right-h4">DỊCH VỤ</h4>
          <div className="section-bocsu-right-dichvu">
            <h5 className="section-bocsu-right-dichvu-h5">
            <Link to="/contact" className="section-rangsu-right-dichvu-h5-link"> NHA KHOA TỔNG QUÁT</Link>
            </h5>
            <h5 className="section-bocsu-right-dichvu-h5">
            <Link to="/news" className="section-rangsu-right-dichvu-h5-link"> TRỒNG RĂNG IMPLANT</Link>
            </h5>
            <h5 className="section-bocsu-right-dichvu-h5">
            <Link to="/blog" className="section-rangsu-right-dichvu-h5-link"> CHỈNH NHA - NIỀNG RĂNG</Link>
            </h5>
            <h5 className="section-bocsu-right-dichvu-h5">
            <Link to="/rangsu" className="section-rangsu-right-dichvu-h5-link"> RĂNG SỨ THẪM MỸ</Link>
            </h5>
          </div>
        </Col>
      </Row>
    </div>
  );
}

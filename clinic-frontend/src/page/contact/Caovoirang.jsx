import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Caovoirang.css";
import Calendar from "../calendar/Calendar";
import imgs24 from "../../img/imgs24.png";
import imgs27 from "../../img/imgs27.jpg";
import imgs31 from "../../img/imgs32.jpg";
import kiemsoatcaorang from "../../img/kiemsoatcaorang.jpg";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import Footer from "../../layout/Footer";
export default function Caovoirang() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <div className="header-caovoirang">
        <p className="header-caovoirang-p">
          Trang chủ <span className="header-caovoirang-dau">-</span>Dịch vụ{" "}
          <span className="header-caovoirang-dau">-</span>NHA KHOA TỔNG QUÁT
        </p>
      </div>
      <Row className="section-caovoirang">
        <Col className="section-caovoirang-left" xs={12} md={8}>
          <h2 className="section-caovoirang-left-h2">CẠO VÔI RĂNG</h2>
          <img src={imgs31} alt="" className="section-caovoirang-left-img" />
          <h5 className="section-caovoirang-left-text-h3">
            1/ CÁC THÔNG TIN CƠ BẢN VỀ CAO RĂNG (VÔI RĂNG)
          </h5>
          <p className="section-caovoirang-left-text-p">
            Cao răng là một trong những bệnh răng miệng được thường gặp ở rất
            nhiều người. Cao răng làm mất thẩm mỹ và gây nên nhiều bệnh lý như:
            đau nhức chân răng, hôi miệng, viêm nướu,… Vậy, để tìm hiểu kỹ hơn
            về cao răng, mời bạn đọc cùng theo dõi các thông tin cơ bản sau đây.
          </p>
          <h6 className="section-caovoirang-left-text-h6">
            1.1/ Cao răng là gì?
          </h6>
          <p className="section-caovoirang-left-text-p">
            Cao răng hay vôi răng, là những mảng bám có màu vàng, nâu bám cứng
            quanh gốc chân răng. Cao răng có thể xuất hiện ở bên trong hoặc bên
            ngoài của răng, nhưng thường có nhiều ở phía bên trong của hàm
            trăng.
          </p>
          <p className="section-caovoirang-left-text-p">
            Xét về mặt khoa học thì cao răng là hỗn hợp gồm các thành phần như
            canxi carbonat, cặn thức ăn, chất khoáng trong miệng, vi khuẩn, xác
            tế bào chết,…
          </p>
          <h6 className="section-caovoirang-left-text-h6">
            1.2/ Nguyên nhân hình thành cao răng.
          </h6>
          <p className="section-caovoirang-left-text-p">
            Vôi răng hình thành do quá trình ăn uống. Cặn thức ăn bám vào răng
            bị xúc tác bởi nước bọt, vi khuẩn cùng các khoáng chất trong miệng
            đã hình thành nên các mảng bám.
          </p>
          <p className="section-caovoirang-left-text-p">
            Quá trình này diễn ra thường xuyên và liên tục, nếu không được vệ
            sinh sạch sẽ và điều trị đúng cách sẽ hình thành nên vôi, cao răng
            bám chắc ở chân răng.
          </p>
          <h5 className="section-caovoirang-left-text-h3">
            2/ LẤY CAO RĂNG CÓ TÁC DỤNG GÌ? NÊN HAY KHÔNG?
          </h5>
          <p className="section-caovoirang-left-text-p">
            Lấy cao răng là quá trình các nha sĩ sử dụng thiết bị chuyên dụng
            kết hợp với các kỹ thuật: cạo, đánh bóng răng nhằm loại bỏ những
            mảng bám bị vôi hóa
          </p>
          <p className="section-caovoirang-left-text-p">
            Phương pháp này có thao tác khá đơn giản và không gây hại cho răng.
          </p>
          <h6 className="section-caovoirang-left-text-h6">
            2.1/ Ngăn ngừa chảy máu chân răng.
          </h6>
          <p className="section-caovoirang-left-text-p">
            Mảng bám quanh chân răng sẽ tích tụ rất nhiều vi khuẩn, gây khó khăn
            trong việc vệ sinh răng miệng hàng ngày.
          </p>
          <p className="section-caovoirang-left-text-p">
            Do đó, cao răng sẽ làm cho vùng nướu, lợi dễ bị viêm nhiễm và chảy
            máu.
          </p>
          <p className="section-caovoirang-left-text-p">
            Loại bỏ cao răng là cách giúp chân răng được thông thoáng và ngăn
            chặn được tình trạng viêm nướu.
          </p>
          <h6 className="section-caovoirang-left-text-h6">
            2.2/ Phòng tránh các bệnh lý răng miệng.
          </h6>
          <p className="section-caovoirang-left-text-p">
            Khi lớp vôi răng được hình thành, chúng sẽ thu hút một số loài vi
            khuẩn như Veillonella, Actinomyces, Capnocytophaga hay Streptococcus
            (vi khuẩn gây sâu răng).
          </p>
          <p className="section-caovoirang-left-text-p">
            Nếu không sớm được làm sạch, các chủng vi khuẩn này sẽ xâm nhập và
            gây ra nhiều bệnh lý như: hôi miệng, viêm nướu, áp xe,….
          </p>
          <h6 className="section-caovoirang-left-text-h6">
            2.3/ Lợi ích giúp răng trở nên trắng sáng hơn
          </h6>
          <p className="section-caovoirang-left-text-p">
            Cao răng thường sẽ có màu vàng hoặc nặng hơn là nâu, đen. Khi có quá
            nhiều mảng bám vôi răng thì vô tình nụ cười của bạn sẽ trở nên mất
            thẩm mỹ và kém duyên hơn.
          </p>
          <p className="section-caovoirang-left-text-p">
            Không những vậy, vôi răng cũng dễ bị nhiễm màu nên khi sử dụng trà
            hay cà phê chúng sẽ nhanh chóng chuyển qua màu đậm hơn, gây mất thẩm
            mỹ nhiều hơn thông thường.
          </p>
          <img
            src={kiemsoatcaorang}
            alt=""
            className="section-caovoirang-left-img"
          />
          <h5 className="section-caovoirang-left-text-h3">
            3/ QUY TRÌNH LẤY CAO RĂNG TẠI NHA KHOA PHÚC NGUYÊN
          </h5>
          <p className="section-caovoirang-left-text-p">
            Hiện nay, có rất nhiều đơn vị nha khoa thực hiện cạo men răng cho
            bệnh nhân.
          </p>
          <p className="section-caovoirang-left-text-p">
            Nếu bạn đang muốn tìm hiểu một quy trình an toàn và chuẩn theo quy
            định của Bộ y tế thì có thể tham khảo tại Nha khoa Phúc Nguyên như
            sau:
          </p>
          <h6 className="section-caovoirang-left-text-h6">
            Bước 1: Thăm khám và tư vấn cách điều trị.
          </h6>
          <p className="section-caovoirang-left-text-p">
            Thăm khám là bước quan trọng đầu tiên để xác định được mức độ cao
            răng. Từ kết quả thăm khám, các bác sĩ sẽ đưa ra lời khuyên và cách
            điều trị cho từng trường hợp cụ thể.
          </p>
          <h6 className="section-caovoirang-left-text-h6">
            Bước 2: Vệ sinh răng miệng trước khi cạo men răng.
          </h6>
          <p className="section-caovoirang-left-text-p">
            Bước này các bác sĩ sẽ sử dụng dung dịch y tế chuyên dụng để vệ sinh
            răng miệng trước khi thực hiện loại bỏ cao răng.
          </p>
          <p className="section-caovoirang-left-text-p">
            Việc vệ sinh răng miệng sẽ giúp làm lộ ra phần cao răng cần lấy,
            giảm thiểu nguy cơ cao răng bị sót lại. Đồng thời, đảm bảo môi
            trường sạch khuẩn trước khi cạo men răng.
          </p>
          <h6 className="section-caovoirang-left-text-h6">
            Bước 3: Tiến hành lấy cao răng.
          </h6>
          <p className="section-caovoirang-left-text-p">
            Lấy cao răng tại Phúc Nguyên sẽ sử dụng sóng siêu âm cùng các dụng
            cụ đặc biệt để loại bỏ mảng bám răng một cách nhẹ nhàng, hiệu quả.
          </p>
          <p className="section-caovoirang-left-text-p">
            Hạn chế chảy máu chân răng và không gây đau nhức hay tổn hại đến
            răng.
          </p>
          <p className="section-caovoirang-left-text-p">
            Để việc lấy cao răng đạt kết quả cao nhất, bác sĩ sẽ cạo vôi răng
            trên toàn bộ hàm. Các mảng bám răng ở mặt trước, sau, đường viền
            nướu, các kẽ răng… sẽ được làm sạch hoàn toàn một cách nhẹ nhàng.
          </p>
          <h6 className="section-caovoirang-left-text-h6">
            Bước 4: Đánh bóng và kết thúc quy trình.
          </h6>
          <p className="section-caovoirang-left-text-p">
            Bước đánh bóng sẽ giúp răng bạn trắng sáng, loại bỏ nốt những mảng
            bám còn sót lại trên răng và hỗ trợ ngăn ngừa các mảng bám quay trở
            lại.
          </p>
          <p className="section-caovoirang-left-text-p">
            Thông thường, lấy men răng tại sẽ diễn ra trong thời gian từ 15-20
            phút/ ca tùy trình trạng răng.
          </p>
          <p className="section-caovoirang-left-text-p">
            Với những thông tin trong bài viết về việc có nên lấy cao răng
            không? Cũng như cạo vôi răng có ảnh hưởng gì không? Hy vọng, bạn đọc
            có thêm nhiều kinh nghiệm trong việc chăm sóc và bảo vệ răng miệng
            của mình.
          </p>
          <img src={imgs31} alt="" className="section-caovoirang-left-img" />

          <li className="section-caovoirang-left-text-li">
            Đê cao su được đặt ôm sát vào răng chữa tuỷ, là phương tiện cách ly
            hữu hiệu răng điều trị tủy khỏi nước bọt là nguồn chứa vi khuẩn
            trong miệng, đảm bảo cho răng trong môi trường khô, sạch.
          </li>

          <h6 className="section-caovoirang-left-text-h6-chiase"> Chia sẻ </h6>
          <div className="section-caovoirang-left-text-icon">
            <span className="section-caovoirang-left-text-icon-fa">
              <FaFacebook />
            </span>
            <span className="section-caovoirang-left-text-icon-fa">
              <AiFillTwitterCircle />
            </span>
            <span className="section-caovoirang-left-text-icon-fa">
              <BsPinterest />
            </span>
            <span className="section-caovoirang-left-text-icon-fa">
              <AiFillGooglePlusCircle />
            </span>
          </div>
          <div className="section-caovoirang-left-btn">
            <button className="section-caovoirang-left-text-btn">
              {" "}
              <span>
                <BiPhoneCall />
              </span>{" "}
              0941828083
            </button>
            <button
              onClick={handleShow}
              className="section-caovoirang-left-text-btn"
            >
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              ĐẶT LỊCH KHÁM
            </button>
            <Calendar show={show} handleClose={() => setShow(false)} />
            <button className="section-caovoirang-left-text-btn">
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              NHẬN TƯ VẤN
            </button>
          </div>
          <div className="section-caovoirang-left-text-noidung">
            <h3 className="section-caovoirang-left-text-noidumg-h3">
              NỘI DUNG LIÊN QUANG{" "}
            </h3>
            <Row>
              <Col
                className=" section-caovoirang-left-tin-left"
                as={Link}
                to={"/trongrangtoanham"}
                xs={12}
                md={6}
              >
                <img
                  src={imgs24}
                  alt=""
                  className="section-caovoirang-left-tin-left-img"
                />
                <h3 className="section-caovoirang-left-tin-left-h3">
                  TRỒNG RĂNG TOÀN HÀM
                </h3>
                <p className="section-caovoirang-left-tin-left-p">
                  Trồng răng Implant toàn hàm với kỹ thuật All on 4 hay All on 6
                  hiện nay được đánh giá mang lại hiệu quả cao khi phục hồi tình
                  trạng mất răng toàn...
                </p>
                <button className="section-caovoirang-left-tin-left-btn">
                  XEM CHI TIẾT...
                </button>
              </Col>

              <Col
                className=" section-caovoirang-left-tin-left"
                as={Link}
                to={"/nhorangsua"}
                xs={12}
                md={6}
              >
                <img
                  src={imgs27}
                  alt=""
                  className="section-caovoirang-left-tin-left-img"
                />
                <h3 className="section-caovoirang-left-tin-left-h3">
                  NHỔ RĂNG SỮA TRẺ EM
                </h3>
                <p className="section-caovoirang-left-tin-left-p">
                  Nhổ răng sữa cho bé khi nào và nhổ như thế nào là điều ba mẹ
                  phải lưu ý để giúp quá trình nhổ răng sữa của trẻ an toàn.
                  V...
                </p>
                <button className="section-caovoirang-left-tin-left-btn">
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
      <Footer />
    </div>
  );
}

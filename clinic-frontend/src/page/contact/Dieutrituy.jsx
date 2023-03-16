import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Dieutrituy.css";
import Calendar from "../calendar/Calendar";
import imgs24 from "../../img/imgs24.png";
import imgs27 from "../../img/imgs27.jpg";
import imgs29 from "../../img/imgs29.png";
import chuatuyrang from "../../img/chuatuyrang.jpg";
import dieutrituyxq from "../../img/dieutrituyxq.jpg";
import dieutrituyrang from "../../img/dieutrituyrang.jpg";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
export default function Dieutrituy() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <div className="header-dieutrituy">
        <p className="header-dieutrituy-p">
          Trang chủ <span className="header-dieutrituy-dau">-</span>Dịch vụ{" "}
          <span className="header-dieutrituy-dau">-</span>NHA KHOA TỔNG QUÁT
        </p>
      </div>
      <Row className="section-dieutrituy">
        <Col className="section-dieutrituy-left" xs={12} md={8}>
          <h2 className="section-dieutrituy-left-h2">ĐIỀU TRỊ TỦY</h2>
          <img src={imgs29} alt="" className="section-dieutrituy-left-img" />
          <h5 className="section-dieutrituy-left-text-h3">
            Điều trị nội nha, chữa tủy răng là gì?
          </h5>
          <p className="section-dieutrituy-left-text-p">
            Mỗi răng trên cung hàm có một hệ thống mạch máu và thần kinh giúp
            nuôi dưỡng và dẫn truyền cảm giác kích thích từ bên ngoài. Hệ thống
            mạch máu và thần kinh này gọi là tuỷ răng, có cấu trúc phức tạp và
            thay đổi trên từng răng, từng cá nhân và độ tuổi…Ví dụ: răng cửa hàm
            trên thường có 1 ống tuỷ nhưng răng cối lớn hàm trên thường có 3
            hoặc 4 ống tuỷ; răng người già có tuỷ răng hay bị canxi hoá gây khó
            khăn cho việc nội nha…
          </p>
          <p className="section-dieutrituy-left-text-p">
            Tuỷ răng có thể bị tổn thương không thể hồi phục do nhiều nguyên
            nhân như sự xâm nhập của vi khuẩn (do sâu răng, viêm nha chu v.v),
            chấn thương (cơ học, nhiệt độ…)…khiến răng bạn không ngừng đau buốt,
            lúc đó răng cần được điều trị nội nha.{" "}
          </p>
          <p className="section-dieutrituy-left-text-p">
            Do đó, chữa tuỷ răng hay điều trị nội nha là quá trình điều trị lấy
            sạch tủy bị tổn thương, trám bít chặt hệ thống ống tủy ngăn chặn sự
            xâm nhập của vi khuẩn, giúp loại bỏ viêm nhiễm và bảo tồn mô răng
            còn lại.
          </p>
          <img
            src={chuatuyrang}
            alt=""
            className="section-dieutrituy-left-img"
          />
          <h5 className="section-dieutrituy-left-text-h3">
            Điều trị nội nha, viêm tủy răng tại Nha Khoa Phúc Nguyên
          </h5>
          <h5 className="section-dieutrituy-left-text-h3">
            1. Khám chẩn đoán trước khi điều trị tủy răng.
          </h5>
          <p className="section-dieutrituy-left-text-p">
            Bất cứ bệnh nhân nào lần đầu tiên đến Phúc Nguyên đều được khám và
            chụp phim kiểm tra răng miệng tổng quát. Nếu phát hiện hay nghi ngờ
            có răng cần phải điều trị nội nha, bác sĩ sẽ chỉ định chụp phim thêm
            tại vùng răng đó để đánh giá chính xác hơn mức độ tổn thương và độ
            khó của răng cần chữa tuỷ.
          </p>
          <img
            src={dieutrituyxq}
            alt=""
            className="section-dieutrituy-left-img"
          />
          <p className="section-dieutrituy-left-text-p">
            Theo đó bệnh nhân sẽ được thông báo về tình trạng răng miệng, kế
            hoạch điều trị, thời gian và chi phí cụ thể. Nếu bệnh nhân đồng ý,
            quá trình điều trị sẽ được bắt đầu.
          </p>
          <h5 className="section-dieutrituy-left-text-h3">
            2. Thực hiện điều trị nội nha
          </h5>
          <h6 className="section-dieutrituy-left-text-h6">
            2.1 Gây tê trước khi điều trị.
          </h6>
          <p className="section-dieutrituy-left-text-p">
            Không phải bệnh nhân nào chữa tủy răng cũng cần phải gây tê. Nếu
            bệnh nhân không đau như trong trường hợp tuỷ đã chết lâu ngày, răng
            không còn cảm giác thì sẽ không cần phải gây tê. Gây tê nhằm mục
            đích tạo sự thoải mái cho bệnh nhân và nha sĩ khi điều trị.
          </p>
          <h6 className="section-dieutrituy-left-text-h6">
            2.1 Đặt đê cao su cô lập.
          </h6>
          <p className="section-dieutrituy-left-text-p">
            Được ví như "câu thần chú trong điều trị nội nha" đủ để cho thấy tầm
            quan trọng của việc đặt đê cao su cô lập là như thế nào. Vậy, mục
            đích và lợi ích của phương pháp đặt đê cao su cô lập trong điều trị
            tủy là gì?
          </p>
          <li className="section-dieutrituy-left-text-li">
            Đê cao su được đặt ôm sát vào răng chữa tuỷ, là phương tiện cách ly
            hữu hiệu răng điều trị tủy khỏi nước bọt là nguồn chứa vi khuẩn
            trong miệng, đảm bảo cho răng trong môi trường khô, sạch.
          </li>
          <li className="section-dieutrituy-left-text-li">
            Đê cao su giúp kiểm soát độ ẩm tối ưu (hơi thở, máu, nước bọt) tạo
            môi trường điều trị hoàn hảo.
          </li>
          <li className="section-dieutrituy-left-text-li">
            Đặt đê cao su cô lập và cách ly răng điều trị tủy với môi trường
            miệng tạo nên một phẫu trường rộng, vô khuẩn giúp bác sĩ thuận lợi
            thực hiện phương án điều trị chuẩn xác và hiệu quả nhất.
          </li>
          <li className="section-dieutrituy-left-text-li">
            Với đê cao su cô lập, không chỉ là vấn đề cách ly mà còn là vấn đề
            an toàn trong điều trị nội nha. Bệnh nhân hoàn toàn yên tâm không sợ
            tình trạng rơi dụng cụ vào đường hô hấp hay đường tiêu hóa và cũng
            không phải khó chịu với mùi thuốc sử dụng bơm rửa ống tủy.
          </li>
          <li className="section-dieutrituy-left-text-li">
            Đê cao su còn là phương tiện tuyệt vời để ngăn chặn các bệnh truyền
            nhiễm lây lan qua giọt bắn, đặc biệt trong bối cảnh đại dịch Covid
            đang diễn biến phức tạp.
          </li>
          <img
            src={dieutrituyrang}
            alt=""
            className="section-dieutrituy-left-img"
          />
          <h6 className="section-dieutrituy-left-text-h6">
            2.3 Mở lối vào buồng tủy răng, làm sạch và tạo hình ống tủy.
          </h6>
          <li className="section-dieutrituy-left-text-li">
            Bác sĩ sử dụng dụng cụ bằng tay hay bằng máy gọi là trâm tay hay
            trâm máy để lấy sạch tuỷ răng, vi khuẩn…, tạo hình ống tuỷ đồng thời
            kết hợp với việc bơm rửa nhiều lần cho hiệu quả việc làm sạch được
            nâng cao. Việc tạo hình ống tuỷ giúp cho việc làm sạch và trám bít
            ống tuỷ sau này được thuận lợi.{" "}
          </li>
          <li className="section-dieutrituy-left-text-li">
            Để đảm bảo cho toàn bộ hệ thống ống tuỷ được làm sạch, cần phải chụp
            các phim đo chiều dài chân răng hay sử dụng máy định vị chóp. Theo
            đó bác sĩ sẽ phải làm sạch, tạo hình tới đúng chiều dài chân răng,
            đảm bảo không còn mô tuỷ hay vi khuẩn còn sót lại trong ống tuỷ.
          </li>
          <li className="section-dieutrituy-left-text-li">
            Quá trình điều trị tủy răng có thể kết thúc trong một lần hẹn hoặc
            nhiều lần hẹn. Giữa các lần hẹn răng đang nội nha sẽ được trám tạm
            lại và băng thuốc để khử trùng ống tủy.
          </li>
          <h6 className="section-dieutrituy-left-text-h6">
            2.4 Trám bít ống tuỷ.
          </h6>
          <li className="section-dieutrituy-left-text-li">
            Là bước cuối cùng của quy trình chữa tủy răng.
          </li>
          <li className="section-dieutrituy-left-text-li">
            Sau khi đã làm sạch tạo dạng hệ thống ống tuỷ và bệnh nhân hết các
            triệu chứng đau nhức, viêm nhiễm…, bác sĩ sẽ tiến hành trám bít ống
            tủy.
          </li>
          <li className="section-dieutrituy-left-text-li">
            Quá trình trám bít ống tuỷ là sử dụng xi măng và vật liệu trám bít
            ống tuỷ (như côn gutta percha) kết hợp với các dụng cụ bằng tay để
            bít kín toàn bộ hệ thống ống tuỷ, ngăn chặn sự xâm nhập của vi
            khuẩn. Sau trám bít cần chụp phim kiểm tra lại việc trám bít đã tốt
            hay chưa?
          </li>
          <h6 className="section-dieutrituy-left-text-h6">Kết Luận :</h6>
          <li className="section-dieutrituy-left-text-li">
            Quá trình điều trị tủy răng có thể kết thúc trong một lần hẹn hoặc
            nhiều lần hẹn. Giữa các lần hẹn răng đang nội nha sẽ được trám tạm
            lại để thức ăn không chui vào răng gây thêm nhiễm trùng.
          </li>
          <li className="section-dieutrituy-left-text-li">
            Răng sau chữa tủy có thể sẽ được trám hay phải bọc mão, tái tạo cùi
            răng tuỳ thuộc vào mức độ mất chất của răng và đánh giá của bác sĩ
            trên lâm sàng.
          </li>
          <h6 className="section-dieutrituy-left-text-h6-chiase"> Chia sẻ </h6>
          <div className="section-dieutrituy-left-text-icon">
            <span className="section-dieutrituy-left-text-icon-fa">
              <FaFacebook />
            </span>
            <span className="section-dieutrituy-left-text-icon-fa">
              <AiFillTwitterCircle />
            </span>
            <span className="section-dieutrituy-left-text-icon-fa">
              <BsPinterest />
            </span>
            <span className="section-dieutrituy-left-text-icon-fa">
              <AiFillGooglePlusCircle />
            </span>
          </div>
          <div className="section-dieutrituy-left-btn">
            <button className="section-dieutrituy-left-text-btn">
              {" "}
              <span>
                <BiPhoneCall />
              </span>{" "}
              0941828083
            </button>
            <button
              onClick={handleShow}
              className="section-dieutrituy-left-text-btn"
            >
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              ĐẶT LỊCH KHÁM
            </button>
            <Calendar show={show} handleClose={() => setShow(false)} />
            <button className="section-dieutrituy-left-text-btn">
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              NHẬN TƯ VẤN
            </button>
          </div>
          <div className="section-dieutrituy-left-text-noidung">
            <h3 className="section-dieutrituy-left-text-noidumg-h3">
              NỘI DUNG LIÊN QUANG{" "}
            </h3>
            <Row>
              <Col
                className=" section-dieutrituy-left-tin-left"
                as={Link}
                to={"/trongrangtoanham"}
                xs={12}
                md={6}
              >
                <img
                  src={imgs24}
                  alt=""
                  className="section-dieutrituy-left-tin-left-img"
                />
                <h3 className="section-dieutrituy-left-tin-left-h3">
                  TRỒNG RĂNG TOÀN HÀM
                </h3>
                <p className="section-dieutrituy-left-tin-left-p">
                  Trồng răng Implant toàn hàm với kỹ thuật All on 4 hay All on 6
                  hiện nay được đánh giá mang lại hiệu quả cao khi phục hồi tình
                  trạng mất răng toàn...
                </p>
                <button className="section-dieutrituy-left-tin-left-btn">
                  XEM CHI TIẾT...
                </button>
              </Col>

              <Col
                className=" section-dieutrituy-left-tin-left"
                as={Link}
                to={"/nhorangsua"}
                xs={12}
                md={6}
              >
                <img
                  src={imgs27}
                  alt=""
                  className="section-dieutrituy-left-tin-left-img"
                />
                <h3 className="section-dieutrituy-left-tin-left-h3">
                  NHỔ RĂNG SỮA TRẺ EM
                </h3>
                <p className="section-dieutrituy-left-tin-left-p">
                  Nhổ răng sữa cho bé khi nào và nhổ như thế nào là điều ba mẹ
                  phải lưu ý để giúp quá trình nhổ răng sữa của trẻ an toàn.
                  V...
                </p>
                <button className="section-dieutrituy-left-tin-left-btn">
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

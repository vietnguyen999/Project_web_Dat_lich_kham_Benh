import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Nhorangsua.css";
import Calendar from "../calendar/Calendar";
import imgs24 from "../../img/imgs24.png";
import imgs27 from "../../img/imgs27.jpg";
import nhorangsuachobe1 from "../../img/nhorangsuachobe1.jpg";
import nhorangsuachobe2 from "../../img/nhorangsuachobe2.jpg";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import Footer from "../../layout/Footer";
export default function Nhorangsua() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <div className="header-nhorangsua">
        <p className="header-nhorangsua-p">
          Trang chủ <span className="header-nhorangsua-dau">-</span>Dịch vụ{" "}
          <span className="header-rangsu-dau">-</span>NHA KHOA TỔNG QUÁT
        </p>
      </div>
      <Row className="section-nhorangsua">
        <Col className="section-nhorangsua-left" xs={12} md={8}>
          <h2 className="section-nhorangsua-left-h2">NHỔ RĂNG SỮA TRẺ EM</h2>
          <img src={imgs27} alt="" className="section-nhorangsua-left-img" />
          <h5 className="section-Nhorangsua-left-text-h3">
            Khi nào bạn nên nhổ răng sữa cho bé?
          </h5>
          <p className="section-Nhorangsua-left-text-p">
            Khi răng vĩnh viễn bắt đầu mọc, răng sữa sẽ lung lay và có xu hướng
            rụng đi. Thậm chí, bạn có thể nhổ răng sữa cho bé một cách dễ dàng
            mà không cần đến nha sĩ. Hầu hết trẻ em sẽ trải qua quá trình rụng
            răng sữa theo thứ tự như sau:
          </p>
          <li className="section-Nhorangsua-left-text-li">
            Thông thường, răng sữa của bé sẽ bị rụng lần đầu tiên vào khoảng 6
            tuổi khi răng cửa (các răng giữa phía trước) bị lung lay.
          </li>
          <li className="section-Nhorangsua-left-text-li">
            Răng hàm ở phía sau thường bị rụng trong độ tuổi từ 10 đến 12 và
            được thay thế bằng răng vĩnh viễn khi trẻ 13 tuổi.
          </li>
          <p className="section-Nhorangsua-left-text-p">
            Một số trẻ có thể tự dùng lưỡi hoặc ngón tay để làm lung lay và nhổ
            răng sữa. Bên cạnh đó, nhiều trẻ vẫn cần có sự giúp đỡ của ba mẹ.
            Tuy nhiên, bạn hãy lưu ý đến những dấu hiệu sau để chắc chắn rằng
            răng sữa của bé đã sẵn sàng rụng đi:
          </p>
          <li className="section-Nhorangsua-left-text-li">
            Bạn chỉ nên nhổ răng sữa cho bé từ 6 tuổi trở lên.
          </li>
          <li className="section-Nhorangsua-left-text-li">
            Bạn chỉ nên nhổ răng sữa cho trẻ khi nhận thấy răng sữa của con rất
            lỏng lẻo, chỉ cần xoay nhẹ là có thể nhổ được.
          </li>
          <li className="section-Nhorangsua-left-text-li">
            Răng sữa lung lay một cách tự nhiên, không phải do tai nạn, sâu răng
            hoặc các bệnh răng miệng ở trẻ thì bạn có thể nhổ răng cho con.
          </li>
          <img
            src={nhorangsuachobe1}
            alt=""
            className="section-nhorangsua-left-img"
          />
          <h6 className="section-nhorangsua-left-text-h6">Lưu ý quan trọng:</h6>
          <p className="section-Nhorangsua-left-text-p">
            Trẻ dưới 5 tuổi không nên nhổ răng sữa trừ trường hợp do tai nạn
            hoặc mắc bệnh về răng miệng. Bởi vì răng sữa rụng sớm sẽ khiến răng
            vĩnh viễn mọc lệch do phần nướu răng giới hạn. Từ đó gây mất thẩm mỹ
            cho răng của bé khi trưởng thành.
          </p>
          <h5 className="section-Nhorangsua-left-text-h3">
            Cách nhổ răng sữa cho bé tại nhà
          </h5>
          <p className="section-Nhorangsua-left-text-p">
            Răng sữa thường rất dễ rụng. Vì vậy, nếu trẻ đã đến tuổi thay răng
            và răng sữa cũng đã bị lung lay nhiều thì ba mẹ có thể trực tiếp nhổ
            răng sữa cho bé tại nhà theo những bước sau:
          </p>
          <li className="section-Nhorangsua-left-text-li">
            Bước 1: Rửa tay sạch sẽ bằng xà phòng và lau khô.
          </li>
          <li className="section-Nhorangsua-left-text-li">
            Bước 2: Bạn dùng tay lắc lư răng của bé một cách nhẹ nhàng hoặc có
            thể khuyến khích con tự làm để trẻ ít lo sợ. Điều này giúp bạn xác
            định được răng đã lung lay và có thể nhổ được hay chưa.
          </li>
          <li className="section-Nhorangsua-left-text-li">
            Bước 3: Nếu răng sữa đã lung lay nhiều, bạn dùng một miếng gạc sạch
            giữ thân răng, sau đó dùng lực tác động nhẹ nhưng dứt khoát và nhanh
            chóng kéo răng ra ngoài.
          </li>
          <li className="section-Nhorangsua-left-text-li">
            Bước 4: Dùng một miếng gạc sạch khác đè lên vùng nướu mà bạn vừa nhổ
            răng sữa cho bé để cầm máu. Trong hầu hết trường hợp máu sẽ ngừng
            chảy trong vài phút.
          </li>
          <li className="section-Nhorangsua-left-text-li">
            Bước 5: Cho con đi súc miệng. Kiểm tra vị trí nhổ răng lần nữa để
            chắc chắn không có phần nào của răng còn sót lại.
          </li>
          <h5 className="section-Nhorangsua-left-text-h3">
            Những lưu ý khi nhổ răng sữa cho bé để đảm bảo an toàn
          </h5>
          <li className="section-Nhorangsua-left-text-li">
            Không nên buộc chỉ vào răng của bé để kéo ra vì đây không phải là
            cách nhổ răng an toàn.
          </li>
          <li className="section-Nhorangsua-left-text-li">
            Không nên vặn xoay răng quá lâu khi nhổ răng sữa cho bé. Nếu bạn vặn
            răng nhiều lần nhưng vẫn không nhổ được chứng tỏ răng chưa sẵn sàng
            để rụng đi.
          </li>
          <li className="section-Nhorangsua-left-text-li">
            Nếu việc nhổ răng tại nhà khiến con bạn bị đau hay chảy máu nhiều
            thì nên dừng lại và đưa trẻ đến nha sĩ để được xử lý đúng cách.
          </li>
          <img
            src={nhorangsuachobe2}
            alt=""
            className="section-nhorangsua-left-img"
          />
          <h6 className="section-nhorangsua-left-text-h6-chiase"> Chia sẻ </h6>
          <div className="section-nhorangsua-left-text-icon">
            <span className="section-nhorangsua-left-text-icon-fa">
              <FaFacebook />
            </span>
            <span className="section-nhorangsua-left-text-icon-fa">
              <AiFillTwitterCircle />
            </span>
            <span className="section-nhorangsua-left-text-icon-fa">
              <BsPinterest />
            </span>
            <span className="section-nhorangsua-left-text-icon-fa">
              <AiFillGooglePlusCircle />
            </span>
          </div>
          <div className="section-nhorangsua-left-btn">
            <button className="section-nhorangsua-left-text-btn">
              {" "}
              <span>
                <BiPhoneCall />
              </span>{" "}
              0941828083
            </button>
            <button
              onClick={handleShow}
              className="section-nhorangsua-left-text-btn"
            >
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              ĐẶT LỊCH KHÁM
            </button>
            <Calendar show={show} handleClose={() => setShow(false)} />
            <button className="section-nhorangsua-left-text-btn">
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              NHẬN TƯ VẤN
            </button>
          </div>
          <div className="section-nhorangsua-left-text-noidung">
            <h3 className="section-nhorangsua-left-text-noidumg-h3">
              NỘI DUNG LIÊN QUANG{" "}
            </h3>
            <Row>
              <Col
                className=" section-rangsu-left-tin-left"
                as={Link}
                to={"/nhorangsua"}
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
              NHA KHOA TỔNG QUÁT
            </h5>
            <h5 className="section-bocsu-right-dichvu-h5">
              TRỒNG RĂNG IMPLANT
            </h5>
            <h5 className="section-bocsu-right-dichvu-h5">
              CHỈNH NHA - NIỀNG RĂNG
            </h5>
            <h5 className="section-bocsu-right-dichvu-h5">RĂNG SỨ THẪM MỸ</h5>
          </div>
        </Col>
      </Row>
      <Footer />
    </div>
  );
}

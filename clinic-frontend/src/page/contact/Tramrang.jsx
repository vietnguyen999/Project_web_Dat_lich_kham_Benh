import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Tramrang.css";
import Calendar from "../calendar/Calendar";
import imgs24 from "../../img/imgs24.png";
import imgs27 from "../../img/imgs27.jpg";
import imgs30 from "../../img/imgs31.jpg";
import tramrang2 from "../../img/tramrang2.jpg";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import Footer from "../../layout/Footer";
export default function Tramrang() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <div className="header-tramrang">
        <p className="header-tramrang-p">
          Trang chủ <span className="header-tramrang-dau">-</span>Dịch vụ{" "}
          <span className="header-tramrang-dau">-</span>NHA KHOA TỔNG QUÁT
        </p>
      </div>
      <Row className="section-tramrang">
        <Col className="section-tramrang-left" xs={12} md={8}>
          <h2 className="section-tramrang-left-h2">TRÁM RĂNG</h2>
          <img src={imgs30} alt="" className="section-tramrang-left-img" />
          <h5 className="section-tramrang-left-text-h3">
            Hàn trám răng là gì?
          </h5>
          <p className="section-tramrang-left-text-p">
            Hàn trám răng là kỹ thuật mà bác sĩ sẽ sử dụng vật liệu trám bít để
            khôi phục lại hình dáng và chức năng của răng. Phương pháp này được
            sử dụng phổ biến trong nha khoa bởi mang lại ý nghĩa cả về thẩm mỹ
            lẫn điều trị và phòng ngừa bệnh lý răng miệng.
          </p>
          <h5 className="section-tramrang-left-text-h3">
            Nên trám răng khi nào?
          </h5>
          <p className="section-tramrang-left-text-p">
            Kỹ thuật này thường được chỉ định và mang lại hiệu quả cao trong các
            trường hợp khuyết điểm răng. Tùy vào tình trạng răng và mục đích hàn
            trám mà bác sĩ sẽ tư vấn cho bạn phương pháp hiệu quả và phù hợp
            nhất.
          </p>
          <li className="section-tramrang-left-text-li">Răng bị sâu.</li>
          <li className="section-tramrang-left-text-li">
            Răng bị thương tổn chưa phạm đến tủy.
          </li>
          <li className="section-tramrang-left-text-li">
            Răng thưa ở mức độ vừa phải, khoảng cách giữa các răng không quá
            lớn.
          </li>
          <li className="section-tramrang-left-text-li">
            Răng bị sứt mẻ, thương tổn do viêm tủy.
          </li>
          <li className="section-tramrang-left-text-li">
            Răng bị mòn men, đen chân răng.
          </li>
          <li className="section-tramrang-left-text-li">
            Những ai muốn khắc phục tình trạng răng gãy, mẻ mà không phải mài
            răng bọc sứ.
          </li>
          <h5 className="section-tramrang-left-text-h3">
            Tại sao phục hình với trám răng được ưa thích?
          </h5>
          <h6 className="section-tramrang-left-text-h6">
            Có đa dạng các hình thức
          </h6>
          <p className="section-tramrang-left-text-p">
            Hàn trám răng có nhiều phương pháp trám khác nhau để giúp phục hình
            hiệu quả cho răng đó là trám trực tiếp và trám răng gián tiếp
            Inlay/Onlay. Tùy vào tình trạng và mong muốn của khách hàng mà sẽ áp
            dụng hình thức phù hợp, cụ thể là bao gồm:
          </p>
          <p className="section-tramrang-left-text-p">
            + Hàn trám răng điều trị: giúp phục hồi và điều trị trong trường hợp
            răng bị sâu, chấn thương gây mẻ, vỡ, răng bị mòn men…
          </p>
          <p className="section-tramrang-left-text-p">
            + Hàn trám răng phòng ngừa: sử dụng vật liệu trám mỏng phủ lên răng
            để phòng tránh các bệnh lý răng miệng hoặc tác hại từ axit, thực
            phẩm…
          </p>
          <p className="section-tramrang-left-text-p">
            + Hàn trám răng thẩm mỹ: sử dụng khi muốn che đi một số khuyết điểm,
            chỉnh hình và giúp răng đều đẹp hơn.
          </p>
          <img src={tramrang2} alt="" className="section-tramrang-left-img" />
          <h5 className="section-tramrang-left-text-h3">
            Sử dụng đa dạng các vật liệu
          </h5>
          <p className="section-tramrang-left-text-p">
            + Vật liệu hàn trám Amalgam: Amalgam là chất liệu hàn trám truyền
            thống, thường có màu bạc. Chất liệu này khá bền chắc nhưng màu sắc
            không được đẹp nên thường sử dụng khi hàn trám các răng bên trong,
            phổ biến nhất là răng hàm.
          </p>
          <p className="section-tramrang-left-text-p">
            + Trám răng với kim loại quý: Chất liệu kim loại thông thường là:
            vàng, bạc, đồng. Về độ bền chắc thì kim loại quý cứng hơn cả amalgam
            nên đảm bảo ăn nhai tốt. Chất liệu này cũng thường được sử dụng
            trong hàn trám các răng ăn nhai.
          </p>
          <p className="section-tramrang-left-text-p">
            + Vật liệu trám răng Composite: Composite và vật liệu hàm trám được
            đánh giá cao về màu sắc và có độ khít sát cao với răng. Chất liệu
            này thường được sử dụng hàn trám cho những chiếc răng yêu cầu cao về
            thẩm mỹ.
          </p>
          <p className="section-tramrang-left-text-p">
            + Sử dụng vật liệu sứ: Chất liệu bằng sứ có độ bền cao, thường dùng
            trong trám điều trị răng sâu.
          </p>
          <h5 className="section-tramrang-left-text-h3">
            Cho thẩm mỹ cao và an toàn khi thực hiện
          </h5>
          <p className="section-tramrang-left-text-p">
            Hàn trám răng công nghệ mới được đánh giá cao về tính thẩm mỹ, cho
            hàm răng đều đẹp và bền chắc hơn. Quy trình thực hiện cũng rất đơn
            giản, đảm bảo an toàn cao, không ảnh hưởng đến các mô mềm xung quanh
            răng.
          </p>
          <img src={imgs30} alt="" className="section-tramrang-left-img" />
          <h5 className="section-tramrang-left-text-h3">
            Quy trình hàn trám răng chất lượng cao tại Nha Khoa Phúc Nguyên
          </h5>
          <h6 className="section-tramrang-left-text-h6">
            Khách hàng được kiểm tra cụ thể tình trạng răng và cho tư vấn
          </h6>
          <p className="section-tramrang-left-text-p">
            Tại Nha Khoa , khách hàng sẽ được kiểm tra cụ thể, xác định khuyết
            điểm răng đang gặp phải và mức độ cụ thể, từ đó cho tư vấn phù hợp
            nhất. Bạn cũng sẽ được giải đáp về phương pháp hàn trám răng, các
            thắc mắc có liên quan để yên tâm khi lựa chọn dịch vụ.
          </p>
          <h6 className="section-tramrang-left-text-h6">
            Vệ sinh răng miệng sạch sẽ{" "}
          </h6>
          <p className="section-tramrang-left-text-p">
            Vệ sinh răng miệng là bước bắt buộc khi muốn hàn trám răng hiệu quả
            cao. Các bác sĩ sẽ tiến hành súc miệng và vệ sinh sạch sẽ răng cũng
            như khoang miệng cho bạn. Nếu bị sâu răng hay bệnh lý nha chu, bác
            sĩ cũng có biện pháp xử lý trước khi chính thức thực hiện, tránh
            tình trạng nhiễm trùng hay lây lan bệnh lý răng miệng.
          </p>
          <h5 className="section-tramrang-left-text-h3">
            Thực hiện hàn trám răng trong phòng nha hiện đại
          </h5>
          <p className="section-tramrang-left-text-p">
            – Sử dụng chổi nha khoa để làm sạch vị trí hàn trám.
          </p>
          <p className="section-tramrang-left-text-p">
            – Xử lý bề mặt răng bằng dung dịch làm tăng độ bám dính giữa răng
            với vật liệu trám.
          </p>
          <p className="section-tramrang-left-text-p">
            – Thực hiện trám bít và sử dụng đèn chiếu để hoàn tất.
          </p>
          <h6 className="section-tramrang-left-text-h6">
            Hướng dẫn chăm sóc răng miệng sau khi hàn trám răng
          </h6>
          <p className="section-tramrang-left-text-p">
            Hoàn tất quá trình, bạn sẽ được bác sĩ dặn dò chu đáo về cách chăm
            sóc, vệ sinh răng miệng cũng chế độ ăn uống để duy trì kết quả lâu
            dài nhất.
          </p>
          <p className="section-tramrang-left-text-p">
            Lựa chọn hàn trám răng với công nghệ mới tại Nha Khoa Phúc Nguyên,
            bạn có thể yên tâm về kết quả nhận được. Nếu còn bất cứ băn khoăn
            nào, tốt nhất là bạn nên dành thời gian đến tư vấn và trải nghiệm
            trực tiếp chất lượng dịch vụ nhé!
          </p>
          <h6 className="section-tramrang-left-text-h6-chiase"> Chia sẻ </h6>
          <div className="section-tramrang-left-text-icon">
            <span className="section-tramrang-left-text-icon-fa">
              <FaFacebook />
            </span>
            <span className="section-tramrang-left-text-icon-fa">
              <AiFillTwitterCircle />
            </span>
            <span className="section-tramrang-left-text-icon-fa">
              <BsPinterest />
            </span>
            <span className="section-tramrang-left-text-icon-fa">
              <AiFillGooglePlusCircle />
            </span>
          </div>
          <div className="section-tramrang-left-btn">
            <button className="section-tramrang-left-text-btn">
              {" "}
              <span>
                <BiPhoneCall />
              </span>{" "}
              0941828083
            </button>
            <button
              onClick={handleShow}
              className="section-tramrang-left-text-btn"
            >
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              ĐẶT LỊCH KHÁM
            </button>
            <Calendar show={show} handleClose={() => setShow(false)} />
            <button className="section-tramrang-left-text-btn">
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              NHẬN TƯ VẤN
            </button>
          </div>
          <div className="section-tramrang-left-text-noidung">
            <h3 className="section-tramrang-left-text-noidumg-h3">
              NỘI DUNG LIÊN QUANG{" "}
            </h3>
            <Row>
              <Col
                className=" section-tramrang-left-tin-left"
                as={Link}
                to={"/trongrangtoanham"}
                xs={12}
                md={6}
              >
                <img
                  src={imgs24}
                  alt=""
                  className="section-tramrang-left-tin-left-img"
                />
                <h3 className="section-tramrang-left-tin-left-h3">
                  TRỒNG RĂNG TOÀN HÀM
                </h3>
                <p className="section-tramrang-left-tin-left-p">
                  Trồng răng Implant toàn hàm với kỹ thuật All on 4 hay All on 6
                  hiện nay được đánh giá mang lại hiệu quả cao khi phục hồi tình
                  trạng mất răng toàn...
                </p>
                <button className="section-tramrang-left-tin-left-btn">
                  XEM CHI TIẾT...
                </button>
              </Col>

              <Col
                className=" section-tramrang-left-tin-left"
                as={Link}
                to={"/nhorangsua"}
                xs={12}
                md={6}
              >
                <img
                  src={imgs27}
                  alt=""
                  className="section-tramrang-left-tin-left-img"
                />
                <h3 className="section-tramrang-left-tin-left-h3">
                  NHỔ RĂNG SỮA TRẺ EM
                </h3>
                <p className="section-tramrang-left-tin-left-p">
                  Nhổ răng sữa cho bé khi nào và nhổ như thế nào là điều ba mẹ
                  phải lưu ý để giúp quá trình nhổ răng sữa của trẻ an toàn.
                  V...
                </p>
                <button className="section-tramrang-left-tin-left-btn">
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

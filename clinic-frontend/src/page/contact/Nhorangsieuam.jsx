import React from 'react'
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useState } from "react";
import "./Nhorangsieuam.css";
import Calendar from "../calendar/Calendar";
import imgs24 from "../../img/imgs24.png";
import imgs27 from "../../img/imgs27.jpg";
import imgs28 from "../../img/imgs28.jpg";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import Footer from "../../layout/Footer";
export default function Nhorangsieuam() {
    const [show, setShow] = useState(false);
    const handleShow = () => {
      setShow(true);
    };
  return (
    <div>
             <div className="header-nhorangsieuam">
        <p className="header-nhorangsieuam-p">
          Trang chủ <span className="header-nhorangsieuam-dau">-</span>Dịch vụ{" "}
          <span className="header-rangsu-dau">-</span>NHA KHOA TỔNG QUÁT
        </p>
      </div>
      <Row className="section-nhorangsieuam">
        <Col className="section-nhorangsieuam-left" xs={12} md={8}>
          <h2 className="section-nhorangsieuam-left-h2">NHỔ RĂNG SIÊU ÂM PIEZOTOME</h2>
          <img src={imgs28} alt="" className="section-nhorangsieuam-left-img" />
          <h5 className="section-Nhorangsieuam-left-text-h3">1/ Nhổ răng bằng máy siêu âm Piezotome có cơ chế hoạt động như thế nào?</h5>
          <p className="section-Nhorangsieuam-left-text-p">Nếu như trước đây, việc nhổ bất kỳ chiếc răng nào thì đều chỉ có một kỹ thuật duy nhất là sử dụng lực cơ tay vật lý của bác sĩ để tác động và rút chiếc răng đó ra. Phương pháp này thường gây nhiều cảm giác đau nhức và tâm lý sợ hãi cho khách hàng mỗi khi thực hiện nhổ răng.</p>
          <p className="section-Nhorangsieuam-left-text-p">Hiểu được điều này, vào năm 2007, công ty Acteon đã trình làng ngành nha khoa thế giới công nghệ nhổ răng bằng máy siêu âm với tên gọi ban đầu là Piezo – Ultrasonic.</p>
          <p className="section-Nhorangsieuam-left-text-p">Phương pháp mới này không phụ thuộc vào tác động vật lý từ bác sĩ mà sẽ sử dụng một loạt các bước sóng siêu âm cao tần để phá vỡ các liên kết của dây chằng với chân răng, từ đó hỗ trợ bác sĩ thao tác nhổ răng một cách dễ dàng và nhẹ nhàng hơn.</p>
          <img src={imgs28} alt="" className="section-nhorangsieuam-left-img" />
          <h5 className="section-Nhorangsieuam-left-text-h3">2/ Các trường hợp có thể áp dụng công nghệ nhổ răng siêu âm</h5>
          <p className="section-Nhorangsieuam-left-text-p">Bảo tồn răng là nguyên tắc đầu tiên cần tuân thủ khi điều trị bệnh lý nha khoa. Tuy nhiên, trong những trường hợp ‘bất khả kháng’, bạn buộc phải thực hiện nhổ bỏ răng. Nhổ răng được chỉ định hoặc theo yêu cầu của khách hàng trong các trường hợp sau:</p>
          <li className="section-Nhorangsieuam-left-text-li"> Răng sâu, viêm tủy, viêm chóp hoặc áp xe nghiêm trọng. Chân răng bị lung lay mạnh do va đập, không thể nẹp lại được nữa.</li>
          <li className="section-Nhorangsieuam-left-text-li"> Răng mọc ngược, mọc lệch, mọc bất thường.</li>
          <li className="section-Nhorangsieuam-left-text-li">Răng khôn mọc sai hướng hoặc bị gãy vỡ nặng. </li>
          <li className="section-Nhorangsieuam-left-text-li"> Nhổ răng để hỗ trợ việc niềng răng.</li>
          <li className="section-Nhorangsieuam-left-text-li">Chân răng bị lung lay mạnh do va đập, không thể nẹp lại được nữa. </li>
          <h5 className="section-Nhorangsieuam-left-text-h3">3/ Công nghệ nhổ răng không đau Piezotome thực hiện như thế nào?</h5>
          <h6 className="section-nhorangsieuam-left-text-h6-">Bước 1: Thăm khám và tư vấn.</h6>  
          <p className="section-Nhorangsieuam-left-text-p">Việc thăm khám ban đầu là rất quan trọng bởi từ đây bác sĩ mới định hình được có những yếu tố nào có thể ảnh hưởng tới việc nhổ răng không, hay có cần phải thực hiện điều trị thêm các bệnh lý nào khác hay không.</p>
          <p className="section-Nhorangsieuam-left-text-p">Đặc biệt là trong các trường hợp nhổ răng khôn bằng máy siêu âm thì thăm khám ban đầu sẽ giúp bác sĩ xác định được thế mọc của răng, độ khó của răng và từ đó ra quyết định có thể thực hiện được cho khách hàng không, hay phải chuyển tiếp tới các bác sĩ cấp cao hơn.</p>
          <h6 className="section-nhorangsieuam-left-text-h6-">Bước 2: Gây tê cục bộ.</h6>
          <p className="section-Nhorangsieuam-left-text-p">Các trợ thủ nha khoa sẽ tiến hành vệ sinh khu vực chuẩn bị nhổ răng và thực hiện điều khiển, kiểm soát hệ thống gây tê tự động.</p>
          <h6 className="section-nhorangsieuam-left-text-h6-">Bước 3: Làm lung lay chân răng và nhổ.</h6>
          <p className="section-Nhorangsieuam-left-text-p">Sau khi gây tê, bác sĩ sẽ sử dụng máy nhổ răng siêu âm Piezotome và thực hiện làm lung lay chân răng bằng các bước sóng cao tần. Chỉ khoảng vài giây sau khi đợi máy siêu âm làm gãy các liên kết dây chằng với chân răng thì bác sĩ sẽ thực hiện dùng kìm nhổ răng ra một cách nhẹ nhàng.</p>
          <h6 className="section-nhorangsieuam-left-text-h6-">Bước 4: Cầm máu và hẹn lịch tái khám.</h6>
          <p className="section-Nhorangsieuam-left-text-p">Khách hàng thực hiện ngậm bông gòn để cầm máu, bác sĩ sẽ kê cho khách hàng một số loại thuốc giảm đau dùng tại nhà và hẹn lịch tái khám nếu cần thiết.</p>

          <h6 className="section-nhorangsieuam-left-text-h6-chiase"> Chia sẻ </h6>
          <div className="section-nhorangsieuam-left-text-icon">
            <span className="section-nhorangsieuam-left-text-icon-fa">
              <FaFacebook />
            </span>
            <span className="section-nhorangsieuam-left-text-icon-fa">
              <AiFillTwitterCircle />
            </span>
            <span className="section-nhorangsieuam-left-text-icon-fa">
              <BsPinterest />
            </span>
            <span className="section-nhorangsieuam-left-text-icon-fa">
              <AiFillGooglePlusCircle />
            </span>
          </div>
          <div className="section-nhorangsieuam-left-btn">
            <button className="section-nhorangsieuam-left-text-btn">
              {" "}
              <span>
                <BiPhoneCall />
              </span>{" "}
              0941828083
            </button>
            <button
              onClick={handleShow}
              className="section-nhorangsieuam-left-text-btn"
            >
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              ĐẶT LỊCH KHÁM
            </button>
            <Calendar show={show} handleClose={() => setShow(false)} />
            <button className="section-nhorangsieuam-left-text-btn">
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              NHẬN TƯ VẤN
            </button>
          </div>
          <div className="section-nhorangsieuam-left-text-noidung">
            <h3 className="section-nhorangsieuam-left-text-noidumg-h3">
              NỘI DUNG LIÊN QUANG{" "}
            </h3>
            <Row>
              <Col
                className=" section-rangsu-left-tin-left"
                as={Link}
                to={"/nhorangsieuam"}
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
                to={"/nhorangsieuam"}
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
      <Footer />
    </div>
  )
}

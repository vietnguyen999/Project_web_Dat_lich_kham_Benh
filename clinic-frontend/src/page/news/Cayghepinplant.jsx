import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgs24 from "../../img/imgs24.png";
import imgs25 from "../../img/imgs25.png";
import trongrangtoanham from "../../img/trongrangtoanham.jpg";
import cayghepinplant from "../../img/cayghepimplant.jpg";
import quytrinhcayghepinplant from "../../img/quytrinhcayghepimplant.png";
import { useState } from "react";
import "./Cayghepinplant.css";
import Calendar from "../calendar/Calendar";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import Footer from "../../layout/Footer";
export default function Cayghepinplant() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <div className="header-cayghepranginplant">
        <p className="header-cayghepranginplant-p">
          Trang chủ <span className="header-cayghepranginplant-dau">-</span>Dịch
          vụ <span className="header-rangsu-dau">-</span>TRỒNG RĂNG IMPLANT
        </p>
      </div>
      <Row className="section-cayghepranginplant">
        <Col className="section-cayghepranginplant-left" xs={12} md={8}>
          <h2 className="section-cayghepranginplant-left-h2">
            CẤY GHÉP IMPLANT
          </h2>
          <img
            src={imgs25}
            alt=""
            className="section-cayghepranginplant-left-img"
          />
          <h5 className="section-cayghepranginplant-left-text-h3">
            CẤY GHÉP IMPLANT – GIẢI PHÁP TỐI ƯU CHO NGƯỜI MẤT RĂNG
          </h5>
          <h6 className="section-cayghepranginplant-left-text-h6">
            Cấy ghép Implant là gì?
          </h6>
          <p className="section-cayghepranginplant-left-text-p">
            Cấy ghép Implant (trồng răng) là phương pháp dùng một trụ chân răng
            nhân tạo bằng Titanium đặt vào trong xương hàm tại vị trí răng đã
            mất. Trụ chân răng này sẽ thay thế chân răng thật, sau đó dùng răng
            sứ gắn lên trụ răng Implant tạo thành răng hoàn chỉnh.
          </p>
          <img
            src={trongrangtoanham}
            alt=""
            className="section-cayghepranginplant-left-img"
          />
          <h6 className="section-cayghepranginplant-left-text-h6">
            Những trường hợp nên cấy ghép Implant :
          </h6>
          <p className="section-cayghepranginplant-left-text-p">
            Cấy ghép Implant có khả năng phục hồi răng mang lại hiệu quả cải
            thiện tốt như mong đợi của khách hàng trong các trường hợp.
          </p>

          <li className="section-cayghepranginplant-left-text-li">
            Mất một răng.
          </li>
          <li className="section-cayghepranginplant-left-text-li">
            Mất nhiều răng.
          </li>
          <li className="section-cayghepranginplant-left-text-li">
            {" "}
            Mất răng toàn hàm.
          </li>
          <h6 className="section-cayghepranginplant-left-text-h6">
            Các phương pháp cấy ghép Implant :
          </h6>
          <li className="section-cayghepranginplant-left-text-li">
            Cấy ghép Implant đơn lẻ :
          </li>
          <p className="section-cayghepranginplant-left-text-p">
            Đối với trường hợp khách hàng bị mất một răng hoặc mất nhiều răng
            nhưng không liền kề nhau có thể thực hiện phương pháp trồng răng đơn
            lẻ tại từng vị trí răng đã mất.
          </p>
          <li className="section-cayghepranginplant-left-text-li">
            Cầu răng sứ trên Implant :
          </li>
          <p className="section-cayghepranginplant-left-text-p">
            Đối với trường hợp khách hàng bị mất 3 răng liên tiếp, Bác sĩ sẽ
            tiến hành cắm Implant ở 2 vị trí mất răng ngoài cùng sau đó bọc mão
            sứ bắc cầu cho cả 3 răng. Lúc này, 2 răng được trồng bằng trụ
            Implant sẽ là 2 răng đỡ cho cả dãy 3 răng bị mất.
          </p>
          <li className="section-cayghepranginplant-left-text-li">
            {" "}
            Cấy ghép Imnplant toàn hàm :
          </li>
          <p className="section-cayghepranginplant-left-text-p">
            Implant toàn hàm là phương án hiện đại nhất hiện nay cho những khách
            hàng chẳng may gặp tình trạng mất răng toàn hàm.
          </p>
          <p className="section-cayghepranginplant-left-text-p">
            Giải pháp mang đến hàm răng tự nhiên như răng thật trên 4 hoặc 6 trụ
            Implant, thường bao gồm 10 – 12 răng. Điều này không những giúp
            khách hàng tiết kiệm chi phí mà còn cải thiện hiệu quả ăn nhai và
            đạt thẩm mỹ tối đa.
          </p>
          <img
            src={cayghepinplant}
            alt=""
            className="section-cayghepranginplant-left-img"
          />
          <h6 className="section-cayghepranginplant-left-text-h6">
            Quy trình cấy ghép Implant
          </h6>
          <h6 className="section-cayghepranginplant-left-text-h6">
            Bước 1: Thăm khám và chụp XQ
          </h6>
          <p className="section-cayghepranginplant-left-text-p">
            Bác sĩ tiến hành kiểm tra tình trạng răng miệng, chụp XQ để khảo sát
            mật độ xương và tình trạng vùng mất răng.
          </p>
          <h6 className="section-cayghepranginplant-left-text-h6">
            Bước 2: Phân tích tình trạng răng miệng
          </h6>
          <p className="section-cayghepranginplant-left-text-p">
            Dựa trên kết quả kiểm tra Bác sĩ sẽ đưa ra phác đồ điều trị chính
            xác (thống nhất vị trí đặt, hướng, kích thước Implant). Sau đó tiến
            hành xét nghiệm máu, huyết áp để xác định tình trạng sức khỏe và đảm
            bảo khách hàng đủ điều kiện trồng răng.
          </p>
          <h6 className="section-cayghepranginplant-left-text-h6">
            Bước 3: Tiến hành cấy ghép Implant
          </h6>
          <p className="section-cayghepranginplant-left-text-p">
            Bác sĩ thực hiện sát trùng, gây tê vùng trồng răng Implant sau đó
            tiến hành cấy trụ, gắn răng tạm (tùy trường hợp). Bệnh nhân được hẹn
            tái khám định kỳ và cắt chỉ sau 7-10 ngày.
          </p>
          <h6 className="section-cayghepranginplant-left-text-h6">
            Bước 4: Tái khám kiểm tra và lấy dấu răng sứ trên Implant sau 1-6
            tháng (tùy trường hợp)
          </h6>
          <p className="section-cayghepranginplant-left-text-p">
            Khi tái khám bệnh nhân được chụp XQ kiểm tra và lấy dấu trên Implant
            để làm răng sứ.
          </p>
          <h6 className="section-cayghepranginplant-left-text-h6">
            Bước 5: Hoàn thành gắn răng sứ trên Implant
          </h6>
          <p className="section-cayghepranginplant-left-text-p">
            Gắn mão sứ trên Implant: Kiểm tra lần cuối kết thúc quá trình điều
            trị, hướng dẫn khách hàng chăm sóc tại và và hẹn tái khám định kỳ.
          </p>
          <img
            src={quytrinhcayghepinplant}
            alt=""
            className="section-cayghepranginplant-left-img"
          />
          <h6 className="section-trongrangtoanham-left-text-h6-chiase">
            {" "}
            Chia sẻ{" "}
          </h6>
          <div className="section-trongrangtoanham-left-text-icon">
            <span className="section-trongrangtoanham-left-text-icon-fa">
              <FaFacebook />
            </span>
            <span className="section-trongrangtoanham-left-text-icon-fa">
              <AiFillTwitterCircle />
            </span>
            <span className="section-trongrangtoanham-left-text-icon-fa">
              <BsPinterest />
            </span>
            <span className="section-trongrangtoanham-left-text-icon-fa">
              <AiFillGooglePlusCircle />
            </span>
          </div>
          <div className="section-trongrangtoanham-left-btn">
            <button className="section-trongrangtoanham-left-text-btn">
              {" "}
              <span>
                <BiPhoneCall />
              </span>{" "}
              0941828083
            </button>
            <button
              onClick={handleShow}
              className="section-trongrangtoanham-left-text-btn"
            >
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              ĐẶT LỊCH KHÁM
            </button>
            <Calendar show={show} handleClose={() => setShow(false)} />
            <button className="section-trongrangtoanham-left-text-btn">
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              NHẬN TƯ VẤN
            </button>
          </div>
          <div className="section-trongrangtoanham-left-text-noidung">
            <h3 className="section-trongrangtoanham-left-text-noidumg-h3">
              NỘI DUNG LIÊN QUANG{" "}
            </h3>
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

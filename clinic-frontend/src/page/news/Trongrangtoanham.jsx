import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgs24 from "../../img/imgs24.png";
import imgs25 from "../../img/imgs25.png";
import trongrangtoanham from "../../img/trongrangtoanham.jpg";
import trongrangtoanham1 from "../../img/trongrangtoanham1.png";
import { useState } from "react";
import "./Trongrangtoanham.css";
import Calendar from "../calendar/Calendar";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
export default function Trongrangtoanham() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <div className="header-trongrangtoanham">
        <p className="header-trongrangtoanham-p">
          Trang chủ <span className="header-trongrangtoanham-dau">-</span>Dịch
          vụ <span className="header-rangsu-dau">-</span>Trồng răng
        </p>
      </div>
      <Row className="section-trongrangtoanham">
        <Col className="section-trongrangtoanham-left" xs={12} md={8}>
          <h2 className="section-trongrangtoanham-left-h2">
            TRỒNG RĂNG TOÀN HÀM
          </h2>
          <img
            src={imgs24}
            alt=""
            className="section-trongrangtoanham-left-img"
          />
          <h5 className="section-trongrangtoanham-left-text-h3">
            1. Ai nên trồng răng Implant toàn hàm?
          </h5>
          <li className="section-trongrangtoanham-left-text-li">
            Những người bị mất răng toàn hàm, bị tiêu xương.
          </li>
          <li className="section-trongrangtoanham-left-text-li">
            Những người bị mất răng hàm trên hoặc hàm dưới.
          </li>
          <li className="section-trongrangtoanham-left-text-li">
            Bị viêm nha chu nặng, bắt buộc phải nhổ toàn hàm.
          </li>
          <li className="section-trongrangtoanham-left-text-li">
            Người bị mất răng toàn hàm nhưng không đủ sức khỏe để cấy ghép nhiều
            trụ Implant.
          </li>
          <li className="section-trongrangtoanham-left-text-li">
            Người muốn tìm đến phương pháp phục hình răng giả cố định đạt hiệu
            quả cao, tiết kiệm thời gian và chi phí điều trị.
          </li>
          <h5 className="section-trongrangtoanham-left-text-h3">
            2. Trồng răng Implant toàn hàm là gì?
          </h5>
          <img
            src={trongrangtoanham}
            alt=""
            className="section-trongrangtoanham-left-img"
          />
          <p className="section-trongrangtoanham-left-text-p">
            Trồng răng toàn hàm bằng kỹ thuật Implant All-on-4 (All-on-Four)
            hoặc All-on-6 (All-on-Six) được xem là phương pháp trồng răng hiện
            đại, giúp phục hồi khả năng ăn nhai, thẩm mỹ hiệu quả cho người mất
            răng toàn hàm, thiếu xương ở vùng sau răng.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            All-on-4 hoặc All-on-6 thay thế toàn bộ răng đã mất bằng cách cấy
            ghép 4 hoặc 6 trụ Implant ở mỗi hàm. Trụ Implant được cấy ghép có
            vai trò như những chân răng thật giúp nâng đỡ hàm giả phục hình bằng
            Acrylic hoặc Composite hay răng sứ được gắn cố định trên thanh bar
            Titanium CAD/CAM.
          </p>
          <h5 className="section-trongrangtoanham-left-text-h3">
            3. Ưu điểm :
          </h5>
          <p className="section-trongrangtoanham-left-text-p">
            Trồng răng Implant toàn hàm được nhiều người tin tưởng lựa chọn hiện
            nay bởi các ưu điểm vượt trội như:
          </p>
          <li className="section-trongrangtoanham-left-text-li">
            Chi phí hợp lý: Nếu các phương pháp phục hình răng toàn hàm cũ phải
            sử dụng nhiều răng Implant/hàm (8 – 10 răng) thì phương pháp trồng
            răng này chỉ cần cấy ghép 4 hoặc 6 trụ Implant, giúp tiết kiệm chi
            phí nhưng vẫn mang lại hiệu quả tương tự.
          </li>
          <li className="section-trongrangtoanham-left-text-li">
            Phục hồi khả năng ăn nhai gần như răng thật, giúp bạn thoải mái cảm
            nhận đầy đủ hương vị của những món ăn yêu thích.
          </li>
          <li className="section-trongrangtoanham-left-text-li">
            Lấy lại sự thẩm mỹ cho hàm răng và khuôn mặt nhờ phục hình đầy đủ số
            lượng răng trên khuôn hàm, thân răng y hệt răng thật, đảm bảo sự tự
            nhiên, hài hòa với khuôn mặt.
          </li>
          <li className="section-trongrangtoanham-left-text-li">
            Không cần ghép xương vì khi tiến hành trồng răng Implant, các trụ
            Implant sẽ được cấy ghép vào vùng răng cửa. Đây là vị trí ít bị tiêu
            xương hàm nhất khi mất răng.
          </li>
          <li className="section-trongrangtoanham-left-text-li">
            Thời gian điều trị nhanh chóng, hạn chế đau đớn.
          </li>
          <li className="section-trongrangtoanham-left-text-li">
            Tuổi thọ răng Implant cao, có thể duy trì vĩnh viễn nếu chăm sóc và
            vệ sinh răng miệng tốt.
          </li>
          <li className="section-trongrangtoanham-left-text-li">
            Răng phục hình có thể tháo lắp để sửa chữa, vệ sinh bằng cách đến
            nha khoa để mở vít (định kỳ 1 – 2 năm/lần).
          </li>
          <li className="section-trongrangtoanham-left-text-li">
            Phục hình thẩm mỹ cho phần nướu bị tiêu nhờ nền hàm bằng nhựa đồng
            màu với màu nướu thật. Có thể là nhựa hồng hoặc sứ hồng làm nướu
            giả.
          </li>
          <h5 className="section-trongrangtoanham-left-text-h3">
            4. Quy trình trồng răng Implant toàn hàm :
          </h5>
          <img
            src={trongrangtoanham1}
            alt=""
            className="section-trongrangtoanham-left-img"
          />
          <h6 className="section-trongrangtoanham-left-text-h6">
            Bước 1: Khám tổng quát và lập kế hoạch điều trị với phần mềm Implant
            Studio/Nobel Clinician trong ngày đầu (60-80 phút)
          </h6>
          <p className="section-trongrangtoanham-left-text-p">
            - Bác sĩ trực tiếp khám tổng quát sức khỏe răng miệng.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Chụp phim Cone Beam CT (3D) và lấy dấu hàm kỹ thuật số để khảo sát
            mật độ xương và tình trạng vùng mất răng chính xác tuyệt đối.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Bác sĩ phân tích cụ thể với khách hàng tình trạng xương dựa trên
            kết quả chụp phim 3D để:
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            + Lên kế hoạch điều trị các bệnh lý răng miệng.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            + Lên kế hoạch đặt Implant chính xác (Thống nhất vị trí đặt, hướng,
            kích thước Implant).
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Xét nghiệm máu, huyết áp để xác định tình trạng sức khỏe và đảm
            bảo khách hàng đủ điều kiện trồng răng.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Điều trị tổng quát (nếu cần thiết).
          </p>
          <h6 className="section-trongrangtoanham-left-text-h6">
            Bước 2: Thực hiện đặt trụ Implant với máng hướng dẫn phẫu thuật theo
            kế hoạch điều trị sau 2-3 ngày.
          </h6>
          <p className="section-trongrangtoanham-left-text-p">
            - Thực hiện sát trùng, gây tê vùng trồng răng Implant.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Đặt 4 hoặc 6 trụ Implant với máng hướng dẫn phẫu thuật đảm bảo an
            toàn và chính xác đến từng milimet, đồng thời giúp quá trình trồng
            răng cho khách hàng nhẹ nhàng hơn.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Đặt 4 hoặc 6 multi abutment chuyển hướng.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Lấy dấu 4 hoặc 6 Implant để làm hàm tạm.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Ghi dấu khớp cắn.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Đặt trụ lành thương.
          </p>
          <h6 className="section-trongrangtoanham-left-text-h6">
            Bước 3: Tái khám gắn hàm tạm sau 1 ngày.
          </h6>
          <p className="section-trongrangtoanham-left-text-p">
            - Mở trụ lành thương, gắn hàm tạm.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Chụp phim Panorex để kiểm tra.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Điều chỉnh khớp cắn.
          </p>
          <h6 className="section-trongrangtoanham-left-text-h6">
            Bước 4: Tái khám và cắt chỉ sau 7 ngày.
          </h6>
          <p className="section-trongrangtoanham-left-text-p">- Cắt chỉ</p>
          <p className="section-trongrangtoanham-left-text-p">
            - Chụp phim kiểm tra mức độ lành thương.
          </p>
          <h6 className="section-trongrangtoanham-left-text-h6">
            Bước 5: Tái khám kiểm tra phục hồi sau 1-3 tháng.
          </h6>
          <p className="section-trongrangtoanham-left-text-p">
            Chụp phim kiểm tra mức độ tích hợp xương.
          </p>
          <h6 className="section-trongrangtoanham-left-text-h6">
            Bước 6: Tái khám kiểm tra và lấy dấu Implant để làm phục hình sau
            cùng sau 4 – 6 tháng.
          </h6>
          <p className="section-trongrangtoanham-left-text-p">
            - Chụp phim kiểm tra.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Lấy dấu trên Implant để làm hàm sau cùng.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Lấy dấu khớp cắn.
          </p>
          <h6 className="section-trongrangtoanham-left-text-h6">
            Bước 7: Thử độ chính xác của dấu Implant sau 1 – 2 ngày.
          </h6>
          <h6 className="section-trongrangtoanham-left-text-h6">
            Bước 8: Thử khung sườn Titanium CAD/CAM trên 4 hoặc 6 Implant sau 3
            – 4 ngày.
          </h6>
          <p className="section-trongrangtoanham-left-text-p">
            Đảm bảo khít sát theo mẫu hàm khách hàng.
          </p>
          <h6 className="section-trongrangtoanham-left-text-h6">
            Bước 9: Gắn hàm sau cùng trên Implant sau 1 – 2 ngày.
          </h6>
          <p className="section-trongrangtoanham-left-text-p">
            - Gắn hàm sau cùng, kiểm tra độ khít sát.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Kiểm tra khớp cắn.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Hướng dẫn chăm sóc tại nhà.
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            - Hẹn lịch tái khám định kỳ 3 tháng - 6 tháng - 1 năm
          </p>
          <p className="section-trongrangtoanham-left-text-p">
            Hi vọng qua những thông tin mà chúng tôi vừa chia sẻ giúp bạn hiểu
            hơn về trồng răng Implant toàn hàm. Nếu bạn có thắc mắc hoặc cần tư
            vấn cụ thể về kế hoạch trồng răng toàn hàm của mình hãy liên hệ với
            Nha Khoa Phúc Nguyên ngay nhé!
          </p>

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

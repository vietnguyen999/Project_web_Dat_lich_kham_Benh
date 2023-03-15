import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import imgs20 from "../../img/imgs20.png";
import bocsu2 from "../../img/bocsu2.jpg";
import "./bocsu.css";
import { useState } from "react";
import Calendar from "../calendar/Calendar";
import bocsu from "../../img/bocsu1.png";
import rangbocsu from "../../img/rangbocsu.png";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import Footer from "../../layout/Footer";
export default function Bocsu() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <div className="header-bocsu">
        <p className="header-bocsu-p">
          Trang chủ <span className="header-bocsu-dau">-</span>Răng Sứ{" "}
          <span className="header-rangsu-dau">-</span> Bọc sứ
        </p>
      </div>
      <Row className="section-bocsu">
        <Col className="section-bocsu-left" xs={12} md={8}>
          <h2 className="section-bocsu-left-h2">BỌC SỨ THẨM MỸ</h2>
          <img src={bocsu} alt="" className="section-bocsu-left-img" />
          <h5 className="section-bocsu-left-text-h2">
            Bọc răng sứ là gì? Trường hợp nào nên bọc răng sứ?
          </h5>
          <p className="section-bocsu-left-text-p">
            Bọc răng sứ (phục hình cố định răng sứ) là sử dụng răng sứ được làm
            hoàn toàn từ sứ hoặc sứ kết hợp cùng kim loại để chụp lên phần răng
            khiếm khuyết hoặc hư tổn để tái tạo hình dáng, kích thước và màu sắc
            như răng thật.
          </p>
          <h6 className="section-bocsu-left-text-h4">
            Có 2 phương pháp răng sứ:{" "}
          </h6>
          <li className="section-bocsu-left-text-li">
            Bọc sứ: phương pháp sử dụng răng sứ để chụp lên trên răng thật.{" "}
          </li>
          <li className="section-bocsu-left-text-li">
            Dán sứ: phương pháp sử dụng mặt dán làm bằng lớp răng sứ mỏng nguyên
            khối có hình dáng và kích thước như răng thật dán lên mặt trước của
            răng. Phương pháp này phù hợp cho khách hàng có cung răng đều đẹp
            sẵn.
          </li>
          <h6 className="section-bocsu-left-text-h4">
            Bọc răng sứ thẩm mỹ được áp dụng cho nhiều trường hợp khác nhau:
          </h6>
          <img src={rangbocsu} alt="" className="section-bocsu-left-img" />
          <h3 className="section-bocsu-left-text-h2">
            4 ưu điểm của bọc răng sứ thẩm mỹ :
          </h3>
          <h5 className="section-bocsu-left-text-h3">
            Khắc phục tình trạng thẩm mỹ của răng
          </h5>
          <p className="section-bocsu-left-text-p">
            Răng sứ được thiết kế với màu sắc, hình dáng đẹp hơn răng thật ban
            đầu nên sau khi bọc răng sứ thẩm mỹ có thể khắc phục tối đa các
            những khuyết điểm của răng xấu, gãy, bị bể vỡ giúp răng đẹp, đều và
            trắng sáng hoàn hảo.
          </p>
          <h5 className="section-bocsu-left-text-h3">
            Khôi phục chức năng ăn nhai
          </h5>
          <p className="section-bocsu-left-text-p">
            Răng sứ rất cứng chắc, chịu lực ăn nhai tốt nên sau khi bọc răng sứ,
            răng thật không chỉ được bảo vệ, giúp bền chắc mà còn đảm bảo chức
            năng ăn nhai tốt. Đặc biệt với những trường hợp mất răng, bọc răng
            sứ bằng cách làm cầu răng sứ sẽ giúp khôi phục cho răng đã mất, tăng
            khả năng ăn nhai cho toàn hàm.
          </p>
          <h5 className="section-bocsu-left-text-h3">
            Thời gian bọc răng sứ nhanh
          </h5>
          <p className="section-bocsu-left-text-p">
            Toàn bộ thời gian làm răng sứ chỉ mất thời gian từ 3 – 5 ngày để
            hoàn tất dịch vụ.
          </p>
          <li className="section-bocsu-left-text-li">
            Ngày thứ 1 – 2: Thăm khám, mài cùi, lấy dấu, gắn răng tạm.{" "}
          </li>
          <li className="section-bocsu-left-text-li">
            Ngày thứ 3 – 5: Thử sứ, gắn răng sứ hoàn chỉnh.
          </li>
          <h5 className="section-bocsu-left-text-h3">
            Chi phí hợp lý, đa dạng
          </h5>
          <p className="section-bocsu-left-text-p">
            Đa dạng các loại sản phẩm răng sứ với mức chi phí khác nhau tùy theo
            nhu cầu của khách hàng.
          </p>
          <img src={bocsu2} alt="" className="section-bocsu-left-img" />
          <h3 className="section-bocsu-left-text-h2">
            Quy trình bọc răng sứ được thực hiện như thế nào ?
          </h3>
          <h5 className="section-bocsu-left-text-h3">
            Quy trình bọc răng sứ thẩm mỹ
          </h5>
          <p className="section-bocsu-left-text-p">
            Bọc răng sứ không chỉ mang đến nụ cười giúp bạn tỏa sáng mà còn đảm
            bảo chức năng ăn nhai. Để đạt hiệu quả cao và an toàn khi thực hiện,
            quy trình bọc răng sứ phải được tiến hành đúng chuẩn theo trình tự,
            đầy đủ các bước. Việc thực hiện không đúng trình tự các bước hay bỏ
            qua bất kỳ thao tác nào trong quy trình bọc răng sứ có thể đem đến
            kết quả không như mong đợi:
          </p>
          <li className="section-bocsu-left-text-li">
            Bước 1: Thăm khám, tư vấn, chụp phim, lên kế hoạch điều trị
          </li>
          <li className="section-bocsu-left-text-li">
            Bước 2: Gây tê và mài răng
          </li>
          <li className="section-bocsu-left-text-li">
            Bước 3: Lấy dấu mẫu hàm và thiết kế răng sứ
          </li>
          <li className="section-bocsu-left-text-li">
            Bước 4: Tiến hành gắn răng tạm
          </li>
          <li className="section-bocsu-left-text-li">Bước 5: Thử và gắn sứ</li>
          <h5 className="section-bocsu-left-text-h3">
            Bọc răng sứ mất bao lâu?
          </h5>
          <p className="section-bocsu-left-text-p">
            Thông thường, thời gian bọc sứ 1 – 2 răng kéo dài 2 – 3 ngày . Thời
            gian bọc sứ 1 hàm, 2 hàm kéo dài từ 2 – 4 ngày và cần thêm 1 – 2 lần
            tái khám để bác sĩ kiểm tra cảm giác nhai của bạn đã ổn chưa.
          </p>
          <h5 className="section-bocsu-left-text-h3">
            Bọc răng sứ có đau không?
          </h5>
          <p className="section-bocsu-left-text-p">Bọc răng sứ có đau không?</p>
          <p className="section-bocsu-left-text-p">
            Bọc răng sứ có đau không cũng phụ thuộc vào những yếu tố sau: tay
            nghề bác sĩ, trang thiết bị hỗ trợ…Nếu bọc răng sứ được thực hiện
            bởi bác sĩ có chuyên môn cao, chuyên sâu trong lĩnh vực răng sứ thẩm
            mỹ, giàu kinh nghiệm, kết hợp với sự hỗ trợ của công nghệ hiện đại
            thì chắc chắn không đau, hơn nữa còn mang lại kết quả mỹ mãn.
          </p>
          <h3 className="section-bocsu-left-text-h2">
            Các loại sản phẩm răng sứ tại Nha Khoa Phúc Nguyên :
          </h3>
          <h5 className="section-bocsu-left-text-h3">Răng sứ kim loại :</h5>
          <li className="section-bocsu-left-text-li">
            Thành phần là sườn kim loại phủ sứ.
          </li>
          <li className="section-bocsu-left-text-li">Khả năng chịu lực tốt.</li>
          <li className="section-bocsu-left-text-li">
            Tính thẩm mỹ không cao do dễ thấy sườn kim loại bên trong khi có ánh
            sáng chiếu vào.
          </li>
          <li className="section-bocsu-left-text-li">
            Thường sử dụng cho răng hàm.
          </li>
          <h5 className="section-bocsu-left-text-h3">Răng toàn sứ :</h5>
          <li className="section-bocsu-left-text-li">
            Thành phần 100% làm từ sứ.
          </li>
          <li className="section-bocsu-left-text-li">
            Thẩm mỹ đẹp như răng thật.
          </li>
          <li className="section-bocsu-left-text-li">Khả năng chịu lực tốt.</li>
          <li className="section-bocsu-left-text-li">
            Không gây dị ứng cho người sử dụng.
          </li>
          <h5 className="section-bocsu-left-text-h3">Dán sứ :</h5>
          <li className="section-bocsu-left-text-li">
            Thành phần 100% làm từ sứ.
          </li>
          <li className="section-bocsu-left-text-li">
            Thẩm mỹ đẹp như răng thật.
          </li>
          <li className="section-bocsu-left-text-li">
            Rất mỏng, hạn chế mài răng, độ cứng, độ đàn hồi cao.
          </li>
          <li className="section-bocsu-left-text-li">
            Phù hợp với khách hàng có cung răng đều.{" "}
          </li>
          <h5 className="section-bocsu-left-text-h3">
            Hệ thống trang thiết bị chẩn đoán hiện đại, chính xác, an toàn
          </h5>
          <li className="section-bocsu-left-text-li">
            Máy chụp Cone Beam 3D thế hệ mới, máy quét dấu răng Trios 3Shape tân
            tiến nhất, giúp bác sĩ xác định chính xác tình trạng răng miệng,
            khiếm khuyết, từ đó lên kế hoạch điều trị chi tiết, cụ thể, tính
            toán hợp lý.
          </li>
          <li className="section-bocsu-left-text-li">
            Thiết kế nụ cười Smile Design: phân tích, thiết kế và nhìn thấy
            trước được hình dáng nụ cười nào là phù hợp nhất với diện mạo và
            phong cách của riêng từng khách hàng.
          </li>
          <li className="section-bocsu-left-text-li">
            Hệ thống thanh trùng trung tâm: 100% dụng cụ được tiệt trùng, mỗi
            khách hàng bộ dụng cụ và phòng điều trị riêng biệt bảo đảm an toàn,
            chống lây nhiễm chéo.
          </li>
          <p className="section-bocsu-left-text-p">
            Với những ưu điểm vượt trội về chất lượng, dịch vụ, công nghệ, Nha
            Khoa Phúc Nguyên sẽ đồng hành và giúp bạn tự tin tỏa sáng với nụ
            cười đẹp rạng ngời. Nếu còn bất kỳ thắc mắc về dịch vụ bọc răng sứ
            thẩm mỹ, bạn đừng ngần ngại liên hệ hoặc đến trực tiếp các phòng
            khám để được bác sĩ tư vấn cụ thể nhé! Chia sẻ:
          </p>
          <h6 className="section-bocsu-left-text-h6-chiase"> Chia sẻ </h6>
          <div className="section-bocsu-left-text-icon">
            <span className="section-bocsu-left-text-icon-fa">
              <FaFacebook />
            </span>
            <span className="section-bocsu-left-text-icon-fa">
              <AiFillTwitterCircle />
            </span>
            <span className="section-bocsu-left-text-icon-fa">
              <BsPinterest />
            </span>
            <span className="section-bocsu-left-text-icon-fa">
              <AiFillGooglePlusCircle />
            </span>
          </div>
          <div className="section-bocsu-left-btn">
            <button className="section-bocsu-left-text-btn"><span><BiPhoneCall /></span>  0941828083
            </button>
            <button  onClick={handleShow} className="section-bocsu-left-text-btn" > <span> <BsFillJournalBookmarkFill /></span>ĐẶT LỊCH KHÁM
              </button>
              <Calendar show={show} handleClose={() => setShow(false)} />
            <button className="section-bocsu-left-text-btn"><span>  <BsFillJournalBookmarkFill /></span>  NHẬN TƯ VẤN
            </button>
          </div>
          <div className="section-bocsu-left-text-noidung">
            <h3 className="section-bocsu-left-text-noidumg-h3">
              NỘI DUNG LIÊN QUANG{" "}
            </h3>
            <Col
              className=" section-rangsu-left-tin-left"
              as={Link}
              to={"/bocsu"}
              xs={12}
              md={6}
            >
              <img
                src={imgs20}
                alt=""
                className="section-rangsu-left-tin-left-img"
              />
              <h3 className="section-rangsu-left-tin-left-h3">
                MẶT DÁN SỨ VENEER
              </h3>
              <p className="section-rangsu-left-tin-left-p">
                Răng sứ Veneer là mặt dán sứ bọc dùng để bọc bên ngoài bề mặt
                răng nhằm che lấp các khuyết điểm khi răng bị tổn thương cấu
                trúc hoặc xỉn...
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
            <h5 className="section-bocsu-right-dichvu-h5"  >
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

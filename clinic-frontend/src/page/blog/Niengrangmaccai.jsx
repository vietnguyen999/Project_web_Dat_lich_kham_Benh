import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import niengrangmaccai1 from "../../img/niengrangmaccai1.png";
import imgs22 from "../../img/imgs22.png";
import maccaisu from "../../img/maccaisu.png";
import { useState } from "react";
import "./Niengrangmaccai.css";
import Calendar from "../calendar/Calendar";
import maccaikimloai from "../../img/maccaikimloai1.jpg";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsPinterest } from "react-icons/bs";
import { AiFillGooglePlusCircle } from "react-icons/ai";
import { BsFillJournalBookmarkFill } from "react-icons/bs";
import { BiPhoneCall } from "react-icons/bi";
import Footer from "../../layout/Footer";
export default function Niengrangmaccai() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
      <div className="header-niengrangmaccai">
        <p className="header-niengrangmaccai-p">
          Trang chủ <span className="header-niengrangmaccai-dau">-</span>Răng Sứ{" "}
          <span className="header-rangsu-dau">-</span>Niềng răng
        </p>
      </div>
      <Row className="section-niengrangmaccai">
        <Col className="section-niengrangmaccai-left" xs={12} md={8}>
          <h2 className="section-niengrangmaccai-left-h2">
            NIỀNG RĂNG MẮC CÀI
          </h2>
          <img
            src={niengrangmaccai1}
            alt=""
            className="section-niengrangmaccai-left-img"
          />
          <h5 className="section-niengrangmaccai-left-text-h3">
            Niềng răng mắc cài là gì?
          </h5>
          <p className="section-niengrangmaccai-left-text-p">
            Niềng răng (chỉnh nha) mắc cài là kỹ thuật sử dụng mắc cài bằng chất
            liệu kim loại hoặc sứ gắn lên bề mặt răng kết hợp với dây cung và
            các khí cụ chỉnh nha khác tạo lực kéo, giúp răng dịch chuyển về đúng
            vị trí mong muốn.
          </p>
          <p className="section-niengrangmaccai-left-text-p">
            Niềng răng là phương pháp khắc phục tình trạng răng hô, móm, khấp
            khểnh, sai lệch khớp cắn an toàn, hiệu quả và bảo vệ sức khỏe răng
            thật tốt nhất hiện nay. Nếu như phương pháp bọc răng sứ, dán sứ
            Veneer cần phải mài răng thậm chí là điều trị tủy để khắc phục tình
            trạng răng lệch lạc thì niềng răng giúp bảo tồn răng 100%, không xâm
            lấn răng thật. Chính vì thế, niềng răng ngày càng được nhiều khách
            hàng tin tưởng, lựa chọn.
          </p>
          <h5 className="section-niengrangmaccai-left-text-h3">
            Có những loại niềng răng mắc cài nào?
          </h5>
          <h5 className="section-niengrangmaccai-left-text-h3">
            Niềng răng mắc cài kim loại :
          </h5>
          <img
            src={maccaikimloai}
            alt=""
            className="section-niengrangmaccai-left-img"
          />
          <h5 className="section-niengrangmaccai-left-text-h3">Đặc điểm:</h5>
          <p className="section-niengrangmaccai-left-text-p">
            Sử dụng mắc cài bằng chất liệu hợp kim không gỉ như Niken – Titanium
            kết hợp với dây thun để cố định dây cung trong rãnh mắc cài, tạo lực
            kéo giúp răng dịch chuyển.
          </p>
          <h5 className="section-niengrangmaccai-left-text-h3">Ưu điểm:</h5>
          <li className="section-niengrangmaccai-left-text-li">
            Tiết kiệm chi phí: Giá niềng răng mắc cài kim loại tiêu chuẩn là rẻ
            nhất trong các phương pháp niềng răng hiện nay.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Sử dụng dây thun có nhiều màu sắc khác nhau, thích hợp sử dụng cho
            trẻ em.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Mắc cài kim loại thường có độ dày mỏng hơn so với các loại mắc cài
            khác nên khi đeo niềng sẽ dễ chịu, thoải mái hơn.
          </li>
          <h5 className="section-niengrangmaccai-left-text-h3">Nhược điểm:</h5>
          <li className="section-niengrangmaccai-left-text-li">
            Thời gian đến nha khoa tái khám thường xuyên hơn, thường khoảng 1
            tháng tái khám 1 lần.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Dây thun có độ đàn hồi kém, dễ bị giãn ra làm lực kéo không ổn định,
            dây cung dễ bị bung tuột ra khỏi mắc cài.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Tính thẩm mỹ không cao do màu sắc của mắc cài kim loại không tương
            đồng với màu của răng.
          </li>
          <h5 className="section-niengrangmaccai-left-text-h3">
            Niềng răng mắc cài kim loại tự buộc :
          </h5>
          <h5 className="section-niengrangmaccai-left-text-h3">Đặc Điển</h5>
          <p className="section-niengrangmaccai-left-text-p">
            Mắc cài kim loại tự buộc cũng sử dụng mắc cài bằng chất liệu hợp kim
            không gỉ. Nhưng sự khác biệt so với mắc cài kim loại tiêu chuẩn là
            dây thun được thay thế bằng chốt khóa tự động. Chốt khóa khóa này
            cũng có chức năng tương đương như dây thun là giúp cố định dây cung
            trong rãnh mắc cài, tạo lực kéo giúp răng dịch chuyển.
          </p>
          <h5 className="section-niengrangmaccai-left-text-h3">Ưu Điển</h5>
          <li className="section-niengrangmaccai-left-text-li">
            Sử dụng chốt khóa tự động, không phụ thuộc vào độ co giãn của dây
            chun lên lực kéo răng ổn định hơn so với mắc cài tiêu chuẩn, giúp
            rút ngắn thời gian niềng răng.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Không phải đến nha khoa tái khám thường xuyên, thường khoảng 1,5 – 2
            tháng mới cần đến tái khám 1 lần.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Hạn chế tình trạng bung, tuột mắc cài.
          </li>
          <h5 className="section-niengrangmaccai-left-text-h3">Nhược Điển</h5>
          <li className="section-niengrangmaccai-left-text-li">
            Chi phí cao hơn so với các loại niềng răng mắc cài tiêu chuẩn.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Tính thẩm mỹ không cao, mắc cài nhìn lộ rõ khi bạn giao tiếp.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Độ dày lớn hơn so với mắc cài tiêu chuẩn nên khi đeo niềng sẽ có cảm
            giác vướng víu, khó chịu hơn.
          </li>
          <h5 className="section-niengrangmaccai-left-text-h3">
            Niềng răng mắc cài sứ :
          </h5>
          <img
            src={maccaisu}
            alt=""
            className="section-niengrangmaccai-left-img-maccaisu"
          />
          <h5 className="section-niengrangmaccai-left-text-h3">Đặc điển</h5>
          <p className="section-niengrangmaccai-left-text-p">
            Sử dụng mắc cài bằng chất liệu sứ kết hợp với dây thun để cố định
            dây cung trong rãnh mắc cài, tạo lực kéo giúp răng dịch chuyển. Mắc
            cài sứ tiêu chuẩn và mắc cài kim loại tiêu chuẩn chỉ khác nhau về
            chất liệu mắc cài, còn về cơ chế tạo lực kéo chỉnh nha thì như nhau.
          </p>
          <h5 className="section-niengrangmaccai-left-text-h3">Ưu điển</h5>
          <li className="section-niengrangmaccai-left-text-li">
            Tính thẩm mỹ cao do mắc cài có màu sắc tương đồng với màu răng.
            Niềng răng mắc cài sứ phù hợp với phái đẹp hoặc những người làm công
            việc phải giao tiếp nhiều.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Mắc cài làm từ sứ nguyên chất, không gây kích ứng môi và nướu.
          </li>
          <h5 className="section-niengrangmaccai-left-text-h3">Nhược điển</h5>
          <li className="section-niengrangmaccai-left-text-li">
            Chi phí cao hơn so với niềng răng mắc cài kim loại.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Mắc cài làm bằng chất liệu sứ nên dễ bị bung tuột hoặc vỡ.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Dây thun có thể bị co giãn, làm mắc cài bị tuột, lực kéo không ổn
            định như mắc cài tự buộc.
          </li>
          <h5 className="section-niengrangmaccai-left-text-h3">
            Niềng răng mắc cài sứ tự buộc :
          </h5>
          <h5 className="section-niengrangmaccai-left-text-h3">Đặc điểm:</h5>
          <p className="section-niengrangmaccai-left-text-p">
            Mắc cài sứ tự buộc sử dụng mắc cài bằng chất liệu sứ. Nhưng sự khác
            biệt so với mắc cài sứ tiêu chuẩn là dây thun được thay thế bằng
            chốt khóa tự động. Chốt khóa khóa này cũng có chức năng tương đương
            như dây thun là giúp cố định dây cung trong rãnh mắc cài, tạo lực
            kéo giúp răng dịch chuyển.
          </p>
          <h5 className="section-niengrangmaccai-left-text-h3">Ưu điểm:</h5>
          <li className="section-niengrangmaccai-left-text-li">
            Tính thẩm mỹ cao do mắc cài có màu sắc tương đồng với màu răng.
            Niềng răng mắc cài sứ phù hợp với phái đẹp hoặc những người làm công
            việc phải giao tiếp nhiều.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Mắc cài làm từ sứ nguyên chất, không gây kích ứng môi và nướu.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Sử dụng chốt khóa tự động, không phụ thuộc vào độ co giãn của dây
            chun lên lực kéo răng ổn định hơn so với mắc cài tiêu chuẩn, giúp
            rút ngắn thời gian niềng răng.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Không phải đến nha khoa tái khám thường xuyên, thường khoảng 1,5
            tháng mới cần đến tái khám 1 lần.
          </li>
          <h5 className="section-niengrangmaccai-left-text-h3">Nhược điểm:</h5>
          <li className="section-niengrangmaccai-left-text-li">
            Chốt khóa tự động lớn hơn so với các loại mắc cài khác nên bạn sẽ
            cảm thấy vướng víu hơn.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Mắc cài làm bằng chất liệu sứ nên dễ bị bung tuột hoặc vỡ.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Chi phí niềng răng cao hơn các loại mắc cài khác.
          </li>
          <h5 className="section-niengrangmaccai-left-text-h3">
            Nên niềng răng mắc cài loại nào?
          </h5>
          <p className="section-niengrangmaccai-left-text-p">
            Mỗi loại niềng răng mắc cài đều có những ưu, nhược điểm riêng của
            mình. Nhưng về kết quả cuối cùng, dù niềng răng loại nào cũng đem
            đến cho bạn một hàm răng đều đẹp, chuẩn thẩm mỹ, chuẩn khớp cắn và
            khả năng ăn nhai tốt. Để biết được nên niềng răng mắc cài loại nào,
            hãy xem 1 số gợi ý dưới đây của chúng tôi:
          </p>
          <li className="section-niengrangmaccai-left-text-li">
            Đối với trẻ em: Không cần thẩm mỹ cao, có thể niềng răng mắc cài kim
            loại để tiết kiệm chi phí, giảm đau nhức, hạn chế tình trạng bung,
            tuột mắc cài gây vướng víu, khó chịu cho trẻ, rút ngắn thời gian
            niềng răng.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Đối với người lớn: Có thể niềng răng mắc cài sứ hoặc kim loại tùy
            theo nhu cầu thẩm mỹ và công việc hiện tại. Đối với người làm việc
            thường xuyên phải giao tiếp nhiều như lễ tân, nhân viên kinh doanh,
            bán hàng, giám đốc,… nên niềng răng mắc cài sứ để đảm bảo thẩm mỹ,
            không lộ mắc cài khi giao tiếp.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Đối với khách hàng ở xa nha khoa: Nên chọn niềng răng mắc cài loại
            tự buộc để rút ngắn thời gian, hạn chế tình trạng rơi mắc cài và
            không phải đi lại tái khám nhiều lần.
          </li>
          <li className="section-niengrangmaccai-left-text-li">
            Đối với khách hàng muốn tiết kiệm chi phí: Có thể niềng răng mắc cài
            kim loại. Nếu bạn biết cách chăm sóc răng miệng đúng cách và có chế
            độ ăn uống đúng theo chỉ dẫn của bác sĩ thì bạn hoàn toàn có thể rút
            ngắn thời gian niềng răng và đảm bảo kết quả niềng răng cuối cùng
            đúng như các loại mắc cài khác mà vẫn tiết kiệm được tối đa chi phí
            niềng răng.
          </li>
          <p className="section-niengrangmaccai-left-text-p">
            Tóm lại, để biết nên niềng răng mắc cài loại nào, bạn nên tham khảo
            ý kiến của bác sĩ đồng thời xem xét tình hình tài chính, nhu cầu
            thẩm mỹ, mong muốn của bản thân trong quá trình chỉnh nha như thế
            nào để có thể lựa chọn được phương pháp niềng răng phù hợp với nhu
            cầu và tình trạng răng hiện tại của mình.
          </p>
          <p className="section-niengrangmaccai-left-text-p">
            Hi vọng qua những thông tin mà chúng tôi vừa chia sẻ đã giúp bạn
            hiểu được niềng răng mắc cài là gì? Ưu, nhược điểm của từng loại mắc
            cài ra sao? Nên niềng răng mắc cài loại nào tốt, tiết kiệm chi phí,
            thẩm mỹ cao?
          </p>
          <p className="section-niengrangmaccai-left-text-p">
            Nếu bạn có thắc mắc hoặc cần tư vấn cụ thể về kế hoạch chỉnh nha của
            mình cũng như tìm hiểu về công nghệ chỉnh nha hiện đại hãy liên hệ
            với Nha Khoa Phúc Nguyên ngay nhé!
          </p>
          <h6 className="section-niengrangmaccai-left-text-h6-chiase">
            {" "}
            Chia sẻ{" "}
          </h6>
          <div className="section-niengrangmaccai-left-text-icon">
            <span className="section-niengrangmaccai-left-text-icon-fa">
              <FaFacebook />
            </span>
            <span className="section-niengrangmaccai-left-text-icon-fa">
              <AiFillTwitterCircle />
            </span>
            <span className="section-niengrangmaccai-left-text-icon-fa">
              <BsPinterest />
            </span>
            <span className="section-niengrangmaccai-left-text-icon-fa">
              <AiFillGooglePlusCircle />
            </span>
          </div>
          <div className="section-niengrangmaccai-left-btn">
            <button className="section-niengrangmaccai-left-text-btn">
              {" "}
              <span>
                <BiPhoneCall />
              </span>{" "}
              0941828083
            </button>
            <button
              onClick={handleShow}
              className="section-niengrangmaccai-left-text-btn"
            >
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              ĐẶT LỊCH KHÁM
            </button>
            <Calendar show={show} handleClose={() => setShow(false)} />
            <button className="section-niengrangmaccai-left-text-btn">
              <span>
                <BsFillJournalBookmarkFill />
              </span>{" "}
              NHẬN TƯ VẤN
            </button>
          </div>
          <div className="section-niengrangmaccai-left-text-noidung">
            <h3 className="section-niengrangmaccai-left-text-noidumg-h3">
              NỘI DUNG LIÊN QUANG{" "}
            </h3>
            <Col
              className=" section-rangsu-left-tin-left"
              as={Link}
              to={"/niengrangtrongsuot"}
              xs={12}
              md={6}
            >
              <img
                src={imgs22}
                alt=""
                className="section-rangsu-left-tin-left-img"
              />
              <h3 className="section-rangsu-left-tin-left-h3">
                NIỀNG RĂNG TRONG SUỐT INVISALIGN
              </h3>
              <p className="section-rangsu-left-tin-left-p">
                Niềng răng trong suốt invisalign Là hệ thống máng chỉnh nha
                trong suốt của tập đoàn Align Technology - Hoa Kỳ....
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

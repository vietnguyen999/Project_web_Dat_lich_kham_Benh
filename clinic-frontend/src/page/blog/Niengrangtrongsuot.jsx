import React from 'react'
import {Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import niengrangtrongsuot2 from "../../img/niengrangtrongsuot2.jpg";
import niengrangtrongsuot3 from "../../img/niengrangtrongsuot3.jpeg";
import niengrangtrongsuot4 from "../../img/niengrangtrongsuot4.jpg";
import imgs23 from "../../img/imgs23.png"
import imgs22 from "../../img/imgs22.png"
import niengrangtrongsuot1 from "../../img/niengrangtrongsuot1.jpg"
import { useState } from "react";
import "./Niengrangtrongsuot.css";
import Calendar from "../calendar/Calendar";
import { FaFacebook } from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs';
import {AiFillGooglePlusCircle} from 'react-icons/ai';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import {BiPhoneCall} from 'react-icons/bi';
import Footer from '../../layout/Footer';
export default function Niengrangtrongsuot() {
    const [show, setShow] = useState(false);
    const handleShow = () => {
      setShow(true);
    };
  return (
    <div>
    <div className="header-niengrangtrongsuot">
         <p className='header-niengrangtrongsuot-p'>Trang chủ <span className='header-niengrangtrongsuot-dau' >-</span>Răng Sứ <span className='header-rangsu-dau' >-</span>Niềng răng</p>
     </div>
     <Row className='section-niengrangtrongsuot'>
     <Col className='section-niengrangtrongsuot-left' xs={12} md={8}>
      <h2 className='section-niengrangtrongsuot-left-h2'>NIỀNG RĂNG TRONG SUỐT INVISALIGN</h2>
      <img src={imgs22} alt=''className='section-niengrangtrongsuot-left-img'/>
      <h5 className='section-niengrangtrongsuot-left-text-h3'>NIỀNG RĂNG TRONG SUỐT INVISALIGN LÀ GÌ?</h5>
      <li className='section-niengrangtrongsuot-left-text-li'>Là hệ thống máng chỉnh nha trong suốt của tập đoàn Align Technology - Hoa Kỳ.</li>
      <li className='section-niengrangtrongsuot-left-text-li'>Hệ thống Invisalign là hệ thống chỉnh nha sử dụng 1 chuỗi các máng được cá nhân hóa trên từng khách hàng.</li>
      <li className='section-niengrangtrongsuot-left-text-li'>Invisalign sử dụng độc quyền phần mềm Clincheck - giúp cho khách hàng được xem mô phỏng quá trình chỉnh nha của mình từ khi bắt đầu tới khi kết thúc.</li>
      <li className='section-niengrangtrongsuot-left-text-li'>Đối với khay Invisalign, lực tác động của khay từ ngày 0 - ngày 14 được trải đều. Lực ban đầu không mạnh (so sánh với các khay trong suốt khác) tuy nhiên lực được duy trì cho tới ngày cuối bệnh nhân đeo khay. Lực tác động vừa phải làm giảm cảm giác khó chịu và đau đớn ở những ngày đầu tiên đeo khay.</li>
      <img src={niengrangtrongsuot1} alt=''className='section-niengrangtrongsuot-left-img'/>
      <h5 className='section-niengrangtrongsuot-left-text-h3'>CÔNG NGHỆ INVISALIGN</h5>
      <p className='section-rangsu-left-tin-left-p'>Tính năng của sản phẩm Invisalign bao gồm 3 “Smart”:</p>
      <li className='section-niengrangtrongsuot-left-text-li'>Smart Track – Vật liệu thông minh:</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Được thiết kế bằng các lớp nhựa chồng lên nhau, được sản xuất bằng nhựa y tế độc quyền giúp khay Invisalign có độ đàn hồi tốt, ôm khít sát răng theo đường viền lợi, tránh tình trạng nứt khay, rách khay cũng như tránh gây kích ứng lên lợi bệnh nhân. Phóng thích lực nhẹ và ổn định.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Theo như biểu đồ đã nghiên cứu chứng minh, khay Invisalign có độ đàn hồi tốt giúp khay ôm sát với răng khách hàng và tăng hiệu quả điều trị. Khay Invisalign được sản xuất theo quy trình in 3D, giúp các khay chỉnh nha chính xác và phù hợp với từng bệnh nhân.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Smart Stage – Giai đoạn thông minh:</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Dựa vào trí thông minh nhân tạo, Clincheck sẽ tính toán được răng nào dịch chuyển trước, răng nào dịch chuyển sau, dịch chuyển theo nhóm, dịch chuyển một mình…</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Smart Force – Lực thông minh:</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Tính năng tạo lực dựa trên hệ thống attachment, tăng sự dịch chuyển và làm đều răng theo mong muốn của bác sĩ.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Attachment là những nút bằng chặn bằng nhựa, được bác sĩ gắn lên răng thật, nhằm tạo điểm bám cho khay Invisalign, thông thường chỉ có một số răng được gắn attachment.</li>
       <img src={niengrangtrongsuot2} alt=''className='section-niengrangtrongsuot-left-img'/>
       <h5 className='section-niengrangtrongsuot-left-text-h3'>NHỮNG ĐỐI TƯỢNG PHÙ HỢP VỚI CHỈNH NHA INVISALIGN</h5>
       <p className='section-rangsu-left-tin-left-p'>Nếu bạn gặp phải các vấn đề sau đây thì bạn sẽ được khuyên là nên thực hiện chỉnh nha:</p>
       <li className='section-niengrangtrongsuot-left-text-li'>Răng hô: các răng cửa hàm trên nằm quá xa về phía trước so với răng hàm dưới.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Răng móm: các răng cửa hàm dưới quá xa về phía trước so với răng hàm trên.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Răng cắn chéo: răng trên không khớp với răng dưới như bình thường khi cắn lại.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Răng cắn hở: Khi hàm trên và hàm dưới cắn lại sẽ xuất hiện khoảng hở giữa các bề mặt cắn của răng cửa.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Khe hở răng cửa giữa: Các răng cửa giữa của hàm trên không thẳng hàng với các răng cửa giữa của hàm dưới hình thành khoảng hở.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Khoảng hở rộng giữa các răng: Những khoảng trống giữa các răng do thiếu răng.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Răng chen chúc: Có quá nhiều răng so với bình thường, mọc chen chúc nhau trên hàm.</li>
       <img src={niengrangtrongsuot3} alt=''className='section-niengrangtrongsuot-left-img'/>
       <h5 className='section-niengrangtrongsuot-left-text-h3'>ƯU ĐIỂM CỦA SẢN PHẨM INVISALIGN SO VỚI SẢN PHẨM MẮC CÀI</h5>
       <h6 className='section-niengrangtrongsuot-left-text-h6'>Sản phẩm Invisalign</h6>
       <li className='section-niengrangtrongsuot-left-text-li'>Tính thẩm mỹ cao.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Dễ chịu, không đau đớn.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Tháo lắp thoải mái, dễ dàng vệ sinh.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Hơi thở thơm tho suốt quá trình chỉnh nha.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Răng chỉnh đến đâu, tận hưởng luôn vẻ đẹp đến đó.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Nhìn được kết quả chỉnh nha bằng phần mềm.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Bảo tồn được men răng gốc khi kết thúc chỉnh nha.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Thời gian đến gặp nha sĩ rất ít, mỗi cuộc hẹn cũng rất nhanh.</li>
       <img src={niengrangtrongsuot4} alt=''className='section-niengrangtrongsuot-left-img'/>
       <h6 className='section-niengrangtrongsuot-left-text-h6-'>Sản phẩm mắc cài</h6>
       <li className='section-niengrangtrongsuot-left-text-li'>Lộ mắc cài, dây cung, không thẩm mỹ.  </li>
       <li className='section-niengrangtrongsuot-left-text-li'>Đau do thiết bị dây cung, chạm vào mô mềm.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Không tháo lắp được, hạn chế những thực phẩm cứng gây bong mắc cài.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Khó vệ sinh hơn, thức ăn mắc vào mắc cài.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Khó bảo tồn men răng sau chỉnh nha.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Không có hình ảnh trực quan để so sánh quá trình dịch chuyển răng, nên mất thời gian trong quá trình điều trị thực tế.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Lịch gặp nha sĩ khá nhiều, có thể xảy ra nhiều cuộc hẹn đột xuất do bung mắc cài.</li>
       <h5 className='section-niengrangtrongsuot-left-text-h3'>QUY TRÌNH NIỀNG RĂNG TRONG SUỐT INVISALIGN</h5> 
       <li className='section-niengrangtrongsuot-left-text-li'>Bước 1:  Khám tổng quát xem bệnh nhân có phù hợp với phương pháp này không.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Bước 2:  Lấy dấu răng bằng máy 3Shape TRIOS.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Bước 3:  Lên kế hoạch dự kiến kết quả điều trị bằng phần mềm ClinCheck 3D.
        Bác sĩ dựa trên kết quả khám lâm sàng của bệnh nhân, kết hợp phân tích phim X-quang 
        và mẫu hàm 3D sẽ chỉ định phương án điều trị cho từng trường hợp cụ thể (đây là bước quan trọng nhất).</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Bước 4:  Chỉnh sửa và chốt kế hoạch điều trị với khách hàng.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Bước 5:  Bác sĩ chỉnh nha gửi kế hoạch điều trị cho các kỹ 
       thuật viên sản xuất bộ khay tại nhà máy ở Mỹ. Khoảng 2,3 tuần khay được chuyển về Việt Nam. Bác sĩ giao khay 
       cho khách hàng. Mỗi cặp khay khách hàng sẽ đeo khoảng 1 đến 2 tuần, sau đó chuyển sang cặp khay kế tiếp, 
       trong suốt quá trình điều trị bác sĩ sẽ kiểm soát các vấn đề phát sinh và thực hiện một số căn chỉnh tùy 
       theo từng trường hợp.</li>
       <li className='section-niengrangtrongsuot-left-text-li'>Bước 6:  Tái khám theo chỉ định của bác sĩ.</li>
       <p className='section-rangsu-left-tin-left-p'>Hi vọng qua những thông tin mà chúng tôi vừa chia sẻ
        giúp bạn hiểu hơn về niềng răng trong suốt Invisalign. Nếu bạn có thắc mắc hoặc cần tư vấn cụ thể
         về kế hoạch chỉnh nha của mình cũng như tìm hiểu về công nghệ chỉnh nha hiện đại hãy liên hệ với
          Nha Khoa Phúc Nguyên ngay nhé!</p>

                 <h6 className='section-niengrangtrongsuot-left-text-h6-chiase'> Chia sẻ </h6>
                   <div className='section-niengrangtrongsuot-left-text-icon'>
                   <span className='section-niengrangtrongsuot-left-text-icon-fa'><FaFacebook /></span>
                   <span className='section-niengrangtrongsuot-left-text-icon-fa'><AiFillTwitterCircle /></span>
                   <span className='section-niengrangtrongsuot-left-text-icon-fa'><BsPinterest /></span>
                   <span className='section-niengrangtrongsuot-left-text-icon-fa'><AiFillGooglePlusCircle /></span>
                   </div>
                  <div className="section-niengrangtrongsuot-left-btn">
                   <button className='section-niengrangtrongsuot-left-text-btn'> <span><BiPhoneCall/></span> 0941828083</button>
                  <button onClick={handleShow} className='section-niengrangtrongsuot-left-text-btn'><span><BsFillJournalBookmarkFill/></span> ĐẶT LỊCH KHÁM</button>
                  <Calendar show={show} handleClose={() => setShow(false)} />
                   <button className='section-niengrangtrongsuot-left-text-btn'><span><BsFillJournalBookmarkFill/></span> NHẬN TƯ VẤN</button>
                  </div>
                  <div className="section-niengrangtrongsuot-left-text-noidung">
                   <h3 className='section-niengrangtrongsuot-left-text-noidumg-h3'>NỘI DUNG LIÊN QUANG </h3>
                   <Col className=' section-rangsu-left-tin-left' as={Link} to={"/niengrangtrongsuot"} xs={12} md={6}>
                     <img src={imgs23} alt='' className='section-rangsu-left-tin-left-img'/>
                     <h3 className='section-rangsu-left-tin-left-h3'>NIỀNG RĂNG MẮC CÀI</h3>
                     <p className='section-rangsu-left-tin-left-p'>
                      Niềng răng mắc cài là gì? Có những loại niềng răng mắc cài nào? Ưu,
                      nhược điểm của từng loại mắc cài ra sao? Nên sử dụng loại mắc
                       cài nào đ...</p>
                     <button className='section-rangsu-left-tin-left-btn section-rangsu-left-tin-left-btn1'>XEM CHI TIẾT...</button>
                   </Col>
                  </div>
                  
                          
     </Col>
     <Col className='section-bocsu-right' xs={6} md={4}>
         <h4 className='section-bocsu-right-h4'>DỊCH VỤ</h4>
      <div className="section-bocsu-right-dichvu">
         <h5 className='section-bocsu-right-dichvu-h5'>NHA KHOA TỔNG QUÁT</h5>
         <h5 className='section-bocsu-right-dichvu-h5'>TRỒNG RĂNG IMPLANT</h5>
         <h5 className='section-bocsu-right-dichvu-h5'>CHỈNH NHA - NIỀNG RĂNG</h5>
         <h5 className='section-bocsu-right-dichvu-h5'>RĂNG SỨ THẪM MỸ</h5>
      </div>
     </Col>
   </Row>
   <Footer/>

 </div>

  )
}

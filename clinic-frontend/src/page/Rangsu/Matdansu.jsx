import React from 'react'
import {Row,Col} from 'react-bootstrap';
import { Link } from "react-router-dom";
import imgs20 from "../../img/imgs20.png"
import './Matdansu.css';
import { useState } from "react";
import Calendar from "../calendar/Calendar";
import matdansu2 from "../../img/matdansu2.jpg"
import matdansu1 from '../../img/matdansu1.png'
import { FaFacebook } from 'react-icons/fa';
import {AiFillTwitterCircle} from 'react-icons/ai'
import { BsPinterest } from 'react-icons/bs';
import {AiFillGooglePlusCircle} from 'react-icons/ai';
import { BsFillJournalBookmarkFill } from 'react-icons/bs';
import {BiPhoneCall} from 'react-icons/bi';
import Footer from '../../layout/Footer';
export default function Matdansu() {
  const [show, setShow] = useState(false);
  const handleShow = () => {
    setShow(true);
  };
  return (
    <div>
       <div className="header-matdansu">
            <p className='header-matdansu-p'>Trang chủ <span className='header-matdansu-dau' >-</span>Răng Sứ <span className='header-rangsu-dau' >-</span> Mặt dán sứ</p>
        </div>
        <Row className='section-matdansu'>
        <Col className='section-matdansu-left' xs={12} md={8}>
         <h2 className='section-matdansu-left-h2'>MẶT DÁN RĂNG SỨ VENEER</h2>
         <img src={imgs20} alt=''className='section-matdansu-left-img'/>
         <h5 className='section-matdansu-left-text-h2'>Vì sao mặt dán sứ Veneer được nhiều người yêu thích?</h5>
         <p className='section-matdansu-left-text-p'>Mặt dán sứ Veneer là một lớp răng sứ mỏng cứng chắc,
          có màu sắc trắng đẹp tự nhiên. Để phục hình, mặt dán sứ Veneer sẽ được gắn lên mặt trước của
           răng giúp che đi các khuyết điểm về mặt thẩm mỹ.</p>
           <p className='section-matdansu-left-text-p'>Làm mặt dán sứ Veneer được áp dụng cho các trường hợp như:</p>
            <li className='section-matdansu-left-text-li'>Răng bị ố vàng, xỉn màu do nhiễm thuốc kháng sinh </li>
            <li className='section-matdansu-left-text-li'>Răng mọc thưa, lệch lạc</li>
            <li className='section-matdansu-left-text-li'>Răng ngắn, kích thước các răng không đều</li>
            <li className='section-matdansu-left-text-li'>Răng bị bể, mẻ, vỡ</li>
            <li className='section-matdansu-left-text-li'>Răng bị mòn men</li>
            <img src={matdansu1} alt=''className='section-matdansu-left-img'/>
            <h3 className='section-matdansu-left-text-h2'>Ưu điểm vượt trội của mặt dán sứ Veneer</h3>
            <p className='section-matdansu-left-text-p'>Với việc khắc phục những nhược điểm của các
             phương pháp bọc răng sứ truyền thống, kể cả quá trình thực hiện, tính thẩm mỹ, 
             độ bền đẹp, linh hoạt, mức độ mài răng….lắp mặt dán sứ Veneer đang là xu hướng 
             thẩm mỹ răng đang được rất nhiều người yêu thích. Dưới đây là những lợi ích nổi
              bật của mặt dán sứ Veneer:</p>
             <h5 className='section-matdansu-left-text-h3'>Phục hình răng đẹp như thật</h5>
             <p className='section-matdansu-left-text-p'>Mặt dán sứ Veneer được chế tạo từ khối 
             sứ nguyên chất trên công nghệ CAD / CAM , có màu trắng, độ trong, bóng và độ “gợn”
              tự nhiên tương tự ngà răng. Đây là ưu điểm tuyệt vời của mặt dán sứ Veneer mà chưa 
              có loại răng sứ nào hiện nay có thể vượt qua được, mang đến hàm răng đẹp, sống động, 
              tự nhiên hơn cả răng thật.</p>
               <h5  className='section-matdansu-left-text-h3'>Giải quyết hiệu quả răng xấu</h5>
               <p className='section-matdansu-left-text-p'>Với thiết kế đặc biệt, mặt dán sứ Veneer rất
                thích hợp với răng cửa, có thể khắc phục một cách hiệu quả những khiếm khuyết của răng
                 xấu như: Răng ố vàng, xỉn màu, nhiễm kháng sinh, mòn men răng, sứt mẻ, lệch, vẹo, các 
                 răng không đều nhau về chiều dài, bề ngang hoặc bản thân mỗi răng lại không cân đối</p>
                 <h5  className='section-matdansu-left-text-h3'>Hạn chế mài răng tối đa</h5>
                 <p className='section-matdansu-left-text-p'>Không chỉ chiếm trọn sự tin yêu của đông đảo
                  khách hàng và bác sĩ chuyên khoa bởi hiệu quả, tính thẩm mỹ, mà mặt dán sứ Veneer 
                  còn được đánh giá cao về việc hạn chế mài răng tối đa.  Khi lắp mặt dán răng sứ Veneer
                   bạn chỉ phải thực hiện mài một phần men răng ở mặt trước của răng và tỷ lệ mài rất ít,
                    khoảng 1/3 so với làm răng thông thường, giúp bảo tồn răng thật tối đa, không cần phải
                     lấy tủy, răng không bị ê buốt khó chịu.</p>
              <h5 className='section-matdansu-left-text-h3'>Độ bền cao</h5>
              <p className='section-matdansu-left-text-p'>Mặt dán sứ Veneer có tuổi thọ cao hơn các loại răng sứ
               khác trung bình từ 10 – 15 năm và nếu được phục hình bởi đội ngũ bác sĩ giỏi, chăm sóc đúng cách
                thì có thể duy trì lâu hơn. Cùng với đó, chất liệu kết dính đặc biệt, không dễ bị hóa lỏng nên
                 mặt dán sứ Veneer bám chắc khá tốt trên thân răng, đảm bảo sau khi phục hình răng không bị kênh 
                 hở, không dễ bị bong hay bật khi nhai gắn, chải răng.</p>
                 <h5 className='section-matdansu-left-text-h3'>Thoải mái ăn nhai</h5>
                 <p className='section-matdansu-left-text-p'>Do mặt dán răng sứ Veneer khá mỏng 
                 (khoảng 0,5 – 0,6 mm), vì vậy trong quá trình ăn nhai bạn hoàn toàn không cảm
                  thấy vướng víu, cộm cấn hay khó chịu. Ngoài ra, bởi được chế tạo từ các khối
                   sứ nguyên chất Lithium Desilicate hay Zirconium, nó có thể chịu được áp lực 
                   nhai cắn của răng cửa lớn, giúp người dùng thoải mái thưởng thức những món ăn yêu thích.</p>
              <h3 className='section-matdansu-left-text-h2'>Quy trình thực hiện dán sứ veneer tại Nha Khoa Phúc Nguyên :</h3>
              <p className='section-matdansu-left-text-p'>Tại Nha Khoa Phúc Nguyên, để mang lại kết quả tốt nhất cho 
              khách hàng, quy trình bọc răng sứ bằng mặt dán răng sứ Veneer luôn thực hiện theo đúng kỹ thuật,
               tiêu chuẩn quốc tế với các bước như sau:</p>
               <img src={matdansu2} alt=''className='section-matdansu-left-img'/>
                <p className='section-matdansu-left-text-p'>Với kỹ thuật bọc răng sứ Veneer theo công nghệ hiện đại tại
                 Nha Khoa Phúc Nguyên không chỉ mang đến cho bạn hàm răng đều đẹp tự nhiên vừa 
                 bảo tồn răng thật tối đa cho bạn.</p>
                    <h6 className='section-matdansu-left-text-h6-chiase'> Chia sẻ </h6>
                      <div className='section-matdansu-left-text-icon'>
                      <span className='section-matdansu-left-text-icon-fa'><FaFacebook /></span>
                      <span className='section-matdansu-left-text-icon-fa'><AiFillTwitterCircle /></span>
                      <span className='section-matdansu-left-text-icon-fa'><BsPinterest /></span>
                      <span className='section-matdansu-left-text-icon-fa'><AiFillGooglePlusCircle /></span>
                      </div>
                     <div className="section-matdansu-left-btn">
                      <button className='section-matdansu-left-text-btn'> <span><BiPhoneCall/></span> 0941828083</button>
                     <button onClick={handleShow} className='section-matdansu-left-text-btn'><span><BsFillJournalBookmarkFill/></span> ĐẶT LỊCH KHÁM</button>
                     <Calendar show={show} handleClose={() => setShow(false)} />
                      <button className='section-matdansu-left-text-btn'><span><BsFillJournalBookmarkFill/></span> NHẬN TƯ VẤN</button>
                     </div>
                     <div className="section-matdansu-left-text-noidung">
                      <h3 className='section-matdansu-left-text-noidumg-h3'>NỘI DUNG LIÊN QUANG </h3>
                      <Col className=' section-rangsu-left-tin-left'   as={Link} to={"/bocsu"} xs={12} md={6}>
                        <img src={imgs20} alt=''className='section-rangsu-left-tin-left-img'/>
                        <h3 className='section-rangsu-left-tin-left-h3'>MẶT DÁN SỨ VENEER</h3>
                        <p className='section-rangsu-left-tin-left-p'>
                          Răng sứ Veneer là mặt dán sứ bọc dùng để bọc bên ngoài bề mặt
                          răng nhằm che lấp các khuyết điểm khi răng bị tổn thương cấu trúc hoặc xỉn...</p>
                        <button className='section-rangsu-left-tin-left-btn' >XEM CHI TIẾT...</button>
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


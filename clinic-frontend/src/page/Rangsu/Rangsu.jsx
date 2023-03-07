import React from 'react'
import './Rangsu.css';
import {Row,Col} from 'react-bootstrap';
import imgs20 from "../../img/imgs20.png"
import imgs21 from "../../img/imgs21.png"
import Footer from '../../layout/Footer'
export default function Rangsu() {
  return (
    <div>
        <div className="header-rangsu">
            <p className='header-rangsu-p'>Trang chủ <span className='header-rangsu-dau' >-</span>Răng Sứ</p>
        </div>
        <Row className='section-rangsu'>
        <Col className='section-rangsu-left' xs={12} md={8}>
         <h2 className='section-rangsu-left-h2'>RĂNG SỨ THẨM MỸ</h2>
         <p className='section-rangsu-left-p'>Tìm được 2 bài viết</p>
            <Row className="section-rangsu-left-tin">
         <Col className=' section-rangsu-left-tin-left' xs={12} md={6}>
            <img src={imgs20} className='section-rangsu-left-tin-left-img'/>
            <h3 className='section-rangsu-left-tin-left-h3'>MẶT DÁN SỨ VENEER</h3>
            <p className='section-rangsu-left-tin-left-p'>
                Răng sứ Veneer là mặt dán sứ bọc dùng để bọc bên ngoài bề mặt
                răng nhằm che lấp các khuyết điểm khi răng bị tổn thương cấu trúc hoặc xỉn...</p>
            <button className='section-rangsu-left-tin-left-btn'>XEM CHI TIẾT...</button>
         </Col>
         <Col className=' section-rangsu-left-tin-left' xs={12} md={6}>
         <img src={imgs21} className='section-rangsu-left-tin-left-img'/>
            <h3 className='section-rangsu-left-tin-left-h3'>BỌC SỨ THẨM MỸ</h3>
            <p className='section-rangsu-left-tin-left-p'>
                Răng sứ Veneer là mặt dán sứ bọc dùng để bọc bên ngoài bề mặt
                răng nhằm che lấp các khuyết điểm khi răng bị tổn thương cấu trúc hoặc xỉn...</p>
            <button className='section-rangsu-left-tin-left-btn'>XEM CHI TIẾT...</button>
         </Col>
         </Row>
        </Col>
        <Col className='section-rangsu-right' xs={6} md={4}>
            <h4 className='section-rangsu-right-h4'>DỊCH VỤ</h4>
         <div className="section-rangsu-right-dichvu">
            <h5 className='section-rangsu-right-dichvu-h5'>NHA KHOA TỔNG QUÁT</h5>
            <h5 className='section-rangsu-right-dichvu-h5'>TRỒNG RĂNG IMPLANT</h5>
            <h5 className='section-rangsu-right-dichvu-h5'>CHỈNH NHA - NIỀNG RĂNG</h5>
            <h5 className='section-rangsu-right-dichvu-h5'>RĂNG SỨ THẪM MỸ</h5>

         </div>
        </Col>
      </Row>

       <Footer/>


    </div>
  )
}

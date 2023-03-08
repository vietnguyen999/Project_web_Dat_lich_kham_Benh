import React from 'react'
import {Row,Col} from 'react-bootstrap';
export default function Bocsu() {
  return (
    <div>
         <div className="header-rangsu">
            <p className='header-rangsu-p'>Trang chủ <span className='header-rangsu-dau' >-</span>Răng Sứ <span className='header-rangsu-dau' >-</span> Bọc sứ</p>
        </div>
        <Row className='section-rangsu'>
        <Col className='section-rangsu-left' xs={12} md={8}>
         <h2 className='section-rangsu-left-h2'>BỌC SỨ THẨM MỸ</h2>
            
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
    </div>
  )
}

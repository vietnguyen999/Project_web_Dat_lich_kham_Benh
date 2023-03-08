import React from 'react'
import {Row,Col} from 'react-bootstrap';
import './List.css';
import imgs33 from "../../img/imgs33.jpg"
import imgs34 from "../../img/imgs34.jpg"
import imgs35 from "../../img/imgs35.jpg"
import imgs37 from "../../img/imgs37.jpg"
export default function List() {
  return (
    <div>
       <div className="header-banggia">
            <p className='header-banggia-p'>Trang chủ <span className='header-banggia-dau' >-</span>Bảng giá</p>
        </div>
        <Row className='section-banggia'>
        <Col className='section-banggia-left' xs={12} md={8}>
         <h5 className='section-banggia-left-h5'>BẢNG GIÁ DỊCH VỤ TẠI VIET NGUYEN</h5>
         <img src={imgs33} alt='' className='section-banggia-left-img'/>
         <img src={imgs34} alt='' className='section-banggia-left-img'/>
         <img src={imgs35} alt='' className='section-banggia-left-img'/>
         <img src={imgs37} alt='' className='section-banggia-left-img'/>
          
        </Col>
        <Col className='section-banggia-right' xs={6} md={4}>
            <h4 className='section-banggia-right-h4'>DỊCH VỤ</h4>
         <div className="section-banggia-right-dichvu">
            <h5 className='section-right-banggia-h5'>BẢNG GIÁ</h5>
           
         </div>
        </Col>
      </Row>

     
    </div>
  )
}


   
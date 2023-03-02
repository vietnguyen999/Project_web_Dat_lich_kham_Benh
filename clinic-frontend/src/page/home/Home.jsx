import React from 'react'
import './Home.css';
import Slider from '../../layout/Slider';
import Footer from '../../layout/Footer'
import imgs1 from "../../img/imgs1.png"
import imgs2 from "../../img/imgs2.png"
import imgs3 from "../../img/imgs3.png"
import imgs4 from "../../img/imgs4.png"

export default function Home() {
  return (
   <div>
    <Slider />
     
        
     <section>
        <div class="container text-center">
  <div class="row">
    <div class="col-md-3">
    <img src={imgs1} alt='...' className='imgs_left_img' />
    <h5 className='about-us'>BÁC SĨ KINH NGHIỆM</h5>
    <p>Đội ngũ y bác sĩ là chuyên gia với nền tảng chuyên môn vững chắc và giàu kinh nghiện và y đức</p>
    </div>
    <div class="col-md-3">
    <img src={imgs2} alt='...' className='imgs_left_img' />
    <h5 className='about-us'>Công Nghệ Hiện Đại </h5>
    <p>Hệ thống trang thiết bị y tế hiện đại</p> bật nhất được nhập khẩu từ các nước Anh, Đức, Hà Lam, pháp 
    </div>
    <div class="col-md-3">
    <img src={imgs3} alt='...' className='imgs_left_img' />
    <h5 className='about-us'>Chi phí hợp lý</h5>
    <p>Chi phí khám và điệu trị, phẩu thuật minh bạch rõ ràng, cùng nhiều ưu đãi hổ trợ hấp dẫn</p>
    </div>
    <div class="col-md-3">
    <img src={imgs4} alt='...' className='imgs_left_img' />
    <h5 className='about-us'>Địa chỉ</h5>
    <p>Quy Nhơn Bình Định</p>
    </div>
  </div>
</div>
        </section>
      

    

    <Footer />
   </div>
    
    
    

  )
}

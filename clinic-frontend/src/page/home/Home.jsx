import React from 'react'
import './Home.css';
import Slider from '../../layout/Slider';
 import Footer from '../../layout/Footer'
import imgs1 from "../../img/imgs1.png"
import imgs2 from "../../img/imgs2.png"
import imgs3 from "../../img/imgs3.png"
import imgs4 from "../../img/imgs4.png"
import imgs5 from "../../img/imgs6.jpg"
import imgs6 from "../../img/logo.png"
import imgs7 from "../../img/imgs7.jpg"
import imgs8 from "../../img/imgs8.jpg"
import imgs9 from "../../img/imgs9.jpg"
import {AiOutlineCalendar} from 'react-icons/ai'
import imgs10 from "../../img/imgs11.png"
import imgs11 from "../../img/imgs12.png"
import imgs12 from "../../img/imgs13.png"
import imgs13 from "../../img/imgs14.png"
import imgs14 from "../../img/imgs15.png"

export default function Home() {
  return (
   <div>
    <Slider />
     
        
     <section>
        <div class="container text-center">
  <div class="row">
    <div class="col-md-3">
    <img src={imgs1} alt='...' className='imgs_left_img' />

    <div className="text-section">
   <h4 className='text-section-h4'>BÁC SĨ KINH NGIỆN</h4>
   <p className='text-section-p'>Đội ngũ bác sĩ là chuyên gia với nền tảng chuyên môn vững chắc, giàu kinh nghiện và y đức</p>
   </div>


    </div>
    <div class="col-md-3">
    <img src={imgs2} alt='...' className='imgs_left_img' />
    
    <div className="text-section">
   <h4 className='text-section-h4'>CÔNG NGHỆ HIỆN ĐẠI</h4>
   <p className='text-section-p'>Hệ thóng trang thiết bị hiện đại bậc nhất được nhập khẩu từ các nước Hà lan,Anh, Đức, Mỹ</p>
   </div>
    
    </div>
    <div class="col-md-3">
    <img src={imgs3} alt='...' className='imgs_left_img' />
   
    <div className="text-section">
   <h4 className='text-section-h4'>CHI PHÍ HỢP LÝ</h4>
   <p className='text-section-p'>Chi phí khám và điều trị, phẫu thuật minh bạch, rõ ràng cùng nhiêu ưu đại hổ trợ hấp dẫn</p>
   </div>

    </div>
    <div class="col-md-3">
    <img src={imgs4} alt='...' className='imgs_left_img' />
   
    <div className="text-section">
   <h4 className='text-section-h4'>ĐẠI CHỈ</h4>
   <p className='text-section-p'>QUY NHƠN, BINH ĐỊNH</p>
   </div>


    </div>
  </div>
</div>
        </section>
      <section>
       <div className='row part-news'>
          <div className="col part-news-imgs">
          <img src={imgs5} alt='...' className='part-news-imgs-1' />
          </div>
          <div className="col part-news-text">
          <img src={imgs6} alt='...' className='part-news-text-img' />
          <h4 className='part-news-text-h4'>NHA KHOA </h4>
                <p className='part-news-text-p'>NHA KHOA với SỨ MỆNH: “Kiến tạo hệ sinh thái Nha Khoa cực kỳ đơn giản. 
                  Phụng sự con người nhanh nhất trên mọi miền đất nước”</p>
                  <p className='part-news-text-p'>Với 3 trụ cột là Chính trực – Kỷ luật – Sáng tạo</p>
                  <p className='part-news-text-p'>TẦM NHÌN Nha khoa  đến năm 2025: “Là chuỗi phòng nha khoa dẫn đầu Buôn Ma Thuột bởi sự
                     phục vụ tận tâm, chuyên môn giỏi và thẩm mỹ cao. Bằng việc vận hành cực kỳ đơn giản với 
                     tinh thần phụng sự khách hàng”</p>
                  <p className='part-news-text-p'>Và để thực hiện tầm nhìn đến năm 2025, con người Nha 
                      giá trị cốt lõi: Tận tâm, trung thực , kỷ luật, máu lửa, học hỏi </p>  
          </div>
       </div>
     
      </section>
      <div className="part-service">
          <h3 className='part-servie-h1'>Dịch Vụ Nổi Bật</h3>
        <div className="row part-service-section">
          <div className="col ">
            <div className="part-service-left">
             <img src={imgs7} alt='...' className=' part-service-left-imgs'/>
             <p className=' part-service-left-text-p'>Răng Sứ Thẩm Mỹ</p>
             <button className=' part-service-left-btn'>xem thêm</button>
          </div>
          </div>
          <div className="col ">
          <div className="part-service-left">
          <img src={imgs8} alt='...' className=' part-service-left-imgs'/>
          <p className=' part-service-left-text-p'>Chỉnh sữa - Niềng Răng</p>
          <button className='part-service-left-btn'>xem thêm</button>
          </div>
          </div>
          <div className="col ">
           <div className="part-service-left">
          <img src={imgs9} alt='...' className=' part-service-left-imgs'/>
          <p className=' part-service-left-text-p'>Trồng Răng IPMLANT</p>
          <button className=' part-service-left-btn'>xem thêm</button>
          </div>
          </div>
        </div>
      </div>

          <div className="row section-datlich">
            <div className="col">
              <div className="section-datlich-left">
                <h2 className="section-datlich-left-h2">Tư vấn khám chữa bệnh chuẩn xác, hiệu quả.</h2>
                <p className="section-datlich-left-p" >Đội ngũ y bác sĩ đầu ngành và giàu kinh nghiệm mang đến cho bạn những lời khuyên chuẩn xác và phù hợp nhất với tình trạng mỗi cá nhân</p>
                <button  className="section-datlich-left-btn"><span className='section-datlich-left-btn-icon'><AiOutlineCalendar/></span>Đặt lịch</button>
                <button  className=" section-datlich-left-btn section-datlich-right-btn ">Tư vấn</button>
              </div>
            </div>
            <div className="col">
              <div className="section-datlich-right">
                 <img src={imgs9} alt='...' className='section-datlich-right-img'/>
                 <h1 className='section-datlich-right-h1'>Nha khoa </h1>
              </div>
            </div>
          </div>
          

          <div className="section-information">
                    <div className="row section-information-row">
                      <div className="col section-information-col">
                           <img src={imgs10} alt='...' className='section-information-col-imgs'/>
                           <h3 className='section-information-col-h3'>2</h3> 
                      </div>
                      <div className="col section-information-col">
                            <img src={imgs11} alt='...' className='section-information-col-imgs'/>
                            <h3  className='section-information-col-h3'>20+</h3> 
                      </div>
                      <div className="col section-information-col">
                            <img src={imgs12} alt='...' className='section-information-col-imgs'/>
                           <h3  className='section-information-col-h3'>6+</h3> 
                       </div>
                       <div className="col section-information-col">
                            <img src={imgs13} alt='...' className='section-information-col-imgs'/>
                            <h3  className='section-information-col-h3'>60.000+</h3> 
                      </div>
                      <div className="col section-information-col">
                          <img src={imgs14} alt='...' className='section-information-col-imgs'/>
                          <h3>60.000+</h3> 
                      </div>
                    </div>
                  </div>
  
            <Footer />

          </div>  
  
    
    
    

  );
}

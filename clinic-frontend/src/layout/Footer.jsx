<<<<<<< HEAD
import React from 'react'
import './Footer.css'
import { FaFacebook } from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {SiZalo} from 'react-icons/si'

export default function Footer() {
  return (
   <section className='section footer'>
    <div class="container text-center">
  <div class="row">
    <div class="col-md-4 section-footer-cool-left">
    <h4 className='section-footer-cool-left-h4'>THÔNG TIN LIÊN HỆ</h4>
        <p className='section-footer-cool-left-p'>NHA KHOA TRỒNG RĂNG</p>
        <p className='section-footer-cool-left-p'>Trụ sở chính</p>
        <p className='section-footer-cool-left-p'> Điện thoại:</p>
    </div>
    <div class="col-md-4 section-footer-cool-center">
    <h4 className='section-footer-cool-center-h4'>THỜI GIAN LÀM VIỆC</h4>
    <p className='section-footer-cool-center-p'> Thứ 2-7: 8:00 – 20:00</p>
    <p className='section-footer-cool-center-p'>Chủ nhật: 8:00 – 17:00</p>
    <p className='section-footer-cool-center-p'>Không nghỉ trưa</p>
    <a href='#er'><span className='section-footer-cool-center-icon'><FaFacebook /></span></a>
    <a href='#rf'><span className='section-footer-cool-center-icon'><BsInstagram/> </span></a>
    <a href='#ew'><samp className='section-footer-cool-center-icon'><SiZalo/></samp></a>
    </div>
    <div class="col-md-4 section-footer-cool-right">
    <h4 className='section-footer-cool-right-h4'>CÁC CHÍNH SÁCH – HỖ TRỢ</h4>
    <p className='section-footer-cool-right-p'> Chính sách bảo mật</p>
    <p className='section-footer-cool-right-p'> Chính sách thanh toán</p>
    <p className='section-footer-cool-right-p'>Chính sách bảo hành</p>
    <p className='section-footer-cool-right-p'> Chính sách góp ý – khiếu nại</p>
    <p className='section-footer-cool-right-p'>Trồng răng trả góp</p>
    <p className='section-footer-cool-right-p'> Niềng răng trả góp</p>
    </div>
  </div>
</div>
</section>
  )
}
=======
import React from 'react'
import './Footer.css'
import { FaFacebook } from 'react-icons/fa';
import {BsInstagram} from 'react-icons/bs';
import {SiZalo} from 'react-icons/si'

export default function Footer() {
  return (
   <section className='section footer bg-dark text-white'>
    <div class="container text-center">
  <div class="row">
    <div class="col-md-4">
    <h4>THÔNG TIN LIÊN HỆ</h4>
    <div className="footer-left">
        <p>NHA KHOA TRỒNG RĂNG</p>
        <p>Trụ sở chính</p>
        <p> Điện thoại:</p>
    </div>
    </div>
    <div class="col-md-4">
    <h4>THỜI GIAN LÀM VIỆC</h4>
    <p> Thứ 2-7: 8:00 – 20:00</p>
    <p>Chủ nhật: 8:00 – 17:00</p>
    <p>Không nghỉ trưa</p>
    <span><FaFacebook /></span>
    <span><BsInstagram/> </span>
    <samp><SiZalo/></samp>
    </div>
    <div class="col-md-4">
    <h4>CÁC CHÍNH SÁCH – HỖ TRỢ</h4>
    <p> Chính sách bảo mật</p>
    <p> Chính sách thanh toán</p>
    <p>Chính sách bảo hành</p>
    <p> Chính sách góp ý – khiếu nại</p>
    <p>Trồng răng trả góp</p>
    <p> Niềng răng trả góp</p>
    </div>
  </div>
</div>
</section>
  )
}
>>>>>>> 1d80b1d158c950c9b53ea5469b6a541ff3b8c4f4

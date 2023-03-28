import React from "react";
import "./Footer.css";
import { FaFacebook } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiZalo } from "react-icons/si";

export default function Footer() {
  return (
    <div className="footer">
      <div className="container-footer">
        <div className="footer-row">
          <div className="footer-col">
            <h4 className="footer-col-h">THÔNG TIN LIÊN HỆ</h4>
            <ul className="footer-col-ul">
              <li className="footer-col-li">NHA KHOA VIET NGUYEN</li>
              <li className="footer-col-li">TRỤ SỞ CHÍNH</li>
              <li className="footer-col-li">ĐIỆN THOẠI</li>
              <li className="footer-col-li">OUR serviser </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-h"> THỜI GIAN LÀM VIỆC</h4>
            <ul className="footer-col-ul">
              <li className="footer-col-li"> Thứ 2-7: 8:00 – 20:00</li>
              <li className="footer-col-li">  Chủ nhật: 8:00 – 17:00</li>
              <li className="footer-col-li"><FaFacebook /></li>
              <li className="footer-col-li">  <BsInstagram /> </li>
              <li className="footer-col-li">   <SiZalo /> </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-h"> CÁC CHÍNH SÁCH – HỖ TRỢ</h4>
            <ul className="footer-col-ul">
              <li className="footer-col-li"> Chính sách thanh toán</li>
              <li className="footer-col-li"> Chính sách góp ý – khiếu nại</li>
              <li className="footer-col-li">Trồng răng trả góp</li>
              <li className="footer-col-li">Niềng răng trả góp </li>
            </ul>
          </div>
          <div className="footer-col">
            <h4 className="footer-col-h">VỂ CHÚNG TÔI</h4>
            <ul className="footer-col-ul">
              <li className="footer-col-li">UY TÍN-CHẤT LƯỢNG HÀNG ĐẦU</li>
              <li className="footer-col-li">NHIỀU ƯU ĐẢI HẤP DẪN</li>
              <li className="footer-col-li">BÁC SĨ TẬN TÌNH</li>
              <li className="footer-col-li">NHÂN VIÊN TƯ VẤN 24/7 </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    
  );
}

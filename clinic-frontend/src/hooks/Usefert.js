import React from "react";
import { useState } from "react";
import "../../src/page/about/About.css";
function Usefert() {
  const [teaxt, setteaxt] = useState(false);
  const dilay = () => {
    setteaxt(!teaxt);
  };

  return (
    <div>
      <div className="wrapper">
        <div className="accordion">
          <div className="item">
            <div className="tile" onClick={dilay}>
              <h1>Tiêu Đề</h1>
              <span>+</span>
            </div>
            {console.log(teaxt)}
            <div className={teaxt === false ? "content" : " show"}>
              Bác sĩ y khoa còn gọi là Thầy thuốc là người duy trì, phục hồi sức
              khỏe con người bằng cách nghiên cứu, chẩn đoán và chữa trị bệnh
              tật và thương tật dựa trên kiến thức về cơ thể con người. Thầy
              thuốc có thể là bác sĩ đa khoa hay bác sĩ chuyên khoa,
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Usefert;

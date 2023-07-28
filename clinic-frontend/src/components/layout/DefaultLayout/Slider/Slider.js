import React from 'react';
import img1 from '../../../../img/imgs16.jpg'
import img2 from "../../../../img/imgs18.png"
import img3 from '../../../../img/imgs19.jpg'
import "./slider.css"
import { Carousel} from 'react-bootstrap';

function Slider() {
  return (
    <div className='carouself'>
     
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="First slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
    </div>
  )
}

export default Slider;
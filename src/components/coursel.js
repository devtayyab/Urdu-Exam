import React from "react";
import { Carousel } from "react-responsive-carousel";
import img from "../images/allam.jpeg";
import img1 from "../images/first.jpg";
import img2 from "../images/23.jpg";
import img3 from "../images/24.jpg";
export const Slider = () => (
  <Carousel
    autoPlay
    dynamicHeight="100px"
    infiniteLoop
    interval={2000}
    showThumbs={false}
    useKeyboardArrows
    showStatus= {false}
  >
    <div>
      <img alt="" src={img} height={250} />
   <h4>Name</h4>
    </div>
    <div>
      <img alt="" src={img} height={250} />
    </div>
    <div>
      <img alt="" src={img} height={250} />
    </div>
    <div>
      <img alt="" src={img} height={250} />
    </div>
    <div>
      <img alt="" src={img} height={250} />
    </div>
    <div>
      <img alt="" src={img} height={250} />
    </div>
    <div>
      <img alt="" src={img} height={250} />
    </div>
    <div>
      <img alt="" src={img1} height={250} />
    </div>
    <div>
      <img alt="" src={img2} height={250} />
    </div>
    <div>
      <img alt="" src={img3}  height={250}/>
    </div>
  </Carousel>
);

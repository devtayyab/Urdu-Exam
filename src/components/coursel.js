import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import img from "../images/allam.jpeg";
import img1 from "../images/first.jpg";
import img2 from "../images/23.jpg";
import img3 from "../images/24.jpg";
import { useDispatch, useSelector } from "react-redux";
import { Slideget } from "../store/action/blog";
export const Slider = () => {
  const dispatch = useDispatch();
  const state = useSelector((state) => state.slide);
  console.log("slide", state);
  useEffect(() => {
    dispatch(Slideget());
  }, [dispatch]);
  return (
    <Carousel
      autoPlay
      dynamicHeight="100px"
      infiniteLoop
      interval={2000}
      showThumbs={false}
      useKeyboardArrows
      showStatus={false}
    >
      {state.map((e, i) => (
        <div>
          <img alt="" src={`https://urduadmin.herokuapp.com/slider/${e.imagefile}`} height={250} />
          
        </div>
      ))}
    </Carousel>
  );
};

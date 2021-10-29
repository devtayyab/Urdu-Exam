import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { getStorage, ref, getDownloadURL } from "firebase/storage";
import { useDispatch, useSelector } from "react-redux";
import { Slideget } from "../store/action/blog";
import { storages } from "../config/config";
export const Slider = () => {
  getDownloadURL(ref(storages, "slides/IMG-20210807-WA0002.jpg")).then((url) =>
    console.log("url", url)
  );
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
        <div key={i}>
          <img alt="" src={e.imagefile} height={250} />
        </div>
      ))}
    </Carousel>
  );
};

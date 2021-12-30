import React from "react";
import { Slider } from "../components/coursel";
import Navbar from "../components/navbar";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Offline, Online } from "react-detect-offline";
import { Poetslider } from "../components/poetSlider";
import Griditem from "../components/grid";
import Poet from "../components/poet";
import { Biography } from "./biography";
import SimpleBottomNavigation from "../components/tabbar";
import SimplePaper from "../components/lafz";
export default function Home() {
  var time = new Date();
  var hourr = time.getHours();
  return (
    <div
      style={{
        maxWidth: "100%",
      }}
    >
      <Navbar></Navbar>
      <Slider></Slider>
      <Poetslider></Poetslider>
      <Poet></Poet>
      <SimplePaper></SimplePaper>
      <Griditem></Griditem>
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </div>
  );
}

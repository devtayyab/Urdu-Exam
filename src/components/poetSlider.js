import { Share } from "@material-ui/icons";
import Favorite from "@material-ui/icons/Favorite";
import React, { useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import { Button } from "@material-ui/core";
import Roll from 'react-reveal/Roll';
import { useDispatch , useSelector} from "react-redux";
import { Shairget } from "../store/action/blog";
export const Poetslider = () => {
const dispatch = useDispatch()
useEffect(()=>{

  dispatch(Shairget())
}, [dispatch])
const shair = useSelector(state => state?.shair)
var selectedshair = shair.slice(Math.max(0, shair.length-10))
return(
 <div>
    <p
  style={{
    fontFamily :'Noto Nastaliq Urdu',
   fontSize: "1.6em",
   direction: "rtl",
   textAlign: 'center',
   color:"#3b5998"
  }}
  >آج کے اشعار</p>
 
  <Carousel
    autoPlay
    dynamicHeight
    infiniteLoop
    interval={3000}
    showThumbs={false}
    useKeyboardArrows
    showIndicators={false}
    showArrows={false}
    showStatus= {false}
  >
    

 {selectedshair.map((e,i)=><>
  <Roll left>
    <div>
  <p
        style={{
          display: "flex",
          height: "100px",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "5px",
          // paddingTop: "5%",
          color: "#333",
          fontFamily :'Noto Nastaliq Urdu',
          fontSize: "1.2em",
          direction: "rtl",
        }}
      >
        {e?.pehla}
        <br />
        {e?.dosra}
      </p>
      <p>{e?.shiar}</p>
      <p>
        <Button>
          <Favorite
            style={{
              margin: "10px",
            }}
          ></Favorite>
        </Button>
        <Button>
          <Share
            style={{
              margin: "10px",
            }}
          ></Share>
        </Button>
      </p>
      </div>
    </Roll>
  </>)}
  </Carousel>
  </div>
)
          }
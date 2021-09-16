import { Share } from "@material-ui/icons";
import Favorite from "@material-ui/icons/Favorite";
import React from "react";
import { Carousel } from "react-responsive-carousel";
import { Button } from "@material-ui/core";
import Roll from 'react-reveal/Roll';
export const Poetslider = () => (
  <Carousel
    autoPlay
    dynamicHeight
    infiniteLoop
    interval={3000}
    showThumbs={false}
    useKeyboardArrows
    showIndicators={false}
    showArrows={false}
  >
    
<Roll left>
    <div>
      <p
        style={{
          display: "flex",
          height: "100px",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "5px",
          paddingTop: "10%",
          color: "#333",
          fontFamily: "Noto Naskh Arabic",
          fontSize: "1.2em",
          direction: "rtl",
        }}
      >
        محبتیں تو فقط انتہائیں مانگتی ہیں
        <br />
        محبتوں میں بھلا اعتدال کیا کرنا
      </p>
      <p>مضطر خیرآبادی</p>
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
    <div>
      <p
        style={{
          display: "flex",
          height: "100px",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "10px",
          paddingTop: "10%",
          color: "#333",
          fontFamily: "Noto Naskh Arabic",
          fontSize: "1.2em",
          direction: "rtl",
        }}
      >
        قربتیں لاکھ خوبصورت ہوں
        <br />
        دوریوں میں بھی دل کشی ہے ابھی
      </p>
      <p>مضطر خیرآبادی</p>
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
    <div>
      <p
        style={{
          display: "flex",
          height: "100px",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "10px",
          paddingTop: "10%",
          color: "#333",
          fontFamily: "Noto Naskh Arabic",
          fontSize: "1.2em",
          direction: "rtl",
        }}
      >
        عمر سب ذوق تماشا میں گزاری لیکن
        <br />
        آج تک یہ نہ کھلا کس کے طلب گار ہیں ہم{" "}
      </p>
      <p>مضطر خیرآبادی</p>
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
    <div>
      <p
        style={{
          display: "flex",
          height: "100px",
          textAlign: "center",
          justifyContent: "center",
          marginTop: "10px",
          paddingTop: "10%",
          color: "#333",
          fontFamily: "Noto Naskh Arabic",
          fontSize: "1.2em",
          direction: "rtl",
        }}
      >
        راہ الفت میں ملاقات ہوئی کس کس سے
        <br />
        دشت میں قیس ملا کوہ میں فرہاد مجھے{" "}
      </p>
      <p>مضطر خیرآبادی</p>
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
  </Carousel>
);

import React from "react";

export default function Gazal() {
  const gazzal =
    "کبھی جھوٹے سہارے غم میں راس آیا نہیں کرتے , یہ بادل اڑ کے آتے ہیں مگر سایا نہیں کرتے , یہی کانٹے تو کچھ خوددار ہیں صحن گلستاں میں, کہ شبنم کے لیے دامن تو پھیلایا نہیں کرتے , وہ لے لیں گوشۂ دامن میں اپنے یا فلک چن لے , مری آنکھوں میں آنسو بار بار آیا نہیں کرتے , سلیقہ جن کو ہوتا ہے غم دوراں میں جینے کا , وہ یوں شیشے کو ہر پتھر سے ٹکرایا نہیں کرتے, جو قیمت جانتے ہیں گرد راہ زندگانی کی , وہ ٹھکرائی ہوئی دنیا کو ٹھکرایا نہیں کرتے, قدم مے خانہ میں رکھنا بھی, کار پختہ کاراں ہے, جو پیمانہ ,اٹھاتے ہیں وہ تھرایا نہیں کرتے ";
  var res = gazzal.replaceAll(",", "\n");
  return (
    <div
      style={{
        marginTop: "10%",
      }}
    >
      <pre
        style={{
          textAlign: "center",
          padding: "2px",
          margin: "4px",
          marginTop: "8px",
          color: "grey",
          lineHeight: 4.6,
          fontFamily: "Noto Nastaliq Urdu",
        }}
      >
        {res}
      </pre>
    </div>
  );
}

import React from "react";
import { useLocation, Redirect } from "react-router-dom";
export default function Gazal() {
  const location = useLocation();

  const gazzal = location?.query?.gazzal;
  var res = gazzal.replaceAll(",", "\n");
  return (
    <>
      {location.query == undefined ? (
        <Redirect
          to={{
            pathname: "/",
          }}
        ></Redirect>
      ) : (
        <div
          style={{
            marginTop: "10%",
            textDecoration: "none",
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
              textDecoration: "none",
            }}
          >
            {res}
          </pre>
        </div>
      )}
    </>
  );
}

import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { useLocation, Redirect } from "react-router-dom";
const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

export default function Nazm() {
  const location = useLocation();
  const nazm = location?.query?.nazm;
  var res = nazm.replaceAll(",", "\n");
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
              textDecoration: "none"
            }}
          >
            {res}
          </pre>
        </div>
      )}
    </>
  );
}

import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { Paper } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";

export default function SimplePaper() {
  const state = useSelector((state) => state?.lafz);
  var lafnnumber = state.length-1;


  return (
    <>
      <p
        style={{
          fontFamily: "Noto Nastaliq Urdu",
          fontSize: "1.6em",
          direction: "rtl",
          textAlign: "center",
          color: "#3b5998",
        }}
      >
        آج کا لفظ
      </p>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
          "& > :not(style)": {
            m: 1,
            width: "80%",
            height: 180,
          },
        }}
      >
        <Paper elevation={3}>
          <h4 style={{  fontFamily: "Noto Nastaliq Urdu"}}>{state[lafnnumber]?.lafz}</h4>
          <pre  stle={{  fontFamily: "Noto Nastaliq Urdu",}}>{state[lafnnumber]?.hijay}</pre>
          <h6  style={{  fontFamily: "Noto Nastaliq Urdu",}}>{state[lafnnumber]?.meaning}</h6>
        </Paper>
      </Box>
    </>
  );
}

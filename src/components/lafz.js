import React, { useEffect } from "react";
import { Box } from "@material-ui/core";
import { Paper } from "@material-ui/core";

import { useSelector, useDispatch } from "react-redux";

export default function SimplePaper() {
  const state = useSelector((state) => state?.lafz.reverse());
  console.log("lafz", state);

  return (
    <>
      <p
        style={{
          fontFamily: 'Noto Nastaliq Urdu',
          fontSize: "1.6em",
          direction: "rtl",
          textAlign: 'center',
          color:"#3b5998"
        }}
      >آج کا لفظ</p>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          textAlign: "center",
          "& > :not(style)": {
            m: 1,
            width: "80%",
            height: 140,
          },
        }}
      >
        <Paper elevation={3}>
          <h4>{state[0]?.lafz}</h4>
          <pre>{state[0]?.hijay}</pre>
          <h6>{state[0]?.meaning}</h6>
        </Paper>
      </Box>
    </>
  );
}

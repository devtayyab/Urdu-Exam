import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

export default function Gazzal() {
  const gazzalls = [1, 2, 3, 4, , 6, 7];
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {gazzalls.map((v, i) => (
        <div>
          <ListItem button>
            <ListItemText primary={v} />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List> 
  );
}

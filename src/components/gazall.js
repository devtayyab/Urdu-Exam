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

export default function Gazzal(gazal) {
 
  const gazzalls = gazal.gazzal;
  console.log(gazzalls);
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {gazzalls.map((v, i) => (
        <div>
          <ListItem button>
            <ListItemText primary={v?.gazzal > 50 ? v.gazzal.slice(0, 50) : v?.gazzal} />
          </ListItem> 
      <Divider />
        </div>
       ))}
    </List>
  );
}

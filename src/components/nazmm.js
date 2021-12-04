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

export default function Nazamm(nazm) {
  const nazzms = nazm?.nazm;
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {nazzms.map((v, i) => (
        <div>
          <ListItem button>
            <ListItemText primary={v?.nazm > 50 ? v.nazm.slice(0, 50) : v.nazm} />
          </ListItem>
          <Divider />
        </div>
      ))}
    </List>
  );
}

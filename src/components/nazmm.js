import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";
import { Link } from "react-router-dom";
const style = {
  width: "100%",
  maxWidth: 360,
  bgcolor: "background.paper",
};

export default function Nazamm(nazm) {
  const nazzms = nazm?.nazm;
  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {nazzms?.map((v, i) => (
        <div>
          <Link
            style={{
              textDecoration: "none",
              color: "gray",
            }}
            to={{
              pathname: `/nazm/${v?.id}`,
              query: {
                nazm: v.nazm,
              },
            }}
          >
            <ListItem button>
              <ListItemText
                // primary={v?.nazm > 50 ? v.nazm.slice(0, 50) : v.nazm}
                style={{ textDecoration: "none" }}
              />
              <p> {v?.nazm.slice(0, 35) } </p>
            </ListItem>
            <Divider />
          </Link>
        </div>
      ))}
    </List>
  );
}

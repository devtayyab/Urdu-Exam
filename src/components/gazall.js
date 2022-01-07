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

export default function Gazzal(gazal) {
  const gazzalls = gazal.gazzal;

  return (
    <List sx={style} component="nav" aria-label="mailbox folders">
      {gazzalls?.map((v, i) => (
        <div>
          <Link
            to={{
              pathname: `/gazzal/${v?.id}`,
              query: {
                gazzal: v.gazzal,
              },
            }}
            style={{
              textDecoration: "none",
              color: "gray"
            }}
          >
            <ListItem button>
                  {/* {location.query.detail.slice(0, 35) +
                (location.query?.detail.length > 35 ? "..." : "")} */}
              <ListItemText

                // primary={v?.gazzal > 50 ? v.gazzal.slice(0, 50) : v?.gazzal}
                style={{  textDecoration: "none"}}
              >
                <p>  {v?.gazzal.slice(0, 35) }
               </p>
              </ListItemText>
            </ListItem>
            <Divider />
          </Link>
        </div>
      ))}
    </List>
  );
}

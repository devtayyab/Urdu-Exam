import * as React  from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  Avatar,
  Typography,
  ListItemAvatar,
Button
} from "@material-ui/core";
import { useDispatch, useSelector } from "react-redux";
import { Blogget } from "../store/action/blog";
import Navbar from "../components/navbar";
import SimpleBottomNavigation from "../components/tabbar";

export default function PoetList() {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(Blogget());
  }, [dispatch]);
  const state = useSelector((state) => state.blog);
  return (
    <div>
    <List sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}>
      <Navbar />
      {state.map((e)=><>
       <ListItem alignItems="flex-start">
        <Button>
        <ListItemAvatar>
          <Avatar src={`https://urduadmin.herokuapp.com/${e.imagefile}`} />
        </ListItemAvatar>
        <ListItemText
          primary={e.title}
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: "inline" }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                {e.subtitle}
              </Typography>
              {"----"}
              {e.detail}
            </React.Fragment>
          }
        />
        </Button>
      </ListItem>
      <Divider variant="inset" component="li" />
      </>
      )}
    </List>
    <SimpleBottomNavigation></SimpleBottomNavigation>
    </div>
  );
}

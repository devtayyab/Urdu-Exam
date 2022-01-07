import * as React from "react";
import {
  List,
  ListItem,
  Divider,
  ListItemText,
  Avatar,
  Typography,
  ListItemAvatar,
  Button,
} from "@material-ui/core";
import { Link } from "react-router-dom";
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
        {state.map((e) => (
          <>
        
            <ListItem alignItems="flex-start">
              <Button>
                <ListItemAvatar>
                  <Avatar src={e.imagefile} />
                </ListItemAvatar>
                <Link
                  to={{
                    pathname: `/biography/${e.blogs._id}`,
                    query: {
                      title: e.blogs.title,
                      dob: e.blogs.dob,
                      detail: e.blogs.detail,
                      subtitle: e.blogs.title,
                      imagefile: e.imagefile,
                      gazzal: e.gazzal,
                      nazm: e.nazm,
                    },
                  }}
                >
                  <ListItemText
                    primary={e.blogs.title}
                    secondary={
                      <React.Fragment>
                        <Typography
                          sx={{ display: "inline" }}
                          component="span"
                          variant="body2"
                          color="text.primary"
                        >
                          {e.blogs.subtitle}
                        </Typography>
                        {"----"}
                        {e.blogs.detail.slice(0, 50) +
                          (e.blogs.detail.length > 50 ? "..." : "")}
                      </React.Fragment>
                    }
                  />
                </Link>
              </Button>
            </ListItem>
            <Divider variant="inset" component="li" />
          </>
        ))}
      </List>
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </div>
  );
}

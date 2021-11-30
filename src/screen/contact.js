import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";

import { Button } from "@material-ui/core";

import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import * as React from "react";
import Box from "@mui/material/Box";

import TextField from "@mui/material/TextField";
import FacebookRoundedIcon from "@material-ui/icons/Facebook";
import MailOutlineIcon from "@material-ui/icons/MailOutline";
import YouTubeIcon from '@material-ui/icons/YouTube';
import SimpleBottomNavigation from "../components/tabbar";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
  },
  paper: {
    padding: theme.spacing(1),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function ContactUs() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <h1 style={{
        fontFamily: 'serif',
        textAlign: 'center'
      }}>Contact Us</h1>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={5} style={{
          margin: 30
        }}>
          <Slide right>
            <form aria-controls>
              <Box
                component="form"
                sx={{
                  "& > :not(style)": { m: 1, width: "25ch" },
                }}
                noValidate
                autoComplete="off"
              >

                <TextField id="standard-basic" label="Name" variant="standard" />
                <TextField id="standard-basic" label="phone" variant="standard" />
                <TextField id="standard-basic" label="Subject" variant="standard" />
              </Box>
              <TextField
                id="standard-multiline-static"
                label="Message"
                multiline
                rows={4}
                defaultValue="write message"
                variant="standard"
              />
              <br />
              <Button variant="outlined">Submit</Button>
            </form>
          </Slide>
        </Grid>

        <Grid item xs={12} sm={5} style={{marginTop: "15px"}}>
          <Slide left>
            <Paper
              className={classes.paper}
              style={
                {
                  // background: 'linear-gradient(to top, black 0%, lightgray 100%)'
                }
              }
            >
              <Bounce bottom>
                <p
                  style={
                    {
                      // color: "white",
                    }
                  }
                >
                  you can contact with us:
                </p>
                <p>+92 302 2605093</p>
                <p>onlineurduexam@gmail.com</p>
              </Bounce>
              <div>
                <a href="https://www.facebook.com/urduexamonline/?ref=pages_you_manage">
                  <FacebookRoundedIcon ></FacebookRoundedIcon></a>
                  <a href="https://www.youtube.com/channel/UCdJhd4WukYjF97ChHlL9dgQ">
                  <YouTubeIcon color="action"></YouTubeIcon></a>
                <a href="mailto: onlineurduexam@gmail.com">
                  <MailOutlineIcon color="action"></MailOutlineIcon></a>
              </div>
            </Paper>
          </Slide>
        </Grid>
      </Grid>
      <SimpleBottomNavigation></SimpleBottomNavigation>
    </div>
  );
}

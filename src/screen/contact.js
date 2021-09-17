import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import img from "../images/rait.jpg";
import { Button } from "@material-ui/core";
import img1 from "../images/first.jpg";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
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
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <Slide right>
            <Box
              component="form"
              sx={{
                "& > :not(style)": { m: 1, width: "25ch" },
              }}
              noValidate
              autoComplete="off"
            >
              <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
              />
               <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
              />
               <TextField
                id="standard-basic"
                label="Name"
                variant="standard"
              />
            </Box>
            <TextField
          id="standard-multiline-static"
          label="Multiline"
          multiline
          rows={4}
          defaultValue="Default Value"
          variant="standard"
        />
          </Slide>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Slide left>
            <Paper
              className={classes.paper}
              style={{
                background: 'linear-gradient(to top, #fff000 0%, #000fff 100%)'
              }}
            >
              <Bounce bottom>
                <p
                  style={{
                    color: "white",
                  }}
                >
                  A collection of interesting questions related to Urdu poetry,
                  prose and literary history. Play Urdu Quiz and check your
                  knowledge about Urdu!
                </p>
              </Bounce>
              <Button variant="contained" color="#333">
                Online Class
              </Button>
            </Paper>
          </Slide>
        </Grid>
      </Grid>
    </div>
  );
}

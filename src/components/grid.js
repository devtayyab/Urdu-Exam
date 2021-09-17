import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import img from "../images/rait.jpg";
import { Button } from "@material-ui/core";
import img1 from '../images/first.jpg'
import Slide from 'react-reveal/Slide';
import Bounce from 'react-reveal/Bounce';
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

export default function Griditem() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container spacing={3}>

        <Grid item xs={12} sm={6}>
        <Slide right>
          <Paper className={classes.paper}
           style={{
            backgroundImage: `url(${img1})`,
            backgroundRepeat:'no-repeat',
            backgroundSize: 'cover'
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
            <Button variant="contained" color='#333'>
              QUIZ
            </Button>
          </Paper>
          </Slide>
        </Grid>
        
        
        <Grid item xs={12} sm={6}>
        <Slide left>
          <Paper
            className={classes.paper}
            style={{
              backgroundImage: `url(${img})`,
              backgroundRepeat:'no-repeat',
              backgroundSize: 'cover'
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
            <Button variant="contained" color='#333'>
              Online Class
            </Button>
          </Paper>
          </Slide>
        </Grid>
        
      </Grid>
    </div>
  );
}

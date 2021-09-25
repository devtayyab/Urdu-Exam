import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import img from "../images/rait.jpg";
import { Button } from "@material-ui/core";
import img1 from "../images/first.jpg";
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";
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
            <Paper
              className={classes.paper}
              style={{
                backgroundImage: `url(${img1})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Bounce bottom>
                <p
                  style={{
                    color: "white",
                    fontFamily: "Noto Naskh Arabic",
                    fontSize: "1.2em",
                    direction: "rtl",
                  }}
                >
              سابقہ اردو اور معلوماتی سوالات
                </p>
              </Bounce>
              <Link to="/quiz">
                <Button color="inherit">
                  <p
                    style={{
                      color: "white",
                      fontStyle: "italic",
                      fontSize: 20,
                      fontFamily: "serif",
                    }}
                  >
                    Start Quiz
                  </p>
                </Button>
              </Link>
            </Paper>
          </Slide>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Slide left>
            <Paper
              className={classes.paper}
              style={{
                backgroundImage: `url(${img})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <Bounce bottom>
                <p
                  style={{
                    color: "white",
                    fontFamily: "Noto Naskh Arabic",
                    fontSize: "1.2em",
                    direction: "rtl",
                  }}
                >
                  کیا آپ تیار ہیں؟
                </p>
              </Bounce>
              <Link to="/class">
                <Button color="inherit">
                  <p
                    style={{
                      color: "white",
                      fontStyle: "italic",
                      fontSize: 20,
                      fontFamily: "serif",
                    }}
                  >
                    Online Class
                  </p>
                </Button>
              </Link>
            </Paper>
          </Slide>
        </Grid>
      </Grid>
    </div>
  );
}

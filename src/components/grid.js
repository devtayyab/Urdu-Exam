import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import { Button } from "@material-ui/core";
import img1 from "../images/first.jpg";
import rait from "../images/rait.jpeg"
import Slide from "react-reveal/Slide";
import Bounce from "react-reveal/Bounce";
import { Link } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginTop: theme.spacing(2),
    width: '100%'
  },
  paper: {
    padding: theme.spacing(1),
    maxwidth: '100%',
    textAlign: "center",
    justifyContent: "center",
    color: theme.palette.text.secondary,
  },
}));

export default function Griditem() {
  const classes = useStyles();
  var currentdate = new Date();
  var datetime = currentdate.getHours();

  var direction= datetime > 18 && datetime < 20  ? "class" : "noclass"

  return (
    <div className={classes.root}>
      <Grid container style={{
        padding :"10px"
      }}>
        <Grid item xs={12} sm={6} style={{
          padding : "5px"
        }}>
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
                    display: "flex",
                    justifyContent: "flex-start"
                  }}
                >
                  سابقہ اردو اور معلوماتی سوالات
                </p>
              </Bounce>
              <Link to="/quiz">
                <Button color="inherit" style={{
                  fontFamily: "serif",
                  display: "flex",
                  justifyContent: "flex-end"
                }}>
                  <p
                    style={{
                      color: "white",
                      fontStyle: "italic",
                      fontSize: 20,
                      fontFamily: "serif",
                      display: "flex",
                      justifyContent: "flex-end"
                    }}
                  >
                    Start Quiz
                  </p>
                </Button>
              </Link>
            </Paper>
          </Slide>
        </Grid>

        <Grid item xs={12} sm={6} style={{ padding : "5px"}}>
          <Slide left>
            <Paper
              className={classes.paper}
              style={{
                backgroundImage: `url(${rait})`,
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
                    display: "flex",
                    justifyContent: "flex-start"
                  }}
                >
                  کیا آپ تیار ہیں؟
                </p>
              </Bounce>

              <Link  to={direction}>
                <Button color="inherit" style={{
                   display: "flex",
                   justifyContent: "flex-end"
                }}>
                  <p
                    style={{
                      color: "white",
                      fontStyle: "italic",
                      fontSize: 20,
                      fontFamily: "serif",
                      display: "flex",
                      justifyContent: "flex-end"
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

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import img from "../images/24.jpg";
import img2 from '../images/21.jpeg'
import img3 from '../images/meer.jpeg'
import Favorite from "@material-ui/icons/Favorite";
const useStyles = makeStyles({
  root: {
    maxWidth: 205,
  },
  media: {
    height: 140,
  },
});

export default function Poet() {
  const classes = useStyles();
  return (
    <div
      style={{
        backgroundColor: "#333",
        overflowX: "auto",
        overflowY: "hidden",
        whiteSpace: "nowrap",
        scrollBehavior: "smooth",
      }}
    >
      <div
        style={{
          display: "inline-block",
          color: "white",
          textAlign: "center",
          padding: "4px",
          textDecoration: "none",
        }}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                احمد فراز
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                احمد فراز ۱۲ جنوری ۱۹۳۱ کو کوہاٹ
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Favorite></Favorite>
            </Button>
            <Button size="small" color="primary">
              مزید دریافت
            </Button>
          </CardActions>
        </Card>
      </div>

      <div
        style={{
          display: "inline-block",
          color: "white",
          textAlign: "center",
          padding: "4px",
          textDecoration: "none",
        }}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img3}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              میر تقی میر
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                احمد فراز ۱۲ جنوری ۱۹۳۱ کو کوہاٹ
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Favorite></Favorite>
            </Button>
            <Button size="small" color="primary">
              مزید دریافت
            </Button>
          </CardActions>
        </Card>
      </div>

      <div
        style={{
          display: "inline-block",
          color: "white",
          textAlign: "center",
          padding: "4px",
          textDecoration: "none",
        }}
      >
         <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img2}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
              مرزا غالب
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                احمد فراز ۱۲ جنوری ۱۹۳۱ کو کوہاٹ{" "}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Favorite></Favorite>
            </Button>
            <Button size="small" color="primary">
              مزید دریافت
            </Button>
          </CardActions>
        </Card>
              </div>

      <div
        style={{
          display: "inline-block",
          color: "white",
          textAlign: "center",
          padding: "4px",
          textDecoration: "none",
        }}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                احمد فراز
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                احمد فراز ۱۲ جنوری ۱۹۳۱ کو کوہاٹ{" "}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Favorite></Favorite>
            </Button>
            <Button size="small" color="primary">
              مزید دریافت
            </Button>
          </CardActions>
        </Card>
      </div>

      <div
        style={{
          display: "inline-block",
          color: "white",
          textAlign: "center",
          padding: "4px",
          textDecoration: "none",
        }}
      >
        <Card className={classes.root}>
          <CardActionArea>
            <CardMedia
              className={classes.media}
              image={img}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                احمد فراز
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                احمد فراز ۱۲ جنوری ۱۹۳۱ کو کوہاٹ{" "}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              <Favorite></Favorite>
            </Button>
            <Button size="small" color="primary">
              مزید دریافت
            </Button>
          </CardActions>
        </Card>
      </div>
    </div>
  );
}

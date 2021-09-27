import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import Blogrouter from "./routes/blogroutes.js";
import Quizrouter from "./routes/quizroutes.js";
import Classrouter from "./routes/classroute.js";
import Lafzrouter from "./routes/lafzroutes.js";
import Sliderouter from './routes/slideroute.js'
import path from "path";
import Shairrouter from "./routes/shairroutes.js";
const __dirname = path.resolve();
dotenv.config();
const app = express();
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 5000;
app.use(cors());
app.use(
  bodyParser.urlencoded({
    limit: "50mb",
    extended: true,
    parameterLimit: 50000,
  })
);
app.use(express.static(__dirname + "/uploads"));
app.use(express.json());
app.use("/shair", Shairrouter);
app.use("/blog", Blogrouter);
app.use("/lafz", Lafzrouter);
app.use("/quiz", Quizrouter);
app.use("/class", Classrouter);
app.use("/slide", Sliderouter);
app.get("/", (req, res) => {
  res.send("wellcome to server");
});
app.listen(port, () => {
  console.log(` app is listen on ${port}`);
});
const connection_string = process.env.CONNECTION_STRING;

mongoose
  .connect(connection_string, {
    useNewUrlParser: true,

    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("mongo db connect");
  })
  .catch((error) => console.log("conection failed", error.message));

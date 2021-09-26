import { addslide, getslide } from "../controller/slidercontroller.js";
import express from "express";

import multer from "multer";

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "./uploads/slider");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage });
const Sliderouter = express.Router();
Sliderouter.get("/", getslide)
Sliderouter.post("/", upload.single("imagefile"), addslide);

export default Sliderouter;

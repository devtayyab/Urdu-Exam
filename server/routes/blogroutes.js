import {
  addblog,
  getblog,
  Searchblog,
  Detailblog,
} from "../controller/blogcontroller.js";
import express from "express";

import multer from "multer";

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "./uploads");
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
});
const upload = multer({ storage: storage });
const Blogrouter = express.Router();

Blogrouter.get("/", getblog);
Blogrouter.post("/", upload.single("imagefile"), addblog);
Blogrouter.post("/search", Searchblog);
Blogrouter.post("/:id", Detailblog);
export default Blogrouter;

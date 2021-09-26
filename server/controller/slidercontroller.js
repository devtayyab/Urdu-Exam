import express, { json } from "express";
import Slider from "../model/slider.js";
import fs from "fs";
import path from "path";
const __dirname = path.resolve();
export const getslide = async (req, res) => {
    try {
      const slide = await Slider.find({});
      res.status(201).json(slide);
    } catch (error) {
      console.log(error.message);
    }
  };
export const addslide = async (req, res) => {
  const { title, subtitle, dob, detail, imagefile } = req.body;
  console.log(req.file);
  const _product = new Slider({
    title,
    subtitle,

    imagefile: req.file.filename,

    contentType: "image/png",
  });

  _product.save((error, data) => {
    if (error) throw error;
    if (data) {
      return res.json(data);
    }
  });
};

import express, { json } from "express";
import Blog from "../model/blog.js";
import fs from "fs";
import path from "path";
const __dirname = path.resolve();
export const getblog = async (req, res) => {
  try {
    const blog = await Blog.find({});
    res.status(201).json(blog);
  } catch (error) {
    console.log(error.message);
  }
};

export const addblog = async (req, res) => {
  const { title, subtitle, dob, detail, imagefile } = req.body;
  console.log(req.file);
  const _product = new Blog({
    title,
    subtitle,
    dob,
    detail,
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
export const Searchblog = async (req, res) => {
  const search = req.body;
  console.log(search);
  try {
    const data = await Blog.find({
      $text: {
        $search: search.search,
        $caseSensitive: false,
        $diacriticSensitive: false,
      },
    });
    res.status(201).json(data);
  } catch (error) {
    console.log(error.message);
  }
};

export const Detailblog = async (req, res) => {
  try {
    const data = await Blog.findById(req.params.id);
    console.log(data);
    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

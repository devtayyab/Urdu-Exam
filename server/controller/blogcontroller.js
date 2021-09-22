import express, { json } from "express";
import Blog from "../model/blog.js";
export const getblog = async (req, res) => {
  try {
    const blog = await Blog.find({});
    res.status(201).json(blog);
  } catch (error) {
    console.log(error.message);
  }
};

export const addblog = async (req, res) => {
  const blog = req.body;

  try {
    const data = await Blog.create(blog);
    data.save();
    console.log(data);
    res.send(data)
  } catch (error) {
    console.log(error.message);
  }
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

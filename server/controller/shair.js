import express, { json } from "express";
import Shair from "../model/shair.js";

export const getShair = async (req, res) => {
  try {
    const lafz = await Shair.find({});
    res.status(201).json(lafz);
  } catch (error) {
    console.log(error.message);
  }
};

export const addShair = async (req, res) => {
  const shair = req.body;
  console.log(shair);

  try {
    const data = await Shair.create(shair);
    data.save();

    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

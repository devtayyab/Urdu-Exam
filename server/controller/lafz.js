import express, { json } from "express";
import Lafz from "../model/lafz.js";

export const getlafz = async (req, res) => {
  try {
    const lafz = await Lafz.find({});
    res.status(201).json(lafz);
  } catch (error) {
    console.log(error.message);
  }
};

export const addlafz = async (req, res) => {
  const lafz = req.body;
  console.log(lafz);

  try {
    const data = await Lafz.create(lafz);
    data.save();

    res.send(data);
  } catch (error) {
    console.log(error.message);
  }
};

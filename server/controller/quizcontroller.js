import express, { json } from "express";
import Quiz from "../model/quiz.js";

export const getquiz = async (req, res) => {
  try {
    const question = await Quiz.find({});
    res.status(201).json(question);
  } catch (error) {
    console.log(error.message);
  }
};

export const addquiz = async (req, res) => {
  const quiz = req.body;

  try {
    const data = await Quiz.create(quiz);
    data.save();
    console.log(data);
    res.send(data)
  } catch (error) {
    console.log(error.message);
  }
};

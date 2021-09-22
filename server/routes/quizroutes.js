
import {addquiz,getquiz} from '../controller/quizcontroller.js'
import express from 'express'

const Quizrouter = express.Router();

Quizrouter.get('/', getquiz)
Quizrouter.post('/', addquiz)

export default Quizrouter
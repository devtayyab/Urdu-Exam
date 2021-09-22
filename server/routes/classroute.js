
import {addquiz,getquiz} from '../controller/classcontroller.js'
import express from 'express'

const Classrouter = express.Router();

Classrouter.get('/', getquiz)
Classrouter.post('/', addquiz)

export default Classrouter
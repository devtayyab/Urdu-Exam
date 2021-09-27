
import {addShair,getShair} from '../controller/shair.js'
import express from 'express'

const Shairrouter = express.Router();

Shairrouter.get('/', getShair)
Shairrouter.post('/', addShair)

export default Shairrouter
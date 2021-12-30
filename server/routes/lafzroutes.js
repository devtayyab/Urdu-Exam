
import {addlafz,getlafz} from '../controller/lafz.js'
import express from 'express'

const Lafzrouter = express.Router();

Lafzrouter.get('/', getlafz)
Lafzrouter.post('/', addlafz)

export default Lafzrouter

import {addblog,getblog,Searchblog,Detailblog} from '../controller/blogcontroller.js'
import express from 'express'

const Blogrouter = express.Router();

Blogrouter.get('/', getblog)
Blogrouter.post('/', addblog)
Blogrouter.post('/search', Searchblog)
Blogrouter.post('/:id', Detailblog)
export default Blogrouter
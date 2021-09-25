import { combineReducers } from "redux";
import Quiz from './quiz'
import Class from './classreducer'
import Lafz from './lafzreducer'
import Blog from './blogreducer'
export const reducer = combineReducers({
     quizdata: Quiz,
    classdata: Class,
    lafz: Lafz,
    blog: Blog
})
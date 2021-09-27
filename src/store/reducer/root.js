import { combineReducers } from "redux";
import Quiz from './quiz'
import Class from './classreducer'
import Lafz from './lafzreducer'
import Blog from './blogreducer'
import Slide from './slidereducer'
import Shair from './shairreducer'
export const reducer = combineReducers({
     quizdata: Quiz,
    classdata: Class,
    lafz: Lafz,
    blog: Blog,
    slide : Slide,
    shair : Shair

})
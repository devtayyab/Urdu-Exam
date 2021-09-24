import { combineReducers } from "redux";
import Quiz from './quiz'
import Class from './classreducer'
import Lafz from './lafzreducer'
export const reducer = combineReducers({
     quizdata: Quiz,
    classdata: Class,
    lafz: Lafz
    // cart : cartReducer
})
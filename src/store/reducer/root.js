import { combineReducers } from "redux";
import Quiz from './quiz'
import Class from './classreducer'
export const reducer = combineReducers({
     quizdata: Quiz,
    classdata: Class,
    // cart : cartReducer
})
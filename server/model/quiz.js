import mongoose from 'mongoose'

const QuizSchema = new mongoose.Schema({
 question: String,
 options: Array,
 correct_option: String,
  date: { type: Date, default: new Date() },
});

const Quiz = mongoose.model("Quiz", QuizSchema);

export default Quiz

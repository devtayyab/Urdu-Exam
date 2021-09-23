import  mongoose  from "mongoose";

const ClassSchema = new mongoose.Schema({
 question: String,
 options: Array,
 correct_option: String,
 time : Date,
date: { type: Date, default: new Date() },
});

const Class = mongoose.model("Class", ClassSchema);

export default Class

import  mongoose  from "mongoose";

const ShairSchema = new mongoose.Schema({
 pehla: String,
 dosra: String,
 shiar: String,

});

const Shair = mongoose.model("shair", ShairSchema);

export default Shair

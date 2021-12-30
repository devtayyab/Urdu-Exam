import  mongoose  from "mongoose";

const LafzSchema = new mongoose.Schema({
 lafz: String,
 hijay: String,
 meaning: String,
date: { type: Date, default: new Date() },
});

const Lafz = mongoose.model("lafz", LafzSchema);

export default Lafz

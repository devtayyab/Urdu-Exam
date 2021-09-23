import  mongoose  from "mongoose";

const ContactSchema = new mongoose.Schema({
 name: String,
 phone: String,
 subject: String,
 message: String,

date: { type: Date, default: new Date() },
});

const Contact = mongoose.model("Contact", ContactSchema);

export default Contact

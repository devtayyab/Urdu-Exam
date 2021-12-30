import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true },
  subtitle: { type: String},
  dob: { type: String},
  uid:{ type: String },
  detail: { type: String},
  gazal:{ type: Array},
  shair: { type: Array },
  imagefile: {type: String},
img: {
    data: Buffer,
    contentType: String
},
  date: { type: Date, default: new Date() },
});

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog;

import mongoose from 'mongoose'

const BlogSchema = new mongoose.Schema({
  title: { type: String, required: true, minlength: 3, maxlength: 200 },
subtitle: String,
  uid: String,
  Detail: String,
  date: { type: Date, default: new Date() },
});

const Blog = mongoose.model("Blog", BlogSchema);

export default Blog

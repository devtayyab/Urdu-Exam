import mongoose from "mongoose";

const SliderSchema = new mongoose.Schema({
  title: { type: String },
  subtitle: { type: String },

  imagefile: { type: String },

  date: { type: Date, default: new Date() },
});

const Slider = mongoose.model("Slider", SliderSchema);

export default Slider;

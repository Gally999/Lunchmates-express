const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  // document structure & rules defined here
userId: {
  type: Schema.Types.ObjectId,
      ref: "User",
      required: true,
},
shopId : {
  type: Schema.Types.ObjectId,
      ref: "Shop",
      required: true,
},
date: {
  type: date,
},
rating: {
  type: Number,
  max: 5,
  required: true,
},
comment: {
  type: String,
  minlength: 10,
  required: true,
},
cuisine: {
  type: Array,
  required: true,
  enum: ["American", "British", "Chinese", "French", "Greek", "Burgers", "Indian", "Italian", "Pizza", "Japanese", "Mexican", "Moroccan", "Spanish", "Thaï", "Lebanese", "Turkish", "Vietnamese", "Healthy", "Portuguese", "Gourmet", "German"],
},
diet: {
  type: Array,
  enum: ["vegan", "veggie", "gluten free", "paleo"],
  required: true
},
types: {
  type: Array
},
timeframe: {
  type: Array,
  enum: ["quicke and easy", "time to chat", "be patient"],
},
}, {
  // additional settings for the Schema class
  timestamps: true,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
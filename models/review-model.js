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
  type: Date,
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
  type: [String],
  required: true,
  enum: ["American", "British", "Chinese", "French", "Greek", "Burgers", "Indian", "Italian", "Pizza", "Japanese", "Mexican", "Moroccan", "Spanish", "Thaï", "Lebanese", "Turkish", "Vietnamese", "Healthy", "Portuguese", "Gourmet", "German"],
},
diet: {
  type: [String],
  enum: ["Vegan", "Veggie", "Gluten Free", "Paleo", "Dairy-free"],
  required: true
},
types: {
  type: [String],
  enum: ["Take away", "Sit-in"],
},
timeframe: {
  type: String,
  enum: ["quick and easy", "time to chat", "be patient"],
},
price_level: {
  type: String,
  enum: ["€", "€€", "€€€", "€€€€"],
},
}, {
  // additional settings for the Schema class
  timestamps: true,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
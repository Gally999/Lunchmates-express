const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const reviewSchema = new Schema({
  // document structure & rules defined here

}, {
  // additional settings for the Schema class
  timestamps: true,
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;
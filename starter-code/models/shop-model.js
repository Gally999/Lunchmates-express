const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    // document structure & rules defines here
    name: {
      type: String,
      required: true
    },
    formatted_address: {
      type: String,
      required: true
    },
    coordinates: {
      location: {
        lat: {
          type: String
        },
        lng: {
          type: String
        }
      },
      required: true
    },
    price_level: {
      type: Number,
      required: true,
      max: 3,
    },
    rating: {
      type: Number,
      required: true,
      max: 5,
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
    photo: {
      type: String,
      required: true
    },
    timeframe: {
      type: Array,
      enum: ["quicke and easy", "time to chat", "be patient"],
    },
  },
  {
    timestamps: true
  }
);

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;

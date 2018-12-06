const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    // document structure & rules defines here
    yelpId: {
      type: String,
    },
    name: {
      type: String,
      required: true
    },
    display: {
      type: Array,
      required: true
    },
    coordinates: {
      latitude: {
        type: String,
        required: true,
      },
      longitude: {
        type: String,
        required: true,
      }
    },
    price_level: {
      type: Number,
      required: true,
      max: 3
    },
    rating: {
      type: Number,
      required: true,
      max: 5
    },
    cuisine: {
      type: [String],
      required: true,
      enum: [
        "American",
        "British",
        "Chinese",
        "French",
        "Greek",
        "Burgers",
        "Indian",
        "Italian",
        "Pizza",
        "Japanese",
        "Mexican",
        "Moroccan",
        "Spanish",
        "Thaï",
        "Lebanese",
        "Turkish",
        "Vietnamese",
        "Healthy",
        "Portuguese",
        "Gourmet",
        "German"
      ],
    },
    diet: {
      type: [String],
      enum: ["Vegan", "Veggie", "Gluten free", "Paleo", "Dairy-free"],
      required: true
    },
    types: {
      type: [String],
      enum: ["Take away", "Sit-in"],
    },
    photo: {
      type: String,
      required: true
    },
    timeframe: {
      type: String,
      enum: ["quicke and easy", "time to chat", "be patient"],
    },
    display_phone: {
      type: String
    }
  },
  {
    timestamps: true,
  }
);

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;

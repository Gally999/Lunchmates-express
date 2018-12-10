const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shopSchema = new Schema(
  {
    // document structure & rules defines here
    yelpId: {
      type: String,
      unique: true,
    },
    name: {
      type: String,
      required: true
    },
    display_address: {
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
    yelpRating: {
      type: Number,
      required: true,
      min: 0,
      max: 5
    },
    cuisine: {
      type: [String],
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
      enum: ["quick and easy", "time to chat", "be patient"],
    },
    display_phone: {
      type: String
    },
    price_level: {
      type: String,
      enum: ["€", "€€", "€€€", "€€€€"],
    },
    yelpReviewCount: {
      type: Number
    }
  },
  {
    timestamps: true,
  }
);

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;

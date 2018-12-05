const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const shopSchema = new Schema({
  // document structure & rules defines here


  
}, {
  timestamps: true;
});

const Shop = mongoose.model("Shop", shopSchema);

module.exports = Shop;
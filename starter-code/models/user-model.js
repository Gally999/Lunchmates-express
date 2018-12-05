const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema({
  // document structure & rules defined here


  
}, {
  timestamps: true,
});

const User = mongoose.model("User", userSchema);

module.exports = User;
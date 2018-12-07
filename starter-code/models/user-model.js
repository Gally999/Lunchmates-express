const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    // document structure & rules defined here
    firstName: { type: String, minlength: 2, required: true },
    lastName: {
      type: String,
      minlength: 2,
      required: true
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /^.+@.+\..+$/
    },
    encryptedPassword: { type: String, required: true },
    avatar: {
      type: String
    },
    // companyId: {
    //   type: Schema.Types.ObjectId,
    //   ref: "Company",
    //   required: true
    // },
    favorites: {
      type: Array
    },
  },
  {
    timestamps: true
  }
);

const User = mongoose.model("User", userSchema);

module.exports = User;

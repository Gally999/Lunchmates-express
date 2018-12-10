const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const companySchema = new Schema(
  {
    // document structure & rules defines here
    name: {
      type: String,
      required: true
    },
    subOffice: {
      type: String,
      required: true
    },
    addressCoordinates: {
      type: { type: String, default: "Point" },
      string: { type: String, required: true, },
      coordinates: [{ type: Number, required: true, }],
    },
  },
  {
    timestamps: true
  }
);

companySchema.index({ addressCoordinates: "2dsphere" });

const Company = mongoose.model("Company", companySchema);

module.exports = Company;

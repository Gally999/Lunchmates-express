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
    // coordinates: {
    //   location: {
    //     lat: {
    //       type: String
    //     },
    //     lng: {
    //       type: String
    //     }
    //   },
    //   required: true
    // },
  },
  {
    timestamps: true
  }
);

const Company = mongoose.model("Company", companySchema);

module.exports = Company;

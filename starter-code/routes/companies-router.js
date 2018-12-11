const express = require("express");

const Company = require("../models/company-model.js");

const router = express.Router();

// GET - all companies
router.get("/companies", (req, res, next) => {
  Company.find()
    .then(companiesResults => res.json(companiesResults))
    .catch(err => next(err));
});

// POST - create a company
router.post("/add-company", (req, res, next) => {
  const { companyName: name, subOffice, address: string, longitude, latitude  } = req.body;
  //console.log( companyName, subOffice, string, latLng)

  Company.create(
    {
      name, 
      subOffice, 
      addressCoordinates:
        {
        string: string,
        coordinates: [longitude, latitude] 
      }
    }
  )
  .then(companyDoc => {
      res.json({ companyDoc });
    })
  .catch(err => next(err));
});

// GET "/user-company" -- Retrieves the company info of the logged-in user
router.get("/user-favorites", (req, res, next) => {
  const userId = req.user._id;
  User.findById(userId)
    .populate("Company")
    .then(userDoc => {
      console.log("userDoc.company", userDoc);
      res.json(userDoc)
      // return Shop.find({_id: {$eq: userDoc.favorites} })
      // .populate("")
      // .then()
      // .catch();
    })
    .catch(err => next(err));
})
module.exports = router;

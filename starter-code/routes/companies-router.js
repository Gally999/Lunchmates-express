const express = require("express");

const Company = require("../models/company-model.js");

const router = express.Router();

// GET - all companies
router.get("/companies", (req, res, next) => {
  Company.find()
    .then(companiesResults => res.json(companiesResults))
    .catch(err => next(err));
});

module.exports = router;

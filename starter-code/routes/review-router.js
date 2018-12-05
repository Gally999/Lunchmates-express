const express = require("express");

const Review = require("../models/review-model.js");

const router = express.Router();

// GET "/review" -- Retrieves the list of reviews (sorted by closest)

// POST "/review" -- Adds a new review

// GET "/review/workmates" -- Retrieves review list of workmates (populate by companyID)

// GET "/review/:restoId" -- Retrives review list of 1 resto (populate shopId)




module.exports = router;
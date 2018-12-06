const express = require("express");

const Review = require("../models/review-model.js");

const router = express.Router();

// GET "/review" -- Retrieves the list of reviews (sorted by closest)
// ADD THE SORT BY CLOSEST
router.get("/reviews", (req, res, next) => {
  Review.find()
    .then(reviewsResults => res.json(reviewsResults))
    .catch(err => next(err));
});

// POST "/review" -- Adds a new review
router.post("/reviews", (req, res, next) => {
  const { shopId } = req.params;
  const userId = req.user._id;
  const { userId, rating, comment, cuisine, diet, types, timeframe } = req.body;

  Review.create({
    userId,
    shopId,
    userId,
    rating,
    comment,
    cuisine,
    diet,
    types,
    timeframe
  })
    .then(reviewDoc => res.json(reviewDoc))
    .catch(err => next(err));
});

// GET "/review/workmates" -- Retrieve review list of workmates (populate by companyID)
router.get("/reviews", (req, res, next) => {
  const { companyId } = req.user;

  User.find({ companyId, _id: { $ne: req.user._id } })
  .then(companyUserResults => {
      const coworkersId = companyUserResults.map(oneUser => {
        return oneUser._id;
      });
      Review.find({ userId: coworkersId })
        .sort({ createdAt: -1 })
        .then(reviewsResults => {
          res.json(reviewsResults);
        })
        .catch(err => next(err));
    }
  );
});

// GET "/review/:restoId" -- Retrives review list of 1 resto (find shopId in the URL)
router.get("/reviews", (req, res, next) => {
  const { shopId } = req.params;
  Review.find(shopId)
    .then(reviewsResults => res.json(reviewsResults))
    .catch(err => next(err));
});

module.exports = router;

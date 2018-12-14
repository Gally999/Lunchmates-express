const express = require("express");
const Shop = require("../models/shop-model.js");
const User = require("../models/user-model.js");
const Review = require("../models/review-model.js");
const axios = require("axios");

const router = express.Router();

// GET "/review" -- Retrieves the list of reviews (sorted by closest)
// ADD THE SORT BY CLOSEST
router.get("/reviews", (req, res, next) => {
  Review.find()
    .sort({ createdAt: -1 })
    .limit(3)
    .populate('userId')
    // .populate('companyId')
    .then(reviewsResults => res.json(reviewsResults))
    .catch(err => next(err));
});

// POST "/review" -- Adds a new review
router.post("/shop-details/:shopId", (req, res, next) => {
  const { shopId } = req.params;
  console.log("req.params", req.params);
  console.log(shopId);
  const dataToken = process.env.YELP_TOKEN;
  axios
    .get(`https://api.yelp.com/v3/businesses/${shopId}`, {
      headers: { Authorization: `Bearer ${dataToken}` }
    })
    .then(response => {
      const {
        id,
        name,
        image_url,
        display_phone,
        review_count,
        rating,
        location,
        coordinates,
        price,
        alias
      } = response.data;
      Shop.findOne({ yelpId: { $eq: id } })
        .then(shopDoc => {
          // Check if shop already exists in our local database
          if (!shopDoc) {
            // If the shop doesn't exist, we create it
            Shop.create({
              yelpId: id,
              name: name,
              location: location,
              coordinates: coordinates,
              price_level: price,
              yelpRating: rating,
              image_url: image_url,
              display_phone: display_phone,
              yelpReviewCount: review_count,
              alias: alias
            }).then(createdShopDoc => {
              const userId = req.user._id;
              const ourShopId = createdShopDoc._id;

              const {
                rating,
                comment,
                cuisine,
                diet,
                types,
                timeframe,
                price_level
              } = req.body;
              console.log("TEST TEST TEST");

              Shop.findById(ourShopId)
                .then(
                  Review.create({
                    shopId: ourShopId,
                    userId,
                    rating,
                    comment,
                    cuisine,
                    diet,
                    types,
                    timeframe,
                    price_level
                  })
                )
                .catch(err => next(err));
            });
          } else {
            const userId = req.user._id;
            const localShopId = shopDoc._id;
            const {
              rating,
              comment,
              cuisine,
              diet,
              types,
              timeframe,
              price_level
            } = req.body;
            return Shop.findById(localShopId)
              .then(
                Review.create({
                  shopId: localShopId,
                  userId,
                  rating,
                  comment,
                  cuisine,
                  diet,
                  types,
                  timeframe,
                  price_level
                })
              )
              .catch(err => next(err));
          }
        })
        .catch(err => next(err));
    })
    .catch(err => {
      console.log("3");
      next(err);
    })
    .catch(err => {
      console.log("4");
      next(err);
    });
});

// GET "/review/workmates" -- Retrieve review list of workmates (populate by companyID)
router.get("/reviews-workmates", (req, res, next) => {
  const { companyId } = req.user;

  User.find({ companyId, _id: { $ne: req.user._id } }).then(
    companyUserResults => {
      const coworkersId = companyUserResults.map(oneUser => {
        return oneUser._id;
      });
      Review.find({ userId: coworkersId })
        .sort({ createdAt: -1 })
        .limit(3)
        .populate('userId')
        .then(reviewsResults => {
          res.json(reviewsResults);
        })
        .catch(err => next(err));
    }
  );
});

// GET "/review/:shopId" -- Retrives review list of 1 resto (find shopId in the URL)
router.get("/review/:shop", (req, res, next) => {
  console.log("req.PARAMS", req.params);
  const { shop } = req.params;
  console.log("blah", shop);
  Shop.findOne({ yelpId: { $eq: shop } })
    .then(shopDoc => {
      if (!shopDoc) {
        res.json([]);
        return; 
      }
      Review.find({ shopId: { $eq: shopDoc._id }})
        .populate("userId")
        .then(reviewsResults => {
          res.json(reviewsResults);
        })
        .catch(err => next(err));
    })
    .catch(err => next(err));
});

module.exports = router;

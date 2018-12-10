const express = require("express");
const axios = require("axios");

const Shop = require("../models/shop-model.js");
const User = require("../models/user-model.js");

const router = express.Router();

// GET "/shop" -- Retrieves the list of resto sorted by closest distance
router.get("/shop", (req, res, next) => {
  const dataToken = process.env.YELP_TOKEN;
  // if the user is not logged-in then we search for the best rated places in Paris
  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?limit=30&term=food&location=paris&sort_by=rating`,
      { headers: { Authorization: `Bearer ${dataToken}` } }
    )
    .then(response => {
      //console.log(response.data);
      res.json(response.data);
    })
    .catch(err => next(err));

  // if the user is logged-in then we used their coordinates
  // const { latitude, longitude } = req.user; // double checker où se trouvent les infos dans le model
  // axios.get(`https://api.yelp.com/v3/businesses/search?limit=30&latitude=${latitude}&longitude=${longitude}&radius=500&sort_by=rating`, { headers: { "Authorization": `Bearer ${dataToken}` } })
  //   .then(response => {
  //     console.log(response.data);
  //     res.json(response.data);
  //   })
  //   .catch(err => next(err));
});

// GET "/shop/workmates" -- Retrieves the list of restaurants in the coworkers' favorites
router.get("/shop/workmates", (req, res, next) => {});
// GET "/shop/building-mates" -- Retrieves the list of restaurants in the building coworkers' favorites

// GET "/shop/area" -- Retrieves the list of restaurants in the area (coordinates)

// GET "/shop/searchTerm" -- Retrieves the list of restaurants filtered by the user input (<RestaurantsList)
router.get("/shop/:searchTerm", (req, res, next) => {
  //console.log("req.params de searchTerm", req.params);
  const dataToken = process.env.YELP_TOKEN;
  const { searchTerm } = req.params; // ou possible de recup de req.query
  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?location=paris&term=${searchTerm}&limit=50`,
      { headers: { Authorization: `Bearer ${dataToken}` } }
    )
    .then(response => {
      //console.log(response.data);
      res.json(response.data);
    })
    .catch(err => next(err));
});

// GET "/shop/coworkers/query?=xxx" -- Retrieves the list of restaurants in the coworkers' favorites filtered by the user input

// GET "/shop/building-mates/query?=xxx" -- Retrieves the list of restaurants in the building coworkers' favorites filtered by the user input

// GET "/shop/area/query?=xxx" -- Retrieves the list of restaurants in the area (coordinates) filtered by the user input

// GET "/shop/:shopId" -- Retrieves the details of ONE restaurant
router.get("/shop-details/:shopId", (req, res, next) => {
  //console.log("req.params de shopId", req.params);
  const dataToken = process.env.YELP_TOKEN;
  const { shopId } = req.params;
  axios
    .get(`https://api.yelp.com/v3/businesses/${shopId}`, {
      headers: { Authorization: `Bearer ${dataToken}` }
    })
    .then(response => {
      console.log(response.data);
      res.json(response.data);
    })
    .catch(err => next(err));
});

// GET "/shop/:userId" -- Retrieves the favorite restaurants of the userId

// PUT "/add-shop" -- Add the restaurant to the list of favorites of the user
router.put("/add-shop/:shopId", (req, res, next) => {
  //let ourShopId;
  const { shopId } = req.params;
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
        price
      } = response.data;
      Shop.create({
        yelpId: id,
        name: name,
        display_address: location.display_address,
        coordinates: coordinates,
        price_level: price, 
        yelpRating: rating, 
        photo: image_url, 
        display_phone: display_phone,
        yelpReviewCount: review_count,
      })
      .then(shopDoc => {
        const userId = req.user._id;
        const ourShopId = shopDoc._id; 
        return User.findByIdAndUpdate(
          userId,
          { $push: { favorites: ourShopId } },
          { runValidators: true, new: true }
        )
          .then(userDoc => res.json(userDoc))
          .catch(err => next(err));
      })
      .catch(err => next(err));
    })
    .catch(err => next(err));
  
});

// **** maybe feature POST /shop -- Adds a new restaurant

module.exports = router;

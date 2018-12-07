const express = require("express");
const axios = require("axios");

const Shop = require("../models/shop-model.js")

const router = express.Router();

// GET "/shop" -- Retrieves the list of resto sorted by closest distance
router.get("/shop", (req, res, next) => {
  const dataToken = process.env.YELP_TOKEN;
// if the user is not logged-in then we search for the best rated places in Paris
  axios.get(`https://api.yelp.com/v3/businesses/search?limit=30&location=paris&sort_by=rating`, { headers: { "Authorization": `Bearer ${dataToken}` } })
      .then(response => {
        console.log(response.data);
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
})


// GET "/shop/workmates" -- Retrieves the list of restaurants in the coworkers' favorites

// GET "/shop/building-mates" -- Retrieves the list of restaurants in the building coworkers' favorites

// GET "/shop/area" -- Retrieves the list of restaurants in the area (coordinates)

// GET "/shop/searchTerm" -- Retrieves the list of restaurants filtered by the user input (<RestaurantsList)
router.get("/shop/:searchTerm", (req, res, next) => {
  console.log("req.params", req.params);
  const dataToken = process.env.YELP_TOKEN;
  const { searchTerm } = req.params; // ou possible de recup de req.query
  axios.get(`https://api.yelp.com/v3/businesses/search?location=paris&term=${searchTerm}&limit=50`, { headers: { "Authorization": `Bearer ${dataToken}` } })
    .then(response => {
      //console.log(response.data);
      res.json(response.data)
    })
    .catch(err => next(err));
})


// GET "/shop/coworkers/query?=xxx" -- Retrieves the list of restaurants in the coworkers' favorites filtered by the user input 

// GET "/shop/building-mates/query?=xxx" -- Retrieves the list of restaurants in the building coworkers' favorites filtered by the user input 

// GET "/shop/area/query?=xxx" -- Retrieves the list of restaurants in the area (coordinates) filtered by the user input 

// GET "/shop/:shopId" -- Retrieves the details of ONE restaurant

// GET "/shop/:userId" -- Retrieves the favorite restaurants of the userId




// **** maybe feature POST /shop -- Adds a new restaurant






module.exports = router;
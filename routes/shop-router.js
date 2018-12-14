const express = require("express");
const axios = require("axios");

const Shop = require("../models/shop-model.js");
const User = require("../models/user-model.js");

const router = express.Router();

// GET "/shop" -- Retrieves the list of resto sorted by closest distance
router.get("/shops", (req, res, next) => {
  const dataToken = process.env.YELP_TOKEN;
  // if the user is not logged-in then we search for the best rated places in Paris
  if (!req.user) {
  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?limit=20&term=food&location=paris&sort_by=rating`,
      { headers: { Authorization: `Bearer ${dataToken}` } }
    )
    .then(response => {
      console.log("response data of /shop without user id", response.data);
      res.json(response.data);
    })
    .catch(err => next(err));

    // if the user is logged-in then we used their coordinates
  } else {
      User.findById(req.user._id)
        .populate("companyId")
        .then(userDoc => {
          const latitude = userDoc.companyId.addressCoordinates.coordinates[1];
          const longitude = userDoc.companyId.addressCoordinates.coordinates[0];
            axios.get(`https://api.yelp.com/v3/businesses/search?limit=20&latitude=${latitude}&longitude=${longitude}&radius=500&sort_by=rating`, 
            { headers: { "Authorization": `Bearer ${dataToken}` } })
              .then(response => {
                console.log("response data of /shop with identified user", response.data);
                res.json(response.data);
              })
              .catch(err => next(err));
        })
        .catch(err => next(err));
      }
});

// GET "/shop/workmates" -- Retrieves the list of restaurants in the coworkers' favorites
router.get("/shop/workmates", (req, res, next) => {});
// GET "/shop/building-mates" -- Retrieves the list of restaurants in the building coworkers' favorites

// GET "/shop/area" -- Retrieves the list of restaurants in the area (coordinates)

// GET "/shop-search/searchTerm" -- Retrieves the list of restaurants filtered by the user input (<RestaurantsList)
router.get("/shop-search/:searchTerm", (req, res, next) => {
  const { searchTerm } = req.params; // ou possible de recup de req.query
  console.log(searchTerm);
  if (!searchTerm) {
    searchTerm = "food";
  }
  //console.log("req.params de searchTerm", req.params);
  const dataToken = process.env.YELP_TOKEN;
  console.log("/shop-search/:searchTerm", searchTerm);

  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?location=paris&term=${searchTerm}&limit=20`,
      { headers: { Authorization: `Bearer ${dataToken}` } }
    )
    .then(response => {
      console.log("response data of /shop-search/:searchTerm", response.data);
      res.json({ shop: response.data, user: req.user });
    })
    .catch(err => next(err));
});

// GET "/shop-search/" -- Retrieves the list of restaurants when the user didn't input anything (default "All Filters") (<RestaurantsList)
router.get("/shop-search", (req, res, next) => {
  
  const dataToken = process.env.YELP_TOKEN;

  axios
    .get(
      `https://api.yelp.com/v3/businesses/search?location=paris&term=food&limit=20`,
      { headers: { Authorization: `Bearer ${dataToken}` } }
    )
    .then(response => {
      console.log("response data of /shop-search/", response.data);
      res.json({ shop: response.data, user: req.user });
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
      //console.log(response.data);
      res.json({ shop: response.data, user: req.user});
    })
    .catch(err => next(err));
});

// GET "/shop/:userId" -- Retrieves the favorite restaurants of the userId

// GET "/user-favorites" -- Retrieves the favorites of the logged-in user
router.get("/user-favorites", (req, res, next) => {
  const userId = req.user._id;
  User.findById(userId)
    .populate("favorites")
    .then(userDoc => {
      //console.log("userDoc.favorites", userDoc);
      res.json(userDoc)
      // return Shop.find({_id: {$eq: userDoc.favorites} })
      // .populate("")
      // .then()
      // .catch();
    })
    .catch(err => next(err));
})


// PUT "/add-shop" -- Add the restaurant to the list of favorites of the user
router.put("/add-shop/:shopId", (req, res, next) => {
  
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
        price, 
        alias
      } = response.data;
      // We create a copy of the API in our local database
      Shop.findOne({ yelpId: {$eq: id }} )
      .then(shopDoc => {
        console.log("whatever", shopDoc);
        // Check if shop already exists in our local database
        if (!shopDoc) {
          // If the shop doesn't exist, we create it
          Shop.create({
            yelpId: id,
            name,
            location,
            coordinates,
            price_level: price, 
            yelpRating: rating, 
            image_url, 
            display_phone,
            yelpReviewCount: review_count,
            alias,
          })
          .then(createdShopDoc => {
            const userId = req.user._id;
            const ourShopId = createdShopDoc._id;
            const yelpId = createdShopDoc.yelpId;
            // Once created, we get the local db id and add it to the list of favorites of our user. 
            return User.findByIdAndUpdate(
              userId,
              { $push: { favorites: ourShopId, yelpFavorites: yelpId } },
              { runValidators: true, new: true }
            )
            // then we send the userDoc to our front end 
              .then(userDoc => res.json(userDoc))
              .catch(err => {
                console.log("1");
                next(err);
              })
          })
          .catch(err => {
            console.log("2");
            next(err);
          })
          // If the favored shop does already exist in our database, we get the id from our local db
        } else {
          const userId = req.user._id;
          const localShopId = shopDoc._id;
          const yelpId = shopDoc.yelpId;
        // We check if the user already has this restaurant in their favorites
          return User.findById(userId)
          .then(userDoc => {
            // If they don't already have it as a favorite, then we push it to the favorites array
            if (userDoc.favorites.indexOf(localShopId) === -1) {
              console.log("findUser and check if localShopId is included", userDoc.favorites.indexOf(localShopId) === -1, localShopId, userDoc.favorites);
              User.findByIdAndUpdate(
                userId, 
                { $push: { favorites: localShopId, yelpFavorites: yelpId } }, 
                { runValidators: true, new: true},
              )
                .then(userDoc => res.json(userDoc))
                .catch(err => next(err));
            }
          })
          .catch(err => next(err));
        }
      })
      .catch(err => {
        console.log("3");
        next(err);
      })
    })
    .catch(err => {
      console.log("4");
      next(err);
    })
});

// **** maybe feature POST /shop -- Adds a new restaurant

module.exports = router;

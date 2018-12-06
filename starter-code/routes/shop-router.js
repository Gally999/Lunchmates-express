const express = require("express");

const Shop = require("../models/shop-model.js")

const router = express.Router();

// GET "/resto" -- Retrieves the list of resto sorted by closest distance

// GET "/resto/workmates" -- Retrieves the list of restaurants in the coworkers' favorites

// GET "/resto/building-mates" -- Retrieves the list of restaurants in the building coworkers' favorites

// GET "/resto/area" -- Retrieves the list of restaurants in the area (coordinates)

// GET "/resto/query?=xxx" -- Retrieves the list of restaurants filtered by the user input 

// GET "/resto/coworkers/query?=xxx" -- Retrieves the list of restaurants in the coworkers' favorites filtered by the user input 

// GET "/resto/building-mates/query?=xxx" -- Retrieves the list of restaurants in the building coworkers' favorites filtered by the user input 

// GET "/resto/area/query?=xxx" -- Retrieves the list of restaurants in the area (coordinates) filtered by the user input 

// GET "/resto/:restoId" -- Retrieves the details of ONE restaurant

// GET "/resto/:userId" -- Retrieves the favorite restaurants of the userId




// **** maybe feature POST /resto -- Adds a new restaurant






module.exports = router;
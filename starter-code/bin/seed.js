require('dotenv').config();

const mongoose = require("mongoose");

const Company = require ("../models/company-model.js");


mongoose 
  .connect("mongodb://localhost/lunchmates", {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  }) 
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

  const companiesData = [
    {name: "Ironhack", subOffice: "Paris"},
  ];




Company.create(companiesData)
.then(companyResults => {
console.log(`${companyResults.length} was correctly inserted!`);
})
.catch(err => {
console.log("create Failure!!", err);
});
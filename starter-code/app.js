require('dotenv').config();

const bodyParser   = require('body-parser');
const cookieParser = require('cookie-parser');
const express      = require('express');
const mongoose     = require('mongoose');
const logger       = require('morgan');
const path         = require('path');
const cors         = require("cors");
const session      = require("express-session");
const MongoStore   = require("connect-mongo")(session);
const passport     = require("passport");

require("./config/passport-setup.js");

mongoose
  .connect('mongodb://localhost/lunchmates', {useNewUrlParser: true})
  .then(x => {
    console.log(`Connected to Mongo! Database name: "${x.connections[0].name}"`)
  })
  .catch(err => {
    console.error('Error connecting to mongo', err)
  });

const app = express();

// Middleware Setup
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
      
app.use(express.static(path.join(__dirname, 'public')));

app.use(cors({
  credentials: true, 
  origin: ["http://localhost:3000", "https://api.yelp.com/v3"]
}));

app.use(session({
  secret: process.env.secret, 
  resave: true,
  saveUninitialized: true,
  store: new MongoStore({mongooseConnection: mongoose.connection})
}));
app.use(passport.initialize());
app.use(passport.session());

const shopRouter = require('./routes/shop-router.js');
app.use('/api', shopRouter);

const authRouter = require("./routes/auth-router.js");
app.use("/api", authRouter);

const companiesRouter = require("./routes/companies-router.js");
app.use('/api', companiesRouter);

const reviewsRouter = require("./routes/review-router.js");
app.use("/api", reviewsRouter);

module.exports = app;

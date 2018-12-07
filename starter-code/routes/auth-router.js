const express = require("express");
const bcrypt = require("bcrypt");

const User = require("../models/user-model.js");

const router = express.Router();

// POST "/signup"
router.post("/signup", (req, res, next) => {
  const { firstName, lastName, email, originalPassword } = req.body;
  console.log(firstName, lastName, email, originalPassword)

  const encryptedPassword = bcrypt.hashSync(originalPassword, 10);

  User.create({ firstName, lastName, email, encryptedPassword })
  .then(userDoc => {
    req.logIn(userDoc, () => {
      userDoc.encryptedPassword = undefined;
      res.json({ userDoc });
    });
  })
  .catch(err => next(err));
});

// POST "/login"
router.post("/login", (req, res, next) => {
  const { email, originalPassword } = req.body;

  User.findOne({ email: { $eq: email }})
  .then(userDoc => {
    if(!userDoc) {
      next(new Error ("Incorrect email."));
      return;
    }

    const { encryptedPassword } = userDoc;
    if(!bcrypt.compareSync(originalPassword, encryptedPassword)) {
      next(new Error ("Incorrect Password."))
    } else {
      req.logIn(userDoc, () => {
        userDoc.encryptedPassword = undefined;
        res.json({ userDoc });
      })
    };
  })
  .catch(err => next(err));
});

// DELETE "/logout"
router.delete("/logout", (req, res, next) => {
  req.logOut();
  res.json({ userDoc: null });
});

// GET /checkuser
router.get("/checkuser", (req, res, next) => {
  if(req.user) {
    req.user.encryptedPassword = undefined;
    res.json({ userDoc: req.user });
  } else {
    res.json({ userDoc: null });
  }
})

// GET "/profile" -- Retrieves the info of the user (logged-in or clicked-on) 

// PUT "/profile/userId" -- Update 




module.exports = router;
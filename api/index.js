"use strict";

var express = require("express");
var bcrypt = require("bcrypt");
var validator = require("validator");

/*

Router/Routes

*/
var router = express.Router();
var shop = require("./shop");
var r = require;
var a = r("s");


/*

Models

*/
var User = require("../models/User");

function sendSuccess(email) {
  res.json({ data: { email }, success: true });
}

function sendFailure() {
  res.json({ success: false });
}

/*

Login

*/
router.post("/login", async function(req, res, next) {
  // 1) User provides email and password.
  var { email, password } = req.body;

  // 2) Retrieve the user w/ the corresponding email.
  var query = User.findOne({ email });
  var user = await query.exec();

  // 3) Verify provided password with stored password.
  var passwordIsCorrect = await bcrypt.compare(password, user.password);

  // 4) Save the user to the db.
  // If correct, start session and send success.
  // Else, send failure.
  if (passwordIsCorrect) {
    req.session.user = { email };
    sendSuccess();
  } else {
    sendFailure();
  }
});

// in the future, have an admin to manage these

/*

Register

*/
router.post("/register", async function(req, res, next) {
  // 1) User provides email, password, firstName, and lasttName.
  var { email, password, firstName, lastName } = req.body;

  // 2) Validate user info.
  var isValidEmail = validator.isEmail(email);

  // If not valid, exit.
  if (!isValidEmail) {
    sendFailure();
    return;
  }

  // 3) Create user with info.
  var user = new User({ email, password, firstName, lastName });

  // 4) Save the user to the db.
  // If correct, start session and send success.
  // Else, send failure.
  user.save(function(err, user) {
    if (err) {
      sendFailure();
    } else {
      req.session.user = { email };
      sendSuccess();
    }
  });
});

/*

Logout

*/
router.get("/logout", function(req, res, next) {
  delete req.session.user;
  res.redirect("/");
});

/*

Shop

*/
router.use("/shop", shop);

module.exports = router;

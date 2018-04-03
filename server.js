"use strict";

var express = require("express");
var mongoose = require("mongoose");
var bodyParser = require("body-parser");
var api = require("./api/index");
var session = require("express-session");

var app = express();

app.use(
  session({
    name: 'myCookie',
    secret: "work hard",
    resave: true,
    saveUninitialized: false
  })
);

app.use(bodyParser.json());
app.use("/api", api);

var mongoDB = "mongodb://127.0.0.1/bsl";
mongoose.connect(mongoDB);
mongoose.Promise = global.Promise;

var db = mongoose.connection;
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.listen(8000, function() {
  console.log("Listening on port 8000...");
});

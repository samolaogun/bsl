"use strict";

var express = require("express");
var validator = require("validator");

/*

Router/Routes

*/
var router = express.Router();

/*

Models

*/
var Product = require("../models/Product");


router.post("/charge", async function(req, res, next) {

});

router.get("/items/all", async function(req, res, next) {
  // Get all products.
  var query = Product.find();

  try {
    var items = await query.exec();
    res.stausCode = 200;
    res.json({ data: { ...items }, sucesss: true });
  } catch (e) {
    res.statusCode = 400;
    res.json({ sucesss: false });
  }
});

router.post("/items/add", async function(req, res, next) {
  var body = req.body;

  var image = body.image || "data:svg+xml,";
  var sizes = body.sizes || [];
  var name = body.name || "";

  var product = new Product({
    name,
    image,
    sizes
  });

  try {
    product = await product.save();
    res.stausCode = 200;
    res.send(product);
  } catch (e) {
    res.stausCode = 400;
    res.send(e.message);
  } finally {
    next();
  }
});

router.post("/items/edit", async function(req, res, next) {
  var body = req.body;

  var id = body._id;
  var image = body.image;
  var sizes = body.sizes;
  var name = body.name;

  var query = Product.findById(id);

  try {
    var item = await item.findOneAndUpdate(query, { image, sizes, name });
    res.stausCode = 200;
    res.send(item);
  } catch (e) {
    res.stausCode = 400;
    res.send(e.message);
  } finally {
    next();
  }
});

module.exports = router;

"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var SizeSchema = new Schema({
  size: {
    type: String,
    enum: ["XS", "S", "M", "L", "XL"],
    default: "S"
  },
  inventory: Number
});

var ProductSchema = new Schema({
  name: String,
  sizes: [SizeSchema],
  image: String
});

module.exports = mongoose.model("Product", ProductSchema);

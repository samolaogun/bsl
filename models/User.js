"use strict";

var mongoose = require("mongoose");
var Schema = mongoose.Schema;
var bcrypt = require("bcrypt");

var ShopPermissionsSchema = new Schema({
  mayAddItems: {
    type: Boolean,
    default: true
  },
  mayUpdateItems: {
    type: Boolean,
    default: true
  },
  mayRemoveItems: {
    type: Boolean,
    default: true
  }
});

var BlogPermissionsSchema = new Schema({
  mayEditArticles: {
    type: Boolean,
    default: true
  },
  maRemoveArticles: {
    type: Boolean,
    default: true
  },
  mayAddArticles: {
    type: Boolean,
    default: true
  }
});

var PermissionsSchema = new Schema({
  shopPermisions: ShopPermissionsSchema,
  blogPermissions: BlogPermissionsSchema
  // emailPermissions
});

var UserSchema = new Schema({
  firstName: { type: String, required: true },
  lastName: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, unique: true }
  // permissions: PermissionsSchema
});

UserSchema.pre("save", async function(next) {
  var user = this;
  try {
    var hash = await bcrypt.hash(user.password, 10);
    user.password = hash;
    next();
  } catch (e) {
    next(e);
  }
});

// Compile model from schema
module.exports = mongoose.model("User", UserSchema);

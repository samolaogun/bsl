import Vue from "vue";
import Vuex from "vuex";
import * as actions from "./actions";
import * as getters from "./getters";
import products from "./modules/products";
import profile from "./modules/profile";
import promotions from "./modules/promotions";
import shoppingCart from "./modules/shopping-cart";

export default function() {
  return new Vuex.Store({
    actions,
    getters,
    modules: {
      products,
      profile,
      promotions,
      shoppingCart
    }
  });
}

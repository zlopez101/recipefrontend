import Vue from "vue";
import Vuex from "vuex";
import * as user from "@/store/modules/user.js";
import * as recipe from "@/store/modules/recipe.js";
import * as notifications from "@/store/modules/notifications.js";
import * as groceries from "@/store/modules/groceries.js";
Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    user,
    recipe,
    notifications,
    groceries
  },
  state: {},
  mutations: {},
  actions: {},
  getters: {}
});

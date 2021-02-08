import Vue from "vue";
import Vuex from "vuex";
import RecipeService from "@/services/RecipeService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    recipe: {},
    GroceryList: [],
    FinalList: []
  },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    SET_RECIPE(state, recipe) {
      state.recipe = recipe;
    },
    ADD_INGREDIENT(state, ingredient) {
      state.GroceryList.push(ingredient);
    }
  },
  actions: {
    fetchRecipes({ commit }) {
      RecipeService.getRecipes()
        .then(response => {
          commit("SET_RECIPES", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    fetchRecipe({ commit, getters }, id) {
      var recipe = getters.getRecipeById(id);

      if (recipe) {
        commit("SET_RECIPE", recipe);
      } else {
        RecipeService.getRecipe(id)
          .then(response => {
            commit("SET_RECIPE", response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    addIngredients({ commit }, ingredients) {
      commit("ADD_INGREDIENT", ingredients);
    }
  },
  getters: {
    getRecipeById: state => id => {
      return state.recipes.find(recipe => recipe.id == id);
    }
  },
  modules: {}
});

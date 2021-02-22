import RecipeService from "@/services/RecipeService.js";
export const namespace = true;

export const state = {
  recipes: []
};
export const mutations = {
  // recipe actions
  // need the set recipe for a reload on a specific recipe page
  SET_RECIPES(state, recipes) {
    state.recipes = recipes;
  }
};
export const actions = {
  fetchRecipes({ commit }) {
    RecipeService.getRecipes()
      .then(response => {
        commit("SET_RECIPES", response.data);
      })
      .catch(error => {
        console.log(error);
      });
  },
  makeRecipe({ dispatch }, url) {
    RecipeService.makeRecipe(url)
      .then(response => {
        console.log("recipe was created!", response);
      })
      .catch(error => {
        console.log("recipe was not added: ", error);
      });
    dispatch("fetchRecipes");
  }
};
export const getters = {
  RecipeById: state => id => {
    return state.recipes.find(recipe => recipe.id === id);
  }
};

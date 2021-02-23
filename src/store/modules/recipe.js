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
  },
  TOGGLE_ACTIVATION(state, payload) {
    let recipe = state.recipes.find(recipe => recipe.id === payload.from);
    let ingredient = recipe.ingredients.find(
      ingredient => ingredient.id === payload.id
    );
    ingredient.active = !ingredient.active;
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
  },
  toggleIngredient({ commit }, ingredient) {
    commit("TOGGLE_ACTIVATION", ingredient);
  },
  exportIngredientsToGroceryList({ dispatch, getters }, id) {
    // use the recipe id to get the recipe, and then send all the groceries
    // over to the list that have an active status
    let recipe = getters.RecipeById(id);
    let onlyActiveIngredients = recipe.ingredients.filter(
      ingredient => ingredient.active === true
    );
    // call the groceries moduel action
    dispatch("pushIngredients", onlyActiveIngredients, { root: true });
  }
};
export const getters = {
  RecipeById: state => id => {
    return state.recipes.find(recipe => recipe.id === id);
  }
};

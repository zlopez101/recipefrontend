import RecipeService from "@/services/RecipeService.js";

export const state = {
  list: {
    Groceries: []
  },
  recipeInList: []
};
export const mutations = {
  // adding all ingredients not inactivated to grocery store list
  ADD_INGREDIENTS(state, ingredients) {
    state.list.Groceries.push(...ingredients);
  },
  CREATE_GROCERY_LIST(state, groceryItems) {
    state.list = groceryItems;
  },
  ADD_RECIPE_NAME(state, recipeName) {
    state.recipeInList.push(recipeName);
  }
};
export const actions = {
  pushIngredients({ commit }, ingredients) {
    commit("ADD_INGREDIENTS", ingredients);
  },
  makeTheList({ commit }, ingredients) {
    RecipeService.makeList(ingredients).then(response => {
      commit("CREATE_GROCERY_LIST", { Groceries: [], ...response.data });
    });
  }
};
export const getters = {};

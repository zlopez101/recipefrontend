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
  },
  GROCERY_INGREDIENT_TOGGLE(state, payload) {
    Object.keys(state.list).forEach(label => {
      let ingredient = state.list[label].find(
        ingredient => ingredient.id === payload.id
      );
      // since we did a forEach, we need to filter when its not found
      if (ingredient) {
        ingredient.active = !ingredient.active;
      }
    });
    state = payload;
  }
};
export const actions = {
  pushIngredients({ commit }, ingredients) {
    // let ingredients = ingredients.forEach(ingredient => {
    //   return {
    //     ...ingredient,
    //     category: Grocer
    //   }
    // })
    commit("ADD_INGREDIENTS", ingredients);
  },
  makeTheList({ state, commit }) {
    let ingredients = [];
    Object.keys(state.list).forEach(label => {
      ingredients.push(
        ...state.list[label].filter(ingredient => ingredient.active === true)
      );
    });
    RecipeService.makeList(ingredients).then(response => {
      commit("CREATE_GROCERY_LIST", { Groceries: [], ...response.data });
    });
  },
  toggleActivation({ commit }, ingredient) {
    commit("GROCERY_INGREDIENT_TOGGLE", ingredient);
  }
};
export const getters = {
  // add something to get all the recipes in the list
};

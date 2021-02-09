import Vue from "vue";
import Vuex from "vuex";
import RecipeService from "@/services/RecipeService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    recipe: {},
    GroceryList: []
  },
  mutations: {
    SET_RECIPES(state, recipes) {
      state.recipes = recipes;
    },
    SET_RECIPE(state, recipe) {
      state.recipe = recipe;
    },
    INACTIVATE_INGREDIENT(state, inactiveIngredient) {
      state.recipe.inactiveIngredients.push(inactiveIngredient);
    },
    REMOVE_INACTIVE_INGREDIENT(state, toBeRemoved) {
      state.recipe.inactiveIngredients.splice(
        state.recipe.inactiveIngredients.indexOf(toBeRemoved),
        1
      );
    },
    // adding all ingredients not inactivated to grocery store list
    ADD_INGREDIENTS(state, ingredients) {
      state.GroceryList.push(...ingredients);
    },
    CREATE_GROCERY_LIST(state, groceryItems) {
      state.GroceryList = groceryItems;
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
        // add the inactivate ingredients property to the recipe object, not included in the backend api (changes every time)
        recipe.inactiveIngredients = [];
        commit("SET_RECIPE", recipe);
      } else {
        RecipeService.getRecipe(id)
          .then(response => {
            // add the inactivate ingredients property to the recipe object, not included in the backend api (changes every time)
            var recipe = response.data;
            recipe.inactiveIngredients = [];
            commit("SET_RECIPE", response.data);
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    addIngredients({ commit }, ingredients) {
      commit("ADD_INGREDIENTS", ingredients);
    },
    inactivateIngredient({ commit }, { add, inactive }) {
      if (add) {
        commit("INACTIVATE_INGREDIENT", inactive);
      } else {
        commit("REMOVE_INACTIVE_INGREDIENT", inactive);
      }
    },
    makeTheList({ commit, state }) {
      RecipeService.makeList(state.GroceryList)
        .then(response => {
          commit("CREATE_GROCERY_LIST", response.data);
        })
        .catch(error => {
          console.log(error);
        });
    }
  },
  getters: {
    getRecipeById: state => id => {
      return state.recipes.find(recipe => recipe.id == id);
    }
  },
  modules: {}
});

import Vue from "vue";
import Vuex from "vuex";
import RecipeService from "@/services/RecipeService.js";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    recipes: [],
    recipe: {},
    groceryList: [],
    finalList: {}
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
      state.groceryList.push(...ingredients);
    },
    CREATE_GROCERY_LIST(state, groceryItems) {
      state.finalList = groceryItems;
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
    addIngredients({ commit, getters }, { ingredients, recipeName }) {
      if (getters.getRecipeNamesAlreadyInGroceryList.has(recipeName)) {
        console.log("You can't add that dummy!");
      } else {
        let labeledIngredients = [];
        const len = ingredients.length;
        for (var i = 0; i < len; i++) {
          labeledIngredients.push({
            ingredient: ingredients[i],
            from: recipeName
          });
        }
        commit("ADD_INGREDIENTS", labeledIngredients);
      }
    },
    inactivateIngredient({ commit }, { add, inactive }) {
      if (add) {
        commit("INACTIVATE_INGREDIENT", inactive);
      } else {
        commit("REMOVE_INACTIVE_INGREDIENT", inactive);
      }
    },
    makeTheList({ commit }, ingredients) {
      RecipeService.makeList(ingredients)
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
    },
    getRecipeNamesAlreadyInGroceryList: state => {
      var mySet = new Set();
      for (var i = 0; i < state.groceryList.length; i++) {
        mySet.add(state.groceryList[i].from);
      }
      return mySet;
    }
  },
  modules: {}
});

<template>
  <div>
    <h1>My Recipes</h1>
    <div>
      <recipeCard :key="recipe.id" v-for="recipe in recipes" :recipe="recipe" />
    </div>
  </div>
</template>

<script>
import recipeCard from "../components/recipeCard.vue";
import RecipeService from "../services/RecipeService.js";
export default {
  name: "RecipeList",
  components: {
    recipeCard
  },
  data() {
    return {
      recipes: null
    };
  },
  created() {
    RecipeService.getRecipes()
      .then(response => {
        this.recipes = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style></style>

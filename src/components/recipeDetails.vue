<template>
  <div v-if="recipe">
    <h2>{{ recipe.name }}</h2>
    <ul>
      <li v-for="ingredient in recipe.ingredients" :key="ingredient">
        {{ ingredient }}
      </li>
    </ul>
  </div>
</template>

<script>
import RecipeService from "../services/RecipeService.js";
export default {
  name: "recipeDetails",
  props: ["id"],
  data() {
    return {
      recipe: null
    };
  },
  created() {
    RecipeService.getRecipe(this.id)
      .then(response => {
        this.recipe = response.data;
      })
      .catch(error => {
        console.log(error);
      });
  }
};
</script>

<style></style>

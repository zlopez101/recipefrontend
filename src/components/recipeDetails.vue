<template>
  <div v-if="recipe">
    <h2>{{ recipe.name }}</h2>
    <v-chip-group column>
      <baseIngredient
        v-for="ingredient in recipe.ingredients"
        :key="ingredient"
        :ingredient="ingredient"
      />
    </v-chip-group>
  </div>
</template>

<script>
import RecipeService from "../services/RecipeService.js";
import baseIngredient from "@/components/baseIngredient.vue";
export default {
  name: "recipeDetails",
  components: {
    baseIngredient
  },
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

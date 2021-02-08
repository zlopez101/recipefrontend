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
import { mapState } from "vuex";
export default {
  name: "RecipeList",
  components: {
    recipeCard
  },
  created() {
    this.$store.dispatch("fetchRecipes");
  },
  computed: mapState(["recipes"])
};
</script>

<style></style>

<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h1>My Recipes</h1>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-row v-for="recipe in recipes" :key="recipe.id">
        <v-col>
          <recipeCard :recipe="recipe" />
        </v-col>
      </v-row>
    </v-container>
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

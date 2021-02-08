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
    <v-btn @submit="addToGrocery" color="success">Add to Grocery List</v-btn>
  </div>
</template>

<script>
// import RecipeService from "../services/RecipeService.js";
import baseIngredient from "@/components/baseIngredient.vue";
import { mapState } from "vuex";
export default {
  name: "recipeDetails",
  components: {
    baseIngredient
  },
  props: ["id"],
  // data() {
  //   return {
  //     recipe: null
  //   };
  // },
  created() {
    this.$store.dispatch("fetchRecipe", this.id);
    //   RecipeService.getRecipe(this.id)
    //     .then(response => {
    //       this.recipe = response.data;
    //     })
    //     .catch(error => {
    //       console.log(error);
    //     });
  },
  computed: mapState(["recipe"]),
  methods: {
    addToGrocery() {
      this.$store.dispatch("addIngredients");
    }
  }
};
</script>

<style></style>

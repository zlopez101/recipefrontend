<template>
  <div v-if="recipe">
    <h2>{{ recipe.name }}</h2>
    <v-chip-group column>
      <baseIngredient
        v-on:inactivate="onInactivate"
        v-for="ingredient in recipe.ingredients"
        :key="ingredient"
        :ingredient="ingredient"
      />
    </v-chip-group>
    <v-btn @click="addToGrocery" outlined color="primary" dark
      >Add to Grocery List</v-btn
    >
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
  data() {
    return {
      vals: []
    };
  },
  created() {
    this.$store.dispatch("fetchRecipe", this.id);
  },
  computed: mapState(["recipe"]),
  methods: {
    addToGrocery() {
      this.$store.dispatch("addIngredients", this.exportIngredients());
    },
    onInactivate(clicked, ingredient) {
      this.$store.dispatch("inactivateIngredient", {
        add: clicked,
        inactive: ingredient
      });
    },
    exportIngredients() {
      return this.recipe.ingredients.filter(
        ingredient => !this.recipe.inactiveIngredients.includes(ingredient)
      );
    }
  }
};
</script>

<style></style>

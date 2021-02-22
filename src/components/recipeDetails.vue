<template>
  <div v-if="local">
    <h2>{{ local.name }}</h2>
    <v-chip-group column>
      <baseIngredient
        v-on:inactivate="onInactivate"
        v-for="(ingredient, index) in local.ingredients"
        :key="index"
        :ingredient="{ ingredient: ingredient, id: index }"
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
import { mapState, mapGetters } from "vuex";
export default {
  name: "recipeDetails",
  components: {
    baseIngredient
  },
  props: ["id"],
  data() {
    return {
      inactiveIngredients: []
    };
  },
  computed: {
    ...mapState({
      _recipes: state => state.recipe.recipes
    }),
    ...mapGetters(["RecipeById"]),
    local() {
      return this.RecipeById(this.id);
    }
  },
  created() {
    if (this._recipes.length == 0) {
      this.$store.dispatch("fetchRecipes");
    }
  },
  methods: {
    addToGrocery() {
      this.$store.dispatch("pushIngredients", this.exportIngredients());
    },
    onInactivate(clicked, ingredient) {
      // add the clicked ingredient to the inactive list
      if (clicked) {
        this.inactiveIngredients.push(ingredient.id);
      } else {
        this.inactiveIngredients = this.inactiveIngredients.filter(
          arrayIngredient => arrayIngredient !== ingredient.id
        );
      }
    },
    exportIngredients() {
      // filter ingredients based on locally inactivated
      return this.local.ingredients.filter((ingredient, index) => {
        return !this.inactiveIngredients.includes(index);
      });
    }
  }
};
</script>

<style></style>

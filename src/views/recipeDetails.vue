<template>
  <div v-if="local">
    <ingredientList
      :groceries="local.ingredients"
      :title="local.name"
      v-on:toggleActivation="toggleActivation"
    />
    <v-btn @click="addToGrocery" outlined color="primary" dark
      >Add to Grocery List</v-btn
    >
  </div>
</template>

<script>
// import baseIngredient from "@/components/baseIngredient.vue";
import ingredientList from "@/components/ingredientList.vue";
import { mapState, mapGetters } from "vuex";
export default {
  name: "recipeDetails",
  components: {
    ingredientList
  },
  props: ["id"],
  computed: {
    // only used if the user refreshes on the page,
    // need a way to reload data
    ...mapState({
      _recipes: state => state.recipe.recipes
    }),
    // get the recipe by the prop 'id'
    ...mapGetters(["RecipeById"]),
    local() {
      return this.RecipeById(this.id);
    }
  },
  created() {
    // should do nothing, except during hard refresh on
    // recipe page
    if (this._recipes.length == 0) {
      this.$store.dispatch("fetchRecipes");
    }
  },
  methods: {
    addToGrocery() {
      this.$store.dispatch("exportIngredientsToGroceryList", this.id);
    },
    toggleActivation(ingredient) {
      this.$store.dispatch("toggleIngredient", ingredient);
    }
  }
};
</script>

<style></style>

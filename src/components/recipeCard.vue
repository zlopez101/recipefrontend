<template>
  <v-card shaped elevation="10" fluid>
    <router-link :to="{ name: 'recipeDetails', params: { id: recipe.id } }">
      <v-card-title>
        {{ recipe.name }}
      </v-card-title>
    </router-link>
    <v-spacer></v-spacer>
    <v-btn @click="addToGrocery" color="success">Add to List</v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    recipe: Object
  },
  methods: {
    addToGrocery() {
      this.$store.dispatch("pushIngredients", this.recipe.ingredients);
    }
  }
};
</script>

<style></style>

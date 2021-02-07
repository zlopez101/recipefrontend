<template>
  <router-link :to="{ name: 'recipeDetails', params: { id: recipe.id } }">
    <h2>{{ recipe.name }}</h2>
  </router-link>
</template>

<script>
export default {
  props: {
    recipe: Object
  }
};
</script>

<style></style>

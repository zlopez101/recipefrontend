<template>
  <router-link :to="{ name: 'recipeDetails', params: { id: recipe.id } }">
    <v-card>
      <v-card-title primary-title>
        {{ recipe.name }}
      </v-card-title>
    </v-card>
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

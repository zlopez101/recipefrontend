<template>
  <div>
    <h2>{{ title }}</h2>
    <v-chip-group column>
      <baseIngredient
        v-on:clicked="toggleActivation"
        v-for="ingredient in groceries"
        :key="ingredient.id"
        :ingredient="ingredient"
      />
    </v-chip-group>
  </div>
</template>

<script>
import baseIngredient from "@/components/baseIngredient.vue";

export default {
  name: "ingredientList",
  components: {
    baseIngredient
  },
  props: {
    groceries: {
      type: Array
    },
    title: {
      type: String,
      default: "Grocery List"
    }
  },
  methods: {
    toggleActivation(ingredient) {
      this.$emit("toggleActivation", ingredient);
    }
  }
};
</script>

<style></style>

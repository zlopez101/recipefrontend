<template>
  <div>
    <h2>{{ title }}</h2>
    <v-chip-group column>
      <baseIngredient
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
      /*Array of Ingredient Items
      {
        ingredient: Str
        id: int -> index in recipe list
        active: bool
        from: Str (recipe id)

      }
      */
      type: Array
    },
    title: {
      type: String,
      default: "Grocery List"
    }
  }
};
</script>

<style></style>

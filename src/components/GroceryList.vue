<template>
  <div>
    <h2>{{ title }}</h2>
    <v-chip-group column>
      <baseIngredient
        v-on:inactivate="onInactivate"
        v-for="(ingredient, index) in groceries"
        :key="ingredient + index"
        :ingredient="{ ingredient: ingredient, id: index }"
      />
    </v-chip-group>
  </div>
</template>

<script>
import baseIngredient from "@/components/baseIngredient.vue";

export default {
  name: "PreviewGroceryList",
  components: {
    baseIngredient
  },
  data() {
    return {
      inactivated: []
    };
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
    onInactivate(clicked, ingredient) {
      // need to grab the initial
      this.$emit("onInactivate", clicked, ingredient);
    }
  }
};
</script>

<style></style>

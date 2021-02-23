<template>
  <v-chip @click="change" outlined :color="myColor">{{
    ingredient.ingredient
  }}</v-chip>
</template>

<script>
export default {
  name: "baseIngredient",
  props: {
    ingredient: {
      // ingredient, active, from
      type: Object
    }
  },
  computed: {
    myColor() {
      return this.ingredient.active == true ? "green" : "red";
    }
  },
  methods: {
    change() {
      this.$store.dispatch("toggleIngredient", this.ingredient);
    }
  }
};
</script>

<style></style>

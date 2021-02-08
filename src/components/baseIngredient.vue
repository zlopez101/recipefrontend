<template>
  <v-chip @click="change" outlined :color="myColor">{{ myIngredient }}</v-chip>
</template>

<script>
export default {
  name: "baseIngredient",
  data() {
    return {
      clicked: false,
      myIngredient: this.ingredient
    };
  },
  props: {
    ingredient: {
      type: String
    }
  },
  computed: {
    myColor() {
      return this.clicked == false ? "green" : "red";
      //   return "green";
    }
  },
  methods: {
    change() {
      this.clicked = !this.clicked;
      this.$emit("inactivate", this.clicked, this.myIngredient);
    }
  }
};
</script>

<style></style>

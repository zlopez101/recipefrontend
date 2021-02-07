<template>
  <v-chip @click="change" outlined :color="myColor">{{ ingredient }}</v-chip>
</template>

<script>
export default {
  name: "baseIngredient",
  data() {
    return {
      clicked: false
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
    }
  }
};
</script>

<style></style>

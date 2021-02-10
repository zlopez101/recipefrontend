<template>
  <div>
    <v-chip-group column>
      <baseIngredient
        v-on:inactivate="onInactivate"
        v-for="item in groceries"
        :key="item.from + item.ingredient"
        :ingredient="item"
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

<template>
  <div>
    <v-toolbar dense floating>
      <v-text-field label="New Grocery Item" single-line></v-text-field>
    </v-toolbar>
    <GroceryList v-on:onInactivate="onInactivate" :groceries="groceryList" />
    <v-btn @click="makeFinalList" color="warning">Sort</v-btn>
    <v-spacer></v-spacer>
    <v-btn>Add an ingredient</v-btn>
  </div>
</template>

<script>
import GroceryList from "@/components/GroceryList.vue";
import { mapState } from "vuex";
export default {
  name: "PreviewGrocery",
  components: {
    GroceryList
  },
  data() {
    return {
      myInactivations: []
    };
  },
  computed: mapState(["groceryList"]),
  methods: {
    makeFinalList() {
      // dispatch the api call from the vuex store tbd
      // console.log(this.exportIngredients());
      this.$store.dispatch("makeTheList", this.exportIngredients());
      console.log("made the final list");
      this.$router.push({ name: "GroceryList" });
    },
    onInactivate(clicked, ingredient) {
      if (clicked) {
        this.myInactivations.push(ingredient);
      } else {
        this.myInactivations.splice(
          this.myInactivations.indexOf(ingredient),
          1
        );
      }
    },
    exportIngredients() {
      return this.groceryList.filter(
        ingredient => !this.myInactivations.includes(ingredient)
      );
    }
  }
};
</script>

<style></style>

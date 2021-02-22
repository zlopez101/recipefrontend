<template>
  <div>
    <v-toolbar dense floating>
      <v-text-field
        @keyup.enter="manuallyAddIngredient"
        label="New Grocery Item"
        v-model="addingThisIngredient"
        single-line
      ></v-text-field>
    </v-toolbar>
    <GroceryList
      v-on:onInactivate="onInactivate"
      v-for="label in Object.keys(this.list)"
      :key="label"
      :title="label"
      :groceries="list[label]"
    />
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
      addingThisIngredient: "",
      myInactivations: []
    };
  },
  computed: mapState({
    list: state => state.groceries.list
  }),
  methods: {
    makeFinalList() {
      // dispatch the api call from the vuex store tbd
      this.$store.dispatch("makeTheList", this.exportIngredients());
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
      return this.list.Groceries.filter(
        ingredient => !this.myInactivations.includes(ingredient)
      );
    },
    manuallyAddIngredient() {
      this.$store.dispatch("pushIngredients", [this.addingThisIngredient]);
      this.addingThisIngredient = "";
    }
  }
};
</script>

<style></style>

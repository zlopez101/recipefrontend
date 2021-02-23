<template>
  <div>
    <v-toolbar dense floating>
      <v-text-field
        @keyup.enter="manuallyAddIngredient"
        label="New Grocery Item"
        v-model="addingThisIngredient.ingredient"
        single-line
      ></v-text-field>
    </v-toolbar>
    <ingredientList
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
let id = 1;
import ingredientList from "@/components/ingredientList.vue";
import { mapState } from "vuex";
export default {
  name: "PreviewGrocery",
  components: {
    ingredientList
  },
  data() {
    return {
      addingThisIngredient: {
        ingredient: "",
        active: true,
        from: "UserCreated",
        id: id++
      },
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
    exportIngredients() {
      return this.list.Groceries.filter(
        ingredient => !this.myInactivations.includes(ingredient)
      );
    },
    manuallyAddIngredient() {
      this.$store.dispatch("pushIngredients", [this.addingThisIngredient]);
      // need to reset the ingredient, otherwise the store contains a reference to it
      this.resetManualIngredient();
    },
    resetManualIngredient() {
      this.addingThisIngredient = {
        ingredient: "",
        active: true,
        from: "UserCreated",
        id: id++
      };
    }
  }
};
</script>

<style></style>

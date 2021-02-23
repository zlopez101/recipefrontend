<template>
  <div>
    <v-toolbar floating>
      <v-text-field
        @keyup.enter="manuallyAddIngredient"
        label="New Grocery Item"
        v-model="addingThisIngredient.ingredient"
        single-line
      ></v-text-field>
    </v-toolbar>
    <ingredientList
      v-on:toggleActivation="toggleActivation"
      v-for="label in Object.keys(this.list)"
      :key="label"
      :title="label"
      :groceries="list[label]"
    />
    <v-btn @click="sort" color="warning">Sort</v-btn>
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
        from: "UserCreated"
      }
    };
  },
  computed: mapState({
    list: state => state.groceries.list,
    token: state => state.user.token
  }),
  methods: {
    sort() {
      // dispatch the api call from the vuex store tbd
      this.$store.dispatch("makeTheList");
    },
    exportIngredients() {
      return this.list.Groceries.filter(
        ingredient => !this.myInactivations.includes(ingredient)
      );
    },
    manuallyAddIngredient() {
      this.addingThisIngredient.id = this.token.concat(id.toString());
      this.$store.dispatch("pushIngredients", [this.addingThisIngredient]);
      // need to reset the ingredient, otherwise the store contains a reference to it
      this.resetManualIngredient();
      id++;
    },
    resetManualIngredient() {
      this.addingThisIngredient = {
        ingredient: "",
        active: true,
        from: "UserCreated"
      };
    },
    toggleActivation(ingredient) {
      this.$store.dispatch("toggleActivation", ingredient);
    }
  }
};
</script>

<style></style>

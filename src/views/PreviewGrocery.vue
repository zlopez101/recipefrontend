<template>
  <div>
    <GroceryList v-on:onInactivate="onInactivate" :groceries="groceryList" />
    <v-btn @click="makeFinalList" color="warning">Sort</v-btn>
  </div>
</template>

<script>
import GroceryList from "@/components/GroceryList.vue";
// import router from "../router/index.js";
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
      console.log("making the final list");
      //   this.$store.dispatch("makeTheList");
      //   router.push({ name: "GroceryList" });
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
    }
  }
};
</script>

<style></style>

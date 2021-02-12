<template>
  <div>
    <GroceryList
      v-for="label in Object.keys(this.finalList)"
      :key="label"
      :title="label"
      :groceries="finalList[label]"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import GroceryList from "@/components/GroceryList.vue";
export default {
  name: "FinalGroceryList",
  components: {
    GroceryList
  },
  computed: mapState(["finalList"])
};
</script>

<style></style>

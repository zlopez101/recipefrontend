<template>
  <div>
    <GroceryList
      v-for="label in Object.keys(this.list)"
      :key="label"
      :title="label"
      :groceries="list[label]"
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
  computed: mapState({
    list: state => state.groceries.list
  })
};
</script>

<style></style>

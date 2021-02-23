<template>
  <div>
    <ingredientList
      v-for="label in Object.keys(this.list)"
      :key="label"
      :title="label"
      :groceries="list[label]"
    />
  </div>
</template>

<script>
import { mapState } from "vuex";
import ingredientList from "@/components/ingredientList.vue";
export default {
  name: "FinalGroceryList",
  components: {
    ingredientList
  },
  computed: mapState({
    list: state => state.groceries.list
  })
};
</script>

<style></style>

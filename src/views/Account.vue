<template>
  <div>
    <h1>Account Page</h1>
    <v-btn @click="callBilling" color="success">Billing</v-btn>
  </div>
</template>

<script>
import RecipeService from "@/services/RecipeService.js";
export default {
  name: "Account",
  methods: {
    callBilling() {
      RecipeService.billing().then(response => {
        location.href = response.data.url;
      });
    }
  }
};
</script>

<style></style>

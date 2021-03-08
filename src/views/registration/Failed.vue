<template>
  <div><span>You failed</span></div>
</template>

<script>
export default {
  name: "Failed",
  data() {
    return {
      active: false
    };
  },
  created() {
    this.$store.dispatch("");
  }
};
</script>

<style></style>

<template>
  <v-app>
    <Bar :user="user" />
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Bar from "@/components/Bar.vue";
import { mapState } from "vuex";
export default {
  components: {
    Bar
  },
  computed: mapState(["user"])
};
</script>

<style>
a {
  text-decoration: none;
}
</style>

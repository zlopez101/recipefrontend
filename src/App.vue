<template>
  <v-app>
    <Bar :user="this.token" />
    <v-main>
      <v-container>
        <router-view></router-view>
      </v-container>
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
  computed: mapState({
    token: state => state.user.token
  })
};
</script>

<style>
a {
  text-decoration: none;
  color: snow;
}
</style>

<template>
  <v-app>
    <v-app-bar app color="primary-dark" dark>
      <div>
        <router-link to="/">Recipes</router-link> |
        <router-link to="/about">About</router-link>
      </div>
      <v-spacer></v-spacer>

      <router-link to="/preview">Preview your Grocery List</router-link>
    </v-app-bar>

    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script></script>

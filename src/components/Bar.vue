<template>
  <div>
    <v-app-bar app color="indigo accent-3" dark dense>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <v-toolbar-title>Recipes Now</v-toolbar-title>
      <!-- <router-link to="/">Recipes</router-link>
      <v-spacer></v-spacer>
      <router-link to="/preview">Grocery List</router-link> -->
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        Add a recipe
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-magnify</v-icon>
          </v-btn>
        </template>
        Search for a recipe
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-format-list-checkbox</v-icon>
          </v-btn>
        </template>
        Grocery List
      </v-tooltip>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn v-bind="attrs" v-on="on" icon>
            <v-icon>mdi-dots-vertical</v-icon>
          </v-btn>
        </template>
        Logout
      </v-tooltip>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list nav dense>
        <v-list-item-group
          v-model="group"
          active-class="deep-purple--text text--accent-4"
        >
          <router-link to="/account">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-account</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Account</v-list-item-title>
            </v-list-item>
          </router-link>
          <router-link to="/settings">
            <v-list-item>
              <v-list-item-icon>
                <v-icon>mdi-cog</v-icon>
              </v-list-item-icon>
              <v-list-item-title>Settings</v-list-item-title>
            </v-list-item>
          </router-link>
        </v-list-item-group>
      </v-list>
    </v-navigation-drawer>
    <v-dialog v-model="dialog" max-width="500">
      <v-card>
        <v-container>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="recipeName" label="Recipe Name">
              </v-text-field>
            </v-col>
            <v-col cols="6">
              <span>Not Required, we can get the name from the URL</span>
            </v-col>
          </v-row>
          <v-row>
            <v-col cols="6">
              <v-text-field v-model="recipeUrl" label="URL for recipe">
              </v-text-field>
            </v-col>
            <v-col cols="6">
              <span>Required</span>
            </v-col>
          </v-row>
          <v-btn @click="addRecipe" color="success">Add to Recipe Book</v-btn>
        </v-container>
      </v-card>
    </v-dialog>
  </div>
</template>

<script>
export default {
  props: {
    user: {
      type: String,
      default: null
    }
  },
  data() {
    return {
      drawer: false,
      group: null,
      dialog: false,
      recipeName: "",
      recipeUrl: ""
    };
  },
  methods: {
    addRecipe() {
      this.$store.dispatch("makeRecipe", this.recipeUrl);
    }
  }
};
</script>

<style></style>

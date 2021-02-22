<template>
  <div>
    <v-app-bar app color="indigo accent-3" dark dense>
      <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
      <router-link to="/recipes">
        <v-toolbar-title>Recipes</v-toolbar-title>
      </router-link>
      <v-spacer></v-spacer>
      <div v-if="user">
        <base-button
          :icon="buttons[0].icon"
          :toolTipText="buttons[0].tooltiptext"
          v-on:updated="dialog = !dialog"
        />
        <base-button
          :icon="buttons[1].icon"
          :toolTipText="buttons[1].tooltiptext"
          v-on:updated="search"
        />
        <base-button
          :icon="buttons[2].icon"
          :toolTipText="buttons[2].tooltiptext"
          v-on:updated="grocery"
        />
        <base-button
          :icon="buttons[3].icon"
          :toolTipText="buttons[3].tooltiptext"
          v-on:updated="logout"
        />
      </div>
      <div v-else>
        <base-button
          :icon="buttons[4].icon"
          :toolTipText="buttons[4].tooltiptext"
          v-on:updated="login"
        />
      </div>
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
import baseButton from "@/components/baseButton.vue";
export default {
  components: {
    baseButton
  },
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
      recipeUrl: "",
      buttons: [
        {
          icon: "mdi-plus",
          tooltiptext: "Add a recipe",
          method: "addRecipe"
        },
        {
          icon: "mdi-magnify",
          tooltiptext: "Search for a recipe",
          method: "search"
        },
        {
          icon: "mdi-format-list-checkbox",
          tooltiptext: "Grocery List",
          method: "grocery"
        },
        {
          icon: "mdi-account-arrow-right",
          tooltiptext: "Logout",
          method: "logout"
        },
        {
          icon: "mdi-login",
          tooltiptext: "login",
          method: ""
        }
      ]
    };
  },
  methods: {
    addRecipe() {
      this.$store.dispatch("makeRecipe", this.recipeUrl);
    },
    logout() {
      this.$store.dispatch("logout");
    },
    search() {
      console.log("Searching...");
    },
    grocery() {
      this.$router.push({ name: "PreviewGrocery" });
    },
    login() {
      this.$router.push({ name: "login" });
    }
  }
};
</script>

<style></style>

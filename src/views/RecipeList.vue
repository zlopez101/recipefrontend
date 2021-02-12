<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h1>My Recipes</h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-btn @click="drawer = !dialog" color="success">Add a Recipe</v-btn>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-row v-for="recipe in recipes" :key="recipe.id">
        <v-col>
          <recipeCard :recipe="recipe" />
        </v-col>
      </v-row>
      <v-dialog v-model="dialog">
        <v-form>
          <v-container>
            <v-row>
              <v-col cols="1">
                <v-text-field v-model="recipeName" label="Recipe Name">
                </v-text-field>
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="1">
                <v-text-field v-model="recipeUrl" label="URL for recipe">
                </v-text-field>
              </v-col>
            </v-row>
          </v-container>
        </v-form>
      </v-dialog>
    </v-container>
  </div>
</template>

<script>
import recipeCard from "../components/recipeCard.vue";
import { mapState } from "vuex";
export default {
  name: "RecipeList",
  data() {
    return {
      dialog: false,
      recipeName: "",
      recipeUrl: "",
      recipeSource: ""
    };
  },
  components: {
    recipeCard
  },
  created() {
    this.$store.dispatch("fetchRecipes");
  },
  computed: mapState(["recipes"])
};
</script>

<style></style>

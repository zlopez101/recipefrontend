<template>
  <div>
    <v-container>
      <v-row>
        <v-col>
          <h1>My Recipes</h1>
        </v-col>
        <v-spacer></v-spacer>
        <v-col>
          <v-btn @click="dialog = !dialog" color="success">Add a Recipe</v-btn>
        </v-col>
      </v-row>
      <v-spacer></v-spacer>
      <v-row v-for="recipe in recipes" :key="recipe.id">
        <v-col>
          <recipeCard :recipe="recipe" />
        </v-col>
      </v-row>
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
      recipeUrl: ""
    };
  },
  components: {
    recipeCard
  },
  created() {
    this.$store.dispatch("fetchRecipes");
  },
  computed: mapState(["recipes"]),
  methods: {
    addRecipe() {
      this.$store.dispatch("makeRecipe", this.recipeUrl);
    }
  }
};
</script>

<style></style>

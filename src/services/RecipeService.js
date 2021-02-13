import axios from "axios";

const apiClient = axios.create({
  // baseURL: "http://localhost:5000/api",
  baseURL: "https://stark-oasis-48982.herokuapp.com/api",
  withCredentials: false,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getRecipes() {
    return apiClient.get("/recipes");
  },

  getRecipe(id) {
    return apiClient.get("/recipe/" + id);
  },
  makeRecipe(url) {
    return apiClient.post("/recipes", { url: url });
  },
  makeList(ingredients) {
    return apiClient.post("/groceryList", { ingredients: ingredients });
  }
};

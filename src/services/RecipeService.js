import axios from "axios";

const apiClient = axios.create({
  // baseURL: "https://my-json-server.typicode.com/zlopez101/json-server",
  baseURL: "http://127.0.0.1:5000/",
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
  makeList(ingredients) {
    return apiClient.post("/groceryList", { ingredients: ingredients });
  }
};

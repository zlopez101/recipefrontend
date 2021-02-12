import axios from "axios";

const apiClient = axios.create({
  // baseURL: "https://my-json-server.typicode.com/zlopez101/json-server",
  // baseURL: "https://recipenow.azurewebsites.net/api",
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
  makeList(ingredients) {
    return apiClient.post("/groceryList", { ingredients: ingredients });
  }
};

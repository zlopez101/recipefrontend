import axios from "axios";

let apiClient = axios.create({
  baseURL: "http://localhost:5000/api",
  // baseURL: "https://stark-oasis-48982.herokuapp.com/api",
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
    return apiClient.get("/recipes/" + id);
  },
  makeRecipe(url) {
    return apiClient.post("/recipes", { url: url });
  },
  deleteRecipe(id) {
    return apiClient.delete("/recipes" + id);
  },
  makeList(ingredients) {
    return apiClient.post("/groceryList", { ingredients: ingredients });
  },
  login(credentials) {
    return apiClient.post("/login", credentials);
  },
  register(credentials) {
    return apiClient.post("/register", credentials);
  },
  sessionId() {
    return apiClient.get("/create-checkout-session");
  },
  logout() {
    return apiClient.post("/logout");
  },
  setToken(token) {
    apiClient.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  }
};

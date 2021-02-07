import axios from "axios";

const apiClient = axios.create({
  baseURL: "https://my-json-server.typicode.com/zlopez101/json-server",
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
  }
};

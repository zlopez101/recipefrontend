import RecipeService from "@/services/RecipeService.js";

export const state = {
  token: null
};
export const mutations = {
  SET_TOKEN(state, token) {
    state.token = token;
    localStorage.setItem("user", JSON.stringify(token));
    RecipeService.setToken(token);
  },
  REMOVE_TOKEN() {
    localStorage.removeItem("user");
    location.reload();
  }
};
export const actions = {
  register({ commit }, userData) {
    RecipeService.register(userData).then(response => {
      commit("SET_TOKEN", response.data);
    });
  },
  login({ commit }, userData) {
    return RecipeService.login(userData).then(response => {
      commit("SET_TOKEN", response.data);
    });
  },
  logout({ commit }) {
    RecipeService.logout().then(() => {
      commit("REMOVE_TOKEN");
    });
  }
};
export const getters = {};

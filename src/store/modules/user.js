import RecipeService from "@/services/RecipeService.js";
export const state = {
  token: null,
  sessionId: null
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
  },
  SET_SESSION_ID(state, sessionId) {
    state.sessionId = sessionId;
  }
};
export const actions = {
  registerAndStripe({ commit }, registerObject) {
    RecipeService.register(registerObject.user).then(response => {
      commit("SET_TOKEN", response.data.token);
      commit("SET_SESSION_ID", response.data.sessionId);
      registerObject.toStripe();
    });
  },
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

export const state = {
  notifications: []
};
let netID = 1;
export const mutations = {
  PUSH(state, notification) {
    state.notifications.push({ ...notification, id: netID++ });
  },
  POP(state, notificationToRemove) {
    state.notifications = state.notifications.filter(
      notification => notification.id !== notificationToRemove.id
    );
  }
};
export const actions = {
  add({ commit }, notification) {
    commit("PUSH", notification);
  },
  remove({ commit }, notificationToRemove) {
    commit("POP", notificationToRemove);
  }
};
export const getters = {};

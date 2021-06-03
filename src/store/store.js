import { createStore } from "vuex";

export default createStore({
  state: {
    totalPerks: 0
  },
  mutations: {
    INCREMENT_PERKS(state) {
      state.totalPerks += 1
    },
    DECREMENT_PERKS(state, value) {
      state.totalPerks -= value
    }
  },
  actions: {},
  modules: {},
});

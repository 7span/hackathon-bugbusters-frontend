export const state = () => ({
  user: {},
});

export const mutations = {
  setUser(state, data) {
    state.user = data;
  },
  resetStore(state) {
    state = {
      user: {},
    };
  },
};

export const getters = {
  getUser(state) {
    return state.user;
  },
};

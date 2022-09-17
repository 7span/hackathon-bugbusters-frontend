export const state = () => ({
  isAuth: false,
});

export const mutations = {
  setIsAuth(state, data) {
    console.log("CHECK ROUTE==>", state);
    state.isAuth = data;
  },
};

export const getters = {
  checkAuth(state) {
    return state.isAuth;
  },
};

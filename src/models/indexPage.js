
export default {

  namespace: 'indexPage',

  state: {
    isMenuCollapsed: false,
  },

  reducers: {
    toggleCollapse(state) {
      state.isMenuCollapsed = !state.isMenuCollapsed;
      return { ...state };
    },
  },
};
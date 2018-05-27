
export default {

  namespace: 'indexPage',

  state: {
    isMenuCollapsed: false,
  },

  // subscriptions: {

  // },

  // effects: {
  //     *fetch({ payload }, { call, put }) {  // eslint-disable-line
  //       yield put({ type: 'save' });
  //     },
  // },

  reducers: {
    toggleCollapse(state) {
      console.log(state)
      state.isMenuCollapsed = !state.isMenuCollapsed;
      return { ...state };
    },
  },

};
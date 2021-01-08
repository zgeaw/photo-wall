import Vue from "vue";
import Vuex from "vuex";
Vue.use(Vuex);
let hasCondition = (state, formId, needIndex = false) => {
  let index = state.processConditions.findIndex(d => d.formId === formId);
  return needIndex ? index : index > -1;
};
const store = new Vuex.Store({
  state: {
    token: ""
  },
  mutations: {
    // 设置token
    setToken(state, token = "") {
      state.token = token;
    }
  }
});

export default store;

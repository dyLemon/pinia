import { createStore } from "vuex";
import moduleA from "./moduleA";
export default createStore({
  //全局state
  state() {
    return {
      vuexName: "辣条",
      vuexAge: 4,
    };
  },

  //修改state值
  mutations: {
    setDogName(state, { name, age }) {
      state.vuexName = name;
      state.vuexAge = age;
    },
  },

  //commit mutations 异步操作
  actions: {
    async getState({ commit }, payload) {
      //模拟异步任务拿到数据
      const result = await new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve({
            name: "小哆",
            age: 3,
          });
        }, 200);
      });

      commit("setDogName", result);
    },
  },

  //计算属性
  getters: {
    sum(state) {
      return 1;
    },
  },

  //将store分割成多个模块
  modules: {
    moduleA,
  },
});

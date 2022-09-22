const moduleA = {
  //防止模块的mutation或者actions中的方法重名，modules一般会采用命名空间的方式
  namespaced: true,
  state() {
    return {
      moduleAName: "模块a",
    };
  },
  mutations: {
    setName(state: any, payload: string) {
      state.moduleAName = payload;
    },
  },
};
export default moduleA;

import { defineStore } from "pinia";

export const piniaB = defineStore("piniaB", {
  state: () => {
    return {
      piniaBName: "我是仓库B",
    };
  },
  actions: {
    setPiniaAData(name: string, age: number) {},
  },
  getters: {
    sum(state) {},
  },
});

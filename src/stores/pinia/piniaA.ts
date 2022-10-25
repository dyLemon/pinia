import { defineStore, storeToRefs } from "pinia";
//引入仓库B,store之间互相调用
import { piniaB } from "./piniaB.ts";

/**
 * Pinia没有modules，如果想使用多个store，直接定义多个store传入不同的id即可
 */
export const piniaA = defineStore("piniaA", {
  /**
   *必须是函数，产生局部作用域，避免数据状态交叉污染
   * 最好使用箭头函数，有完整TS类型推断的
   */
  state: () => {
    return {
      piniaName: "辣条",
      piniaAge: 4,
    };
  },
  actions: {
    setPiniaAData(name: string, age: number) {
      this.piniaName = name;
      this.piniaAge = age + 1;

      this.sayHi("互相调用方法");

      // 调用仓库B 的值
      // const { piniaBName } = storeToRefs(piniaB());
      // console.log(piniaBName.value);
      console.log(piniaB().piniaBName);
    },
    sayHi(mess: string) {
      console.log("setPiniaAData方法中调用了sayHi", mess);
    },
  },
  /**
   * 计算属性 缓存功能
   */
  getters: {
    piniaAgeSum(state) {
      return state.piniaAge + 1;
    },
  },

  /**
   * 数据持久化，开启缓存
   */
  persist: {
    //是否开始缓存，true就默认对整个store的state进行sessionStorage储存
    enabled: true,
    strategies: [
      {
        //自定义缓存的key值
        key: "myDogName",
        //储存方式，默认是 sessionStorage
        storage: localStorage,
        //指定缓存的字段
        paths: ["piniaName"],
      },
    ],
  },
});

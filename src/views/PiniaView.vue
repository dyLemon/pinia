<script setup lang="ts">
import { piniaA } from "@/stores/pinia/piniaA";
import { storeToRefs } from "pinia";

const piniaAStore = piniaA();

/**
 * 解构
 * storeToRefs解决传统es6解构失去响应式问题
 */
const { piniaName, piniaAge, piniaAgeSum } = storeToRefs(piniaAStore);

// console.log(piniaName.value);
// console.log(piniaAStore.piniaName);

// /**
//  * 直接修改state
//  * 直接赋值和使用$patch（可以修改多个，当然也可修改一个）
//   推荐$patch （官网明确表明patch是经过优化的，会加快修改速度，对性能有很大好处）
//  */
// const updateSomeDetail = () => {
//   // piniaAStore.piniaName = "崽崽"; //直接赋值修改state

//   //使用$patch 修改多个
//   piniaAStore.$patch({
//     piniaName: "崽崽",
//     piniaAge: piniaAge.value + 1,
//   });

//   //也支持单个修改
//   // piniaAStore.$patch({
//   //   piniaName: "崽崽",
//   // });

//   //也可以使用函数的方式修改
//   // piniaAStore.$patch((state) => {
//   //   state.piniaName = "崽崽";
//   //   state.piniaAge = piniaAge.value + 1;
//   // });
// };

/**
 * 在actions修改,推荐，
 */
const updateSomeDetail = () => {
  //不需要调用dispatch,直接调用store的方法即可
  piniaAStore.setPiniaAData("小哆", piniaAge.value);
};

/**
 * 重置为初始值
 */
const resetBtn = () => {
  piniaAStore.$reset();
};
</script>

<template>
  <div class="about">
    <div>使用pinia</div>
    <br />
    <div>{{ piniaName }}---{{ piniaAge }}岁</div>
    <br />
    <div>计算属性：{{ piniaAgeSum }}</div>
    <br />
    <el-button type="primary" @click="updateSomeDetail">修改</el-button>
    <el-button type="primary" @click="resetBtn">重置</el-button>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    align-items: center;
  }
}
</style>

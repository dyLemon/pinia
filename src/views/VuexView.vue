<script setup lang="ts">
//vuex
import { useStore } from "vuex";

const { state, commit, dispatch, getters } = useStore();

//使用计算属性
// console.log(getters.sum);
const updateSomeDetail = () => {
  //修改
  // store.commit("setDogName", { name: "崽崽", age: 2 });
  dispatch("getState");
  //改模块a
  // commit("setName", "改moduleA的值");
  commit("moduleA/setName", "改moduleA的值");
};
</script>

<template>
  <div>
    <div>使用vuex</div>
    <br />
    <div>仓库值：{{ state.vuexName }} —— {{ state.vuexAge }}岁</div>
    <br />
    <div>模块A:{{ state.moduleA.moduleAName }}</div>
    <br />
    <br />
    <el-button type="primary" @click="updateSomeDetail">修改</el-button>
  </div>
</template>

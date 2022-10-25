<template>
  <div>
    <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      router
      mode="horizontal"
      @select="handleSelect"
    >
      <el-menu-item :index="item.key" v-for="item in menu" :key="item.key">{{
        item.name
      }}</el-menu-item>
    </el-menu>
  </div>

  <div class="main">
    <router-view v-slot="{ Component }">
      <!-- <keep-alive> -->
      <component :is="Component" />
      <!-- </keep-alive> -->
    </router-view>
  </div>
</template>

<script lang="ts" setup>
import { RouterView, useRouter } from "vue-router";
import { ref, onMounted } from "vue";
const activeIndex = ref("/");

const menu = [
  {
    key: "/about",
    name: "pinia",
  },
  {
    key: "/other",
    name: "组件",
  },
  {
    key: "/",
    name: "vuex",
  },
];
const router = useRouter();

onMounted(() => {
  activeIndex.value = "/about";
  router.push("/about");
});

const handleSelect = (key: string) => {
  activeIndex.value = key;
};
</script>

<style>
.main {
  min-height: calc(100vh-100);
  margin-top: 20px;
}
</style>

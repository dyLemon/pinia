<script setup lang="ts">
import { piniaA } from "@/stores/pinia/piniaA";
const piniaAStore = piniaA();
// piniaAStore.piniaName = "崽崽";
</script>

<template>
  <div class="about">
    <div>{{ piniaAStore.piniaName }}---{{ piniaAStore.piniaAge }}岁</div>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    align-items: center;
  }
}
</style>

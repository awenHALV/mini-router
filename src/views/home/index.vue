<template>
  <div>
    这是首页
    <img
      alt="Vue logo"
      src="../../assets/logo.png"
    >
    <button @click="addCount">点击+1</button>
    {{count}}
  </div>
</template>

<script setup>
import { ref } from 'vue';
let count = ref(0);
function addCount() {
  count.value++;
}
</script>

<style lang="scss" scoped>
</style>
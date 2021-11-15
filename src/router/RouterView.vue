<template>
  <div>
    <component :is="comp"></component>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { useRouter } from './router';
let router = useRouter();
console.log(router, 'router')
const comp = computed(() => {
  const route = router.routes.find(route => route.path === router.current.value);
  console.log(route)
  return route ? route.component : null
})
</script>

<style lang="scss" scoped>
</style>
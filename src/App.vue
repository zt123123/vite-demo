<template>
  <router-view />
  <router-link to="/">home</router-link> |
  <router-link to="/about">about</router-link>
</template>

<script setup>
import { onMounted } from "vue";
console.log(123);
onMounted(() => {
  document.addEventListener("click", console.log);
});
</script>

<style></style>

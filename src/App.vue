<template>
  <Home />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
</template>

<script setup lang="ts">
import Home from '@/components/Home.vue';
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Roboto");
#app {
  font-family: Arial, Roboto, Avenir, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
  background: #ffffff;
}

@media (prefers-color-scheme: dark) {
  #app,
  html {
    background: #181a1b;
    color: #aec2d3;
  }
}
</style>

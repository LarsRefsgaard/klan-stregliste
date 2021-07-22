<template>
  <Home />
  <link href="https://fonts.googleapis.com/icon?family=Material+Icons" rel="stylesheet" />
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Home from '@/components/Home.vue';

export default defineComponent({
  name: 'App',
  components: {
    Home,
  },
});
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Roboto');

#app {
  font-family: Arial, Roboto, Avenir, Helvetica, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

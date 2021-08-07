<template>
  <div>
    <h1>Name</h1>
    <h1>Beer</h1>
    <h1>Cider</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const handleScroll = () => {
      console.log('hi');
    };

    window.addEventListener('scroll', handleScroll);
  },
});
</script>

<style scoped>
h1 {
  font-size: calc(var(--text-size) - 0.5vw);
  margin: 0;
}
</style>

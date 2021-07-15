<template>
  <div class="layout">
    <div>
      <h2>{{ user['scout-name'] }}</h2>
    </div>
    <AddAndSubtractDrinkButtons />
    <AddAndSubtractDrinkButtons />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import AddAndSubtractDrinkButtons from './AddAndSubtractDrinkButtons.vue';

export default defineComponent({
  props: {
    user: {},
  },
  components: { AddAndSubtractDrinkButtons },
});
</script>

<style scoped>
</style>

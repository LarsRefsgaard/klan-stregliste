<template>
  <div class="layout">
    <div>
      <h2>{{ user['scout-name'] }}</h2>
    </div>
    <div class="drinks-layout">
      <DrinkNumber count="1" />
      <DrinkSetter />
    </div>
    <div class="drinks-layout">
      <DrinkNumber count="1" />
      <DrinkSetter />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import DrinkSetter from './DrinkSetter.vue';
import DrinkNumber from './DrinkNumber.vue';

export default defineComponent({
  props: {
    user: {},
  },
  setup() {
    return {};
  },
  components: { DrinkSetter, DrinkNumber },
});
</script>

<style scoped>
.drinks-layout {
  display: grid;
  grid-template-columns: 1fr 1fr;
}
</style>

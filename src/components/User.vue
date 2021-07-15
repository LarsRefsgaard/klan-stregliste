<template>
  <div class="layout">
    <div>
      <h2>{{ user['scout-name'] }}</h2>
    </div>
    <div class="button-layout">
      <button>+</button>
      <button>-</button>
    </div>
    <div class="button-layout">
      <button>+</button>
      <button>-</button>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    user: {},
  },
  setup(props) {
    console.log(props.user);
  },
});
</script>

<style scoped>
 .button-layout {
  display: grid;
  grid-template-columns: 1;
  width: 50%;
 }
</style>

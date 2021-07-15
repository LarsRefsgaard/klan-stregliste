<template>
  <div class="layout">
    <div>
      <h2>{{ user['scout-name'] }}</h2>
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

<style>
</style>

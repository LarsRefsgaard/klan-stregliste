<template>
  <p class="drink-count">
    {{ count }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    count: Number,
  },
});
</script>

<style>
.drink-count {
  font-size: 4em;
  font-weight: 800;
  margin: 0px auto;
  padding: 0px;
}
</style>

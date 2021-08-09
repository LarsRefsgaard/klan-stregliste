<template>
  <p class="user-text" style="font-size: var(--drink-number)">
    {{ count || 0 }}
  </p>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    count: {
      type: Number,
      required: true,
      default: 0,
    },
  },
});
</script>

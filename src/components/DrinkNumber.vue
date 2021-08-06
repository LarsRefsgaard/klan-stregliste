<template>
  <p class="user-text" style="font-size: 14vw; font-weight: bold;">
    {{ count || 0 }}
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

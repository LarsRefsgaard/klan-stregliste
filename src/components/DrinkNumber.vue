<template>
  <p class="user-text">
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

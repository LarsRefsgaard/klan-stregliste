<template>
  <p class="user-text" style="font-size: var(--drink-number)">
    {{ count || 0 }}
  </p>
</template>

<script setup lang="ts">
// eslint-disable-next-line no-undef
const props = defineProps({
  count: Number,
});
</script>

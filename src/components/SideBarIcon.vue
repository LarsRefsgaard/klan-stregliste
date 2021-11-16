<template>
  <div class="sidebar-icon group">
    <span class="material-icons-round">{{ icon }}</span>
    <span v-if="tooltip" class="sidebar-tooltip group-hover:scale-100">{{ tooltip }}</span>
  </div>
</template>

<script setup lang="ts">
withDefaults(defineProps<{ icon: string, tooltip?: string }>(), { tooltip: 'Tooltip 💡' });
</script>

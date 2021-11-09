<template>
	<p class="user-text" style="font-size: var(--drink-number)">{{ count || 0 }}</p>
</template>

<script setup lang="ts">
	const props = defineProps<{ count: number }>();
</script>

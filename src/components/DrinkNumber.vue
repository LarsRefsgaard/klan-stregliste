<template>
	<p class="content-center font-bold user-text md:mx-4" style="font-size: var(--drink-number)">{{ count || 0 }}</p>
</template>

<script setup lang="ts">
	const props = defineProps<{ count: number }>();
</script>

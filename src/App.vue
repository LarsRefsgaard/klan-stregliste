<template>
	<Home />
	<link href="https://fonts.googleapis.com/icon?family=Material+Icons+Round" rel="stylesheet" />
</template>

<script setup lang="ts">
	import Home from '@/components/Home.vue';
</script>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Roboto');
	#app {
		font-family: Arial, Roboto, Avenir, Helvetica, sans-serif;
		-webkit-font-smoothing: antialiased;
		-moz-osx-font-smoothing: grayscale;
		/* text-align: center; */
		background: #181a1b;
		color: #aec2d3;
	}

	@media (prefers-color-scheme: light) {
		#app {
			color: #2c3e50;
			background: #ffffff;
		}
	}

	hr {
		width: 100%;
	}

	body {
		margin: 0;
		padding: 0;
	}
</style>

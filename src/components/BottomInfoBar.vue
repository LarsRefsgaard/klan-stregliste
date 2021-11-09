<template>
	<div class="navbar">
		<!-- {{ currentEvent.name }} -->
	</div>
	<!-- <div class="navbar" v-for="event in events" :key="event.id">
    <a href="{{event.id}}" class="active">{{ event.name }}</a>
  </div>-->
</template>

<style scoped>
	.navbar {
		background-color: rgb(214, 214, 214);
		overflow: hidden;
		position: fixed;
		bottom: 0;
		width: 100%;
		margin: 0;
		padding: 0;
	}

	/* Style the links inside the navigation bar */
	.navbar a {
		float: left;
		display: block;
		color: #000;
		text-align: center;
		padding: 6px 12px;
		text-decoration: none;
		font-size: 17px;
	}

	/* Change the color of links on hover */
	.navbar a:hover {
		background-color: #ddd;
		color: black;
	}

	/* Add a color to the active/current link */
	.navbar a.active {
		background-color: #646464;
		color: white;
	}
</style>

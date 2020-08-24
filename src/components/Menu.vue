<template>
	<div id="menu">
		<b-dropdown	text="Menu" dropleft size="sm" variant="dark">
			<!--<template v-slot:button-content>
				<fa-icon icon="bars" size="2x" style="color: white;" />
			</template>-->
			<b-dropdown-item  v-for="route in $router.options.routes" :key="route.path" @click="$router.push(route.path)">
				<router-link :to="route.path">
					{{ route.name }}
				</router-link>
			</b-dropdown-item>
		</b-dropdown>
	</div>
</template>

<script>
export default {
	name: 'Menu',
	data() {
		return {
			active: false
		}
	},
	methods: {
		activate() {
			this.active = !this.active
		}
	}
}
</script>

<style>
#hamburger {
	border-radius: 5px;
	width: 2em;
	background-color: white;
	margin: 6px;
}

#menu-btn {
	background-color: black;
	border-style: none;
	cursor: pointer;
}

#menu-list {
	position: fixed;
	right: 0em;
	width: 7em;
	opacity: 0.6;
	transition: 0.3s;
	background-color: black;
	padding-right: 2em;
}

ul {
	list-style: none;
}

</style>
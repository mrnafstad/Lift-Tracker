<template>
	<div id="calendar">
		<h4>Select a date to inspect your workouts</h4>
		<b-calendar v-model="value" @context="onContext" />
	</div>
</template>

<style scoped>
#calendar {
	padding: 5%;
}
</style>

<script>
export default {
	name: 'Home',
	data() {
		return {
			context: null, 
			value: ''
		}
	},
	methods: {
		onContext(ctx) {
			this.context = ctx
			console.log(this.value)
		}
	}
}
</script>
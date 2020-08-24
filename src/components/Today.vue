<template>
	<div>
		<b-table striped hover :items="exercises" />
	</div>
</template>

<style scoped>
div {
	padding-left: 10%;
	padding-right: 10%;
}
</style>

<script>
export default {
	name: 'Today',
	data() {
		return {
			selected: null,
			exercises: [
				{ Name: 'Bench press', weight: 80, effective_reps: 9},
				{ Name: 'Deadlifts', weight: 150, effective_reps: 4},
				{ Name: 'Squat', weight: 100, effective_reps: 12},
				{ Name: 'Pendlay Row', weight: 75, effective_reps: 15}
			]
		}
	}
}
</script>
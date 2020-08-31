<template>
	<div>
		<b-container v-if="this.currentLift">
		</b-container>
		<b-dropdown text="New Lift">
		<b-dropdown-item v-for="(exercise, idx) in exercises" :key="idx" @click="selectExercise(exercise)">
			{{ exercise.Name }}
			</b-dropdown-item>
		<b-button>Add new exercise</b-button>
		</b-dropdown>
	</div>
</template>

<style>
	
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	name: 'NewLift',
	methods: {
		...mapActions(['getExercises', 'setCurrentE']),
		selectExercise(exercise) {
			this.setCurrentE(exercise)
		}
	},
	computed: {
		...mapGetters(['currentLift', 'exercises'])
	},
	async created() {
		if (this.exercises.length === 0) {
			await this.getExercises()
		}
	}
}
</script>

<style scoped>
div {
	padding: 2%
}
</style>
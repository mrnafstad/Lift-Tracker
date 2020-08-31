<template>
	<div>
		<b-container class="bv-example-row" fluid="sm">
			<b-row>
				<b-col>
					<NewLift />
				</b-col>
			</b-row>
			<b-row v-if="currentLift">
				<b-col>
					<LiftLog />
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<style type="text/css">
	
</style>

<script>
import { mapGetters } from 'vuex'
import NewLift from '../components/NewLift.vue'
import LiftLog from '../components/LiftLog.vue'

export default {
	name: 'CurrentExercise',
	components: {
		NewLift,
		LiftLog,
	},
	computed: {
		...mapGetters(['currentLift'])
	}
}
</script>
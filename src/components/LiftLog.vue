<template>
	<div>

		<b-container fluid>
			<h3>{{ currentLift.Name }}</h3>

			<b-input-group>
				<b-input-group prepend="Weight">
					<b-form-input v-model="set.weight" placeholder="weight.." type="number" />
				</b-input-group>
				<b-input-group prepend="Reps">
					<b-form-input v-model="set.reps" placeholder="reps.." type="number" />
				</b-input-group>
				<b-input-group prepend="0" append="10">
					<b-form-input v-model="set.rpe" type="range" min="0" max="10" />
				</b-input-group>
				<p>RPE: {{ set.rpe }} </p>
			</b-input-group>
			<b-button @click="newSet(set)">Add set</b-button>

			<div>
				<p>Set	Weight	Reps 	RPE</p>
				<p v-for="(setprint, idx) in currentLift.Sets" :key="idx">{{idx + 1}}	 {{ setprint.weight }}	 {{ setprint.reps }}	 {{ setprint.rpe }}</p>
			</div>
			<b-row class="text left" >
				<b-col xs>
				<h5>Primary movers:</h5>
					<p v-for="(muscles, idx) in currentLift.Primary" :key="idx">{{ muscles }}</p>
				</b-col>
				<b-col xs>
					<h5>Secondary movers:</h5>
					<p v-for="(muscles, idx) in currentLift.Secondary" :key="idx">{{ muscles }}</p>
				</b-col>
			</b-row>
		</b-container>
	</div>
</template>

<style scoped>
p {
	margin-bottom: 0;
}
</style>

<script>
import { mapGetters, mapActions } from 'vuex'
export default {
	name: 'LiftLog',
	data() {
		return {
			set: {
				weight: null,
				reps: null,
				rpe: null
			}
		}
	},
	methods: {
		...mapActions(['newSet'])
	},
	computed: {
		...mapGetters(['currentLift'])
	}
}	
</script>
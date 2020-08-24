<template>
	<div id="profile">
		<h3>User overview</h3>
		<b-row >
			<b-col class="profile-part">
				<h4>Profile</h4>
				<b-row>
					<b-col align-self="center">
						Name:
					</b-col>
					<b-col id="privInfo" align-self="center">
						Halvor Nafstad
					</b-col>
				</b-row>
				<b-row>
					<b-col align-self="center">Age:</b-col>
					<b-col id="privInfo" align-self="center">29</b-col>
				</b-row>
				<b-row>
					<b-col align-self="center">Weekly volume:</b-col>
					<b-col id="privInfo" align-self="center">100</b-col>
				</b-row>
			</b-col>

			<b-col class="profile-part">
				<h4>Last 7 workouts</h4>
			</b-col>
		</b-row>
	</div>
</template>

<style>
#profile {
	padding: 5%;
}

.profile-part {
	background-color: snow;
}

#privInfo {
	color: red;
	font-family: Didot;
	font-style: oblique;
	padding: 5%;
}
</style>

<script>
export default {
	name: 'Profile'
}
</script>

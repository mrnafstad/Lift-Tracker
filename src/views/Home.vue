<template>
  <div id="home">
	<h3>Todays workout:</h3>
	<Today />
  </div>
</template>
<style scoped>
#home {
  margin: auto;
  padding: 5%;
}

h3 {
	font-family: Didot;
}

</style>

<script>
import Today from '../components/Today.vue'

export default {
	name: 'Home',
	components: {
		Today
	}
}
</script>


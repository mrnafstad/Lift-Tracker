<template>
  <v-container class="text-center">
      <v-date-picker color="black lighten-1" v-model="picker"></v-date-picker>
  </v-container>
</template>

<script>
export default {
    name: 'Calendar',
    data() {
        return {
            picker: new Date().toISOString().substr(0, 10)
        }
    }
}
</script>

<style>

</style>
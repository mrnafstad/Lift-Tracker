<template>
  <v-container class="text-center">
    <h3 v-if="getToday.length != 0">Todays workout</h3>
    <v-expansion-panels>
      <v-expansion-panel v-for="(exercise, idx) in getToday" :key="idx">
        <v-expansion-panel-header>{{
          exercise.exercise
        }}</v-expansion-panel-header>
        <v-expansion-panel-content>
          <v-row style="background-color: gainsboro; border-radius: 5px;">
            <v-col> Sets</v-col>
            <v-col> Reps</v-col>
            <v-col v-if="advanced">
              Eff. reps
            </v-col>
            <v-col>
              Vol 
            </v-col>
            <v-col v-if="advanced">
                Eff. vol
            </v-col>
          </v-row>
          <v-row>
            <v-col> {{ exercise.sets }} </v-col>
            <v-col> {{ exercise.reps }} </v-col>
            <v-col v-if="advanced">
              {{ exercise.effectiveReps }}
            </v-col>
            <v-col>
              {{ exercise.volume }}
            </v-col>
            <v-col v-if="advanced">
              {{ exercise.effectiveVolume }}
            </v-col>
          </v-row>
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-btn block @click="$router.push('/currentE')">Add exercise</v-btn>
  </v-container>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      selected: null
    };
  },
  computed: {
    ...mapGetters(["getToday", "advanced"])
  }
};
</script>

<style></style>

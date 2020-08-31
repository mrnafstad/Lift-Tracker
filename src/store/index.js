import Vue from 'vue'
import Vuex from 'vuex'
import db from '../firebaseConfig.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    todaysWorkout: [],
    exercises: [],
    currentExercise: null,
  },
  mutations: {
    setExercises: (state, exercises) => (state.exercises = exercises),
    newExercise: (state, exercise) => state.exercises.unshift(exercise),
    setCurrent: (state, exercise) => state.currentExercise = exercise,
    addSet: (state, set) => state.currentExercise.Sets.push(set)
  },
  actions: {
    async getExercises({ commit }) {
      await db.exercises.get().then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
          console.log(doc.id, doc.data())
          commit('newExercise', {
            id: doc.id,
            Name: doc.data().Name,
            Primary: doc.data().Primary,
            Secondary: doc.data().Secondary,
            Sets: []
          })
        })
      })
    },
    setCurrentE({ commit }, selection) {
      commit('setCurrent', selection)
      console.log(selection)
    },
    newSet({ commit }, set) {
      commit('addSet', set)
      console.log(set)
    }
  },
  getters: {
    currentLift: (state) => state.currentExercise,
    exercises: (state) => state.exercises
  }
})

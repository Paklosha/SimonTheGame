import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    level: 0,
    difficulty: 1500,
    started: false,
    state: 'waiting', // waiting, ready, listening, gameover
    elapsedTime: 0,
    currentSequence: [],
    sequenceListener: undefined 
  },
  mutations: {
    changeDifficulty(state,difficulty) {
      // mutate state
      state.difficulty = difficulty
    }
  }
})
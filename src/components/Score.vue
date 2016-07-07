<template lang="html">
  <div>
    <h1 class="score">{{ state.score }}</h2>
    <button @click="this.$router.go('/')">BACK</button>
  </div>
</template>

<script>
import store from '../store.js'
export default {
  data: function() {
    return {
      state: {
        bilirubin: 0,
        kreatinin: 0,
        inr: 0,
        score: 0,
      }
    }
  },

  created: function() {
    this.state = store.getState()

  },
}
</script>

<style lang="css">
</style>

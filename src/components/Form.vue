<template lang="html">
  <form>
    <validator name="validation1">
      <div class="form-group">
        <label for="bilirubin">Bilirubin <span>mg/dl</span> </label>
        <input type="text" name="bilirubin" v-model="state.bilirubin" number v-validate:bilirubin="{ required: true, min: 1 }">
      </div>

      <div class="form-group">
        <label for="kreatinin">Kreatinin <span>mg/dl</span></label>
        <input type="text" name="kreatinin" v-model="state.kreatinin" number v-validate:kreatinin="{ required: true, min: 1 }">
      </div>


      <div class="form-group">
        <label for="inr">INR</label>
        <input type="text" name="inr" v-model="state.inr" number v-validate:inr="{ required: true }">
      </div>


      <div class="form-group">
        <input :disabled="!$validation1.valid" type="submit" value="Calculate" @click.prevent="handleCalculateClick(state.bilirubin, state.kreatinin, state.inr)">
      </div>
    </validator>
  </form>
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

  methods: {
    calculateScore: function(bili, krea, inr) {
      let score = 10 * ((0.957 * Math.log(krea)) + (0.378 * Math.log(bili)) + (1.12 * Math.log(inr)) + 0.643);
      return Math.round(score);
    },
    handleCalculateClick: function(bili, krea, inr) {
      // this.$dispatch('score', this.calculateScore(bili, krea, inr))
      store.calculateScore(bili, krea, inr);
      this.$router.go('/score')
    },
  },
}
</script>

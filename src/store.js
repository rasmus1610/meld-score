const store = {
  state: {
    bilirubin: '',
    kreatinin: '',
    inr: '',
    score: ''
  },
  calculateScore: function(bili, krea, inr) {
    let score = 10 * ((0.957 * Math.log(krea)) + (0.378 * Math.log(bili)) + (1.12 * Math.log(inr)) + 0.643);
    score = Math.round(score)
    return this.state.score = score
  },
  getState: function() {
    return this.state;
  },
}

export default store;

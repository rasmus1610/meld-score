import Vue from 'vue'
import VueRouter from 'vue-router'
import VueValidator from 'vue-validator'

import App from './App'

import Form from './components/Form'
import Score from './components/Score'

/* eslint-disable no-new */
Vue.use(VueRouter)

Vue.use(VueValidator)

const router = new VueRouter({history: true})

router.map({
  '/': {
    component: Form
  },
  '/score': {
    component: Score
  },
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')

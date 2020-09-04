import Vue from 'vue'
Vue.filter('formatDate', (val) => {
  const moment = require('moment')
  return moment(val).format('LLL')
})

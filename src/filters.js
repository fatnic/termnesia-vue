import Vue from 'vue'

Vue.filter('year', timestamp => {
    let d = new Date(timestamp)
    return d.getFullYear()
})
  
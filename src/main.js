// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.


import Vue from 'vue'
Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: function () {
    return {
      name: 'qinhanwen'
    }
  },
  mounted () {
    console.log(this.name)
  },
  template:`
    <p>{{name}}</p>
  `
})

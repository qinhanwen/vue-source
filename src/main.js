// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  data: function () {
    return {
      firstName: 'qinhanwen',
    }
  },
  methods:{
    changeFirstName(){
      this.firstName = 'qhw';
    }
  },
  template: `<div @click="changeFirstName()">
  my name is {{firstName}}
  </div>`
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  data: function () {
    return {
      firstName: 'hanwen',
      totalName: '',
    }
  },
  watch: {
    firstName: function (val,oVal) {
      this.totalName = val + oVal;
    },
  },
  methods:{
    changeFirstName(){
      this.firstName = 'qin';
    }
  },
  template: `<div @click="changeFirstName()">
  my name is {{totalName}}
  </div>`
})

// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  data: function () {
    return {
      arr:[1,2,3]
    }
  },

  template: `<div>
    <p v-if="!arr.length" v-for="item in arr">{{item}}</p>
  </div>`
})

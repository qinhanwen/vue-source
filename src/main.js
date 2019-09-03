// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  data: function () {
    return {
      arr: [1, 2, 3, 4, 5],
    }
  },
  methods: {
    changeArr() {
      console.log('change');
      this.arr.push(6);
    },
  },
  template: `<div>
  <p v-for="item in arr" @click="changeArr">
  {{item}}
  </p>
  </div>`
})

import Vue from 'vue'

Vue.directive('qhw', function (el, binding, vnode) {
  console.log(el, binding, vnode)
  el.style = 'color:' + binding.value
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  data: {
    color: 'red'
  },
  template: `
  <div v-qhw="color">
    123
  </div>
  `
})

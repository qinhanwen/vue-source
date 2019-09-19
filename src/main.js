// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

Vue.config.productionTip = false
Vue.component('async-example', function (resolve, reject) {
  // 这个特殊的 require 语法告诉 webpack
  // 自动将编译后的代码分割成不同的块，
  // 这些块将通过 Ajax 请求自动下载。
  setTimeout(() => require(['./App'], resolve), 2000)
})

new Vue({
  el: '#app',
  data: function () {
    return {}
  },

  template: `<div>
      <async-example></async-example>
  </div>`
})

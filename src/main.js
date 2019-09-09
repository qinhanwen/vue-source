// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  methods:{
    childEmitHandler() {
      console.log('Child select!')
    },
    childEmitHandler1() {
      console.log('Child select1!')
    }
  },
  components:{
    App
  },
  template: `<div> 
  <App @childEmitHandler="childEmitHandler();childEmitHandler1()" />
  </div>`
})

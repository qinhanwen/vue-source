// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';

Vue.config.productionTip = false

/* eslint-disable no-new */
Vue.mixin({
  created() {
    console.log('parent created')
  }
})
Vue.component('name-box',{
  template:'<p>{{name}}{{age}}</p>',
  props:{
    name:String
  },
  data:function(){
    return {
      age:25
    }
  }
})

new Vue({
  el: '#app',
  data: function () {
    return {
      name: 'qinhanwen'
    }
  },
  components:{
    App
  },
  mounted(){
    console.log('parent mount');
  },
  created(){
    console.log('child created');
  },
  template: '<App :name="name"></App>'
})

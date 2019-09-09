// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App';
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  data:{
    userList:[{
      name:"qinhanwen",
      id:1,
    },{
      name:"zenghua",
      id:2,
    }]
  },
  methods:{
    reverseUserList() {
      this.userList.reverse();
    },
  },
  template: `<ul @click="reverseUserList()"> 
    <li v-for="item in userList" :key="item.id">{{item.name}}</li>
  </ul>`
})

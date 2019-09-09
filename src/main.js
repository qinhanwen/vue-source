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
    },{
      name:"bao",
      id:3,
    },{
      name:"guo",
      id:4,
    }]
  },
  methods:{
    reverseUserList() {
      this.userList.splice(1,1);
    },
  },
  template: `<ul @click="reverseUserList()"> 
    <li v-for="(item,index) in userList" :key="item.id">{{item.name}}{{index}}</li>
  </ul>`
})

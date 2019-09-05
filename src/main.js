// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  data: function () {
    return {
      userList: [{
          name: '1',
          id: 1
        },
        {
          name: '2',
          id: 2
        },
      ],
    }
  },
  methods: {
    changeUserList() {
      this.userList.reverse().push({
        name: '3',
        id: 3
      });
    }
  },
  template: `<ul @click="changeUserList()">
    <li v-for="item in userList" :key="item.id">{{item.name}}</li>
  </ul>`
})

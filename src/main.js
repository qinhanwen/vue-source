import Vue from 'vue'
import App from './App';
import store from './store'
new Vue({
  el: '#app',
  data: function () {
    return {}
  },
  store,
  components:{
    App
  },
  methods:{

  },
  template: `<div>
  <App />
  </div>`
})


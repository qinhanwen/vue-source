import Vue from 'vue'
import store from './store/index'

new Vue({
  el: '#app',
  computed: {
    count(){
      return store.state.count;
    }
  },
  store,
  methods: {
    increment() {
      // store.commit('increment')
      console.log(this.$store.state.count);
      console.log(this.$store.getters.getCount);
      this.$store.dispatch('incrementAction');
    }
  },
  template: `
  <div @click="increment()">
    count:{{count}}
  </div>
  `
})

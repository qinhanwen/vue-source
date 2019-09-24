// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'

var child1 = {
  template: '<div><button @click="add">add</button><p>{{num}}</p></div>',
  data() {
    return {
      num: 1
    }
  },
  methods: {
    add() {
      this.num++
    }
  },
}

var child2 = {
  template: '<div>child2</div>'
}

new Vue({
  el: '#app',
  components: {
    child1,
    child2,
  },
  data() {
    return {
      chooseTabs: 'child1',
    }
  },
  methods: {
    changeTabs(tab) {
      this.chooseTabs = tab;
    }
  },
  template: `
  <div id="app">
    <button @click="changeTabs('child1')">child1</button>
    <button @click="changeTabs('child2')">child2</button>
    <keep-alive>
        <component :is="chooseTabs">
        </component>
    </keep-alive>
  </div>
  `
})

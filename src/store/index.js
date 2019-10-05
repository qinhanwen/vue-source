import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = { //要设置的全局访问的state对象
  count: 0
};

const getters = { //实时监听state值的变化(最新状态)
  getCount() { //方法名随意,主要是用来承载变化的changableNum的值
    return state.count
  }
};

const mutations = { //改变state的初始值的方法
  increment(state) {
    state.count++
  }
};

const actions = {
  incrementAction(context) { //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
    context.commit('increment');
  }
}

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
})

export default store;

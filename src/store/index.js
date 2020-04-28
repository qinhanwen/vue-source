import Vue from 'vue'
import Vuex from 'vuex'
import account from './account/index';
Vue.use(Vuex)

const state = { //要设置的全局访问的state对象
};

const getters = { //实时监听state值的变化(最新状态)
};

const mutations = { //改变state的初始值的方法
};

const actions = {
}

const store = new Vuex.Store({
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
  modules:{
    account
  }
})

export default store;

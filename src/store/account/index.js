export function increment(state) {
  state.count++;
}

export function incrementAction(context) {
  //自定义触发mutations里函数的方法，context与store 实例具有相同方法和属性
  context.commit("increment");
}

export default {
  namespaced: true,
  state:{
    count: 0
  },
  getters:{

  },
  mutations: {
    increment
  },
  actions:{
    incrementAction
  }
};

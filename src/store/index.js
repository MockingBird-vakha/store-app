import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    items: []
  },
  mutations: {
    addItem (state, data) {
      state.items.push(data)
    }
  },
  actions: {
    addItem ({ commit }, data) {
      commit('addItem', data)
    }
  },
  modules: {
  }
})

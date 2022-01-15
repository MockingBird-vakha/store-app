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
  getters: {
    lowPriceShortStateItems (state) {
      const items = [...state.items]
      return items.sort((a, b) => a.price > b.price ? 1 : -1)
    },
    hightPriceShortStateItems (state) {
      const items = [...state.items]
      return items.sort((a, b) => a.price < b.price ? 1 : -1)
    }
  }
})

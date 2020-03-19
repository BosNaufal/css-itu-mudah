import Vuex from 'vuex'

export const SET_SIDEBAR_OPEN = "MUTATION/SET_SIDEBAR_OPEN"

const store = new Vuex.Store({
  state: {
    isSidebarOpen: false,
  },
  mutations: {
    [SET_SIDEBAR_OPEN] (state, newState) {
      state.isSidebarOpen = newState
    }
  }
})

export default store

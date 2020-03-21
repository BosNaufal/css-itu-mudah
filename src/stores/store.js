
import Vuex from 'vuex'
import {
  SET_SIDEBAR_OPEN, 
  GET_IS_OPEN_SIDEBAR,
} from './types'

const store = new Vuex.Store({
  state: () => ({
    isSidebarOpen: false,
    wantToAnchor: null,
  }),
  getters: {
    [GET_IS_OPEN_SIDEBAR] (state) {
      return state.isSidebarOpen
    },
  },
  mutations: {
    [SET_SIDEBAR_OPEN] (state, payload) {
      state.isSidebarOpen = payload
    },
  },
  actions: {
    [SET_SIDEBAR_OPEN] (context, payload) {
      context.commit(SET_SIDEBAR_OPEN, payload)
    },
  },
})

export default store

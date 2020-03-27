
import Vuex from 'vuex'
import {
  SET_SIDEBAR_OPEN, 
  GET_IS_OPEN_SIDEBAR,
  SET_FOCUS_MODE,
  GET_IS_FOCUS_MODE,
} from './types'

const store = new Vuex.Store({
  state: () => ({
    isSidebarOpen: false,
    wantToAnchor: null,
    isFocusMode: false,
  }),
  getters: {
    [GET_IS_OPEN_SIDEBAR] (state) {
      return state.isSidebarOpen
    },
    [GET_IS_FOCUS_MODE] (state) {
      return state.isFocusMode
    },
  },
  mutations: {
    [SET_SIDEBAR_OPEN] (state, payload) {
      state.isSidebarOpen = payload
    },
    [SET_FOCUS_MODE] (state, payload) {
      state.isFocusMode = payload
    }
  },
  actions: {
    [SET_SIDEBAR_OPEN] (context, payload) {
      context.commit(SET_SIDEBAR_OPEN, payload)
    },
    [SET_FOCUS_MODE] (context, payload) {
      context.commit(SET_FOCUS_MODE, payload)
    },
  },
})

export default store

// This is the main.js file. Import global CSS and scripts here.
// The Client API can be used here. Learn more: gridsome.org/docs/client-api

import Vuex from 'vuex'
import { Fragment, Plugin } from 'vue-fragment'
import VueCompositionAPI from '@vue/composition-api'
import DefaultLayout from '~/layouts/Default.vue'

export default function (Vue, { router, head, isClient, appOptions }) {

  head.link.push({
    rel: 'stylesheet',
    href: 'https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css',
  })

  // Google fonts Source Sans Pro
  head.link.push({
    rel: 'stylesheet',
    href: 'https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,400i,700&display=swap'
  })

  head.link.push({
    rel: 'stylesheet',
    href: 'https://unpkg.com/eva-icons@1.1.3/style/eva-icons.css',
  })

  
  Vue.use(Plugin)
  Vue.use(Vuex)
  Vue.use(VueCompositionAPI)

  const store = require('@/stores/store').default
  appOptions.store = store

  Vue.component('Layout', DefaultLayout)
  Vue.component('Fragment', Fragment)
}

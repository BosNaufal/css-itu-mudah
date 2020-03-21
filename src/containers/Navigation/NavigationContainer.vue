<template>
  <Fragment>
    <navigation 
      :onOpenSidebar="handleOpenSidebar" 
      :metadata="metadata"
    />
    <searchbar />
  </Fragment>
</template>

<script>
import { inject, onMounted } from '@vue/composition-api'
import { useStore, useDispatch } from '@/stores/useStore'
import { SET_SIDEBAR_OPEN } from '@/stores/types'

import Searchbar from '@/components/Searchbar'
import Navigation from './Navigation'

export default {
  components: {
    Navigation,
    Searchbar,
  },

  setup(props, ctx) {
    const { parent } = ctx
    const metadata = parent.$page.metadata

    const dispatch = useDispatch()

    const handleOpenSidebar = () => {
      dispatch(SET_SIDEBAR_OPEN, true)
    }

    return {
      metadata,
      handleOpenSidebar,
    }
  },
}
</script>

<style>
</style>

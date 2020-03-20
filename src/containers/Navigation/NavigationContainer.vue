<template>
  <navigation 
    :onOpenSidebar="handleOpenSidebar" 
  />
</template>

<script>
import { inject, onMounted } from '@vue/composition-api'
import { useStore, useDispatch } from '@/stores/useStore'
import Navigation from './Navigation.vue'
import Searchbar from './Searchbar.vue'
import { SET_SIDEBAR_OPEN } from '@/stores/types'


export default {
  components: {
    Navigation,
    Searchbar,
  },

  setup(props, ctx) {
    const dispatch = useDispatch()

    const handleOpenSidebar = () => {
      dispatch(SET_SIDEBAR_OPEN, true)
    }

    return {
      handleOpenSidebar,
    }
  },
}
</script>

<style>
</style>

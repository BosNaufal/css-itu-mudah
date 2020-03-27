<template>
  <NavigationDesktop 
    :onOpenSidebar="handleOpenSidebar" 
    :metadata="metadata"
  />
</template>

<script>
import { inject, onMounted } from '@vue/composition-api'
import { useStore, useDispatch, useGetter } from '@/stores/useStore'
import { SET_FOCUS_MODE, GET_IS_FOCUS_MODE } from '@/stores/types'

import NavigationDesktop from './NavigationDesktop'

export default {
  components: {
    NavigationDesktop,
  },

  setup(props, ctx) {
    const { parent } = ctx
    const metadata = parent.$page.metadata

    const isFocusMode = useGetter(GET_IS_FOCUS_MODE)

    const dispatch = useDispatch()

    const handleOpenSidebar = () => {
      dispatch(SET_FOCUS_MODE, !isFocusMode.value)
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

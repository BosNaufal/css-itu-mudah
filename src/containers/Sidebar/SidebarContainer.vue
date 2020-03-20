<template>
  <Sidebar 
    v-if="isSidebarOpen" 
    :onClose="handleClose"
  >
    <Searchbar placeholder="Cari Chapter" /> 
  </Sidebar>
</template>

<script>
import { computed } from '@vue/composition-api'
import { useDispatch, useGetter } from '@/stores/useStore'
import { SET_SIDEBAR_OPEN, GET_IS_OPEN_SIDEBAR } from '@/stores/types'

import Searchbar from '@/components/Searchbar'
import Sidebar from './Sidebar.vue'

export default {
  components: {
    Sidebar,
    Searchbar,
  },

  setup() {
    const dispatch = useDispatch()
    const isSidebarOpen = useGetter(GET_IS_OPEN_SIDEBAR)

    const handleClose = () => {
      dispatch(SET_SIDEBAR_OPEN, false)
    }

    return {
      handleClose,
      isSidebarOpen,
    }
  }
}
</script>

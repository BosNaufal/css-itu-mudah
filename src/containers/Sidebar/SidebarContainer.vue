<template>
  <Sidebar 
    v-show="isSidebarOpen" 
    :onClose="handleClose"
    :list="filteredList"
  >
    <Searchbar 
      placeholder="Cari Chapter" 
      :onInput="handleTypingSearch"
    /> 
  </Sidebar>
</template>


<script>
import { ref, computed } from '@vue/composition-api'
import { useDispatch, useGetter } from '@/stores/useStore'
import { SET_SIDEBAR_OPEN, GET_IS_OPEN_SIDEBAR } from '@/stores/types'

import Searchbar from '@/components/Searchbar'
import Sidebar from './Sidebar.vue'

export default {
  components: {
    Sidebar,
    Searchbar,
  },
  
  setup(props, ctx) {
    const { parent } = ctx
    const allContent = parent.$page.allContent
    const allList = computed(() => (
      allContent.edges.map((item, index) => ({
        ...item.node,
        originalIndex: index,
      }))
    ))

    const dispatch = useDispatch()
    const isSidebarOpen = useGetter(GET_IS_OPEN_SIDEBAR)

    const handleClose = () => {
      dispatch(SET_SIDEBAR_OPEN, false)
    }
    
    const query = ref("")
    const handleTypingSearch = (value) => {
      query.value = value
    }

    const filteredList = computed(() => {
      const regex = new RegExp(query.value, 'igm')
      const filtered = allList.value.filter((content) => {
        return (
          content.title.match(regex) !== null
          || content.path.match(regex) !== null
        )
      })
      return filtered
    })

    return {
      allContent,
      isSidebarOpen,
      filteredList,

      handleClose,
      handleTypingSearch,
    }
  }
}
</script>

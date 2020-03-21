<template>
  <Sidebar 
    v-show="isSidebarOpen" 
    :onClose="handleClose"
    :list="filteredList"
    :metadata="metadata"
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
    const metadata = parent.$page.metadata
    const allContent = parent.$page.allContent

    const makeSubIndex = (index, parentIndex) => {
      if (parentIndex !== 0) return `${parentIndex}.${index + 1}`
      const allIndex = []
      for (let i = 0; i <= index; i++) {
        allIndex.push("i")
      } 
      return allIndex.join("")
    }

    const convertHeadingListToMenuList = (headingList, parent) => {
      if (!headingList) return null
      return headingList.map((heading, index) => ({
        originalIndex: makeSubIndex(index, parent.originalIndex),
        title: heading.value,
        path: `${parent.path}${heading.anchor}`,
        anchor: heading.anchor,
      }))
    }

    const allList = computed(() => (
      allContent.edges.map((item, index) => {
        const transformedItem = {
          ...item.node,
          originalIndex: index,
          anchor: null,
        }
        return {
          ...transformedItem,
          subChapter: convertHeadingListToMenuList(
            transformedItem.headings,
            transformedItem,
          )
        }
      })
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
      metadata,
      allContent,
      isSidebarOpen,
      filteredList,

      handleClose,
      handleTypingSearch,
    }
  }
}
</script>

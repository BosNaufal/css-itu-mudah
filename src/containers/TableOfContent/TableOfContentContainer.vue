<template>
  <TableOfContent 
    :isFiltered='query !== ""'
    :list="filteredList"
    :metadata="metadata"
  >
    <Searchbar 
      placeholder="Cari Chapter" 
      :onInput="handleTypingSearch"
    /> 
  </TableOfContent>
</template>


<script>
import { ref, computed } from '@vue/composition-api'
import { useDispatch, useGetter } from '@/stores/useStore'
import { SET_SIDEBAR_OPEN, GET_IS_OPEN_SIDEBAR } from '@/stores/types'
import { useChapterListData } from './useChapterList'

import Searchbar from '@/components/Searchbar'
import TableOfContent from './TableOfContent.vue'


const useFilterList = (allList) => {
  const query = ref("")
  const handleTypingSearch = (value) => {
    query.value = value
  }

  const matcher = (regex, chapter) => {
    return (
      chapter.title.match(regex) !== null
      || chapter.path.match(regex) !== null
    )
  }

  const filteredList = computed(() => {
    const regex = new RegExp(query.value, 'igm')
    const filtered = allList.value.reduce((_filtered, chapter) => {
        const matchOnTheChapter = matcher(regex, chapter)
        let filteredSubChapter = chapter.subChapter
        if (chapter.subChapter) {
          filteredSubChapter = (
            chapter.subChapter.filter((subChapter) => matcher(regex, subChapter))
          )
        }
        let matchOnSubChapter = filteredSubChapter.length > 0
        if (!matchOnTheChapter && !matchOnSubChapter) return _filtered 
        return [
          ..._filtered,
          {
            ...chapter,
            subChapter: filteredSubChapter, 
          },
        ]
      }, [])
    return filtered
  })

  return {
    query,
    handleTypingSearch,
    filteredList,
  }
}

export default {
  components: {
    TableOfContent,
    Searchbar,
  },
  
  setup(props, ctx) {
    const { parent } = ctx
    const metadata = parent.$page.metadata
    const { 
      allList, 
    } = useChapterListData(
      parent.$page.allContent
    )

    const { 
      query, 
      handleTypingSearch, 
      filteredList,
    } = useFilterList(allList)

    const dispatch = useDispatch()
    const isSidebarOpen = useGetter(GET_IS_OPEN_SIDEBAR)

    const handleClose = () => {
      dispatch(SET_SIDEBAR_OPEN, false)
    }

    return {
      metadata,
      isSidebarOpen,
      allList,
      filteredList,
      query,

      handleClose,
      handleTypingSearch,
    }
  }
}
</script>

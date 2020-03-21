<template>
  <Sidebar 
    v-show="isSidebarOpen" 
    :onClose="handleClose"
    :filteredIndexList="filteredIndexList"
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
import { normalize, schema } from 'normalizr'
import { ref, computed } from '@vue/composition-api'
import { useDispatch, useGetter } from '@/stores/useStore'
import { SET_SIDEBAR_OPEN, GET_IS_OPEN_SIDEBAR } from '@/stores/types'

import Searchbar from '@/components/Searchbar'
import Sidebar from './Sidebar.vue'


const normalizeChapter = (list) => {
  const ChapterEntity = new schema.Entity('chapters', {}, {
    idAttribute: 'originalIndex'
  })
  ChapterEntity.define({ subChapter: [ChapterEntity] })
  return normalize(list, [ChapterEntity])
}

const useChapterListData = (allContent) => {
  const makeSubIndex = (index, parentIndex) => {
    if (parentIndex !== "i") return `${parentIndex}.${index + 1}`
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
        originalIndex: index === 0 ? "i" : index.toString(),
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


  const normalizedChapter = computed(() => (
    normalizeChapter(allList.value)
  ))

  return {
    allList,
    normalizedChapter,
  }
}


const useFilterList = ({ normalizedChapter, allList }) => {
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

  const chapterEntity = computed(() => (
    normalizedChapter.value.entities.chapters
  ))

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


  const filteredIndexList = computed(() => {
    const regex = new RegExp(query.value, 'igm')
    const filteredIndex = Object.keys(chapterEntity.value)
      .filter((chapterIndex) => {
        const chapter = chapterEntity.value[chapterIndex]
        const matchOnTheChapter = matcher(regex, chapter)
        return (
          matchOnTheChapter
        )
      })
    return filteredIndex
  })

  return {
    query,
    handleTypingSearch,
    filteredIndexList,
    filteredList,
  }
}

export default {
  components: {
    Sidebar,
    Searchbar,
  },
  
  setup(props, ctx) {
    const { parent } = ctx
    const metadata = parent.$page.metadata
    const { 
      allList, 
      normalizedChapter 
    } = useChapterListData(
      parent.$page.allContent
    )

    const { 
      query, 
      handleTypingSearch, 
      filteredIndexList,
      filteredList,
    } = useFilterList({ normalizedChapter, allList })

    const dispatch = useDispatch()
    const isSidebarOpen = useGetter(GET_IS_OPEN_SIDEBAR)

    const handleClose = () => {
      dispatch(SET_SIDEBAR_OPEN, false)
    }

    return {
      metadata,
      isSidebarOpen,
      allList,
      filteredIndexList,
      filteredList,

      handleClose,
      handleTypingSearch,
    }
  }
}
</script>

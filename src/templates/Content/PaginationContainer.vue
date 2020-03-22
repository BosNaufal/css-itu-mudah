<template>
  <Pagination :prev="pageInfo.prevLink" :next="pageInfo.nextLink" />
</template>

<script>
import Pagination from '@/components/Pagination'
import { useChapterListData } from '@/containers/Sidebar/useChapterList'
import { makeChapterList } from '../../containers/Sidebar/useChapterList'

export default {
  components: {
    Pagination,
  },
  props: {
    allContent: Object,
    content: Object,
  },
  computed: {
    pageInfo() {
      const chapterList = makeChapterList(this.allContent.edges)
      const currentContentPosition = chapterList.findIndex((chapter) => {
        return (
          chapter.title === this.content.title
          && chapter.path === this.content.path
        )
      })

      const hasPrev = currentContentPosition !== 0
      const prevChapterIndex = currentContentPosition - 1

      const hasNext = currentContentPosition !== chapterList.length - 1
      const nextChapterIndex = currentContentPosition + 1

      const makeLinkData = (chapterIndex) => {
        const chapter = chapterList[chapterIndex]
        return {
          path: chapter.path, 
          title: chapter.title, 
        }
      }

      return {
        nextLink: hasNext ? makeLinkData(nextChapterIndex) : null,
        prevLink: hasPrev ? makeLinkData(prevChapterIndex) : null,
      }
    }
  },
}
</script>
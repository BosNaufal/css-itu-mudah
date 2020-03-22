import { computed } from '@vue/composition-api'

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

export const makeChapterList = (contentEdges) => {
  const chapterList = contentEdges.map((item, index) => {
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
  return chapterList
}

export const useChapterListData = (allContent) => {
  const allList = computed(() => (
    makeChapterList(allContent.edges)
  ))

  return {
    allList,
  }
}

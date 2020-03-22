<template>
  <Fragment>
    <Content :content="$page.content" />
    <PaginationContainer 
      :content="$page.content"
      :allContent="$page.allContent" 
    />
  </Fragment>
</template>

<page-query>
  query Post ($path: String!) {
    metadata {
      siteName
      bookTitle
      author {
        name
        email
      }
    }
    allContent(sort: { by: "fileInfo.name", order:ASC }) {
      totalCount
      edges {
        node {
          title
          path
          headings(depth: h2) {
            depth
            value
            anchor
          }
        }
      }
    }
    content (path: $path) {
      title
      path
      content
    }
  }
</page-query>

<script>
import PaginationContainer from './PaginationContainer.vue'
import Content from './Content.vue'
import { useChapterListData } from '../../containers/Sidebar/useChapterList'

export default {
  components: {
    Content,
    PaginationContainer,
  },

  metaInfo: (context) => {
    const content = context.$page.content
    const metadata = context.$page.metadata
    return {
      title: `${content.title} | ${metadata.bookTitle}`,
    }
  },
}
</script>

<style>

</style>

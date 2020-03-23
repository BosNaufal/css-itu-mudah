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
  query FirstPost {
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
    content (path: "/chapter/perkenalan") {
      title
      path
      content
    }
  }
</page-query>

<script>
import Content from '@/templates/Content/Content'
import PaginationContainer from '@/templates/Content/PaginationContainer.vue'

export default {
  components: {
    Content,
    PaginationContainer,
  },
}
</script>


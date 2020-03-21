<template>
  <Content :content="$page.content" />
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
      content
    }
  }
</page-query>

<script>
import Content from '@/templates/Content/Content'
export default {
  components: {
    Content,
  },
}
</script>


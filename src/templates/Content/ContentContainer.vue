<template>
  <Content :content="$page.content" />
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
        }
      }
    }
    content (path: $path) {
      title
      content
    }
  }
</page-query>

<script>
import Content from './Content.vue'

export default {
  components: {
    Content,
  },
}
</script>

<style>

</style>

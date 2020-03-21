<template>
  <Fragment>
    <Content :content="$page.content" />
    <Pagination />
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
      content
    }
  }
</page-query>

<script>
import Pagination from '@/components/Pagination'
import Content from './Content.vue'

export default {
  components: {
    Content,
    Pagination,
  },

  metaInfo: (context) => {
    const content = context.$page.content
    const metadata = context.$page.metadata
    return {
      title: `${content.title} | ${metadata.bookTitle}`,
    }
  },

  setup() {
    return {}
  }
}
</script>

<style>

</style>

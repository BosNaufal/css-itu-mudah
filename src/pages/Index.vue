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

  metaInfo: (context) => {
    const content = context.$page.content
    const metadata = context.$page.metadata
    const description = "CSS adalah salah satu faktor yang bikin saya jatuh cinta pada dunia frontend. Karena CSS ini menghubungkan antara software engineering dan seni. CSS lebih fun"
    const coverImage = require('../../content/images/bagian-bagian-css.png') 
    return {
      title: metadata.siteName,
      meta: [
        {
          name: "description",
          content: description,
        },
        { 
          name: "keywords", 
          content: "CSS, belajar CSS, tutorial CSS, belajar CSS pemula, tutorial CSS pemula, belajar CSS gratis, tutorial CSS gratis",
        },
        { 
          name: "robots", 
          content: "index, follow",
        },
        {
          name: "og:type",
          content: "website",
        },
        {
          name: "og:title",
          content: metadata.siteName,
        },
        {
          name: "og:url",
          content: "http://bosnaufal.github.io/css-itu-mudah/",
        },
        {
          name: "og:description",
          content: description,
        },
        {
          name: "og:image",
          content: coverImage,
        },
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:creator",
          content: "@BosNaufal",
        },
        {
          name: "twitter:site",
          content: "@BosNaufal",
        },
        {
          name: "twitter:title",
          content: metadata.siteName,
        },
        {
          name: "twitter:description",
          content: description,
        },
        {
          name: "twitter:image",
          content: coverImage,
        },
      ]
    }
  },
}
</script>


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
    return {
      title: metadata.siteName,
      description,
      keywords: "CSS, belajar CSS, tutorial CSS, belajar CSS pemula, tutorial CSS pemula, belajar CSS gratis, tutorial CSS gratis",
      robots: "index, follow",

      "og:type": "website",
      "og:title": metadata.siteName,
      "og:url": "http://bosnaufal.github.io/css-itu-mudah/",
      "og:description": description,
      "og:image": "http://bosnaufal.github.io/css-itu-mudah/assets/static/content/images/bagian-bagian-css.png",

      "twitter:card": "summary_large_image",
      "twitter:creator": "@BosNaufal",
      "twitter:site": "@BosNaufal",
      "twitter:title": metadata.siteName,
      "twitter:description": description,
      "twitter:image": "http://bosnaufal.github.io/css-itu-mudah/assets/static/content/images/bagian-bagian-css.png",
    }
  },
}
</script>


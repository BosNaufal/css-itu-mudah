<template>
  <Layout>
    <h1>{{ $page.content.title }}</h1>
    <div v-html="$page.content.content"></div>
  </Layout>
</template>

<page-query>
  query Post ($path: String!) {
    content (path: $path) {
      title
      content
    }
  }
</page-query>

<script>
import 'prismjs/themes/prism.css'

export default {
  mounted() {
    console.log(this.$page)
  }
}
</script>

<style>

</style>

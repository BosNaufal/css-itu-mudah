<template>
  <Layout>
    <h1>{{ content.title }}</h1>
    <div v-html="content.content"></div>
  </Layout>
</template>

<script>
import 'prismjs/themes/prism.css'

export default {
  props: {
    content: {
      type: Object,
      required: true,
    }
  },
}
</script>

<style>

</style>

<template>
  <Layout>
    <h1 class="title">{{ content.title }}</h1>
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
    },
  },
}
</script>

<style lang="less" scoped>
.title {
  padding-top: 0;
  margin-top: 15px;
  margin-bottom: 5px;
}
</style>

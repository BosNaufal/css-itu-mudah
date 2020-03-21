<template>
  <Layout>
    <h1 class="content-title">{{ content.title }}</h1>
    <div class="content" v-html="content.content"></div>
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

<style lang="less">
.content-title {
  padding-top: 0;
  margin-top: 15px;
  margin-bottom: -15px;
}

.content {
  padding-bottom: 25px;

  
  h5 {
    margin-bottom: -10px;
    padding: 0;
  }

  blockquote {
    margin: 15px 0 -10px;
    padding: 7px 0;
    padding-left: 15px;
    padding-right: 15px;
    color: #888;
    font-style: italic;
    font-size: 1.05rem;

    > p {
      margin: 0;
    }
  }

  ul {
    padding-left: 27px;
  }

  p > code {
    color: var(--dark-primary-color);
    font-size: 0.85rem;
    background: var(--light-primary-color);
    padding: 2px 5px 1px;
    border-radius: 5px;
    line-height: 0;
    margin: 0 2px;
  }
  pre[class*="language-"] {
    border-radius: 3px;
  }
  pre[class*="language-"],
  code[class*="language-"] {
    background: #FFF;
    font-size: 0.85rem;
  } 
}
</style>

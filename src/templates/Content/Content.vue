<template>
  <Fragment>
    <h1 class="content-title">{{ content.title }}</h1>
    <div class="content" ref="content" v-html="content.content"></div>
  </Fragment>
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

  watch: {
    content(newValue, prev) {
      this.$nextTick(() => {
        this.enhanceTable()
      })
    }
  },

  methods: {
    enhanceTable() {
      this.$refs.content.querySelectorAll("table").forEach((table) => {
        const wrapper = document.createElement("div")
        wrapper.className = "table-wrapper"
        const tableParent = table.parentNode.insertBefore(wrapper, table)
        wrapper.appendChild(table)
      })
    }
  },

  mounted() {
    this.enhanceTable()
  }
}
</script>

<style lang="less">
.content-title {
  padding-top: 0;
  margin-top: 0;
  margin-bottom: -15px;
}

.content {
  padding-bottom: 25px;

  a {
    color: #2b2b2b;
  }

  
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
    
  @media only screen and (min-width: 1024px) {
    blockquote {
      margin: 25px 0 15px;
      font-size: 1.4rem;
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
  
  @media only screen and (min-width: 1024px) {
    pre[class*="language-"],
    code[class*="language-"] {
      background: #FFF;
      font-size: 1rem;
    } 
  }

  .table-wrapper {
    display: block;
    margin: 15px 0;
    width: 100%;
    overflow-x: auto;
    position: relative;

    table {
      min-width: 700px;
      border-collapse: collapse;
    }

    tr > th {
      background: #EEE;
      border: 1px solid #888;
      color: black;
      padding: 5px 15px;
    }

    tr > td {
      border: 1px solid #888;
      padding: 5px 7px;
    }
  }
}
</style>

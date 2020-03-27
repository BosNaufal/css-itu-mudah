<template>
  <header class="navigation">
    <div class="navigation-outer">
      <nav class="navigation-inner">
        <button class="navigation-button" @click="onOpenSidebar">
          <i class="eva eva-menu-outline"></i>
        </button>
        <div class="navigation-logo">
          <g-link to="/" class="title">{{ metadata.bookTitle }}</g-link>
          <a :href="metadata.author.link" class="subtitle">By {{ metadata.author.name }}</a>
        </div>
      </nav>
    </div>
  </header>
</template>


<script>
export default {
  props: {
    metadata: Object,
    onOpenSidebar: {
      type: Function,
      required: true,
    }
  },
}
</script>

<style lang="less" scoped>
.navigation {
  display: none;

  @media only screen and (min-width: 1024px) {
    & {
      display: block;
    }
  }
  &-outer {
    margin-top: -15px;
    margin-bottom: 25px;
    background: #FFF;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #DDD;
  }
  &-inner {
    background: #FFF;
    display: flex;
    padding: 5px 0;
    align-items: center;
    padding-left: 25px;
  }
  &-button {
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
    font-size: 1.7em;
    padding: 10px 0;
    padding-right: 10px;
    line-height: 0;
    margin-right: 5px;
  }
  &-logo {
    line-height: 1.3;

    .title, .subtitle {
      text-decoration: none;
      display: block;
      font-weight: 400;
      color: #000;
      font-size: 1.1rem;
    }

    .subtitle {
      font-size: 0.9rem;
    }
  }
}

.searchbar {
  &-wrapper {
    padding-top: 90px;
  }
}

</style>

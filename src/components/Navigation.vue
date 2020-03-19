<template>
  <header>
    <div class="navigation-outer">
      <div class="mini-container">
        <nav class="navigation-inner">
          <button 
            @click="toggleMenu" 
            class="navigation-button"
          >
            <i :class="`eva eva-${isOpenNavigation ? 'close' : 'menu'}-outline`"></i>
          </button>
          <div class="navigation-logo">
            <g-link to="/" class="title">CSS - Cara Styling Santuy</g-link>
            <a href="https://github.com/BosNaufal" class="subtitle">By Bos Naufal</a>
          </div>
        </nav>
      </div>
    </div>

    <div class="searchbar-wrapper">
      <searchbar />
    </div>
  </header>
</template>


<script>
import Searchbar from './Searchbar.vue'

export default {
  components: {
    Searchbar,
  },
  data() {
    return {
      isOpenNavigation: false,
    }
  },
  methods: {
    toggleMenu() {
      this.isOpenNavigation = !this.isOpenNavigation  
    }    
  }
}
</script>

<style lang="less" scoped>
.navigation {
  &-outer {
    z-index: 99;
    background: #FFF;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    border-bottom: 1px solid #DDD;
  }
  &-inner {
    background: #FFF;
    display: flex;
    padding: 7px 0;
    align-items: center;
  }
  &-button {
    cursor: pointer;
    background: none;
    outline: none;
    border: none;
    font-size: 2em;
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

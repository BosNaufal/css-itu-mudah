<template>
  <aside>
    <div class="table-of-content-outer">
      <div class="table-of-content-inner">
        <div class="table-of-content-content">
          <div class="searchbar-wrapper">
            <slot></slot>
          </div>
          <div class="menu-list-wrapper">
            <MenuList 
              :isFiltered="isFiltered"
              :list="list" 
              :onClick="handleClick"
            />
          </div>
        </div>
      </div>
    </div>
  </aside>
</template>


<script>
import MenuList from './MenuList.vue'

export default {
  components: {
    MenuList,
  },

  props: {
    isFiltered: Boolean,
    list: Array,
    metadata: Object,
  },

  methods: {
    handleClick() {
      const mainContent = document.querySelector("#main-content")
      console.log(mainContent)
      if (mainContent) {
        mainContent.scrollTo(0, 0)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.table-of-content {
  &-outer {
    height: 100%;
    z-index: 99;
    background: #FFF;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }
  &-inner {
    background: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 15px;
  }
  &-content {
    display: flex;
    align-items: center;
    flex-direction: column;
    height: 100%;
  }
}


.main-button {
  background: none;
  padding: 10px 0;
  font-size: 1.7rem;
  line-height: 0;
  border: 0;
}

.searchbar {
  &-wrapper {
    width: 100%;
    padding: 15px 0 10px;
  }
}

.menu-list-wrapper {
  flex: 1;
  padding-bottom: 35px;
  overflow-y: auto;
  width: 100%;
}
</style>

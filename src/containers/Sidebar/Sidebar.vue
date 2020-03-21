<template>
  <aside>
    <div class="sidebar-outer">
      <div class="sidebar-inner">
        <div class="header">
          <div class="title">{{ metadata.bookTitle }}</div>
          <button class="main-button" @click="onClose">
            <i class="eva eva-close-outline"></i>
          </button>
        </div>
        <div class="searchbar-wrapper">
          <slot></slot>
        </div>
        <div class="menu-list-wrapper">
        <MenuList 
          :list="list" 
          :onClick="onClose"
        />
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
    list: Array,
    metadata: Object,
    onClose: {
      type: Function,
      required: true,
    }
  },

  setup(props, ctx) {
    const handleLinkClick = () => {
      props.onClose()
    }
    return { 
      handleLinkClick,
    }
  }
}
</script>

<style lang="less" scoped>
.sidebar {
  &-outer {
    height: 100%;
    z-index: 99;
    background: #FFF;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-bottom: 1px solid #DDD;
  }
  &-inner {
    background: #FFF;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
}

.header {
  border-bottom: 1px solid #DDD;
  display: flex;
  align-items: center;
}

.title {
  flex: 1;
  padding-left: 15px;
}

.main-button {
  background: none;
  padding: 10px 15px;
  font-size: 1.7rem;
  line-height: 0;
  border: 0;
}

.searchbar {
  &-wrapper {
    padding: 20px 15px 10px;
  }
}

.menu-list-wrapper {
  flex: 1;
  padding-bottom: 35px;
  overflow-y: auto;
  width: 100%;
}
</style>

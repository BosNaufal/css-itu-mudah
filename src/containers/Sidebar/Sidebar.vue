<template>
  <aside>
    <div class="sidebar-outer">
      <div class="sidebar-inner">
        <div class="header">
          <div class="title">CSS - Cara Styling Santuy</div>
          <button class="main-button" @click="onClose">
            <i class="eva eva-close-outline"></i>
          </button>
        </div>
        <div class="menu-list">
          <g-link to="/">1. Perkenalan</g-link>
          <g-link to="/">2. Selanjutnya</g-link>
          <g-link to="/">3. Dan Seterusnya</g-link>
        </div>
      </div>
    </div>
  </aside>
</template>


<script>
export default {
  props: {
    onClose: {
      type: Function,
      required: true,
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
    border-bottom: 1px solid #DDD;
  }
  &-inner {
    background: #FFF;
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


.menu-list {
  padding-top: 10px;

  a {
    display: block;
    text-decoration: none;
    color: #000;
    padding: 5px 15px;

    &:hover {
      color: var(--primary-color);
    }
  }
}
</style>

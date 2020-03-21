<template>
  <Fragment>
    <ul v-if="list" class="menu-list">
      <li v-for="(content) in list">
        <g-link :to="content.path">
          <span @click="onClick">
            {{ content.originalIndex === 0 ? "" : `${content.originalIndex}.` }} {{ content.title }}
          </span>
        </g-link>
        <menu-list 
          v-if="content.subChapter" 
          :list="content.subChapter" 
          :onClick="onClick"
        />
      </li>
    </ul>
  </Fragment>
</template>


<script>
export default {
  name: "menu-list",

  props: {
    onClick: Function,
    list: Array,
  },
}
</script>

<style lang="less" scoped>
.menu-list {
  list-style: none;
  padding-left: 5px;
  margin: 0;
  padding-top: 10px;
  margin-bottom: 10px;

  & .menu-list {
    margin-top: -3px;
    padding-top: 0;
    padding-left: 17px;
    padding-bottom: 5px;
    a {
      padding-bottom: 5px;
      padding-top: 5px;
      color: #888;
    }
  } 

  a {
    display: block;
    text-decoration: none;
    color: #000;
    padding: 5px 15px;

    &:hover {
      color: var(--primary-color);
    }

    &.active {
      color: var(--primary-color);
    }

    &.active--exact.active {
      color: var(--dark-primary-color);
    }
  }
}
</style>

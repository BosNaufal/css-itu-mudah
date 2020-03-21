<template>
  <Fragment>
    <ul 
      v-if="list" 
      v-for="(content) in list" 
      class="menu-list"
    >
      <li>
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

  & .menu-list {
    padding-left: 17px;
  } 

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

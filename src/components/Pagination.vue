<template>
  <div class="pagination">
    <g-link class="pagination-prev" 
      :disabled="prev === null"
      :to="prev && prev.path"
    >
      <div @click="handleClick">
        <i class="eva eva-arrow-ios-back-outline"></i>
        <span>Prev Page</span>
      </div>
    </g-link>

    <g-link 
      class="pagination-next" 
      :disabled="next === null"
      :to="next && next.path"
      @click="handleClick"
    >
      <div @click="handleClick">
        <span>Next Page</span>
        <i class="eva eva-arrow-ios-forward-outline"></i>
      </div>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    next: Object,
    prev: Object,
  },
  methods: {
    handleClick() {
      const mainContent = document.querySelector("#main-content")
      if (mainContent) {
        mainContent.scrollTo(0, 0)
      }
    }
  }
}
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 2px solid #DDD;

  a {
    display: block;
    cursor: pointer;
    width: 50%;
    text-decoration: none;

    & > div {
      display: flex; 
      flex-direction: row;
      text-align: center;
      align-items: center;
    }

    i {
      position: relative;
      font-size: 1.5rem;
      color: var(--primary-color);
      line-height: 0; 
      top: 1px;

      @media only screen and (min-width: 1024px) {
        & {
          margin-top: 3px;
        }
      }
    }

    span {
      display: block;
      font-size: 1.1rem;

      @media only screen and (min-width: 1024px) {
        & {
          font-size: 1.3rem;
        }
      }
      color: #2b2b2b;
      line-height: 0; 
    }

    &[disabled] {
      &, i, span {
        color: #CCC;
      }
    }
  }

  &-prev, &-next {
    & > div {
      padding: 30px 0px;
    }
  }

  &-next > div {
    border-left: 1px solid #DDD;
    justify-content: flex-end;
    padding-right: 3%;
  }
  &-prev > div {
    border-right: 1px solid #DDD;
    justify-content: flex-start;
    padding-left: 3%;
  }
}
</style>

<template>
  <div class="pagination">
    <g-link class="pagination-prev" 
      :disabled="prev === null"
      :to="prev && prev.path"
    >
      <i class="eva eva-arrow-ios-back-outline"></i>
      <span>Prev Page</span>
    </g-link>

    <g-link 
      class="pagination-next" 
      :disabled="next === null"
      :to="next && next.path"
    >
      <span>Next Page</span>
      <i class="eva eva-arrow-ios-forward-outline"></i>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
    next: Object,
    prev: Object,
  },
}
</script>

<style lang="less" scoped>
.pagination {
  display: flex;
  justify-content: space-between;
  width: 100%;
  border-top: 2px solid #DDD;

  a {
    text-decoration: none;
    width: 50%;
    display: flex; 
    flex-direction: row;
    text-align: center;
    align-items: center;
    cursor: pointer;

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
    padding: 25px 0px;
    @media only screen and (min-width: 1024px) {
      & {
        padding: 30px 0px;
      }
    }
  }

  &-next {
    border-left: 1px solid #DDD;
    justify-content: flex-end;
    padding-right: 3%;
  }
  &-prev {
    border-right: 1px solid #DDD;
    justify-content: flex-start;
    padding-left: 3%;
  }
}
</style>

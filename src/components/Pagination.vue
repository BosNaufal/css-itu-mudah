<template>
  <div class="pagination">
    <g-link class="pagination-prev">
      <i class="eva eva-arrow-ios-back-outline"></i>
      <span>Prev Page</span>
    </g-link>
    <g-link class="pagination-next">
      <span>Next Page</span>
      <i class="eva eva-arrow-ios-forward-outline"></i>
    </g-link>
  </div>
</template>

<script>
export default {
  props: {
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

    i {
      font-size: 2.5rem;
    }

    span {
      color: #2b2b2b;
      color: var(--primary-color);
      font-size: 1rem;
    }
  }

  &-prev, &-next {
    padding: 10px 0 15px;
  }

  &-next {
    border-left: 1px solid #DDD;
    justify-content: flex-end;
    padding-right: 10px;
  }
  &-prev {
    border-right: 1px solid #DDD;
    justify-content: flex-start;
    padding-left: 10px;
  }
}
</style>

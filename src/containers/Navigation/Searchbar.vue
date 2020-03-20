<template>
  <div class="searchbar-outer">
    <div class="searchbar">
      <input type="text" placeholder="Cari konten disini" />
      <button>
        <i class="eva eva-search-outline"></i>
      </button>
    </div>
  </div>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.searchbar {
  width: 100%;
  border: 1px solid #DDD;
  display: flex;
  align-items: center;
  border-radius: 5px;

  &-outer {
    width: 100%;
  }

  input {
    border: none;
    outline: none;
    flex: 1;
    padding: 7px;
    padding-left: 13px;
    width: 100%;
  }

  button {
    line-height: 0;
    border: none; 
    background: none;
    padding: 5px 10px;
    font-size: 1.5rem;
    outline: none;
  }
}
</style>

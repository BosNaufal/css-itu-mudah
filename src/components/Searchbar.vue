<template>
  <div class="searchbar-outer">
    <form @submit.prevent="handleSubmit" class="searchbar">
      <input 
        v-model="query" 
        type="text" 
        :placeholder="props.placeholder" 
      />
      <button type="submit">
        <i :class="`eva eva-${isClearable ? 'close' : 'search-outline'}`"></i>
      </button>
    </form>
  </div>
</template>


<script>
import { ref, watch, computed } from '@vue/composition-api'

export default {
  props: {
    placeholder: {
      type: String,
      default: "Cari konten disini",
    },
    onInput: {
      type: Function
    },
    onSearch: {
      type: Function
    }
  },

  setup(props) {
    const query = ref("")
    const isClearable = computed(() => query.value !== "")

    watch(query, (newQuery) => {
      if (!props.onInput) return false
      props.onInput(query.value)
    })

    const handleSubmit = () => {
      if (!isClearable) return false
      query.value = ""
    }

    return {
      props,
      query,
      handleSubmit,
      isClearable,
    }
  }
}
</script>


<style lang="less">
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
    cursor: pointer;
  }
}
</style>

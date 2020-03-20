<template>
  <MainSearchbar>
    <Searchbar /> 
  </MainSearchbar>
</template>

<script>
import MainSearchbar from './MainSearchbar.vue'
import Searchbar from '@/components/Searchbar'

export default {
  components: {
    MainSearchbar,
    Searchbar,
  },

  setup() {
    return { }
  }
}
</script>

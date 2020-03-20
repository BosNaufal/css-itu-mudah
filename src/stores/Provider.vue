<template>
  <Fragment>
    <slot />
  </Fragment>
</template>

<script>
import { provide, inject } from 'vue'
export default {
  provide() {
    return {
      store: this.$store,
    }
  }
}
</script>

<template>
  <div class="mini-container">
    <navigation />
    <sidebar />

    <div class="main-content">
      <slot/>
    </div>
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import Navigation from '@/components/Navigation'
import Sidebar from '@/components/Sidebar'

export default {
  components: {
    Navigation,
    Sidebar,
  } 
}
</script>


<style>
:root {
  --primary-color: #8061b7;
}
body {
  /* font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; */
  font-family: 'Source Sans Pro', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  color: #474747;
  font-size: 1rem;
}

h1, h2, h3, h4 {
  font-weight: 400;
  color: #000000;
}

img {
  width: 100%;
}

.mini-container {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
}

.main-content {
}

</style>

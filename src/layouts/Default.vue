<template>
  <StoreProvider>
    <div class="mini-container start-content">
      <NavigationContainer />
      <SidebarContainer />

      <div class="main-content">
        <slot/>
      </div>
    </div>
  </StoreProvider>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<script>
import StoreProvider from '@/stores/Provider'
import NavigationContainer from '@/containers/Navigation/NavigationContainer'
import SidebarContainer from '@/containers/Sidebar/SidebarContainer'
import MainSearchbarContainer from '@/containers/MainSearchbar/MainSearchbarContainer'

export default {
  components: {
    StoreProvider,
    NavigationContainer,
    SidebarContainer,

    MainSearchbarContainer,
  },
}
</script>


<style>
* {
  box-sizing: border-box;
}

:root {
  --dark-primary-color: #5116bb;
  --primary-color: #8061b7;
  --light-primary-color: #f3e6ff;
}
body {
  /* font-family: -apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif; */
  font-family: 'Source Sans Pro', sans-serif;
  margin:0;
  padding:0;
  line-height: 1.5;
  color: #474747;
  font-size: 1.1rem;
}

h1, h2, h3, h4 {
  font-weight: 400;
  color: #000000;
  padding-top: 70px;
  margin-top: -67px;
  margin-bottom: -10px;
}

img {
  width: 100%;
}

.mini-container {
  max-width: 760px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
}

.main-content {
}

.start-content {
  padding-top: 75px;
}

</style>

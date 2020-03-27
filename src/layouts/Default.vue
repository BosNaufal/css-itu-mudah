<template>
  <StoreProvider>
    <div class="start-content">
      <NavigationContainer />
      <SidebarContainer />

      <div class="all-content-wrapper">
        <div class="desktop-table-of-content" v-if="!isFocusMode">
          <TableOfContentContainer />
        </div>
        <div :class="{ 'main-content': true, 'focus': isFocusMode }">
          <NavigationDesktopContainer />
          <div class="main-content-inner mini-container">
            <slot/>
          </div>
          <slot name="footer" />
        </div>
      </div>

    </div>
  </StoreProvider>
</template>

<static-query>
query {
  metadata {
    siteName
    bookTitle
    author {
      name
      email
    }
  }
}
</static-query>

<script>
import StoreProvider from '@/stores/Provider'
import NavigationContainer from '@/containers/Navigation/NavigationContainer'
import SidebarContainer from '@/containers/Sidebar/SidebarContainer'
import MainSearchbarContainer from '@/containers/MainSearchbar/MainSearchbarContainer'
import { GET_IS_FOCUS_MODE } from '@/stores/types'
import { mapGetters } from 'vuex'

export default {
  components: {
    StoreProvider,
    NavigationContainer,
    NavigationDesktopContainer: () => import('@/containers/NavigationDesktop/NavigationDesktopContainer'),
    SidebarContainer,
    TableOfContentContainer: () => import('@/containers/TableOfContent/TableOfContentContainer'),

    MainSearchbarContainer,
  },

  computed: {
    ...mapGetters({
      isFocusMode: GET_IS_FOCUS_MODE,
    })
  }

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

body, html {
  height: 100%;
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

@media only screen and (min-width: 1024px) {
  body {
    font-size: 1.15rem;
  }
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
  max-width: 730px;
  margin: 0 auto;
  padding-left: 15px;
  padding-right: 15px;
  width: 100%;
}


.all-content-wrapper {
  position: relative;
  width: 100%;
  height: 100%;
}

.desktop-table-of-content {
  display: none;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 300px;
  height: 100%;
  overflow-y: auto;
  border-right: 1px solid #DDD;
}

.main-content {
  height: 100%;
}

.main-content-inner {

}

.start-content {
  padding-top: 75px;
  height: 100%;

}

@media only screen and (min-width: 1024px) {
  .desktop-table-of-content {
    display: block;
  }

  .main-content {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 300px;
    right: 0;
    overflow-y: auto;
    padding-top: 15px;
  }
  
  .main-content.focus {
    left: 0;
  }

  .start-content {
    padding-top: 0px;
  }
}

</style>

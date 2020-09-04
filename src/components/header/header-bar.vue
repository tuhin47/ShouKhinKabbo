<script>
import { mapGetters } from 'vuex'
import appConfig from '@src/app.config'
import RightTopBar from './right-top-bar.vue'
import NavItems from './main-nav-items.vue'
export default {
  components: {
    NavItems,
    RightTopBar,
  },
  data() {
    return {
      appConfig,
    }
  },
  computed: {
    ...mapGetters('menus', ['getMenuStateClass', 'getMenuBars']),
  },
  methods: {
    toggleMenuBar() {
      this.$store.dispatch('menus/togglemenu')
    },
  },
}
</script>

<template>
  <!-- Header -->
  <header :class="'header' + getMenuStateClass">
    <div class="header_overlay"></div>
    <div
      class="header_content d-flex flex-row align-items-center justify-content-start"
    >
      <div class="logo">
        <a href="#">
          <div class="d-flex flex-row align-items-center justify-content-start">
            <div><img src="images/logo_1.png" alt=""/></div>
            <div>{{ appConfig.title }}</div>
          </div>
        </a>
      </div>
      <div class="hamburger"
        ><i class="fa fa-bars" aria-hidden="true" @click="toggleMenuBar"></i
      ></div>
      <NavItems />
      <RightTopBar></RightTopBar>
    </div>
  </header>
</template>

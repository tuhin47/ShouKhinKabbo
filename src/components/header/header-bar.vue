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
      <div class="hamburger" style="padding-right:15px"
        ><i class="fa fa-bars" aria-hidden="true" @click="toggleMenuBar"></i
      ></div>
      <div class="logo">
        <a href="#">
          <div class="d-flex flex-row align-items-center justify-content-start">
            <div
              ><img
                width="30"
                class="rounded-circle"
                src="images/logo.png"
                alt="logo"
            /></div>
            <div style="padding-left: 5px;"> {{ appConfig.title }}</div>
          </div>
        </a>
      </div>
      <NavItems />
      <RightTopBar></RightTopBar>
    </div>
  </header>
</template>

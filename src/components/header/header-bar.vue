<script>
import RightTopBar from './right-top-bar.vue'
import NavItems from './main-nav-items.vue'
export default {
  components: {
    NavItems,
    RightTopBar,
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
  <header class="header">
    <div class="header_overlay"></div>
    <div
      class="header_content d-flex flex-row align-items-center justify-content-start"
    >
      <div class="logo">
        <a href="#">
          <div class="d-flex flex-row align-items-center justify-content-start">
            <div><img src="images/logo_1.png" alt=""/></div>
            <div>Little Closet</div>
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

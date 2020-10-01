<script>
import { mapGetters } from 'vuex'
import appConfig from '@src/app.config'

export default {
  data() {
    return { appConfig }
  },
  computed: {
    ...mapGetters('menus', ['getMenuStateClass', 'getMenuBars']),
  },
  methods: {
    toggleMenu() {
      this.$store.commit('menus/TOGGLE_MENU')
    },
  },
}
</script>

<template>
  <!-- Menu -->

  <div :class="'menu' + getMenuStateClass">
    <!-- Search -->
    <button type="button" class="close" aria-label="Close" @click="toggleMenu">
      <span aria-hidden="true">&times;</span>
    </button>
    <!-- <div class="menu_search">
      <form id="menu_search_form" action="#" class="menu_search_form">
        <input
          type="text"
          class="search_input"
          placeholder="Search Item"
          required="required"
        />
        <button class="menu_search_button"
          ><img src="@public/images/search.png" alt=""
        /></button>
      </form>
    </div> -->
    <!-- Navigation -->
    <div class="menu_nav">
      <ul>
        <li
          v-for="(menu, index) in getMenuBars"
          :key="index"
          style="font-size: x-large"
          ><a href="#">{{ menu.title }}</a></li
        >
      </ul>
    </div>
    <!-- Contact Info -->
    <div class="menu_contact">
      <div
        class="menu_phone d-flex flex-row align-items-center justify-content-start"
      >
        <div
          ><div
            ><img
              src="@public/images/phone.svg"
              alt="https://www.flaticon.com/authors/freepik"/></div
        ></div>
        <div>{{ appConfig.mobile }}</div>
      </div>
      <div class="menu_social">
        <ul
          class="menu_social_list d-flex flex-row align-items-start justify-content-start"
        >
          <li
            ><a href="#"><i class="fa fa-facebook" aria-hidden="true"></i></a
          ></li>
          <li
            ><a href="#"
              ><i class="fa fa-youtube-play" aria-hidden="true"></i></a
          ></li>
          <li
            ><a href="#"><i class="fa fa-google-plus" aria-hidden="true"></i></a
          ></li>
          <li
            ><a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a
          ></li>
        </ul>
      </div>
    </div>
  </div>
</template>

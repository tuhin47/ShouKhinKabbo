<script>
import { mapGetters } from 'vuex'
import Header from '@components/header/header-bar.vue'
import MenuBar from '@components/menu/menu-bar.vue'
import Footer from '@components/footer-bar.vue'
import CheckoutModal from '@components/modal/checkout-modal.vue'
export default {
  components: { Header, Footer, MenuBar, CheckoutModal },
  computed: {
    ...mapGetters('menus', [
      'getMenuStateClass',
      'getMenuState',
      'getMenuBars',
    ]),
  },
  methods: {
    clickedOutSide() {
      if (this.getMenuState) {
        this.$store.dispatch('menus/togglemenu')
      }
    },
  },
}
</script>

<template>
  <div>
    <div>
      <Header />
      <div
        tabindex="0"
        :class="'super_container_inner' + getMenuStateClass"
        @focus="clickedOutSide"
      >
        <v-container>
          <slot />
        </v-container>
        <Footer />
      </div>
    </div>
    <MenuBar />
    <!-- <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="100529931400034"
      theme_color="#0084ff"
      logged_in_greeting="শৌখিন কাব্য পেজের পক্ষ থেকে আপনাকে জানাচ্ছি আন্তরিক শুভেচ্ছা"
      logged_out_greeting="শৌখিন কাব্য পেজের পক্ষ থেকে আপনাকে জানাচ্ছি আন্তরিক শুভেচ্ছা"
    >
    </div> -->
    <CheckoutModal />
  </div>
</template>

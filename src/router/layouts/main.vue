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
        this.$store.commit('menus/TOGGLE_MENU')
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
    <CheckoutModal />
  </div>
</template>

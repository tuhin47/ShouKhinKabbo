<script>
// import ProductCard from '@components/demo-product-card.vue'
import SideBar from '@components/side-bar.vue'
import TopHeader from '@components/header-bar.vue'
import FooterBar from '@components/footer-bar-new.vue'
import CheckOut from '@components/modal/checkout-modal.vue'

export default {
  components: {
    // ProductCard,
    SideBar,
    TopHeader,
    FooterBar,
    CheckOut,
  },
}
</script>

<template>
  <div>
    <TopHeader></TopHeader>
    <v-container class="grey lighten-5">
      <v-app id="inspire">
        <br /><br /><br /><br /><br />
        <slot></slot>
      </v-app>
    </v-container>
    <FooterBar />
    <SideBar />
    <CheckOut />
  </div>
</template>

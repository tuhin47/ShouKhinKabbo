<script>
import SideBar from '@components/side-bar.vue'
import TopHeader from '@components/header-bar.vue'
import FooterBar from '@components/footer-bar-new.vue'
import CheckOut from '@components/modal/checkout-modal.vue'
export default {
  components: {
    SideBar,
    TopHeader,
    FooterBar,
    CheckOut,
  },
  data: () => ({
    drawer: null,
  }),
}
</script>

<template>
  <v-app>
    <SideBar></SideBar>
    <v-main>
      <TopHeader></TopHeader>
      <slot></slot>
    </v-main>
    <FooterBar />
    <CheckOut />
  </v-app>
</template>

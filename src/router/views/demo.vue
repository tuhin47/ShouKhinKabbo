<script>
import ProductCard from '@components/demo-product-card.vue'
import SideBar from '@components/side-bar.vue'
import TopHeader from '@components/header-bar.vue'
import FooterBar from '@components/footer-bar-new.vue'
export default {
  components: { ProductCard, SideBar, TopHeader, FooterBar },
}
</script>

<template>
  <div>
    <v-container class="grey lighten-5">
      <v-app id="inspire">
        <v-row class="mb-6" no-gutters> </v-row>
        <TopHeader></TopHeader>
        <br /><br />
        <v-container>
          <v-row>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </v-row>
        </v-container>
      </v-app>
    </v-container>
    <FooterBar></FooterBar>
    <SideBar drawer="true"></SideBar>
  </div>
</template>

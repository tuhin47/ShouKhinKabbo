<script>
import Header from '@components/header/header-bar.vue'
import MenuBar from '@components/menu/menu-bar.vue'
import Footer from '@components/footer-bar.vue'

export default {
  components: { Header, Footer, MenuBar },
}
</script>

<template>
  <div>
    <Header />
    <MenuBar />
    <!-- <div class="fb-customerchat" page_id="422328781181196"> FACEBOOK</div> -->

    <slot />
    <Footer />
  </div>
</template>

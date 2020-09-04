<script>
import Header from '@components/header/header-bar.vue'
import Footer from '@components/footer-bar.vue'

export default {
  components: { Header, Footer },
}
</script>

<template>
  <div>
    <Header />
    <!-- <div class="fb-customerchat" page_id="422328781181196"> FACEBOOK</div> -->

    <slot />
    <Footer />
  </div>
</template>

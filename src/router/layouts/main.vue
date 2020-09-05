<script>
import Header from '@components/header/header-bar.vue'
import MenuBar from '@components/menu/menu-bar.vue'
import Footer from '@components/footer-bar.vue'
import CheckoutModal from '@components/modal/checkout-modal.vue'
export default {
  components: { Header, Footer, MenuBar, CheckoutModal },
}
</script>

<template>
  <div>
    <Header />
    <MenuBar />
    <!-- <div class="fb-customerchat" page_id="422328781181196"> FACEBOOK</div> -->
    <!-- Your Chat Plugin code -->
    <div
      class="fb-customerchat"
      attribution="setup_tool"
      page_id="100529931400034"
      theme_color="#0084ff"
      logged_in_greeting="শৌখিন কাব্য পেজের পক্ষ থেকে আপনাকে জানাচ্ছি আন্তরিক শুভেচ্ছা"
      logged_out_greeting="শৌখিন কাব্য পেজের পক্ষ থেকে আপনাকে জানাচ্ছি আন্তরিক শুভেচ্ছা"
    >
    </div>
    <slot />
    <CheckoutModal />
    <Footer />
  </div>
</template>

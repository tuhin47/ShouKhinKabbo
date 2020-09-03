<script>
import Header from '@components/header-bar.vue'
import Footer from '@components/footer-bar.vue'

export default {
  components: { Header, Footer },
}
</script>

<template>
  <div>
    <Header />
    <slot />
    <Footer />
  </div>
</template>

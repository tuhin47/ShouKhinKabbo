<script>
import appConfig from '@src/app.config'
import { mapGetters } from 'vuex'
// import SearchBar from './search-bar.vue'
export default {
  // components: { SearchBar },
  data() {
    return { appConfig }
  },
  computed: {
    ...mapGetters('products', ['productsAdded']),
    productsAddedLength() {
      return this.productsAdded.length
    },
  },
  methods: {
    showCheckoutModal() {
      this.$store.commit('products/showCheckoutModal', true)
    },
  },
}
</script>

<template>
  <div
    class="header_right d-flex flex-row align-items-center justify-content-start ml-auto"
  >
    <!-- Search -->
    <!-- <SearchBar /> -->
    <!-- Right TOP BAR -->
    <!-- <div class="user"
      ><a href="https://m.me/shoukhinkabbo" target="_blank"
        ><div
          ><img
            src="images/messenger.svg"
            alt="https://www.flaticon.com/authors/freepik"/></div></a
    ></div> -->
    <div class="user"
      ><a :href="`tel:${appConfig.mobile}`"
        ><div
          ><img
            src="@public/images/phone.svg"
            alt="https://www.flaticon.com/authors/freepik"/></div></a
    ></div>
    <div class="user" @click="showCheckoutModal"
      ><a href="#"
        ><div
          ><img
            src="@public/images/cart.svg"
            alt="https://www.flaticon.com/authors/freepik"
          /><div>{{ productsAddedLength ? productsAddedLength : 0 }}</div></div
        ></a
      ></div
    >
  </div>
</template>

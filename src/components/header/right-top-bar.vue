<script>
import appConfig from '@src/app.config'
import SearchBar from './search-bar.vue'
export default {
  components: { SearchBar },
  data() {
    return { appConfig }
  },
}
</script>

<template>
  <div
    class="header_right d-flex flex-row align-items-center justify-content-start ml-auto"
  >
    <!-- Search -->
    <SearchBar />
    <!-- Right TOP BAR -->
    <!-- <div class="user"
      ><a href="#"
        ><div
          ><img
            src="images/user.svg"
            alt="https://www.flaticon.com/authors/freepik"
          /><div>1</div></div
        ></a
      ></div
    > -->
    <div class="user"
      ><a :href="`tel:${appConfig.mobile}`"
        ><div
          ><img
            src="images/phone.svg"
            alt="https://www.flaticon.com/authors/freepik"/></div></a
    ></div>
    <div class="user"
      ><a href="#"
        ><div
          ><img
            src="images/cart.svg"
            alt="https://www.flaticon.com/authors/freepik"/></div></a
    ></div>
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>

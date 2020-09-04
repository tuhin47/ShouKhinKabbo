<script>
import SearchBar from './search-bar.vue'
export default {
  components: { SearchBar },
}
</script>

<template>
  <div
    class="header_right d-flex flex-row align-items-center justify-content-start ml-auto"
  >
    <!-- Search -->
    <SearchBar />
    <!-- Right TOP BAR -->
    <!-- User
    <div class="user"
      ><a href="#"
        ><div
          ><img
            src="images/user.svg"
            alt="https://www.flaticon.com/authors/freepik"
          /><div>1</div></div
        ></a
      ></div
    >-->
    <!-- Cart -->
    <div class="cart"
      ><a href="cart.html"
        ><div
          ><img
            class="svg"
            src="images/cart.svg"
            alt="https://www.flaticon.com/authors/freepik"/></div></a
    ></div>
    <!-- Phone -->
    <div
      class="header_phone d-flex flex-row align-items-center justify-content-start"
    >
      <div
        ><div
          ><img
            src="images/phone.svg"
            alt="https://www.flaticon.com/authors/freepik"/></div
      ></div>
      <div>+1 912-252-7350</div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>

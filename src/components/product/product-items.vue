<script>
import { mapState, mapGetters } from 'vuex'
import Product from './base-product.vue'
export default {
  components: {
    Product,
  },
  data() {
    return {
      activeMenu: {
        serial: 1,
      },
    }
  },
  computed: {
    ...mapState('products', ['products']),
    ...mapGetters('menus', ['getMenuStateClass', 'getMenuBars']),
  },
}
</script>

<template>
  <div class="products">
    <div class="container">
      <div class="row">
        <div class="col-lg-6 offset-lg-3">
          <div class="section_title text-center">আমাদের পণ্য</div>
        </div>
      </div>
      <div class="row page_nav_row">
        <div class="col">
          <div class="page_nav">
            <ul
              class="d-flex flex-row align-items-start justify-content-center"
            >
              <li
                v-for="(menu, index) in getMenuBars"
                :key="index"
                style="font-size: x-large"
                :class="{ active: menu.serial === activeMenu.serial }"
                ><a href="#">{{ menu.title }}</a></li
              >
            </ul>
          </div>
        </div>
      </div>
      <div class="row products_row">
        <!-- Product -->
        <Product
          v-for="(product, index) in products"
          :key="index"
          :product="product"
        />
      </div>
      <div class="row load_more_row">
        <div class="col">
          <div class="button load_more ml-auto mr-auto"
            ><a href="#">load more</a></div
          >
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* stylelint-disable */
@media screen and (max-width: 700px) {
  .page_nav ul li:not(:last-of-type)::after {
    display: contents;
  }
}

@media screen and (max-width: 350px) {
  .col {
    display: none;
  }
  .page_nav_row {
    margin-top: 0px;
  }
}
</style>

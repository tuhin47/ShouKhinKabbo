<script>
import { mapGetters } from 'vuex'
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
      products: [
        {
          id: 1,
          image_url:
            'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/1200px-Image_created_with_a_mobile_phone.png',
          details: 'joss phn',
          price: '50',
        },
      ],
    }
  },
  computed: {
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
        <Product v-for="index in 9" :key="index" :product="products[0]" />
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

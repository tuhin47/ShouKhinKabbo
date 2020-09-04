<script>
import { mapGetters } from 'vuex'
import appConfig from '@src/app.config'
import Layout from '@layouts/main.vue'
import ProductItems from '@components/product/product-items.vue'
import TrendBoxes from '@components/trend/trend-boxes.vue'
// import HomeSlider from '@components/home-slider.vue'
export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: { Layout, ProductItems, TrendBoxes },
  computed: {
    ...mapGetters('menus', [
      'getMenuStateClass',
      'getMenuState',
      'getMenuBars',
    ]),
  },
  methods: {
    clickedOutSide() {
      if (this.getMenuState) {
        this.$store.dispatch('menus/togglemenu')
      }
    },
  },
}
</script>

<template>
  <Layout>
    <div class="super_container">
      <div
        tabindex="0"
        :class="'super_container_inner' + getMenuStateClass"
        @focus="clickedOutSide"
      >
        <div class="super_overlay"></div>

        <!-- Home -->
        <!-- <HomeSlider /> -->

        <!-- Products -->
        <ProductItems />

        <!-- Boxes -->
        <TrendBoxes />

        <!-- Features -->

        <div class="features">
          <div class="container">
            <div class="row">
              <!-- Feature -->
              <div class="col-lg-4 feature_col">
                <div
                  class="feature d-flex flex-row align-items-start justify-content-start"
                >
                  <div class="feature_left">
                    <div class="feature_icon"
                      ><img src="images/icon_1.svg" alt=""
                    /></div>
                  </div>
                  <div
                    class="feature_right d-flex flex-column align-items-start justify-content-center"
                  >
                    <div class="feature_title">Fast Secure Payments</div>
                  </div>
                </div>
              </div>

              <!-- Feature -->
              <div class="col-lg-4 feature_col">
                <div
                  class="feature d-flex flex-row align-items-start justify-content-start"
                >
                  <div class="feature_left">
                    <div class="feature_icon ml-auto mr-auto"
                      ><img src="images/icon_2.svg" alt=""
                    /></div>
                  </div>
                  <div
                    class="feature_right d-flex flex-column align-items-start justify-content-center"
                  >
                    <div class="feature_title">Premium Products</div>
                  </div>
                </div>
              </div>

              <!-- Feature -->
              <div class="col-lg-4 feature_col">
                <div
                  class="feature d-flex flex-row align-items-start justify-content-start"
                >
                  <div class="feature_left">
                    <div class="feature_icon"
                      ><img src="images/icon_3.svg" alt=""
                    /></div>
                  </div>
                  <div
                    class="feature_right d-flex flex-column align-items-start justify-content-center"
                  >
                    <div class="feature_title">Free Delivery</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

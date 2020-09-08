<script>
import Layout from '@layouts/main.vue'
import PageTitle from '@components/page-title-bar.vue'
import ProductContent from '@components/product/product-content.vue'

export default {
  page: {
    title: 'Product Details',
    meta: [{ name: 'description', content: 'The Product Details page.' }],
  },
  components: { Layout, PageTitle, ProductContent },
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
}
</script>

<template>
  <Layout>
    <PageTitle title="Product Details" />
    <!-- Product -->
    <div class="container">
      <div class="row">
        <!-- Product Image -->
        <div class="col-lg-8 offset-lg-2">
          <div class="product_image_slider_container">
            <div id="slider" class="flexslider">
              <ul class="slides">
                <li class="d-flex justify-content-center">
                  <img
                    :src="
                      product.image_url ||
                        'https://bulma.io/images/placeholders/1280x960.png'
                    "
                  />
                </li>
              </ul>
            </div>
          </div>
        </div>
        <!-- Product Info -->
        <!-- <ProductContent :product="product">assdf</ProductContent> -->
        <div class="col-lg-8 offset-lg-2">
          <div>
            <ProductContent :product="product"></ProductContent>
          </div>
        </div>
      </div>
    </div>
  </Layout>
</template>

<style lang="scss" scoped>
.container {
  padding-top: 20px;
}
</style>

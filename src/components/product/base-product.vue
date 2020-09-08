<script>
import ProdcuctContent from './product-content.vue'
export default {
  components: {
    ProdcuctContent,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <div class="col-xl-4 col-md-6">
    <div class="product">
      <div class="product_image"
        ><img
          :src="
            product.image_url ||
              'https://bulma.io/images/placeholders/1280x960.png'
          "
          alt=""
      /></div>
      <ProdcuctContent :product="product" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
.product {
  padding-top: 0;
  padding-bottom: 0;
}
</style>

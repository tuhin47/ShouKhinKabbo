<script>
import Layout from '@layouts/origin.vue'
// import ProductCard from '@components/demo-product-card.vue'
import ProductItems from '@components/product/product-items.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'The Main Content page.' }],
  },
  components: {
    Layout,
    // ProductCard ,
    ProductItems,
  },
}
</script>

<template>
  <Layout>
    <ProductItems />
  </Layout>
</template>

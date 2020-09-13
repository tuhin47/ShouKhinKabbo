<script>
import Layout from '@layouts/origin.vue'
import ProductCard from '@components/demo-product-card.vue'

export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: 'The Main Content page.' }],
  },
  components: { Layout, ProductCard },
}
</script>

<template>
  <Layout>
    <v-container>
      <v-row>
        <ProductCard />
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </v-row>
    </v-container>
  </Layout>
</template>

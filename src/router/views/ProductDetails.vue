<script>
import Layout from '@layouts/main.vue'
import PageTitle from '@components/page-title-bar.vue'

export default {
  page: {
    title: 'Product Details',
    meta: [{ name: 'description', content: 'The Product Details page.' }],
  },
  components: { Layout, PageTitle },
}
</script>

<template>
  <Layout>
    <PageTitle title="Product Details" />
    <!-- Product -->
  </Layout>
</template>

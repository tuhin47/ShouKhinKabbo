<script>
import Layout from '@layouts/main.vue'
import PageTitle from '@components/page-title-bar.vue'
export default {
  page: {
    title: 'Place Order',
    meta: [{ name: 'description', content: 'The Place Order page.' }],
  },
  components: { Layout, PageTitle },
  methods: {
    async placeOrders() {
      const info = { name: 'Tal mia', mobile: '01712285805' }
      const products = this.productsAdded
      const response = await this.placeOrder({ info: info, orders: products })
      if (!response) {
        console.error('Order not success')
      }
    },
  },
}
</script>

<template>
  <Layout>
    <PageTitle title="অর্ডার পেজ" />
  </Layout>
</template>

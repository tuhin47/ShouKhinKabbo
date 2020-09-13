<script>
import Layout from '@layouts/origin.vue'
import PlaceOrder from '@components/order/order-table.vue'
export default {
  page: {
    title: 'Order View',
    meta: [{ name: 'description', content: 'The Order View page.' }],
  },
  components: { Layout, PlaceOrder },
}
</script>

<template>
  <Layout>
    <PlaceOrder />
  </Layout>
</template>

<script>
import { mapGetters } from 'vuex'
import Layout from '@layouts/origin.vue'
import OrderTable from '@components/order/order-table.vue'
import InfoForm from '@components/order/info-form.vue'

export default {
  page: {
    title: 'Place Order',
    meta: [{ name: 'description', content: 'The Place Order page.' }],
  },
  components: {
    Layout,
    OrderTable,
    InfoForm,
  },
  computed: {
    ...mapGetters('products', {
      productsAdded: 'productsAdded',
      isCheckoutModalOpen: 'isCheckoutModalOpen',
    }),
    orders() {
      return this.productsAdded
    },
  },
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
    <div class="container">
      <div class="col-sm-12 col-md-8">
        <OrderTable :orders="productsAdded"></OrderTable>
      </div>
      <div class="col-sm-12 col-md-4">
        <InfoForm />
      </div>
    </div>
  </Layout>
</template>

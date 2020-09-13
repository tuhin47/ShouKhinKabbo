<script>
import { mapGetters } from 'vuex'
import Layout from '@layouts/origin.vue'
// import PageTitle from '@components/page-title-bar.vue'
import OrderTable from '@components/order/order-table.vue'
// import InfoForm from '@components/order/info-form.vue'
export default {
  page: {
    title: 'Place Order',
    meta: [{ name: 'description', content: 'The Place Order page.' }],
  },
  components: {
    Layout,
    // PageTitle,
    OrderTable,
    // InfoForm
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
    <OrderTable :orders="productsAdded"></OrderTable>
    <!--<PageTitle title="অর্ডার পেজ" />
    <div class="d-flex justify-content-center">
      <div class="table-responsive col-md-10">

      </div>
    </div>-->

    <!-- <div class="d-flex justify-content-center">
      <div class="col-md-6">
        <InfoForm />
      </div>
    </div>-->
  </Layout>
</template>

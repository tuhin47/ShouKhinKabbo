<script>
// import BaseBody from '@components/_base-body.vue'
export default {
  props: {
    orders: {
      type: Array,
      required: true,
    },
  },
  // components: { BaseBody },
}
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="col-md-10 col-sm-10">
      <table class="table text-center">
        <thead class="black white-text">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Product Id</th>
            <th scope="col">Title</th>
            <th scope="col">Base Price</th>
            <th scope="col">Quantity</th>
            <th scope="col">Total</th>
          </tr>
        </thead>
        <tbody id="order">
          <tr v-for="(product, index) in orders" :key="product.id">
            <th>{{ index + 1 }}</th>
            <td>{{ product.id }}</td>
            <td>{{ product.title }}</td>
            <td>{{ product.price }}</td>
            <td class="hide">{{ product.quantity }}</td>
            <td>{{ product.price * product.quantity }} </td>
          </tr>

          <!-- <tr
            ><td colspan="2"></td>
            <td colspan="3"
              ><strong>{{ buyLabel }}</strong></td
            >
          </tr> -->
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
@import '@design';
</style>

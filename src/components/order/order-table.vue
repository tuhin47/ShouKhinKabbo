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
  <table class="table table-striped text-center">
    <thead class="black white-text">
      <tr>
        <th scope="col">#</th>
        <!-- <th scope="col">Product Id</th> -->
        <th scope="col">Title</th>
        <th scope="col">Base Price</th>
        <th scope="col">Quantity</th>
        <th scope="col">Total</th>
      </tr>
    </thead>
    <tbody id="order">
      <tr v-for="(product, index) in orders" :key="product.id">
        <th>{{ index + 1 }}</th>
        <!-- <td>
          <router-link :to="'/product/' + product.id">
            <a>{{ product.id }}</a>
          </router-link>
        </td> -->
        <td>
          <router-link :to="'/product/' + product.id">
            <a>{{ product.title }}</a>
          </router-link>
        </td>
        <td>{{ product.price }}</td>
        <td class="hide">{{ product.quantity }}</td>
        <td>{{ product.price * product.quantity }} </td>
      </tr>
    </tbody>
  </table>
</template>

<style lang="scss" scoped>
@import '@design';
</style>

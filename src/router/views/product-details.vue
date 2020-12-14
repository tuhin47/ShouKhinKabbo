<script>
import Layout from '@layouts/origin.vue'

export default {
  page: {
    title: 'Product Details',
    meta: [{ name: 'description', content: 'The Product Details page.' }],
  },
  components: { Layout },
  props: {
    product: {
      required: true,
      type: Object,
    },
  },
}
</script>

<template>
  <Layout></Layout>
</template>

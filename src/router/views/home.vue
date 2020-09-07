<script>
import appConfig from '@src/app.config'
import Layout from '@layouts/main.vue'
import ProductItems from '@components/product/product-items.vue'
import PageTitle from '@components/page-title-bar.vue'
// import TrendBoxes from '@components/trend/trend-boxes.vue'
// import HomeSlider from '@components/home-slider.vue'
//  import FeatureGroup from '@components/featues-group.vue'
export default {
  page: {
    title: 'Home',
    meta: [{ name: 'description', content: appConfig.description }],
  },
  components: {
    Layout,
    ProductItems,
    PageTitle,
    // TrendBoxes
    // FeatureGroup
  },
}
</script>

<template>
  <Layout>
    <!-- Home -->

    <PageTitle title="আমাদের পন্য" />

    <!-- Products -->
    <ProductItems />

    <!-- Boxes -->
    <!-- <TrendBoxes /> -->

    <!-- Features -->
    <!-- <FeatureGroup /> -->
  </Layout>
</template>

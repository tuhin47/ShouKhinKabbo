<script>
import BoxItem from './box-item.vue'
export default {
  components: {
    BoxItem,
  },
  data() {
    return {
      boxes: [
        {
          blur_image: 'images/box_1.jpg',
          box_image: 'images/box_1_img.jpg',
          href: '404',
          box_title: 'Trending',
        },
        {
          blur_image: 'images/box_1.jpg',
          box_image: 'images/box_1_img.jpg',
          href: '404',
          box_title: 'Trending',
        },
        {
          blur_image: 'images/box_1.jpg',
          box_image: 'images/box_1_img.jpg',
          href: '404',
          box_title: 'Trending',
        },
      ],
    }
  },
}
</script>

<template>
  <!-- Boxes -->

  <div class="boxes">
    <div class="container">
      <div class="row">
        <div class="col">
          <div
            class="boxes_container d-flex flex-row align-items-start justify-content-between flex-wrap"
          >
            <BoxItem v-for="(item, index) in boxes" :key="index" :box="item" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>

<script>
export default {
  props: {
    box: {
      type: Object,
      required: true,
    },
  },
}
</script>

<template>
  <!-- Box -->
  <div class="box">
    <div
      class="background_image"
      :style="`background-image:url(${box.blur_image})`"
    ></div>
    <div
      class="box_content d-flex flex-row align-items-center justify-content-start"
    >
      <div class="box_left">
        <div class="box_image">
          <a href="category.html">
            <div
              class="background_image"
              :style="`background-image:url(${box.box_image})`"
            ></div>
          </a>
        </div>
      </div>
      <div class="box_right text-right">
        <div class="box_title">{{ box.box_title }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>

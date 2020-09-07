<script>
export default {
  props: {
    title: {
      required: true,
      type: String,
    },
  },
}
</script>

<template>
  <div class="home">
    <div class="home_content text-center">
      <div class="home_title">{{ title }}</div></div
    >
  </div>
</template>

<style lang="scss" scoped>
.home {
  height: 137px;
}
/* stylelint-disable */
.text-center {
  padding-top: 17px;
}
</style>

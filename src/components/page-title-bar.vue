<script>
export default {
  props: {
    title: {
      required: true,
    },
  },
}
</script>

<template>
  <div class="home">
    <div
      class="home_container d-flex flex-column align-items-center justify-content-end"
    >
      <div class="home_content text-center">
        <div class="home_title">{{ title }}</div>
        <div
          class="breadcrumbs d-flex flex-column align-items-center justify-content-center"
        >
          <ul
            class="d-flex flex-row align-items-start justify-content-start text-center"
          >
            <!-- <li><a href="#">Home</a></li>
              <li><a href="category.html">Woman</a></li>
              <li>New Products</li> -->
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>

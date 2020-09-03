<script>
import Header from '@components/header-bar.vue'

export default {
  components: { Header },
}
</script>

<template>
  <div>
    <Header />
    <slot />
  </div>
</template>

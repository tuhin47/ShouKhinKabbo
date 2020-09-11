<script>
import appConfig from '@src/app.config'
export default {
  name: 'App',
  page: {
    titleTemplate(title) {
      title = typeof title === 'function' ? title(this.$store) : title
      return title ? `${appConfig.title} | ${title}` : appConfig.title
    },
  },
}
</script>

<template>
  <v-app>
    <RouterView :key="$route.fullPath" />
  </v-app>
</template>

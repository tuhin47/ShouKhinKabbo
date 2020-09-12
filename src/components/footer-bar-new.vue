<script>
export default {
  data: () => ({
    icons: ['mdi-facebook', 'mdi-twitter', 'mdi-linkedin', 'mdi-instagram'],
    links: ['Home', 'About Us', 'Team', 'Services', 'Blog', 'Contact Us'],
  }),
}
</script>

<template>
  <v-footer dark color="#262c4d" padless>
    <v-row justify="center" no-gutters>
      <v-btn
        v-for="link in links"
        :key="link"
        color="white"
        text
        rounded
        class="my-2"
      >
        {{ link }}
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn v-for="icon in icons" :key="icon" class="my-2" dark icon>
        <v-icon size="24px">{{ icon }}</v-icon>
      </v-btn>
      <v-col class="text-center white--text" cols="12">
        {{ new Date().getFullYear() }} — &#x24CB; 2.7.1
      </v-col>
    </v-row>
  </v-footer>
</template>

<style lang="scss" scoped>
@import '@design';
/* stylelint-disable*/
.theme--dark.v-card {
  background-image: repeating-linear-gradient(
    to top right,
    rgba(100, 115, 201, 0.7),
    rgba(25, 32, 72, 0.7)
  );
}
</style>

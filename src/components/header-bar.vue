<script>
import store from '@state/store'
import { mapGetters } from 'vuex'
export default {
  name: 'TopHeader',
  computed: {
    ...mapGetters('products', ['productsAdded']),
    productsAddedLength: function() {
      return this.productsAdded.length
    },
  },
  methods: {
    toggleNavIcon() {
      store.commit('menus/TOGGLE_MENU', true)
    },
    toggleCheckOut() {
      store.commit('products/showCheckoutModal', true)
    },
  },
}
</script>

<template>
  <div>
    <v-app-bar app color="gray" dark>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click.stop="toggleNavIcon"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title
        :class="[
          'display-1',
          {
            title: $vuetify.breakpoint.xs,
          },
          'font-weight-black',
        ]"
      >
        <div class="head-title">
          <router-link to="/">শৌখিন কাব্য</router-link>
        </div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon @click="toggleCheckOut">
        <v-icon v-if="!productsAddedLength"> fas fa-cart-plus</v-icon>
        <v-badge v-else color="red" :content="productsAddedLength">
          <v-icon> fas fa-cart-plus</v-icon>
        </v-badge>
      </v-btn>

      <v-btn icon @click.stop="toggleNavIcon">
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>
      <template v-slot:extension>
        <v-tabs v-show="false" right>
          <v-tab>Tab 1</v-tab>
          <v-tab>Tab 2</v-tab>
          <v-tab>Tab 3</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
  </div>
</template>

<style type="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Galada&display=swap');
/* stylelint-disable*/

.v-application a {
  color: #e5f2ff;
  text-decoration: none;
}

.head-title {
  font-family: 'Galada', cursive;
  font-size: calc(100% + 1vw + 1vh);
}
.display-1 {
  padding-top: 3rem;
}
.title {
  padding-top: 1rem;
}
</style>

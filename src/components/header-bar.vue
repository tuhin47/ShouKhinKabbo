<script>
import store from '@state/store'
export default {
  name: 'TopHeader',
  methods: {
    toggleNavIcon() {
      store.commit('menus/TOGGLE_MENU', true)
    },
  },
}
</script>

<template>
  <div>
    <v-app-bar fixed color="gray" dark>
      <template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
        ></v-img>
      </template>
      <v-app-bar-nav-icon @click="toggleNavIcon"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title
        :class="[
          {
            'display-1': $vuetify.breakpoint.xs,
            'display-2': $vuetify.breakpoint.sm,
            'display-3':
              $vuetify.breakpoint.md ||
              $vuetify.breakpoint.lg ||
              $vuetify.breakpoint.xl,
          },
          'font-weight-black',
        ]"
      >
        <div class="head-title"
          ><router-link to="/">শৌখিন কাব্য </router-link></div
        >
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
      <v-btn icon>
        <v-badge color="red" content="6">
          <v-icon> fas fa-cart-plus</v-icon>
        </v-badge>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-dots-vertical</v-icon>
      </v-btn>

      <template v-slot:extension>
        <v-tabs right>
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
.display-1 {
  padding-top: 1rem;
}

.display-2,
.display-3 {
  padding-top: 3rem;
}

.head-title {
  padding: 1rem 1rem;
  font-family: 'Galada', cursive;
}
</style>

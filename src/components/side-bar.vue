<script>
import store from '@state/store'
import { mapGetters } from 'vuex'
export default {
  data: () => ({
    items: [
      { title: 'Home', icon: 'fas fa-home' },
      { title: 'Order', icon: 'fas fa-shipping-fast' },
      { title: 'About', icon: 'far fa-address-card' },
      { title: 'Contact', icon: 'fas fa-file-signature' },
    ],
  }),
  computed: {
    ...mapGetters({ drawerState: 'menus/getMenuState' }),
    drawer: {
      get() {
        return this.drawerState
      },
      set(val) {
        if (!val) store.commit('menus/TOGGLE_MENU', false)
      },
    },
  },
}
</script>

<template>
  <v-navigation-drawer v-model="drawer" fixed dark app temporary>
    <v-list-item v-show="false">
      <v-list-item-avatar>
        <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
      </v-list-item-avatar>

      <v-list-item-content>
        <v-list-item-title>John Leider</v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list>
      <v-list-item v-for="item in items" :key="item.title" link>
        <v-list-item-icon>
          <v-icon>{{ item.icon }}</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
    <v-footer class="justify-center pl-0" dark inset app>
      <span>&copy; 2020</span>
    </v-footer>
  </v-navigation-drawer>
</template>

<style type="scss" scoped>
/* stylelint-disable*/
.theme--dark.v-footer,
.theme--dark.v-navigation-drawer {
  background-image: repeating-linear-gradient(
    to top right,
    rgba(100, 115, 201, 0.7),
    rgba(25, 32, 72, 0.7)
  );
}
</style>

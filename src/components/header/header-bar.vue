<script>
import { mapGetters } from 'vuex'
import appConfig from '@src/app.config'
import store from '@state/store'

export default {
  data() {
    return {
      appConfig,
    }
  },
  computed: {
    ...mapGetters('menus', ['getMenuStateClass', 'getMenuBars']),
    ...mapGetters('products', ['productsAdded']),
    productsAddedLenght() {
      return this.productsAdded.length
    },
  },
  methods: {
    toggleMenuBar() {
      store.commit('menus/TOGGLE_MENU')
    },
    showCheckoutModal() {
      this.$store.commit('products/showCheckoutModal', true)
    },
  },
}
</script>

<template>
  <div :class="'header' + getMenuStateClass">
    <v-app-bar fixed color="white">
      <!--<template v-slot:img="{ props }">
        <v-img
          v-bind="props"
          gradient="to top right, rgba(19,84,122,.5), rgba(128,208,199,.8)"
        ></v-img>
      </template>-->

      <v-app-bar-nav-icon @click="toggleMenuBar"></v-app-bar-nav-icon>

      <v-toolbar-title>{{ appConfig.title }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <div class="user">
        <a :href="`tel:${appConfig.mobile}`">
          <div>
            <img src="@public/images/phone.svg" />
          </div>
        </a>
      </div>

      <div class="user" @click="showCheckoutModal"
        ><a href="#">
          <div
            ><img src="@public/images/cart.svg" />
            <div>{{ productsAddedLenght ? productsAddedLenght : 0 }}</div>
          </div></a
        >
      </div>
      <!--<v-btn icon>
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>-->
    </v-app-bar>
  </div>
</template>

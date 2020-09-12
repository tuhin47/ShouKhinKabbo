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
      <!--<template v-slot:img="{ props }">
                                    <v-img
                                      v-bind="props"
                                      gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
                                    ></v-img>
                                  </template>-->
      <v-app-bar-nav-icon @click="toggleNavIcon"></v-app-bar-nav-icon>
      <v-spacer></v-spacer>
      <v-toolbar-title
        :class="[
          '_title ',
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
        <div class="head-title">শৌখিন কাব্য</div>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-magnify</v-icon>
      </v-btn>

      <v-btn icon>
        <v-icon>mdi-heart</v-icon>
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
.display-1 {
  padding-top: 1rem;
}

.display-2,
.display-3 {
  padding-top: 3rem;
}

.head-title {
  font-family: 'Galada', cursive;
}
</style>

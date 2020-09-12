<script>
import ProductCard from '@components/demo-product-card.vue'

export default {
  components: { ProductCard },
  data: () => ({
    drawer: false,
    items: [
      { title: 'Home', icon: 'dashboard' },
      { title: 'About', icon: 'question_answer' },
    ],
  }),
}
</script>

<template>
  <div>
    <v-container class="grey lighten-5">
      <v-app id="inspire">
        <v-row class="mb-6" no-gutters> </v-row>
        <v-app-bar fixed color="gray" dark>
          <!--<template v-slot:img="{ props }">
                            <v-img
                              v-bind="props"
                              gradient="to top right, rgba(100,115,201,.7), rgba(25,32,72,.7)"
                            ></v-img>
                          </template>-->
          <v-app-bar-nav-icon @click="drawer = true"></v-app-bar-nav-icon>
          <v-spacer></v-spacer>
          <v-toolbar-title
            :class="[
              '_title ',
              {
                'display-1': $vuetify.breakpoint.sm || $vuetify.breakpoint.xs,
                'display-3':
                  $vuetify.breakpoint.md ||
                  $vuetify.breakpoint.lg ||
                  $vuetify.breakpoint.xl,
              },
              'font-weight-black',
            ]"
            ><div id="title">শৌখিন কাব্য</div>
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
        <br /><br />
        <v-container>
          <v-row>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
            <ProductCard></ProductCard>
          </v-row>
        </v-container>
      </v-app>
    </v-container>
    <v-navigation-drawer v-model="drawer" absolute temporary>
      <v-list-item>
        <v-list-item-avatar>
          <v-img src="https://randomuser.me/api/portraits/men/78.jpg"></v-img>
        </v-list-item-avatar>

        <v-list-item-content>
          <v-list-item-title>John Leider</v-list-item-title>
        </v-list-item-content>
      </v-list-item>

      <v-divider></v-divider>

      <v-list dense>
        <v-list-item v-for="item in items" :key="item.title" link>
          <v-list-item-icon>
            <v-icon>{{ item.icon }}</v-icon>
          </v-list-item-icon>

          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </div>
</template>

<style type="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Galada&display=swap');

#title {
  padding-top: 3rem;
  font-family: 'Galada', cursive;
}
</style>

<script>
export default {
  data() {
    return {
      name: 'Black Shoes for Men',
      rating: 3,
      price: 57.0,
      reduc: 0.5,
      color: 'grey lighten-2',
    }
  },
  computed: {
    displayPrice() {
      return this.price * this.reduc
    },
  },
  methods: {
    colchange() {
      this.color = this.color === 'blue' ? 'grey lighten-2' : 'blue'
    },
  },
}
</script>

<template>
  <div class="col-md-4 col-sm-6 col-xs-12 col-lg-4 col-xl-3 flex">
    <v-img
      contain
      class="white--text"
      height="300px"
      src="https://pngimg.com/uploads/men_shoes/men_shoes_PNG7475.png"
    ></v-img>
    <v-card-title>
      <div class="mx-5">
        <span class="title blue--text">{{ name }}</span
        ><br />
        <v-rating
          v-model="rating"
          readonly
          small
          dense
          background-color="orange"
          color="orange"
        ></v-rating>
        <span class="title"> ${{ displayPrice }}</span>
        <del class=""> ${{ price }}</del>
      </div>
    </v-card-title>
    <v-card-actions>
      <v-btn
        large
        rounded
        depressed
        :color="color"
        class="mx-auto"
        @click="colchange"
        >ADD TO CART</v-btn
      >
    </v-card-actions>
  </div>
</template>

<style lang="scss" module>
@import '@design';
</style>

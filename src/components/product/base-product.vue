<script>
// import ProductContent from './product-content.vue'
import banglaNumeric from '@utils/format-numaric'

export default {
  components: {
    // ProductContent,
  },
  props: {
    product: {
      type: Object,
      required: true,
    },
  },

  data() {
    return {
      addToCartLabel: 'Add to cart',
      viewDetailsLabel: 'Details',
      removeFromCartLabel: 'Remove from cart',
      addToFavouriteLabel: 'Add to favourite',
      removeFromFavouriteLabel: 'Remove from favourite',
      selected: 1,
      quantityArray: [],
    }
  },

  computed: {
    isUserLogged() {
      return this.$store.getters.isUserLoggedIn
    },
  },

  mounted() {
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i)
    }

    if (this.$props.product.quantity > 1) {
      this.selected = this.$props.product.quantity
    }
  },

  methods: {
    banglaNumeric: banglaNumeric,
    cartbuttonClicked() {
      if (this.product.isAddedToCart) this.removeFromCart(this.product.id)
      else this.addToCart(this.product.id)
    },
    changeQuantity(quantity, item) {
      this.$store.commit('products/quantity', {
        id: item.id,
        quantity: quantity.target.value,
      })
    },
    addToCart(id) {
      const data = {
        id: id,
        status: true,
      }
      this.$store.commit('products/addToCart', id)
      this.$store.commit('products/setAddedBtn', data)
    },
    removeFromCart(id) {
      const data = {
        id: id,
        status: false,
      }
      this.$store.commit('products/removeFromCart', id)
      this.$store.commit('products/setAddedBtn', data)
    },
    saveToFavorite(id) {
      const isUserLogged = this.$store.state.userInfo.isLoggedIn

      if (isUserLogged) {
        this.$store.commit('addToFavourite', id)
      } else {
        this.$store.commit('showLoginModal', true)
      }
    },
    removeFromFavourite(id) {
      this.$store.commit('removeFromFavourite', id)
    },
    onSelectQuantity(id) {
      const data = {
        id: id,
        quantity: this.selected,
      }
      this.$store.commit('quantity', data)
    },
  },
}
</script>

<template>
  <div class="col-xl-4 col-md-4">
    <div class="product">
      <div class="product_image "
        ><img
          :src="
            product.image_url ||
              'https://bulma.io/images/placeholders/1280x960.png'
          "
          alt=""
      /></div>
      <div class="product_content">
        <div class="container">
          <div class="row">
            <div class="col-8">
              <div class="display-1 ">
                <div class="bangla-galada">
                  {{ product.title }}
                </div>
              </div>
              <div class="small">#{{ product.id }}</div>
            </div>
            <div class="col-4 d-flex justify-content-end">
              <div class=" display-1">
                <div class="bangla-galada"
                  >{{ banglaNumeric(product.price) }}/=</div
                >
              </div>
            </div>
          </div>
          <div class="row justify-content-between">
            <div class="offset-5 col-3">
              <label>
                <select
                  v-if="!product.isAddedToCart"
                  :value="product.quantity"
                  class="custom-select"
                  @change="changeQuantity($event, product)"
                >
                  <option v-for="index in 6" :key="index" :value="index">{{
                    index
                  }}</option>
                </select>
              </label>
            </div>
            <div
              :class="[
                'col-4 product_button ',
                { productButtonPlus: true },
                { productButtonMinus: false },
                'text-center d-flex flex-column align-items-center justify-content-center',
              ]"
            >
              <v-badge v-if="true" color="green" content="+">
                <v-icon> fas fa-cart-plus</v-icon>
              </v-badge>
              <v-badge v-else color="red" content="-">
                <v-icon> fas fa-cart-arrow-down</v-icon>
              </v-badge>
            </div>
          </div>
        </div>
      </div>
      <!--<div class="product_content">
        <div
          class="product_info d-flex flex-row align-items-start justify-content-start"
        >
          <div>
            <div>
              <div class="product_name productname"
              ><router-link :to="'/product/' + product.id"
              ><a>{{ product.title }}</a></router-link
              >
              </div>
              <div class="product_category">
                &lt;!&ndash; In <a href="category.html">Category</a> &ndash;&gt;
              </div>
            </div>
          </div>
          <div class="ml-auto text-right">
            &lt;!&ndash; <div class="rating_r rating_r_4 home_item_rating"
                  ><i></i><i></i><i></i><i></i><i></i
                ></div> &ndash;&gt;
            <div
              class="productprice product_price text-right"
              style="line-height: 0;"
            >{{ banglaNumeric(product.price) }}<span>টাকা</span></div
            >
          </div>
        </div>
        <div class="product_buttons productbuttons">
          <div
            class="text-right d-flex flex-row align-items-end justify-content-end"
          >
            <div
              style="border-top: 0"
              class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center"
              @click="cartbuttonClicked"
            >
              <div
              ><div
              ><img src="@public/images/cart.svg" class="svg" alt="cart" />
                <div v-if="product.isAddedToCart" style="background:red">-</div>
                <div v-else>+</div>
              </div>
              </div>
            </div>
          </div>
        </div>
      </div>-->
    </div>
  </div>
</template>

<style lang="scss" scoped>
/* stylelint-disable*/
@import url('https://fonts.googleapis.com/css2?family=Galada&display=swap');

.product {
  height: 100%;
}
.product_button {
  margin-bottom: 0.6rem;
  margin-right: -0.25rem;
}
.productButtonPlus:hover {
  background-color: lightgreen;
}
.productButtonPlus:active {
  background-color: #4da24d;
}
.productButtonMinus:hover {
  background-color: #ff9e9e;
}
.productButtonMinus:active {
  background-color: #d4001f;
}
.product_content {
  padding: 0 0.15rem;
  height: 10rem;
  border: solid 4px #ddd7d7;
}

.product_image img {
  width: 100%;
}

.bangla-galada {
  font-family: 'Galada', cursive;
  color: #0852e2;
}
</style>

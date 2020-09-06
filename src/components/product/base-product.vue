<script>
import banglaNumeric from '@utils/format-numaric'
export default {
  name: 'Products',
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
  <div class="col-xl-4 col-md-6">
    <div class="product">
      <div class="product_image"
        ><img
          :src="
            product.image_url ||
              'https://bulma.io/images/placeholders/1280x960.png'
          "
          alt=""
      /></div>
      <div class="product_content">
        <div
          class="product_info d-flex flex-row align-items-start justify-content-start"
        >
          <div>
            <div>
              <div class="product_name"
                ><a>{{ product.title }}</a></div
              >
              <div class="product_category">
                <!-- In <a href="category.html">Category</a> -->
              </div>
            </div>
          </div>
          <div class="ml-auto text-right">
            <!-- <div class="rating_r rating_r_4 home_item_rating"
              ><i></i><i></i><i></i><i></i><i></i
            ></div> -->
            <div class="product_price text-right" style="line-height: 0;"
              >{{ banglaNumeric(product.price) }}<span>টাকা</span></div
            >
          </div>
        </div>
        <div class="product_buttons">
          <div
            class="text-right d-flex flex-row align-items-end justify-content-end"
          >
            <select
              v-if="!product.isAddedToCart"
              :value="product.quantity"
              style="margin: 12px 31px;"
              class="col-md-2 custom-select"
              @change="changeQuantity($event, product)"
            >
              <option v-for="index in 6" :key="index" :value="index">{{
                index
              }}</option>
            </select>
            <div
              style="border-top: 0"
              class="product_button product_cart text-center d-flex flex-column align-items-center justify-content-center"
              @click="cartbuttonClicked"
            >
              <div
                ><div
                  ><img src="images/cart.svg" class="svg" alt="cart" />
                  <div v-if="product.isAddedToCart" style="background:red"
                    >-</div
                  >
                  <div v-else>+</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

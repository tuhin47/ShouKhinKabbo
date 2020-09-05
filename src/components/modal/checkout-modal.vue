<template>
  <div>
    <b-modal
      v-model="openModal"
      :title="modalTitle"
      :header-bg-variant="footerBgVariant"
      :header-text-variant="headerTextVariant"
      :body-bg-variant="bodyBgVariant"
      :body-text-variant="bodyTextVariant"
    >
      <b-container v-if="!isCheckoutSection" fluid>
        <b-row class="mb-1 text-center">
          <b-col cols="3">Title</b-col>
          <b-col cols="3">Unit Price</b-col>
          <b-col cols="3">Quantity</b-col>
          <b-col>Total</b-col>
        </b-row>
        <hr />
        <div v-for="product in products" :key="product.id">
          <b-row class="mb-1">
            <b-col cols="4">{{ product.title }}</b-col>
            <b-col cols="2">{{ product.price }}</b-col>
            <b-col cols="3">
              <b-form-select
                v-model="product.quantity"
                :options="[1, 2, 3, 4, 5, 6]"
              ></b-form-select>
            </b-col>
            <b-col cols="1"></b-col>
            <b-col cols="1">{{ product.price * product.quantity }} </b-col>
          </b-row>
        </div>
      </b-container>

      <template v-slot:modal-footer>
        <!-- <div class="w-100">
          <p class="float-left">Modal Footer Content</p>

        </div> -->
        <a :href="`tel:${appConfig.mobile}`"
          ><div
            ><img
              width="20px"
              src="images/phone.svg"
              alt="https://www.flaticon.com/authors/freepik"/></div
        ></a>
        <strong>{{ buyLabel }}</strong>
        <a href="https://m.me/shoukhinkabbo" target="_blank"
          ><div
            ><img
              width="20px"
              src="images/messenger.svg"
              alt="https://www.flaticon.com/authors/freepik"/></div
        ></a>
        <b-col cols="2"></b-col>
        <b-button
          variant="danger"
          size="sm"
          class="float-right"
          @click="openModal = false"
        >
          Clear
        </b-button>
        <b-button
          variant="primary"
          size="sm"
          class="float-right"
          @click="openModal = false"
        >
          Close
        </b-button>
      </template>
    </b-modal>
  </div>
</template>

<script>
import appConfig from '@src/app.config'
import { mapGetters } from 'vuex'
export default {
  name: 'Checkout',

  data() {
    return {
      appConfig: appConfig,
      show: false,
      headerBgVariant: 'dark',
      headerTextVariant: 'light',
      bodyBgVariant: 'light',
      bodyTextVariant: 'dark',
      footerBgVariant: 'warning',
      footerTextVariant: 'dark',
      modalTitle: 'Checkout',
      removeLabel: 'Remove from cart',
      cartEmptyLabel: 'Your cart is empty',
      closeLabel: 'Close',
      isCheckoutSection: false,
    }
  },

  computed: {
    ...mapGetters('products', {
      products: 'productsAdded',
      isCheckoutModalOpen: 'isCheckoutModalOpen',
    }),
    openModal: {
      get() {
        if (this.isCheckoutModalOpen) {
          return true
        } else {
          return false
        }
      },
      set(val) {
        this.$store.commit('products/showCheckoutModal', val)
      },
    },
    buyLabel() {
      const totalProducts = this.products.length
      const productsAdded = this.products
      const pricesArray = []
      let productLabel = ''
      let finalPrice = ''
      let quantity = 1

      productsAdded.forEach((product) => {
        if (product.quantity >= 1) {
          quantity = product.quantity
        }

        pricesArray.push(product.price * quantity) // get the price of every product added and multiply quantity
      })

      finalPrice = pricesArray.reduce((a, b) => a + b, 0) // sum the prices

      if (totalProducts > 1) {
        // set plural or singular
        productLabel = 'products'
      } else {
        productLabel = 'product'
      }
      return `Buy ${totalProducts} ${productLabel} at ${finalPrice} Taka`
    },
    isUserLoggedIn() {
      return this.$store.getters.isUserLoggedIn
    },
  },

  methods: {
    closeModal(reloadPage) {
      this.$store.commit('showCheckoutModal', false)

      if (reloadPage) {
        window.location.reload()
      }
    },
    removeFromCart(id) {
      const data = {
        id: id,
        status: false,
      }
      this.$store.commit('removeFromCart', id)
      this.$store.commit('setAddedBtn', data)
    },
    onNextBtn() {
      if (this.isUserLoggedIn) {
        this.isCheckoutSection = true
      } else {
        this.$store.commit('showCheckoutModal', false)
        this.$store.commit('showLoginModal', true)
      }
    },
    onPrevBtn() {
      this.isCheckoutSection = false
    },
  },
}
</script>

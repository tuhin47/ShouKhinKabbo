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
      <b-container v-if="!isCheckoutSection" id="order" fluid>
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
            <b-col hidden class="hide" cols="3">{{ product.quantity }}</b-col>
            <b-col class="show" cols="3">
              <b-form-select
                :value="product.quantity"
                :options="[1, 2, 3, 4, 5, 6]"
                @change="changeQuantity($event, product)"
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
              src="@public/images/phone.svg"
              alt="https://www.flaticon.com/authors/freepik"/></div
        ></a>
        <strong>{{ buyLabel }}</strong>
        <a href="https://m.me/shoukhinkabbo" target="_blank"
          ><div
            ><img
              width="20px"
              src="@public/images/messenger.svg"
              alt="https://www.flaticon.com/authors/freepik"/></div
        ></a>
        <b-col cols="1"></b-col>
        <b-button
          v-if="orderButton"
          variant="success"
          size="sm"
          class="float-right"
          onclick="copyOrders()"
        >
          Copy Orders
        </b-button>
        <b-button
          variant="danger"
          size="sm"
          class="float-right"
          @click="clearSelectedCharts"
        >
          Clear
        </b-button>
        <b-button
          variant="dark"
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
// import html2canvas from 'html2canvas'
// import ClipboardItem from 'https://cdn.jsdelivr.net/npm/clipboard@1/dist/clipboard.min.js'

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
      modalTitle: 'Products',
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
    orderButton() {
      return this.products.length
    },
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
        productLabel = 'types of products'
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
    clearSelectedCharts() {
      this.$store.commit('products/clearSelectedCharts')
    },
    changeQuantity(quantity, item) {
      this.$store.commit('products/quantity', {
        id: item.id,
        quantity: quantity,
      })
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

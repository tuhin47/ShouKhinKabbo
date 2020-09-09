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
      <table class="table">
        <thead>
          <tr>
            <th>Title</th>
            <th>Unit Price</th>
            <th>Quantity</th>
            <th></th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody id="order">
          <tr v-for="product in products" :key="product.id">
            <td>{{ product.title }}</td>
            <td>{{ product.price }}</td>
            <td class="show">
              <b-form-select
                :value="product.quantity"
                :options="[1, 2, 3, 4, 5, 6]"
                @change="changeQuantity($event, product)"
              ></b-form-select>
            </td>
            <td hidden class="hide">{{ product.quantity }}</td>
            <td></td>
            <td>{{ product.price * product.quantity }} </td>
          </tr>

          <tr
            ><td colspan="2"></td>
            <td colspan="3"
              ><strong>{{ buyLabel }}</strong></td
            >
          </tr>
        </tbody>
      </table>

      <template v-slot:modal-footer>
        <a :href="`tel:${appConfig.mobile}`"
          ><div
            ><img
              width="20px"
              src="@public/images/phone.svg"
              alt="https://www.flaticon.com/authors/freepik"/></div
        ></a>
        <a href="https://m.me/shoukhinkabbo" target="_blank"
          ><div
            ><img
              width="20px"
              src="@public/images/messenger.svg"
              alt="https://www.flaticon.com/authors/freepik"/></div
        ></a>
        <b-button
          v-if="orderButton"
          variant="success"
          size="sm"
          class="float-right"
          @click="copyOrders"
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
    copyOrders() {
      const dom = document.querySelector('#order')
      dom.getElementsByClassName('hide').forEach((element) => {
        element.removeAttribute('hidden')
      })
      dom.getElementsByClassName('show').forEach((element) => {
        element.setAttribute('hidden', 'hidden')
      })
      if (document.createRange && window.getSelection) {
        const range = document.createRange()
        const sel = window.getSelection()
        sel.removeAllRanges()
        range.selectNodeContents(dom)
        sel.addRange(range)
      }
      document.execCommand('Copy')
      dom.getElementsByClassName('show').forEach((element) => {
        element.removeAttribute('hidden')
      })
      dom.getElementsByClassName('hide').forEach((element) => {
        element.setAttribute('hidden', 'hidden')
      })
      // return image
    },
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

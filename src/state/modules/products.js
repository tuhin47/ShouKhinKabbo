import ProductService from '@src/services/ProductService.js'
import store from '@state/store'
export const getters = {
  productsAdded: (state) => {
    return productAddedList(state.products)
  },
  productsAddedToFavourite: (state) => {
    return state.products.filter((el) => {
      return el.isFavourite
    })
  },
  getAddedProductPrice: (state) => {
    return getPriceOfProduct(state.products)
  },
  buyLabelOfAddedProducts: (state) => {
    const productsAdded = state.productsAdded
    const finalPrice = getPriceOfProduct(productsAdded)
    const productLength = productsAdded ? productsAdded.length : 0
    let productLabel
    if (productLength > 1) {
      productLabel = 'types of products'
    } else {
      productLabel = 'product'
    }
    return `Buy ${productLength} ${productLabel} at ${finalPrice} Taka`
  },
  getProductById: (state) => (id) => {
    return state.products.find((product) => product.id === id)
  },
  isUserLoggedIn: (state) => {
    return state.userInfo.isLoggedIn
  },
  isUserSignedUp: (state) => {
    return state.userInfo.isSignedUp
  },
  getUserName: (state) => {
    return state.userInfo.name
  },
  isLoginModalOpen: (state) => {
    return state.systemInfo.openLoginModal
  },
  isSignupModalOpen: (state) => {
    return state.systemInfo.openSignupModal
  },
  isCheckoutModalOpen: (state) => {
    return state.systemInfo.openCheckoutModal
  },
  quantity: (state) => {
    return state.products.quantity
  },
}

export const mutations = {
  addToCart: (state, id) => {
    state.products.forEach((el) => {
      if (id === el.id) {
        el.isAddedToCart = true
      }
    })
  },
  setAddedBtn: (state, data) => {
    state.products.forEach((el) => {
      if (data.id === el.id) {
        el.isAddedBtn = data.status
      }
    })
  },
  removeFromCart: (state, id) => {
    state.products.forEach((el) => {
      if (id === el.id) {
        el.isAddedToCart = false
      }
    })
  },
  removeProductsFromFavourite: (state) => {
    state.products.filter((el) => {
      el.isFavourite = false
    })
  },
  isUserLoggedIn: (state, isUserLoggedIn) => {
    state.userInfo.isLoggedIn = isUserLoggedIn
  },
  isUserSignedUp: (state, isSignedUp) => {
    state.userInfo.isSignedUp = isSignedUp
  },
  setHasUserSearched: (state, hasSearched) => {
    state.userInfo.hasSearched = hasSearched
  },
  setUserName: (state, name) => {
    state.userInfo.name = name
  },
  setProductTitleSearched: (state, titleSearched) => {
    state.userInfo.productTitleSearched = titleSearched
  },
  showLoginModal: (state, show) => {
    state.systemInfo.openLoginModal = show
  },
  showSignupModal: (state, show) => {
    state.systemInfo.openSignupModal = show
  },
  showCheckoutModal: (state, show) => {
    state.systemInfo.openCheckoutModal = show
  },
  addToFavourite: (state, id) => {
    state.products.forEach((el) => {
      if (id === el.id) {
        el.isFavourite = true
      }
    })
  },
  removeFromFavourite: (state, id) => {
    state.products.forEach((el) => {
      if (id === el.id) {
        el.isFavourite = false
      }
    })
  },
  quantity: (state, data) => {
    state.products.forEach((el) => {
      if (data.id === el.id) {
        el.quantity = data.quantity
      }
    })
  },
  clearSelectedCharts(state) {
    state.products.forEach((el) => {
      el.isAddedToCart = false
    })
  },
  SET_PRODUCTS(state, products) {
    state.products = products
  },
}

export const actions = {
  async getProducts({ commit, state }) {
    if (state.products.length === 0) {
      const products = await ProductService.index()
      commit('SET_PRODUCTS', products)
      return products
    } else return state.products
  },
  async fetchProduct({ commit, state, rootState }, { id }) {
    if (state.products.length === 0) {
      await store.dispatch('products/getProducts')
    }
    const matchedProduct = state.products.find((product) => product.id === id)
    return Promise.resolve(matchedProduct)
  },
}
export const state = () => ({
  products: [],
  userInfo: {
    isLoggedIn: false,
    isSignedUp: false,
    hasSearched: false,
    name: '',
    productTitleSearched: '',
  },
  systemInfo: {
    openLoginModal: false,
    openSignupModal: false,
    openCheckoutModal: false,
  },
})

const getPriceOfProduct = function(products) {
  if (!products || products.length === 0) return 0
  const pricesArray = []
  products
    .filter((el) => el.isAddedToCart)
    .forEach((product) => {
      pricesArray.push(product.price * product.quantity)
    })
  pricesArray.reduce((a, b) => a + b, 0)
  return pricesArray.reduce((a, b) => a + b, 0)
}
const productAddedList = function(products) {
  return products.filter((el) => {
    return el.isAddedToCart
  })
}

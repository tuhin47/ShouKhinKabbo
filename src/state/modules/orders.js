import OrderService from '@src/services/OrderService'

export const state = {
  ordercount: 0,
}

export const getters = {}

export const mutations = {
  async PLACE_ORDER({ state }) {
    state.ordercount = state.ordercount + 1
  },
}

export const actions = {
  async placeOrder({ commit, state }, { info, orders }) {
    if (state.ordercount < 10) {
      await OrderService.placeOrder(info, orders)
      await commit('PLACE_ORDER', { info, orders })
      return true
    } else {
      console.error('Order limit exeed')
      return false
    }
  },
}

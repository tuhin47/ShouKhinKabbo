export const state = {
  menuActive: false,
}

export const getters = {
  getMenuState(state) {
    return state.menuActive
  },
}

export const mutations = {
  TOGGLE_MENU(state) {
    state.menuActive = !state.menuActive
  },
}

export const actions = {
  togglemenu({ commit }) {
    commit('TOGGLE_MENU')
  },
}

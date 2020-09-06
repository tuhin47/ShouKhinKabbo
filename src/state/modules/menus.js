export const state = {
  menuActive: false,
  menuBars: [],
  // [
  //   {
  //     serial: 1,
  //     title: 'সকল',
  //   },
  //   {
  //     serial: 2,
  //     title: 'গ্লাস',
  //   },
  //   {
  //     serial: 3,
  //     title: 'কাপ',
  //   },
  //   {
  //     serial: 4,
  //     title: 'বাটি-প্লেট',
  //   },
  //   {
  //     serial: 5,
  //     title: 'অন্যান্য',
  //   },
  // ],
}

export const getters = {
  getMenuState(state) {
    return state.menuActive
  },
  getMenuStateClass(state) {
    return state.menuActive ? ' active' : ''
  },
  getMenuBars(state) {
    return state.menuBars
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

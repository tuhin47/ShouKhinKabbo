import Vue from 'vue'
import Vuex from 'vuex'
import dispatchActionForAllModules from '@utils/dispatch-action-for-all-modules'
import createPersistedState from 'vuex-persistedstate'
import Cookies from 'js-cookie'

import modules from './modules'

Vue.use(Vuex)

const minutes =
  process.env.NODE_ENV !== 'production'
    ? new Date(new Date().getTime() + (1 / 3) * 60 * 1000)
    : new Date(new Date().getTime() + 60 * 60 * 1000)
const store = new Vuex.Store({
  modules,
  /* eslint-disable */
  plugins: [
    createPersistedState({
      storage: {
        getItem: (key) => Cookies.get(key),
        setItem: (key, value) => Cookies.set(key, value, { expires: minutes }),
        removeItem: (key) => Cookies.remove(key),
      },
    }),
  ],
  // Enable strict mode in development to get a warning
  // when mutating state outside of a mutation.
  // https://vuex.vuejs.org/guide/strict.html
  strict: process.env.NODE_ENV !== 'production',
})

export default store

// Automatically run the `init` action for every module,
// if one exists.
dispatchActionForAllModules('init')

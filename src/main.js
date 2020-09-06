import '@babel/polyfill'
import 'mutationobserver-shim'
import Vue from 'vue'
import './plugins/bootstrap-vue'
import router from '@router'
import store from '@state/store'
import VueFbCustomerChat from 'vue-fb-customer-chat'
import { firestorePlugin } from 'vuefire'
import App from './app.vue'
import '@components/_globals'

// Don't warn about using the dev version of Vue in development.
Vue.config.productionTip = process.env.NODE_ENV === 'production'

// If running inside Cypress...
if (process.env.VUE_APP_TEST === 'e2e') {
  // Ensure tests fail when Vue emits an error.
  Vue.config.errorHandler = window.Cypress.cy.onUncaughtException
}
Vue.use(firestorePlugin)

Vue.use(VueFbCustomerChat, {
  page_id: 100529931400034,
  theme_color: '#333333',
  locale: 'en_US',
  logged_in_greeting:
    'শৌখিন কাব্য পেজের পক্ষ থেকে আপনাকে জানাচ্ছি আন্তরিক শুভেচ্ছা',
  logged_out_greeting:
    'শৌখিন কাব্য পেজের পক্ষ থেকে আপনাকে জানাচ্ছি আন্তরিক শুভেচ্ছা',
})
const app = new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

// If running e2e tests...
if (process.env.VUE_APP_TEST === 'e2e') {
  // Attach the app to the window, which can be useful
  // for manually setting state in Cypress commands
  // such as `cy.logIn()`.
  window.__app__ = app
}

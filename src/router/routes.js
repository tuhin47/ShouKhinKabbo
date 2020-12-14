import store from '@state/store'

export default [
  {
    path: '/',
    name: 'main',
    component: () => lazyLoadView(import('@views/main-content.vue')),
  },
  {
    path: '/product/:id',
    name: 'product-details',
    component: () => lazyLoadView(import('@views/product-details.vue')),
    meta: {
      tmp: {},
      beforeResolve(routeTo, routeFrom, next) {
        store
          .dispatch('products/fetchProduct', { id: routeTo.params.id })
          .then((product) => {
            routeTo.meta.tmp.product = product
            next()
          })
          .catch(() => {
            next({ name: '404', params: { resource: 'User' } })
          })
      },
    },
    props: (route) => ({ product: route.meta.tmp.product }),
  },
  {
    path: '/order',
    name: 'place-order',
    component: () => lazyLoadView(import('@views/place-order.vue')),
  },
  {
    path: '/404',
    name: '404',
    component: require('@views/_404.vue').default,
    props: true,
  },
  {
    path: '*',
    redirect: '/',
  },
]

function lazyLoadView(AsyncView) {
  const AsyncHandler = () => ({
    component: AsyncView,
    loading: require('@views/_loading.vue').default,
    delay: 400,
    error: require('@views/_timeout.vue').default,
    timeout: 10000,
  })

  return Promise.resolve({
    functional: true,
    render(h, { data, children }) {
      return h(AsyncHandler, data, children)
    },
  })
}

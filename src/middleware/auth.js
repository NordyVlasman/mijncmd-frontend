export default function auth ({ next, store }) {
  store.dispatch('fetchUser').then(() => {
    console.log(store.getters['check'])
    if (!store.getters['check']) {
      console.log('hoi')
      return next({
        name: 'login'
      })
    }
  })
  return next()
}

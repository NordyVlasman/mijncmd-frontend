export default function auth ({ next, store }) {
  store.dispatch('auth/fetchUser').then(() => {
    console.log(store.getters['auth/check'])
    if (!store.getters['auth/check']) {
      console.log('hoi')
      return next({
        name: 'login'
      })
    }
  })
  return next()
}

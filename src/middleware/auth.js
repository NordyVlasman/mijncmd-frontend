export default function auth ({ next, store }) {
  store.dispatch('auth/fetchUser').then(() => {
    if (!store.getters['auth/check']) {
      console.log('hoi')
      return next({
        name: 'login'
      })
    } else {
      return next()
    }
  }).catch(() => {
    console.log("ERROR")
    return next({
      name: 'welcome'
    })
  })
}

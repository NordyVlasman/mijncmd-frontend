export default function gyest ({ next, store }) {
  store.dispatch('auth/fetchUser').then(() => {
    if (!store.getters['auth/check']) {
      return next()
    } else {
      return next({
        name: 'welcome'
      })
    }
  }).catch(() => {
    return next()
  })
}

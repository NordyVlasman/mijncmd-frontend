export default function guest ({ next, store }) {
  if (store.getters['check']) {
    store.dispatch('fetchUser').then(() => {
      if (store.getters['check']) {
        next({ name: 'welcome' })
      } else {
        next()
      }
    })
  } else {
    next()
  }
}

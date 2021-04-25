export default function guest ({ next, store }) {
  store.dispatch('fetchUser').then(() => {
    console.log("Finished")
    console.log(store.getters['check'])
    if (store.getters['check']) {
      next({ name: 'welcome' })
    } else {
      next()
    }
  })
}

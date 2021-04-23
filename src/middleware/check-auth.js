export default async function checkAuth ({ next, store }) {
  if (!store.getters['check'] && store.getters['auth/token']) {
    try {
      await store.dispatch('fetchUser')
    } catch (e) {
      console.log(e)
    }
  }

  next()
}

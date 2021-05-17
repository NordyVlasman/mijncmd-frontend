export default function ({ store, app, redirect, route }) {
  const hasToken = Boolean(app.$apolloHelpers.getToken())

  if (!hasToken) {
    if (route.path === 'login') {
      //
    } else {
      return redirect('/auth/login')
    }
  }
}

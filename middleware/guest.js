export default function ({ store, app, redirect, route }) {
  const hasToken = Boolean(app.$apolloHelpers.getToken())

  if (hasToken) {
    return redirect('/')
  }
}

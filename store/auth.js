import Cookies from 'js-cookie'
import GetUserQuery from '@/graphql/getUser.gql'

export const state = () => ({
  currentUser: {},
  error: {},
})

export const getters = {
  me: (state) => state.currentUser,
}

export const actions = {
  async getUser({ commit }) {
    const client = this.app.apolloProvider.defaultClient
    await client
      .query({
        query: GetUserQuery,
      })
      .then((data) => {
        commit('setUser', data.data.user)
      })
      .catch((error) => {
        commit('setError', error)
      })
  },
}

export const mutations = {
  setUser(state, user) {
    state.currentUser = user
    Cookies.set('user', user)
  },
  logout(state) {
    state.currentUser = null
    Cookies.set('user', null)
  },
  setError(state, error) {
    state.error = error
  },
}

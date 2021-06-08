import GetUersQuery from '@/graphql/users.gql'
import GetPostQuery from '@/graphql/post.gql'

export default {
  async FETCH_USERS({ commit }) {
    const client = this.app.apolloProvider.defaultClient
    await client
      .query({
        query: GetUersQuery,
      })
      .then((data) => {
        commit('SET_USERS', data.data.users)
      })
      .catch((error) => {
        commit('SET_ERROR', error)
      })
  },
  async FETCH_POST({ commit }, slug) {
    const client = this.app.apolloProvider.defaultClient
    await client
      .query({
        query: GetPostQuery,
        variables: {
          slug,
        },
      })
      .then((data) => {
        commit('SET_POST', data.data.postSlug)
      })
  },
}

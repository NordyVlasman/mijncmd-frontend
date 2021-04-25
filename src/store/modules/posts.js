import { apolloClient } from '../../graphql/client'
import * as types from '../mutation-types'
import * as graphqlMutations from '../../graphql/mutations/postsMutations'

const postsModule = {
  state: () => ({
    posts: null
  }),

  mutations: {
    [types.FETCH_POSTS_SUCCESS] (state, posts) {
      state.posts = posts
    },
    [types.FETCH_POSTS_FAILURE] (state) {
      state.error = ''
    }
  },

  actions: {
    async getPosts ({ commit, dispatch }) {
      apolloClient.query({
        query: graphqlMutations.getAllPostsQuery
      }).then((data) => {
        const payload = data.data.getPosts
        commit(types.FETCH_POSTS_SUCCESS, payload)
      })
    }
  },

  getters: {
    posts: state => state.posts,
    checkPosts: state => state.posts !== null
  }
}

export default postsModule

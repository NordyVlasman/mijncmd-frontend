import { apolloClient } from '../../graphql/client'
import * as types from '../mutation-types'
import * as graphqlMutations from '../../graphql/mutations/postsMutations'

const postsModule = {
  namespaced: true,

  state: () => ({
    posts: null,
    postError: null
  }),

  mutations: {
    [types.FETCH_POSTS_SUCCESS] (state, posts) {
      state.posts = posts
    },
    [types.FETCH_POSTS_FAILURE] (state) {
      state.postError = state
    }
  },

  actions: {
    async createPost ({ commit, dispatch }, payload) {
      apolloClient.mutate({
        mutation: graphqlMutations.createPostMutation,
        variables: {
          title: payload.title,
          slug: payload.slug,
          description: payload.description,
          body: payload.body
        }
      }).then((data) => {
        console.log(data)
      }).catch((error) => {
        console.log(error)
      })
    },
    async getPosts ({ commit, dispatch }) {
      apolloClient.query({
        query: graphqlMutations.getAllPostsQuery
      }).then((data) => {
        const payload = data.data.getPosts
        commit(types.FETCH_POSTS_SUCCESS, payload)
      }).catch((error) => {
        console.log(error)
        commit(types.FETCH_POSTS_FAILURE, error)
      })
    }
  },

  getters: {
    posts: state => state.posts,
    checkPosts: state => state.posts !== null,
    errors: state => state.postError
  }
}

export default postsModule

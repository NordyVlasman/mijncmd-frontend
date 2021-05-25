import GetPostsQuery from '@/graphql/posts.gql'
import GetPostQuery from '@/graphql/post.gql'
import CreatePostMutation from '@/graphql/createPost.gql'

export default {
  async FETCH_POSTS({ commit }) {
    const client = this.app.apolloProvider.defaultClient
    await client
      .query({
        query: GetPostsQuery,
      })
      .then((data) => {
        commit('SET_POSTS', data.data.posts)
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
  async CREATE_POST({ commit }, formData) {
    const client = this.app.apolloProvider.defaultClient
    await client
      .mutate({
        mutation: CreatePostMutation,
        variables: {
          body: formData.body,
          description: formData.description,
          title: formData.title,
          slug: formData.slug,
          cover: formData.cover,
        },
      })
      .then((data) => {
        if (data.data.createPost.success) {
          this.$store.dispatch('post/FETCH_POSTS')
          this.$router.push('/')
        }
      })
  },
}

<template>
  <div>
    <h1 class="text-2xl font-bold">{{ post.title }}</h1>
    <div class="bg-gray-100">
      <button @click="likePost">Like</button>
    </div>
    <p>{{ post.likesCount }}</p>
    <div class="flex items-center py-2">
      <img
        :src="`http://localhost:4000` + post.author.avatarUrl"
        :alt="post.author.name"
        class="w-12 h-12 rounded-full"
      />
      <p class="ml-2 font-semibold text-md">{{ post.author.name }}</p>
    </div>
    <img
      :src="`http://localhost:4000` + post.coverUrl"
      :alt="`Image` + post.title"
    />
    <block-renderer :content="body" class="prose" />

    <div class="text-white">
      <div v-for="comment in post.comments" :key="comment.id">
        {{ comment.author.name }}
        {{ comment.content }}
        <button
          @click="upvoteComment(comment.id)"
          :class="comment.hasUpvoted ? 'text-blue-500' : 'text-white'"
        >
          +
        </button>
        {{ comment.upvoteCount }}
        <button
          @click="upvoteComment(comment.id)"
          :class="!comment.hasUpvoted ? 'text-blue-500' : 'text-white'"
        >
          -
        </button>
      </div>
    </div>

    <div>
      <textarea v-model="form.comment" />
      <button @click="sendFeedback">Feedback geven</button>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LikeMutation from '@/graphql/likePost.gql'
import UpvoteCommentMutation from '@/graphql/upvoteCommentMutation.gql'
import CommentMutation from '@/graphql/createCommentMutation.gql'
import BlockRenderer from '~/components/Block'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { BlockRenderer },
  data() {
    return {
      form: {
        comment: '',
      },
    }
  },
  async fetch({ store, params }) {
    await store.dispatch('post/FETCH_POST', params.slug)
  },
  computed: {
    ...mapState({
      post: (state) => state.post.post,
    }),
    body() {
      return JSON.parse(this.post.body)
    },
  },
  methods: {
    async sendFeedback() {
      await this.$apollo
        .mutate({
          mutation: CommentMutation,
          variables: {
            postId: this.post.id,
            content: this.form.comment,
          },
        })
        .then(({ data }) => {
          this.$forceUpdate()
        })
    },
    async upvoteComment(commentId) {
      await this.$apollo
        .mutate({
          mutation: UpvoteCommentMutation,
          variables: {
            commentId,
          },
        })
        .then(({ data }) => {
          // eslint-disable-next-line no-console
          console.log(data)
        })
    },
    async likePost() {
      await this.$apollo
        .mutate({
          mutation: LikeMutation,
          variables: {
            postId: this.post.id,
          },
        })
        .then(({ data }) => {
          // eslint-disable-next-line no-console
          console.log(data)
        })
    },
  },
}
</script>

<template>
  <div>
    <div class="w-full flex justify-between">
      <div class="flex items-center py-2">
        <img
          :src="$config.baseURL + post.author.avatarUrl"
          :alt="post.author.name"
          class="w-12 h-12 rounded-full"
        />
        <div class="text-darkBackground dark:text-gray-400 ml-3">
          <h3>{{ post.author.name }}</h3>
          <p>{{ post.author.title }}</p>
        </div>
      </div>
      <div class="self-center">
        <span
          class="rounded-lg inline-flex p-3"
          :class="
            post.hasLiked ? 'bg-red-100 text-red-800' : 'bg-white text-gray-800'
          "
          @click="likePost"
        >
          <heart-icon />
        </span>
      </div>
    </div>
    <h1 class="text-2xl text-black dark:text-white mt-9 font-semibold mb-4">
      {{ post.title }}
    </h1>

    <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3 mb-8">
      <div class="grid grid-cols-1 gap-4 lg:col-span-2">
        <block-renderer
          :content="body"
          class="
            prose
            dark:prose-dark
            text-left
            content-start
            bg-white
            dark:bg-darkColor
            rounded-md
          "
        />
        <div class="flex gap-5 w-full">
          <div class="bg-white flex-grow py-2 px-4">
            <div class="flex items-center">
              <img
                :src="$config.baseURL + post.author.avatarUrl"
                :alt="post.author.name"
                class="w-12 h-12 rounded-full"
              />
              <div class="text-darkBackground dark:text-gray-400 ml-3">
                <h3>{{ post.author.name }}</h3>
                <p class="text-gray-500">{{ post.author.title }}</p>
              </div>
            </div>
            <div class="py-4">
              <h4 class="text-gray-800">Creative fields</h4>
              <div class="flex justify-between mt-1">
                <div class="flex space-x-2" :if="post.author.skills">
                  <div v-for="skill in post.author.skills" :key="skill.id">
                    <SkillTag :skill="skill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white flex-grow py-2 px-4">
            <h2 class="font-semibold">Tools</h2>
            <ul>
              <li
                v-for="product in post.products"
                :key="product.id"
                class="text-gray-500"
              >
                <p>{{ product.name }}</p>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <section aria-labelledby="timeline-title" class="grid grid-cols-1 gap-4">
        <div>
          <div class="">
            <ul class="space-y-4">
              <li
                v-for="comment in post.comments"
                :key="comment.id"
                class="bg-white rounded-md text-black px-2 py-3"
              >
                <div class="flex space-x-3">
                  <div class="flex flex-col items-center">
                    <button class="text-xl" @click="upvoteComment(comment.id)">
                      <upvote-icon
                        :class="
                          comment.hasUpvoted
                            ? 'fill-current text-red-500'
                            : 'fill-current text-gray-400'
                        "
                      />
                    </button>
                    <span
                      :class="
                        comment.hasUpvoted ? 'text-red-500' : 'text-gray-400'
                      "
                      >{{ comment.upvoteCount }}</span
                    >
                    <button class="text-xl">
                      <downvote-icon
                        class="fill-current"
                        :class="
                          !comment.hasUpvoted
                            ? 'text-gray-400'
                            : 'text-gray-400'
                        "
                      />
                    </button>
                  </div>
                  <div class="flex-1">
                    <p class="text-md text-gray-700">
                      {{ comment.content }}
                    </p>
                  </div>
                </div>
                <div class="border-1 border-t mt-4 py-1">
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-10 w-10">
                        <img
                          class="h-10 w-10 rounded-full"
                          :src="$config.baseURL + comment.author.avatarUrl"
                          alt=""
                        />
                      </div>
                      <div class="ml-4">
                        <div class="text-sm font-medium text-gray-900">
                          {{ comment.author.name }}
                        </div>
                        <div class="text-sm text-gray-500">
                          {{ $moment(comment.inserted_at).fromNow() }}
                        </div>
                      </div>
                    </div>
                  </td>
                </div>
              </li>
              <li class="bg-white rounded-md">
                <form action="#" @submit.prevent="postFeedback">
                  <div class="flex px-4 py-5 space-x-3">
                    <div class="flex-shrink-0 h-10 w-10">
                      <img
                        class="h-10 w-10 rounded-full object-fill"
                        :src="$config.baseURL + me.avatarUrl"
                        alt=""
                      />
                    </div>
                    <div class="ml-4 flex-grow">
                      <textarea
                        id="about"
                        v-model="form.comment"
                        name="about"
                        placeholder="Wat vind je ervan?"
                        rows="6"
                        class="
                          shadow-sm
                          focus:ring-gray-500 focus:border-gray-500
                          block
                          w-full
                          sm:text-sm
                          border-none
                          rounded-md
                          bg-gray-100
                          resize-none
                        "
                      ></textarea>
                    </div>
                  </div>
                  <div class="w-full flex flex-row-reverse px-4 pb-4">
                    <button
                      type="submit"
                      class="
                        inline-flex
                        items-center
                        px-7
                        py-2
                        border border-transparent
                        text-sm
                        rounded-md
                        shadow-sm
                        text-white
                        bg-gray-800
                        hover:bg-gray-700
                        focus:outline-none
                        focus:ring-2
                        focus:ring-offset-2
                        focus:ring-gray-700
                      "
                    >
                      Verstuur feedback
                    </button>
                  </div>
                </form>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import LikeMutation from '@/graphql/post/likePost.gql'
import DislikeMutation from '@/graphql/post/dislikePost.gql'
import UpvoteCommentMutation from '@/graphql/comment/upvoteCommentMutation.gql'
import CommentMutation from '@/graphql/comment/createCommentMutation.gql'
import HeartIcon from '~/components/HeartIcon'
import UpvoteIcon from '~/components/UpvoteIcon'
import DownvoteIcon from '~/components/DownvoteIcon'
import BlockRenderer from '~/components/post/BlockRenderer'
import SkillTag from '~/components/skill/SkillTag'

export default {
  components: { BlockRenderer, HeartIcon, UpvoteIcon, DownvoteIcon, SkillTag },
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
  head() {
    return {
      meta: [
        {
          hid: 'twitter:title',
          name: 'twitter:title',
          content: this.post.title,
        },
        {
          hid: 'twitter:description',
          name: 'twitter:description',
          content: this.post.title,
        },
        {
          hid: 'twitter:image',
          name: 'twitter:image',
          content: process.env.BASE_URL + this.post.coverUrl,
        },
        {
          hid: 'twitter:image:alt',
          name: 'twitter:image:alt',
          content: process.env.BASE_URL + this.post.coverUrl,
        },
        {
          hid: 'og:title',
          property: 'og:title',
          content: this.post.title,
        },
        {
          hid: 'og:description',
          property: 'og:description',
          content: this.post.title,
        },
        {
          hid: 'og:image',
          property: 'og:image',
          content: process.env.BASE_URL + this.post.coverUrl,
        },
        {
          hid: 'og:image:secure_url',
          property: 'og:image:secure_url',
          content: process.env.BASE_URL + this.post.coverUrl,
        },
        {
          hid: 'og:image:alt',
          property: 'og:image:alt',
          content: this.post.title,
        },
      ],
    }
  },
  computed: {
    ...mapState({
      post: (state) => state.post.post,
      me: (state) => state.auth.currentUser,
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
          this.$store.dispatch('post/FETCH_POST', this.post.slug)
        })
        .catch(() => {
          this.$store.dispatch('post/FETCH_POST', this.post.slug)
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
          this.$store.dispatch('post/FETCH_POST', this.post.slug)
        })
    },
    async postFeedback() {
      await this.$apollo
        .mutate({
          mutation: CommentMutation,
          variables: {
            postId: this.post.id,
            content: this.form.comment,
          },
        })
        .then(({ data }) => {
          this.$store.dispatch('post/FETCH_POST', this.post.slug)
        })
    },
    async likePost() {
      if (!this.post.hasLiked) {
        await this.$apollo
          .mutate({
            mutation: LikeMutation,
            variables: {
              postId: this.post.id,
            },
          })
          .then(({ data }) => {
            this.$store.dispatch('post/FETCH_POST', this.post.slug)
          })
      } else {
        this.$apollo
          .mutate({
            mutation: DislikeMutation,
            variables: {
              postId: this.post.id,
            },
          })
          .then(({ data }) => {
            this.$store.dispatch('post/FETCH_POST', this.post.slug)
          })
      }
    },
  },
}
</script>

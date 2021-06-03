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
          <p>Software developer</p>
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

    <div class="grid grid-cols-1 gap-4 items-start lg:grid-cols-3">
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
            px-2
            py-2
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
                <p class="text-gray-500">Software developer</p>
              </div>
            </div>
            <div class="py-4">
              <h4 class="text-gray-800">Creative fields</h4>
              <div class="flex justify-between mt-1">
                <div class="flex space-x-2" :if="post.skills">
                  <div v-for="skill in post.skills" :key="skill.id">
                    <SkillTag :skill="skill" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bg-white flex-grow py-2 px-4">
            <h2 class="font-semibold">Tools</h2>
            <ul>
              <li class="text-gray-500">
                <p>Photoshop</p>
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
                        <div class="text-sm text-gray-500">2 uur geleden</div>
                      </div>
                    </div>
                  </td>
                </div>
              </li>
              <li class="bg-white rounded-md">
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
                        focus:ring-gray-500
                        focus:border-gray-500
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
                    type="button"
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
                      focus:ring-2 focus:ring-offset-2 focus:ring-gray-700
                    "
                    @click="postFeedback"
                  >
                    Verstuur feedback
                  </button>
                </div>
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
import LikeMutation from '@/graphql/likePost.gql'
import DislikeMutation from '@/graphql/dislikePost.gql'
import UpvoteCommentMutation from '@/graphql/upvoteCommentMutation.gql'
import CommentMutation from '@/graphql/createCommentMutation.gql'
import HeartIcon from '@/components/icons/HeartIcon'
import UpvoteIcon from '@/components/icons/UpvoteIcon'
import DownvoteIcon from '@/components/icons/DownvoteIcon'
import BlockRenderer from '~/components/Block'
import SkillTag from '~/components/SkillTag'

export default {
  // eslint-disable-next-line vue/no-unused-components
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
          // eslint-disable-next-line no-console
          console.log('commented')
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

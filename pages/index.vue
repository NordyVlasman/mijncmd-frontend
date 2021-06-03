<template>
  <div class="mt-1">
    <h1 class="text-2xl text-black font-light dark:text-gray-300">
      Bekijk hieronder wat <span class="font-bold">andere studenten</span>
      hebben gemaakt
    </h1>
    <div class="-mx-4 flex flex-wrap">
      <div
        v-for="post in posts"
        :key="post.id"
        class="w-full flex flex-col p-4 sm:w-1/2 lg:w-1/4"
      >
        <post-card :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import PostCard from '~/components/PostCard'

export default {
  components: { PostCard },
  middleware: 'authenticated',
  async fetch({ store, params }) {
    await store.dispatch('post/FETCH_POSTS')
  },
  computed: {
    ...mapState({
      posts: (state) => state.post.posts,
      errors: (state) => state.post.errors,
    }),
  },
}
</script>

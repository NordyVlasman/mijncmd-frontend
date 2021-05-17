<template>
  <div class="mt-2">
    <h1 class="text-2xl">
      Bekijk hieronder wat <span class="font-bold">andere studenten</span>
      hebben gemaakt
    </h1>
    <div
      class="
        py-4
        grid grid-cols-2
        gap-x-4 gap-y-4
        sm:grid-cols-3
        sm:gap-x-6
        lg:grid-cols-4
        xl:gap-x-8
      "
    >
      <div v-for="post in posts" :key="post.id">
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
    }),
  },
}
</script>

<template>
  <div>
    <h1 class="text-2xl font-bold">{{ post.title }}</h1>
    <div class="flex items-center py-2">
      <img
        :src="`http://localhost:4000` + post.author.avatarUrl"
        :alt="post.author.name"
        class="w-12 h-12 rounded-full"
      />
      <p class="ml-2 font-semibold text-md">{{ post.author.name }}</p>
    </div>
    <img
      :src="`http://localhost:4000` + post.cover_url"
      :alt="`Image` + post.title"
    />
    <p class="font-semibold">{{ post.description }}</p>
    <block-renderer :content="body" class="prose" />
  </div>
</template>

<script>
import { mapState } from 'vuex'
import BlockRenderer from '~/components/Block'

export default {
  // eslint-disable-next-line vue/no-unused-components
  components: { BlockRenderer },
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
}
</script>

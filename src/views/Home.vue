<template>
  <div class="home">
        <main class="relative flex-1 overflow-y-auto focus:outline-none">
          <div class="py-6">
            <div class="grid grid-cols-4 md:grid-cols-4">
              <!-- card 2 -->
              <div :if='posts' v-for="post in posts" :key="post.id">
                <post-card
                  :post="post"
                />
              </div>
            </div>
          </div>
        </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

import PostCard from '@/components/post/PostCard'

export default {
  layout: 'base',
  name: 'Home',
  computed: mapGetters({
    posts: 'posts/posts',
    hasPosts: 'posts/checkPosts'
  }),
  components: {
    PostCard
  },
  mounted () {
    if (!this.hasPosts) {
      this.$store.dispatch('posts/getPosts')
    }
  }
}
</script>

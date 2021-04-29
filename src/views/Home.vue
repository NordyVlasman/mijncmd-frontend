<template>
  <div class="home">
        <main class="relative flex-1 overflow-y-auto focus:outline-none">
          <div class="py-6">
            <div class="grid grid-cols-4 md:grid-cols-4">
              <!-- card 2 -->
              <div :if='posts' v-for="post in posts" :key="post.id">
                <div class="col-span-1 p-4">
                <article class="overflow-hidden rounded-lg shadow-lg">
                  <a href="#">
                    <img alt="Placeholder" class="block w-full h-auto" src="https://picsum.photos/536/354">
                  </a>
                  <header class="flex p-2 md:p-4">
                    <img alt="Placeholder" class="inline w-12 h-12 mr-2 rounded-full"
                      :src="`http://localhost:4000${post.author.avatar_url}`">
                    <div class="inline">
                      <router-link :to="{ name: 'post', params: { postId: post.id, postSlug: post.slug }}" class="text-2xl">
                        {{ post.title }}
                      </router-link>
                      <p class="text-sm text-blue-600">
                        {{ post.author.name }}
                      </p>
                    </div>
                  </header>
                  <div class="flex justify-between p-2 space-x-8 md:p-4">
                    <div class="flex space-x-2">
                      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800" :if="post.skills" v-for="skill in post.skills" :key="skill.id">
                        {{skill.name}}
                      </span>
                    </div>
                    <div class="flex space-x-2">
                      <span>2 🔥</span>
                      <span>4 🤌🏻</span>
                    </div>
                  </div>
                </article>
              </div>
              </div>
            </div>
          </div>
        </main>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  layout: 'base',
  name: 'Home',
  computed: mapGetters({
    posts: 'posts/posts',
    hasPosts: 'posts/checkPosts'
  }),
  mounted () {
    if (!this.hasPosts) {
      this.$store.dispatch('posts/getPosts')
    }
  }
}
</script>

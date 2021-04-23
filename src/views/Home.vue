<template>
  <div class="home">
    <h1 class="text-2xl font-bold">Posts</h1>
    <ul>
      <div :if="posts" v-for="post in posts" :key="post.id">
        <li>
          {{ post.title }}
        </li>
      </div>
    </ul>
  </div>
</template>

<script>
import store from '@/store'

export default {
  layout: 'base',
  name: 'Home',
  computed: {
    posts () {
      return store.getters['posts']
    }
  },
  mounted () {
    if (store.getters['checkPosts']) {
      store.dispatch('getPosts')
    }
  }
}
</script>

<template>
  <div class="p-6">
    <h1 class="text-4xl font-semibold">{{ selectedPost.title }}</h1>
    <div class="flex py-4 space-x-2 class">
      <span class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800" :if="selectedPost.skills" v-for="skill in selectedPost.skills" :key="skill.id">
          {{ skill.name }}
      </span>
    </div>
    <p class="font-medium">{{ selectedPost.description }}</p>
    <!-- <markdown-renderer
      class="max-w-full prose"
      :markdown="selectedPost.body"
    /> -->
    <div v-for="block in body.blocks" :key="block.id">
      {{ block }}
    </div>
  </div>
</template>
<script>
import MarkdownRenderer from '@/components/markdown/MarkdownRenderer'
export default {
  components: {
    MarkdownRenderer
  },
  props: [
    'postId',
    'postSlug'
  ],
  data () {
    return {
      selectedPost: null,
      body: null
    }
  },
  created () {
    this.selectedPost = this.$store.getters['posts/posts'].find((post) => post.id === this.postId)
    this.body = JSON.parse(this.selectedPost.body)
  }
}
</script>
